// import { TUserProfile } from '@/lib/types/app';
// import { TUserProfileDataResponse } from '@/lib/types/backend';
// import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
// import { AbstractUserGateway } from '@/services/data-gateways/interfaces/user-gateway';
// import { KyInstance } from 'ky/distribution/types/ky';
// import { KyClient } from '../../clients';
//
// export class KyUserGateway extends AbstractUserGateway {
//   private readonly _client: KyInstance;
//   private readonly _urlNamespace = 'users';
//
//   constructor(kyClient: KyClient) {
//     super();
//     this._client = kyClient.getInstance();
//   }
//
//   public getUserProfileData = (id: number): Promise<TUserProfile> => {
//     return this._client
//       .get(`${this._urlNamespace}/${id}/`)
//       .then(async (response) => {
//         console.log('Работает KyUserGateway');
//         const data = await response.json<TUserProfileDataResponse>();
//         return convertKeysSnakeToCamel<TUserProfileDataResponse>(data);
//       })
//       .catch((error) => {
//         throw error;
//       });
//   };
// }
