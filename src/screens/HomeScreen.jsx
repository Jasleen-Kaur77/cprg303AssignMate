import React from "react";
import { View, Text, ScrollView } from "react-native";
import AssignmentCard from "../components/AssignmentCard";

export default function HomeScreen() {
  const assignments = [
    { id: 1, title: "CPRG 303 Lab 4", due: "Dec 15", status: "In Progress" },
    { id: 2, title: "Java Project", due: "Dec 16", status: "Not Started" },
    { id: 3, title: "Web Dev Assignment", due: "Dec 17", status: "Completed" },
  ];

  return (
    <View className="flex-1 bg-white px-4 pt-4">
      <Text className="text-3xl font-bold text-purple-700 mb-4">
        Dashboard
      </Text>

      <Text className="text-lg font-semibold mb-2">Upcoming Assignments</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {assignments.map((item) => (
          <AssignmentCard
            key={item.id}
            title={item.title}
            due={item.due}
            status={item.status}
          />
        ))}

        <View className="h-10" />
      </ScrollView>
    </View>
  );
}