import { TWithAuthenticatedUserProps } from '@/lib/hoks/with-authenticated-user';

export type TOwnProps = Record<string, never>;

export type TProps = TOwnProps & TWithAuthenticatedUserProps;
