import GridCard from '@/components/GridCard';
import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const buttonProps: ButtonProps = {
  size: 'small',
};

export default function QueryCard() {
  const [queryEnabled, setQueryEnabled] = useState(false);
  const { data, dataUpdatedAt, isError, isLoading, isSuccess, refetch } =
    useQuery({
      enabled: queryEnabled,
      queryFn: async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/1',
        );

        const data: unknown = await response.json();
        return data;
      },
      queryKey: ['query-data'],
    });

  console.log(dataUpdatedAt);

  return (
    <GridCard
      actions={
        isError || isSuccess ? (
          <Button
            disabled={isLoading}
            onClick={() => {
              void refetch();
            }}
            {...buttonProps}
          >
            refetch query data
          </Button>
        ) : (
          <Button
            disabled={queryEnabled}
            onClick={() => {
              setQueryEnabled(true);
            }}
            {...buttonProps}
          >
            fetch query data
          </Button>
        )
      }
      content={
        <>
          <Typography
            gutterBottom
            sx={{ color: 'text.secondary', fontSize: 14 }}
          >
            TanStack Query example
          </Typography>
          <Typography variant="body2">
            {`The json data is
            ${
              !queryEnabled
                ? 'unfetched'
                : isLoading
                  ? 'loading'
                  : JSON.stringify(data)
            } updated at ${
              !queryEnabled || isLoading
                ? 'never'
                : new Date(dataUpdatedAt).toLocaleString()
            }`}
          </Typography>
        </>
      }
    />
  );
}
