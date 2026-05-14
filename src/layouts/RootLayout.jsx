import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FloatingThemeToggle from '../components/common/FloatingThemeToggle';
import { useThemeStore } from '../store/useThemeStore';

const RootLayout = () => {
  const { theme } = useThemeStore();

  // Ensure theme is set on initial load
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingThemeToggle />
    </div>
  );
};

export default RootLayout;
