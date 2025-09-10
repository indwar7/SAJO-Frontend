
import React, { useState } from 'react';

// Login Component with Red-Golden Theme
const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.email && formData.password) {
      setIsLoading(true);
      setTimeout(() => {
        onLogin();
        setIsLoading(false);
      }, 1500);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(139, 0, 0, 0.8), rgba(180, 83, 9, 0.7)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop') center/cover`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative'
    }}>
      {/* Decorative Prayer Flags */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '0',
        right: '0',
        height: '30px',
        background: 'linear-gradient(90deg, #dc2626, #f59e0b, #10b981, #3b82f6, #8b5cf6)',
        opacity: 0.8
      }} />

      <div style={{
        backgroundColor: 'rgba(139, 0, 0, 0.95)',
        padding: '50px',
        borderRadius: '25px',
        width: '450px',
        maxWidth: '90%',
        border: '3px solid #fbbf24',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 20px',
            background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>🏔️</div>
          <h1 style={{ 
            color: '#fbbf24', 
            fontSize: '3.5rem', 
            margin: '0 0 10px 0',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            fontFamily: 'serif'
          }}>SAJO</h1>
          <p style={{ color: '#fed7aa', fontSize: '1.3rem', fontWeight: '500' }}>
            Sikkim's Ancient Jewels Online
          </p>
          <p style={{ color: '#fde68a', fontSize: '1rem', marginTop: '10px' }}>
            🙏 Digitize • Showcase • Preserve 🙏
          </p>
        </div>

        <div>
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              color: '#fbbf24', 
              display: 'block', 
              marginBottom: '10px',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #fbbf24',
                borderRadius: '12px',
                backgroundColor: 'rgba(254, 243, 199, 0.9)',
                color: '#7c2d12',
                fontSize: '16px',
                fontWeight: '500',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.backgroundColor = 'rgba(254, 243, 199, 1)'}
              onBlur={(e) => e.target.style.backgroundColor = 'rgba(254, 243, 199, 0.9)'}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              color: '#fbbf24', 
              display: 'block', 
              marginBottom: '10px',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #fbbf24',
                borderRadius: '12px',
                backgroundColor: 'rgba(254, 243, 199, 0.9)',
                color: '#7c2d12',
                fontSize: '16px',
                fontWeight: '500',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.backgroundColor = 'rgba(254, 243, 199, 1)'}
              onBlur={(e) => e.target.style.backgroundColor = 'rgba(254, 243, 199, 0.9)'}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <label style={{ display: 'flex', alignItems: 'center', color: '#fed7aa' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} />
              Remember me
            </label>
            <button style={{ 
              color: '#fbbf24', 
              background: 'none', 
              border: 'none', 
              textDecoration: 'underline',
              cursor: 'pointer'
            }}>
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
              color: '#7c2d12',
              border: 'none',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px',
              boxShadow: '0 8px 15px rgba(251, 191, 36, 0.3)',
              transition: 'all 0.3s',
              opacity: isLoading ? 0.8 : 1
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 20px rgba(251, 191, 36, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 15px rgba(251, 191, 36, 0.3)';
              }
            }}
          >
            {isLoading ? '🙏 Entering Sacred Portal...' : '🚪 Enter Portal'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '25px' }}>
            <p style={{ color: '#fed7aa', fontSize: '0.9rem' }}>
              New to our sacred journey?{' '}
              <button style={{ 
                color: '#fbbf24', 
                background: 'none', 
                border: 'none', 
                textDecoration: 'underline',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                Join the Community
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fbbf24',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: '5px 0', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          🏔️ Gateway to Sikkim's Sacred Heritage 🏔️
        </p>
      </div>
    </div>
  );
};

// Enhanced Navbar with Red-Golden Theme
const Navbar = ({ onLogout, currentPage, setCurrentPage }) => (
  <nav style={{
    background: 'linear-gradient(90deg, #7c2d12, #dc2626, #b91c1c)',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    borderBottom: '3px solid #fbbf24'
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginRight: '3rem'
      }}>
        <span style={{ fontSize: '2rem', marginRight: '10px' }}>🏔️</span>
        <h2 style={{ 
          color: '#fbbf24', 
          margin: 0, 
          fontSize: '1.8rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          fontFamily: 'serif'
        }}>SAJO</h2>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {[
          { key: 'dashboard', label: '🏠 Dashboard', icon: '🏠' },
          { key: 'monasteries', label: '🏯 Monasteries', icon: '🏯' },
          { key: 'experiences', label: '🎭 Experiences', icon: '🎭' },
          { key: 'festivals', label: '🎊 Festivals', icon: '🎊' },
          { key: 'about', label: '📖 About', icon: '📖' }
        ].map(item => (
          <button
            key={item.key}
            onClick={() => setCurrentPage(item.key)}
            style={{
              backgroundColor: currentPage === item.key ? '#fbbf24' : 'transparent',
              color: currentPage === item.key ? '#7c2d12' : '#fbbf24',
              border: currentPage === item.key ? 'none' : '2px solid #fbbf24',
              padding: '10px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== item.key) {
                e.target.style.backgroundColor = 'rgba(251, 191, 36, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== item.key) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            {item.icon} {item.label.split(' ')[1]}
          </button>
        ))}
      </div>
    </div>
    <button
      onClick={onLogout}
      style={{
        background: 'linear-gradient(45deg, #dc2626, #b91c1c)',
        color: '#fbbf24',
        border: '2px solid #fbbf24',
        padding: '10px 20px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.3s'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'linear-gradient(45deg, #b91c1c, #991b1b)';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'linear-gradient(45deg, #dc2626, #b91c1c)';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      🚪 Logout
    </button>
  </nav>
);

// Enhanced Monastery Card
const MonasteryCard = ({ monastery }) => (
  <div style={{
    background: 'linear-gradient(145deg, #fff, #fef3c7)',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    overflow: 'hidden',
    margin: '1rem',
    transition: 'all 0.3s',
    cursor: 'pointer',
    border: '2px solid #fbbf24',
    position: 'relative'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
    e.currentTarget.style.boxShadow = '0 15px 35px rgba(220, 38, 38, 0.3)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
  }}
>
  {/* Status Badge */}
  <div style={{
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'linear-gradient(45deg, #dc2626, #b91c1c)',
    color: '#fbbf24',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    zIndex: 1
  }}>
    ✅ ACTIVE
  </div>

  <div style={{ position: 'relative' }}>
    <img
      src={monastery.image}
      alt={monastery.name}
      style={{
        width: '100%',
        height: '220px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(transparent, rgba(139, 0, 0, 0.8))',
      padding: '20px 0 10px',
      color: '#fbbf24'
    }}>
      <div style={{ padding: '0 1rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
          {monastery.name}
        </h3>
      </div>
    </div>
  </div>
  
  <div style={{ padding: '1.5rem' }}>
    <div style={{ marginBottom: '15px' }}>
      <p style={{ 
        margin: '0 0 8px 0', 
        color: '#dc2626', 
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}>
        📍 {monastery.location}
      </p>
      <p style={{ margin: '0 0 12px 0', fontSize: '0.95rem', color: '#7c2d12', lineHeight: '1.5' }}>
        {monastery.description}
      </p>
      
      {/* Additional Details */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '15px',
        fontSize: '0.85rem',
        color: '#b45309'
      }}>
        <span>🏛️ Est. {monastery.established}</span>
        <span>⭐ {monastery.rating || '4.8'}/5</span>
      </div>

      {/* Features */}
      <div style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {(monastery.features || ['Virtual Tour', 'Photo Gallery', 'History']).map(feature => (
            <span key={feature} style={{
              background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
              color: '#7c2d12',
              padding: '3px 8px',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    <div style={{ display: 'flex', gap: '8px' }}>
      <button style={{
        flex: 1,
        background: 'linear-gradient(45deg, #dc2626, #b91c1c)',
        color: '#fbbf24',
        border: 'none',
        padding: '12px 8px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '0.9rem'
      }}>
        🔍 Explore
      </button>
      <button style={{
        background: 'transparent',
        color: '#dc2626',
        border: '2px solid #dc2626',
        padding: '12px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        🗺️
      </button>
    </div>
  </div>
</div>
);

// Enhanced Dashboard Component
const Dashboard = () => (
  <div style={{ 
    minHeight: 'calc(100vh - 80px)',
    background: `linear-gradient(rgba(139, 0, 0, 0.05), rgba(180, 83, 9, 0.05)), url('https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&h=1080&fit=crop') center/cover fixed`,
    padding: '2rem'
  }}>
    {/* Hero Section */}
    <div style={{
      textAlign: 'center',
      marginBottom: '3rem',
      background: 'rgba(139, 0, 0, 0.9)',
      padding: '3rem 2rem',
      borderRadius: '20px',
      border: '3px solid #fbbf24',
      maxWidth: '1200px',
      margin: '0 auto 3rem auto'
    }}>
      <h1 style={{ 
        color: '#fbbf24', 
        marginBottom: '1rem',
        fontSize: '3rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        fontFamily: 'serif'
      }}>
        🏔️ Welcome to SAJO Portal 🏔️
      </h1>
      <p style={{ color: '#fed7aa', fontSize: '1.3rem', marginBottom: '2rem' }}>
        Discover the Sacred Monasteries and Rich Buddhist Heritage of Sikkim
      </p>
      
      {/* Quick Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {[
          { icon: '🏯', number: '25+', label: 'Sacred Monasteries' },
          { icon: '👥', number: '5,000+', label: 'Virtual Pilgrims' },
          { icon: '🗺️', number: '4', label: 'Districts Covered' },
          { icon: '📸', number: '500+', label: 'Photo Gallery' }
        ].map(stat => (
          <div key={stat.label} style={{
            background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
            padding: '1.5rem',
            borderRadius: '15px',
            color: '#7c2d12',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
            <h3 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>
              {stat.number}
            </h3>
            <p style={{ margin: 0, fontWeight: '600' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Featured Monasteries */}
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      padding: '2rem',
      border: '3px solid #fbbf24',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        color: '#dc2626', 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontSize: '2.5rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        🌟 Featured Sacred Sites 🌟
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {[
          {
            name: "Rumtek Monastery",
            location: "East Sikkim",
            description: "The Dharma Chakra Centre - largest monastery in Sikkim with stunning golden roof",
            established: "1966",
            rating: "4.9",
            features: ["Virtual Tour", "Golden Roof", "Library"],
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop"
          },
          {
            name: "Pemayangtse Monastery",
            location: "West Sikkim", 
            description: "Perfect Sublime Lotus - one of the oldest and most important monasteries",
            established: "1705",
            rating: "4.8",
            features: ["Ancient Art", "Sculptures", "Mountain Views"],
            image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop"
          },
          {
            name: "Tashiding Monastery",
            location: "West Sikkim",
            description: "The Devoted Central Glory - sacred hilltop monastery between holy rivers",
            established: "1641",
            rating: "4.7",
            features: ["Holy Water", "Chortens", "Festivals"],
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
          }
        ].map(monastery => (
          <MonasteryCard key={monastery.name} monastery={monastery} />
        ))}
      </div>
    </div>
  </div>
);

// New Enhanced Features Components
const ExperiencesPage = () => (
  <div style={{ 
    padding: '2rem', 
    background: `linear-gradient(rgba(139, 0, 0, 0.05), rgba(180, 83, 9, 0.05)), url('https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=1920&h=1080&fit=crop') center/cover fixed`,
    minHeight: 'calc(100vh - 80px)' 
  }}>
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      padding: '2rem',
      border: '3px solid #fbbf24',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#dc2626', textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
        🎭 Sacred Experiences 🎭
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {[
          { icon: '🧘‍♂️', title: 'Meditation Retreats', desc: 'Join guided meditation sessions in peaceful monastery settings' },
          { icon: '🎵', title: 'Chanting Sessions', desc: 'Experience the spiritual power of traditional Buddhist chants' },
          { icon: '🎨', title: 'Art Workshops', desc: 'Learn traditional Thangka painting and mandala creation' },
          { icon: '🍵', title: 'Tea Ceremonies', desc: 'Participate in sacred butter tea ceremonies with monks' },
          { icon: '📿', title: 'Prayer Wheel Tours', desc: 'Spin prayer wheels and learn about their spiritual significance' },
          { icon: '🌸', title: 'Garden Walks', desc: 'Peaceful walks through monastery gardens and sacred groves' }
        ].map(exp => (
          <div key={exp.title} style={{
            background: 'linear-gradient(145deg, #fef3c7, #fff)',
            padding: '2rem',
            borderRadius: '15px',
            border: '2px solid #fbbf24',
            textAlign: 'center',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{exp.icon}</div>
            <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>{exp.title}</h3>
            <p style={{ color: '#7c2d12' }}>{exp.desc}</p>
            <button style={{
              background: 'linear-gradient(45deg, #dc2626, #b91c1c)',
              color: '#fbbf24',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '20px',
              marginTop: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FestivalsPage = () => (
  <div style={{ 
    padding: '2rem', 
    background: `linear-gradient(rgba(139, 0, 0, 0.05), rgba(180, 83, 9, 0.05)), url('https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=1920&h=1080&fit=crop') center/cover fixed`,
    minHeight: 'calc(100vh - 80px)' 
  }}>
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      padding: '2rem',
      border: '3px solid #fbbf24',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#dc2626', textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
        🎊 Sacred Festivals & Events 🎊
      </h1>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {[
          { 
            name: 'Losar Festival', 
            date: 'February 2025', 
            location: 'All Monasteries',
            desc: 'Tibetan New Year celebration with mask dances and prayers',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop'
          },
          { 
            name: 'Bumchu Festival', 
            date: 'March 2025', 
            location: 'Tashiding Monastery',
            desc: 'Sacred water vessel ceremony predicting the coming year',
            image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=200&fit=crop'
          },
          { 
            name: 'Saga Dawa', 
            date: 'May 2025', 
            location: 'Multiple Sites',
            desc: 'Buddha\'s birth, enlightenment and death commemoration',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=200&fit=crop'
          }
        ].map(festival => (
          <div
            key={festival.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '2rem',
              background: 'linear-gradient(145deg, #fef3c7, #fff)',
              padding: '2rem',
              borderRadius: '15px',
              border: '2px solid #fbbf24',
              alignItems: 'center'
            }}
          >
            <img 
              src={festival.image} 
              alt={festival.name}
              style={{
                width: '100%',
                height: '200px',c
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
            <div>
              <h2 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>{festival.name}</h2>
              <p style={{ color: '#b45309', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                📅 {festival.date} • 📍 {festival.location}
              </p>
              <p style={{ color: '#7c2d12', marginBottom: '1rem' }}>{festival.desc}</p>
              <button style={{
                background: 'linear-gradient(45deg, #dc2626, #b91c1c)',
                color: '#fbbf24',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Enhanced Monasteries Page
const MonasteriesPage = () => {
  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      location: "East Sikkim",
      description: "The largest monastery in Sikkim, known as the Dharma Chakra Centre with golden roof",
      established: "1966",
      rating: "4.9",
      features: ["Virtual Tour", "Golden Roof", "Library"],
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      location: "West Sikkim",
      description: "Perfect Sublime Lotus - one of the oldest and premier monasteries of Sikkim",
      established: "1705",
      rating: "4.8",
      features: ["Ancient Art", "Sculptures", "Views"],
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      location: "West Sikkim",
      description: "Sacred monastery situated on hilltop between two holy rivers",
      established: "1641",
      rating: "4.7",
      features: ["Holy Water", "Chortens", "Festivals"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Enchey Monastery",
      location: "East Sikkim",
      description: "Beautiful monastery overlooking Gangtok city with panoramic views",
      established: "1840",
      rating: "4.6",
      features: ["City Views", "Photography", "Peaceful"],
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Dubdi Monastery",
      location: "West Sikkim",
      description: "The first monastery built in Sikkim - historically significant",
      established: "1701",
      rating: "4.5",
      features: ["Historical", "First Built", "Heritage"],
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Ralong Monastery",
      location: "South Sikkim",
      description: "Important Kagyu monastery with rich historical significance",
      established: "1768",
      rating: "4.4",
      features: ["Kagyu Sect", "History", "Architecture"],
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div style={{
      padding: '2rem',
      background: `linear-gradient(rgba(139, 0, 0, 0.05), rgba(180, 83, 9, 0.05)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop') center/cover fixed`,
      minHeight: 'calc(100vh - 80px)'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '2rem',
        border: '3px solid #fbbf24',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            color: '#dc2626',
            marginBottom: '0.5rem',
            fontSize: '2.5rem'
          }}>
            🏯 Sacred Monasteries of Sikkim 🏯
          </h1>
          <p style={{ color: '#b45309', fontSize: '1.2rem' }}>
            Discover the spiritual centers that preserve Buddhist heritage and wisdom
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem'
        }}>
          {monasteries.map(monastery => (
            <MonasteryCard key={monastery.id} monastery={monastery} />
          ))}
        </div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => (
  <div style={{ 
    padding: '2rem', 
    background: `linear-gradient(rgba(139, 0, 0, 0.05), rgba(180, 83, 9, 0.05)), url('https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&h=1080&fit=crop') center/cover fixed`,
    minHeight: 'calc(100vh - 80px)' 
  }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{
        background: 'rgba(139, 0, 0, 0.95)',
        borderRadius: '20px',
        padding: '3rem',
        border: '3px solid #fbbf24',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ color: '#fbbf24', marginBottom: '1rem', fontSize: '3rem' }}>
          📖 About SAJO 📖
        </h1>
        <p style={{ color: '#fed7aa', fontSize: '1.2rem' }}>
          Sikkim's Ancient Jewels Online - Preserving Sacred Heritage Through Technology
        </p>
      </div>
      
      {[
        {
          title: "Our Sacred Mission 🙏",
          content: "SAJO digitally preserves and showcases Sikkim's monastic heritage, making these sacred places accessible to global audiences while supporting cultural preservation and responsible spiritual tourism."
        },
        {
          title: "Key Features ✨",
          content: "🏔️ Comprehensive monastery database\n📸 High-resolution galleries & virtual tours\n🗺️ Interactive spiritual journey maps\n📚 Historical documentation & significance\n🎯 Pilgrim-friendly guides & recommendations\n🔄 Live updates from monastery communities"
        },
        {
          title: "Our Impact & Vision 🌟",
          content: "We serve spiritual seekers, cultural researchers, and local communities. By digitizing this sacred information, we ensure these spiritual treasures remain accessible for future generations while respecting their sacred nature."
        }
      ].map(section => (
        <div key={section.title} style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '2rem',
          borderRadius: '15px',
          marginBottom: '2rem',
          border: '2px solid #fbbf24'
        }}>
          <h2 style={{ color: '#dc2626', marginBottom: '1rem' }}>{section.title}</h2>
          <div style={{ color: '#7c2d12', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
            {section.content}
          </div>
        </div>
      ))}
      
      <div style={{
        background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
        padding: '2rem',
        borderRadius: '15px',
        textAlign: 'center',
        color: '#7c2d12'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', fontWeight: 'bold' }}>
          "Preserving the sacred past, embracing the digital future - one monastery at a time." 🏔️
        </p>
      </div>
    </div>
  </div>
);

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'monasteries':
        return <MonasteriesPage />;
      case 'experiences':
        return <ExperiencesPage />;
      case 'festivals':
        return <FestivalsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Navbar 
        onLogout={handleLogout} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      {renderCurrentPage()}
    </div>
  );
};

export default App