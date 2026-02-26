import { useRef } from 'react';
import Box from '@mui/material/Box';
import HeroSection from './components/sections/hero-section';
import ProfileSection from './components/sections/profile-section';
import ProjectsSection from './components/sections/projects-section';
import ContactSection from './components/sections/contact-section';

/** App 컴포넌트 - 포트폴리오 메인 레이아웃 */
function App() {
  const profileRef = useRef(null);

  const handleViewProfile = () => {
    profileRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <HeroSection onViewProfile={handleViewProfile} />
      <Box ref={profileRef}>
        <ProfileSection />
      </Box>
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}

export default App;
