const collage = import.meta.env.BASE_URL + "/collage/";

const slidesData = [
  {},
  {
    title: "Farewell, Aditya!",
    content: "Wishing you all the best for your next journey. Here’s a small tribute.",
    background: "#1e293b"
  },
  {
    title: "Memory Lane",
    content: "Remember those endless hackathons and late-night guitar sessions?",
    background: "#1e293b"
  },
  {
    title: "A Short Story",
    content: "From helping others during exams to leading our club, you’ve been a true team player.",
    background: "#1e293b"
  },

  {
    type: "envelopes",
    background: "#1e293b",
    items: [
      {
        label: "oct 2023",
        images: [collage+"oct 2023.jpg"],
        // description: "Our first sleepless hackathon. We survived on coffee and adrenaline."
      },
      {
        label: "mar 2024",
        images: [collage+"mar 2024.jpg"],
        // description: "Late-night jamming and chaotic tuning sessions."
      },
      {
        label: "nov 2024",
        images: [collage+"nov 2024.jpg"],
        // description: "You explaining DSA while everyone else panicked!"
      },
      {
        label: "dec 2024",
        images: [collage+"dec 2024.jpg"],
        // description: "Your solo on the bass shook the crowd."
      },
      {
        label: "mar 2025",
        images: [collage+"mar 2025.jpg"],
        // description: "Behind the scenes of every event you led."
      },
      {
        label: "apr 2025",
        images: [collage+"april 2025.jpg"],
        // description: "Captured emotions, smiles, and a few tears."
      }
    ]
  },

  {
    title: "Till We Meet Again",
    content: "You leave behind fond memories and a legacy. See you soon!",
    background: "#1e293b"
  }
];

export default slidesData;
