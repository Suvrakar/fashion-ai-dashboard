import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Container,
  LinearProgress,
} from "@mui/material";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import { useAuth } from "../context/authContext";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const { signup } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page reload on submit

    if (username && email && password) {
      await signup(username, email, password);
    } else {
      setError("Please fill in all fields.");
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/");
  //   }
  // }, [status, router]);

  return (
    <Container component="main" maxWidth="xs" className="mt-24">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h1" mb={2}>
          Sign Up
        </Typography>

        <Box
          component="form"
          onSubmit={handleSignup}
          noValidate
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            size="small"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            size="small"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          {loading && <LinearProgress sx={{ marginTop: 2 }} />}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            disabled={loading}
          >
            Signup
          </Button>
          <Button
            onClick={handleGoogleSignIn}
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2, borderColor: "#4285F4", color: "#4285F4" }}
          >
            Sign up with Google
          </Button>

          <Typography
            variant="body2"
            sx={{ marginTop: 2, textAlign: "center" }}
          >
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              style={{ color: "#1976d2", cursor: "pointer" }}
            >
              Login
            </span>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
