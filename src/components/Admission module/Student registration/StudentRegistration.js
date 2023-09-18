import React, { useState } from 'react';
import './StudentRegistrationForm.css';
import { useNavigate } from 'react-router-dom';

function StudentRegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        standard: '',
        privacyAgreement: false,
        countryCode: '+91',
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/submit-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Registration submitted successfully');
                navigate("/horizontalLinearStepper");
            } else {
                console.error('Failed to submit registration');
            }
        } catch (error) {
            console.error('Error submitting registration:', error);
        }
    };

    return (
        <div className="registration-container">
            {/* <h2>Student </h2> */}
            <div className="form-header">
                <div className="form-title">Registration Form 2023-24</div>
            </div>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <input
                        type="text"
                        id="fullName"
                        placeholder='Enter Full Name'
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mobileinput">
                    {/* <div className="country-code"> */}
                    <select
                        id="countryCode"
                        className='selectCountryCode'
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                    >
                        <option value="+1">+1 </option>
                        <option value="+1">+2 </option>
                        <option value="+1">+3 </option>
                        <option value="+1">+4 </option>
                        <option value="+91">+91</option>
                        {/* Add more country codes as needed */}
                    </select>
                    {/* </div> */}
                    <input
                        type="text"
                        id="mobileNumber"
                        placeholder='Enter Mobile Number'
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter Email ID'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <select
                        id="standard"
                        name="standard"
                        value={formData.standard}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select the Standard</option>
                        <option value="1">Standard 1</option>
                        <option value="2">Standard 2</option>
                        <option value="3">Standard 3</option>
                    </select>
                </div>
                <div className="terms-privacy">
                    <input
                        type="checkbox"
                        name="privacyAgreement"
                        checked={formData.privacyAgreement}
                        onChange={handleChange}
                        required
                    />
                    <label>School terms & privacy</label>
                </div>
                <div className="form-group">
                    <button className='register-submit' type="submit"><h5>Submit (Start application form)</h5></button>
                </div>
            </form>
        </div>
    );
}

export default StudentRegistrationForm;
