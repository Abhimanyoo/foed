# Foed

Foed is a concept app by Volst.

## The idea

When you are eating with a group in a [Food Court](https://en.wikipedia.org/wiki/Food_court), it is often a big hassle to order something. First, you find a seat somewhere in the food court. Then you and your group want to start ordering food, but of course everyone wants something from a different vendor. You have to get up, lose your seat and order plus wait there.

Our app intends to fix that by allowing you to order from your phone, without installing a native app. We made it open-source for fun.

## Requirements

- [Docker](https://docs.docker.com/docker-for-mac/install/)
- Node.js v8+
- [Yarn](https://yarnpkg.com/en/)
- macOS or Linux

## Install

Copy `.env.example` to `.env` in the repository root;

```bash
yarn
cd api/database
docker-compose up -d
cd ..
yarn start
```

Keep this running while developing.

In a second tab (only once):

```bash
cd api
yarn deploy
```

Now the API is running, you can start one of the frontend apps.

Go to the `admin`, `menu` or `restaurant` folder and run for example:

```bash
cd admin
yarn start
```


## Adding a user

The API automatically seeds data. You can now login on the webapp with the user `info@volst.nl` and `testtest2` as password.

## Playing with the API

If you want to play around with the API, go to http://localhost:4005/playground. Alternatively you can explore the API visually by running `yarn voyager` in `api/`.
