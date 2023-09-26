import { AbstractAuthGateway } from '@/services/data-gateways/interfaces';
import { localStorageService } from '@/services';
import { IUser } from '@/lib/types/user';
import { contacts } from '@/mocks/data/contacts';

const fakeUserAdmin: IUser = { ...contacts[0], email: 'admin@admin.ru' };

export class MockAuthGateway extends AbstractAuthGateway {
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
    return fakeUserAdmin;
  }

  public async signIn(): Promise<IUser> {
    return fakeUserAdmin;
  }

  public async signInWithEmailCode(code: string): Promise<IUser | null> {
    if (code === '12345') {
      return fakeUserAdmin;
    }
    return null;
  }

  public async signOut(): Promise<boolean> {
    return true;
  }

  public async sendEmailCode(): Promise<boolean> {
    return true;
  }
}
