import { useState } from "react";

type VitalsFormProps = {
  onSubmit: (values: { sugar: number; bpm: number }) => void;
};

const VitalsForm = ({ onSubmit }: VitalsFormProps) => {
  const [sugar, setSugar] = useState("");
  const [bpm, setBpm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ sugar: parseFloat(sugar), bpm: parseFloat(bpm) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Body Sugar
        </label>
        <input
          type="number"
          value={sugar}
          onChange={(e) => setSugar(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Heart Beat (BPM)
        </label>
        <input
          type="number"
          value={bpm}
          onChange={(e) => setBpm(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Check Health
      </button>
    </form>
  );
};

export default VitalsForm;
