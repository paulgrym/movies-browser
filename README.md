# Movies Browser 🎬 
Movies Browser was created as the finall project of the Frontend Developer course at YouCode.
The project was made in technologies such as React, React-Redux, React-Router, Styled Components and was based on the graphic design in Figma.
With the use of this app you can browse or search for movies and people from film industry. Data about movies and people is taken from an [external API](https://www.themoviedb.org/).

* [Demo](#demo)
* [How to use](#how-to-use)
* [Technologies](#technologies)
* [External sources](#external-sources)
* [Authors](#authors)
* [Available scripts](#available-scripts)

## Demo

You can find a demo [**here**](https://paulgrym.github.io/movies-browser/).

## How to use
- On the **Movies page** you can look through currently popular movies. Each movie position includes informations such as title, release year, film genres and viewers' rate. To find out more about the chosen movie, click on its tile, and then you will be redirected to a movie subpage.

- On the **Movie subpage**, in addition to the informations from the movie list, you will find movie production country, the exact release date, film description, cast and crew lists. By default, cast and crew lists consist of 10 items, but you can display all items with a "Show all" button and later hide additional list items with a "Hide" button. You can also go to a specific cast or crew member subpage by clicking its tile.

- On the **People page** you can look through currently popular people from film industry. You can go to person subpage by clicking its tile.

- On the **Person subpage** you can learn person's date and place of birth, read a description of the person and view lists of films in which that person participated as a cast or crew member.

<img src="https://github.com/paulgrym/movies-browser/blob/main/images/main-gif.gif" alt="Features of the Movies and People pages" width="700px">

- On the **Movies page** you can also search for a movie of your choice using the search bar and on the **People page** you can search for a person.

<img src="https://github.com/paulgrym/movies-browser/blob/main/images/search-gif.gif" alt="Search functionality" width="700px">


## Technologies

- CSS (Flex, Grid, media queries)
- JavaScript (ES6+)
- Create-react-app
- React
- React Router
- Styled Components
- ThemeProvider
- React Redux 
- Redux Toolkit
- Redux Saga
- Promises, async/await

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## External sources
This project uses API provided by [The Movie Database](https://www.themoviedb.org/).

## Authors
- Paulina Grymulska: [GitHub](https://github.com/paulgrym)
- Mieczysław Przytuła: [GitHub](https://github.com/MieczyslawFrontDev)
- Robert Osiał: [GitHub](https://github.com/RobertOsial)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
