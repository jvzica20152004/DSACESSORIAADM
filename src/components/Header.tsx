import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight,
  Calculator,
  TrendingUp,
  Users,
  Briefcase
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { ServiceTabId } from '../types';
import dsLogo from '../assets/images/ds_monogram_logo_1789820299592.jpg';

interface HeaderProps {
  activeTab: ServiceTabId;
  onSelectTab: (tab: ServiceTabId) => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function Header({ onSelectTab, onNavigateSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: ServiceTabId) => {
    onSelectTab(tabId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs transition-all">
      {/* Top Bar - Navy Blue with Key Fast Info */}
      <div className="bg-[#0b1e36] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-[#142c4d]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium text-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              No mercado desde {COMPANY_DATA.foundedYear}
            </span>

            <a 
              href={COMPANY_DATA.googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
              title="Abrir no Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>{COMPANY_DATA.address}, {COMPANY_DATA.addressNumber} - {COMPANY_DATA.city}/{COMPANY_DATA.state}</span>
            </a>

            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              {COMPANY_DATA.workingHours}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-full text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              <span>Atendimento Rápido: {COMPANY_DATA.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-8 transition-all ${isScrolled ? 'py-2' : 'py-2.5 sm:py-3'}`}>
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a 
            href="#inicio" 
            onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
            className="flex items-center gap-3.5 sm:gap-4 group py-1"
          >
            <div className="w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0b1e36] shadow-md border border-[#1b3559] group-hover:border-blue-400/50 transition-all shrink-0">
              <img
                src={dsLogo}
                alt="Logo DS Assessoria Administrativa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[20px] font-extrabold text-[#0b1e36] tracking-tight leading-none">
                DS
              </span>
              <span className="text-[15px] font-semibold text-slate-600 leading-tight mt-1">
                Assessoria Administrativa
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('inicio')}
              className="hover:text-[#0b1e36] transition-colors py-1 cursor-pointer"
            >
              Início
            </button>

            {/* Dropdown for the 4 core functions */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('servicos')}
                className="flex items-center gap-1.5 hover:text-[#0b1e36] transition-colors cursor-pointer"
              >
                <span>Nossas 4 Áreas</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:rotate-90 transition-transform" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Selecione a aba desejada:
                  </div>
                  <button
                    onClick={() => handleTabClick('financeiro')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg text-sm hover:bg-slate-50 hover:text-[#0b1e36] transition-colors cursor-pointer"
                  >
                    <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-700">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Financeiro</div>
                      <div className="text-xs text-slate-500">Fluxo, contas e conciliação</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleTabClick('contabil')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg text-sm hover:bg-slate-50 hover:text-[#0b1e36] transition-colors cursor-pointer"
                  >
                    <div className="p-1.5 rounded-md bg-blue-50 text-[#0b1e36]">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Contábil</div>
                      <div className="text-xs text-slate-500">Tributos, balanços e fiscal</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleTabClick('rh')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg text-sm hover:bg-slate-50 hover:text-[#0b1e36] transition-colors cursor-pointer"
                  >
                    <div className="p-1.5 rounded-md bg-amber-50 text-amber-700">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Recursos Humanos</div>
                      <div className="text-xs text-slate-500">Folha, eSocial e DP</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleTabClick('administracao')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg text-sm hover:bg-slate-50 hover:text-[#0b1e36] transition-colors cursor-pointer"
                  >
                    <div className="p-1.5 rounded-md bg-indigo-50 text-indigo-700">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Administração</div>
                      <div className="text-xs text-slate-500">Processos e contratos</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('sobre')}
              className="hover:text-[#0b1e36] transition-colors py-1 cursor-pointer"
            >
              Sobre Nós
            </button>

            <button
              onClick={() => handleNavClick('localizacao')}
              className="hover:text-[#0b1e36] transition-colors py-1 cursor-pointer"
            >
              Localização
            </button>

            <button
              onClick={() => handleNavClick('contato')}
              className="hover:text-[#0b1e36] transition-colors py-1 cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0b1e36] px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#0b1e36]" />
              <span>(14) 99111-2222</span>
            </a>

            <a
              href={COMPANY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0b1e36] text-white hover:bg-[#122e54] px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Rápido</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-left font-medium text-slate-700 hover:text-[#0b1e36] py-2 border-b border-slate-100"
            >
              Início
            </button>

            <div className="py-2 border-b border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Nossas Áreas (Acesse a Aba):
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleTabClick('financeiro')}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Financeiro</span>
                </button>
                <button
                  onClick={() => handleTabClick('contabil')}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#0b1e36]" />
                  <span>Contábil</span>
                </button>
                <button
                  onClick={() => handleTabClick('rh')}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50"
                >
                  <Users className="w-3.5 h-3.5 text-amber-600" />
                  <span>RH</span>
                </button>
                <button
                  onClick={() => handleTabClick('administracao')}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-left text-xs font-semibold text-slate-800 hover:bg-blue-50"
                >
                  <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Administração</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('sobre')}
              className="text-left font-medium text-slate-700 hover:text-[#0b1e36] py-2 border-b border-slate-100"
            >
              Sobre a DS Assessoria
            </button>

            <button
              onClick={() => handleNavClick('localizacao')}
              className="text-left font-medium text-slate-700 hover:text-[#0b1e36] py-2 border-b border-slate-100"
            >
              Localização
            </button>

            <button
              onClick={() => handleNavClick('contato')}
              className="text-left font-medium text-slate-700 hover:text-[#0b1e36] py-2 border-b border-slate-100"
            >
              Falar com Atendente
            </button>

            <div className="pt-3 flex flex-col gap-2">
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0b1e36] text-white py-3 rounded-lg font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Atendimento WhatsApp (14 99111-2222)</span>
              </a>

              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-2.5 rounded-lg text-xs font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                <span>Ver rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
