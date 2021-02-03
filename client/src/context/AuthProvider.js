import React, { useState, createContext, useEffect } from "react";
import { auth, clientsCollection } from "../firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
      } catch (error) {
        setUser(null);
        console.log(error);
      }
    });
    return unsubscribeAuth;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
