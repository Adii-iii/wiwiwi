const collage = import.meta.env.BASE_URL + "/collage/";

const slidesData = [
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
        label: "Hackathon 1",
        images: [collage+"IMG_20220714_152242.jpg", collage+"PXL_20230609_142127148.jpg", collage+"IMG_20220714_224332.jpg"],
        description: "Our first sleepless hackathon. We survived on coffee and adrenaline."
      },
      {
        label: "Band Practice",
        images: [collage+"band1.jpg", collage+"band2.jpg", collage+"band3.jpg"],
        description: "Late-night jamming and chaotic tuning sessions."
      },
      {
        label: "Exam Week",
        images: [collage+"study1.jpg", collage+"study2.jpg", collage+"study3.jpg"],
        description: "You explaining DSA while everyone else panicked!"
      },
      {
        label: "Cultural Fest",
        images: [collage+"cult1.jpg", collage+"cult2.jpg"],
        description: "Your solo on the bass shook the crowd."
      },
      {
        label: "Club Moments",
        images: [collage+"club1.jpg"],
        description: "Behind the scenes of every event you led."
      },
      {
        label: "Last Day",
        images: [collage+"last1.jpg", collage+"last2.jpg"],
        description: "Captured emotions, smiles, and a few tears."
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
