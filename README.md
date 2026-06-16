# NetWiki - Gaming Wiki App

A mobile gaming wiki application built with React Native for iOS, with a Node.js + MongoDB backend.

## Features

- 🎮 Browse multiple gaming wikis
- 🔍 Search characters, items, strategies, and locations
- 📱 Smooth iOS native experience
- 🌐 Real-time data sync with backend

## Quick Start

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed installation instructions.

### Requirements
- Node.js 14+
- npm or yarn
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/UUNJGB/NetWiki.git
cd NetWiki

# Frontend
cd frontend
npm install
npm start

# Backend (in new terminal)
cd backend
npm install
npm run dev
```

## Project Structure

```
NetWiki/
├── frontend/           # React Native iOS App
├── backend/            # Node.js Express API
├── README.md          # This file
└── SETUP_GUIDE.md     # Detailed setup instructions
```

## Tech Stack

- **Frontend**: React Native, Expo, React Navigation
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: React Native StyleSheet

## Development

### Adding Games

Edit `frontend/data/gamesData.js`:

```javascript
{
  id: 'game_id',
  name: 'Game Name',
  description: 'Description',
  thumbnail: 'https://image-url.com/image.jpg',
  characters: [],
  items: [],
  strategies: [],
  locations: []
}
```

### API Documentation

See `backend/README.md` for API endpoints

## Deployment

- **Frontend**: App Store (iOS)
- **Backend**: Heroku, AWS, DigitalOcean, or Render
- **Database**: MongoDB Atlas

## License

MIT

## Author

Created for gamers, by gamers 🎮
