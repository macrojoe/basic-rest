<h1 align="center"> REST API </h1>   
<!-- TABLE OF CONTENTS -->
<details  open="open">
<summary>Table of Contents</summary>
<ol>
	<li>
		<a  href="#about-the-project">About The Project</a>
		<ul>
			<li><a  href="#built-with">Built With</a></li>
		</ul>
	</li>
	<li><a  href="#getting-started">Getting Started</a>
		<ul>
			<li><a  href="#prerequisites">Prerequisites</a></li>
			<li><a  href="#installation">Installation</a></li>
		</ul>
	</li>
	<li><a  href="#usage">Usage</a></li>
	<li><a  href="#testing">Testing</a></li>
</ol>
</details>
<!-- ABOUT THE PROJECT -->

## About The Project

### How the program should work

The program should implement a REST Api that has 2 endpoints:
*  Hello World
*  Bored API with an activity to do

### How the program should be executed  
Having received a petition to these endpoints it should return:

#### /greet
It should return "Hello World" in the response with a 200 OK status.

#### /bored
It should return an activity with a 200 OK status, in text format, so you can stop being bored and start being awesome. 

Example: "Watch a movie you'd never usually watch"

### Built With

*  [NodeJS](https://nodejs.org/)
*  [ExpressJS](https://expressjs.com/)
*  [Bored Api](https://www.boredapi.com/)

### Tested with

*  [Jest](https://jestjs.io/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* node

```sh
brew install node
``` 

* npm
```sh
npm install npm@latest -g
```

### Installation

1. Install NPM packages

```sh

npm install

``` 
<!-- USAGE EXAMPLES -->

## Usage
In order to get the app running, in the project's root run

 ```sh
node index.js
```   
  
## Testing
In order to get the app tested, in the project's root run

 ```sh
npm run test
```   

There are 2 tests, each one of them test one end point of the API.

* /greet test

It should return "Hello World" with 200 status

* /activity test

It should return a string with 200 status

