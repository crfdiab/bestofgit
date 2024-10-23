import React from 'react';
import Link from 'next/link';

interface InteractiveCardProps {
  title: string;
  children: React.ReactNode;
  link?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ title, children, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-all hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
      <div className="text-gray-600 dark:text-gray-300 mb-4">{children}</div>
      {link && (
        <Link href={link} className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
          Learn more →
        </Link>
      )}
    </div>
  );
};

export default InteractiveCard;