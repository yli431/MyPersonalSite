'use client';

import PropTypes from 'prop-types';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { useState } from 'react';

export default function CopyToClipboard({content, label}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <TextField
      label={label}
      value={content}
      sx={{ 
        width: 300, 
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ec407a', // default outline
            },
            '&:hover fieldset': {
                borderColor: '#ec407a', // on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ec407a', // on focus
            },
        }, 
      }}
      InputProps={{
        readOnly: true,
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={copied ? 'Copied!' : 'Copy'}>
              <IconButton onClick={handleCopy} edge="end">
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        )
      }}
      variant="outlined"
    />
  );
}


CopyToClipboard.propTypes = { content: PropTypes.any, label: PropTypes.any };