import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid"; // Ensure you have 'uuid' installed to generate unique IDs

export default function CreateThreadScreen() {
  const [title, setTitle] = useState("");
  const [initialMessage, setInitialMessage] = useState("");

  const storeNewThread = async () => {
    const newThreadId = uuidv4(); // Generate a unique ID for the thread
    const newThread = {
      id: newThreadId,
      title: title,
      messages: [
        {
          id: uuidv4(), // Also generate a unique ID for the message
          timestamp: Date.now(),
          type: "text", // Assuming it's a text message
          content: initialMessage,
        },
      ],
    };

    try {
      const jsonValue = JSON.stringify(newThread);
      await AsyncStorage.setItem(`@Thread:${newThreadId}`, jsonValue);
      Alert.alert("Success", "Thread created successfully");
      setTitle(""); // Reset the title
      setInitialMessage(""); // Reset the initial message
    } catch (e) {
      Alert.alert("Error", "Failed to create the thread");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Thread Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Initial Message"
        value={initialMessage}
        onChangeText={setInitialMessage}
        multiline
      />
      <Button title="Create Thread" onPress={storeNewThread} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  // You can add styles for other components like Button if needed
});
