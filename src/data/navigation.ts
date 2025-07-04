import { NavigationItem } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'contract-renewals', label: 'Contract Renewals', icon: 'FileText' },
  { id: 'new-purchases', label: 'New Purchases', icon: 'Upload' },
  { id: 'legal-review', label: 'Legal Review', icon: 'Shield' },
  { id: 'security-assessment', label: 'Security Assessment', icon: 'CheckCircle' },
  { id: 'signature-policy', label: 'Signature Policy', icon: 'Users' },
];

export const getNavigationItem = (id: string): NavigationItem | null => {
  return NAVIGATION_ITEMS.find(item => item.id === id) || null;
};

export const isValidPage = (pageId: string): boolean => {
  return NAVIGATION_ITEMS.some(item => item.id === pageId);
};