# Sample App Exercise

## The Prompt
Using React, build a UI that:

[x] 1. Fetches a list of "employees" from the provided `/api/employees` endpoint. 
[x] 2. Renders the list of employees, with each employee displayed in a summarized form.
[x] 3. Allows a user to expand each employee to show the additional details about each employee.
[x] 4. Allows a user to expand the entire list of employees at once using something like an "Expand All" button.
[x] 5. Allows a user to delete an employee from the system.
6. **BONUS:** Implement some kind of updating functionality for one or more fields on the employee.

A few helpful tips:

* Don't focus on styling. We're more interested in seeing how you write your component(s) and handle things like managing React state and making HTTP requests.
* You're encouraged to write unit tests.

## Getting Started

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [`employees-sample-app`](https://github.com/Toro-TMS/employees-sample-app) repository.
2. In the project directory, run `yarn install` to download the app's dependencies.
3. Run `yarn start` to run the app in development mode.  It will be viewable at http://localhost:3000 in your browser.  The page will hot reload as you make changes to your application code.
4. We are using [Mirage JS](https://miragejs.com/) to provide a mock backend for the application. You can check out the mock backend server implementation in `src/server.js`. Feel free to extend or modify the endpoints provided if they do not suit your needs. Currently, the server implements three endpoints:
   1. `GET /api/employees` - This endpoint returns a list of all the employees.
   2. `PATCH /api/employees/:id` - This endpoint allows updating of a single employee record.
   3. `DELETE /api/employees/:id` - This endpoint allows deleting a single employee record.
5. You can run tests with `yarn test`.
6. When you are done, push your commits to your forked repository and send us a link to the repository (make sure the repository is public).

## Miscellaneous Information
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). If you run into any issues with running the app, you can check out the Create React App documentation for more information.
