import React from 'react';
import { Upload, Search, Settings } from 'lucide-react';
import { ProcessCard } from '../common/ProcessCard';
import { PROCUREMENT_PROCESSES } from '../../data/processes';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const processes = Object.entries(PROCUREMENT_PROCESSES);

  return (
    <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          color: '#111827', 
          marginBottom: '1.5rem',
          letterSpacing: '-0.025em',
          lineHeight: '1.1'
        }}>
          Procurement
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #0d9488, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Process Hub
          </span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#6b7280', 
          maxWidth: '64rem', 
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          Streamline your procurement workflows with our comprehensive process documentation and tools.
          From contract renewals to security assessments, everything you need in one centralized platform.
        </p>
      </div>

      {/* Process Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
        gap: '2rem', 
        marginBottom: '4rem' 
      }}>
        {processes.map(([key, process]) => (
          <ProcessCard 
            key={key} 
            process={process} 
            onClick={() => onNavigate(key)}
          />
        ))}
      </div>

      {/* Coming Soon Section */}
      <div style={{
        background: 'linear-gradient(135deg, #f0fdfa, #ecfeff, #dbeafe)',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        textAlign: 'center',
        border: '1px solid #5eead4'
      }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            Coming Soon
          </h2>
          <p style={{ 
            color: '#6b7280', 
            marginBottom: '2rem', 
            fontSize: '1.125rem' 
          }}>
            Next-generation features to supercharge your procurement workflows
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '1rem',
              backdropFilter: 'blur(4px)'
            }}>
              <div style={{
                padding: '0.75rem',
                backgroundColor: '#ccfbf1',
                borderRadius: '0.75rem'
              }}>
                <Upload style={{ width: '2rem', height: '2rem', color: '#0f766e' }} />
              </div>
              <span style={{ color: '#1f2937', fontWeight: '600' }}>Secure Contract Storage</span>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Upload and organize all your contracts</span>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '1rem',
              backdropFilter: 'blur(4px)'
            }}>
              <div style={{
                padding: '0.75rem',
                backgroundColor: '#cffafe',
                borderRadius: '0.75rem'
              }}>
                <Search style={{ width: '2rem', height: '2rem', color: '#0e7490' }} />
              </div>
              <span style={{ color: '#1f2937', fontWeight: '600' }}>AI-Powered Search</span>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Natural language contract querying</span>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '1rem',
              backdropFilter: 'blur(4px)'
            }}>
              <div style={{
                padding: '0.75rem',
                backgroundColor: '#e0e7ff',
                borderRadius: '0.75rem'
              }}>
                <Settings style={{ width: '2rem', height: '2rem', color: '#4338ca' }} />
              </div>
              <span style={{ color: '#1f2937', fontWeight: '600' }}>Automated Workflows</span>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Smart renewal reminders and approvals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};