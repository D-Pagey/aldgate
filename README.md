### Project Aldgate

This codenamed project attempts to replicate an N-Back task. You can view the deployed version at https://aldgate.vercel.app/

Alternatively, you can clone this repo and run the following scripts:

- `yarn` to install dependencies
- `yarn dev` to run the local server and view in http://localhost:3000/
- `yarn test` to run the unit and integration tests
- `yarn lint` to lint the project

### QA

- [ ] Amend copy
- [ ] Check accessibility
- [ ] add integration tests
- [ ] Check deployed versioxn for responsiveness

## Dev notes

- some naming could be debatable, didnt spend too much time thinking about it
- probably could seperate out user provider and game state provider but for this scope simple enough
- simplified some structure for sake of scope of project
- more time would prevent double click on same letter
- explain whole stack choices
- ran out of time - woudl do a cooler error and loading state
- add space bar event listener
- Redirect if no user
- Add cypress E2E test
- Show progress bar time left
