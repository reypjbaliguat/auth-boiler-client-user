import {
    LoginCardContainer,
    LoginLeftColumn,
    LoginPageContainer,
    LoginRightColumn,
} from './components';

const Login = () => {
    return (
        <LoginPageContainer>
            <LoginCardContainer>
                <LoginLeftColumn />
                <LoginRightColumn />
            </LoginCardContainer>
        </LoginPageContainer>
    );
};

export default Login;
