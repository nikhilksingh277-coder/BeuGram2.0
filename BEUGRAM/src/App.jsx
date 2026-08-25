import { useEffect, useState } from 'react';
import './App.css';
import './index.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hi! 👋 I am Gemini Campus Copilot. How can I help you?'
    }
  ]);
  const [loading, setLoading] = useState(false);

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

  const sendMessage = async () => {
    const text = message.trim();

    if (!text || loading) return;

    setMessages((prev) => [
      ...prev,
      { role: 'user', text }
    ]);

    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Gemini request failed');
      }

      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: data.reply }
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: '❌ UNABLE TO CONNECT GEMINI, PLEASE CHECK YOUR INTERNET CONNECTION.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="toast-root" className="toast-root" aria-live="polite" />
      <div id="modal-root" />
      <div id="app" />

      {/* TEST GEMINI BUTTON */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          position: 'fixed',
          right: '25px',
          bottom: '25px',
          zIndex: 999999,
          background: '#4285F4',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '15px 22px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 5px 20px rgba(0,0,0,0.3)'
        }}
      >
        ✨ Gemini
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            right: '25px',
            bottom: '85px',
            width: '360px',
            height: '500px',
            zIndex: 999998,
            background: 'white',
            borderRadius: '18px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          {/* HEADER */}
          <div
            style={{
              background: '#4285F4',
              color: 'white',
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '17px' }}>
                ✨ Gemini Campus Copilot
              </div>

              <div style={{ fontSize: '12px', marginTop: '4px' }}>
                Powered by Gemini
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>

          {/* MESSAGES */}
          <div
            style={{
              flex: 1,
              padding: '15px',
              overflowY: 'auto',
              background: '#f5f7fb'
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '10px',
                  padding: '10px 13px',
                  borderRadius: '12px',
                  maxWidth: '85%',
                  marginLeft: msg.role === 'user' ? 'auto' : '0',
                  background:
                    msg.role === 'user' ? '#4285F4' : 'white',
                  color:
                    msg.role === 'user' ? 'white' : '#222',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.08)'
                }}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  background: 'white',
                  padding: '10px 13px',
                  borderRadius: '12px',
                  width: 'fit-content'
                }}
              >
                ✨ Gemini is thinking...
              </div>
            )}
          </div>

          {/* INPUT */}
          <div
            style={{
              display: 'flex',
              padding: '10px',
              borderTop: '1px solid #ddd',
              background: 'white'
            }}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
              placeholder="Ask Gemini..."
              style={{
                flex: 1,
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '11px',
                outline: 'none'
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                marginLeft: '8px',
                width: '45px',
                border: 'none',
                borderRadius: '10px',
                background: '#4285F4',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}