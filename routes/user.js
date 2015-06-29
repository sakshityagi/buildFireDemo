var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* Register User */
router.post('/', function (req, res) {
    UserController.register(req.body, function (err, data, exists) {
        if (err) {
            res.status(500).send({message: "Error registering user. Please try again later.", statusCode: 500});
        } else if (exists) {
            res.status(201).send({
                message: "User with given email Id already exist. Please try with another email.",
                statusCode: 201
            });
        } else {
            res.status(200).send({message: "User registered successfully.", statusCode: 200});
        }
    });
});

module.exports = router;
