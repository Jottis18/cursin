import { Button } from "./button";
import { ShieldCheck, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PriceBlockProps {
  originalPrice?: string;
  price: string;
  installment?: string;
  ctaText?: string;
  urgencyText?: string;
  details?: string;
}

export function PriceBlock({
  originalPrice = "R$ 599,90",
  price = "R$ 299,90",
  installment = "12x de R$ 29,90",
  ctaText = "Quero automatizar minha vida",
  urgencyText = "Promoção por tempo limitado",
  details = "Acesso vitalício + 7 dias de garantia."
}: PriceBlockProps) {
  // Contador regressivo de 24h persistente
  const TOTAL_SECONDS = 24 * 60 * 60; // 24 horas em segundos
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    // Recupera ou define o início do contador
    let start = localStorage.getItem("priceBlockCountdownStart");
    if (!start) {
      start = Date.now().toString();
      localStorage.setItem("priceBlockCountdownStart", start);
    }
    const startTime = parseInt(start, 10);

    const update = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = TOTAL_SECONDS - elapsed;
      setTimeLeft(remaining > 0 ? remaining : 0);
      if (remaining <= 0) {
        localStorage.removeItem("priceBlockCountdownStart");
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [TOTAL_SECONDS]);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto bg-neutral-900/90 rounded-xl shadow-lg border border-cyan-900 px-6 py-7 flex flex-col items-center gap-2 text-center"
    >
      {/* Contador regressivo */}
      <div className="flex items-center justify-center gap-2 mb-2 animate-pulse">
        <Clock className="w-5 h-5 text-cyan-400" />
        <span className="text-cyan-300 font-bold text-lg tracking-widest">Oferta termina em: {hours}:{minutes}:{seconds}</span>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <span className="text-sm text-neutral-500 line-through">De {originalPrice}</span>
        <span className="text-2xl sm:text-3xl font-bold text-cyan-300">Por {price}</span>
        <span className="text-sm text-neutral-300 font-normal">ou <span className="font-semibold text-cyan-400">{installment}</span> sem juros</span>
      </div>
      <Button
        size="lg"
        className="w-full max-w-xs mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold py-3 rounded-lg shadow-xl transition flex items-center justify-center gap-2 border-2 border-cyan-300 pulse-cta"
        asChild
      >
        <a href="https://pay.kirvano.com/a405605e-6de5-4b3e-becd-4a8d250fd568" target="_blank" rel="noopener noreferrer">
          <Zap className="w-5 h-5" /> {ctaText}
        </a>
      </Button>
      <div className="flex flex-col items-center gap-1 mt-3 w-full">
        <span className="text-xs text-cyan-400 font-medium flex items-center gap-1"><Clock className="w-4 h-4" /> {urgencyText}</span>
        <span className="text-xs text-neutral-400 flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-cyan-400" /> {details}</span>
      </div>
    </motion.div>
  );
} 