import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { mock_data_threads } from "../../constants/mock_data";
import { Thread } from "../../types";
import { getAllThreads } from "../../helpers";

export default function ThreadHistoryScreen() {
  const [threads, setThreads] = useState<Thread[]>([...mock_data_threads]);

  useEffect(() => {
    const fetchThreads = async () => {
      // Use your AsyncStorage function to get all threads
      const storedThreads = await getAllThreads(); // Assuming this function returns an array of ThreadSummary
      if (storedThreads) {
        setThreads((prev) => [...prev, ...storedThreads]);
      }
    };

    fetchThreads();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link style={styles.threadItem} href={`/thread?threadId=${item.id}`}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.messages.at(-1)?.content.slice(0, 16)}...</Text>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // ... other styling
  },
  threadItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    // ... other styling
  },
  title: {
    fontWeight: "bold",
    marginRight: 10,
    // ... other styling
  },
  // ... other styles
});
