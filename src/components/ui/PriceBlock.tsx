import { Button } from "./button";
import { ShieldCheck, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface PriceBlockProps {
  originalPrice?: string;
  price: string;
  installment?: string;
  ctaText?: string;
  urgencyText?: string;
  details?: string;
  onClick?: () => void;
}

export function PriceBlock({
  originalPrice = "R$ 599,90",
  price = "R$ 299,90",
  installment = "12x de R$ 29,90",
  ctaText = "Quero automatizar minha vida",
  urgencyText = "Promoção por tempo limitado",
  details = "Acesso vitalício + 7 dias de garantia.",
  onClick
}: PriceBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto bg-neutral-900/90 rounded-xl shadow-lg border border-cyan-900 px-6 py-7 flex flex-col items-center gap-2 text-center"
    >
      <div className="flex flex-col gap-1 w-full">
        <span className="text-sm text-neutral-500 line-through">De {originalPrice}</span>
        <span className="text-2xl sm:text-3xl font-bold text-cyan-300">Por {price}</span>
        <span className="text-sm text-neutral-300 font-normal">ou <span className="font-semibold text-cyan-400">{installment}</span> sem juros</span>
      </div>
      <Button
        size="lg"
        className="w-full max-w-xs mt-4 bg-cyan-600 hover:bg-cyan-500 text-neutral-950 text-base font-semibold py-3 rounded-lg shadow transition flex items-center justify-center gap-2"
        onClick={onClick}
      >
        <Zap className="w-5 h-5" /> {ctaText}
      </Button>
      <div className="flex flex-col items-center gap-1 mt-3 w-full">
        <span className="text-xs text-cyan-400 font-medium flex items-center gap-1"><Clock className="w-4 h-4" /> {urgencyText}</span>
        <span className="text-xs text-neutral-400 flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-cyan-400" /> {details}</span>
      </div>
    </motion.div>
  );
} 