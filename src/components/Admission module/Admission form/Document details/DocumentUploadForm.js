import React, { useState } from 'react';
import './DocumentUploadForm.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Axios from 'axios';

function DocumentUploadForm() {
    const [documents, setDocuments] = useState({
        tenthMarksheet: null,
        twelfthMarksheet: null,
        degreeCertificate: null,
        casteCertificate: null,
        nationalityCertificate: null,
        domicileCertificate: null,
    });

    const [formVisible, setFormVisible] = useState(true);
    const [personalFormVisible, setPersonalFormVisible] = useState(true);
    const [parentsFormVisible, setParentsFormVisible] = useState(true);
    const [guardianFormVisible, setGuardianFormVisible] = useState(true);

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setDocuments({ ...documents, [name]: files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('http://localhost:5000/api/submit-academicapplicationdetail', documents, {
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

                <div className={`form-wrapper ${formVisible ? 'visible' : 'hidden'}`}>
                    <div className="toggle-button" onClick={toggleFormVisibility}>
                        {formVisible ? (
                            <>
                                <KeyboardArrowRightIcon />
                                <span>Marksheet & Certifications</span>
                            </>
                        ) : (
                            <>
                                <KeyboardArrowDownIcon />
                                <span>Marksheet & Certifications</span>
                            </>
                        )}
                    </div>

                    {formVisible && (
                        <div className="form-section">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="tenthMarksheet">10th Marksheet:</label>
                                    <input
                                        type="file"
                                        id="tenthMarksheet"
                                        name="tenthMarksheet"
                                        value={documents.tenthMarksheet}
                                        accept='.pdf, .jpg, .jpeg, .png'
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="twelfthMarksheet">12th Marksheet:</label>
                                    <input
                                        type="file"
                                        id="twelfthMarksheet"
                                        name="twelfthMarksheet"
                                        value={documents.twelfthMarksheet}
                                        accept='.pdf, .jpg, .jpeg, .png'
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="degreeCertificate">Degree Certificate:</label>
                                    <input
                                        type="file"
                                        id="degreeCertificate"
                                        name="degreeCertificate"
                                        value={documents.degreeCertificate}
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="section-space"></div>

                <div className={`form-wrapper ${personalFormVisible ? 'visible' : 'hidden'}`}>
                    <div className="toggle-button" onClick={togglePersonalFormVisibility}>
                        {personalFormVisible ? (
                            <>
                                <KeyboardArrowRightIcon />
                                <span>Other Documents</span>
                            </>
                        ) : (
                            <>
                                <KeyboardArrowDownIcon />
                                <span>Other Documents</span>
                            </>
                        )}
                    </div>

                    {personalFormVisible && (
                        <div className="form-section">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="casteCertificate">Caste Certificate:</label>
                                    <input
                                        type="file"
                                        id="casteCertificate"
                                        name="casteCertificate"
                                        value={documents.casteCertificate}
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nationalityCertificate">Nationality Certificate:</label>
                                    <input
                                        type="file"
                                        id="nationalityCertificate"
                                        name="nationalityCertificate"
                                        value={documents.nationalityCertificate}
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="domicileCertificate">Domicile Certificate:</label>
                                    <input
                                        type="file"
                                        id="domicileCertificate"
                                        name="domicileCertificate"
                                        value={documents.domicileCertificate}
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                <div className="section-space"></div>

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

export default DocumentUploadForm;
