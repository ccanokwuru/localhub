import { Alert, Button, StyleSheet } from "react-native";
import { View, Text } from "@/components/Themed";
import { useState } from "react";
import supabase from "@/utils/supabase.utils";
import { Address } from "@/types";

const register = () => {
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [fullname, setFullname] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [state, setState] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [city, setCity] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const submit = async () => {
    setLoading(true);

    if (confirmPassword !== password)
      return Alert.alert("Password Error", "Passwords do not match");
    const address_data: Address = {
      address,
      city,
      state,
      country,
    };
    const { data, error } = await supabase.auth.signUp({
      email: email!,
      password: password!,
      options: {
        data: {
          username,
          fullname,
          address: address_data,
        },
      },
    });
    setLoading(false);

    Alert.alert(
      data.session ? "Welcome To LocalHub" : "Retry",
      data.session ? "Registration Successful" : error?.message
    );
  };
  return (
    <>
      <View>
        <Text>register</Text>
      </View>

      <Button title="Register" />
    </>
  );
};

export default register;

const styles = StyleSheet.create({});
