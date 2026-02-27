export interface Event {
  id: string;
  title: string;
  date: string; // ISO date format: 2024-03-15
  time: string; // 14:00 or 2:00 PM
  location: string;
  description: string;
  longDescription?: string;
  image: string;
  category: "workshop" | "seminar" | "competition" | "exhibition" | "course";
  capacity?: number;
  registrationUrl?: string;
  tags?: string[];
  speakers?: Array<{
    name: string;
    bio?: string;
  }>;
  agenda?: Array<{
    time: string;
    activity: string;
  }>;
}
