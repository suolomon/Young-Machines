import React,{useState} from 'react'
import Contact from '../Components/Contact'

const SignInPage = () => {
   
     const [formStep, setFormStep] = useState(0);
     const completeFormStep = () => {
       setFormStep((cur) => cur + 1);
     };
     const goToPreviousStep = () => {
       setFormStep((cur) => cur - 1);
     };

    return (
        <>
           <Contact completeFormStep={completeFormStep} goToPreviousStep={goToPreviousStep}  formStep={formStep}/>
        </>
    )
}

export default SignInPage
