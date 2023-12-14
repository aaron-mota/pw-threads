import AsyncStorage from "@react-native-async-storage/async-storage";
import { Thread } from "../types";

// export const getAllThreads = async () => {
//   try {
//     const keys = await AsyncStorage.getAllKeys();
//     const result = await AsyncStorage.multiGet(keys);

//     // @ts-expect-error (filtering out nulls may be needed ?)
//     return result.map((req) => JSON.parse(req[1])).filter(Boolean);
//   } catch (e) {
//     console.log("ERROR (getAllThreads): ", e);
//   }
// };

export const getAllThreads = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const threadKeys = keys.filter((key) => key.startsWith("@Thread:")); // Make sure to only get thread keys
    const result = await AsyncStorage.multiGet(threadKeys);

    return result
      .map(([key, value]) => {
        try {
          // @ts-expect-error (we know this may fail, which is why we have try/catch)
          return JSON.parse(value);
        } catch (e) {
          console.error(`ERROR parsing thread data for key ${key}:`, e);
          // console.error(`ERROR parsing thread data for key ${key}:`, e.message);
          return null; // Return null for items that failed to parse
        }
      })
      .filter(Boolean); // Filter out any nulls
  } catch (e) {
    console.error("ERROR (getAllThreads):", e);
    // console.error("ERROR (getAllThreads):", e.message);
    // throw e; // Re-throw the error after logging it
  }
};

export const getThread = async (threadId: Thread["id"]) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@Thread:${threadId}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("ERROR (getThread): ", e);
  }
};

export const storeThread = async (data: Thread) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(`@Thread:${data.id}`, jsonValue);
  } catch (e) {
    console.log("ERROR (postThead): ", e);
  }
};

export const updateThread = async (
  threadId: Thread["id"],
  newMessage: string
) => {
  try {
    const thread = await getThread(threadId);
    thread.messages.push(newMessage);
    await storeThread(thread);
  } catch (e) {
    console.log("ERROR (updateThread): ", e);
  }
};
