import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(44, 36, 27, 0.4), rgba(44, 36, 27, 0.7)), url('/hero-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'var(--color-surface)'
      }}
    >
      <div className="container flex-col items-center animate-fade-in" style={{ textAlign: 'center', maxWidth: '800px', zIndex: 10 }}>
        <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', marginBottom: '1rem', display: 'block', fontWeight: 600 }}>
          Artisan Bakery & Café
        </span>
        <h1 style={{ fontSize: '4rem', color: 'var(--color-surface)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Baked with Love,<br />Served with Joy.
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>
          Experience the authentic taste of handcrafted pastries, artisan breads, and bespoke cakes baked fresh daily.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#menu" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            View Menu
          </a>
          <a href="#contact" className="btn-outline" style={{ borderColor: 'var(--color-surface)', color: 'var(--color-surface)', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Find Us <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
      </div>
    </section>
  );
}
