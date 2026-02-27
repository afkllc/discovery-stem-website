# Quick Start: Events System Integration

✓ src/lib/eventsData.ts           - Event data with 5 sample events
✓ src/types/eventCollection.ts    - TypeScript types
✓ src/pages/events/index.astro    - Events listing page
✓ src/pages/events/[id].astro     - Event detail pages
✓ src/layouts/components/EventCard.astro
✓ src/layouts/components/EventsGrid.astro
```

### Step 2: Add Events to Navigation Menu (Optional)

Edit `src/config/menu.json` to add Events link:

```json
{
  "main": [
    { "name": "Home", "url": "/" },
    { "name": "Products", "url": "/about" },
    { "name": "Events", "url": "/events" },  // ← ADD THIS LINE
    { "name": "Contact", "url": "/contact" }
  ]
}
```

Or add as a dropdown:

```json
{
  "name": "Events",
  "url": "",
  "hasChildren": true,
  "children": [
    { "name": "All Events", "url": "/events" },
    { "name": "Workshops", "url": "/events?category=workshop" },
    { "name": "Competitions", "url": "/events?category=competition" }
  ]
}
```

### Step 3: Test It Out!

```bash
npm run dev
```

## 🛠️ Customization Examples

### Example 1: Add a New Workshop

Edit `src/lib/eventsData.ts`:

```typescript
{
  id: "web-development-basics",
  title: "Web Development Basics",
  date: "2024-03-20",
  time: "16:00",
  location: "Computer Lab, Building B",
  description: "Learn HTML, CSS, and JavaScript fundamentals.",
  longDescription: `Master the basics of web development...`,
  image: "/images/web-development.jpg",
  category: "workshop",
  capacity: 25,
  registrationUrl: "https://example.com/register",
  tags: ["web-dev", "html-css", "javascript"]
}
```

### Example 2: Display Upcoming Events in Home Page

Add to `src/pages/index.astro`:

```astro
---
import { getUpcomingEvents } from "../lib/eventsData";
import EventsGrid from "../layouts/components/EventsGrid.astro";

const upcomingEvents = getUpcomingEvents();
---

<!-- In your page content -->
<section class="my-12">
  <h2>Join Our Upcoming Events</h2>
  <EventsGrid events={upcomingEvents.slice(0, 3)} />
  <a href="/events" class="btn mt-6">View All Events</a>
</section>
```

### Example 3: Show Workshop Events Only

```astro
---
import { getEventsByCategory } from "../lib/eventsData";
import EventsGrid from "../layouts/components/EventsGrid.astro";

const workshops = getEventsByCategory("workshop");
---

<section>
  <h2>Our Hands-On Workshops</h2>
  <EventsGrid events={workshops} />
</section>
```

## 📦 File Structure

```
discovery-stem-website/
├── src/
│   ├── lib/
│   │   └── eventsData.ts ..................... Event data & functions
│   ├── types/
│   │   └── eventCollection.ts ............... Event types
│   ├── pages/
│   │   └── events/
│   │       ├── index.astro ................. /events page
│   │       └── [id].astro .................. /events/[id] pages
│   └── layouts/
│       └── components/
│           ├── EventCard.astro ............ Single event card
│           └── EventsGrid.astro ........... Grid of events
└── EVENTS_GUIDE.md ......................... Full documentation
```

## 🎨 Key Features

| Feature | Details |
|---------|---------|
| **Pages Available** | `/events` and `/events/[id]` |
| **Filtering** | By category, tag, or upcomingness |
| **Admin** | Just edit the TypeScript file |
| **Build** | Static site - no server needed |
| **External Services** | None required! |
| **Styling** | Tailwind CSS (already included) |
| **SEO** | Built-in with Astro |

## 🚀 Next Steps

1. ✅ Review the sample events in `src/lib/eventsData.ts`
2. ✅ Update event images in `public/images/`
3. ✅ Add Events link to navigation menu
4. ✅ Customize colors and styling in components
5. ✅ Add your own events data

## 📚 Full Documentation

See `EVENTS_GUIDE.md` for:
- Complete API reference
- All utility functions
- Field descriptions
- Usage examples
- Troubleshooting

---
