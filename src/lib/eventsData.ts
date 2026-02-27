import type { Event } from "../types/eventCollection";

export const events: Event[] = [
  {
    id: "robotics-101",
    title: "Introduction to Robotics",
    date: "2024-03-15",
    time: "10:00",
    location: "STEM Lab, Building A",
    description: "Learn the basics of robotics and build your first robot.",
    longDescription: `Join us for an exciting hands-on workshop where you'll learn fundamental robotics concepts and build your own robot from scratch. Perfect for beginners who want to dive into the world of robotics and automation.
    
    What you'll learn:
    • Basic robotics principles
    • Programming fundamentals
    • Mechanical design basics
    • Real-world applications
    
    No prior experience needed!`,
    image: "/images/robotics-workshop.jpg",
    category: "workshop",
    capacity: 30,
    registrationUrl: "https://example.com/register",
    // speakers: [
    //   { name: "Dr. Sarah Johnson", bio: "Robotics Engineer with 10+ years experience" }
    // ],
    // agenda: [
    //   { time: "10:00", activity: "Welcome & Introduction" },
    //   { time: "10:15", activity: "Robotics Basics Lecture" },
    //   { time: "10:45", activity: "Hands-on Building Session" },
    //   { time: "11:45", activity: "Robot Testing & Q&A" }
    // ]
  }
];

// Utility functions for event management
export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id);
}

export function getEventsByCategory(category: Event["category"]): Event[] {
  return events.filter(event => event.category === category);
}

export function getUpcomingEvents(): Event[] {
  const today = new Date();
  return events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getEventsByTag(tag: string): Event[] {
  return events.filter(event => event.tags?.includes(tag));
}
