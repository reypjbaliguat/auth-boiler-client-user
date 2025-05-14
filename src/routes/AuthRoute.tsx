import { Card } from '@mui/material';
import React from 'react';
import { AuthLeftColumn, AuthRightColumn } from '../layouts';

interface Props {
    children: React.ReactNode;
}
function AuthRoute({ children }: Props) {
    return (
        <div className="h-screen w-screen items-center justify-center flex bg-gradient-to-br from-white via-gray-100 to-gray-300 min-h-screen">
            <Card
                elevation={20}
                className="grid grid-cols-5 w-[300px] md:h-[max(600px,80%)] md:w-[max(600px,80%)] xl:h-[max(600px,60%)] xl:w-[max(1200px,60%)]"
            >
                <AuthLeftColumn>{children}</AuthLeftColumn>
                <AuthRightColumn />
            </Card>
        </div>
    );
}

export default AuthRoute;
