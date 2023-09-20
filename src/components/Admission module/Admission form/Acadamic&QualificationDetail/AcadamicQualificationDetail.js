import React, { useState } from 'react';
import './AcadamicQualificationDetail.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Axios from 'axios';

function AcademicQualificationDetail() {
    const [formData, setFormData] = useState({
        schoolName: '',
        city: '',
        state: '',
        GPAorExamScores: '',
        collegeUniversityName: '',
        collegeCity: '',
        collegeState: '',
        degreeProgram: '',
        majorFieldofStudy: '',
        yearofEnrollment: '',
        yearofGraduation: '',
        degreeObtained: '',
        CGPAorPercentage: '',
        HonorsorAwards: '',
        graduateCollegeName: '',
        pgCity: '',
        pgState: '',
        pgDegreeProgram: '',
        pgMajorFieldofStudy: '',
        pgYearofEnrollment: '',
        yearofPostGraduation: '',
        courseCertificationName: '',
        institutionProvider: '',
        dateCompleted: '',
        Duration: '',
    });

    const [formVisible, setFormVisible] = useState(true);
    const [personalFormVisible, setPersonalFormVisible] = useState(true);
    const [parentsFormVisible, setParentsFormVisible] = useState(true);
    const [guardianFormVisible, setGuardianFormVisible] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('http://localhost:5000/api/submit-academicapplicationdetail', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response:', response.data);

            if (response) {
                console.log('Academic Qualification Detail submitted successfully');
                // navigate("/horizontalLinearStepper");
            } else {
                console.error('Failed to submit registration');
            }
        } catch (error) {
            console.error('Error submitting registration:', error);
        }
    };

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };
    const togglePersonalFormVisibility = () => {
        setPersonalFormVisible(!personalFormVisible);
    };
    const toggleParentsFormVisibility = () => {
        setParentsFormVisible(!parentsFormVisible);
    };
    const toggleGuardianFormVisibility = () => {
        setGuardianFormVisible(!guardianFormVisible);
    };

    return (
        <div className='form-root'>
            <form className="my-form" onSubmit={handleSubmit}>

                {/* High School/Secondary School details */}
                <div className={`form-wrapper ${formVisible ? 'visible' : 'hidden'}`}>
                    <div className="toggle-button" onClick={toggleFormVisibility}>
                        {formVisible ? (
                            <>
                                <KeyboardArrowRightIcon />
                                <span>High School/Secondary School details</span>
                            </>
                        ) : (
                            <>
                                <KeyboardArrowDownIcon />
                                <span>High School/Secondary School details</span>
                            </>
                        )}
                    </div>

                    {formVisible && (
                        <div className="form-section">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="schoolName">School Name:</label>
                                    <input
                                        type="text"
                                        id="schoolName"
                                        name="schoolName"
                                        value={formData.schoolName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="city">City:</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="state">State:</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="GPAorExamScores">GPA or Exam Scores (if applicable)</label>
                                    <input
                                        type="text"
                                        id="GPAorExamScores"
                                        name="GPAorExamScores"
                                        value={formData.GPAorExamScores}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="section-space"></div>

                {/* Undergraduate/College */}
                <div className={`form-wrapper ${personalFormVisible ? 'visible' : 'hidden'}`}>
                    <div className="toggle-button" onClick={togglePersonalFormVisibility}>
                        {personalFormVisible ? (
                            <>
                                <KeyboardArrowRightIcon />
                                <span>Undergraduate/College</span>
                            </>
                        ) : (
                            <>
                                <KeyboardArrowDownIcon />
                                <span>Undergraduate/College</span>
                            </>
                        )}
                    </div>

                    {personalFormVisible && (
                        <div className="form-section">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="collegeUniversityName">College/University Name:</label>
                                    <input
                                        type="text"
                                        id="collegeUniversityName"
                                        name="collegeUniversityName"
                                        value={formData.collegeUniversityName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="collegeCity">City:</label>
                                    <input
                                        type="text"
                                        id="collegeCity"
                                        name="collegeCity"
                                        value={formData.collegeCity}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="collegeState">State:</label>
                                    <input
                                        type="text"
                                        id="collegeState"
                                        name="collegeState"
                                        value={formData.collegeState}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="degreeProgram">Degree Program:</label>
                                    <input
                                        type="text"
                                        id="degreeProgram"
                                        name="degreeProgram"
                                        value={formData.degreeProgram}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="majorFieldofStudy">Major/Field of Study:</label>
                                    <input
                                        type="text"
                                        id="majorFieldofStudy"
                                        name="majorFieldofStudy"
                                        value={formData.majorFieldofStudy}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="yearofEnrollment">Year of Enrollment:</label>
                                    <input
                                        type="text"
                                        id="yearofEnrollment"
                                        name="yearofEnrollment"
                                        value={formData.yearofEnrollment}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="yearofGraduation">Year of Graduation:</label>
                                    <input
                                        type="text"
                                        id="yearofGraduation"
                                        name="yearofGraduation"
                                        value={formData.yearofGraduation}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="degreeObtained">Degree Obtained (e.g., Bachelor of Science):</label>
                                    <input
                                        type="text"
                                        id="degreeObtained"
                                        name="degreeObtained"
                                        value={formData.degreeObtained}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="CGPAorPercentage">CGPA or Percentage:</label>
                                    <input
                                        type="text"
                                        id="CGPAorPercentage"
                                        name="CGPAorPercentage"
                                        value={formData.CGPAorPercentage}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="HonorsorAwards">Honors or Awards (if applicable):</label>
                                    <input
                                        type="text"
                                        id="HonorsorAwards"
                                        name="HonorsorAwards"
                                        value={formData.HonorsorAwards}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="section-space"></div>

                {/* Graduate/Postgraduate detail (if applicable) */}
                <div className={`form-wrapper ${parentsFormVisible ? 'visible' : 'hidden'}`}>
                    <div className="toggle-button" onClick={toggleParentsFormVisibility}>
                        {parentsFormVisible ? (
                            <>
                                <KeyboardArrowRightIcon />
                                <span>Graduate/Postgraduate detail (if applicable)</span>
                            </>
                        ) : (
                            <>
                                <KeyboardArrowDownIcon />
                                <span>Graduate/Postgraduate detail (if applicable)</span>
                            </>
                        )}
                    </div>

                    {parentsFormVisible && (
                        <div className="form-section">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="graduateCollegeName">Graduate College Name:</label>
                                    <input
                                        type="text"
                                        id="graduateCollegeName"
                                        name="graduateCollegeName"
                                        value={formData.graduateCollegeName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pgCity">City:</label>
                                    <input
                                        type="text"
                                        id="pgCity"
                                        name="pgCity"
                                        value={formData.pgCity}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="pgState">State:</label>
                                    <input
                                        type="text"
                                        id="pgState"
                                        name="pgState"
                                        value={formData.pgState}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pgDegreeProgram">Degree Program:</label>
                                    <input
                                        type="text"
                                        id="pgDegreeProgram"
                                        name="pgDegreeProgram"
                                        value={formData.pgDegreeProgram}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="pgMajorFieldofStudy">Major/Field of Study:</label>
                                    <input
                                        type="text"
                                        id="pgMajorFieldofStudy"
                                        name="pgMajorFieldofStudy"
                                        value={formData.pgMajorFieldofStudy}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pgYearofEnrollment">Year of Enrollment:</label>
                                    <input
                                        type="text"
                                        id="pgYearofEnrollment"
                                        name="pgYearofEnrollment"
                                        value={formData.pgYearofEnrollment}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="yearofPostGraduation">Year of Post Graduation:</label>
                                    <input
                                        type="text"
                                        id="yearofPostGraduation"
                                        name="yearofPostGraduation"
                                        value={formData.yearofPostGraduation}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="degreeObtained">Degree Obtained (e.g., Master of Business Administration):</label>
                                    <input
                                        type="text"
                                        id="degreeObtained"
                                        name="degreeObtained"
                                        value={formData.degreeObtained}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="CGPAorPercentage">CGPA or Percentage:</label>
                                    <input
                                        type="text"
                                        id="CGPAorPercentage"
                                        name="CGPAorPercentage"
                                        value={formData.CGPAorPercentage}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="section-space"></div>

                {/* Additional Certifications or Courses details (if any) */}
                <div className={`form-wrapper ${guardianFormVisible ? 'visible' : 'hidden'}`}>
                    <div className="toggle-button" onClick={toggleGuardianFormVisibility}>
                        {guardianFormVisible ? (
                            <>
                                <KeyboardArrowRightIcon />
                                <span>Additional Certifications or Courses details (if any)</span>
                            </>
                        ) : (
                            <>
                                <KeyboardArrowDownIcon />
                                <span>Additional Certifications or Courses details (if any)</span>
                            </>
                        )}
                    </div>

                    {guardianFormVisible && (
                        <div className="form-section">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="courseCertificationName">Course/Certification Name:</label>
                                    <input
                                        type="text"
                                        id="courseCertificationName"
                                        name="courseCertificationName"
                                        value={formData.courseCertificationName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="institutionProvider">Institution/Provider:</label>
                                    <input
                                        type="text"
                                        id="institutionProvider"
                                        name="institutionProvider"
                                        value={formData.institutionProvider}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City:</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="state">State:</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="dateCompleted">Date Completed:</label>
                                    <input
                                        type="date"
                                        id="dateCompleted"
                                        name="dateCompleted"
                                        value={formData.dateCompleted}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Duration">Duration:</label>
                                    <input
                                        type="text"
                                        id="Duration"
                                        name="Duration"
                                        value={formData.Duration}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <div className="submit-button-row">
                    <button
                        className='draft-button'
                        type="submit">
                        Save as draft
                    </button>
                    <button className='continue-button' type="submit">Save and continue</button>
                </div>

            </form>
        </div>
    );
}

export default AcademicQualificationDetail;
