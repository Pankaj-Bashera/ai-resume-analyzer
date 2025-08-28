import React from 'react'

interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    let badgeColor = '';
    let textColor = '';
    let badgeText = '';

    if (score > 70) {
        badgeColor = 'bg-badge-green';
        textColor = 'text-green-600';
        badgeText = 'Strong';
    } else if (score > 49) {
        badgeColor = 'bg-badge-yellow';
        textColor = 'text-yellow-600';
        badgeText = 'Good Start';
    } else {
        badgeColor = 'bg-badge-red';
        textColor = 'text-red-600';
        badgeText = 'Needs Work';
    }

    return (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badgeColor} ${textColor}`}>
            {badgeText}
        </div>
    )
}

export default ScoreBadge