import { Link } from 'react-router-dom';
import { Croissant, Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav">
      <div className="container flex items-center justify-between" style={{ padding: '1rem 1.5rem' }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Croissant size={32} className="text-primary" />
          <span style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
            Vellibake
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="flex items-center gap-8" style={{ display: 'none' }} id="desktop-nav">
          <Link to="/" className="text-secondary" style={{ fontWeight: 500 }}>Home</Link>
          <a href="#menu" className="text-secondary" style={{ fontWeight: 500 }}>Menu</a>
          <a href="#about" className="text-secondary" style={{ fontWeight: 500 }}>Our Story</a>
          <a href="#contact" className="btn-primary">Order Now</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="text-secondary"
          style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon size={28} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{ backgroundColor: 'var(--color-surface)', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(192, 127, 0, 0.1)' }}>
          <div className="flex-col gap-4">
            <Link to="/" className="text-secondary" onClick={() => setIsOpen(false)} style={{ fontWeight: 500, padding: '0.5rem 0' }}>Home</Link>
            <a href="#menu" className="text-secondary" onClick={() => setIsOpen(false)} style={{ fontWeight: 500, padding: '0.5rem 0' }}>Menu</a>
            <a href="#about" className="text-secondary" onClick={() => setIsOpen(false)} style={{ fontWeight: 500, padding: '0.5rem 0' }}>Our Story</a>
            <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)} style={{ textAlign: 'center', marginTop: '0.5rem' }}>Order Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
