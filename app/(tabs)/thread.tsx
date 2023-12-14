import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { mock_data_threads } from "../../constants/mock_data";

export default function ThreadDetailScreen() {
  const { threadId } = useLocalSearchParams<{ threadId: string }>();
  const data = mock_data_threads.find((thread) => thread.id === threadId);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>Thread not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      {/* Render the messages for the data */}
      {data.messages.map((message) => (
        <View key={message.id} style={styles.messageItem}>
          <Text>{message.content}</Text>
          {/* Render media depending on message type if applicable */}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // ... other styling
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    // ... other styling
  },
  messageItem: {
    // ... styling for message item
  },
  // ... other styles
});
