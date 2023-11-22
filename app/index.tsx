import { Link, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const index = () => {
  const { width, height } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View className="flex-1">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="flex bg-white "
        overScrollMode="auto"
        style={{ height: "100%", padding: 20 }}
      >
        <SafeAreaView
          className="flex-1 flex grow"
          style={{ minHeight: height - 20, padding: 20 }}
        >
          {/* logo */}
          <View className="grow flex justify-center items-center w-full">
            <Image
              source={require("@/assets/images/team.jpg")}
              resizeMode="contain"
              style={{ width: width * 0.75, height: width * 0.75 }}
            />
          </View>
          {/* heading */}
          <View className="mt-5">
            <Text className="font-semibold" style={{ fontSize: 28 }}>
              LocalHub
            </Text>
          </View>
          {/* subheading */}
          <View className="mb-10">
            <Text className="font-extralight" style={{ fontSize: 16 }}>
              This Tool is Designed To Help Any Communnity Grow, Share Resources
              and Flourish
            </Text>
          </View>
          <View className="mt-5">
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text
                className="p-4 shadow-lg w-full bg-red-600 text-center text-white font-semibold text-lg"
                style={{ borderRadius: 20 }}
              >
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default index;
