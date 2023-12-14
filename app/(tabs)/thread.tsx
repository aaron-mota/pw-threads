import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { mock_data_threads } from "../../constants/mock_data";
import { Thread } from "../../types";
import { getThread } from "../../helpers";

export default function ThreadDetailScreen() {
  const { threadId } = useLocalSearchParams<{ threadId: string }>();
  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    const fetchThread = async () => {
      // Use your AsyncStorage function to get a specific thread
      const storedThread = await getThread(threadId);
      if (storedThread) {
        setThread(storedThread);
      }
    };

    fetchThread();
  }, [threadId]);

  if (!thread) {
    return (
      <View style={styles.container}>
        <Text>Thread not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{thread.title}</Text>
      {/* Render the messages for the data */}
      {thread.messages.map((message) => (
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
