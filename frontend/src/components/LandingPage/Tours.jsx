import React from 'react';
import { FaClock, FaUsers, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const tours = [
  {
    name: "Golden Circle Classic",
    duration: "8 hours",
    price: "$120",
    rating: 4.8,
    groupSize: "16",
    location: "Reykjavik",
    image: "https://images.unsplash.com/photo-1485643374949-3b86dd2b79da"
  },
  {
    name: "Northern Lights Hunt",
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    groupSize: "12",
    location: "Reykjavik",
    image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938"
  },
  {
    name: "Glacier Hiking",
    duration: "10 hours",
    price: "$180",
    rating: 4.7,
    groupSize: "8",
    location: "Vatnajökull",
    image: "https://images.unsplash.com/photo-1533901651287-3d0591ad08bf"
  },
  {
    name: "Blue Lagoon & Reykjavik",
    duration: "6 hours",
    price: "$150",
    rating: 4.9,
    groupSize: "20",
    location: "Grindavik",
    image: "https://images.unsplash.com/photo-1531366936330-6c9129d9b7c7"
  }
];

const Tours = () => {
  return (
    <section id="tours" style={{
      padding: '5rem 5%',
      background: 'white'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="fade-up" style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Popular Tours & Packages
        </h2>
        <p className="fade-up" style={{ color: '#666', fontSize: '1.1rem' }}>
          Choose from our hand-crafted Iceland adventures
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {tours.map((tour, index) => (
          <div key={index} className="fade-up" style={{
            background: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}>
            <div style={{
              height: '250px',
              backgroundImage: `url(${tour.image}?w=400&h=250&fit=crop)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.7)',
                padding: '5px 10px',
                borderRadius: '5px',
                color: 'white',
                fontWeight: 'bold'
              }}>
                {tour.price}
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>{tour.name}</h3>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                <span><FaClock /> {tour.duration}</span>
                <span><FaUsers /> Max {tour.groupSize}</span>
                <span><FaMapMarkerAlt /> {tour.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1rem' }}>
                <FaStar color="#ffc107" />
                <span style={{ fontWeight: 'bold' }}>{tour.rating}</span>
                <span style={{ color: '#666' }}>(150+ reviews)</span>
              </div>
              <button style={{
                width: '100%',
                padding: '0.8rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.9'}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;