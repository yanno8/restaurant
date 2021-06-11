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

router.get('/login', (req, res, next) => {
	return res.render('login.html');
});

router.post('/login', (req, res, next) => {
	//console.log(req.body);
	User.findOne({ username: req.body.username }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.redirect('/user');

			} else {
				res.redirect('/login');
			}
		}
	});
});

router.get('/register', (req, res, next) => {
	return res.render('register.html');
});

router.post('/register', (req, res, next) => {
	//  console.log(req.body);
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
					res.redirect('/login');
				} else {
					res.redirect('/register');
				}

			});
		}
	}
});

router.get('/admin', (req, res, next) => {
	return res.render('admin.html');
});

router.post('/admin', (req, res, next) => {
	//console.log(req.body);
	User.findOne({ username: req.body.username }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.redirect('/dashboard');

			} else {
				res.redirect('/admin');
			}
		}
	});
});

router.get('/dashboard', (req, res, next) => {
	return res.render('dashboard.html');
});

router.get('/user', (req, res, next) => {
	return res.render('user.html');
});

router.get('/calendar', (req, res, next) => {
	return res.render('calendar.html');
});

router.get('/menu', (req, res, next) => {
	return res.render('menu.html');
});

router.get('/dessert', (req, res, next) => {
	return res.render('dessert.html');
});

router.get('/main_course', (req, res, next) => {
	return res.render('main_course.html');
});

router.get('/starter_dish', (req, res, next) => {
	return res.render('starter_dish.html');
});

router.get('/fast-food', (req, res, next) => {
	return res.render('fast-food.html');
});

router.get('/coffee', (req, res, next) => {
	return res.render('coffee.html');
});

router.get('/order', (req, res, next) => {
	return res.render('order.html');
});

router.get('/forget-pass', (req, res, next) => {
	return res.render('forgetPass.html');
});

module.exports = router;