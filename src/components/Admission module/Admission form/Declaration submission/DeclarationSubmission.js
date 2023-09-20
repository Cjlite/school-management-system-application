
import React, { useState } from 'react';
import './DeclarationandSubmission.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Axios from 'axios';

function DeclarationSubmission() {
    const [formVisible, setFormVisible] = useState(true);
    const [declarationChecked, setDeclarationChecked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!declarationChecked) {
            alert('Please confirm the declaration before submitting.');
            return;
        }

        try {
            const response = await Axios.post('http://localhost:5000/api/submit-academicapplicationdetail', {
                declarationChecked,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response) {
                console.log('Academic Qualification Detail submitted successfully');
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

    const handleDeclarationChange = (e) => {
        setDeclarationChecked(e.target.checked);
    };

    return (
        <div className='form-root'>
            <form className="my-form" onSubmit={handleSubmit}>
                <div className={`form-wrapper ${formVisible ? 'visible' : 'hidden'}`}>

                    <div className="form-section">
                        <div className="form-row">
                            <p>
                                <p>I confirm that I have read, understand, and agreed to the submission guidelines, policies, and submission declaration
                                    of the journal.</p>
                                <p>I confirm that all authors of the manuscript have no conflict of interests to declare.</p>
                                <p>I confirm that the manuscript is the authors' original work and the manuscript has not received prior publication and
                                    is not under consideration for publication elsewhere.</p>
                                <p>On behalf of all Co-Authors, I shall bear full responsibility for the submission.</p>
                                <p>I confirm that all authors listed on the title page have contributed significantly to the work, have read the manuscript,
                                    attest to the validity and legitimacy of the data and its interpretation, and agree to its submission.</p>
                                <p>I confirm that the paper now submitted is not copied or plagiarized version of some other published work.</p>
                                <p>I declare that I shall not submit the paper for publication in any other Journal or Magazine till the decision is made
                                    by journal editors.</p>
                                <p>If the paper is finally accepted by the journal for publication, I confirm that I will either publish the paper
                                    immediately or withdraw it according to withdrawal policies.</p>
                                <p>I understand that submission of false or incorrect information/undertaking would invite appropriate penal actions as
                                    per norms/rules of the journal and UGC guidelines.</p>
                                <label>I confirm that I have read, understand, and agreed to the submission guidelines, policies, and submission declaration
                                    of the journal.</label>
                                <input
                                    type='checkbox'
                                    checked={declarationChecked}
                                    onChange={handleDeclarationChange}
                                />

                            </p>
                        </div>
                    </div>
                    <div className="submit-button-row">
                        <button
                            className='draft-button'
                            type="submit"
                            onClick={handleSubmit}>
                            Save as draft
                        </button>
                        <button className='continue-button' type="submit">Save and continue</button>
                    </div>
                </div>
                <div className="section-space"></div>
            </form>
        </div>
    );
}

export default DeclarationSubmission;
