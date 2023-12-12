import { IUser } from '@/lib/types/user';
import { mockAdmin } from '@/mocks/data/users';
import { AbstractAuthGateway } from '@/modules/data-gateways/interfaces';
import { localStorageService } from '@/modules/services';

export class MockAuthGateway extends AbstractAuthGateway {
  constructor() {
    super();
  }

  public async me(): Promise<IUser> {
    let user = null;
    try {
      user = localStorageService.getUser();
    } catch (e) {
      console.error(e);
      throw new Error('Internal server error1');
    }
    if (!user) {
      throw new Error('Internal server error2');
    }
    return user;
  }

  public async signUp(): Promise<IUser> {
    return mockAdmin;
  }

  public async signIn(): Promise<IUser> {
    return mockAdmin;
  }

  public async signInWithEmailCode(code: string): Promise<IUser | null> {
    if (code === '12345') {
      return mockAdmin;
    }
    return null;
  }

  public async signOut(): Promise<void> {}

  public async sendEmailCode(): Promise<boolean> {
    return true;
  }
}
