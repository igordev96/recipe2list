'use client';

import { ReactNode, createContext, useContext } from 'react';

type UserProviderProps = {
  children: ReactNode;
};

type UserContextType = {};

const UserContext = createContext<UserContextType | null>(null);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider(props: UserProviderProps) {
  const { children } = props;

  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}
