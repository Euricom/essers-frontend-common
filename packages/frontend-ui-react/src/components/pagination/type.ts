import type { ButtonProps } from '../button';

export type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

export type PaginationProps = {
  /**
   * The current page
   */
  page: number;

  /**
   * The current page size
   */
  pageSize: number;

  /**
   * The total number of items
   */
  totalItems: number;

  /**
   * Whether the paginator has a next page
   */
  hasNextPage?: boolean;

  /**
   * Whether the paginator has a previous page
   */
  hasPreviousPage?: boolean;

  /**
   * Allows to set custom class names for the link
   */
  className?: string;

  /**
   * Handle to be called when the page changes
   */
  onPageChange?: (page: number) => void;
};
