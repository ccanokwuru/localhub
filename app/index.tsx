import { tintColorLight } from "@/constants/Colors";
import { Link } from "expo-router";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const index = () => {
  return (
    <>
      <View className="flex-1">
        <SafeAreaView className="flex-1">
          {/* logo */}
          <View className="grow"></View>
          {/* heading */}
          <Text className="text-3xl font-semibold h1">LocalHub</Text>
          {/* subheading */}
          <Text className="text-lg font-thin">
            This Tool is Designed To Help Any Communnity Grow, Share Resources
            and Render Assistance
          </Text>
          <TouchableOpacity className="rounded-lg shadow-lg w-full">
            <Link href="/home" className="w-full p-5" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );
};

export default index;
