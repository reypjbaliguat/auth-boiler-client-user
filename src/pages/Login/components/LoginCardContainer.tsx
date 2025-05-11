import { Card } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

function LoginCardContainer({ children }: Props) {
  return (
    <Card
      elevation={20}
      className="grid grid-cols-5 h-[max(600px,60%)] w-[max(1200px,60%)]"
    >
      {children}
    </Card>
  );
}

export default LoginCardContainer;
