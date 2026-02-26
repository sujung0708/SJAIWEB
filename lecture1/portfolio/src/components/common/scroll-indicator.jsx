import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * ScrollIndicator 컴포넌트
 * - 구슬 모티브 기반 스크롤 유도 인디케이터
 *
 * Props: 없음
 *
 * Example usage:
 * <ScrollIndicator />
 */
function ScrollIndicator() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        position: 'absolute',
        bottom: { xs: 24, md: 40 },
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Typography
        sx={{
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.6)',
          textTransform: 'uppercase',
        }}
      >
        Scroll
      </Typography>
      <Box
        sx={{
          width: 20,
          height: 32,
          border: '2px solid rgba(255,255,255,0.5)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          pt: '4px',
        }}
      >
        <Box
          className='scroll-bounce'
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B5CF6, #E8447A)',
            boxShadow: '0 0 8px rgba(232,68,122,0.6)',
          }}
        />
      </Box>
    </Box>
  );
}

export default ScrollIndicator;
