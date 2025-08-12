import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Box, Button, Divider, TextField } from '@mui/material';
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { Controller, useForm } from 'react-hook-form';
import { AuthFormContainer } from '../../../../layouts';
import type { SignUpFormData } from './schema';
import schema from './schema';

interface Props {
    handleSubmitForm: (data: SignUpFormData) => void;
    error?: string;
}

function RegisterForm({ handleSubmitForm, error }: Props) {
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = useForm<SignUpFormData>({ resolver: zodResolver(schema) });
    const handleGoogleSuccess = async (
        credentialResponse: CredentialResponse,
    ) => {
        const res = await fetch('http://localhost:5000/v1/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                credential: credentialResponse.credential,
            }),
        });
        console.log(res); // contains JWT and user info
    };

    const handleGoogleFailure = () => {
        console.log('failure');
    };

    return (
        <AuthFormContainer label="Register">
            <Box component="form" onSubmit={handleSubmit(handleSubmitForm)}>
                {error && <Alert severity="error">{error}</Alert>}
                <div className="flex flex-col gap-y-2 my-4 basis-full w-full">
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: 'Email is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Email"
                                type="email"
                                variant="outlined"
                                size="small"
                                error={!!error}
                                helperText={error?.message}
                                fullWidth
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Password is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Password"
                                type="password"
                                variant="outlined"
                                size="small"
                                error={!!error}
                                helperText={error?.message}
                                fullWidth
                            />
                        )}
                    />
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{ required: 'Confirm Password is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                size="small"
                                error={!!error}
                                helperText={error?.message}
                                fullWidth
                            />
                        )}
                    />
                </div>
                <Button
                    loading={isSubmitting}
                    fullWidth
                    variant="contained"
                    type="submit"
                >
                    Register
                </Button>
            </Box>

            <Divider className="text-gray-500 py-4">OR</Divider>

            {/* Google Login Button */}
            <div className="google-button-container">
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleFailure}
                />
            </div>
        </AuthFormContainer>
    );
}

export default RegisterForm;
