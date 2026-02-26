import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProjectCard from '../ui/project-card';
import useScrollTrigger from '../../hooks/use-scroll-trigger';

/** ── 프로젝트 데이터 ── */
const PROJECTS = [
  {
    title: '포트폴리오 사이트',
    description: 'React + MUI 기반으로 제작한 개인 포트폴리오 사이트. 패럴랙스 효과, 스크롤 애니메이션, 반응형 레이아웃을 구현했습니다.',
    techStack: ['React', 'MUI', 'Vite', 'CSS Animation'],
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'linear-gradient(90deg, #8B5CF6, #E8447A)',
  },
  {
    title: '반응형 쇼핑몰 UI',
    description: '다양한 기기에서 최적화된 UX를 제공하는 쇼핑몰 인터페이스. MUI Grid 시스템을 활용한 계단형 레이아웃을 구현했습니다.',
    techStack: ['React', 'MUI', 'JavaScript', 'Figma'],
    githubUrl: '#',
    gradient: 'linear-gradient(90deg, #3B5BDB, #8B5CF6)',
  },
  {
    title: '기업 소개 랜딩 페이지',
    description: '스크롤 인터랙션과 CSS 애니메이션을 적용한 모던한 기업 소개 페이지 제작 프로젝트입니다.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: '#',
    gradient: 'linear-gradient(90deg, #D946A8, #E8447A)',
  },
  {
    title: 'UI 컴포넌트 라이브러리',
    description: '재사용 가능한 UI 컴포넌트 모음으로, 버튼, 카드, 모달, 폼 등 다양한 요소를 포함합니다.',
    techStack: ['React', 'MUI', 'Storybook', 'TypeScript'],
    githubUrl: '#',
    gradient: 'linear-gradient(90deg, #E8447A, #FF6B35)',
  },
];

/**
 * ProjectsSection 컴포넌트
 * - 3페이지 프로젝트 섹션
 * - 다크 배경 위 글라스모피즘 카드 그리드 레이아웃
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  const titleTrigger = useScrollTrigger();
  const project1Trigger = useScrollTrigger();
  const project2Trigger = useScrollTrigger();
  const project3Trigger = useScrollTrigger();
  const project4Trigger = useScrollTrigger();

  const triggersList = [project1Trigger, project2Trigger, project3Trigger, project4Trigger];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0D0D1A 0%, #1A1A2E 40%, #2D1B69 100%)',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth='lg'>

        {/* 섹션 타이틀 */}
        <Box
          ref={titleTrigger.ref}
          className={`fade-up${titleTrigger.isVisible ? ' visible' : ''}`}
          sx={{ mb: { xs: 6, md: 10 } }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: '#8B5CF6',
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          >
            Selected Work
          </Typography>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Projects
          </Typography>
        </Box>

        {/* 프로젝트 그리드 */}
        <Grid container spacing={3}>
          { PROJECTS.map((project, index) => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <Box
                ref={triggersList[index].ref}
                className={`fade-up${triggersList[index].isVisible ? ' visible' : ''}`}
                sx={{ transitionDelay: `${index * 0.1}s`, height: '100%' }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  gradient={project.gradient}
                />
              </Box>
            </Grid>
          )) }
        </Grid>

      </Container>
    </Box>
  );
}

export default ProjectsSection;
