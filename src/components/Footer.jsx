import { Mail, MessageCircle, Globe, MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-surface)', padding: '5rem 0 2rem' }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom: '4rem', gap: '3rem' }}>
          {/* Brand */}
          <div>
            <h2 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Vellibake</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
              Crafting moments of joy through authentic, artisanal baking since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'var(--color-accent)', transition: 'color 0.3s ease' }}><Globe size={24} /></a>
              <a href="#" style={{ color: 'var(--color-accent)', transition: 'color 0.3s ease' }}><MessageCircle size={24} /></a>
              <a href="#" style={{ color: 'var(--color-accent)', transition: 'color 0.3s ease' }}><Mail size={24} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: 'var(--color-surface)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Us</h3>
            <ul className="flex-col gap-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                999 Nonexistent Blvd, Fictional City, XX 00000
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                +00 000-000-0000
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                Mon-Sat: 7am - 6pm<br/>Sun: 8am - 4pm
              </li>
            </ul>
          </div>

          {/* Newsletter (Mock) */}
          <div>
            <h3 style={{ color: 'var(--color-surface)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Newsletter</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Subscribe for fresh updates and seasonal specials.</p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
              <input 
                type="email" 
                placeholder="Email Address" 
                style={{ 
                  padding: '0.75rem 1rem', 
                  borderRadius: 'var(--radius-md)', 
                  border: 'none', 
                  outline: 'none',
                  flexGrow: 1
                }} 
                required 
              />
              <button type="submit" className="btn-primary" style={{ borderRadius: 'var(--radius-md)' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Vellibake. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
