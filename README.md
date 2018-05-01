# New Food Order

New Food Order is a concept app by Volst.

## The idea

When you are eating with a group in a [Food Court](https://en.wikipedia.org/wiki/Food_court), it is often a big hassle to order something. First, you find a seat somewhere in the food court. Then you and your group want to start ordering food, but of course everyone wants something from a different vendor. You have to get up, loose your seat and order plus wait there.

Our app intends to fix that by allowing you to order from your phone, without installing a native app. We made it open-source for fun.

## Requirements

- [Docker](https://docs.docker.com/docker-for-mac/install/)
- Node.js v8+
- [Yarn](https://yarnpkg.com/en/)

## Install

Copy `.env.example` to `.env` in the repository root, and paste the URL in the `REACT_APP_GRAPHQL_URL` variable.

```bash
cd backend/database
docker-compose up -d
cd ..
yarn && yarn start
```

Keep this running while developing.

In a second tab:

```bash
cd backend/
yarn deploy
```

And to get the frontend running:

```bash
cd frontend/
yarn && yarn start
```

## Adding a user

The backend automatically seeds data. You can now login on the webapp with the user `info@volst.nl` and `testtest2` as password.

## Playing with the API

If you want to play around with the API, go to http://localhost:4005/playground.
