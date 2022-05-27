### Project Aldgate

This codenamed project attempts to replicate an N-Back task. You can view the deployed version at https://aldgate.vercel.app/

Alternatively, you can clone this repo and run the following scripts:

- `yarn` to install dependencies
- `yarn dev` to run the local server and view in http://localhost:3000/
- `yarn test` to run the unit and integration tests
- `yarn lint` to lint the project

## Notes

I would have liked to spend more time on this but my time was limited. Here are some considerations:

- with more time I would have liked to implement a Cypress end-to-end test
- I could have added a redirect on the `/game` and `/results` pages if no user present i.e. you just landed on the url
- I would have liked to had cooler UI for the loading and error states
- The UX of the game is a bit suboptimal, would be nice to have a timer for each letter.
- Also would have been good to show in the UI positive/negative answers other than the error count increasing
- I would like to prevent double click on same letter
