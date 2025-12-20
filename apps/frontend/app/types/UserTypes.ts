export interface EmailTypes {
  userId: string;
  userName: string;
  emailAddress: string;
}

export interface UserTypes {
  isAuth: boolean;
  name: string;
  emails: EmailTypes[];
}
