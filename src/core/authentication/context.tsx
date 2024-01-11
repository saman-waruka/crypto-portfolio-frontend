import { createContext } from 'react';
import type { UserInformationContextType } from './type';

export const UserInformationContext = createContext(
  {} as UserInformationContextType
);
