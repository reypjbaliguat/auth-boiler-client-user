import { useState } from 'react';
import { extractAxiosErrorMessage } from '../../../util/axiosError';
import { Otp } from '../Otp';
import { RegisterForm, handleOnSignInFormSubmit } from './components';
import type { SignUpFormData } from './components/schema';

function Register() {
    const [page, setPage] = useState('register');
    const [error, setError] = useState<string>('');
    const handleSubmitForm = async (payload: SignUpFormData) => {
        try {
            const res = await handleOnSignInFormSubmit(payload);
            console.log(res);
            setPage('otp');
        } catch (error) {
            console.log(error);
            setError(extractAxiosErrorMessage(error));
        }
    };
    switch (page) {
        case 'register':
            return (
                <RegisterForm
                    error={error}
                    handleSubmitForm={handleSubmitForm}
                />
            );
        case 'otp':
            return <Otp />;
        default:
            return <></>;
    }
}

export default Register;
