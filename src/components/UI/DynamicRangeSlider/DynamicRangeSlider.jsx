import { useState } from "react";

export default function DynamicRangeSlider() {
  const [value, setValue] = useState(18);

  const handleInput = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    e.target.style.setProperty(
      "--value",
      `${((newValue - e.target.min) / (e.target.max - e.target.min)) * 100}%`
    );
  };

  return (
    <div className="flex items-center">
      <input
        type="range"
        min="0"
        max="50"
        value={value}
        onInput={handleInput}
        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        style={{
          background: `linear-gradient(to right, #139d52 ${value * 2}%, #e5e7eb ${value * 2}%)`,
        }}
      />
      <span className="ml-4 text-sm font-medium">{value}</span>
    </div>
  );
}
