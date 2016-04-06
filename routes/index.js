var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { user: req.user });
});

router.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'https://www.googleapis.com/auth/plus.login',
  	  'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/gmail.compose' ] }
));

router.get('/auth/google/callback',
	passport.authenticate( 'google', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
})


module.exports = router;
