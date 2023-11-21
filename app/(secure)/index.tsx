import { StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";
import { Link } from "expo-router";

const index = () => {
  return (
    <>
      <View>
        <Text>Auth</Text>
      </View>

      <Link href="/login">Login</Link>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
