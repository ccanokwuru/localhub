import { Alert, Button, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import supabase from "@/utils/supabase.utils";

const login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const submit = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email!,
      password: password!,
    });

    setLoading(false);
    Alert.alert(
      data.session ? "Welcome Back" : "Retry",
      data.session ? "Login Successful" : error?.message
    );
  };
  return (
    <>
      <View>
        <Text>login</Text>
      </View>

      <Button title="Login" />
    </>
  );
};

export default login;

const styles = StyleSheet.create({});
