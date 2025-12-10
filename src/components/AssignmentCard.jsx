import React from "react";
import { View, Text } from "react-native";

export default function AssignmentCard({ title, due, status }) {
  const statusColor =
    status === "Completed"
      ? "text-green-600"
      : status === "In Progress"
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <View className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 mb-3">
      <Text className="text-xl font-semibold text-gray-800">{title}</Text>

      <Text className="text-gray-500 mt-1">Due: {due}</Text>

      <Text className={`mt-2 font-semibold ${statusColor}`}>Status: {status}</Text>
    </View>
  );
}