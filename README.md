### Project Aldgate

This codenamed project attempts to replicate an N-Back task. You can view the deployed version at https://aldgate.vercel.app/

Alternatively, you can clone this repo and run the following scripts:

- `yarn` to install dependencies
- `yarn dev` to run the local server and view in http://localhost:3000/
- `yarn test` to run the unit and integration tests
- `yarn lint` to lint the project

## Notes

I would have liked to spend more time on this but my time was limited. Here are some considerations and things I would have liked to do with more time:

- implement a break between each letter
- implement a Cypress end-to-end test
- add a redirect on the `/game` and `/results` pages if no there's no user present i.e. you just landed on the url
- implement a cooler UI for the loading and error states
- add a timer for each letter
- feedback in the UI positive/negative answers other than the error count increasing
- prevent double click on same letter
- add more test coverage
