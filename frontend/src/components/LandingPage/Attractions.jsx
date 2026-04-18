import React from 'react';
import { FaWater, FaMountain, FaFire, FaCloudSun, FaTree, FaSnowflake } from 'react-icons/fa';

const attractions = [
  {
    icon: <FaWater size={40} />,
    title: "Blue Lagoon",
    description: "Geothermal spa with milky blue waters rich in minerals",
    image: "https://images.unsplash.com/photo-1531366936330-6c9129d9b7c7"
  },
  {
    icon: <FaMountain size={40} />,
    title: "Golden Circle",
    description: "Þingvellir National Park, Gullfoss waterfall, and Geysir",
    image: "https://images.unsplash.com/photo-1485643374949-3b86dd2b79da"
  },
  {
    icon: <FaFire size={40} />,
    title: "Volcanic Craters",
    description: "Explore dormant volcanoes and lunar-like landscapes",
    image: "https://images.unsplash.com/photo-1575568552034-1a3b2b4fd9b3"
  },
  {
    icon: <FaSnowflake size={40} />,
    title: "Vatnajökull Glacier",
    description: "Largest glacier in Europe with ice caves",
    image: "https://images.unsplash.com/photo-1533901651287-3d0591ad08bf"
  },
  {
    icon: <FaCloudSun size={40} />,
    title: "Northern Lights",
    description: "Witness the magical Aurora Borealis",
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938"
  },
  {
    icon: <FaTree size={40} />,
    title: "Reynisfjara Beach",
    description: "Black sand beach with basalt columns",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  }
];

const Attractions = () => {
  return (
    <section id="attractions" style={{
      padding: '5rem 5%',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="fade-up" style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Top Attractions in Iceland
        </h2>
        <p className="fade-up" style={{ color: '#666', fontSize: '1.1rem' }}>
          Discover the most breathtaking places in the land of ice and fire
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {attractions.map((attraction, index) => (
          <div key={index} className="fade-up" style={{
            background: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              height: '200px',
              backgroundImage: `url(${attraction.image}?w=400&h=200&fit=crop)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '10px',
                borderRadius: '50%',
                color: 'white'
              }}>
                {attraction.icon}
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>{attraction.title}</h3>
              <p style={{ color: '#666' }}>{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;