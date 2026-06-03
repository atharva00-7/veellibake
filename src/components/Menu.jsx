import { useState, useEffect } from 'react';

const MENU_DATA = [
  {
    id: 1,
    name: "Classic Butter Croissant",
    description: "Flaky, golden-brown pastry made with premium French butter.",
    price: 3.50,
    category: "Pastries",
    image: "/item1.png"
  },
  {
    id: 2,
    name: "Chocolate Eclair",
    description: "Choux pastry filled with rich vanilla custard and topped with chocolate glaze.",
    price: 4.25,
    category: "Pastries",
    image: "/item2.png"
  },
  {
    id: 3,
    name: "Sourdough Boule",
    description: "Artisan rustic loaf with a chewy crumb and perfectly crisp crust.",
    price: 6.00,
    category: "Breads",
    image: "/item3.png"
  },
  {
    id: 4,
    name: "Red Velvet Cake Slice",
    description: "Moist crimson cake topped with smooth cream cheese frosting.",
    price: 5.50,
    category: "Cakes",
    image: "/item4.png"
  },
  {
    id: 5,
    name: "Blueberry Muffin",
    description: "Soft and tender muffin bursting with fresh wild blueberries.",
    price: 3.00,
    category: "Pastries",
    image: "/item5.png"
  },
  {
    id: 6,
    name: "Baguette",
    description: "Traditional French baguette, crisp on the outside and soft inside.",
    price: 3.25,
    category: "Breads",
    image: "/item6.png"
  }
];

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Simulate network delay for smooth UI transition
    const timer = setTimeout(() => {
      setMenuItems(MENU_DATA);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = filter === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  return (
    <section id="menu" className="section container">
      <h2 className="section-title">Our Signatures</h2>
      
      {/* Category Filter */}
      <div className="flex justify-center gap-4" style={{ marginBottom: '3rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'btn-primary' : 'btn-outline'}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center" style={{ padding: '4rem 0' }}>
          <div style={{ width: '40px', height: '40px', border: '4px solid var(--color-primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        </div>
      ) : (
        <div className="grid-3">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`menu-card animate-fade-in delay-${(index % 3 + 1) * 100}`}
            >
              <div className="menu-card-img-wrapper">
                <img src={item.image} alt={item.name} className="menu-card-img" loading="lazy" />
              </div>
              <div className="menu-card-content">
                <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{item.name}</h3>
                  <span className="text-primary" style={{ fontWeight: 600, fontSize: '1.1rem' }}>
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {item.description}
                </p>
                <button 
                  className="btn-outline" 
                  style={{ width: '100%', padding: '0.6rem' }}
                  onClick={() => alert(`Added ${item.name} to order!`)}
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
