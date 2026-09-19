import { useState } from 'react';
import { MessageCircle, X, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Small popover message */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white text-slate-800 p-3 rounded-2xl shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-3 max-w-xs">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-[#0b1e36] block">Atendimento Rápido</span>
            Fale agora no WhatsApp: <strong className="text-emerald-700">(14) 99111-2222</strong>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded-md"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating action button */}
      <a
        href={COMPANY_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento rápido no WhatsApp (14) 99111-2222"
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />

        {/* Floating badge "1" */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-xs">
          1
        </span>
      </a>
    </div>
  );
}
