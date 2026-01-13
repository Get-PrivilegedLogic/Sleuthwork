# Sleuthwork 🕵️

Daily logic puzzle mysteries. Pure deduction.

Live at: [https://sleuthwork.app](https://sleuthwork.app)

## About

Sleuthwork is a daily logic puzzle game where you play as Detective Marlowe Finch, solving murder mysteries through pure deductive reasoning. Use interconnected grids to eliminate possibilities and find the killer.

## Features

- 🧩 Logic-based deduction puzzles
- ⏱️ Timer with best time tracking
- 💡 Progressive hint system
- ⌨️ Full keyboard navigation
- 📱 Fully responsive design
- 🎨 Premium animated UI

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Hosting:** AWS S3 + CloudFront
- **DNS:** Route 53
- **CI/CD:** GitHub Actions

## Development
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deploy

Automatically deploys to AWS on push to `main` branch via GitHub Actions.

Manual deploy:
```bash
.\deploy.ps1
```

## License

MIT License - see LICENSE file for details