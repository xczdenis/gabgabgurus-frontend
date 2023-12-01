export type TOwnProps = {
  title?: string;
  url?: string;
  isSvgIcon?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export type TProps = TOwnProps;
