import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ScrollIndicator from '../common/scroll-indicator';
import useParallax from '../../hooks/use-parallax';

/**
 * HeroSection 컴포넌트
 * - 1페이지 전체 화면 히어로 섹션
 * - PORTFOLIO 그라데이션 타이틀, 서브문구, CTA 버튼, 스크롤 인디케이터
 *
 * Props:
 * @param {function} onViewProfile - View Profile 버튼 클릭 핸들러 [Optional]
 *
 * Example usage:
 * <HeroSection onViewProfile={() => scrollToProfile()} />
 */
function HeroSection({ onViewProfile }) {
  const { x, y } = useParallax(0.006);

  return (
    <Box
      className='bg-animated'
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        px: { xs: 2, md: 4 },
      }}
    >
      {/* 블러 구름 레이어 */}
      <Box sx={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: { xs: 200, md: 400 },
        height: { xs: 200, md: 400 },
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '20%',
        right: '8%',
        width: { xs: 150, md: 300 },
        height: { xs: 150, md: 300 },
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      {/* 콘텐츠 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transform: `translate(${x}px, ${y}px)`,
          transition: 'transform 0.1s linear',
          zIndex: 1,
        }}
      >
        {/* PORTFOLIO 타이틀 */}
        <Typography
          variant='h1'
          component='h1'
          className='gradient-text slide-down-1'
          sx={{
            fontSize: { xs: '3rem', sm: '5rem', md: '7rem', lg: '8rem' },
            fontWeight: 900,
            letterSpacing: { xs: '0.08em', md: '0.15em' },
            lineHeight: 1,
            mb: { xs: 2, md: 3 },
            filter: 'drop-shadow(0 0 24px rgba(232,68,122,0.3))',
          }}
        >
          PORTFOLIO
        </Typography>

        {/* 서브 문구 */}
        <Typography
          className='slide-down-2'
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
            color: 'rgba(255,255,255,0.90)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            mb: { xs: 4, md: 6 },
            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          노력과 끈기로 성장하는 웹 퍼블리셔
        </Typography>

        {/* CTA 버튼 */}
        <Box className='slide-down-3'>
          <Button
            variant='contained'
            size='large'
            onClick={onViewProfile}
            sx={{
              borderRadius: '50px',
              px: { xs: 4, md: 6 },
              py: { xs: 1.4, md: 1.8 },
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: 700,
              letterSpacing: '0.06em',
              background: 'linear-gradient(90deg, #E8447A 0%, #8B5CF6 100%)',
              boxShadow: '0 8px 32px rgba(232,68,122,0.35)',
              border: 'none',
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 16px 48px rgba(232,68,122,0.5)',
                filter: 'brightness(1.1)',
              },
            }}
          >
            View Profile
          </Button>
        </Box>
      </Box>

      {/* 스크롤 인디케이터 */}
      <ScrollIndicator />
    </Box>
  );
}

export default HeroSection;
