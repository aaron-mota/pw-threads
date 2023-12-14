import { Thread, ThreadSummary } from "../types";

export const mock_data_thread_summaries: ThreadSummary[] = [
  {
    id: "1",
    title: "First Thread",
    lastMessagePreview: "How can I help you today?",
  },
  {
    id: "2",
    title: "Second Thread",
    lastMessagePreview: "What a beautiful day!",
  },
  {
    id: "3",
    title: "Third Thread",
    lastMessagePreview: "Kowabunga!",
  },
];

export const mock_data_threads: Thread[] = [
  {
    id: "1",
    title: "First Thread",
    messages: [
      {
        id: "1",
        timestamp: Date.now(),
        type: "text",
        content: "Hello world!",
      },
      {
        id: "2",
        timestamp: Date.now(),
        type: "text",
        content: "How's it going?",
      },
      {
        id: "3",
        timestamp: Date.now(),
        type: "text",
        content: "How can I help you today?",
      },
    ],
  },
  {
    id: "2",
    title: "Second Thread",
    messages: [
      {
        id: "1",
        timestamp: Date.now(),
        type: "text",
        content: "What's up!",
      },
      {
        id: "2",
        timestamp: Date.now(),
        type: "text",
        content: "How are you?",
      },
      {
        id: "3",
        timestamp: Date.now(),
        type: "text",
        content: "What a beautiful day!",
      },
    ],
  },
  {
    id: "3",
    title: "Third Thread",
    messages: [
      {
        id: "1",
        timestamp: Date.now(),
        type: "text",
        content: "Hey hey!",
      },
      {
        id: "2",
        timestamp: Date.now(),
        type: "text",
        content: "Stellar day out, eh?",
      },
      {
        id: "3",
        timestamp: Date.now(),
        type: "text",
        content: "Kowabunga!",
      },
    ],
  },
];
