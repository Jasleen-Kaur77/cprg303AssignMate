import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = () => {
    if (
      email.trim() !== "" &&
      password.trim() !== "" &&
      password === confirm
    ) {
      navigation.replace("Login");
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-center mb-6 text-purple-700">
        Create Account
      </Text>

      <Text className="text-lg font-semibold mb-2">Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="name@edu.college.ca"
        className="border border-gray-300 rounded-md p-3 mb-4"
      />

      <Text className="text-lg font-semibold mb-2">Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
        className="border border-gray-300 rounded-md p-3 mb-4"
      />

      <Text className="text-lg font-semibold mb-2">Confirm Password</Text>
      <TextInput
        value={confirm}
        onChangeText={setConfirm}
        placeholder="Re-enter password"
        secureTextEntry
        className="border border-gray-300 rounded-md p-3 mb-6"
      />

      <TouchableOpacity
        className="bg-purple-600 p-4 rounded-lg"
        onPress={handleSignup}
      >
        <Text className="text-white text-center font-semibold">
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="text-purple-600 mt-4 text-center">
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}