// @mui
import { Box, Grid, Typography } from '@mui/material';

// Hero data
export const summary = {
  headLine: (
    <>
      Hi, I am <Box component="span" sx={{ color: '#ec407a' }}>Yahan</Box> Liu
    </>
  ),
  captionLine: (
    <>
      A Computer Science and Mathematics <Box component="span" sx={{ color: '#ec407a' }}>double major</Box> graduates
    </>
  ),
  summary: (
    <>
      I'm a passionate software developer with a solid academic background in Computer Science and Mathematics.
      I specialize in building full-stack web applications using modern technologies like React and .NET.
      I love solving real-world problems through clean code, smart architecture, and a strong focus on user experience.
    </>
  )
};

// Main component
export default function summarySection() {
  return (
    <Box sx={{ px: 4, py: 6, maxWidth: 1000, mx: 'auto' }}>
      {/* Headline */}
      <Typography variant="h1" component="div" align="center">
        {summary.headLine}
      </Typography>

      {/* Caption */}
      <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
        {summary.captionLine}
      </Typography>

      {/* Summary */}
      <Typography variant="body1" sx={{ color: 'text.primary', textAlign: 'center', mt: 4 }}>
        {summary.summary}
      </Typography>
      
      {/* Tech Tiles */}
      <Grid container spacing={2}>
        {summary.listData.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '2px solid transparent',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: '0 0 12px rgba(33, 150, 243, 0.6)',
                  transform: 'scale(1.05)',
                }
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: 48, height: 48, mb: 1 }}
              />
              <Typography variant="body2">{item.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
