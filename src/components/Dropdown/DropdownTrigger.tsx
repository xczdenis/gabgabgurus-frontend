import { cloneElement, useContext } from 'react';
import { DropdownContext } from './DropdownContext';

type TOwnProps = {
  children: React.ReactElement;
};

type TProps = TOwnProps;

export const DropdownTrigger = (props: TProps) => {
  const { children } = props;
  const { onTriggerEnter, onTriggerLeave } = useContext(DropdownContext);

  return cloneElement(children, {
    onMouseEnter: (event: React.MouseEvent) => {
      children.props.onMouseEnter?.(event);
      onTriggerEnter(event);
    },
    onMouseLeave: (event: React.MouseEvent) => {
      children.props.onMouseLeave?.(event);
      onTriggerLeave(event);
    },
  });
};
