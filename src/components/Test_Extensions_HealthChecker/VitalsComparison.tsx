type VitalsComparisonProps = {
  result: "Good" | "Unhealthy" | "Extreme" | string;
};

const VitalsComparison = ({ result }: VitalsComparisonProps) => {
  const getColor = () => {
    switch (result) {
      case "Good":
        return "#16a34a"; // green-600
      case "Unhealthy":
        return "#ca8a04"; // yellow-600
      case "Extreme":
        return "#dc2626"; // red-600
      default:
        return "#4b5563"; // gray-600
    }
  };

  return (
    <div
      style={{
        marginTop: "1.5rem",
        padding: "1rem",
        border: "1px solid #e5e7eb",
        borderRadius: "0.5rem",
        backgroundColor: "#f9fafb",
      }}
    >
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#374151",
        }}
      >
        Health Evaluation Result
      </h3>
      <p style={{ fontSize: "1.25rem", fontWeight: "700", color: getColor() }}>
        {result}
      </p>
    </div>
  );
};

export default VitalsComparison;
