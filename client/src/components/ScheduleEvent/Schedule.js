
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MessageInput from '../messageInput/messageInput'
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop:'60px',
        
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    margin: {
        margin: theme.spacing(1),
    }
}));





function getSteps() {
    return [`Name`, `Platform`, `Date`, `Gif`,`Photo`];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Let's name this event! Give us an idea what we will see on your live`;
        case 1:
            return `Where would you be Broadcasting from?, We don't want to miss anything`;
        case 2:
            return `When is this happening? We want to make sure to put it in our calendar!`;
        case 3:
            return `Upload a Gif of your live presentation`;
        case 4:
            return `Upload a Photo cover of your Live`;
        default:
            return 'Unknown step';
    }
}

function getValidation(step){

    switch(step){

        case 0:
            return `text`;
        case 1: 
            return `url`;
        case 2:
            return `datetime-local`;
        case 3: 
            return `url`;
        case 4: 
            return `url`;
    }
}



export default function VerticalLinearStepper() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        Name: '',
        Platform: '',
        Date: '',
        Gif: ' ',
        Photo: ' '
    });
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log('Event Name: ', values.Name, 'Event Link: ', values.Platform, 'Event Date: ', values.Date, 'Gif: ', values.Gif, 'Photo: ', values.Photo);
        console.log('writing on: ', prop);
    };
    

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            
                            <FormControl fullWidth className={classes.margin} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    type={getValidation(index)}
                                    onChange={handleChange(label)}
                                    startAdornment={<InputAdornment position="start">></InputAdornment>}
                                    labelWidth={60}
                                
                                />
                            </FormControl>

                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                  </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - we can&apos;t wait to see you!</Typography>
                 
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                     </Button>
                     <Link to='/'>
                     <Button  className={classes.button}>
                        See Feeds
                     </Button>
                     </Link>
                </Paper>
            )}
        </div>
    );
}