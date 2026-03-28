import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/97302f80-55d1-40cc-a9b7-5d2014e144c7/files/f6ee39a1-b9a4-44b7-8270-a1642487fd9b.jpg"
          alt="Медитативный пейзаж"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Открой себя заново<br />с Ольгой Мюллер
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
          Энергокоучинг, психология и эзотерика для глубокой трансформации.<br />
          Помогаю освободиться от блоков, найти внутреннюю гармонию и раскрыть свой потенциал.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-neutral-900 px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer"
        >
          Записаться на консультацию
        </a>
      </div>
    </div>
  );
}