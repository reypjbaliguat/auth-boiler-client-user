import axios from 'axios';
import type { SignInFormData } from '../../Login/components/schema';
const apiUrl = import.meta.env.VITE_API_URL;

const handleOnSignInFormSubmit = async (payload: SignInFormData) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/register`, payload);
        return res.data;
    } catch (error) {
        let message = 'An unexpected error occurred';

        if (axios.isAxiosError(error)) {
            message = error.response?.data?.message ?? error.message;
        } else if (error instanceof Error) {
            message = error.message;
        }
        throw new Error(message);
    }
};
export default handleOnSignInFormSubmit;
