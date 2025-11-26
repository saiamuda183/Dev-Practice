const mockVitalsInput = {
  sugar: 110,
  bpm: 75,
};

const mockReferenceData = [
  {
    MinSugar: "90",
    MaxSugar: "120",
    MinBPM: "60",
    MaxBPM: "100",
    Result: "Good",
  },
  {
    MinSugar: "121",
    MaxSugar: "150",
    MinBPM: "101",
    MaxBPM: "120",
    Result: "Unhealthy",
  },
  {
    MinSuger: "70",
    MaxSuger: "89",
    MinBPM: "40",
    MaxBPM: "59",
    Result: "Extreme",
  },
];

export { mockVitalsInput, mockReferenceData };
