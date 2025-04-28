'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//@project
import branding from '@/branding.json';
import { CopyrightType } from '@/enum';

/***************************  FOOTER - COPYRIGHT  ***************************/

export default function Copyright({ type = CopyrightType.TYPE1, textProps, isDivider = true }) {
  const linkProps = {
    component: NextLink,
    variant: 'caption2',
    color: 'text.secondary',
    target: '_blank',
    rel: 'noopener noreferrer',
    underline: 'hover',
    'aria-label': 'Opens in a new tab',
    ...textProps,
    sx: { '&:hover': { color: 'primary.main' }, ...textProps?.sx }
  };

  return (
    <Stack
      direction={{ sm: 'row' }}
      sx={{ alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' }, gap: { xs: 1.5, sm: isDivider ? 1.5 : 3 } }}
    >
      <Typography variant="caption2" {...textProps} sx={{ color: 'text.secondary', ...textProps?.sx }}>
        Author © 2025
        <Link {...linkProps} href={branding.company.socialLink.linkedin} sx={{ ...linkProps.sx, ml: 0.5 }}>
          {branding.company.name}
        </Link>
      </Typography>
    </Stack>
  );
}

Copyright.propTypes = {
  type: PropTypes.any,
  CopyrightType: PropTypes.any,
  TYPE1: PropTypes.any,
  textProps: PropTypes.any,
  isDivider: PropTypes.bool
};
