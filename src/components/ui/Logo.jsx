import { Link } from 'react-router-dom';

export function Logo({ variant = 'default', href = '/' }) {
  const isFooter = variant === 'footer';

  return (
    <Link to={href} className="logo" style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/logo.png"
        alt="Eagle Star Enterprises Logo"
        className={isFooter ? 'logo-invert' : ''}
        style={{
          height: isFooter ? '56px' : '48px',
          width: 'auto',
          display: 'block',
        }}
      />
    </Link>
  );
}
