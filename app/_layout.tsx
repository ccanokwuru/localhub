import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  SplashScreen,
  Stack,
  useNavigation,
  useRouter,
  useSegments,
} from "expo-router";
import { useEffect } from "react";
import { Alert, useColorScheme } from "react-native";
import AuthProvider, { useAuth } from "@/providers/AuthProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { intialized, session } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    if (!intialized) return;
    const inAuth = segments[0] === "auth";
    const prevRoute = navigation.getState().history?.pop();
    Alert.alert("Previous Route", JSON.stringify(prevRoute, null, 2));

    if (session && !inAuth)
      router.canGoBack() && prevRoute ? router.back() : router.replace("/");
    else if (!session) router.replace("/login");
  });

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="modal" />
          <Stack.Screen name="(secure)" options={{}} />
          <Stack.Screen name="(auth)" options={{}} />
          <Stack.Screen name="(onboard)" options={{}} />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
