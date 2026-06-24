import { useState, useEffect, useCallback } from 'react';

export function useExitIntent(enabled = true) {
  const [showExitIntent, setShowExitIntent] = useState(false);

  const dismiss = useCallback(() => setShowExitIntent(false), []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setShowExitIntent(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [enabled]);

  return { showExitIntent, dismiss };
}
