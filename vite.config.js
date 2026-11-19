import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { Buffer } from 'node:buffer'
import { pageMetadata, SITE_URL } from './src/seo/siteMetadata.js'

const staticRoutes = [
  { fileName: 'products.html', path: '/products' },
  { fileName: 'about.html', path: '/about' },
  { fileName: 'contact.html', path: '/contact' },
  { fileName: 'quote.html', path: '/contact' },
  { fileName: 'legacy.html', path: '/about' },
]

function escapeHtmlAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceMetaContent(html, key, content) {
  const tagPattern = new RegExp(
    `<meta\\s+(?:name|property)="${key}"[^>]*>`,
    'i',
  )
  const tag = html.match(tagPattern)?.[0]
  if (!tag || !/\bcontent="/i.test(tag)) {
    throw new Error(`Missing content metadata tag: ${key}`)
  }

  const updatedTag = tag.replace(
    /\bcontent="[^"]*"/i,
    `content="${escapeHtmlAttribute(content)}"`,
  )
  return html.replace(tagPattern, updatedTag)
}

function routeMetadataPages() {
  return {
    name: 'route-metadata-pages',
    enforce: 'post',
    apply: 'build',
    generateBundle(_options, bundle) {
      const indexHtml = bundle['index.html']
      if (!indexHtml || indexHtml.type !== 'asset') {
        throw new Error('Unable to generate route metadata pages: index.html is missing.')
      }

      const source =
        typeof indexHtml.source === 'string'
          ? indexHtml.source
          : Buffer.from(indexHtml.source).toString('utf8')

      for (const route of staticRoutes) {
        const metadata = pageMetadata[route.path]
        let html = source.replace(
          /<title>[\s\S]*?<\/title>/i,
          `<title>${escapeHtmlAttribute(metadata.title)}</title>`,
        )

        for (const [key, content] of [
          ['description', metadata.description],
          ['robots', 'index, follow'],
          ['og:title', metadata.title],
          ['og:description', metadata.description],
          ['og:url', `${SITE_URL}${route.path}`],
          ['twitter:title', metadata.title],
          ['twitter:description', metadata.description],
        ]) {
          html = replaceMetaContent(html, key, content)
        }

        const canonicalPattern = /<link rel="canonical" href="[^"]+"\s*\/>/i
        if (!canonicalPattern.test(html)) {
          throw new Error('Missing canonical link in index.html.')
        }
        html = html.replace(
          canonicalPattern,
          `<link rel="canonical" href="${SITE_URL}${route.path}" />`,
        )

        if (route.path !== '/') {
          html = html.replace(
            /<script type="application\/ld\+json" id="organization-schema">[\s\S]*?<\/script>\s*/i,
            '',
          )
        }

        this.emitFile({
          type: 'asset',
          fileName: route.fileName,
          source: html,
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), routeMetadataPages()],
})
