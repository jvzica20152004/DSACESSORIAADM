import { 
  Building2, 
  Calendar, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Users2,
  Clock4,
  Briefcase
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import dsLogo from '../assets/images/ds_monogram_logo_1789820299592.jpg';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story & Badges */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#0b1e36] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#0b1e36] border border-white/20 shadow-lg shrink-0">
                  <img
                    src={dsLogo}
                    alt="Logo DS Assessoria Administrativa"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest block">
                    Trajetória Sólida
                  </span>
                  <span className="text-xl font-bold text-white">
                    Desde 2019 em Jaú/SP
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  Fundada em <strong>2019</strong>, a <strong>DS Assessoria Administrativa</strong> nasceu 
                  com o propósito de desmistificar a burocracia empresarial e fornecer apoio técnico de alto nível 
                  para empresários de Jaú e região.
                </p>
                <p>
                  Ao longo desses anos de atuação contínua no mercado, construímos parcerias duradouras com 
                  empresas dos mais variados segmentos, garantindo <strong>rigor contábil</strong>, 
                  <strong>controle financeiro cirúrgico</strong>, <strong>conformidade em recursos humanos</strong> e 
                  <strong>organização administrativa eficiente</strong>.
                </p>
              </div>

              {/* Badges in card */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-black text-blue-300">
                    2019
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    Ano de fundação no mercado
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">
                    100%
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    Conformidade e zelo fiscal
                  </div>
                </div>
              </div>
            </div>

            {/* Quick address pill */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
              <Building2 className="w-5 h-5 text-[#0b1e36] shrink-0" />
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block font-semibold">Sede Própria em Jaú</strong>
                {COMPANY_DATA.address}, {COMPANY_DATA.addressNumber} - Fácil acesso e estacionamento.
              </div>
            </div>
          </div>

          {/* Right Column: Values, Pillars, and Why Choose DS */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-[#0b1e36]/10 text-[#0b1e36] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-[#0b1e36]" />
              Conheça Nossa História & Valores
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e36] tracking-tight leading-tight">
              Mais de {new Date().getFullYear() - 2019} anos simplificando a gestão de quem empreende
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Muitos negócios perdem competitividade não pela qualidade de seus produtos ou serviços, 
              mas pelo tempo excessivo consumido por obrigações fiscais, conferência de contas, 
              cálculos de folha e processos operacionais desordenados.
            </p>

            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Na <strong>DS Assessoria Administrativa</strong>, assumimos essas 4 frentes com profissionais 
              capacitados e processos homologados, proporcionando segurança jurídica e informações estratégicas 
              para você decidir com confiança.
            </p>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1.5">
                  <Clock4 className="w-4 h-4 text-blue-700" />
                  <span>Pontualidade Absoluta</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Guias fiscais, folha de pagamento e relatórios financeiros entregues impreterivelmente antes dos prazos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Sigilo & Segurança</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tratamento confidencial e seguro de todas as informações contábeis, financeiras e trabalhistas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1.5">
                  <Users2 className="w-4 h-4 text-amber-600" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Canal direto via WhatsApp (14 99111-2222) com pessoas reais que conhecem sua empresa pelo nome.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm mb-1.5">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <span>Visão Integrada 360°</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  O financeiro conversa com a contabilidade, que se alinha ao RH e à rotina administrativa.
                </p>
              </div>

            </div>

            {/* Checklist */}
            <div className="mt-8 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atuação em conformidade com as normas vigentes do CFC, CRC e Receita Federal</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sede física em Jaú na {COMPANY_DATA.address}, {COMPANY_DATA.addressNumber} para reuniões presenciais</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento digital ágil por WhatsApp para resolução diária de demandas</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
