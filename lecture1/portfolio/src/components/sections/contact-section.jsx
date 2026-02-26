import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import useScrollTrigger from '../../hooks/use-scroll-trigger';

/** ── 연락처 데이터 ── */
const CONTACTS = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    href: 'mailto:example@email.com',
    color: '#E8447A',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    href: 'https://github.com',
    color: '#A78BFA',
  },
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    href: 'https://instagram.com',
    color: '#D946A8',
  },
];

/**
 * ContactSection 컴포넌트
 * - 4페이지 연락처 섹션 + 푸터
 * - 소셜/이메일 링크, 저작권 표시
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const titleTrigger = useScrollTrigger();
  const contentTrigger = useScrollTrigger();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '60vh',
        background: 'linear-gradient(180deg, #2D1B69 0%, #1A1A2E 30%, #0D0D1A 60%, #3B5BDB 100%)',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth='md' sx={{ textAlign: 'center' }}>

        {/* 타이틀 */}
        <Box
          ref={titleTrigger.ref}
          className={`fade-up${titleTrigger.isVisible ? ' visible' : ''}`}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: '#8B5CF6',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              color: '#fff',
              mb: 2,
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              color: 'rgba(255,255,255,0.60)',
              lineHeight: 1.8,
              mb: { xs: 5, md: 7 },
              maxWidth: 480,
              mx: 'auto',
            }}
          >
            새로운 프로젝트나 협업에 관심 있으시면 언제든지 연락해 주세요.
          </Typography>
        </Box>

        {/* 소셜 링크 */}
        <Box
          ref={contentTrigger.ref}
          className={`fade-up${contentTrigger.isVisible ? ' visible' : ''}`}
          sx={{
            transitionDelay: '0.2s',
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 4, md: 6 },
            mb: { xs: 6, md: 10 },
          }}
        >
          { CONTACTS.map(({ icon, label, href, color }) => (
            <Box
              key={label}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}
            >
              <IconButton
                component='a'
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  width: { xs: 52, md: 60 },
                  height: { xs: 52, md: 60 },
                  bgcolor: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.70)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: `${color}22`,
                    borderColor: color,
                    color,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${color}44`,
                  },
                }}
              >
                { icon }
              </IconButton>
              <Typography
                sx={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.40)',
                  textTransform: 'uppercase',
                }}
              >
                { label }
              </Typography>
            </Box>
          )) }
        </Box>

        {/* 푸터 */}
        <Typography
          sx={{
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.22)',
            letterSpacing: '0.06em',
          }}
        >
          © 2025 한수정. All rights reserved.
        </Typography>

      </Container>
    </Box>
  );
}

export default ContactSection;
