import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AwardCard from '../ui/award-card';
import CareerCard from '../ui/career-card';
import SkillTag from '../ui/skill-tag';
import useScrollTrigger from '../../hooks/use-scroll-trigger';

/** ── 데이터 ── */
const AWARDS = [
  { title: '이기자 대회 웹 부문 우수상', date: '2025', org: '이기자협회' },
  { title: 'UI/UX 디자인 공모전 장려상', date: '2024', org: '한국디자인진흥원' },
];

const CAREERS = [
  {
    role: '웹 퍼블리셔',
    company: 'SJAIWEB',
    period: '2024 ~ 현재',
    description: 'React + MUI 기반 모던 웹 퍼블리싱 및 UI 컴포넌트 개발',
  },
  {
    role: '프리랜서 퍼블리셔',
    company: '개인 프로젝트',
    period: '2023 ~ 2024',
    description: '반응형 웹사이트 제작 및 디자인 시스템 구축',
  },
];

const SKILLS = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'MUI',
  'Vite', 'Git', 'Figma', 'Responsive Web', 'GitHub Actions',
];

/**
 * ProfileSection 컴포넌트
 * - 2페이지 프로필 섹션
 * - 계단형 레이아웃: 프로필 카드 → 수상/경력 → 기술 스택
 *
 * Props: 없음
 *
 * Example usage:
 * <ProfileSection />
 */
function ProfileSection() {
  const profileTrigger = useScrollTrigger();
  const awardTrigger = useScrollTrigger();
  const careerTrigger = useScrollTrigger();
  const skillTrigger = useScrollTrigger();

  const profileSrc = document.getElementById('profile-photo')?.src || '/profile.jpg';

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #D6E4F0 0%, #F5F5F5 60%, #FFCABA 100%)',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth='lg'>

        {/* 섹션 타이틀 */}
        <Typography
          variant='h2'
          sx={{
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 700,
            color: '#1A1A2E',
            mb: { xs: 6, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          About Me
        </Typography>

        {/* ── Step 1: 프로필 카드 ── */}
        <Box
          ref={profileTrigger.ref}
          className={`fade-up${profileTrigger.isVisible ? ' visible' : ''}`}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: { xs: 3, md: 4 },
              flexDirection: { xs: 'column', sm: 'row' },
              p: { xs: 3, md: 4 },
              borderRadius: '24px',
              bgcolor: 'rgba(255,255,255,0.75)',
              border: '1px solid #E2D9F3',
              boxShadow: '0 8px 40px rgba(139,92,246,0.15)',
              backdropFilter: 'blur(12px)',
              width: { xs: '100%', md: 'auto' },
            }}
          >
            {/* 프로필 사진 */}
            <Box
              component='img'
              src={profileSrc}
              alt='프로필 사진'
              onError={(e) => { e.target.style.display = 'none'; }}
              sx={{
                width: { xs: 100, md: 120 },
                height: { xs: 100, md: 120 },
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #E2D9F3',
                boxShadow: '0 4px 20px rgba(139,92,246,0.20)',
                flexShrink: 0,
              }}
            />
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.5rem', md: '1.8rem' },
                  color: '#1A1A2E',
                }}
              >
                한수정
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: '#8B5CF6',
                  fontWeight: 600,
                  mt: 0.5,
                }}
              >
                Web Publisher
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  color: '#4A4A6A',
                  mt: 1,
                  lineHeight: 1.6,
                }}
              >
                노력과 끈기로 성장하는 웹 퍼블리셔입니다.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ── Step 2: 수상 + 경력 (계단형 우측 이동) ── */}
        <Grid container spacing={3} sx={{ mb: { xs: 4, md: 6 }, ml: { xs: 0, md: 4 } }}>

          {/* 수상 */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              ref={awardTrigger.ref}
              className={`fade-up${awardTrigger.isVisible ? ' visible' : ''}`}
              sx={{ transitionDelay: '0.1s' }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: '#FF4500',
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                Awards
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                { AWARDS.map((a) => (
                  <AwardCard key={a.title} title={a.title} date={a.date} org={a.org} />
                )) }
              </Box>
            </Box>
          </Grid>

          {/* 경력 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              ref={careerTrigger.ref}
              className={`fade-up${careerTrigger.isVisible ? ' visible' : ''}`}
              sx={{ transitionDelay: '0.2s' }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: '#8B5CF6',
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                Experience
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                { CAREERS.map((c) => (
                  <CareerCard
                    key={c.company}
                    role={c.role}
                    company={c.company}
                    period={c.period}
                    description={c.description}
                  />
                )) }
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* ── Step 3: 기술 스택 (더 우측 이동) ── */}
        <Box
          ref={skillTrigger.ref}
          className={`fade-up${skillTrigger.isVisible ? ' visible' : ''}`}
          sx={{
            ml: { xs: 0, md: 8 },
            transitionDelay: '0.3s',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              color: '#4A4A6A',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            { SKILLS.map((skill) => (
              <SkillTag key={skill} label={skill} />
            )) }
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

export default ProfileSection;
