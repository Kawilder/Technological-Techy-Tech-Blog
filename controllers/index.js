const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const postRoutes = require('./selectedPost');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/post', postRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

