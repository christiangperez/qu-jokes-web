# Qu Jokes Challenge by Christian Perez

This project was created to solve the challenge for Qu Beyond.

## Jokes Api

I am using the Jokes API that was provided to me, but I made some minor changes. I simply added a few endpoints; it could be refactored to separate into routes, controllers, and services, but due to the simplicity of the exercise, I left it as it is.

### How to run

Download the qu-jokes-api repository: https://github.com/christiangperez/qu-jokes-api
Run command: npm install
Run command:node index (it will run into 3005 port)

## Jokes Web

Download the qu-jokes-web repository: https://github.com/christiangperez/qu-jokes-web
Run command: npm install
Run command: npm start (The environment variable is configurated to aim to localhost:3005/jokes)

### Features

- Find Jokes: You can search for jokes by specifying the number you want to retrieve, and you have the option to sort them by type and/or joke description (setup).
- Delete Jokes: This allows you to remove any joke that you no longer wish to keep.
- Like Joke: I did not implement user management because the goal is to demonstrate the functionality of likes. This means one can like a joke multiple times without a user system to keep the exercise straightforward.
- Jokes Theme: Jokes of the "Programming" and "Knock-knock" types feature a distinct style.
- Add Joke: Allows the addition of a new joke to the list.
- Top Ten: Displays the top ten jokes with the most likes.
- About page: Provides information about the purpose of the project and my contact email.
- Navbar: Navigation to access each of the screens.
- Responsive Website: The site is responsive and adapts for both desktop and mobile.
- Eslint y prettier: For code analysis and formatting.
- Estilos CSS: SASS was used to style the entire application.
- Typescript: The project is fully typed to ensure that everything has its type and interface for API communication.
- Animaciones y efectos: There are subtle animations and effects throughout the site, such as on the navbar title, navbar menu items, like and delete buttons, action buttons, etc.
- Llamadas a la API: These are centralized in the jokesApi.ts file.
- HTML Semantico: Appropriate tags have been used in each situation to avoid using a div tag for every block.
