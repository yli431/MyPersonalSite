'use client';

import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

// @mui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

export default function Experiences({ heading, caption, defaultExpanded, faqList, activeCategory }) {
  const theme = useTheme();
  const isFocusWithin = useFocusWithin();
  const [expanded, setExpanded] = useState(defaultExpanded || false);

  const filterFaqList = useMemo(() => {
    return activeCategory ? faqList.filter((item) => item.category === activeCategory) : faqList;
  }, [faqList, activeCategory]);

  const cardRadius = { xs: 4, sm: 6 };
  const accordionRadius = { xs: cardRadius.xs * 4, sm: cardRadius.sm * 4 };
  const accordionPX = { xs: 2, sm: 3 };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Stack
            direction={{ sm: 'row' }}
            sx={{
              gap: 4,
              justifyContent: 'space-between',
              alignItems: { xs: 'center', sm: 'end' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Typeset {...{ heading, caption }} />
          </Stack>
        </motion.div>

        <Stack sx={{ gap: 2 }}>
          <Stack
            sx={{
              gap: 1.5,
              '& .MuiAccordion-root:first-of-type': {
                borderTopLeftRadius: accordionRadius,
                borderTopRightRadius: accordionRadius,
              },
              '& .MuiAccordion-root:last-of-type': {
                borderBottomLeftRadius: accordionRadius,
                borderBottomRightRadius: accordionRadius,
              },
            }}
          >
            {filterFaqList.map((item, index) => {
              const isExpanded = expanded === `panel${index}`;

              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <Accordion
                    expanded={isExpanded}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      borderRadius: cardRadius,
                      backgroundColor: 'grey.100',
                      backgroundImage: !isExpanded
                        ? `linear-gradient(to right, ${theme.palette.grey[100]} 30%, rgba(255,255,255,0) 70%), url(${item.image})`
                        : 'none',
                      backgroundSize: 'contain',
                      backgroundPosition: 'calc(100% - 20px) center',
                      backgroundRepeat: 'no-repeat',
                      color: 'text.primary',
                      position: 'relative',
                      overflow: 'hidden',
                      height: isExpanded ? 'auto' : '100px',
                      minHeight: isExpanded ? 'unset' : '100px',
                      ...(isFocusWithin && {
                        '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main),
                      }),
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Stack
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <SvgIcon
                            name={isExpanded ? 'tabler-minus' : 'tabler-plus'}
                            color="text.primary"
                            size={20}
                          />
                        </Stack>
                      }
                      sx={{
                        p: accordionPX,
                        '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                        '& .MuiAccordionSummary-content': { my: 0 },
                        '&.Mui-focusVisible': { bgcolor: 'transparent' },
                        '&:hover, &:hover svg': { color: 'primary.dark' },
                      }}
                    >
                      <Typography variant="h4">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: accordionPX, pt: 0, pb: accordionPX }}>
                      <FaqDetails answer={item.answer} />
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

Experiences.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  defaultExpanded: PropTypes.string,
  faqList: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      category: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  activeCategory: PropTypes.string,
};
