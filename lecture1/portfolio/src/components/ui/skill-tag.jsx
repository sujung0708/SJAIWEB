import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * SkillTag 컴포넌트
 * - 기술 스택을 원형(Pill) 태그로 표시
 *
 * Props:
 * @param {string} label - 기술 스택 이름 [Required]
 *
 * Example usage:
 * <SkillTag label="React" />
 */
function SkillTag({ label }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 2,
        py: 0.75,
        borderRadius: '50px',
        border: '1px solid #E2D9F3',
        bgcolor: 'rgba(139,92,246,0.08)',
        cursor: 'default',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'scale(1.08)',
          boxShadow: '0 0 12px rgba(139,92,246,0.35)',
          bgcolor: 'rgba(139,92,246,0.15)',
          borderColor: '#8B5CF6',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '0.8rem', md: '0.875rem' },
          fontWeight: 600,
          color: '#4A4A6A',
        }}
      >
        { label }
      </Typography>
    </Box>
  );
}

export default SkillTag;
