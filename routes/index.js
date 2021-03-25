var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	return res.render('index.ejs');
});

router.get('/booking', (req, res, next) => {
	return res.render('booking.ejs');
});

router.get('/confirmation', (req, res, next) => {
	return res.render('confirmation.ejs');
});

router.get('/message', (req, res, next) => {
	return res.render('message.ejs');
});

router.get('/user/login', (req, res, next) => {
	return res.render('login.ejs');
});

router.get('/admin', (req, res, next) => {
	return res.render('admin.ejs');
});

router.get('/calendar', (req, res, next) => {
	return res.render('calendar.ejs');
});