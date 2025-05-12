import logo from '@/assets/logo.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Divider, TextField } from '@mui/material';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Controller, useForm } from 'react-hook-form';
import type { SignInFormData } from './schema';
import schema from './schema';

function LoginForm() {
    const env = import.meta.env;
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({ resolver: zodResolver(schema) });

    const handleGoogleSuccess = () => {
        console.log('success');
    };

    const handleGoogleFailure = () => {
        console.log('failure');
    };

    const onSubmit = () => {
        console.log('submit');
    };
    return (
        <GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
            <div className="w-[500px] h-[400px] flex justify-center flex-col">
                <img src={logo} width={50} height={50} className="mb-5" />
                <h6 className="text-3xl mb-5"> Login </h6>
                <span className="text-lg"> Please enter your login info</span>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-x-2 my-4">
                        <div className="basis-1/2 flex">
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
                        </div>
                        <div className="basis-1/2 flex">
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
                        </div>
                    </div>
                    <Button fullWidth variant="contained" type="submit">
                        Login
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
            </div>
        </GoogleOAuthProvider>
    );
}

export default LoginForm;
