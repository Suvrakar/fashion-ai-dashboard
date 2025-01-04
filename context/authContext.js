import { createContext, useContext, useState, useEffect } from "react";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
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

  console.log("session, status in authprovider 1", session, status);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      localStorage.setItem("user_id", session?.user?.id);
      localStorage.setItem("email", session?.user?.email);
    } else if (status === "unauthenticated") {
      localStorage.removeItem("user_id");
      localStorage.removeItem("email");
    }
  }, [session, status]);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend-1s2t.onrender.com/auth/login",
        { email, password }
      );
      console.log("response", response);
      if (response.status === 200) {
        const { user_id } = response.data;
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("email", email); // Save email to localStorage
  
        await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
  
        router.push("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };  

  const signup = async (username, email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend-1s2t.onrender.com/auth/register",
        { displayName: username, email, password }
      );
      console.log("response", response);
  
      if (response.status === 201) {
        const { token, user_id } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("email", email); // Save email to localStorage
  
        await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        console.log(
          "session, status in authprovider inside signup function",
          session,
          status
        );
        await getSession();
        router.push("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
      if (status === "authenticated") {
        const user_id = session?.user?.id;
        const email = session?.user?.email; 
        // localStorage.setItem("user_id", user_id);
        // localStorage.setItem("email", email); 
        console.log(email, " email")
      }
    } catch (err) {
      console.error("Google login failed", err);
    }
  };
  

  const logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("email");
    localStorage.removeItem("token"); 
    
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
