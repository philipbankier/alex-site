var express = require('express');

/**
 * Controllers (route handlers).
 */
const contactController = require('./controllers/contact');
const pagesController = require('./controllers/pages');

var router = express.Router();

/**  
 * Primary route
 */
router.route('/').get(pagesController.home);
router.route('/contact').get(contactController.getContact);
router.route('/contact').post(contactController.postContact);
router.route('/resume').get(pagesController.resume);

module.exports = router;