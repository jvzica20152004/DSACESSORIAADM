import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceTabs from './components/ServiceTabs';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import FastContactWhatsApp from './components/FastContactWhatsApp';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import AdminLeadsModal from './components/AdminLeadsModal';
import { ServiceTabId } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ServiceTabId>('financeiro');
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const handleSelectTab = (tabId: ServiceTabId) => {
    setActiveTab(tabId);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-[#0b1e36] selection:text-white">
      {/* Navigation Header */}
      <Header 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
        onNavigateSection={handleNavigateSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onSelectTab={(tabId) => {
            handleSelectTab(tabId);
            handleExploreServices();
          }} 
          onExploreServices={handleExploreServices} 
        />

        {/* The 4 Core Dedicated Tabs: Financeiro, Contábil, RH, Administração */}
        <ServiceTabs 
          activeTab={activeTab} 
          onSelectTab={handleSelectTab} 
        />

        {/* About Company - Since 2019 */}
        <AboutSection />

        {/* Location in Jaú / SP with Google Maps Link */}
        <LocationSection />

        {/* Fast WhatsApp Contact Section with Phone 14 991112222 */}
        <FastContactWhatsApp initialService={activeTab} />
      </main>

      {/* Floating Fast WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Corporate Footer */}
      <Footer 
        onSelectTab={handleSelectTab} 
        onNavigateSection={handleNavigateSection} 
        onOpenAdminLeads={() => setAdminModalOpen(true)}
      />

      {/* Admin Leads Viewer Modal */}
      <AdminLeadsModal 
        isOpen={adminModalOpen} 
        onClose={() => setAdminModalOpen(false)} 
      />
    </div>
  );
}
