import CountCard from '@/components/CountCard';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, test } from 'vitest';

test('Shows the counter', () => {
  render(<CountCard />);

  expect(screen.getByText('The current count is 0')).toBeDefined();
});

test('Increments the counter', async () => {
  render(<CountCard />);

  await userEvent.click(screen.getByRole('button', { name: 'increment' }));
  expect(screen.getByText('The current count is 1')).toBeDefined();
});

test('Decrements the counter', async () => {
  render(<CountCard />);

  await userEvent.click(screen.getByRole('button', { name: 'decrement' }));
  expect(screen.getByText('The current count is -1')).toBeDefined();
});

test('Resets the counter', async () => {
  render(<CountCard />);

  await userEvent.click(screen.getByRole('button', { name: 'increment' }));
  expect(screen.getByText('The current count is 1')).toBeDefined();

  await userEvent.click(screen.getByRole('button', { name: 'reset' }));
  expect(screen.getByText('The current count is 0')).toBeDefined();
});
