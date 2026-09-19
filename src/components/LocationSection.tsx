import { useState } from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Clock, 
  Phone, 
  Navigation,
  Car,
  Building
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${COMPANY_DATA.address}, ${COMPANY_DATA.addressNumber} - ${COMPANY_DATA.city}/${COMPANY_DATA.state}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Maps embed URL for Rua Lourenço Prado 218 Jaú SP
  const mapEmbedUrl = `https://maps.google.com/maps?q=Rua+Louren%C3%A7o+Prado,+218,+Ja%C3%BA+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localizacao" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0b1e36]/10 text-[#0b1e36] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#0b1e36]" />
            Nossa Localização em Jaú
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1e36] tracking-tight">
            Venha Tomar um Café Conosco
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Estamos estrategicamente localizados na <strong>{COMPANY_DATA.address}, {COMPANY_DATA.addressNumber}</strong>, 
            no Centro de Jaú/SP, com fácil acesso para você e sua equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0b1e36] text-white flex items-center justify-center shadow-md">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                    Sede Operacional
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0b1e36]">
                    DS Assessoria Administrativa
                  </h3>
                </div>
              </div>

              {/* Address Highlight */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Endereço Completo:
                    </span>
                    <p className="text-base font-bold text-slate-900 mt-0.5">
                      {COMPANY_DATA.address}, {COMPANY_DATA.addressNumber}
                    </p>
                    <p className="text-sm text-slate-600">
                      Jaú - SP • CEP 17201-000
                    </p>
                  </div>
                </div>

                {/* Copy Button */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Copiar para GPS / Waze / Uber:
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b1e36] hover:text-blue-700 bg-white border border-slate-300 px-3 py-1.5 rounded-lg shadow-2xs hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Working Hours & Phone */}
              <div className="space-y-4 mb-6 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Horário de Atendimento:</span>
                    <span>{COMPANY_DATA.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Telefone & WhatsApp:</span>
                    <a 
                      href={`tel:${COMPANY_DATA.phoneRaw}`}
                      className="text-[#0b1e36] font-bold hover:underline"
                    >
                      {COMPANY_DATA.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Como Chegar:</span>
                    <span className="text-xs text-slate-600">
                      Localizado na Rua Lourenço Prado, nº 218, em ponto central privilegiado de Jaú, com facilidade de acesso e estacionamento nas proximidades.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action CTA Button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0b1e36] hover:bg-[#122e54] text-white font-bold py-3 px-5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4 text-blue-300" />
                <span>Abrir Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[380px] bg-slate-200 rounded-3xl overflow-hidden border border-slate-300 shadow-xl relative flex flex-col">
              
              {/* Map Header bar */}
              <div className="bg-[#0b1e36] text-white text-xs px-4 py-2.5 flex items-center justify-between z-10">
                <span className="font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  {COMPANY_DATA.address}, {COMPANY_DATA.addressNumber} • Centro, Jaú - SP
                </span>
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white underline text-[11px] font-medium"
                >
                  Ver em tela cheia ↗
                </a>
              </div>

              {/* Interactive Iframe */}
              <div className="flex-1 w-full relative">
                <iframe
                  title="Localização DS Assessoria Administrativa Jaú SP"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '340px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[340px] filter saturate-110"
                />
              </div>

              {/* Bottom bar with quick click */}
              <div className="bg-white p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-600">
                  Precisa de orientações para chegar até o nosso escritório?
                </span>
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#0b1e36] hover:text-blue-700 underline"
                >
                  <span>Traçar rota pelo Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
