# wwbm-genesis

**(WWBM) Who want to be a millionaire** - this app is a quiz game based on the famous game "Who Wants to Be a Millionaire?" The player is given 12 questions and 4 answers to each of them. To win the game, you need to answer all the questions correctly.

I made up the questions myself. I hope you find them interesting. Please don't judge me harshly 🤷‍♂️ 

[![Netlify Status](https://api.netlify.com/api/v1/badges/909b5a7a-a98a-4770-a58c-71e72e38cf64/deploy-status)](https://app.netlify.com/sites/affectionate-sammet-b40bc3/deploys)

> [Live demo](https://affectionate-sammet-b40bc3.netlify.app/) - Netlify 
> 
> **automatic deployment, unlike GithubPages*

## Technologies and specifications 🧬

- built on **React.js**
- navigation with **react-router-dom**
- app state control **Redux**, Redux - Thunk
- **scss/sass** style preprocessor
- **adaptive design** for mobile, tablet and desktop screens
- typing data inside components with **PropTypes**
- optimised memory and application loading with **React Suspense**
- code standardisation using **eslint (airbnb)**
- prevent bad commit/push with **Husky**
- uniform code style using **Prettier** configuration

## Application features 🚀

- random order of answer options each time a question is loaded ✅
- blocking option buttons after selecting until the next question is loaded ✅
- the ability to add several correct answers
- the ability to change the order of questions
- the ability to change the order of answer options

## TODO 👇

- rewrite the connections (mstp, mdtp) to redux using hooks
- typing using **TypeScript** or **Flow**
- testing code and component snapshots with **Jest** and **Enzyme**
- create a **Control Panel** to manage questions and answer options into the application - [( pull-request )](https://github.com/mort-gh/wwbm-genesis/pull/5) 
- add the "**Phone-a-Friend**" option (connect Skype / WhatsApp)
- add the "**Ask the Audience**" option (the algorithm of the probable correct answer)
- add option "**50:50**" (remove two wrong answers)
- add **Home** button from other app pages

## Installation 🛠

This application has been tested on **Node.js** version 12 or later, and using **Yarn** as package manager. There is way to install them:

1. Clone the repository to a local or remote server:

   `git clone https://github.com/mort-gh/wwbm-genesis.git`

2. Go inside the project root folder via terminal. Go inside the project root folder via terminal. 
To install, type: 

	`yarn`

3. If there are no errors in the console, then everything is done correctly.


## Usage 💻

1. To start the app after installation, type in the terminal: 

	`yarn start`

2. You can now view app in the browser locally:

	`http://localhost:3000/`

3. Don't forget **to star** ⭐ the repository in the top corner of the page :)

## PS:

I will always be glad to receive your comments and suggestions - send pull requests or write to me via social networks (link in bio).
