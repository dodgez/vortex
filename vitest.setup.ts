import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

import { useCountStore } from './src/hooks/useCountStore';

afterEach(() => {
  cleanup();
  useCountStore.setState(useCountStore.getInitialState(), true);
});
