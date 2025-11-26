import { useState, useEffect } from "react";

import VitalsForm from "./VitalsForm";
import VitalsComparison from "./VitalsComparison";
import { fetchVitalsReferenceData, findMatchingResult } from "./utils";

import StyledHealthCheckerWrapper from "./styles";

const TestExtensionsHealthChecker = () => {
  // Removed unused inputVitals state
  const [referenceData, setReferenceData] = useState<any[]>([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    fetchVitalsReferenceData().then(setReferenceData);
  }, []);

  interface Vitals {
    sugar: number;
    bpm: number;
    // Add other properties if needed
  }

  const handleSubmit = (vitals: Vitals) => {
    const evaluation = findMatchingResult(
      vitals.sugar,
      vitals.bpm,
      referenceData,
    );
    setResult(evaluation);
  };

  return (
    <StyledHealthCheckerWrapper>
          <h2>Health Checker</h2>
          <VitalsForm onSubmit={handleSubmit} />
          {result && <VitalsComparison result={result} />} {" "}
    </StyledHealthCheckerWrapper>
  );
};

export default TestExtensionsHealthChecker;
