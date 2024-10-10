import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { cn } from '../../utils/cn';

import { buttonVariants } from '../button';
import { useTranslation } from '../localeProvider/localeContext';
import type { PaginationLinkProps, PaginationProps } from './type';
import { usePaginator } from './usePaginator';

const translation = {
  en: {
    previous: 'Previous',
    next: 'Next',
  },
  nl: {
    previous: 'Vorige',
    next: 'Volgende',
  },
} as Record<string, Record<string, string>>;

const PaginationContainer = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
PaginationContainer.displayName = 'PaginationContainer';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  ),
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />,
);
PaginationItem.displayName = 'PaginationItem';

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  disabled,
  onClick,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const { t } = useTranslation(translation);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) return;
    onClick?.(event);
  };
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 pl-2.5', className, disabled && 'opacity-50 ')}
      onClick={handleClick}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>{t('previous')}</span>
    </PaginationLink>
  );
};
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  disabled,
  onClick,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const { t } = useTranslation(translation);
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) return;
    onClick?.(event);
  };
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 pr-2.5', className, disabled && 'opacity-50')}
      onClick={handleClick}
      {...props}
    >
      <span>{t('next')}</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  );
};
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

const Pagination = ({
  className,
  page,
  pageSize,
  totalItems,
  onPageChange,
  hasPreviousPage,
  hasNextPage,
  ...restProps
}: PaginationProps) => {
  const numberOfPages = Math.ceil(totalItems / pageSize);
  // const start = page * pageSize + 1;
  // const end = (page + 1) * pageSize;
  hasPreviousPage = hasPreviousPage || page > 0;
  hasNextPage = hasNextPage || page * pageSize + pageSize < totalItems;

  const paginationRange = usePaginator({
    currentPage: page,
    numberOfPages,
    siblingCount: 1,
  });

  return (
    <PaginationContainer className={className} {...restProps}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange?.(page - 1)}
            disabled={!hasPreviousPage}
          />
        </PaginationItem>
        {paginationRange?.map((item, index) => {
          if (item === -1) {
            return (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <PaginationItem key={index}>
              <PaginationLink
                className={cn(item === page + 1 && 'bg-gray-200 text-white')}
                onClick={() => onPageChange?.(item - 1)}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext onClick={() => onPageChange?.(page + 1)} disabled={!hasNextPage} />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  );
};

export {
  Pagination,
  PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
