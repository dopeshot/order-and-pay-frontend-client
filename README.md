# Getting Started with Create React App

In the project directory, you can run:

1. `npm i`
2. `npm run start`

To run the project using docker containers:<br> 
`docker-compose -f docker-compose.dev.yaml up`<br>
You might need to delete your node_modules folder beforehand.
This will run both `npm run start` as well as `npm run test:watch`.
To run these in the background add the -d argument to the docker compose command. 
For attaching to running docker containers see the official docs.

### Dependencies
* Create React App
* Overmind
* React Router
* TailwindCSS
  * craco
  * autoprefixer
  * postcss
