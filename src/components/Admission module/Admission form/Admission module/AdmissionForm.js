import React, { useState } from 'react';
// import './AdmissionForm.css';

const AdmissionForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        PlaceOfBirth: '',
        Religion: '',
        Nationality: '',
        selectedReligion: '',
        selectedCast: '',
        Address: '',
        email: '',
        phone: '',
        selectedCourse: '',
        documents: [],
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            documents: files,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic (e.g., send data to the backend)
        // You would typically make an API call here using Axios or Fetch
        console.log(formData);
    };

    return (
        <div className="admission-form">
            <h3>School Admission Form</h3>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <div className="name-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="name-group">
                        <label htmlFor="middleName">Middle Name:</label>
                        <input
                            type="text"
                            id="middleName"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="name-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="date-place-group">
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="date-place-group">
                        <label htmlFor="dateOfBirth">Place of Birth:</label>
                        <input
                            type="text"
                            id="PlaceOfBirth"
                            name="PlaceOfBirth"
                            value={formData.PlaceOfBirth}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="nationality-religion-cast-group">
                        <label htmlFor="Nationality">Nationality:</label>
                        <input
                            type="text"
                            id="Nationality"
                            name="Nationality"
                            value={formData.Nationality}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="nationality-religion-cast-group">
                        <label htmlFor="Religion">Religion:</label>
                        <select
                            id="selectedReligion"
                            name="selectedReligion"
                            value={formData.selectedReligion}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">-- Select Religion --</option>
                            <option value="Mathematics">Hindu</option>
                            <option value="Science">Jain</option>
                            <option value="History">Budha</option>
                        </select>
                    </div>
                    <div className="nationality-religion-cast-group">
                        <label htmlFor="Cast">Cast:</label>
                        <select
                            id="selectedCast"
                            name="selectedCast"
                            value={formData.selectedCast}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">-- Select Cast --</option>
                            <option value="Maratha">Maratha</option>
                            <option value="Kunbi">Kunbi</option>
                            <option value="Patil">Patil</option>
                        </select>
                    </div>
                </div>

                <div className='form-group'>
                    <div className="gender">
                        <label htmlFor="Gender">Gender:</label>
                        <select
                            id="selectedGender"
                            name="selectedGender"
                            value={formData.selectedGender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">-- Select Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="Address">Residential Address</label>
                    <input
                        type="text"
                        id="Address"
                        name="Address"
                        value={formData.Address}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="Address">Street Address line2:</label>
                    <input
                        type="text"
                        id="Address"
                        name="Address"
                        value={formData.Address}
                        onChange={handleInputChange}
                        required
                    />
                    <div>
                        <div>
                            <label htmlFor="City">City:</label>
                            <input
                                type="text"
                                id="City"
                                name="City"
                                value={formData.City}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="State">State:</label>
                            <input
                                type="text"
                                id="State"
                                name="State"
                                value={formData.State}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="Zip-Code">Postal /:</label>
                            <input
                                type="text"
                                id="Zip-Code"
                                name="Zip-Code"
                                value={formData.ZipCode}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="selectedCourse">Select Course:</label>
                    <select
                        id="selectedCourse"
                        name="selectedCourse"
                        value={formData.selectedCourse}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">-- Select Course --</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="documents">Upload Documents:</label>
                    <input
                        type="file"
                        id="documents"
                        name="documents"
                        multiple
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button className='submit-button' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdmissionForm;
