'use client';
import PropTypes from 'prop-types';

// @mui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import Star from '@/images/graphics/Star';

/***************************  FEATURE - 20  ***************************/

export default function Abilities({ heading, image, features }) {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const partitionInExtraSmall = 1;
  const partitionInSmall = 2;
  const partitionInLarge = 3;

  const columns = downSM ? partitionInExtraSmall : downMD ? partitionInSmall : partitionInLarge;

  const calculateElementsInLastRow = (dataArray, columns) => {
    const totalItems = dataArray.length;
    return totalItems % columns || columns;
  };

  const calculateIndexOfFirstElementInLastRow = (dataArray, elementsInLastRow) => {
    const totalItems = dataArray.length;
    return totalItems - elementsInLastRow;
  };

  const elementsInLastRow = calculateElementsInLastRow(features, columns);
  const indexOfFirstElementInLastRow = calculateIndexOfFirstElementInLastRow(features, elementsInLastRow);

  const calculateIndexOfLastElementOfEachRow = (dataArray, columns) => {
    const indices = [];
    const totalItems = dataArray.length;
    const rows = Math.ceil(totalItems / columns);

    for (let i = 1; i <= rows; i++) {
      const lastIndexInRow = i * columns - 1;
      indices.push(lastIndexInRow < totalItems ? lastIndexInRow : totalItems - 1);
    }

    return indices;
  };

  const indicesOfLastElements = calculateIndexOfLastElementOfEachRow(features, columns);
  const gc = theme.palette.background.default;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset
            {...{
              heading,
              stackProps: {
                sx: { maxWidth: { md: 500 }, ...(!image && { maxWidth: 1, textAlign: 'center' }) }
              }
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          <GraphicsCard sx={{ position: 'relative', overflow: 'visible' }}>
            {image && (
              <GraphicsCard
                sx={{
                  height: { md: 267 },
                  width: { md: 456 },
                  bgcolor: 'transparent',
                  position: 'absolute',
                  top: -190,
                  right: 45,
                  zIndex: -1,
                  display: { xs: 'none', md: 'block' }
                }}
              >
                <GraphicsImage
                  sx={{ height: 1, backgroundPositionX: 'right', backgroundPositionY: 'top' }}
                  image={image}
                >
                  <Box
                    sx={{
                      width: 1,
                      height: 1,
                      background: `linear-gradient(180deg, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.6)} 100%)`
                    }}
                  />
                </GraphicsImage>
              </GraphicsCard>
            )}

            <Box sx={{ p: 3 }}>
              <Grid container>
                {features.map((item, index) => (
                  <Grid
                    key={index}
                    size={{
                      xs: 12 / partitionInExtraSmall,
                      sm: 12 / partitionInSmall,
                      md: 12 / partitionInLarge
                    }}
                    sx={{
                      position: 'relative',
                      ...(index < indexOfFirstElementInLastRow && {
                        borderBottom: `1px solid ${theme.palette.grey[300]}`
                      }),
                      ...(!indicesOfLastElements.includes(index) && {
                        borderRight: `1px solid ${theme.palette.grey[300]}`
                      }),
                      p: { xs: 1.5, sm: 3, md: 4 }
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, y: -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{
                        height: '100%',
                        borderRadius: theme.spacing(2),
                        boxShadow: theme.shadows[1],
                        padding: theme.spacing(3),
                        backgroundColor: theme.palette.background.paper
                      }}
                    >
                      <Stack spacing={3} sx={{ height: 1 }}>
                        <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.300' }}>
                          <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })} />
                        </Avatar>
                        <Stack spacing={{ xs: 0.5, md: 1 }}>
                          {item.title && <Typography variant="h4">{item.title}</Typography>}
                          {item.content && (
                            <Typography sx={{ color: 'text.secondary' }}>{item.content}</Typography>
                          )}
                        </Stack>
                      </Stack>
                    </motion.div>

                    {index < indexOfFirstElementInLastRow && !indicesOfLastElements.includes(index) && (
                      <Stack sx={{ position: 'absolute', bottom: -9, right: -9 }}>
                        <Star />
                      </Stack>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

Abilities.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.any,
  features: PropTypes.array
};
