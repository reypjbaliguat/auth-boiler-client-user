import { Card } from '@mui/material';

interface Props {
    children: React.ReactNode;
}

function LoginCardContainer({ children }: Props) {
    return (
        <Card
            elevation={20}
            className="grid grid-cols-5 w-[300px] md:h-[max(600px,80%)] md:w-[max(600px,80%)] xl:h-[max(600px,60%)] xl:w-[max(1200px,60%)]"
        >
            {children}
        </Card>
    );
}

export default LoginCardContainer;
