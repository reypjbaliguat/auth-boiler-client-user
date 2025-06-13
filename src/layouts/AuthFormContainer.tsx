import logo from '@/assets/logo.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Link } from 'react-router-dom';

interface Props {
    label: 'Login' | 'Register';
    children: React.ReactNode;
}

function AuthFormContainer({ label, children }: Props) {
    const env = import.meta.env;
    const isLogin = label === 'Login';

    return (
        <GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
            <div className="xl:p-0 md:p-10 px-5 py-7 flex justify-center flex-col w-[300px] md:w-[400px]">
                <img src={logo} width={50} height={50} className="mb-5" />
                <h6 className="text-3xl mb-5"> {label} </h6>
                {isLogin && (
                    <span className="text-lg">
                        Please enter your login info
                    </span>
                )}
                {children}
                {isLogin ? (
                    <Link
                        to={`/register`}
                        className="mx-auto mt-5 text-blue-500"
                    >
                        Do you need an account?
                    </Link>
                ) : (
                    <Link to={`/login`} className="mx-auto mt-5 text-blue-500">
                        Already have an account?
                    </Link>
                )}
            </div>
        </GoogleOAuthProvider>
    );
}

export default AuthFormContainer;
