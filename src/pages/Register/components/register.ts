import axios from 'axios';
import type { SignInFormData } from '../../Login/components/schema';
const apiUrl = import.meta.env.VITE_API_URL;

const handleOnSignInFormSubmit = async (payload: SignInFormData) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/register`, payload);
        const result = await res.data;
        return result;
    } catch (error) {
        throw new Error(error as string);
    }
};

export default handleOnSignInFormSubmit;
