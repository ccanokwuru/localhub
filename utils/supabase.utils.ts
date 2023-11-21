import { createClient } from "@supabase/supabase-js";
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;
const ExpoSecureStoreAdapter = {
  getItem: (key: string) => getItemAsync(key),
  setItem: (key: string, value: string) => setItemAsync(key, value),
  removeItem: (key: string) => deleteItemAsync(key),
};
const supabase = createClient(supabaseUrl!, supabaseKey!, {
  auth: {
    detectSessionInUrl: false,
    storage: ExpoSecureStoreAdapter,
  },
});

export default supabase;
