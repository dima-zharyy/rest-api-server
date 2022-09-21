const express = require('express');
const { auth: controller } = require('../../controllers');
const { auth } = require('../../middlewares');

const router = express.Router();

router.post('/signup', controller.signUp);

router.post('/signin', controller.signIn);

router.post('/signout', auth, controller.signOut);

router.get('/current', auth, controller.getCurrent);

module.exports = router;
