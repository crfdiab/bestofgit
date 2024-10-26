import React from 'react';
import Image from 'next/image';

interface BadgeProps {
    repoName: string;
    owner: string;
}

const Badge: React.FC<BadgeProps> = ({ repoName, owner }) => {
    const starsBadgeUrl = `https://img.shields.io/github/stars/${owner}/${repoName}?style=flat&logoSize=auto`;
    const forksBadgeUrl = `https://img.shields.io/github/forks/${owner}/${repoName}?style=flat&logoSize=auto`;

    return (
        <div className="flex items-center space-x-2">
            <a 
                href={`https://github.com/${owner}/${repoName}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
            >
                {repoName}
            </a>
            <div className="flex space-x-1">
                <Image 
                    src={starsBadgeUrl} 
                    alt="Stars" 
                    width={80} 
                    height={20} 
                    unoptimized
                />
                <Image 
                    src={forksBadgeUrl} 
                    alt="Forks" 
                    width={80} 
                    height={20} 
                    unoptimized
                />
            </div>
        </div>
    );
};

export default Badge;
