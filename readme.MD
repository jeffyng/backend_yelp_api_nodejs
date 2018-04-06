# Node.js/Express server 
> A backend server that retrieves information from Yelp's API and provide a list or summary of information.


## Getting Started
1. Insert your yelp api key in /keys.js file

2. Run the following command in terminal:
```sh
npm install        
node server/index.js 
```
3. View data in browser using either "/list" endpoint or "/summary" endpoint following the city name
  a. Example: localhost:3000/list/san-francisco
  b. Example: localhost:3000/summary/san-francisco
  c. Example: localhost:3000/list/ANY-US-CITY-NAME

 
## To Run Tests:
```sh
npm test
```


