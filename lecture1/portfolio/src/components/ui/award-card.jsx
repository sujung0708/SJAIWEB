import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * AwardCard 컴포넌트
 * - 수상 내역을 Coral Accent로 강조하여 표시하는 카드
 *
 * Props:
 * @param {string} title - 수상명 [Required]
 * @param {string} date - 수상 연도/날짜 [Required]
 * @param {string} org - 주관 기관 [Optional]
 *
 * Example usage:
 * <AwardCard title="우수상" date="2024" org="한국디자인협회" />
 */
function AwardCard({ title, date, org }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        p: { xs: 2, md: 2.5 },
        borderRadius: '16px',
        bgcolor: 'rgba(255,255,255,0.85)',
        border: '1px solid #E2D9F3',
        boxShadow: '0 4px 20px rgba(139,92,246,0.10)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Coral 포인트 아이콘 */}
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          bgcolor: '#FF4500',
          flexShrink: 0,
          mt: '6px',
          boxShadow: '0 0 8px rgba(255,69,0,0.5)',
        }}
      />
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: '#1A1A2E',
          }}
        >
          { title }
        </Typography>
        <Typography
          sx={{
            fontSize: '0.8rem',
            color: '#FF4500',
            fontWeight: 600,
            mt: 0.25,
          }}
        >
          { date }{ org ? ` · ${org}` : '' }
        </Typography>
      </Box>
    </Box>
  );
}

export default AwardCard;
