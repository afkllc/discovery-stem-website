# Astro Events Management System

This is a comprehensive event management system for your Discovery STEM website. It allows you to organize, display, and manage STEM events easily.

## Features ✨

- **No External Sign-ups Required** - Everything is self-contained
- **Static Site Generation** - Events are pre-built at compile time
- **Dynamic Routes** - Individual event pages are generated automatically
- **Filtering & Categorization** - Filter events by category (workshop, seminar, competition, etc.)
- **Rich Event Details** - Support for agenda, speakers, capacity, tags, and more
- **Fully Customizable** - Easily modify colors, layouts, and fields
- **Responsive Design** - Works perfectly on all devices

## Project Structure

```
src/
├── lib/
│   └── eventsData.ts          # Event data and utility functions
├── types/
│   └── eventCollection.ts     # TypeScript event interface
├── pages/
│   └── events/
│       ├── index.astro        # Events listing page
│       └── [id].astro         # Individual event detail page
└── layouts/
    └── components/
        ├── EventCard.astro    # Individual event card component
        └── EventsGrid.astro   # Grid display for multiple events
```

## Using the Events System

### 1. View All Events
Navigate to `/events` to see all events with filtering options.

### 2. View Event Details
Click on any event to see detailed information including:
- Full description and overview
- Speaker information
- Event agenda with timeline
- Location and time details
- Registration button

### 3. Filter Events
Use the category filter on the events page to display only specific event types:
- `workshop` - Hands-on learning sessions
- `seminar` - Educational talks and discussions
- `competition` - Competitive events
- `exhibition` - Showcase events
- `course` - Multi-session courses

### Access via URL
- `/events` - All events
- `/events?category=workshop` - Only workshops
- `/events/robotics-101` - Specific event detail page

## Adding New Events

Edit `src/lib/eventsData.ts` and add a new event object to the `events` array:

```typescript
{
  id: "unique-event-id",
  title: "Event Title",
  date: "2024-03-15",           // ISO format
  time: "14:00",                // 24-hour format
  location: "Building A, Room 101",
  description: "Short description",
  longDescription: `Detailed description with formatting
  
  Can include multiple paragraphs`,
  image: "/images/event-image.jpg",
  category: "workshop",
  capacity: 30,
  registrationUrl: "https://example.com/register",
  tags: ["tag1", "tag2"],
  speakers: [
    { name: "Speaker Name", bio: "Speaker biography" }
  ],
  agenda: [
    { time: "14:00", activity: "Welcome & Introduction" },
    { time: "14:15", activity: "Main Session" }
  ]
}
```

## Adding Events to Navigation Menu

Edit `src/config/menu.json` to add an Events link:

```json
{
  "label": "Events",
  "link": "/events"
}
```

## Using Events Components in Other Pages

### Display All Events Grid

```astro
---
import { events } from "../lib/eventsData";
import EventsGrid from "../layouts/components/EventsGrid.astro";
---

<EventsGrid events={events} />
```

### Display Upcoming Events Only

```astro
---
import { getUpcomingEvents } from "../lib/eventsData";
import EventsGrid from "../layouts/components/EventsGrid.astro";

const upcomingEvents = getUpcomingEvents();
---

<section>
  <h2>Upcoming Events</h2>
  <EventsGrid events={upcomingEvents} />
</section>
```

### Display Events by Category

```astro
---
import { getEventsByCategory } from "../lib/eventsData";
import EventsGrid from "../layouts/components/EventsGrid.astro";

const workshops = getEventsByCategory("workshop");
---

<section>
  <h2>Our Workshops</h2>
  <EventsGrid events={workshops} />
</section>
```

### Display Events by Tag

```astro
---
import { getEventsByTag } from "../lib/eventsData";
import EventsGrid from "../layouts/components/EventsGrid.astro";

const aiEvents = getEventsByTag("AI");
---

<section>
  <h2>AI-Related Events</h2>
  <EventsGrid events={aiEvents} />
</section>
```

### Display Individual Event Card

```astro
---
import { getEventById } from "../lib/eventsData";
import EventCard from "../layouts/components/EventCard.astro";

const event = getEventById("robotics-101");
---

{event && <EventCard event={event} />}
```

## Utility Functions

All functions are available from `src/lib/eventsData.ts`:

### getEventById(id: string)
Returns a single event by ID or undefined if not found.

```typescript
const event = getEventById("robotics-101");
```

### getEventsByCategory(category)
Returns all events in a specific category.

```typescript
const workshops = getEventsByCategory("workshop");
const seminars = getEventsByCategory("seminar");
```

### getUpcomingEvents()
Returns all future events sorted by date.

```typescript
const upcoming = getUpcomingEvents();
```

### getEventsByTag(tag)
Returns all events with a specific tag.

```typescript
const aiEvents = getEventsByTag("AI");
```

## Event Object Fields

### Required Fields
- `id` (string) - Unique identifier for the event
- `title` (string) - Event title
- `date` (string) - ISO date format (YYYY-MM-DD)
- `time` (string) - Time in 24-hour format (HH:MM)
- `location` (string) - Event location
- `description` (string) - Short description
- `image` (string) - Image URL
- `category` (string) - One of: workshop, seminar, competition, exhibition, course

### Optional Fields
- `longDescription` (string) - Detailed description
- `capacity` (number) - Number of participants
- `registrationUrl` (string) - Registration link
- `tags` (string[]) - Event tags/keywords
- `speakers` (object[]) - Speaker information with name and bio
- `agenda` (object[]) - Event schedule with time and activity

## Customization

### Styling
The components use Tailwind CSS classes. Modify the styling in:
- `EventCard.astro` - Individual card styling
- `EventsGrid.astro` - Grid layout styling
- `[id].astro` - Event detail page styling

### Categories
To add new event categories, update the type in `src/types/eventCollection.ts`:

```typescript
category: "workshop" | "seminar" | "competition" | "exhibition" | "course" | "your-new-category";
```

Then update the category filter options in `src/pages/events/index.astro`.

## Adding Event Images

Place event images in the `public/images/` directory and reference them:

```typescript
image: "/images/your-event-image.jpg"
```

## No External Dependencies Required

This system uses:
- **Astro** - Already in your project
- **Tailwind CSS** - Already configured
- **TypeScript** - Already available

No additional npm packages or external service sign-ups needed!

## Building Static Pages

When you run `npm run build`, Astro automatically generates:
- `/events/` - Main events listing page
- `/events/[event-id]/` - Individual event pages for each event

This means your events are fully static and require no server-side processing.

## Tips & Best Practices

1. **Use descriptive IDs** - Use kebab-case (e.g., `robotics-101`, `python-course`)
2. **Add quality images** - Use consistent image dimensions (recommended 800x600)
3. **Keep descriptions concise** - Short description should be 1-2 sentences
4. **Use tags wisely** - 3-5 tags per event is usually enough
5. **Schedule agenda items** - Include realistic time allocations
6. **Update dates** - Remove/archive past events from the events array

## Troubleshooting

### Events page shows empty
- Check that `src/lib/eventsData.ts` exports the `events` array
- Verify event IDs are unique

### Event detail page returns 404
- Ensure the event ID in the URL matches exactly (case-sensitive)
- Check that the event exists in `eventsData.ts`

### Images not showing
- Verify image paths start with `/`
- Ensure images exist in `public/` folder
- Check file extensions are correct

---

Need help? Check the example implementations in the component files or modify the sample events to fit your needs!
