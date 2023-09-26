import { BoxProps } from '@mui/material/Box';

export type TOwnProps = {
  authorAvatar: string;
  authorName: string;
  body: string;
  contentType: string;
  createdAt: number;
  messagePosition: 'left' | 'right';
} & BoxProps;

export type TProps = TOwnProps;
