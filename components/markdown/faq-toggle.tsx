import React from 'react';

interface FAQToggleProps {
  question: string;
  children: React.ReactNode;
}

const FAQToggle: React.FC<FAQToggleProps> = ({ question, children }) => {
  return (
    <details className="mb-4 group">
      <summary className="text-xl font-semibold mb-2 flex justify-between items-center cursor-pointer text-gray-800 dark:text-white">
        <h3>{question}</h3>
        <span className="text-2xl transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="pl-4 text-gray-600 dark:text-gray-300 mt-2">
        {children}
      </div>
    </details>
  );
};

export default FAQToggle;
