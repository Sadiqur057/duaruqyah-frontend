import React from "react";

const SettingButton = ({ setIsExpanded, isExpanded, icon, title, children }) => {
  return (
    <div
      className={`space-y-4 ${
        isExpanded && "border border-t-0 rounded-md pb-4"
      }`}
    >
      <div
        className={`flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer text-light ${
          isExpanded && "border-primary  border-l-[6px] text-primary"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      {isExpanded && children }
    </div>
  );
};

export default SettingButton;
