'use client';
import PropTypes from 'prop-types';

import { useRef } from 'react';

// @mui
import branding from '@/branding.json';
import SvgIcon from '@/components/SvgIcon';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
// @third-party
import { IconType } from '@/enum';
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

// @assets
import Wave from '@/images/graphics/Wave';

/***************************  HERO - 17  ***************************/

export default function Summary({ headLine, captionLine }) {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);

  const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
  const socialIcons = [
    {
      icon: 'tabler-filled-linkedin',
      link: { href: `${branding.company.socialLink.linkedin}`, ...linkProps }
    },
    {
      icon: 'tabler-filled-brand-github',
      link: { href: `${branding.company.socialLink.github}`, ...linkProps }
    }
  ];

  return (
    <>
      <Box
        sx={{
          height: { xs: 592, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          background: getBackgroundDots(theme.palette.grey[300], 60, 35),
          bgcolor: 'grey.100'
        }}
      ></Box>
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box ref={containerRef}>
          <Box sx={{ pb: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ alignItems: 'center', gap: 1.5 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Typography variant="h1" align="center" sx={{ maxWidth: 800 }}>
                  {headLine}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Box sx={{ pt: 0.5, pb: 0.75 }}>
                  <Wave />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650 }}>
                  {captionLine}
                </Typography>
              </motion.div>
            </Stack>
            <Stack sx={{ alignItems: 'center', gap: 2, mt: { xs: 3, sm: 4, md: 5 } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                <Stack direction="row" sx={{ gap: { xs: 0.5, sm: 1.5 } }}>
                  {socialIcons.map((item, index) => (
                    <Link
                      component={NextLink}
                      key={index}
                      {...item.link}
                      sx={{ ...item.link?.sx }}
                      rel="noopener noreferrer"
                      aria-label="follow us on social media"
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          bgcolor: 'grey.200',
                          width: { xs: 40, sm: 52, lg: 56 },
                          height: { xs: 40, sm: 52, lg: 56 },
                          borderRadius: 3,
                          ':hover': { bgcolor: 'grey.300' }
                        }}
                      >
                        <SvgIcon type={IconType.FILL} size={45} {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                      </Avatar>
                    </Link>
                  ))}
                </Stack>
              </motion.div>
                <Stack sx={{ alignItems: 'center', mt: { xs: 2, sm: 3 } }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  <Typography variant="body1" align="center" sx={{ maxWidth: 700, color: 'text.secondary' }}>
                  I am a soon-to-graduate Computer Science and Mathematics student passionate about software development and problem-solving. With hands-on experience in C#, Java, Python, and TypeScript, I specialize in full-stack web development using ASP.Net, RESTful APIs, and relational databases. I thrive in collaborative environments, always eager to learn and develop scalable solutions that make a real-world impact.
                  </Typography>
                </motion.div>
              </Stack>

            </Stack>
          </Box>
        </Box>
      </ContainerWrapper>
    </>
  );
}

Summary.propTypes = {
  headLine: PropTypes.string,
  captionLine: PropTypes.string
};
