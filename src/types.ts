export type ServiceTabId = 'financeiro' | 'contabil' | 'rh' | 'administracao';

export interface ServiceDetail {
  id: ServiceTabId;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  description: string;
  keyBenefits: string[];
  activities: {
    name: string;
    description: string;
  }[];
  deliverables: string[];
  targetAudience: string;
  whatsappMessage: string;
}

export interface CompanyInfo {
  name: string;
  fullName: string;
  foundedYear: number;
  city: string;
  state: string;
  address: string;
  addressNumber: string;
  fullAddress: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  email: string;
  workingHours: string;
}
