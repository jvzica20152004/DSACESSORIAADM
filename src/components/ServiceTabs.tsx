import { useState } from 'react';
import { 
  TrendingUp, 
  Calculator, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  FileCheck,
  Target
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { COMPANY_DATA } from '../data/companyData';
import { ServiceTabId } from '../types';

interface ServiceTabsProps {
  activeTab: ServiceTabId;
  onSelectTab: (tab: ServiceTabId) => void;
}

export default function ServiceTabs({ activeTab, onSelectTab }: ServiceTabsProps) {
  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  // Quick inquiry interactive state for this tab
  const [companyName, setCompanyName] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');

  const getTabIcon = (id: ServiceTabId) => {
    switch (id) {
      case 'financeiro':
        return <TrendingUp className="w-5 h-5" />;
      case 'contabil':
        return <Calculator className="w-5 h-5" />;
      case 'rh':
        return <Users className="w-5 h-5" />;
      case 'administracao':
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const generateServiceWhatsAppUrl = () => {
    let text = `Olá, gostaria de falar com a DS Assessoria sobre ${currentService.title}.`;
    if (companyName.trim()) {
      text += ` Minha empresa: ${companyName.trim()}.`;
    }
    if (inquiryNotes.trim()) {
      text += ` Observações: ${inquiryNotes.trim()}.`;
    }
    return `https://wa.me/55${COMPANY_DATA.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0b1e36]/10 text-[#0b1e36] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0b1e36]" />
            Nossos Serviços Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e36] tracking-tight">
            As 4 Funções Fundamentais da DS Assessoria
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Navegue pelas abas abaixo para explorar como cuidamos com excelência de cada área vital da sua empresa desde 2019.
          </p>
        </div>

        {/* The 4 Dedicated Tabs Navigation */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <div 
            role="tablist" 
            aria-label="Funções da DS Assessoria" 
            className="grid grid-cols-2 md:grid-cols-4 gap-2"
          >
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  id={`tab-${service.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  onClick={() => onSelectTab(service.id)}
                  className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0b1e36] text-white shadow-md shadow-[#0b1e36]/20'
                      : 'bg-transparent text-slate-600 hover:text-[#0b1e36] hover:bg-slate-100'
                  }`}
                >
                  <span className={isActive ? 'text-blue-300' : 'text-slate-400'}>
                    {getTabIcon(service.id)}
                  </span>
                  <span className="whitespace-nowrap">{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div 
          id={`panel-${currentService.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentService.id}`}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in duration-300"
        >
          {/* Header inside the active tab */}
          <div className="bg-gradient-to-r from-[#0b1e36] to-[#122e54] text-white p-6 sm:p-10 border-b border-blue-900/40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-white/10">
                  <span>{currentService.badge}</span>
                  <span>•</span>
                  <span>Experiência desde 2019</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-blue-100 text-base sm:text-lg mt-2 font-medium">
                  {currentService.tagline}
                </p>
                <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Direct Fast WhatsApp CTA in Tab Header */}
              <div className="shrink-0 flex flex-col gap-2">
                <a
                  href={`https://wa.me/55${COMPANY_DATA.phoneRaw}?text=${currentService.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all group"
                >
                  <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                  <span>Solicitar Atendimento Rápido</span>
                </a>
                <span className="text-center text-xs text-blue-200">
                  Telefone: <strong>(14) 99111-2222</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Body Content of Tab */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Scope of Activities */}
              <div className="lg:col-span-7">
                <h4 className="text-lg font-bold text-[#0b1e36] mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-blue-700" />
                  Atividades e Rotinas Executadas na {currentService.title}
                </h4>

                <div className="space-y-4">
                  {currentService.activities.map((activity, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#0b1e36]/30 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0b1e36] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base">
                            {activity.name}
                          </h5>
                          <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Target Audience */}
                <div className="mt-8 p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3.5">
                  <Target className="w-5 h-5 text-[#0b1e36] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[#0b1e36] text-sm">
                      Para quem é indicado este serviço?
                    </h5>
                    <p className="text-slate-700 text-xs sm:text-sm mt-1">
                      {currentService.targetAudience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Benefits, Deliverables & Instant Inquiry */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Benefits Box */}
                <div className="p-6 rounded-2xl bg-[#0b1e36] text-white">
                  <h4 className="font-bold text-base text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    Vantagens Estratégicas
                  </h4>
                  <ul className="space-y-3">
                    {currentService.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Checklist */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-[#0b1e36] mb-3 uppercase tracking-wider">
                    Entregáveis Oficiais DS Assessoria
                  </h4>
                  <div className="space-y-2.5">
                    {currentService.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0b1e36]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Consultation Form connected to WhatsApp 14 991112222 */}
                <div className="p-6 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/30">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Consulta Rápida via WhatsApp</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-4">
                    Envie os dados para atendimento imediato no telefone <strong>(14) 99111-2222</strong>:
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nome da sua empresa ou seu nome:
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Minha Empresa / João Silva"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full text-xs px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Dúvida ou necessidade principal (opcional):
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Preciso organizar o contas a pagar"
                        value={inquiryNotes}
                        onChange={(e) => setInquiryNotes(e.target.value)}
                        className="w-full text-xs px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
                      />
                    </div>

                    <a
                      href={generateServiceWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Iniciar Atendimento no WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Quick tab switcher footer */}
          <div className="bg-slate-100/70 border-t border-slate-200 px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold text-slate-500">
              Quer conhecer outra especialidade?
            </span>
            <div className="flex flex-wrap gap-2">
              {SERVICES_DATA.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onSelectTab(s.id);
                    const el = document.getElementById('servicos');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    s.id === activeTab
                      ? 'bg-[#0b1e36] text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
