// signup form filter
exports.signupForm = function(req, res) {
  res.render('chapter7/signupForm');
};

// signup form filter, check when submit
exports.signupFormSubmitted = function(req, res) {
  res.render('chapter7/signupFormSubmitted');
};
