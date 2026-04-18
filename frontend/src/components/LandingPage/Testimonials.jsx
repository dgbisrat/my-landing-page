import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "USA",
    text: "An unforgettable experience! The Northern Lights tour was magical. Highly recommend!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    country: "China",
    text: "The glacier hiking was incredible. Our guide was knowledgeable and safety-conscious.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Emma Wilson",
    country: "UK",
    text: "Best trip of my life! Iceland's landscapes are out of this world.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section style={{
      padding: '5rem 5%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="fade-up" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          What Our Travelers Say
        </h2>
        <p className="fade-up" style={{ fontSize: '1.1rem', opacity: 0.9 }}>
          Real experiences from real adventurers
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="fade-up" style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '15px',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
            <FaQuoteLeft size={30} style={{ marginBottom: '1rem', opacity: 0.5 }} />
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>"{testimonial.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={testimonial.image} alt={testimonial.name} style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>{testimonial.name}</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{testimonial.country}</p>
                <div style={{ display: 'flex', gap: '2px', marginTop: '5px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={12} color="#ffc107" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;