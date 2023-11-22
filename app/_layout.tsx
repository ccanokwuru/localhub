import FontAwesome from "@expo/vector-icons/FontAwesome";
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
import { useRoute } from "@react-navigation/native";

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
  const { intialized, session, onboard } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    // if (!intialized) return;
    // const inAuth = segments[0] === "(auth)";
    const prevRoute = navigation.getState().history?.pop();
    console.log(JSON.stringify(prevRoute, null, 2));

    if (route.path === "/" && onboard) router.replace("/home");

    // if (session && !inAuth)
    //   router.canGoBack() && prevRoute ? router.back() : router.replace("/home");
    // else if (!session) router.replace("/login");
  });

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(secure)" options={{}} />
        <Stack.Screen name="index" redirect options={{}} />
        {/* <Stack.Screen name="(secure)" redirect options={{}} /> */}
        {/* <Stack.Screen name="(auth)" redirect options={{}} /> */}
      </Stack>
    </AuthProvider>
  );
}
