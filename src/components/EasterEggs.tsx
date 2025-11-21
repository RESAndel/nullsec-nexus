import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const EasterEggs = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showCookie, setShowCookie] = useState(false);
  const [showKonami, setShowKonami] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [showSecretButton, setShowSecretButton] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleClick = () => {
      setClickCount(prev => {
        const newCount = prev + 1;
        
        // Cookie easter egg at 9 clicks
        if (newCount === 9 && !showCookie) {
          setShowCookie(true);
          setTimeout(() => setShowCookie(false), 10000);
        }
        
        // Secret button appears at 20 clicks
        if (newCount === 20) {
          setShowSecretButton(true);
        }
        
        return newCount;
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        const newIndex = konamiIndex + 1;
        setKonamiIndex(newIndex);
        
        if (newIndex === konamiCode.length) {
          setShowKonami(true);
          setTimeout(() => setShowKonami(false), 20000);
          setKonamiIndex(0);
          
          // Add tilt effect to body
          document.body.style.animation = 'tilt 2s ease-in-out';
          setTimeout(() => {
            document.body.style.animation = '';
          }, 2000);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiIndex, showCookie]);

  const handleSecretClick = () => {
    setShowSecret(true);
    setShowSecretButton(false);
    setTimeout(() => setShowSecret(false), 3000);
  };

  const PopupContent = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/95 backdrop-blur-sm px-12 py-8 rounded-2xl z-[10000] shadow-[0_0_80px_hsl(var(--primary)/0.9)] text-center border-2 border-primary"
    >
      {children}
    </motion.div>
  );

  return (
    <>
      <AnimatePresence>
        {showCookie && (
          <PopupContent>
            <div className="text-6xl mb-4 animate-bounce">🍪</div>
            <div className="text-background text-2xl font-bold">here u go !</div>
            <div className="text-background mt-2">curiocity pays off </div>
          </PopupContent>
        )}

        {showKonami && (
          <PopupContent>
            <div className="text-6xl mb-4 animate-pulse">🎮</div>
            <div className="text-background text-2xl font-bold">KONAMI CODE ACTIVATED!</div>
            <div className="text-background mt-2">You're a human </div>
          </PopupContent>
        )}

        {showSecret && (
          <PopupContent>
            <div className="text-6xl mb-4 animate-spin">🎉</div>
            <div className="text-background text-2xl font-bold">SECRET UNLOCKED!</div>
            <div className="text-background mt-2">now here is the trick but it only work on a pc : ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️</div>
          </PopupContent>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSecretButton && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
            }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleSecretClick}
            className="fixed bottom-8 right-8 bg-primary text-background px-8 py-4 rounded-full font-bold cursor-pointer shadow-[0_0_40px_hsl(var(--primary)/0.7)] z-[9999] text-lg animate-pulse hover:animate-none"
          >
            👀 Click Me!
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
