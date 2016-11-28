# Description

This is the repository for voko backend.

# How to run

npm install;
node server.js

# Project structure

    - app                 <!-- the majority of nodejs code -->
    ----- models/         <!-- the schemas of database -->
    ----- routes/         <!-- the schemas of database -->
    - config
        ----- database.js <!-- the mongodb path -->
    - node_modules        <!-- created by npm install -->
    - public              <!-- all frontend and angular stuff -->
    ----- css
    ----- js
    ---------- controllers   <!-- angular controllers -->
    ---------- services      <!-- angular services -->
    ---------- app.js        <!-- angular application -->
    ---------- appRoutes.js  <!-- angular routes -->
    ----- img
    ----- libs               <!-- created by bower install -->
    ----- views
    ---------- home.html
    ---------- nerd.html
    ---------- geek.html
    ----- index.html
    - .bowerrc               <!-- tells bower where to put files (public/libs) -->
    - bower.json             <!-- tells bower which files we need -->
    - package.json           <!-- tells npm which packages we need -->
    - server.js              <!-- set up our node application -->