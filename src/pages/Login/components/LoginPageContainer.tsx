import React from "react";

interface Props {
  children: React.ReactNode;
}

function LoginPageContainer({ children }: Props) {
  return (
    <div className="h-screen w-screen items-center justify-center flex bg-gradient-to-br from-white via-gray-100 to-gray-300 min-h-screen">
      {children}
    </div>
  );
}

export default LoginPageContainer;
