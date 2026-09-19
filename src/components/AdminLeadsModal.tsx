import { useState, useEffect } from 'react';
import { 
  X, 
  Database, 
  RefreshCw, 
  Search, 
  Clock, 
  Building2, 
  Phone, 
  Mail, 
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { listarTodasSolicitacoes, SolicitacaoContabilData } from '../lib/firebase';
import firebaseConfig from '../../firebase-applet-config.json';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminLeadsModal({ isOpen, onClose }: AdminLeadsModalProps) {
  const [leads, setLeads] = useState<SolicitacaoContabilData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const loadLeads = async () => {
    setLoading(true);
    const data = await listarTodasSolicitacoes();
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredLeads = leads.filter(item => {
    const q = searchTerm.toLowerCase();
    return (
      item.clientName?.toLowerCase().includes(q) ||
      item.companyName?.toLowerCase().includes(q) ||
      item.phone?.toLowerCase().includes(q) ||
      item.email?.toLowerCase().includes(q) ||
      item.message?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white text-slate-900 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#0b1e36] text-white flex items-center justify-between gap-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Solicitações no Firebase</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-2.5 py-0.5 rounded-full">
                  {leads.length} registradas
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                Coleção: <code className="bg-black/30 px-1.5 py-0.5 rounded text-emerald-400 font-mono">assessoria_contabil</code> no banco <code className="bg-black/30 px-1.5 py-0.5 rounded text-blue-300 font-mono text-[11px]">{firebaseConfig.firestoreDatabaseId}</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadLeads}
              disabled={loading}
              title="Atualizar lista"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              title="Fechar"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Database Info Notice */}
        <div className="bg-amber-50 border-b border-amber-200 p-3.5 sm:px-6 text-xs text-amber-900 flex items-start gap-2.5">
          <ExternalLink className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Atenção ao visualizar no Console do Firebase:</strong> Por padrão, o painel do Firebase exibe o banco <code>(default)</code>. Para visualizar estes registros na nuvem, selecione no topo do menu do Firestore o banco nomeado <strong>{firebaseConfig.firestoreDatabaseId}</strong>.
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar por nome, empresa, telefone ou mensagem..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-sm pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0b1e36]"
            />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-2"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Leads List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3 bg-slate-100/60">
          {loading ? (
            <div className="text-center py-12 text-slate-500 flex flex-col items-center gap-2">
              <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
              <p className="text-sm font-medium">Carregando dados do Firestore...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <FileText className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-medium">Nenhuma solicitação encontrada.</p>
              {searchTerm && <p className="text-xs text-slate-400 mt-1">Tente remover o filtro de busca.</p>}
            </div>
          ) : (
            filteredLeads.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col gap-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-slate-900">
                      {item.clientName}
                    </span>
                    {item.companyName && (
                      <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 font-semibold px-2.5 py-0.5 rounded-md">
                        <Building2 className="w-3 h-3 text-slate-500" />
                        {item.companyName}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      ID: {item.id?.slice(0, 8)}...
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {item.status || 'Pendente'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{item.phone}</span>
                  </div>

                  {item.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span className="truncate">{item.email}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>
                      {item.createdAt ? new Date(item.createdAt).toLocaleString('pt-BR') : 'Data não informada'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="bg-blue-50 text-blue-800 px-2.5 py-0.5 rounded font-medium border border-blue-100">
                    Área: <strong>{item.serviceType.toUpperCase()}</strong>
                  </span>
                  {item.regimeTributario && (
                    <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded font-medium">
                      Regime: <strong>{item.regimeTributario.replace('_', ' ').toUpperCase()}</strong>
                    </span>
                  )}
                </div>

                {item.message && (
                  <div className="text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-700 mt-1">
                    <span className="font-semibold text-slate-900 block mb-1">Mensagem enviada:</span>
                    <p className="whitespace-pre-wrap">{item.message}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Dados conectados em tempo real com o Cloud Firestore</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
}
