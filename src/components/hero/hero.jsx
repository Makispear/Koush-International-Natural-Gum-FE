import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Carousel from "../carousel/carousel";
import "./hero.css";

export default function Hero() {
  const heroImages = ["/pic1.jpeg", "/pic2.jpeg", "/pic3.jpeg"];

  return (
    <section className="hero-wrapper">
      <Carousel images={heroImages} />

      <div
        className="hero-specimen"
        role="img"
        aria-label="Illustration of an acacia branch and glowing Gum Arabic resin"
      >
        <div className="specimen-orbit specimen-orbit-outer" />
        <div className="specimen-orbit specimen-orbit-inner" />
        <svg
          className="specimen-botanical"
          viewBox="0 0 520 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="leaf" x1="180" y1="150" x2="430" y2="420" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D8D69A" />
              <stop offset="1" stopColor="#7E9C63" />
            </linearGradient>
            <linearGradient id="resin" x1="204" y1="326" x2="328" y2="465" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF1BF" stopOpacity=".96" />
              <stop offset=".2" stopColor="#F4CD75" stopOpacity=".95" />
              <stop offset=".68" stopColor="#C98A36" stopOpacity=".88" />
              <stop offset="1" stopColor="#805222" stopOpacity=".92" />
            </linearGradient>
            <linearGradient id="resin-small" x1="340" y1="366" x2="406" y2="437" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF6D8" stopOpacity=".96" />
              <stop offset=".3" stopColor="#EBC16A" stopOpacity=".92" />
              <stop offset="1" stopColor="#A76C2E" stopOpacity=".88" />
            </linearGradient>
            <radialGradient id="resin-glint" cx="0" cy="0" r="1" gradientTransform="matrix(40 62 -51 33 230 350)" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity=".72" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g className="specimen-stem">
            <path d="M92 444C168 370 222 298 274 213C312 151 350 112 411 81" stroke="#D7C48D" strokeOpacity=".8" strokeWidth="2" />
            <path d="M215 330C184 286 148 256 105 236M255 267C220 218 206 174 207 129M293 207C338 195 376 174 407 140M331 151C330 114 319 84 300 59M180 369C145 353 111 345 74 346" stroke="#C1BA81" strokeOpacity=".66" strokeWidth="1.25" />
            <path d="M105 236C72 207 56 196 31 187M143 265C108 258 82 260 53 273M207 129C190 98 174 83 146 65M213 180C181 160 153 151 121 152M407 140C445 129 467 109 486 82M373 175C414 178 445 171 475 153M300 59C291 34 277 18 257 4M323 113C347 84 366 68 389 54M74 346C48 338 28 340 9 353M114 355C88 375 69 395 58 422" stroke="#C1BA81" strokeOpacity=".6" strokeWidth="1" />
          </g>

          <g className="specimen-leaves" fill="url(#leaf)" fillOpacity=".76" stroke="#E7DDAA" strokeOpacity=".48" strokeWidth=".8">
            <ellipse cx="46" cy="194" rx="22" ry="7" transform="rotate(205 46 194)" />
            <ellipse cx="77" cy="216" rx="20" ry="7" transform="rotate(220 77 216)" />
            <ellipse cx="79" cy="267" rx="20" ry="7" transform="rotate(167 79 267)" />
            <ellipse cx="122" cy="253" rx="23" ry="7.5" transform="rotate(196 122 253)" />
            <ellipse cx="153" cy="75" rx="23" ry="7.5" transform="rotate(212 153 75)" />
            <ellipse cx="182" cy="104" rx="23" ry="7.5" transform="rotate(230 182 104)" />
            <ellipse cx="132" cy="161" rx="22" ry="7" transform="rotate(177 132 161)" />
            <ellipse cx="174" cy="169" rx="23" ry="7.5" transform="rotate(204 174 169)" />
            <ellipse cx="471" cy="91" rx="23" ry="7" transform="rotate(321 471 91)" />
            <ellipse cx="444" cy="119" rx="22" ry="7.5" transform="rotate(339 444 119)" />
            <ellipse cx="462" cy="157" rx="23" ry="7" transform="rotate(350 462 157)" />
            <ellipse cx="418" cy="165" rx="23" ry="7.5" transform="rotate(16 418 165)" />
            <ellipse cx="267" cy="20" rx="22" ry="7" transform="rotate(210 267 20)" />
            <ellipse cx="290" cy="43" rx="21" ry="7" transform="rotate(246 290 43)" />
            <ellipse cx="352" cy="78" rx="22" ry="7" transform="rotate(327 352 78)" />
            <ellipse cx="373" cy="102" rx="22" ry="7" transform="rotate(347 373 102)" />
            <ellipse cx="25" cy="350" rx="22" ry="7" transform="rotate(194 25 350)" />
            <ellipse cx="51" cy="370" rx="21" ry="7" transform="rotate(145 51 370)" />
            <ellipse cx="68" cy="411" rx="22" ry="7" transform="rotate(123 68 411)" />
            <ellipse cx="95" cy="375" rx="22" ry="7" transform="rotate(158 95 375)" />
          </g>

          <g className="specimen-resin">
            <path d="M263 315C263 315 196 394 196 430C196 467 225 493 261 493C297 493 326 467 326 430C326 394 263 315 263 315Z" fill="url(#resin)" fillOpacity=".9" stroke="#FFE9AA" strokeOpacity=".76" strokeWidth="1.5" />
            <path d="M263 328C263 328 209 398 209 429C209 459 232 480 261 480C290 480 313 459 313 429C313 399 263 328 263 328Z" fill="url(#resin-glint)" />
            <path d="M380 356C380 356 341 402 341 424C341 447 358 463 380 463C402 463 420 447 420 424C420 402 380 356 380 356Z" fill="url(#resin-small)" fillOpacity=".88" stroke="#FFE9AA" strokeOpacity=".72" strokeWidth="1.2" />
            <path d="M174 397C174 397 150 426 150 442C150 457 162 469 177 469C192 469 204 457 204 442C204 425 174 397 174 397Z" fill="url(#resin-small)" fillOpacity=".72" stroke="#FFE9AA" strokeOpacity=".54" strokeWidth="1" />
            <path d="M230 365C218 382 213 392 211 403" stroke="white" strokeOpacity=".7" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M359 405C355 412 353 418 353 423" stroke="white" strokeOpacity=".64" strokeWidth="1.7" strokeLinecap="round" />
          </g>

          <g className="specimen-specks" fill="#F2D28C">
            <circle cx="128" cy="315" r="2" />
            <circle cx="350" cy="276" r="2.5" />
            <circle cx="439" cy="301" r="1.7" />
            <circle cx="111" cy="132" r="1.6" />
            <circle cx="333" cy="337" r="1.8" />
          </g>
        </svg>
        <div className="specimen-caption">
          <span className="specimen-caption-kicker">ORIGIN SPECIMEN · 01</span>
          <span className="specimen-caption-name">Acacia senegal</span>
          <span className="specimen-caption-detail">Gum Arabic · Kordofan, Sudan</span>
        </div>
      </div>

      <div className="hero-content">
        <span className="hero-tag">
          <span className="hero-tag-dot" />
          Sudanese origin. Global ambition.
        </span>
        <h1 className="hero-title">
          Harvested at origin.
          <span>Prepared for the world.</span>
        </h1>
        <h2 className="hero-subtitle">
          A direct line to Sudan’s finest <span>Gum Arabic</span>
        </h2>
        <p className="hero-description">
          We connect Sudanese harvests with the manufacturers and buyers who
          depend on them—with thoughtful sourcing, careful preparation, and
          export coordination from origin to destination.
        </p>

        <div className="hero-actions">
          <Link to="/products" className="hero-btn">
            Explore our products
          </Link>
          <Link to="/contact" className="hero-secondary-link">
            Discuss your supply needs <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="hero-metrics-grid">
          <div className="hero-metric-item">
            <span className="hero-metric-number">13<span>+</span></span>
            <span className="hero-metric-label">Years in export</span>
          </div>
          <div className="hero-metric-item">
            <span className="hero-metric-number">12<span>+</span></span>
            <span className="hero-metric-label">Export destinations</span>
          </div>
          <div className="hero-metric-item">
            <span className="hero-metric-number">Origin</span>
            <span className="hero-metric-label">Sourced in Sudan</span>
          </div>
        </div>
      </div>

      <a
        href="#destinations"
        className="hero-scroll-prompt"
      >
        <span>Discover our reach</span>
        <ChevronDown className="w-4 h-4 text-amber-500" aria-hidden="true" />
      </a>
    </section>
  );
}
