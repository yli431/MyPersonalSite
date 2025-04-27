'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Background from '@/images/graphics/Background';
import Wave from '@/images/graphics/Wave';

/***************************  OTHER - 1  ***************************/

export default function Projects({ heading, description, primaryBtn, sections }) {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset {...{ heading, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>
        <Grid container spacing={1.5}>
          {sections.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 4 }}>
              <GraphicsCard sx={{ overflow: 'hidden' }}>
                <motion.div
                  whileHover={{
                    scale: 1.1,  // Increase the scale for more noticeable floating
                    boxShadow: `0px 20px 30px rgba(0, 0, 0, 0.3)`,  // Stronger box-shadow for more lift
                    zIndex: 2 // Ensure it is above other elements during hover
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3, // Faster transition for a quicker effect
                    delay: item.animationDelay
                  }}
                >
                  <GraphicsCard
                    sx={{
                      height: { xs: 240, sm: 324, md: 380 },
                      position: 'relative',
                      overflow: 'hidden',
                      WebkitTapHighlightColor: 'transparent',
                      transition: 'all 0.3s ease', // Smooth transition for scaling and shadow
                      ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                    }}
                  >
                    <Link
                      href={item.link}
                      component={NextLink}
                      aria-label={item.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        height: 1,
                        width: 1,
                        borderRadius: { xs: 6, sm: 8, md: 10 },
                        zIndex: 1
                      }}
                    />
                    <Background />
                    <Box sx={{ position: 'absolute', top: 0, width: 1, height: 1, textAlign: 'center' }}>
                      <CardMedia
                        component="img"
                        image={GetImagePath(item.image)}
                        sx={{
                          px: '14.5%',
                          pt: '16%',
                          pb: { xs: 2, md: 1 },
                          objectFit: 'contain'
                        }}
                        alt="other sections"
                        loading="lazy"
                      />
                      <Box sx={{ '& div': { alignItems: 'center', pt: 0.875 } }}>
                        <Wave />
                      </Box>
                    </Box>

                    {/* Grey block background with stronger floating effect */}
                    <Stack
                      sx={{
                        height: 177,
                        bottom: 0,
                        width: 1,
                        position: 'absolute',
                        justifyContent: 'end',
                        textAlign: 'center',
                        gap: { xs: 0.25, md: 0.5, sm: 1 },
                        p: 3,
                        background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 100%)`,
                        transition: 'all 0.3s ease', // Smooth transition for background
                        '&:hover': {
                          background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 50%)`, // Darker effect on hover
                        }
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'primary.main' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.subTitle}
                      </Typography>
                    </Stack>
                  </GraphicsCard>
                </motion.div>
              </GraphicsCard>
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ gap: 2, alignItems: 'center' }}>
          <Typography variant="h6" align="center" sx={{ color: 'text.secondary', width: { xs: 1, sm: '80%', md: '65%' } }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3
              }}
            >
              {description}
            </motion.div>
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <ButtonAnimationWrapper>
              <Button variant="outlined" {...primaryBtn} />
            </ButtonAnimationWrapper>
          </motion.div>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

Projects.propTypes = { heading: PropTypes.string, description: PropTypes.string, primaryBtn: PropTypes.any, sections: PropTypes.array };
