import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/constants/Colors";
import { useAuth } from "@/providers/AuthProvider";

const index = () => {
  const { profile } = useAuth();
  return (
    <>
      <SafeAreaView style={styles.screen}>
        {/* header */}

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello</Text>
            <Text style={styles.name}>{profile?.full_name ?? "Full Name"}</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: profile?.avatar ?? "https://i.pravatar.cc/500" }}
              style={styles.avatar}
            />
          </View>
        </View>

        <ScrollView>
          {/* quick this week */}
          <View style={styles.container}>
            <View>
              <Text> This Week</Text>
            </View>

            <View>{/* summary cards */}</View>
          </View>

          {/* today */}
          <View style={styles.container}>
            <View>
              <Text> Today</Text>
            </View>
            <View>{/* task card */}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.background,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "200",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.text,
  },
  avatar: {
    height: "100%",
    objectFit: "cover",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    backgroundColor: colors.tabIconDefault,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.text,
    opacity: 0.75,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
