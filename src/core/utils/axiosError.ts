import axios from 'axios';

export function extractAxiosErrorMessage(error: unknown): string {
    if (axios.isAxiosError(error)) {
        return error.response?.data?.message || 'Unknown server error';
    }
    if (error instanceof Error) {
        return error.message;
    }
    return 'Unexpected error occurred';
}
