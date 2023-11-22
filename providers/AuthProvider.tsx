import { Session, User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import supabase from "@/utils/supabase";

type Auth = {
  user?: User | null;
  session?: Session | null;
  intialized?: boolean;
  signout?: () => void;
};

export const AuthContext = createContext<Partial<Auth>>({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>();
  const [session, setSession] = useState<Session | null>();
  const [intialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    // listen for authentication state changes
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session?.user);
      setInitialized(true);
    });

    // stop listener on unmount
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const signout = async () => await supabase.auth.signOut();

  const value = {
    user,
    session,
    intialized,
    signout,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;
