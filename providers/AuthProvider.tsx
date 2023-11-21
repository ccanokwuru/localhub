import { Session, User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import supabase from "@/utils/supabase.utils";
import { FileObject } from "@/types";

type Auth = {
  user?: User | null;
  session?: Session | null;
  intialized?: boolean;
  signout?: () => void;
};

export const AuthContext = createContext<Partial<Auth>>({});

export const useAuth = () => useContext(AuthContext);

const [user, setUser] = useState<User | null>();
const [session, setSession] = useState<Session | null>();

const AuthProvider = ({ children }: { children: any }) => {
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

export const uploadFile = async ({
  filename,
  file,
  update,
}: {
  file: FileObject;
  filename?: string;
  update?: string;
}) => {
  if (!user) return;
  if (update) return await supabase.storage.from("files").update(update, file);

  if (!update && filename)
    return await supabase.storage.from("files").upload(filename, file);
};

export const deleteFile = async (files: string | string[]) => {
  const all = typeof files === "string" ? [files] : files;
  await supabase.storage.from("files").remove(all);
};

export default AuthProvider;
