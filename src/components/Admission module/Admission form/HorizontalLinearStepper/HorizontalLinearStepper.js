import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './HorizontalLinearStepper.css';
import Navbar from '../../../NavBar/Navbar';
import ProgramApplicationDetail from '../Program&ApplicationDetail/ProgramApplicationDetail';
import AcadamicQualificationDetail from '../Acadamic&QualificationDetail/AcadamicQualificationDetail';
import DocumentUploadForm from '../Document details/DocumentUploadForm';
import DeclarationSubmission from '../Declaration submission/DeclarationSubmission';

const steps = ['Program and application detail', 'Academic qualification detail', 'Documents', "Declaration and submission"];

const stepContent = [
    <div><ProgramApplicationDetail /></div>,
    <div><AcadamicQualificationDetail /></div>,
    <div><DocumentUploadForm /></div>,
    <div><DeclarationSubmission /></div>,
];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [clickedStep, setClickedStep] = React.useState(-1);

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleStepClick = (step) => {
        // Handle clicking on a step label
        setClickedStep(step);
        setActiveStep(step);
    };

    return (
        <Box className="horizontal-stepper">
            <Navbar className="navbar" />
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {
                        onClick: () => handleStepClick(index),
                        className: clickedStep === index ? 'active-step-label' : '',
                    };

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography className="step-label" variant="h6" sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button className="button" onClick={handleReset}>
                            Reset
                        </Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography className="step-label" variant="h6" sx={{ mt: 2, mb: 1 }}>
                        Step {activeStep + 1}
                    </Typography>
                    <div className="step-content">{stepContent[activeStep]}</div> {/* Render step content */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            className="button"
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button className="button" color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}

                        <Button className="button" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
