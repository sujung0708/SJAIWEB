import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/**
 * ProjectCard 컴포넌트
 * - 프로젝트를 글라스모피즘 카드 형태로 표시 (다크 테마)
 *
 * Props:
 * @param {string} title - 프로젝트명 [Required]
 * @param {string} description - 프로젝트 설명 [Required]
 * @param {string[]} techStack - 사용 기술 목록 [Optional, 기본값: []]
 * @param {string} githubUrl - GitHub 링크 [Optional]
 * @param {string} liveUrl - 배포 링크 [Optional]
 * @param {string} gradient - 상단 강조 바 그라데이션 색상 [Optional]
 *
 * Example usage:
 * <ProjectCard title="포트폴리오" description="..." techStack={['React', 'MUI']} />
 */
function ProjectCard({ title, description, techStack = [], githubUrl, liveUrl, gradient }) {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 3.5 },
        borderRadius: '20px',
        bgcolor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.10)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: 'rgba(139,92,246,0.50)',
          boxShadow: '0 16px 48px rgba(139,92,246,0.20)',
        },
      }}
    >
      {/* 그라데이션 강조 바 */}
      <Box
        sx={{
          height: 4,
          borderRadius: '4px',
          background: gradient || 'linear-gradient(90deg, #8B5CF6, #E8447A)',
          mb: 2.5,
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.1rem', md: '1.2rem' },
          color: '#fff',
          mb: 1,
        }}
      >
        { title }
      </Typography>

      <Typography
        sx={{
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.7,
          mb: 2.5,
          flexGrow: 1,
        }}
      >
        { description }
      </Typography>

      {/* 기술 스택 */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
        { techStack.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size='small'
            sx={{
              bgcolor: 'rgba(139,92,246,0.15)',
              color: '#A78BFA',
              border: '1px solid rgba(139,92,246,0.30)',
              fontSize: '0.72rem',
              height: 24,
            }}
          />
        )) }
      </Box>

      {/* 링크 버튼 */}
      { (githubUrl || liveUrl) && (
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          { githubUrl && (
            <IconButton
              size='small'
              component='a'
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: 'rgba(255,255,255,0.55)',
                '&:hover': { color: '#fff' },
              }}
            >
              <GitHubIcon fontSize='small' />
            </IconButton>
          ) }
          { liveUrl && (
            <IconButton
              size='small'
              component='a'
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: 'rgba(255,255,255,0.55)',
                '&:hover': { color: '#E8447A' },
              }}
            >
              <OpenInNewIcon fontSize='small' />
            </IconButton>
          ) }
        </Box>
      ) }
    </Box>
  );
}

export default ProjectCard;
