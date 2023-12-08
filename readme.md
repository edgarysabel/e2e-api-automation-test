# QA Automation Challenge

This project is a web test automation framework using [Cypress](https://www.cypress.io/) version 13, written in JavaScript. It incorporates GitHub Actions for CI/CD and utilizes [Mochawesome](https://github.com/adamgruber/mochawesome) for generating stylish and informative test reports. It tests the webpage [DemoBlaze](https://demoblaze.com/) for UI.

### UI testing

These were the scenerios were automated:

    1. Add 2 Items to cart.

    2. Visualize the cart.

    3. Complete checkout formulary.

    4. Finish buying process.

## API Reference

This project automates different API responses from https://petstore.swagger.io/ using the Cypress framework and the [cypress-plugin-api.](https://github.com/filiphric/cypress-plugin-api) created by [Filip Hric](https://github.com/filiphric), generating reports and running into github actions as CI.

#### List User Details

```http
  GET /users/{username}
```

| Request type | Endpoints           | Expected Response Code |
| :----------- | :------------------ | :--------------------- |
| `GET`        | `/users/{username}` | `200`                  |

#### Create user

```http
  POST /users/{username}
```

| Request type | Endpoints           | Request Body                                                                                                                                              | Expected Response Code |
| :----------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `POST`       | `/users/{username}` | `"id": 0, "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": 0` | `200`                  |

#### Modify Users

```http
  PUT /users/{username}
```

| Request type | Endpoints           | Request Body                                                                                                                                              | Expected Response Code |
| :----------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `PUT`        | `/users/{username}` | `"id": 0, "username": "string", "firstName": "string", "lastName": "string", "email": "string", "password": "string", "phone": "string", "userStatus": 0` | `200`                  |

#### DELETE

```http
  DELETE /users/{username}
```

| Request type | Endpoints           | Expected Response Code |
| :----------- | :------------------ | :--------------------- |
| `DELETE`     | `/users/{username}` | `200`                  |

## Tech Stack

- [Javascript.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Nodejs.](https://nodejs.org/en/about/)
- [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
- [cypress-plugin-api.](https://github.com/filiphric/cypress-plugin-api)
- [GitHub Actions.](https://docs.github.com/en/actions)
- [cypress-mochawesome-reporter.](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [ESlint.](https://eslint.org/docs/latest/user-guide/getting-started)

## Run Locally

#### Required to run project

- [Node.js](https://nodejs.org/en/download/)

- Must have a Marvel Private Key and Public Key which can be obtained going to [Marvel's developer website](https://developer.marvel.com) and creating a new account.

- An email and password is needed for [automationpractice.com/](http://automationpractice.com/index.php).

  `Note: Both Marvels Keys and Account for UI testing are being included in Main branch, feel free to use this or generate new ones.`

###

- Clone repository:

```bash
  git clone https://github.com/edgarysabel/e2e-api-automation-test.git
```

- Install dependencies:

```bash
  npm install
```

- Run project in headless mode:

```bash
  npm run cy:run
```

- Run project in headed mode:

```bash
  npm run cy:open
```

This will run all the tests and generate a report at the end of the execution.

###

Note: local testing is configured to run on Mac/Linux based environments. If running in a windows machine please go to package.json under root directory and replace:

```bash
  "cy:open": "yarn cypress open --env allure=true --browser chrome",
  "cy:run": "yarn cypress run --config video=false --env allure=true --browser chrome",
```

for:

```bash
  "cy:open": "npx cypress open --env allure=true --browser chrome",
  "cy:run": "npx cypress run --config video=false --env allure=true --browser chrome",
```

## Run CI

CI has been configured with Github Actions for ease of use and integration since project is already hosted on Github. To run it just go to actions and run the workflow `Run QA Integration Tests` under your preferred Branch. Aditionally, pipeline always run whenever there is a new commit.

Note: To be able to do commits or run workflows please reach me at edgarysabel@gmail.com.

#### Test Reports

Mochawesome is configured to generate a standalone HTML report after the test execution. You can find the report in the cypress/reports/mochawesome-report directory. Open mochawesome.html in your browser to view the report.

To customize Mochawesome's configuration, you can modify the mochawesomeReporterOptions in the cypress.json or cypress.config.js file.

Test report have been done with Allure Report and stored with GitHub Pages, so pipeline is run, the reports are generated along it. To access reports go to [https://edgarysabel.github.io/e2e-api-automation-test/](https://edgarysabel.github.io/e2e-api-automation-test/).

## Project Structure

#### UI testing configuration

The file cypress.env.json under root directory contains needed credentails for UI testing. Working credentials are currently included with the project.

```bash
  {
  "FRONTEND_URL": "https://demoblaze.com/",
  "API_ENDPOINT": "https://petstore.swagger.io/v2"
  }

```

## Must Know

- For API invalid scenarios was used `failOnStatusCode: false`, so it continues and do the assertions.

- A custom POM Pattern with Javascript and Cypress was used.

- The static data is stored on `fixture` for each test case.

- The website [automationpractice.com](http://automationpractice.com/index.php) has loading issues and can make tests fail.
