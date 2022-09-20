const express = require('express');
const { auth: controller } = require('../../controllers');

const router = express.Router();

router.post('/signup', controller.signUp);

// router.post('/signin', controller);

// router.post('/signout', controller);

module.exports = router;
