export type TUser = {
  'avatarUrl': string;
  'id': number;
  'isPro': boolean;
  'name': string;
};

export type TUserData = {
  'email': string;
  'password': string;
};

export type TAuthorisation = {
  'email': string;
  'token': string;
};

export type TUserAuthorisation = TUser & TAuthorisation;
