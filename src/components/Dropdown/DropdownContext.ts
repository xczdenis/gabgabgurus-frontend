import { createContext } from 'react';
import { noop } from 'lodash-es';

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
