import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

console.log("System Initializing: React Mounting Process Started");

try {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error("Critical Failure: Root container 'root' not found in DOM");
  }

  const root = createRoot(container);
  console.log("System Root Created");

  root.render(
    <StrictMode>
      <div id="mount-test" style={{ display: 'none', position: 'fixed', bottom: '10px', right: '10px', background: '#10b981', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '10px', fontFamily: 'monospace', zIndex: 10001 }}>SYS_ACTIVE</div>
      <App />
    </StrictMode>,
  );
  console.log("System Rendering: App components dispatched to renderer");
} catch (error) {
  console.error("System Fatal: Mount failed", error);
  // This will also be caught by our window.onerror in index.html
}

