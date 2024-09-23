import GridCard from '@/components/GridCard';
import { useCountStore } from '@/hooks/useCountStore';
import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const buttonProps: ButtonProps = {
  size: 'small',
};

export default function CountCard() {
  const { count, decrement, increment, reset } = useCountStore();

  return (
    <GridCard
      actions={
        <Stack direction="row" flexWrap="wrap">
          <Button
            onClick={() => {
              increment();
            }}
            {...buttonProps}
          >
            increment
          </Button>
          <Button
            onClick={() => {
              decrement();
            }}
            {...buttonProps}
          >
            decrement
          </Button>
          <Button
            onClick={() => {
              reset();
            }}
            {...buttonProps}
          >
            reset
          </Button>
        </Stack>
      }
      content={
        <>
          <Typography
            gutterBottom
            sx={{ color: 'text.secondary', fontSize: 14 }}
          >
            Zustand state example
          </Typography>
          <Typography variant="body2">The current count is {count}</Typography>
        </>
      }
    />
  );
}
