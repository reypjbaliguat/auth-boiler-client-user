import { useState } from 'react';
import OTPForm from '../../layouts/OTPForm';
import { RegisterForm, handleOnSignInFormSubmit } from './components';
import type { SignUpFormData } from './components/schema';

function Register() {
    const [page, setPage] = useState('register');
    const handleSubmitForm = async (payload: SignUpFormData) => {
        try {
            const res = await handleOnSignInFormSubmit(payload);

            setPage('otp');
        } catch (error) {
            console.log(error);
        }
    };
    switch (page) {
        case 'register':
            return <RegisterForm handleSubmitForm={handleSubmitForm} />;
        case 'otp':
            return <OTPForm />;
        default:
            return <></>;
    }
}

export default Register;
