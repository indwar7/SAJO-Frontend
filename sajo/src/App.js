import React, { useState } from 'react';

// Login Component
const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.email && formData.password) {
      onLogin();
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a, #7c3aed, #3730a3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '40px',
        borderRadius: '20px',
        width: '400px',
        maxWidth: '90%'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', margin: '0 0 10px 0' }}>SAJO</h1>
          <p style={{ color: '#bfdbfe', fontSize: '1.1rem' }}>Sikkim Monasteries Portal</p>
          <p style={{ color: '#93c5fd', fontSize: '0.9rem' }}>Digitize • Showcase • Preserve</p>
        </div>

        <div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '16px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'white', display: 'block', marginBottom: '8px' }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '16px'
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = ({ onLogout, currentPage, setCurrentPage }) => (
  <nav style={{
    backgroundColor: '#1e3a8a',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2 style={{ color: 'white', margin: 0, marginRight: '2rem' }}>SAJO</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => setCurrentPage('dashboard')}
          style={{
            backgroundColor: currentPage === 'dashboard' ? '#3b82f6' : 'transparent',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage('monasteries')}
          style={{
            backgroundColor: currentPage === 'monasteries' ? '#3b82f6' : 'transparent',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Monasteries
        </button>
        <button
          onClick={() => setCurrentPage('about')}
          style={{
            backgroundColor: currentPage === 'about' ? '#3b82f6' : 'transparent',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          About
        </button>
      </div>
    </div>
    <button
      onClick={onLogout}
      style={{
        backgroundColor: '#ef4444',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Logout
    </button>
  </nav>
);

// Monastery Card Component
const MonasteryCard = ({ monastery }) => (
  <div style={{
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    margin: '1rem',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  }}>
    <img
      src={monastery.image}
      alt={monastery.name}
      style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover'
      }}
    />
    <div style={{ padding: '1rem' }}>
      <h3 style={{ margin: '0 0 0.5rem 0', color: '#1e3a8a' }}>{monastery.name}</h3>
      <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontWeight: 'bold' }}>{monastery.location}</p>
      <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#888' }}>{monastery.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>Est. {monastery.established}</span>
        <button style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          View Details
        </button>
      </div>
    </div>
  </div>
);

// Dashboard Component
const Dashboard = () => (
  <div style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: 'calc(100vh - 70px)' }}>
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Welcome to SAJO Dashboard</h1>
      <p style={{ color: '#666' }}>Sikkim's Ancient Jewels Online - Cultural Heritage Portal</p>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      maxWidth: '1200px',
      margin: '0 auto 2rem auto'
    }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#3b82f6', fontSize: '2rem', margin: '0' }}>15+</h3>
        <p style={{ color: '#666', margin: '0.5rem 0' }}>Monasteries Listed</p>
      </div>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#3b82f6', fontSize: '2rem', margin: '0' }}>1200+</h3>
        <p style={{ color: '#666', margin: '0.5rem 0' }}>Virtual Visitors</p>
      </div>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#3b82f6', fontSize: '2rem', margin: '0' }}>4</h3>
        <p style={{ color: '#666', margin: '0.5rem 0' }}>Districts Covered</p>
      </div>
    </div>

    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Our Mission</h2>
      <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
        SAJO digitally preserves and showcases Sikkim's monastic heritage, making these sacred places 
        accessible to global audiences while supporting cultural preservation and responsible tourism.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
          Cultural Preservation
        </span>
        <span style={{ backgroundColor: '#f0f9ff', color: '#0369a1', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
          Digital Tourism
        </span>
        <span style={{ backgroundColor: '#ecfdf5', color: '#059669', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
          Heritage Documentation
        </span>
      </div>
    </div>
  </div>
);

// Monasteries Component
const MonasteriesPage = () => {
  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      location: "East Sikkim",
      description: "The largest monastery in Sikkim, known as the Dharma Chakra Centre",
      established: "1966",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      location: "West Sikkim",
      description: "One of the oldest and premier monasteries of Sikkim",
      established: "1705",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      location: "West Sikkim",
      description: "Sacred monastery situated on a hilltop between two rivers",
      established: "1641",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Enchey Monastery",
      location: "East Sikkim",
      description: "Beautiful monastery overlooking Gangtok city",
      established: "1840",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Dubdi Monastery",
      location: "West Sikkim",
      description: "The first monastery built in Sikkim",
      established: "1701",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Ralong Monastery",
      location: "South Sikkim",
      description: "Important Kagyu monastery with rich historical significance",
      established: "1768",
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: 'calc(100vh - 70px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Monasteries of Sikkim</h1>
        <p style={{ color: '#666' }}>Explore the sacred monasteries that preserve Buddhist heritage</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {monasteries.map(monastery => (
          <MonasteryCard key={monastery.id} monastery={monastery} />
        ))}
      </div>
    </div>
  );
};

// About Component
const AboutPage = () => (
  <div style={{ padding: '2rem', backgroundColor: '#f3f4f6', minHeight: 'calc(100vh - 70px)' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e3a8a', textAlign: 'center', marginBottom: '2rem' }}>About SAJO</h1>
      
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Our Vision</h2>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          SAJO (Sikkim's Ancient Jewels Online) envisions a digital future where Sikkim's rich 
          monastic heritage is preserved, celebrated, and made accessible to people worldwide. 
          Through technology, we bridge the gap between ancient wisdom and modern accessibility.
        </p>
      </div>

      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Key Features</h2>
        <ul style={{ color: '#666', lineHeight: '1.8' }}>
          <li>🏔️ Comprehensive monastery database with detailed information</li>
          <li>📸 High-resolution photo galleries and virtual tours</li>
          <li>🗺️ Interactive maps for easy navigation and planning</li>
          <li>📚 Historical documentation and cultural significance</li>
          <li>🎯 Tourist-friendly guides and travel recommendations</li>
          <li>🔄 Regular updates from monastery communities</li>
        </ul>
      </div>

      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Impact & Goals</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
          Our platform serves multiple stakeholders: tourists seeking authentic experiences, 
          researchers studying Buddhist culture, and local communities preserving their heritage. 
          By digitizing this information, we ensure these treasures remain accessible for future generations.
        </p>
        <div style={{ backgroundColor: '#f0f9ff', padding: '1rem', borderRadius: '4px', borderLeft: '4px solid #3b82f6' }}>
          <p style={{ color: '#1e40af', margin: 0, fontStyle: 'italic' }}>
            "Preserving the past, embracing the future - one monastery at a time."
          </p>
        </div>
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

export default App;