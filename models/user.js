var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  password: String,
  email: String
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;