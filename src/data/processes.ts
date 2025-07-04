import { ProcurementProcess } from '@/types';

export const PROCUREMENT_PROCESSES: Record<string, ProcurementProcess> = {
  'contract-renewals': {
    title: 'Contract Renewals',
    description: 'Streamlined process for renewing existing vendor contracts',
    icon: 'FileText',
    color: 'teal',
    steps: [
      {
        title: 'Contract Review Initiation',
        description: 'Identify contracts approaching renewal dates (90 days prior)',
        details: [
          'Check contract database for upcoming renewals',
          'Notify contract owner via email',
          'Create renewal tracking ticket'
        ],
        timeline: '90 days before expiry'
      },
      {
        title: 'Performance Assessment',
        description: 'Evaluate vendor performance and contract value',
        details: [
          'Review vendor SLA compliance',
          'Assess cost vs. value delivered',
          'Gather stakeholder feedback'
        ],
        timeline: '60 days before expiry'
      },
      {
        title: 'Negotiation & Terms',
        description: 'Negotiate renewal terms and pricing',
        details: [
          'Prepare negotiation strategy',
          'Conduct vendor discussions',
          'Document agreed terms'
        ],
        timeline: '45 days before expiry'
      },
      {
        title: 'Approval & Execution',
        description: 'Secure approvals and execute renewed contract',
        details: [
          'Obtain management approval',
          'Legal review if terms changed',
          'Execute contract before expiry'
        ],
        timeline: '30 days before expiry'
      }
    ]
  },
  'new-purchases': {
    title: 'New Vendor Purchases',
    description: 'Complete workflow for onboarding new vendors and software',
    icon: 'Upload',
    color: 'emerald',
    steps: [
      {
        title: 'Requirements Definition',
        description: 'Define business requirements and success criteria',
        details: [
          'Document business need',
          'Define technical requirements',
          'Set budget parameters'
        ],
        timeline: 'Day 1-3'
      },
      {
        title: 'Vendor Research',
        description: 'Research and evaluate potential vendors',
        details: [
          'Market research',
          'Create vendor shortlist',
          'Request proposals/demos'
        ],
        timeline: 'Day 4-10'
      },
      {
        title: 'Security & Legal Review',
        description: 'Comprehensive security and legal assessment',
        details: [
          'Security questionnaire',
          'Data privacy assessment',
          'Contract terms review'
        ],
        timeline: 'Day 11-18'
      },
      {
        title: 'Approval & Onboarding',
        description: 'Final approval and vendor onboarding',
        details: [
          'Management approval',
          'Contract execution',
          'Vendor onboarding'
        ],
        timeline: 'Day 19-25'
      }
    ]
  },
  'legal-review': {
    title: 'Legal Review Process',
    description: 'Legal assessment framework for contracts and agreements',
    icon: 'Shield',
    color: 'indigo',
    steps: [
      {
        title: 'Initial Assessment',
        description: 'Determine level of legal review required',
        details: [
          'Contract value assessment',
          'Risk categorization',
          'Review timeline assignment'
        ],
        timeline: '1-2 days'
      },
      {
        title: 'Contract Analysis',
        description: 'Detailed legal review of terms and conditions',
        details: [
          'Liability clauses review',
          'Indemnification terms',
          'Termination conditions'
        ],
        timeline: '3-7 days'
      },
      {
        title: 'Risk Mitigation',
        description: 'Identify and address legal risks',
        details: [
          'Risk documentation',
          'Amendment recommendations',
          'Stakeholder communication'
        ],
        timeline: '2-3 days'
      },
      {
        title: 'Final Approval',
        description: 'Legal sign-off and approval documentation',
        details: [
          'Final review confirmation',
          'Approval documentation',
          'Execution clearance'
        ],
        timeline: '1-2 days'
      }
    ]
  },
  'security-assessment': {
    title: 'Security Assessment',
    description: 'Comprehensive security evaluation for vendor systems',
    icon: 'CheckCircle',
    color: 'purple',
    steps: [
      {
        title: 'Security Questionnaire',
        description: 'Vendor completes comprehensive security assessment',
        details: [
          'SOC 2 compliance verification',
          'Data encryption standards',
          'Access control policies'
        ],
        timeline: '5-7 days'
      },
      {
        title: 'Technical Review',
        description: 'Technical security architecture assessment',
        details: [
          'Infrastructure security review',
          'API security assessment',
          'Data flow analysis'
        ],
        timeline: '3-5 days'
      },
      {
        title: 'Compliance Verification',
        description: 'Verify regulatory compliance requirements',
        details: [
          'GDPR compliance check',
          'Industry-specific regulations',
          'Audit trail requirements'
        ],
        timeline: '2-3 days'
      },
      {
        title: 'Security Approval',
        description: 'Final security clearance and documentation',
        details: [
          'Security scorecard completion',
          'Risk acceptance documentation',
          'Ongoing monitoring setup'
        ],
        timeline: '1-2 days'
      }
    ]
  },
  'signature-policy': {
    title: 'Signature Policy',
    description: 'Authorization levels and signature requirements',
    icon: 'Users',
    color: 'cyan',
    steps: [
      {
        title: 'Contract Value Assessment',
        description: 'Determine signature authority based on contract value',
        details: [
          'Under $10K: Department Head',
          '$10K-$50K: Director Level',
          'Over $50K: Executive Team'
        ],
        timeline: 'Immediate'
      },
      {
        title: 'Risk Category Review',
        description: 'Additional approvals for high-risk categories',
        details: [
          'Data processing agreements',
          'International vendors',
          'New technology categories'
        ],
        timeline: '1-2 days'
      },
      {
        title: 'Approval Chain',
        description: 'Sequential approval process execution',
        details: [
          'Automated approval routing',
          'Digital signature collection',
          'Approval audit trail'
        ],
        timeline: '2-5 days'
      },
      {
        title: 'Final Execution',
        description: 'Contract execution and filing',
        details: [
          'Final signature collection',
          'Contract filing',
          'Stakeholder notification'
        ],
        timeline: '1 day'
      }
    ]
  }
};

export const getProcess = (processKey: string): ProcurementProcess | null => {
  return PROCUREMENT_PROCESSES[processKey] || null;
};

export const getAllProcesses = (): ProcurementProcess[] => {
  return Object.values(PROCUREMENT_PROCESSES);
};

export const getProcessKeys = (): string[] => {
  return Object.keys(PROCUREMENT_PROCESSES);
};