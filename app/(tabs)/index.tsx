import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { mock_data_thread_summaries } from "../../constants/mock_data";

export default function ThreadHistoryScreen() {
  const data = mock_data_thread_summaries;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link style={styles.threadItem} href={`/thread?threadId=${item.id}`}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.lastMessagePreview}</Text>
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
