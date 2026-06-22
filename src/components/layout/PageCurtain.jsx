import { useEffect, useState } from 'react';

export default function PageCurtain() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-curtain" id="page-curtain">
      <div className="curtain-panel" />
      <div className="curtain-logo">
        <img
          src="/logo.png"
          alt="Eagle Star Enterprises Logo"
          className="logo-invert"
          style={{
            height: '90px',
            width: 'auto',
            marginBottom: '12px',
          }}
        />
        <div className="curtain-bar" />
      </div>
    </div>
  );
}
