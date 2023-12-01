import { TOAuthProvider } from '@/lib/types/oauth';
import { showToastError } from '@/lib/utils/show-toast-error';
import { oAuthService } from '@/modules/services';

export const getAuthorizeUrl = async (provider: TOAuthProvider): Promise<string> => {
  let authorizeUrl = '';
  try {
    authorizeUrl = await oAuthService.getAuthorizeURL(provider);
  } catch (err) {
    showToastError();
  }
  return authorizeUrl;
};
