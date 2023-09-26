'use client';

import { Pagination, PaginationItem, SxProps } from '@mui/material';
import { paginationConfig } from '@/config';
import Link from 'next/link';
import { TProps } from './types';
import { useSearchParams } from 'next/dist/client/components/navigation';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';

const BasePagination: React.FC<TProps> = (props) => {
  const { page = 1, count = paginationConfig.defaultCount, sx, ...rest } = props;
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
      count={count}
      page={page}
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
