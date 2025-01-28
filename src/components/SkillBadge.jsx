import React from 'react';

export default function SkillBadge({ name, level }) {
  const getLevelColor = () => {
    return 'from-red-300 to-red-700';
  };

  return (
    <div className="glass-effect p-4 rounded-2xl group hover:bg-white/[0.15] transition-colors">
      <h3 className="font-medium text-[#990302] mb-2 text-lg">{name}</h3>
      <span className={`text-sm px-3 h-[10px] w-[100px] py-1 rounded-full inline-block bg-gradient-to-r ${getLevelColor()}`}>
        {level}
      </span>
    </div>
  );
}