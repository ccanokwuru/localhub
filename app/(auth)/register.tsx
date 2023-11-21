import { Button, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";
import { useState } from "react";

const login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const submit = () => {};
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
