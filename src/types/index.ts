// Core application types

export interface ProcessStep {
    title: string;
    description: string;
    details: string[];
    timeline: string;
  }
  
  export interface ProcurementProcess {
    title: string;
    description: string;
    icon: string; // Lucide icon name
    color: ProcessColor;
    steps: ProcessStep[];
  }
  
  export type ProcessColor = 'teal' | 'emerald' | 'indigo' | 'purple' | 'cyan';
  
  export interface NavigationItem {
    id: string;
    label: string;
    icon: string; // Lucide icon name
    href?: string;
  }
  
  export interface ProcessCardProps {
    process: ProcurementProcess;
    onClick: () => void;
  }
  
  export interface ProcessDetailProps {
    processKey: string;
  }
  
  // Future Phase 2 types for contract management
  export interface Contract {
    id: string;
    title: string;
    vendor: string;
    type: ContractType;
    status: ContractStatus;
    startDate: Date;
    endDate: Date;
    value: number;
    currency: string;
    autoRenew: boolean;
    businessOwner: string;
    legalReviewStatus: ReviewStatus;
    securityReviewStatus: ReviewStatus;
    filePath?: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type ContractType = 
    | 'software'
    | 'service'
    | 'hardware'
    | 'consulting'
    | 'license'
    | 'maintenance'
    | 'other';
  
  export type ContractStatus = 
    | 'draft'
    | 'under_review'
    | 'approved'
    | 'active'
    | 'expired'
    | 'terminated'
    | 'renewed';
  
  export type ReviewStatus = 
    | 'not_started'
    | 'in_progress'
    | 'completed'
    | 'approved'
    | 'rejected';
  
  export interface ContractMetadata {
    id: string;
    contractId: string;
    extractedData: {
      parties: string[];
      keyTerms: string[];
      obligations: string[];
      terminationClauses: string[];
      renewalTerms: string[];
      liabilityLimits: string[];
    };
    aiConfidence: number;
    extractedAt: Date;
  }
  
  // User and authentication types
  export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    department: string;
    createdAt: Date;
    lastLogin?: Date;
  }
  
  export type UserRole = 
    | 'admin'
    | 'procurement_manager'
    | 'legal_reviewer'
    | 'security_reviewer'
    | 'business_owner'
    | 'viewer';
  
  // API response types
  export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    error?: string;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  }
  
  // Search and filtering types
  export interface SearchFilters {
    query?: string;
    type?: ContractType[];
    status?: ContractStatus[];
    businessOwner?: string[];
    dateRange?: {
      start: Date;
      end: Date;
    };
    valueRange?: {
      min: number;
      max: number;
    };
  }
  
  export interface SearchResult {
    contract: Contract;
    highlights: string[];
    score: number;
  }
  
  // Claude AI integration types
  export interface ClaudeAnalysisRequest {
    contractText: string;
    analysisType: 'metadata' | 'query' | 'summary';
    query?: string;
  }
  
  export interface ClaudeAnalysisResponse {
    analysis: string;
    metadata?: ContractMetadata['extractedData'];
    confidence: number;
    processingTime: number;
  }