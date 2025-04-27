'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useTheme } from '@mui/material/styles';

// @project
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

/***************************  MAIN - LOGO  ***************************/

export default function LogoSection({ isIcon, sx, to }) {
  const theme = useTheme();
  return (
    <NextLink href={!to ? process.env.NEXT_PUBLIC_BASE_NAME || '/' : to} passHref>
      <ButtonBase
        disableRipple
        sx={{ ...sx, display: 'block', '&:focus-visible': generateFocusVisibleStyles(theme.palette.primary.main) }}
        aria-label="logo"
      >
        <Box component="img" src='/assets/images/shared/L.png' alt='L' sx={{ width: 24, height: 24 }} />
        {/* {isIcon ? <LogoIcon /> : <LogoMain />} */}
      </ButtonBase>
    </NextLink>
  );
}

LogoSection.propTypes = { isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.string };
