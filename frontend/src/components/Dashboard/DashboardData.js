// DashboardData.js - All content data

export const userStats = {
  totalBookings: 12,
  completedTours: 8,
  savedTours: 5,
  reviewCount: 6,
  travelPoints: 2450,
  memberLevel: "Gold Explorer",
};

export const featuredTours = [
  {
    id: 1,
    name: "Golden Circle Classic",
    duration: "8 hours",
    price: "$120",
    rating: 4.8,
    reviewCount: 1247,
    groupSize: "16",
    location: "Reykjavik",
    language: "English",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1485643374949-3b86dd2b79da",
    description:
      "Visit Þingvellir National Park, Gullfoss waterfall, and the Geysir geothermal area.",
    includes: ["Hotel pickup", "Professional guide", "Free WiFi on bus"],
  },
  {
    id: 2,
    name: "Northern Lights Hunt",
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    reviewCount: 892,
    groupSize: "12",
    location: "Reykjavik",
    language: "English",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938",
    description: "Chase the magical Aurora Borealis with expert guides.",
    includes: ["Hot chocolate", "Blankets", "Professional photos"],
  },
  {
    id: 3,
    name: "Glacier Hiking Adventure",
    duration: "10 hours",
    price: "$180",
    rating: 4.7,
    reviewCount: 634,
    groupSize: "8",
    location: "Vatnajökull",
    language: "English",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1533901651287-3d0591ad08bf",
    description: "Explore the largest glacier in Europe with certified guides.",
    includes: ["Glacier gear", "Helmet & harness", "Snacks"],
  },
  {
    id: 4,
    name: "Blue Lagoon Spa",
    duration: "6 hours",
    price: "$150",
    rating: 4.9,
    reviewCount: 2156,
    groupSize: "20",
    location: "Grindavik",
    language: "English",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1531366936330-6c9129d9b7c7",
    description: "Relax in the geothermal waters of the famous Blue Lagoon.",
    includes: ["Entry ticket", "Silica mud mask", "Towel", "Drink"],
  },
  {
    id: 5,
    name: "South Coast Waterfalls",
    duration: "11 hours",
    price: "$140",
    rating: 4.8,
    reviewCount: 978,
    groupSize: "15",
    location: "South Iceland",
    language: "English",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description:
      "Visit Seljalandsfoss, Skógafoss, and Reynisfjara black sand beach.",
    includes: ["Lunch", "Waterproof clothing", "Expert guide"],
  },
  {
    id: 6,
    name: "Ice Cave Exploration",
    duration: "8 hours",
    price: "$220",
    rating: 4.9,
    reviewCount: 445,
    groupSize: "10",
    location: "Vatnajökull",
    language: "English",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1544967082-d9b1f95a1b5a",
    description: "Discover natural blue ice caves under the glacier.",
    includes: ["Crampons", "Ice axe", "Safety briefing"],
  },
];

export const allTours = [
  ...featuredTours,
  {
    id: 7,
    name: "Snæfellsnes Peninsula",
    duration: "10 hours",
    price: "$160",
    rating: 4.7,
    reviewCount: 567,
    groupSize: "14",
    location: "Snæfellsnes",
    language: "English",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6",
    description:
      "Journey to the 'Iceland in Miniature' with dramatic landscapes.",
    includes: ["Lunch", "Entrance fees", "WiFi on bus"],
  },
  {
    id: 8,
    name: "Whale Watching",
    duration: "3.5 hours",
    price: "$85",
    rating: 4.6,
    reviewCount: 1345,
    groupSize: "30",
    location: "Reykjavik",
    language: "English",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f",
    description: "See humpback whales, orcas, and dolphins in Faxaflói Bay.",
    includes: ["Warm overalls", "Binoculars", "Expert guide"],
  },
];

export const userBookings = [
  {
    id: 1,
    tour: "Golden Circle Classic",
    date: "June 15, 2024",
    time: "09:00 AM",
    status: "Confirmed",
    guests: 2,
    totalPrice: "$240",
    bookingRef: "IC-2024-001",
  },
  {
    id: 2,
    tour: "Northern Lights Hunt",
    date: "June 18, 2024",
    time: "08:00 PM",
    status: "Pending",
    guests: 1,
    totalPrice: "$95",
    bookingRef: "IC-2024-002",
  },
  {
    id: 3,
    tour: "Blue Lagoon Spa",
    date: "March 10, 2024",
    time: "11:00 AM",
    status: "Completed",
    guests: 2,
    totalPrice: "$300",
    bookingRef: "IC-2024-003",
  },
  {
    id: 4,
    tour: "Glacier Hiking Adventure",
    date: "March 12, 2024",
    time: "08:30 AM",
    status: "Completed",
    guests: 1,
    totalPrice: "$180",
    bookingRef: "IC-2024-004",
  },
];

export const savedTours = [
  {
    id: 5,
    name: "South Coast Waterfalls",
    price: "$140",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  },
  {
    id: 6,
    name: "Ice Cave Exploration",
    price: "$220",
    image: "https://images.unsplash.com/photo-1544967082-d9b1f95a1b5a",
  },
];

export const travelTips = [
  {
    title: "Best Time to Visit",
    description:
      "Summer (Jun-Aug) for midnight sun, Winter (Sep-Mar) for Northern Lights",
    icon: "🌞",
  },
  {
    title: "Packing Essentials",
    description:
      "Waterproof jacket, thermal layers, sturdy hiking boots, swimsuit",
    icon: "🧥",
  },
  {
    title: "Local Currency",
    description: "Icelandic Króna (ISK). Cards accepted everywhere!",
    icon: "💳",
  },
  {
    title: "Language",
    description: "Icelandic, but English is widely spoken",
    icon: "🗣️",
  },
];

export const userPreferences = [
  "Photography",
  "Hiking",
  "Spa",
  "Wildlife",
  "Waterfalls",
  "Glaciers",
  "Northern Lights",
  "Hot Springs",
  "Volcanoes",
  "Culture",
];

export const upcomingEvents = [
  {
    name: "Iceland Airwaves Music Festival",
    date: "November 6-9, 2024",
    location: "Reykjavik",
    type: "Music",
  },
  {
    name: "Winter Lights Festival",
    date: "February 6-9, 2025",
    location: "Reykjavik",
    type: "Cultural",
  },
  {
    name: "Reykjavik Marathon",
    date: "August 23, 2025",
    location: "Reykjavik",
    type: "Sports",
  },
];
