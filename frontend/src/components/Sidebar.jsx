import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <button 
          className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      )}
      
      {/* Add overlay for mobile */}
      {isMobile && isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
        />
      )}
      
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="about-me">
          <h2>About me</h2>
          <p>I'm Safwaan, software engineer and open-source creator. This is my digital garden. 🌱</p>
        </div>

        <div className="stay-in-touch">
          <h2>Stay in touch</h2>
          <p>Get an update when I write something new!</p>
          <button className="email-signup">Email Signup</button>
          <div className="social-links">
            <a href="/rss">RSS feed</a>
          </div>
        </div>

        <div className="favorite-posts">
          <h2>Some of my favorite posts</h2>
          <ul>
            <li><a href="#">Project One</a></li>
            <li><a href="#">Project Two</a></li>
            <li><a href="#">Project Three</a></li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 