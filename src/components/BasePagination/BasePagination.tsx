'use client';

import { Pagination, PaginationItem, SxProps } from '@mui/material';
import { useSearchParams } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { TProps } from './types';

const BasePagination = (props: TProps) => {
  const { currentPage, totalPages, sx, ...rest } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const defaultSx: SxProps = { py: 5, display: 'flex', justifyContent: 'center' };
  const mergedSx = {
    ...defaultSx,
    ...sx,
  };

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, String(value));

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      sx={mergedSx}
      shape="rounded"
      showFirstButton
      showLastButton
      siblingCount={1}
      boundaryCount={1}
      {...rest}
      renderItem={(item) => (
        <PaginationItem component={Link} href={pathname + '?' + createQueryString('page', item.page || 1)} {...item} />
      )}
    />
  );
};

export default BasePagination;
