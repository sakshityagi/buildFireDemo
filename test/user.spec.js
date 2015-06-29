var expect = require('chai').expect;
var UserController = require('../controllers/UserController');
var mongoose = require("mongoose");

describe('User', function () {
  before(function() {
    mongoose.connect("mongodb://localhost/buildFireDemo-dev");
  });
  // Given test case passes if a new user is created successfully
    it('#registerUser', function (done) {
      UserController.register({'email' :'sakshi2@gmail.com', 'password': '123456'},function(err, user, isAlreadyExist){
        expect(err).to.be.null;
        expect(user).that.is.an('object');
        expect(isAlreadyExist).to.be.false;
        done();
      });
    });

  //Given test cases passes if the user with given email already exist
  it('#userAlreadyExist', function (done) {
    UserController.register({'email' :'sakshi1@gmail.com', 'password': '123456'},function(err, user, isAlreadyExist){
      expect(err).to.be.null;
      expect(isAlreadyExist).to.be.true;
      done();
    });
  });
});