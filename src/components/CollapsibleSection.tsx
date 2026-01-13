import { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  titleColor: string;
  borderColor: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({ 
  title, 
  titleColor, 
  borderColor, 
  children, 
  defaultOpen = true 
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-gray-800 rounded-lg mb-4 md:mb-6 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 md:p-6 flex items-center justify-between ${titleColor} hover:bg-gray-750 transition-colors`}
      >
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <span className={`text-2xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className={`p-4 md:p-6 pt-0 border-t-2 ${borderColor} animate-fadeIn`}>
          {children}
        </div>
      )}
    </div>
  );
}