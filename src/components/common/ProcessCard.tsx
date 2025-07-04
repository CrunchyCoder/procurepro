import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ProcurementProcess } from '../../types';

interface ProcessCardProps {
  process: ProcurementProcess;
  onClick: () => void;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({ process, onClick }) => {
  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<any>> = {
      'FileText': require('lucide-react').FileText,
      'Upload': require('lucide-react').Upload,
      'Shield': require('lucide-react').Shield,
      'CheckCircle': require('lucide-react').CheckCircle,
      'Users': require('lucide-react').Users,
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent || require('lucide-react').FileText;
  };

  const IconComponent = getIconComponent(process.icon);

  const colorClasses = {
    teal: 'bg-teal-50 border-teal-200 hover:bg-teal-100 hover:border-teal-300 hover:shadow-teal-500/10',
    emerald: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-emerald-500/10',
    indigo: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-indigo-500/10',
    purple: 'bg-purple-50 border-purple-200 hover:bg-purple-100 hover:border-purple-300 hover:shadow-purple-500/10',
    cyan: 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300 hover:shadow-cyan-500/10',
  };

  const iconColors = {
    teal: 'bg-teal-100 text-teal-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    purple: 'bg-purple-100 text-purple-700',
    cyan: 'bg-cyan-100 text-cyan-700',
  };

  return (
    <div 
      className={`group p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${colorClasses[process.color]}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${iconColors[process.color]}`}>
            <IconComponent className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-800">{process.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
      </div>
    </div>
  );
};