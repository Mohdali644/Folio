import { useEffect, useState } from "react";

export default function SignatureBadge() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Fades out 1.5s after you stop scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <a 
      href="https://github.com/Mohdali644" 
      target="_blank" 
      rel="noreferrer" 
      className={`fixed bottom-6 left-6 flex items-center gap-3 px-5 py-1.5 bg-[#0a0a0a]/40 border border-white/10 rounded-full backdrop-blur-md z-9900 overflow-hidden group cursor-none transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${isScrolling ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}
    >
      <div className="absolute inset-0 rounded-full p-0.5 bg-linear-to-br from-accent-cyan to-[#b06ab3] opacity-0 group-hover:opacity-100 transition-opacity duration-400 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] mask-exclude"></div>
      
      <div className="relative w-1.5 h-1.5 bg-accent-cyan rounded-full shadow-[0_0_10px_#00f2fe] shrink-0">
        <div className="absolute -inset-1 border border-accent-cyan rounded-full animate-[ping_2s_linear_infinite]"></div>
      </div>
      <span className="relative z-10 text-white/60 text-[0.8rem] font-medium tracking-wide uppercase whitespace-nowrap group-hover:text-white transition-colors">
        Engineered by <strong className="text-white font-bold">Mohd Ali</strong>
      </span>
    </a>
  );
}