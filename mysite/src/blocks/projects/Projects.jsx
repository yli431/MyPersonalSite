'use client';
import PropTypes from 'prop-types';

// @next

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
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

import { useState } from 'react';

export default function Projects({ heading, description, primaryBtn, sections }) {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();

  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpen = (project) => {
    setActiveProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveProject(null);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typeset {...{ heading, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>

        <Grid container spacing={1.5}>
          {sections.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 4 }}>
              <GraphicsCard sx={{ overflow: 'hidden' }}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0px 20px 30px rgba(0, 0, 0, 0.3)`,
                    zIndex: 2,
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: item.animationDelay }}
                >
                  <GraphicsCard
                    onClick={() => handleOpen(item)}
                    sx={{
                      height: { xs: 240, sm: 324, md: 380 },
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      WebkitTapHighlightColor: 'transparent',
                      transition: 'all 0.3s ease',
                      ...(isFocusWithin && {
                        '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main),
                      }),
                    }}
                  >
                    <Background />
                    <Box sx={{ position: 'absolute', top: 0, width: 1, height: 1, textAlign: 'center' }}>
                      <CardMedia
                        component="img"
                        image={GetImagePath(item.image)}
                        sx={{
                          px: '14.5%',
                          pt: '16%',
                          pb: { xs: 2, md: 1 },
                          objectFit: 'contain',
                        }}
                        alt="project preview"
                        loading="lazy"
                      />
                      <Box sx={{ '& div': { alignItems: 'center', pt: 0.875 } }}>
                        <Wave />
                      </Box>
                    </Box>
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
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 50%)`,
                        },
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
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {description}
            </motion.div>
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ButtonAnimationWrapper>
              <Button variant="outlined" {...primaryBtn} />
            </ButtonAnimationWrapper>
          </motion.div>
        </Stack>

        {/* Modal Popup */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          {activeProject && (
            <>
              <DialogTitle>{activeProject.title}</DialogTitle>
              <DialogContent>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>{activeProject.subTitle}</Typography>
                <Typography variant="body2">{activeProject.description}</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                {/* {activeProject.link && (
                  <Button
                    component={NextLink}
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener"
                  >
                    Visit
                  </Button>
                )} */}
              </DialogActions>
            </>
          )}
        </Dialog>
      </Stack>
    </ContainerWrapper>
  );
}

Projects.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  primaryBtn: PropTypes.any,
  sections: PropTypes.array,
};
