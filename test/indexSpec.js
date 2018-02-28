var request = require('supertest');
var app = require('../server/index.js');


describe('/summary/san-francisco', function() {
  it('should return status code 200', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(200, done);
  });
  it('should return data', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (!res) {
          throw new Error ('should respond with data but got: ' + res.data.business);
        }
      })
      .end(done);
  });
  it('should return property "number_of_pts"', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (!res.body.hasOwnProperty('number_of_pts')) {
          throw new Error ('should be true but got: ' + res.body.hasOwnProperty('number_of_pts'));
        }
      })
      .end(done);
  });
  it('should return property "total_with_ratings"', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (!res.body.hasOwnProperty('total_with_ratings')) {
          throw new Error ('should be true but got: ' + res.body.hasOwnProperty('total_with_ratings'));
        }
      })
      .end(done);
  });
  it('should return property "avg_rating"', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (!res.body.hasOwnProperty('avg_rating')) {
          throw new Error ('should be true but got: ' + res.body.hasOwnProperty('avg_rating'));
        }
      })
      .end(done);
  });
  it('should return property "total_reviews"', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (!res.body.hasOwnProperty('total_reviews')) {
          throw new Error ('should be true but got: ' + res.body.hasOwnProperty('total_reviews'));
        }
      })
      .end(done);
  });
  it('number_of_pts should be a number', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (typeof res.body.number_of_pts !== 'number') {
          throw new Error ('should be a number got got: ' + typeof res.body.number_of_pts);
        }
      })
      .end(done);
  });
  it('total_with_ratings should be a number', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (typeof res.body.total_with_ratings !== 'number') {
          throw new Error ('should be a number got got: ' + typeof res.body.total_with_ratings);
        }
      })
      .end(done);
  });
  it('avg_rating should be a number', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (typeof res.body.avg_rating !== 'number') {
          throw new Error ('should be a number got got: ' + typeof res.body.avg_rating);
        }
      })
      .end(done);
  });
  it('total_reviews should be a number', function(done) {
    request(app).get('/summary/san-francisco')
      .expect(function(res) {
        if (typeof res.body.total_reviews !== 'number') {
          throw new Error ('should be a number got got: ' + typeof res.body.total_reviews);
        }
      })
      .end(done);
  });
});

describe('/list/:location', function() {
  it('should return status code 200', function(done) {
    request(app).get('/list/san-francisco')
      .expect(200, done);
  });
  it('should return an array', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        if (!Array.isArray(res.body)) {
          throw new Error ('should return an array but got: ', typeof res.body);
        }
      })
      .end(done);
  });
  it('array should have at least 2 item', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        if (res.body.length < 2) {
          throw new Error ('array should not be empty');
        }
      })
      .end(done);
  });
  it('should have a name property', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        if (!res.body[0].hasOwnProperty('name')) {
          throw new Error ('should be true but got: ' + res.body[0].hasOwnProperty('name'));
        }
      })
      .end(done);
  });
  it('should have a rating property', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        if (!res.body[0].hasOwnProperty('rating')) {
          throw new Error ('should be true but got: ' + res.body[0].hasOwnProperty('rating'));
        }
      })
      .end(done);
  });
  it('should have a reviews property', function(done) {
    request(app).get('/list/san-frnacisco')
      .expect(function(res) {
        if (!res.body[0].hasOwnProperty('reviews')) {
          throw new Error ('should be true but got: ' + res.body[0].hasOwnProperty('reviews'));
        }
      })
      .end(done);
  });
  it('should have an address property', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        if (!res.body[0].hasOwnProperty('address')) {
          throw new Error ('should be true but got: ' + res.body[0].hasOwnProperty('address'));
        }
      })
      .end(done);
  });
  it('name should be a string', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        if (typeof res.body[0].name !== 'string') {
          throw new Error ('should be a string but got: ' + typeof res.body[0].name);
        }
      })
      .end(done);
  });
  it('rating should be a umber', function(done) {
    request(app).get('/list/san-frnacisco')
      .expect(function(res) {
        if (typeof res.body[0].rating !== 'number') {
          throw new Error ('should be a string but got: ' + typeof res.body[0].rating);
        }
      })
      .end(done);
  });
  it('reviews should be a number', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        if (typeof res.body[0].reviews !== 'number') {
          throw new Error ('should be a string but got: ' + typeof res.body[0].reviews);
        }
      })
      .end(done);
  });
  it('address should be an object', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        if (typeof res.body[0].address !== 'object' || Array.isArray(res.body[0].address)) {
          throw new Error ('should be a string but got: ' + typeof res.body[0].address);
        }
      })
      .end(done);
  });
  it('should sort ratings in descending order', function(done) {
    request(app).get('/list/san-francisco')
      .expect(function(res) {
        var firstBusinessRating = res.body[0].rating;
        var lastBusinessRating = res.body[res.body.length - 1].rating;
        if (lastBusinessRating > firstBusinessRating) {
          throw new Error ('should sort business rating in descending order');
        }
      })
      .end(done);
  });
});