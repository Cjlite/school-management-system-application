const { StudentRegistration, ProgramApplication, AcademicQualification } = require('../models/studentRegistrationModel');

exports.submitRegistration = async (req, res) => {
    try {
        const formData = req.body;
        console.log("formData", formData);

        const registration = new StudentRegistration(formData);
        await registration.save();

        res.status(201).json({ message: 'Registration submitted successfully' });
    } catch (error) {
        console.error('Error in submitRegistration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.submitForm = async (req, res) => {
    try {
        const formData = req.body;
        console.log("formData", formData);

        const programApplication = new ProgramApplication(formData);
        await programApplication.save();

        res.status(201).json({ message: 'Program & application data submitted successfully' });
    } catch (error) {
        console.error('Error in submit Program & application', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createAcademicQualification = async (req, res) => {
    try {
        const formData = req.body;
        console.log("formData", formData);

        const academicQualification = new AcademicQualification(req.body);
        await academicQualification.save();

        res.status(201).json({ message: 'Academic qualification saved successfully' });
    } catch (error) {
        console.error('Error saving academic qualification:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
