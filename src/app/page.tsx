"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, Workflow, Clock, Settings, Brain, Compass, Smartphone, DollarSign, FlaskConical, Rocket } from "lucide-react";
import { useEffect } from "react";
import { PriceBlock } from "@/components/ui/PriceBlock";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const vantagens = [
  {
    icon: <Clock className="w-10 h-10 text-cyan-400" />, // relógio
    title: "Ganhe tempo automatizando tarefas repetitivas",
    desc: "Deixe que sistemas inteligentes façam o trabalho pesado. Mais tempo livre para focar no que realmente importa — e para multiplicar seus ganhos."
  },
  {
    icon: <Settings className="w-10 h-10 text-cyan-400" />, // engrenagem
    title: "Tenha uma máquina digital que vende no automático",
    desc: "Crie fluxos de automação que atendem, entregam e vendem 24/7. Seu negócio funcionando mesmo quando você não está."
  },
  {
    icon: <DollarSign className="w-10 h-10 text-cyan-400" />, // dinheiro
    title: "Transforme suas automações em dinheiro no bolso",
    desc: "Automatize processos que geram receita e criam oportunidades de vendas recorrentes. A fórmula para escalar sua renda sem aumentar sua carga de trabalho."
  },
  {
    icon: <Rocket className="w-10 h-10 text-cyan-400" />, // foguete
    title: "Construa e venda seu próprio SaaS com IA e automações verticais",
    desc: "Seja o dono de soluções digitais que clientes vão pagar todo mês. Escale seu faturamento e conquiste liberdade financeira real."
  }
];

const metodo = [
  {
    icon: <Compass className="w-7 h-7 text-cyan-400" />,
    title: "Etapa 1 — Fundamentos da Automação",
    desc: "Aprenda como funcionam webhooks, APIs, lógica condicional, e o básico do n8n. Entenda os fundamentos para construir automações escaláveis e confiáveis."
  },
  {
    icon: <Settings className="w-7 h-7 text-cyan-400" />,
    title: "Etapa 2 — Automação com Casos Reais",
    desc: "Vamos implementar automações que minha agência já usou com sucesso: agendamentos, sistemas de atendimento automático, notificações e muito mais — tudo com n8n e IA."
  },
  {
    icon: <Brain className="w-7 h-7 text-cyan-400" />,
    title: "Etapa 3 — Criando SaaS com IA Vertical",
    desc: "Você vai aprender a criar SaaS completos voltados para nichos específicos (ex: clínicas, escritórios, freelancers), combinando automações + inteligência artificial."
  },
  {
    icon: <Smartphone className="w-7 h-7 text-cyan-400" />,
    title: "Etapa 4 — Integração com dispositivos reais",
    desc: "Mostro como integro iPhones, atalhos da Apple e apps nativos em automações para controle de ações físicas e digitais — do celular ao servidor."
  },
  {
    icon: <FlaskConical className="w-7 h-7 text-cyan-400" />,
    title: "Etapa 5 — Boas práticas e engenharia de automações",
    desc: "Aqui você aprende a estruturar automações com mentalidade de engenheiro de software: versionamento, modularização de fluxos, tratamento de erros, logs, comentários e padrões para reuso e manutenção. É o que diferencia um amador de alguém profissional."
  },
  {
    icon: <Rocket className="w-7 h-7 text-cyan-400" />,
    title: "Etapa 6 — Venda, tráfego e monetização",
    desc: "Crie páginas de venda, estratégias de tráfego pago e orgânico. Aprenda a vender suas automações, oferecer como serviço ou transformar em produto SaaS com recorrência."
  }
];

// Scroll suave para âncoras
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Home() {
  // Corrige scroll suave em hash links (SSR)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.matches && target.matches("[data-scroll]")) {
        e.preventDefault();
        const href = (target as HTMLAnchorElement).getAttribute("href");
        if (href) scrollToId(href.replace("#", ""));
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col relative font-sans">
      {/* Menu fixo topo direito */}
      <nav className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        bg-neutral-900/80 backdrop-blur-md rounded-full shadow-lg border border-neutral-800
        flex gap-2 px-2 py-2 items-center
        max-w-[98vw]
        md:top-6 md:left-auto md:right-6 md:-translate-x-0 md:px-4
      ">
        <a href="#vantagens" data-scroll className="text-cyan-300 font-semibold px-3 py-1 rounded hover:bg-cyan-900/20 transition text-sm">Vantagens</a>
        <a href="#metodo" data-scroll className="text-cyan-300 font-semibold px-3 py-1 rounded hover:bg-cyan-900/20 transition text-sm">Método</a>
        <a href="#garantia" data-scroll className="text-cyan-300 font-semibold px-3 py-1 rounded hover:bg-cyan-900/20 transition text-sm">Garantia</a>
        <a href="#duvidas" data-scroll className="text-cyan-300 font-semibold px-3 py-1 rounded hover:bg-cyan-900/20 transition text-sm">Dúvidas</a>
      </nav>

      {/* Header com CTA */}
      <header className="w-full px-4 pt-24 pb-6 flex flex-col items-center text-center gap-4 bg-neutral-950 border-b border-neutral-800">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 mb-2">
            <Workflow className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyan-400">AutoSaas Academy</h1>
          </div>
          <p className="text-lg max-w-2xl font-medium text-neutral-200">
            Transforme sua vida com <span className="text-cyan-300 font-semibold">automações</span> e <span className="text-cyan-300 font-semibold">SaaS</span> usando <span className="text-cyan-300 font-semibold">inteligência artificial</span> — sem precisar programar!
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <a href="https://pay.kirvano.com/a405605e-6de5-4b3e-becd-4a8d250fd568" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-4 px-8 py-6 text-lg font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white shadow-xl border-2 border-cyan-300 pulse-cta">
              Quero automatizar agora
            </Button>
          </a>
        </motion.div>
      </header>

      {/* Seção VSL */}
      <section className="w-full flex flex-col items-center px-4 py-10 bg-neutral-950 border-b border-neutral-900">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-xl font-semibold mb-4 text-cyan-300">
          Veja como o curso funciona e o que você vai construir
        </motion.h2>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-neutral-800">
          <iframe
            className="w-full h-full bg-black"
            src="https://www.youtube.com/embed/WjXDPvtKcs0?controls=0&disablekb=1&modestbranding=1&rel=0&fs=0"
            title="VSL - Vídeo de Vendas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          ></iframe>
        </motion.div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="w-full px-4 py-14 flex flex-col items-center bg-neutral-950 border-b border-neutral-900 scroll-mt-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-4 text-cyan-300 text-center">
          Vantagens de dominar automações, n8n, SaaS e IA
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }} className="text-lg text-neutral-300 max-w-2xl mb-10 text-center font-medium">
          Construa sistemas que faturam por você — mesmo enquanto você dorme.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
          {vantagens.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800 gap-4"
            >
              <div>{v.icon}</div>
              <h3 className="text-lg font-bold text-neutral-100 mb-1">{v.title}</h3>
              <p className="text-neutral-300 text-base">{v.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 w-full"><PriceBlock price="R$ 299,90" ctaText="Quero faturar com automações" /></div>
      </section>

      {/* Método */}
      <section id="metodo" className="w-full px-4 py-14 flex flex-col items-center bg-neutral-950 border-b border-neutral-900 scroll-mt-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-10 text-cyan-300 text-center">
          Conheça as 6 etapas do <span className="text-cyan-400">Método AutoSaas</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {metodo.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-800 gap-3 relative"
            >
              <div className="mb-2">{m.icon}</div>
              <h3 className="text-lg font-bold text-neutral-100 mb-1">{m.title}</h3>
              <p className="text-neutral-300 text-base">{m.desc}</p>
              {/* Círculo decorativo */}
              <span className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cyan-900/20 blur-sm hidden md:block" />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 w-full"><PriceBlock price="R$ 299,90" /></div>
      </section>

      {/* Garantia */}
      <section id="garantia" className="w-full px-4 py-10 flex flex-col items-center bg-neutral-950 border-b border-neutral-900 scroll-mt-24">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col items-center gap-3 max-w-xl text-center">
          <ShieldCheck className="w-10 h-10 text-cyan-400" />
          <h3 className="text-lg font-bold text-neutral-100">Garantia de 7 Dias</h3>
          <p className="text-base text-neutral-400">Teste o curso sem risco. Se não for para você, devolvemos 100% do valor em até 7 dias.</p>
        </motion.div>
      </section>

      {/* Dúvidas Frequentes */}
      <section id="duvidas" className="w-full px-4 py-16 flex flex-col items-center bg-neutral-950 border-b border-neutral-900 scroll-mt-24">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-10 text-cyan-300 text-center">
          Perguntas Frequentes
        </motion.h2>
        <div className="w-full max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="1">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">Quais são as formas de pagamento?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Você pode pagar com Cartão de Crédito, PIX, Boleto ou PayPal. Parcelamos em até 12x sem juros no cartão.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">Como recebo o acesso ao curso?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Após a confirmação do pagamento, você recebe um e-mail com o acesso à plataforma. No caso de boleto, pode levar até 2 dias úteis.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">O conteúdo é ao vivo ou gravado?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Todas as aulas são gravadas para você assistir quando e quantas vezes quiser. Mas teremos encontros ao vivo opcionais para tirar dúvidas e revisar projetos.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">Por quanto tempo tenho acesso?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Você terá acesso vitalício ao conteúdo. Isso inclui atualizações e novos módulos que forem lançados no futuro.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">Onde assisto as aulas?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Tudo é entregue por uma plataforma moderna e simples, com login pessoal. Pode acessar pelo computador ou celular.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="6">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">O pagamento é seguro?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">100%. As transações são processadas por plataformas confiáveis como Hotmart ou Kirvano, com certificação de segurança e criptografia.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="7">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">Moro fora do Brasil. Posso comprar?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Sim! O pagamento internacional pode ser feito via PayPal ou cartão internacional. O acesso é liberado normalmente após a compra.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="8">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">Já trabalho com automações. Esse curso serve pra mim?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Com certeza. Você vai aprender fluxos avançados com IA, integração entre dispositivos, criação de SaaS verticais e estratégias de venda — tudo validado em projetos reais.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="9">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">Sou iniciante. Consigo acompanhar?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Sim! O curso começa do básico absoluto: te ensino o que é webhook, como conectar APIs, até criar sistemas prontos para serem vendidos.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="10">
              <AccordionTrigger className="text-base font-semibold bg-neutral-900 rounded-lg px-4 py-3 shadow border border-neutral-800 text-cyan-300">Preciso aparecer ou ser influencer?</AccordionTrigger>
              <AccordionContent className="bg-neutral-950 text-neutral-200 rounded-b-lg px-4 py-3 border-t border-neutral-800">Não precisa. O curso é feito pra quem quer criar soluções automatizadas e vender mesmo nos bastidores. Você pode montar um SaaS inteiro e vender online sem mostrar seu rosto.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action Final */}
      <motion.div id="inscricao" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="fixed bottom-4 left-0 w-full flex justify-center z-50 pointer-events-none">
        <div className="pointer-events-auto bg-cyan-500 text-neutral-950 rounded-full shadow-2xl px-6 py-3 flex items-center gap-3 animate-pulse border border-cyan-400">
          <span className="font-semibold text-lg">Pronto para automatizar?</span>
          <Button size="lg" className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold border-2 border-cyan-300 shadow-xl pulse-cta" asChild>
            <a href="https://pay.kirvano.com/a405605e-6de5-4b3e-becd-4a8d250fd568" target="_blank" rel="noopener noreferrer">Começar o curso</a>
          </Button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full mt-auto py-8 px-4 flex flex-col items-center gap-2 text-xs text-neutral-500 bg-neutral-950 border-t border-neutral-900">
        <span>AutoSaas Academy &copy; {new Date().getFullYear()}</span>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="#" className="hover:underline">Política de Privacidade</a>
        </div>
      </footer>
    </div>
  );
}
