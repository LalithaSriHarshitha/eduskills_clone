import React from 'react';
import agentIcon from '../assets/edi-agent-clean.png';
import robotFull from '../assets/edi-robot-clean.png';

export default function EdiAvatar({ size = "md", variant = "avatar", className = "" }) {
  const sizeMap = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-20 h-20",
    xl: "w-24 h-24"
  };

  if (variant === "illustration" || size === "xl" || size === "lg") {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size] || sizeMap.xl} ${className}`}>
        <img
          src={robotFull}
          alt="Edi - Your AI Buddy"
          className="w-full h-full object-contain drop-shadow-md select-none"
        />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size] || sizeMap.md} ${className}`}>
      <img
        src={agentIcon}
        alt="Edi Agent Logo"
        className="w-full h-full object-contain rounded-full select-none"
      />
    </div>
  );
}
