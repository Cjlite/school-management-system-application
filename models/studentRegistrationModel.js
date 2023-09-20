const mongoose = require('mongoose');

const studentRegistrationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    standard: {
        type: String,
        required: true,
    },
    privacyAgreement: {
        type: Boolean,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const programApplicationSchema = new mongoose.Schema({
    institute: String,
    levelOfStudy: String,
    program: String,
    admissionMode: String,
    howDidYouKnow: String,
    title: String,
    fullName: String,
    fatherName: String,
    mothersName: String,
    occupation: String,
    annualIncome: String,
    address: String,
    pincode: String,
    telNo: String,
    mobilePhNo: String,
    emailID: String,
    guardianName: String,
    guardianRelationship: String,
    guardiansAddress: String,
    guardiansPincode: String,
    guardiansMobileNumber: String,
    guardiansEmailId: String,
});

const academicQualificationSchema = new mongoose.Schema({
    schoolName: String,
    city: String,
    state: String,
    GPAorExamScores: String,
    collegeUniversityName: String,
    collegeCity: String,
    collegeState: String,
    degreeProgram: String,
    majorFieldofStudy: String,
    yearofEnrollment: String,
    yearofGraduation: String,
    degreeObtained: String,
    CGPAorPercentage: String,
    HonorsorAwards: String,
    graduateCollegeName: String,
    pgCity: String,
    pgState: String,
    pgDegreeProgram: String,
    pgMajorFieldofStudy: String,
    pgYearofEnrollment: String,
    yearofPostGraduation: String,
    courseCertificationName: String,
    institutionProvider: String,
    dateCompleted: Date,
    Duration: String,
});

const StudentRegistration = mongoose.model('StudentRegistration', studentRegistrationSchema);
const ProgramApplication = mongoose.model('ProgramApplication', programApplicationSchema);
const AcademicQualification = mongoose.model('academicQualificationSchema', academicQualificationSchema);

module.exports = { StudentRegistration, ProgramApplication, AcademicQualification };
