import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import supabase from "@/utils/supabase";

const login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [showPassword, setShowPassword] = useState<boolean>();

  const { width, height } = Dimensions.get("window");
  const submit = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email!,
      password: password!,
    });
      if (error) Alert.alert("Login Failed", error.message);
      
  };
  return (
    <View className="flex-1">
      <SafeAreaView style={{ padding: 20 }}>
        <View className="my-20">
          <Text
            className="w-full text-center text-red-600 font-semibold"
            style={{ fontSize: 28 }}
          >
            Welcome Back
          </Text>
        </View>
        <ScrollView
          className=""
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          overScrollMode="auto"
          style={{ height: height * 0.75, paddingBottom: 40 }}
        >
          <View style={{ paddingBottom: 60 }}>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                Email
              </Text>
              <TextInput
                className="border-b py-3 outline-none"
                style={{ fontSize: 20 }}
                onChangeText={setEmail}
                placeholder="example@example.com"
                placeholderTextColor={"gray"}
                textContentType="emailAddress"
              />
            </View>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                Password
              </Text>
              <View className="border-b flex gap-2 justify-between items-center flex-row">
                <TextInput
                  secureTextEntry={!showPassword}
                  className="py-3 outline-none grow"
                  style={{ fontSize: 20 }}
                  onChangeText={setPassword}
                  textContentType="password"
                  placeholder="********"
                  placeholderTextColor={"gray"}
                  passwordRules={
                    "required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
                  }
                />
                {!showPassword ? (
                  <FontAwesome
                    name="eye-slash"
                    size={20}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FontAwesome
                    name="eye"
                    size={20}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                )}
              </View>
            </View>
            <View className="mt-5" style={{ marginTop: 48 }}>
              <TouchableOpacity onPress={() => submit}>
                <Text
                  className="p-4 shadow-lg w-full bg-red-600 text-center text-white font-semibold text-lg"
                  style={{ borderRadius: 20 }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>

              <Text className="text-center mt-5">Don't Have An Account?</Text>
              <Text
                className="text-center text-red-600"
                style={{ fontSize: 16 }}
              >
                <Link href="/register">Register</Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
