
// Main Pages /////////////////////////////////
/**
 * GET /
 * Home page.
 */
exports.home = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

/**
 * GET /
 * Resume page.
 */
exports.resume = (req, res) => {
  res.render('myThings/resume', {
    title: 'Resume'
  });
};

/**
 * GET /
 * Blog page.
 */
exports.blog = (req, res) => {
  res.render('myThings/blog', {
    title: 'Blog'
  });
};