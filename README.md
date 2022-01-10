# Momentary

A simple web application with the simplicity of its design basically used for the upload of images (only jpeg and png files) using Cloudinary API and MongoDB as the database to save image URL.

## Installation: Get Started

Make sure you have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed by running the following command:

```bash
node -v
yarn -v
```
> If you do not have npm installed, install NodeJS [here](https://nodejs.org/en/download/)

> If your node version is less than v14, you would need to update it.

> If you do not have yarn installed, run `npm i -g yarn` in your terminal to install it

## Getting Started With the Frontend/Client (React)

Install dependencies in the root folder,

``cd client`` folder,  and install the dependencies

```bash
yarn install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Configure .env file

```
DATABASE = Mongo Uri
PORT_PATH = 5000
```

## Concurrently Run Both (React & Node)

Make sure you are in the root folder

Run the development server using either of the following commands:

```bash
npm run dev
# or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend result and your server would be listening on [http://localhost:5000](http://localhost:5000).

## Technologies / Languages
- ### React
 A free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page.

- ### Express
Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the framework for Node.js.

- ### MongoDB
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

- ### NodeJS
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

- ### Sass
Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax,"uses a syntax similar to Haml.

## Features / Functionalities

- [x] Upload Image to Cloudinary using Cloudinary API.
- [x] Get Images stored in database.
- [x] Delete Image.
- [x] Get Image and Show as thumbnail.

