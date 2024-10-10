import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Pagination } from './pagination';

describe('Pagination', () => {
  test('should render successful', () => {
    render(<Pagination totalItems={100} pageSize={5} page={0} />);
  });

  test('should be queryable by role', () => {
    render(<Pagination totalItems={100} pageSize={5} page={0} />);

    const el = screen.getByRole('navigation');
    expect(el).toBeInTheDocument();
  });

  test('should be queryable by role', () => {
    render(<Pagination totalItems={10} pageSize={2} page={0} />);

    const el = screen.getAllByRole('button');
    expect(el).toHaveLength(7);
  });

  test('should be queryable by test-id', () => {
    render(<Pagination totalItems={100} pageSize={5} page={0} data-testid="abc" />);

    const el = screen.getByTestId('abc');
    expect(el).toBeInTheDocument();
  });
});
