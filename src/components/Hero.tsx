import { 
  ShieldCheck, 
  MessageCircle, 
  MapPin, 
  TrendingUp, 
  Calculator, 
  Users, 
  Briefcase,
  ChevronRight,
  ArrowDown
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { ServiceTabId } from '../types';
import heroBgImage from '../assets/images/person_glasses_computer_1789819388013.jpg';

interface HeroProps {
  onSelectTab: (tab: ServiceTabId) => void;
  onExploreServices: () => void;
}

export default function Hero({ onSelectTab, onExploreServices }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0b1e36] text-white pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Background Image of Person with Glasses at Computer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgImage}
          alt="Profissional com óculos trabalhando no computador na DS Assessoria"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Navy Blue & Dark Overlays for Optimal Text Readability & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e36] via-[#0b1e36]/95 to-[#0b1e36]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e36] via-transparent to-[#0b1e36]/70" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      {/* Ambient Lighting Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Tradição e Segurança no Mercado Desde {COMPANY_DATA.foundedYear}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              DS Assessoria <span className="text-blue-300">Administrativa</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Gestão de alta performance para o seu negócio em <strong>Jaú e região</strong>. 
              Centralizamos suas <strong>funções financeiras, contábeis, recursos humanos e rotinas administrativas</strong> com 
              máxima precisão, conformidade jurídica e atendimento ágil.
            </p>

            {/* Fast Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* WhatsApp Fast Button */}
              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Atendimento WhatsApp: (14) 99111-2222</span>
              </a>

              {/* Scroll to Services Tabs */}
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all cursor-pointer"
              >
                <span>Ver as 4 Abas de Serviços</span>
                <ArrowDown className="w-4 h-4 text-blue-300" />
              </button>
            </div>

            {/* Location highlight badge */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-xl p-3 max-w-xl">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
              <div className="leading-snug">
                <strong>Sede em Jaú/SP:</strong> {COMPANY_DATA.address}, {COMPANY_DATA.addressNumber}
                <span className="block text-slate-400 text-xs mt-0.5">
                  Pronto atendimento presencial e digital para empresas de todos os portes.
                </span>
              </div>
              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-blue-300 hover:text-white font-semibold underline underline-offset-2 ml-auto text-xs"
              >
                Abrir Mapa
              </a>
            </div>
          </div>

          {/* 4 Interactive Pillars Fast Cards */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    As 4 Funções Especializadas
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Clique para navegar diretamente para a aba:
                  </p>
                </div>
                <span className="text-[11px] font-semibold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-400/30">
                  Desde 2019
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Financeiro */}
                <button
                  onClick={() => onSelectTab('financeiro')}
                  className="flex flex-col text-left p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                    1. Financeiro
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    Fluxo de caixa, conciliação e contas a pagar/receber.
                  </span>
                </button>

                {/* 2. Contábil */}
                <button
                  onClick={() => onSelectTab('contabil')}
                  className="flex flex-col text-left p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white group-hover:text-blue-200 transition-colors flex items-center justify-between">
                    2. Contábil
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    Escrituração fiscal, balanços e redução tributária.
                  </span>
                </button>

                {/* 3. Recursos Humanos */}
                <button
                  onClick={() => onSelectTab('rh')}
                  className="flex flex-col text-left p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white group-hover:text-amber-200 transition-colors flex items-center justify-between">
                    3. Recursos Humanos
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    Folha de pagamento, eSocial, férias e admissões.
                  </span>
                </button>

                {/* 4. Administração */}
                <button
                  onClick={() => onSelectTab('administracao')}
                  className="flex flex-col text-left p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-white group-hover:text-indigo-200 transition-colors flex items-center justify-between">
                    4. Administração
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    Processos, contratos, alvarás e rotinas operacionais.
                  </span>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Segurança Jurídica & Sigilo
                </span>
                <span className="font-semibold text-white">
                  Jaú - SP
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
