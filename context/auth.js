//Using gloabal states
import { createContext, useContext, useState, useCallback } from "react";
import { useRouter } from "next/router";

// Services
import api from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  // State for user data
  const [user, setUser] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("@Laon-test:user") || null
      : null
  );
  const [email, setEmail] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("@Laon-test:email") || null
      : null
  );
  const [token, setToken] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("@Laon-test:token") || null
      : null
  );
  const [role, setRole] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("@Laon-test:role") || null
      : null
  );

  const router = useRouter();

  //Fetching login data
  const signIn = useCallback(async ({ email, password }) => {
    const authentication = {
      email: email,
      password: password,
    };

    try {
      const response = await api.post(`/login`, authentication);

      console.log(response);

      const token = response.data.token;
      const user_name = response.data.name;
      const user_email = response.data.email;
      const user_role = response.data.role;

      setUser(user_name);
      setEmail(user_email);
      setToken(token);
      setRole(user_role);

      localStorage.setItem("@Laon-test:token", token);
      localStorage.setItem("@Laon-test:user", user_name);
      localStorage.setItem("@Laon-test:email", user_email);
      localStorage.setItem("@Laon-test:role", user_role);
    } catch (err) {
      console.log(err);
    } finally {
      router.push("/");
    }
  }, []);

  //Logout session
  const signOut = useCallback(() => {
    setUser(null);
    setEmail(null);
    setToken(null);
    setRole(null);

    localStorage.removeItem("@Laon-test:token");
    localStorage.removeItem("@Laon-test:user");
    localStorage.removeItem("@Laon-test:email");
    localStorage.removeItem("@Laon-test:role");
    router.push("/login");
  }, []);

  //Register user
  const signUp = useCallback(async ({ email, password, name }) => {
    const authentication = {
      email: email,
      password: password,
      name: name,
    };

    try {
      const response = await api.post(`/user`, authentication);

      if (response.status == 406) {
        console.log("Email existent");
      }

      if (response.status == 200) {
        router.push("/login");
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
