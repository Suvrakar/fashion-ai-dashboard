import { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Container,
  LinearProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading, handleGoogleSignIn } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);

  };

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
          Sign In
        </Typography>

        <Box
          component="form"
          onSubmit={handleLogin}
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
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          {/* Error message */}
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
            Login
          </Button>

          <Button
            onClick={handleGoogleSignIn}
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2, borderColor: "#4285F4", color: "#4285F4" }}
          >
            Sign in with Google
          </Button>

          <Typography
            variant="body2"
            sx={{ marginTop: 2, textAlign: "center" }}
          >
            Don't have an account?{" "}
            <span
              onClick={() => router.push("/signup")}
              style={{ color: "#1976d2", cursor: "pointer" }}
            >
              Sign up
            </span>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
