import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './button';
import { createRef } from 'react';

describe('Button', () => {
  test('should render successful', () => {
    render(<Button>Click me</Button>);
  });

  test('should be queryable by role', () => {
    render(<Button>Click me</Button>);

    const el = screen.getByRole('button');
    expect(el).toBeInTheDocument();
  });

  test('should be queryable by test-id', () => {
    render(<Button data-testid="abc">Click me</Button>);

    const el = screen.getByTestId('abc');
    expect(el).toBeInTheDocument();
  });

  test('should be accessible by ref', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);

    const el = screen.getByRole('button');
    expect(el).toBe(ref.current);
  });
});
