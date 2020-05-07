# PROJECT: Travel App

This is the final capstone project of the [Udacity Frontend Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)

The objective is to create an asynchronous web app with a node server that obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs.

## Built with

- HTML
  - HTML5 Semantic elements
  - HTML Forms
- CSS
  - CSS Flexbox
  - CSS Animations
  - CSS Media query
- Linters
  - Eslint
  - StyleLint
  - HTML Validator CLI
- JavaScript
  - DOM Manipulation
  - Events
- Node
- Documentation
  - JSDoc
- Jest
- Tools
  - Yarn
  - Webpack

## [Live link](https://bola-travel-app.herokuapp.com/)

## Development (Running locally)

- Clone the project

```bash
git clone https://github.com/bolah2009/udacity-travel-app
```

- Install Dependencies

  ```bash
  yarn install
  ```

- Setting up environment variables

- Copy `.env.example` file to `.env`

  ```bash
  cp .env.example .env
  ```

- Edit the variables to approprate values. You can sign up to the following accounts get free API Keys:

  1.  [Geonames](http://www.geonames.org/export/web-services.html) for `API_USER_NAME`
  2.  [Weatherbit](https://www.weatherbit.io/account/create) for `WEATHERBIT_API_KEY`
  3.  [Pixabay](https://pixabay.com/api/docs/) for `PIXABAY_API_KEY`

- Build files with `webpack`:

  To build files with production configure, run

  ```bash
  yarn build
  ```

  To build files with dev config and watch file changes, run

  ```bash
  yarn build:dev
  ```

  To start `node` server, you can run

  ```bash
  yarn start
  ```

  Depending of what `PORT` is set as in the `.env` file, the app can be aceesed on localhost
  e.g. for PORT=5000 go to http://localhost:5000/

To run StyleLint and ESLint by itself, you may run the lint task:

```bash
yarn lint:check
```

Or to automatically fix issues found (where possible):

```bash
yarn lint
```

You can also check against Prettier:

```bash
yarn format:check
```

and to have it actually fix (to the best of its ability) any format issues, run:

```bash
yarn format
```

You can also check against HTML Validator:

```bash
yarn html-validator
```

## Style Guides

- [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Git Style Guide](https://udacity.github.io/git-styleguide/)

## Todo

- Improve UI/UX
- Add end date and display length of trip.
- Pull in an image for the country from Pixabay API when the entered location brings up no results.
- Allow user to add multiple destinations on the same trip.
- Pull in weather for additional locations.
- Allow the user to add hotel and/or flight data.
- Multiple places to stay? Multiple flights?
- Integrate the REST Countries API to pull in data for the country being visited.
- Allow the user to remove the trip.
- Instead of just pulling a single day forecast, pull the forecast for multiple days.
- Allow user to Print their trip and/or export to PDF.
- Allow the user to add a todo list and/or packing list for their trip.
- Automatically sort additional trips by countdown.
- Move expired trips to bottom/have their style change so it’s clear it’s expired.

## 👤 Author

- Github: [@bolah2009](https://github.com/bolah2009)
- Twitter: [@bolah2009](https://twitter.com/bolah2009)
- Linkedin: [@bolah2009](https://www.linkedin.com/in/bolah2009/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](../../issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Udacity Frontend Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Team

## 📝 License

[MIT licensed](./LICENSE).
