# NetWiki Setup Guide

## Quick Start

### Frontend Setup
```bash
cd frontend
npm install
npm start
# Press 'i' for iOS simulator
```

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with MongoDB URI
npm run dev
```

## Adding Games

Edit `frontend/data/gamesData.js` to add your games.

Each game needs:
- id, name, description, thumbnail
- characters, items, strategies, locations arrays

See the file for examples!