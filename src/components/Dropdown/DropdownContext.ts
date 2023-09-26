import { noop } from 'lodash';
import { createContext } from 'react';

type TDropdownContextType = {
  anchorEl: HTMLElement | null;
  onMenuEnter: typeof noop;
  onMenuLeave: typeof noop;
  onTriggerEnter: typeof noop;
  onTriggerLeave: typeof noop;
  open: boolean;
};

export const DropdownContext = createContext<TDropdownContextType>({
  anchorEl: null,
  onMenuEnter: noop,
  onMenuLeave: noop,
  onTriggerEnter: noop,
  onTriggerLeave: noop,
  open: false,
});
