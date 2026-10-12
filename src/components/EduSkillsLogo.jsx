import React from 'react';
import logoImg from '../assets/eduskills-logo.png';

export default function EduSkillsLogo({ className = "", height = "h-10" }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="EduSkills - Nation Building Through Skills"
        className={`${height} w-auto object-contain`}
      />
    </div>
  );
}
