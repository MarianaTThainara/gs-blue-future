import { useState } from "react";
import { useEffect } from "react";

export default function ButtonScrollTop() {

    const [showButtonScroll, setShowButtonScroll] = useState(false);

    const handleClickScrollTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const onScroll = e => {
            setShowButtonScroll(e.target.documentElement.scrollTop >= 784)
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <button type="button" onClick={() => handleClickScrollTop()} className={`fixed bottom-10 right-10 group rounded-full p-4 bg-orange-500 hover:bg-orange-400 flex items-center justify-center z-[9999] ${showButtonScroll ? 'block' : 'hidden'}`}>
        <svg className="w-4 h-4 group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    );
  }