var express = require('express'),
    router = express.Router(),
    User = require('../models/user');

router.get('/', (req, res, next) => {
	return res.render('index.html');
});

router.get('/booking', (req, res, next) => {
	return res.render('booking.html');
});

router.get('/confirmation', (req, res, next) => {
	return res.render('confirmation.html');
});

router.get('/message', (req, res, next) => {
	return res.render('message.html');
});

router.get('/userLogin', (req, res, next) => {
	return res.render('login.html');
});

router.post('/userLogin', (req, res, next) => {
	//console.log(req.body);
	User.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.redirect('/booking');

			} else {
				res.redirect('/userLogin');
			}
		} else {
			res.redirect('/userLogin');
		}
	});
});

router.get('/userRegister', (req, res, next) => {
	return res.render('register.html');
});

router.post('/userRegister', (req, res, next) => {
	console.log(req.body);
	var personInfo = req.body;

     /*if (personInfo.password.length < 6) {
    res.send({ msg: 'Password must be at least 6 characters' });
  }*/
	if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({ email: personInfo.email }, (err, data) => {
				if (!data) {
					var c;
					User.findOne({}, (err, data) => {

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						} else {
							c = 1;
						}

						var newPerson = new User({
							unique_id: c,
							email: personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf
						});

						newPerson.save((err, Person) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.send({ "Success": "You are registered, You can login now." });
				} else {
					res.send({ "Success": "Email is already used." });
				}

			});
		} else {
			res.send({ "Success": "password is not matched" });
		}
	}
});

router.get('/admin', (req, res, next) => {
	return res.render('admin.html');
});

router.get('/calendar', (req, res, next) => {
	return res.render('calendar.html');
});

module.exports = router;