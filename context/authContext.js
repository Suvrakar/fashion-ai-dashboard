import { createContext, useContext, useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend-1s2t.onrender.com/auth/login",
        { email, password }
      );
      if (response.status === 200) {
        // Use NextAuth credentials provider to sign in
        signIn("credentials", {
          email,
          password,
          redirect: false,
        }).then(() => {
          if (router.pathname !== "/") {
            router.push("/");
          }
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend-1s2t.onrender.com/auth/signup",
        { email, password }
      );
      if (response.status === 201) {
        router.push("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const logout = () => {
    signOut({ callbackUrl: "/" });
  };

  // useEffect(() => {
  //   if (status === "authenticated" && router.pathname !== "/") {
  //     router.push("/");
  //   }
  // }, [status, router]);
  // console.log(status);

  const isAuthenticated = status === "authenticated" && session?.user;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        signup,
        logout,
        error,
        loading,
        handleGoogleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
