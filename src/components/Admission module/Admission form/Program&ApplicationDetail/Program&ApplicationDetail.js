import React, { useState } from 'react';
import './Program&ApplicationDetail.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ProgramApplicationDetail() {
    const [formData, setFormData] = useState({
        institute: '',
        levelOfStudy: '',
        program: '',
        admissionMode: '',
        howDidYouKnow: '',
        title: '',
        fullName: '',
        fatherName: '',
        mothersName: '',
        occupation: '',
        annualIncome: '',
        address: '',
        pincode: '',
        telNo: '',
        mobilePhNo: '',
        emailID: '',
        guardianName: '',
        guardianRelationship: '',
        guardiansAddress: '',
        guardiansPincode: '',
        guardiansMobileNumber: '',
        guardiansEmailId: '',
    });

    const [formVisible, setFormVisible] = useState(true);
    const [personalFormVisible, setPersonalFormVisible] = useState(true);
    const [parentsFormVisible, setParentsFormVisible] = useState(true);
    const [guardianFormVisible, setGuardianFormVisible] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data, e.g., submit it to the server or perform other actions.
        console.log(formData); // You can use formData for further processing.
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
            <div className={`form-wrapper ${formVisible ? 'visible' : 'hidden'}`}>
                <div className="toggle-button" onClick={toggleFormVisibility}>
                    {formVisible ? (
                        <>
                            <KeyboardArrowRightIcon />
                            <span>Program details</span>
                        </>
                    ) : (
                        <>
                            <KeyboardArrowDownIcon />
                            <span>Program details</span>
                        </>
                    )}
                </div>

                {formVisible && (
                    <form className="my-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="institute">Institute:</label>
                                <input
                                    type="text"
                                    id="institute"
                                    name="institute"
                                    value={formData.institute}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="levelOfStudy">Level of Study:</label>
                                <select
                                    id="levelOfStudy"
                                    name="levelOfStudy"
                                    value={formData.levelOfStudy}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Level of Study</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Postgraduate">Postgraduate</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="program">Program:</label>
                                <select
                                    id="program"
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Program</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Engineering">Engineering</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="admissionMode">Admission Mode:</label>
                                <select
                                    id="admissionMode"
                                    name="admissionMode"
                                    value={formData.admissionMode}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Admission Mode</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Distance">Distance</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="howDidYouKnow">How did you get to know about us?</label>
                            <select
                                id="howDidYouKnow"
                                name="howDidYouKnow"
                                value={formData.howDidYouKnow}
                                onChange={handleChange}
                            >
                                <option value="">Select Option</option>
                                <option value="Website">Website</option>
                                <option value="Friend">Friend</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </form>
                )}
            </div>
            <div className="section-space"></div>

            <div className={`form-wrapper ${personalFormVisible ? 'visible' : 'hidden'}`}>
                <div className="toggle-button" onClick={togglePersonalFormVisibility}>
                    {personalFormVisible ? (
                        <>
                            <KeyboardArrowRightIcon />
                            <span>Personal details</span>
                        </>
                    ) : (
                        <>
                            <KeyboardArrowDownIcon />
                            <span>Personal details</span>
                        </>
                    )}
                </div>

                {personalFormVisible && (
                    <form className="my-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <select
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Title</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name:</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="dateOfBirth">Date Of Birth(DD-MM-YYYY):</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bloodGroup">Blood Group:</label>
                                <select
                                    id="bloodGroup"
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="gender">Gender:</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="religion">Religion:</label>
                                <select
                                    id="religion"
                                    name="religion"
                                    value={formData.religion}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Religion</option>
                                    <option value="Christianity">Hindu</option>
                                    <option value="Islam">Jain</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country:</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
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
                                <label htmlFor="district">District:</label>
                                <input
                                    type="text"
                                    id="district"
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passportNo">Passport No (Only for foreign students):</label>
                                <input
                                    type="text"
                                    id="passportNo"
                                    name="passportNo"
                                    value={formData.passportNo}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="aadharCardNumber">Aadhar Card Number:</label>
                                <input
                                    type="text"
                                    id="aadharCardNumber"
                                    name="aadharCardNumber"
                                    value={formData.aadharCardNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passportValidUpto">Passport Valid Upto:</label>
                                <input
                                    type="date"
                                    id="passportValidUpto"
                                    name="passportValidUpto"
                                    value={formData.passportValidUpto}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="telNo">Tel. No:</label>
                                <input
                                    type="text"
                                    id="telNo"
                                    name="telNo"
                                    value={formData.telNo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNumber">Mobile Number:</label>
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="emailId">Email Id:</label>
                                <input
                                    type="email"
                                    id="emailId"
                                    name="emailId"
                                    value={formData.emailId}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
                )}
            </div>
            <div className="section-space"></div>

            <div className={`form-wrapper ${parentsFormVisible ? 'visible' : 'hidden'}`}>
                <div className="toggle-button" onClick={toggleParentsFormVisibility}>
                    {parentsFormVisible ? (
                        <>
                            <KeyboardArrowRightIcon />
                            <span>Parent's Data</span>
                        </>
                    ) : (
                        <>
                            <KeyboardArrowDownIcon />
                            <span>Parent's Data</span>
                        </>
                    )}
                </div>

                {parentsFormVisible && (
                    <form className="my-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="fatherName">Father Name:</label>
                                <input
                                    type="text"
                                    id="fatherName"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mothersName">Mother's Name:</label>
                                <input
                                    type="text"
                                    id="mothersName"
                                    name="mothersName"
                                    value={formData.mothersName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="occupation">Occupation:</label>
                                <input
                                    type="text"
                                    id="occupation"
                                    name="occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="annualIncome">Annual Income:</label>
                                <input
                                    type="text"
                                    id="annualIncome"
                                    name="annualIncome"
                                    value={formData.annualIncome}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="address">Address (Permanent) :</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pincode">Pincode:</label>
                                <input
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="telNo">Tel. No:</label>
                                <input
                                    type="text"
                                    id="telNo"
                                    name="telNo"
                                    value={formData.telNo}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobilePhNo">Mobile Ph. No:</label>
                                <input
                                    type="text"
                                    id="mobilePhNo"
                                    name="mobilePhNo"
                                    value={formData.mobilePhNo}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="emailID">Email ID:</label>
                                <input
                                    type="text"
                                    id="emailID"
                                    name="emailID"
                                    value={formData.emailID}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Rest of the parent's details form fields */}
                        {/* ... */}
                    </form>
                )}
            </div>
            <div className="section-space"></div>

            <div className={`form-wrapper ${guardianFormVisible ? 'visible' : 'hidden'}`}>
                <div className="toggle-button" onClick={toggleGuardianFormVisibility}>
                    {guardianFormVisible ? (
                        <>
                            <KeyboardArrowRightIcon />
                            <span>Guardian Data</span>
                        </>
                    ) : (
                        <>
                            <KeyboardArrowDownIcon />
                            <span>Guardian Data</span>
                        </>
                    )}
                </div>

                {guardianFormVisible && (
                    <form className="my-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="guardianName">Guardian Name:</label>
                                <input
                                    type="text"
                                    id="guardianName"
                                    name="guardianName"
                                    value={formData.guardianName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="guardianRelationship">Guardian Relationship:</label>
                                <input
                                    type="text"
                                    id="guardianRelationship"
                                    name="guardianRelationship"
                                    value={formData.guardianRelationship}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="guardiansAddress">Guardian's Address (Permanent):</label>
                                <input
                                    type="text"
                                    id="guardiansAddress"
                                    name="guardiansAddress"
                                    value={formData.guardiansAddress}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="guardiansPincode">Pincode:</label>
                                <input
                                    type="text"
                                    id="guardiansPincode"
                                    name="guardiansPincode"
                                    value={formData.guardiansPincode}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="guardiansMobileNumber">Guardian's Mobile Number:</label>
                                <input
                                    type="text"
                                    id="guardiansMobileNumber"
                                    name="guardiansMobileNumber"
                                    value={formData.guardiansMobileNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="guardiansEmailId">Guardian's Email Id:</label>
                                <input
                                    type="text"
                                    id="guardiansEmailId"
                                    name="guardiansEmailId"
                                    value={formData.guardiansEmailId}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
                )}

            </div>
            <div className="submit-button-row">
                <button className='draft-button' type="submit">Save as draft</button>
                <button className='continue-button' type="submit">Save and continue</button>
            </div>
        </div>
    );
}

export default ProgramApplicationDetail;
