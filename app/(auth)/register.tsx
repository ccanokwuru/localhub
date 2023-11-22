import {
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

const register = () => {
  const [email, setEmail] = useState<string>();
  const [full_name, setFullName] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [occupation, setOccupation] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [state, setState] = useState<string>();
  const [city, setCity] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [showPassword, setShowPassword] = useState<boolean>();

  const { width, height } = Dimensions.get("window");
  const submit = () => {};
  return (
    <View className="flex-1">
      <SafeAreaView className="flex w-full" style={{ padding: 20 }}>
        <View className="mb-10 mt-20" style={{ maxHeight: height * 0.25 }}>
          <Text
            className="w-full text-center text-red-600 font-semibold"
            style={{ fontSize: 28 }}
          >
            New Account
          </Text>
        </View>
        <ScrollView
          className=""
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          overScrollMode="auto"
          style={{ height: height * 0.8 }}
        >
          <View style={{ paddingBottom: 60 }}>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                Full Name
              </Text>
              <TextInput
                className="border-b py-3 outline-none"
                style={{ fontSize: 20 }}
                onChangeText={setFullName}
                placeholder="Chisom Anokwuru"
                textContentType="givenName"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                Username
              </Text>
              <TextInput
                className="border-b py-3 outline-none"
                style={{ fontSize: 20 }}
                onChangeText={setUsername}
                placeholder="c.Anokwuru"
                textContentType="username"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                Email
              </Text>
              <TextInput
                className="border-b py-3 outline-none"
                style={{ fontSize: 20 }}
                onChangeText={setEmail}
                placeholder="example@example.com"
                textContentType="emailAddress"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                Street Address
              </Text>
              <TextInput
                className="border-b py-3 outline-none"
                style={{ fontSize: 20 }}
                onChangeText={setAddress}
                placeholder="234, Palace way"
                textContentType="fullStreetAddress"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                City
              </Text>
              <TextInput
                className="border-b py-3 outline-none"
                style={{ fontSize: 20 }}
                onChangeText={setCity}
                placeholder="Ikeja"
                textContentType="addressCity"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                State
              </Text>
              <TextInput
                className="border-b py-3 outline-none"
                style={{ fontSize: 20 }}
                onChangeText={setState}
                placeholder="Lagos"
                textContentType="addressState"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                Country
              </Text>
              <TextInput
                className="border-b py-3 outline-none"
                style={{ fontSize: 20 }}
                onChangeText={setAddress}
                placeholder="Nigeria"
                // textContentType="addressNation"
                placeholderTextColor={"gray"}
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
            <View className="my-3">
              <Text className="w-full font-thin" style={{ fontSize: 16 }}>
                Confirm Password
              </Text>
              <View className="border-b flex gap-2 justify-between items-center flex-row">
                <TextInput
                  secureTextEntry={!showPassword}
                  className="py-3 outline-none grow"
                  style={{ fontSize: 20 }}
                  onChangeText={setConfirmPassword}
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
                  REGISTER
                </Text>
              </TouchableOpacity>

              <Text className="text-center mt-5"> Have An Account?</Text>
              <Text
                className="text-center text-red-600"
                style={{ fontSize: 16 }}
              >
                <Link href="/login">Login</Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({});
