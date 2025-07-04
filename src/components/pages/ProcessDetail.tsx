import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { getProcess } from '../../data/processes';

interface ProcessDetailProps {
  processKey: string;
  onNavigate: (pageId: string) => void;
}

export const ProcessDetail: React.FC<ProcessDetailProps> = ({ processKey, onNavigate }) => {
  const process = getProcess(processKey);

  if (!process) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h1>Process not found</h1>
        <button 
          onClick={() => onNavigate('home')}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#0d9488',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

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
    teal: { bg: '#f0fdfa', icon: '#ccfbf1', iconText: '#0f766e', step: '#ccfbf1', stepText: '#0f766e', stepBorder: '#5eead4' },
    emerald: { bg: '#f0fdf4', icon: '#dcfce7', iconText: '#166534', step: '#dcfce7', stepText: '#166534', stepBorder: '#86efac' },
    indigo: { bg: '#eef2ff', icon: '#e0e7ff', iconText: '#4338ca', step: '#e0e7ff', stepText: '#4338ca', stepBorder: '#a5b4fc' },
    purple: { bg: '#faf5ff', icon: '#f3e8ff', iconText: '#7c3aed', step: '#f3e8ff', stepText: '#7c3aed', stepBorder: '#c4b5fd' },
    cyan: { bg: '#ecfeff', icon: '#cffafe', iconText: '#0e7490', step: '#cffafe', stepText: '#0e7490', stepBorder: '#67e8f9' },
  };

  const colors = colorClasses[process.color];

  return (
    <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <button 
          onClick={() => onNavigate('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#0d9488',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '1.5rem',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          <ChevronRight style={{ 
            width: '1rem', 
            height: '1rem', 
            marginRight: '0.25rem',
            transform: 'rotate(180deg)'
          }} />
          Back to Home
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{
            padding: '1rem',
            borderRadius: '1rem',
            backgroundColor: colors.icon
          }}>
            <IconComponent style={{ width: '2.5rem', height: '2.5rem', color: colors.iconText }} />
          </div>
          <div>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '0.5rem',
              letterSpacing: '-0.025em'
            }}>
              {process.title}
            </h1>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1.25rem',
              lineHeight: '1.7'
            }}>
              {process.description}
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {process.steps.map((step, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            transition: 'box-shadow 0.3s ease'
          }}>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    backgroundColor: colors.step,
                    color: colors.stepText,
                    border: `2px solid ${colors.stepBorder}`
                  }}>
                    {index + 1}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    marginBottom: '1rem' 
                  }}>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: '600', 
                      color: '#111827',
                      letterSpacing: '-0.025em'
                    }}>
                      {step.title}
                    </h3>
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#6b7280',
                      backgroundColor: '#f3f4f6',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px'
                    }}>
                      {step.timeline}
                    </span>
                  </div>
                  <p style={{ 
                    color: '#6b7280', 
                    marginBottom: '1.5rem', 
                    fontSize: '1.125rem',
                    lineHeight: '1.7'
                  }}>
                    {step.description}
                  </p>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '1rem' 
                  }}>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '1rem',
                        backgroundColor: '#f9fafb',
                        borderRadius: '0.75rem'
                      }}>
                        <CheckCircle style={{ 
                          width: '1.25rem', 
                          height: '1.25rem', 
                          color: '#0d9488', 
                          flexShrink: 0,
                          marginTop: '0.125rem'
                        }} />
                        <span style={{ 
                          fontSize: '0.875rem', 
                          color: '#374151',
                          lineHeight: '1.5'
                        }}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};