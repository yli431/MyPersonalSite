'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// @project
import { NavMenu } from '@/components/navbar';

/***************************  NAVBAR - CONTENT 10  ***************************/

export default function NavbarContent10({ navItems }) {

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      <Box sx={{ width: '700px', textAlign: 'center', margin: 'auto', bgcolor: 'grey.200', borderRadius: 10}}>
        <NavMenu {...{ navItems }} />
      </Box>
    </Stack>
  );
}

NavbarContent10.propTypes = {
  navItems: PropTypes.any,
};
