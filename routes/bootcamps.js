const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius
} = require('../controllers/bootcamps');

// Include other resource routers

const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resource routers

router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .put(updateBootcamp)
  .delete(deleteBootcamp)
  .get(getBootcamp);

module.exports = router;
