import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

const GoogleSignIn = () => {
  const handleGoogleGoogle = () => {
    signIn("google"); // Initiates the Google OAuth login flow
  };

  return (
    <div>
      <Button variant="contained" onClick={handleGoogleGoogle}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default GoogleSignIn;
