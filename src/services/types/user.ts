export type TUser = {
  'avatarUrl': string;
  'id': number;
  'isPro': boolean;
  'name': string;
  email: string;
  token: string;
};

export type TUserData = {
  'email': string;
  'password': string;
  token?: string;
};

export type TAuthorisation = {
  'email': string;
  'token': string;
};

export type TUserAuthorization = TUser & TAuthorisation;
