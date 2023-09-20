const express = require('express');
const router = express.Router();
const studentRegistrationController = require('../controllers/studentRegistrationController');

router.post('/submit-registration', studentRegistrationController.submitRegistration);
router.post('/submit-programapplicationdetail', studentRegistrationController.submitForm);
router.post('/submit-academicapplicationdetail', studentRegistrationController.createAcademicQualification);

module.exports = router;
