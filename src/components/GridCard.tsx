import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import type { ReactNode } from 'react';

export default function GridCard({
  actions,
  content,
}: {
  actions?: ReactNode;
  content: ReactNode;
}) {
  return (
    <Grid>
      <Card sx={{ maxWidth: 275, mx: 'auto' }}>
        <CardContent>{content}</CardContent>
        {actions && <CardActions>{actions}</CardActions>}
      </Card>
    </Grid>
  );
}
