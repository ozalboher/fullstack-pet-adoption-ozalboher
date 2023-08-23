# Pet Adoption App

This is a full stack pet adoption platform,
with search, user/adoption management &amp; admin dashboard.
The goal of this platform is to allow users to sign up, search and
adopt pets. The admin dashboard allows the admin to manage the pets
and users.



## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Description

This full stack pet adoption platform aims to provide a seamless experience for users looking to adopt pets. It includes a robust search feature, user and adoption management capabilities, as well as an admin dashboard for efficient pet and user administration.

## Features

- User registration and authentication
- User profile management
- Comprehensive pet search functionality
- Adoption management system
- Admin dashboard for pet and user management
- Responsive design
- Mobile-friendly
- Easy to use, maintain and scale

## Prerequisites

Ensure you have the following prerequisites before setting up the project:

- Node.js and npm
- React npm packages
- Install all packages in React/package.json & nodeJS/package.json (npm install)
- MySQL Server

## Installation

Follow these steps to set up the project:

1. Clone the repository:
   ```sh
   git clone https://github.com/ozalboher/fullstack-pet-adoption-ozalboher.git
    ```

2. Install all packages in package.json:
    ```sh
    npm install
    ```
3. Create a .env file in the root directory and add the following environment variables:
    ```sh
    ? DB_HOST=your_db_host
    ? DB_USER=your_db_user
    ? DB_PASS=your_db_password
    ? DB_NAME=your_db_name

4. Create a database in MySQL Server with the name you specified in the .env file.
5. To Import the database schema+tables from the pets_db folder run the following commands:
    ```sql
    mysql - u username -p 
    /connect local@host 
    CREATE DATABASE pets;
    USE pets;
    SOURCE db_pets/pets_pets.sql
    SOURCE db_pets/pets_saved_pets.sql
    SOURCE db_pets/pets_users.sql
    SOURCE db_pets/pets_ownership.sql
    ```

5. Run the project:
From the root directory of react folder
    ```sh
    npm start   
    ```
From the root directory of nodeJS folder
    ```sh
    node app  
    ```
6. Open http://localhost:3000 to view it in the browser.

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- Express.js
- JWT
- Bcrypt
- EJS
- AJV
- MySQL

## License
- This project is licensed under the MIT License.
- © 2023 Oz Alboher



