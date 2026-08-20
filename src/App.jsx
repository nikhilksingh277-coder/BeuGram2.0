import { useEffect } from 'react';
import './App.css';
import './index.css';

/**
 * BeUgram compatibility shell.
 * The original application is a mature, single-file DOM application.
 * It is loaded after React mounts the exact DOM roots it expects so its
 * existing behavior, data model, localStorage schema and UI remain intact.
 */
export default function App() {
  useEffect(() => {
    let cancelled = false;

    import('./legacy/legacy.js').catch((error) => {
      if (!cancelled) {
        console.error('BeUgram failed to initialize:', error);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div id="toast-root" className="toast-root" aria-live="polite" />
      <div id="modal-root" />
      <div id="app" />
    </>
  );
}
