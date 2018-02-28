var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var apiKey = require('../keys').apiKey;
var port = process.env.PORT || 3000;
var yelpURL = 'https://api.yelp.com/v3/businesses/search';
var headers = {
  'Authorization': 'Bearer ' + apiKey
};


app.get('/summary/:location', function (req, res) {
  var queryTerm = 'physical-therapist';
  var limit = 50;
  var location = req.params.location;

  // Limit is 50 but can retrieve more by using 'offset' in the url paramters.
  var url = yelpURL + '?location=' + location + '&term=' + queryTerm + '&limit=' + limit;

  var numOfRatings = 0;
  var sumAllRatings = 0;
  var numOfReviews = 0;

  axios.get(url, { headers: headers })
    .then(function (response) {
      var businesses = response.data.businesses;
      businesses.forEach((business) => {
        if (business.rating) {
          numOfRatings++;
          sumAllRatings += business.rating;
        }
        if (business.review_count) {
          numOfReviews += business.review_count;
        }
      })
      var data = {
        number_of_pts: businesses.length,
        total_with_ratings: numOfRatings,
        avg_rating: sumAllRatings / numOfRatings,
        total_reviews: numOfReviews
      };
      res.json(data);
    })
    .catch(function (err) {
      console.log('axios GET error: ', err);
    });
});

app.get('/list/:location', function (req, res) {
  var queryTerm = 'physical-therapist';
  var limit = 50;
  var location = req.params.location;
  var url = yelpURL + '?location=' + location + '&term=' + queryTerm + '&limit=' + limit;

  axios.get(url, { headers: headers })
    .then(function (response) {
      var businesses = response.data.businesses;
      var businessList = [];

      businesses.forEach(function (business) {
        if (business.rating) {
          var businessInfo = {
            name: business.name,
            rating: business.rating,
            reviews: business.review_count,
            address: business.location
          };
        };
        businessList.push(businessInfo);
      });

      // Sort by highest rating to lowest rating.
      businessList = businessList.sort(function (a, b) {
        return b.rating - a.rating;
      });

      res.json(businessList);
    })
    .catch(function (err) {
      console.log('axios GET error:', err);
    });
});

app.listen(port, function () {
  console.log('Server listening at:' + 'localhost' + ':' + port);
});

module.exports = app;