import { Button, TextField } from "@mui/material";

function LoginForm() {
  return (
    <div className="w-[500px] h-[400px]">
      <h6 className="text-3xl mb-10">My app name</h6>
      <h6 className="text-2xl mb-10"> Login to app name </h6>
      <span className="text-xl"> Please enter your login info</span>
      <div className="flex gap-x-2 my-4">
        <div className="basis-1/2 flex flex-col">
          <span className="mb-2">Email</span>
          <TextField size="small" />
        </div>
        <div className="basis-1/2 flex flex-col">
          <span className="mb-2">Password</span>
          <TextField size="small" type="password" />
        </div>
      </div>
      <Button fullWidth variant="contained">
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
