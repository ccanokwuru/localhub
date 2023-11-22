import { tintColorLight } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

const welcome = () => {
  return (
    <>
      {/* <View style={styles.container}> */}
      {/* logo */}
      <View></View>
      {/* heading */}
      <View></View>
      {/* subheading */}
      <View></View>
      {/* </View> */}
    </>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tintColorLight,
  },
  logo: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 32,
    fontWeight: "500",
  },
  subheading: {
    fontSize: 16,
    fontWeight: "200",
  },
  button: {},
});
