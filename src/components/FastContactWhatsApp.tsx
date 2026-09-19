import { useState } from 'react';
import { 
  Send, 
  Clock, 
  CheckCircle, 
  Loader2, 
  AlertCircle,
  Building2,
  Mail,
  UserCheck
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { ServiceTabId } from '../types';
import { salvarSolicitacaoContabil, SolicitacaoContabilData } from '../lib/firebase';

interface FastContactProps {
  initialService?: ServiceTabId;
}

export default function FastContactWhatsApp({ initialService = 'contabil' }: FastContactProps) {
  const [selectedFunction, setSelectedFunction] = useState<string>(initialService);
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [regimeTributario, setRegimeTributario] = useState<string>('simples_nacional');
  const [urgentMessage, setUrgentMessage] = useState('');

  // Form submission state
  const [isSaving, setIsSaving] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !userPhone.trim()) {
      setSaveError('Por favor, informe seu nome e telefone para contato.');
      return;
    }

    setIsSaving(true);
    setSaveError(null);

    // Map function to valid serviceType in Firestore schema
    let serviceType: SolicitacaoContabilData['serviceType'] = 'contabil';
    if (selectedFunction === 'financeiro') serviceType = 'financeiro';
    else if (selectedFunction === 'rh') serviceType = 'rh';
    else if (selectedFunction === 'fiscal') serviceType = 'fiscal';
    else if (selectedFunction === 'todas' || selectedFunction === 'administracao') serviceType = 'completo';

    const result = await salvarSolicitacaoContabil({
      clientName: clientName.trim(),
      companyName: companyName.trim() || undefined,
      email: userEmail.trim() || undefined,
      phone: userPhone.trim(),
      serviceType,
      regimeTributario: regimeTributario as any,
      message: urgentMessage.trim() || undefined,
    });

    setIsSaving(false);

    if (result.success) {
      setSubmittedSuccess(true);
      // Clean up fields
      setClientName('');
      setCompanyName('');
      setUserEmail('');
      setUserPhone('');
      setUrgentMessage('');
    } else {
      setSaveError(result.error || 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.');
    }
  };

  const handleResetForm = () => {
    setSubmittedSuccess(false);
    setSaveError(null);
  };

  return (
    <section id="contato" className="py-16 sm:py-20 bg-[#0b1e36] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            Atendimento Personalizado
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fale com a DS Assessoria
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg">
            Preencha seus dados abaixo e nossa equipe entrará em contato para entender a necessidade da sua empresa e apresentar a melhor solução.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Company Credentials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span>Retorno Ágil e Sem Burocracia</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Ao enviar seus dados, nossa equipe especializada analisará o perfil da sua empresa e entrará em contato pelo telefone ou e-mail informado com uma proposta sob medida.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300 mb-2">
                <div className="text-slate-400 text-xs uppercase font-semibold tracking-wider">E-mail Direto:</div>
                <a 
                  href={`mailto:${COMPANY_DATA.email}`} 
                  className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors block"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Atendimento presencial e remoto para Jaú e toda a região</span>
              </div>
            </div>

            {/* Credentials */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mais de 5 anos de atuação sólida no mercado (desde 2019)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Diagnóstico inicial e proposta personalizada sem custo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sede própria na {COMPANY_DATA.address}, {COMPANY_DATA.addressNumber}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Contato e atendimento conduzido diretamente pelos nossos especialistas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Solicitar Contato Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
              
              {/* Header inside Card */}
              <div className="border-b border-slate-200 pb-4 mb-6">
                <h3 className="text-xl font-bold text-[#0b1e36]">
                  Solicitar Contato
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Preencha os campos abaixo com as informações da sua empresa. Entraremos em contato com você o mais breve possível.
                </p>
              </div>

              {/* SUCCESS STATE */}
              {submittedSuccess ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0b1e36]">
                      Solicitação enviada com sucesso!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Recebemos os seus dados. Nossa equipe da <strong>DS Assessoria</strong> entrará em contato diretamente pelo telefone ou e-mail informado.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 bg-[#0b1e36] hover:bg-[#122e54] text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    <span>Enviar Nova Solicitação</span>
                  </button>
                </div>
              ) : (
                /* FORM */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* ERROR BANNER */}
                  {saveError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <p className="text-xs">{saveError}</p>
                    </div>
                  )}

                  {/* Function Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Área de Atendimento Desejada:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'contabil', label: 'Assessoria Contábil' },
                        { id: 'fiscal', label: 'Gestão Fiscal / Tributos' },
                        { id: 'financeiro', label: 'Gestão Financeira' },
                        { id: 'rh', label: 'Folha & RH / eSocial' },
                        { id: 'administracao', label: 'Administrativo' },
                        { id: 'todas', label: 'Assessoria Completa' }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setSelectedFunction(item.id)}
                          className={`text-xs py-2 px-3 rounded-xl font-semibold border transition-all cursor-pointer text-left ${
                            selectedFunction === item.id
                              ? 'bg-[#0b1e36] text-white border-[#0b1e36] shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Seu Nome Completo: *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nome da Empresa (se houver):
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Comercial Jaú Ltda"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Telefone / WhatsApp: *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (14) 99888-7766"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        E-mail para Retorno:
                      </label>
                      <input
                        type="email"
                        placeholder="Ex: contato@empresa.com.br"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
                      />
                    </div>
                  </div>

                  {/* Tax Regime Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Regime Tributário da Empresa:
                    </label>
                    <select
                      value={regimeTributario}
                      onChange={(e) => setRegimeTributario(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
                    >
                      <option value="simples_nacional">Simples Nacional</option>
                      <option value="lucro_presumido">Lucro Presumido</option>
                      <option value="lucro_real">Lucro Real</option>
                      <option value="mei">Microempreendedor Individual (MEI)</option>
                      <option value="ainda_nao_sei">Ainda não sei / Quero orientação para abertura</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Como podemos ajudar sua empresa?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Descreva brevemente o que sua empresa precisa (Ex: assessoria contábil mensal, fechamento de balanço, folha de pagamento)..."
                      value={urgentMessage}
                      onChange={(e) => setUrgentMessage(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0b1e36] hover:bg-[#122e54] disabled:bg-slate-400 text-white font-bold py-3.5 px-6 rounded-xl text-sm sm:text-base shadow-lg transition-all cursor-pointer"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando solicitação...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitação</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    Seus dados são recebidos diretamente por nossa equipe, que entrará em contato para apresentar a proposta.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
