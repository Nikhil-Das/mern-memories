# MERN Memories

A simple full-stack "memories" project built with the MERN stack (MongoDB, Express, React, Node). This repo contains a React client and an Express/MongoDB server for creating and viewing short posts (memories).

## Contents

- `client/` - React front-end (Create React App, Redux, MUI). Run with `npm start`.
- `server/` - Express API using Mongoose. Run with `npm start` (nodemon).

## Key features

- Create and view posts (memories).
- Uses Redux for client state and Axios for API calls.
- Simple REST API endpoints for posts.

## Tech stack

- Frontend: React, Redux, MUI, Sass
- Backend: Node.js, Express, Mongoose (MongoDB)

## Quick start (Windows PowerShell)

Prerequisites:

- Node.js (v16+ recommended)
- npm (bundled with Node)
- MongoDB (local) or MongoDB Atlas

1. Install dependencies

From the repository root:

```powershell
cd server; npm install
cd ../client; npm install
```

2. Configure the server MongoDB connection

The current `server/index.js` contains a hard-coded `CONNECTION_URL`. For security you should replace this with an environment variable. Example change in `server/index.js`:

```js
// replace hard-coded connection string with an env var
const CONNECTION_URL =
  process.env.CONNECTION_URL || "your_local_or_atlas_uri_here";
```

Then, in PowerShell you can set the env var for the current session and start the server:

```powershell
$env:CONNECTION_URL = "your_mongodb_connection_string"
cd server
npm start
```

If you prefer to keep the code unchanged (not recommended), ensure the hard-coded credentials are removed before pushing to any remote repo.

3. Run the client

In a new PowerShell tab/window (from repo root):

```powershell
cd client
npm start
```

The client runs on http://localhost:3000 and the server defaults to port 5000 (http://localhost:5000) unless you set `PORT` in the environment.

## NPM scripts (found in repo)

- Client (`client/package.json`):

  - `start` - start dev server (react-scripts start)
  - `build` - build production bundle
  - `test` - run tests
  - `eject` - eject CRA config

- Server (`server/package.json`):
  - `start` - `nodemon index.js` (auto-restarts on changes)

## API Endpoints (server)

The API exposes basic post routes under `/posts` (see `server/routes/posts.js`):

- GET /posts — get list of posts
- POST /posts — create a new post

You can expand this to include update/delete endpoints. Check `server/controllers/posts.js` for implementation details.

## Environment variables

- CONNECTION_URL (recommended) — MongoDB connection string (Atlas or local).
- PORT — optional server port (defaults to 5000).

Example PowerShell export for a session:

```powershell
$env:CONNECTION_URL = "mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/<dbname>?retryWrites=true&w=majority"
$env:PORT = "5000"
```

Note: Don't commit secrets. Use `.env` plus a secure way to provide env vars in production.

## Project structure

Top-level:

```
client/      # React app
server/      # Express API
```

Important files:

- `client/src/` — React source
- `server/index.js` — express app & DB connection
- `server/routes/posts.js` — posts routes
- `server/controllers/posts.js` — post handlers

## Development notes & suggestions

- Convert the hard-coded connection string to an environment variable (see above).
- Add more API endpoints (PATCH/DELETE) and protect them behind auth if you plan to make it public.
- Add tests for server controllers and client components.

## Contributing

Feel free to open issues or PRs. Keep changes small and focused. If you add secrets or credentials during testing, remove them before committing.

## License

This repository currently has no explicit license file. If you want to open-source it, consider adding an `LICENSE` (for example, MIT).

---

If you'd like, I can also:

- replace the hard-coded `CONNECTION_URL` with `process.env.CONNECTION_URL` and add a simple `.env.example` file,
- add a short `README` section showing how to deploy to Heroku/Vercel or set up MongoDB Atlas.
