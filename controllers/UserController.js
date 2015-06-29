"use strict";

var User = require('../models/user');

exports.register = function (data, callback) {
  var userData = {'email': data.email, 'password': data.password};
  User.findOne({'email': data.email}, function (err, user) {
    if (err) {
      callback(err, user);
    } else if (user) {
      callback(err, user, true);
    } else {
      new User(userData).save(function (err, newUser) {
        if (err) {
          callback(err, newUser);
        } else {
          callback(err, newUser, false)
        }
      });
    }
  })
};