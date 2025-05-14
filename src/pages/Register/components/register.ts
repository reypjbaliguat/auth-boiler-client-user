import type { SignInFormData } from './schema';

export const handleOnSignInFormSubmit = async (payload: SignInFormData) => {
    setFormData(payload);

    try {
        const res = await verifyEmail(payload);
        const result = await res.json();

        if (result.status === 'error') throw Error(result.message);

        const {
            data: { email_verified },
        } = result;

        if (!email_verified) {
            setStep(Step.OTP);
            await handleOnOTPResend(payload.email);
        } else if (email_verified) {
            handleSignIn(payload);
        }
    } catch (error: any) {
        if (error.message)
            enqueueSnackbar(error.message, {
                variant: 'alert',
                severity: 'error',
            });
        else
            enqueueSnackbar(SnackbarMessage.GENERIC_ERROR, {
                variant: 'alert',
                severity: 'error',
            });
    }
};
