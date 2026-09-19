import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ArrowUp,
  ShieldCheck,
  TrendingUp,
  Calculator,
  Users,
  Briefcase,
  Database
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { ServiceTabId } from '../types';
import dsLogo from '../assets/images/ds_monogram_logo_1789820299592.jpg';

interface FooterProps {
  onSelectTab: (tab: ServiceTabId) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenAdminLeads?: () => void;
}

export default function Footer({ onSelectTab, onNavigateSection, onOpenAdminLeads }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tabId: ServiceTabId) => {
    onSelectTab(tabId);
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#071322] text-slate-400 text-sm border-t border-[#132844]">
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#0b1e36] border border-blue-900 shadow-md shrink-0">
                <img
                  src={dsLogo}
                  alt="Logo DS Assessoria Administrativa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">
                  DS Assessoria Administrativa
                </span>
                <span className="text-xs text-blue-300 font-medium">
                  Excelência e solidez desde 2019
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
              Prestação de serviços corporativos em <strong>Jaú e região</strong>, 
              especializada em rotinas financeiras, contabilidade gerencial, departamento pessoal/RH e 
              organização de processos administrativos.
            </p>

            <div className="flex items-center gap-2 text-xs text-blue-200 mt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia de segurança, sigilo e rigor técnico.</span>
            </div>
          </div>

          {/* 4 Functions Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              As 4 Funções
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleTabClick('financeiro')}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs sm:text-sm text-left cursor-pointer"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Financeiro</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('contabil')}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs sm:text-sm text-left cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Contábil</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('rh')}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs sm:text-sm text-left cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>RH / eSocial</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('administracao')}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs sm:text-sm text-left cursor-pointer"
                >
                  <Briefcase className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Administração</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Google Maps */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Localização em Jaú
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Sede em Jaú - SP:</strong>
                  <span>{COMPANY_DATA.address}, {COMPANY_DATA.addressNumber}</span>
                  <span className="block text-slate-400 text-xs">Centro, Jaú/SP</span>
                </div>
              </div>

              <div>
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white text-xs font-semibold underline underline-offset-2"
                >
                  <span>Abrir no Google Maps ↗</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{COMPANY_DATA.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Atendimento Rápido
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ATENDIMENTO@DSACESSORIA.COM"
                className="text-slate-200 hover:text-white text-xs sm:text-[13px] flex items-center gap-2 transition-colors font-medium whitespace-nowrap overflow-hidden"
                title="ATENDIMENTO@DSACESSORIA.COM"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="whitespace-nowrap tracking-tight">ATENDIMENTO@DSACESSORIA.COM</span>
              </a>

              <a
                href={COMPANY_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="text-white hover:text-emerald-400 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>(14) 99111-2222</span>
              </a>

              <span className="text-[11px] text-slate-400">
                Atendimento presencial e digital para empresas de Jaú e região.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>DS Assessoria Administrativa</strong>. Todos os direitos reservados. No mercado desde 2019.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {onOpenAdminLeads && (
              <button
                type="button"
                onClick={onOpenAdminLeads}
                className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 text-xs font-medium"
              >
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>Consultar Solicitações Recebidas</span>
              </button>
            )}
            <span className="text-slate-400">Jaú - São Paulo</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
