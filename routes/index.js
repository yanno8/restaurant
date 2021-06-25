const { data } = require('jquery');

var express = require('express'),
    router = express.Router(),
    User = require('../models/user'),
    Waiter = require('../models/waiter'),
    Deliver = require('../models/deliver'),
    Admin = require('../models/admin'),
	Booking = require('../models/booking');

router.get('/', (req, res, next) => {
	return res.render('index.html');
});

router.get('/booking', (req, res, next) => {
	return res.render('booking.html');
});

router.post('/booking', (req, res, next) => {
	var bookingInfo = req.body;

    if (bookingInfo.telephone.length != 9) {
    res.send({ msg: 'the phone number must be 9 numbers' });
	}
	if (!bookingInfo.email || !bookingInfo.city || !bookingInfo.telephone || !bookingInfo.confEmail || !bookingInfo.lastName || !bookingInfo.date || !bookingInfo.firstName || !bookingInfo.time || !bookingInfo.table) {
	res.send();
	} else {
			if (!data) {
				var c;
				Booking.findOne({}, (err, data) => {
					if (data) {
						// console.log(data);
					    c = data.unique_id + 1;
						} else {
							c = 1;
					}
					var booking = new Booking({
						unique_id: c,
						email: bookingInfo.email,
						table: bookingInfo.table,
						city: bookingInfo.city,
						date: bookingInfo.date,
						lastName: bookingInfo.lastName,
						firstName: bookingInfo.firstName,
						telephone: bookingInfo.telephone,
						confEmail: bookingInfo.confEmail,
						time: bookingInfo.time,
						title: bookingInfo.title
					});

					booking.save((err, Person) => {
						if (err)
							console.log(err);
						else
							console.log('Success');
					});

					}).sort({ _id: -1 }).limit(1);
					res.redirect('/confirmation');
				} else {
					res.redirect('/booking');
			}
		}
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

    if (personInfo.password.length < 6) {
    res.send({ msg: 'Password must be at least 6 characters' });
	}
	if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.phone || !personInfo.birthday || !personInfo.lastName || !personInfo.birthdayPlace || !personInfo.firstName || !personInfo.passwordConf || !personInfo.address) {
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({ email: personInfo.email }, (err, data) => {
				if (!data) {
					var c;
					User.findOne({}, (err, data) => {

						if (data) {
							// console.log(data);
							c = data.unique_id + 1;
						} else {
							c = 1;
						}

						var newPerson = new User({
							unique_id: c,
							email: personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							address: personInfo.address,
							lastName: personInfo.lastName,
							firstName: personInfo.firstName,
							phone: personInfo.phone,
							birthday: personInfo.birthday,
							birthdayPlace: personInfo.birthdayPlace,
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

router.get('/waiter', (req, res, next) => {
	return res.render('waiter.html');
});

router.post('/waiter', (req, res, next) => {
	//  console.log(req.body);
	var waiterInfo = req.body;

    if (waiterInfo.password.length < 6) {
    res.send({ msg: 'Password must be at least 6 characters' });
	}
	if (!waiterInfo.email || !waiterInfo.username || !waiterInfo.password || !waiterInfo.phone || !waiterInfo.birthday || !waiterInfo.lastName || !waiterInfo.birthdayPlace || !waiterInfo.firstName || !waiterInfo.passwordConf || !waiterInfo.address) {
		res.send();
	} else {
		if (waiterInfo.password == waiterInfo.passwordConf) {

			Waiter.findOne({ email: waiterInfo.email }, (err, data) => {
				if (!data) {
					var c;
					Waiter.findOne({}, (err, data) => {

						if (data) {
							// console.log(data);
							c = data.matricule + 1;
						} else {
							c = 1;
						}

						var waiter = new Waiter({
							matricule: c,
							email: waiterInfo.email,
							username: waiterInfo.username,
							password: waiterInfo.password,
							address: waiterInfo.address,
							lastName: waiterInfo.lastName,
							firstName: waiterInfo.firstName,
							phone: waiterInfo.phone,
							birthday: waiterInfo.birthday,
							birthdayPlace: waiterInfo.birthdayPlace,
							passwordConf: waiterInfo.passwordConf
						});

						waiter.save((err, Waiter) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.redirect('/dashboard');
				} else {
					res.redirect('/waiter');
				}

			});
		}
	}
});

router.get('/deliver', (req, res, next) => {
	return res.render('deliver.html');
});

router.post('/deliver', (req, res, next) => {
	//  console.log(req.body);
	var deliverInfo = req.body;

    if (deliverInfo.password.length < 6) {
    res.send({ msg: 'Password must be at least 6 characters' });
	}
	if (!deliverInfo.email || !deliverInfo.username || !deliverInfo.password || !deliverInfo.phone || !deliverInfo.birthday || !deliverInfo.lastName || !deliverInfo.birthdayPlace || !deliverInfo.firstName || !deliverInfo.passwordConf || !deliverInfo.address) {
		res.send();
	} else {
		if (deliverInfo.password == deliverInfo.passwordConf) {

			Deliver.findOne({ email: deliverInfo.email }, (err, data) => {
				if (!data) {
					var c;
					Deliver.findOne({}, (err, data) => {

						if (data) {
							console.log(data);
							c = data.matricule + 1;
						} else {
							c = 1;
						}

						var deliver = new Deliver({
							matricule: c,
							email: deliverInfo.email,
							username: deliverInfo.username,
							password: deliverInfo.password,
							address: deliverInfo.address,
							lastName: deliverInfo.lastName,
							firstName: deliverInfo.firstName,
							phone: deliverInfo.phone,
							birthday: deliverInfo.birthday,
							birthdayPlace: deliverInfo.birthdayPlace,
							passwordConf: deliverInfo.passwordConf
						});

						deliver.save((err, Deliver) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.redirect('/dashboard');
				} else {
					res.redirect('/deliver');
				}

			});
		}
	}
});

router.get('/logout', (req, res, next) => {
	req.session.destroy(function deleteUser() {
		res.redirect('/login')
		// console.log('Log out succeeded');
	});
}); 

router.get('/admin', (req, res, next) => {
	return res.render('admin.html');
});

router.post('/admin', (req, res, next) => {
	//console.log(req.body);
	Admin.findOne({ username: req.body.username }, (err, data) => {
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

router.get('/log_out', (req, res, next) => {
	req.session.destroy(function deleteUser() {
		res.redirect('/admin')
		// console.log('Log out succeeded');
	});
}); 

router.get('/dashboard', (req, res, next) => {
	return res.render('dashboard.html');
});

router.get('/contact', (req, res, next) => {
	return res.render('contact.html');
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

router.get('/chat', (req, res, next) => {
	return res.render('chat.html');
});

module.exports = router;