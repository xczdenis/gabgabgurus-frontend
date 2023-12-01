type TGroupMember = {
  firstName: string;
};

type TOptions = {
  limit: number;
  defaultName: string;
};

const defaultOptions: TOptions = {
  limit: 70,
  defaultName: '',
};

export const makeGroupDisplayName = (members?: TGroupMember[], options?: TOptions): string => {
  if (!members) {
    return '';
  }
  const defaults = {
    ...options,
    ...defaultOptions,
  };

  let displayName = members
    .slice(0, 10)
    .map((member) => member.firstName)
    .join(', ');

  if (displayName.length > defaults.limit) {
    displayName = displayName.substring(0, defaults.limit) + '...';
  }

  return displayName || defaults.defaultName;
};
