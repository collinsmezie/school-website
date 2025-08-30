'use client'

import React from 'react';
import { Box, Typography } from '@mui/material';

const TestComponent = () => {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ color: '#667eea', mb: 2 }}>
        Sonnet Model School
      </Typography>
      <Typography variant="h5" sx={{ color: '#718096' }}>
        Test Component Working!
      </Typography>
    </Box>
  );
};

export default TestComponent; 