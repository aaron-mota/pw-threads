export interface ThreadSummary {
  id: string;
  title: string;
  lastMessagePreview: string;
}

export interface Thread {
  id: string;
  title: string;
  messages: Message[];
}

export interface Message {
  id: string;
  timestamp: number;
  type: "text" | "image" | "audio";
  content: string;
  // threadId: string;
  // participantId: string;
  // text: string;
}
