# Kosh International Natural Gum

A website for Kosh International Natural Gum, showcasing its products, destinations, and export services.

## Run the project locally

### 1. Install Node.js

Install **Node.js 20.19 or newer** (or **22.12 or newer**) from [nodejs.org](https://nodejs.org/). npm is included with Node.js.

### 2. Open the project folder

If you already have this project, open a terminal in its folder. Or clone it with:

```bash
git clone https://github.com/Makispear/Koush-International-Natural-Gum-FE.git
cd Koush-International-Natural-Gum-FE
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the contact form (optional)

To enable quote requests, copy `.env.example` to `.env.local` and replace the placeholder with your Web3Forms access key:

```env
WEB3FORMS_ACCESS_KEY=your_actual_access_key
```

Get an access key from [Web3Forms](https://web3forms.com/). Restart the dev server after changing environment variables. Without a key, the rest of the site still runs, but the contact form cannot submit.

### 5. Start the website

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`). Leave the terminal running while you use the site. Press **Ctrl+C** to stop it.

## Useful commands

```bash
npm run build  # Build the site for production
npm run lint   # Check the code for lint errors
```

## Built with

- React
- Vite
- React Router
- Lucide icons
- React Globe.gl and Three.js
