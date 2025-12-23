# WebTrigger

A simple web-based visitor tracking and personalization system. This project allows you to create personalized landing pages that track visitor information.

## Features

- **Personalized Pages**: Display customized greetings based on URL parameters
- **Visit Tracking**: Log visitor data including customer ID, name, user agent, and timestamps
- **Simple Backend**: Express.js server for handling tracking requests
- **Modern UI**: Clean, responsive design using Tailwind CSS

## Tech Stack

- **Frontend**: HTML, JavaScript, Tailwind CSS (CDN)
- **Backend**: Node.js, Express.js
- **Storage**: File-based logging (`visits.log`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd webTrigger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the tracking server:
   ```bash
   npm start
   ```

4. Open `index.html` in your browser or serve it using a local server.

## Usage

### Personalized URLs

Add query parameters to personalize the page:

```
index.html?cid=C1234&name=John OR 
The server exposes a POST endpoint at `http://localhost:8000/?cid=C1025&name=Sudharshan`
```

- `cid`: Customer ID for tracking
- `name`: Name to display in the greeting

### Tracking Endpoint

The server exposes a POST endpoint at `http://localhost:3000/track` that logs visitor data:

```json
{
  "customerId": "C1234",
  "name": "John",
  "page": "/",
  "userAgent": "Mozilla/5.0...",
  "timestamp": "2025-12-18T16:21:21.718Z"
}
```

Visit logs are stored in `visits.log`.

## Project Structure

```
webTrigger/
├── index.html      # Main landing page
├── script.js       # Client-side personalization and tracking
├── server.js       # Express server for tracking API
├── package.json    # Project dependencies and scripts
├── visits.log      # Visit tracking logs
└── README.md       # This file
```{
  "customerId": "C1234",
  "name": "John",
  "page": "/",
  "userAgent": "Mozilla/5.0...",
  "timestamp": "2025-12-18T16:21:21.718Z"
}

## Scripts

- `npm start` - Start the tracking server on port 3000

## License

MTC
