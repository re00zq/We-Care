const express = require('express');

const {
  getAllDoctors,
  getDoctor,
  updateDoctorStatus,
} = require('.././controllers/doctorController');
const { doctorSignUP } = require('../controllers/authController');

const { restrictTo } = require('../Middlewares/authorization');
const { protect } = require('../Middlewares/authentication');

const router = express.Router();

router.post('/signup', doctorSignUP);
router.route('/').get(getAllDoctors);

router.route('/:id').get(getDoctor);
router.patch('/:id', protect, restrictTo('Coordinator'), updateDoctorStatus);

module.exports = router;
