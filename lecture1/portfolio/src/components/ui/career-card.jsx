import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * CareerCard 컴포넌트
 * - 경력 사항을 카드 형태로 표시
 *
 * Props:
 * @param {string} role - 직책/역할 [Required]
 * @param {string} company - 회사/기관명 [Required]
 * @param {string} period - 기간 (예: 2022.03 ~ 2024.02) [Required]
 * @param {string} description - 업무 설명 [Optional]
 *
 * Example usage:
 * <CareerCard role="웹 퍼블리셔" company="ABC 회사" period="2022 ~ 2024" />
 */
function CareerCard({ role, company, period, description }) {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 2.5 },
        borderRadius: '16px',
        bgcolor: 'rgba(255,255,255,0.85)',
        border: '1px solid #E2D9F3',
        boxShadow: '0 4px 20px rgba(139,92,246,0.10)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: '#8B5CF6',
          boxShadow: '0 8px 32px rgba(139,92,246,0.20)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 0.5 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            color: '#1A1A2E',
          }}
        >
          { role }
        </Typography>
        <Typography
          sx={{
            fontSize: '0.78rem',
            color: '#9B9BB0',
            fontWeight: 500,
          }}
        >
          { period }
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: '0.85rem',
          color: '#8B5CF6',
          fontWeight: 600,
          mt: 0.5,
        }}
      >
        { company }
      </Typography>
      { description && (
        <Typography
          sx={{
            fontSize: '0.82rem',
            color: '#4A4A6A',
            mt: 1,
            lineHeight: 1.6,
          }}
        >
          { description }
        </Typography>
      ) }
    </Box>
  );
}

export default CareerCard;
