import { SetStateAction } from 'react';

export interface Props {
  valid: boolean | undefined;
  alreadyRedeemed?: boolean | undefined;
  codeExpired?: boolean | undefined;
}

export interface UserProps {
  isLoggedIn: boolean;
}
export interface ResponseProps {
  setResponse: React.Dispatch<SetStateAction<Props | undefined>>;
  response?: Props;
}
