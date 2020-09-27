# Webpack Project

Tools which are used in this project

- Webpack Configuration
- Saas
- Loader
    - `MiniCssExtractPlugin`, `style-loader`, `css-loader`. `sass-loader`
- Plugins
    - `HthmlWebPackPlugin`
    - `CleanWebpackPlugin`
    - `MiniCssExtractPlugin`
    - `WorkboxPlugin`
- External API
    - meaningcloud
        - API_KEY/API_URL is set with .env

        ```jsx
        const dotenv = require('dotenv')
        dotenv.config();
        console.log(`Your API KEY is ${process.env.API_KEY}`);
        ```
- Usage
    - npm i
    - create .env file in root directory
    - add API_KEY in .env file
    ```
    API_KEY=xxxxxxxxxxxxxxxxxxxx
    ```
    - `npm run build-dev` for development
    - `npm run build-prod` for production  