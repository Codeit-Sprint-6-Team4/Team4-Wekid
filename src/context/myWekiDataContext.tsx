import { ReactNode, createContext } from 'react';
import { userType } from '@api/user';
import useGetUserData from '@hooks/useGetUserData';
export const MyWekiDataContext = createContext<userType | null>(null);

export const MyDataContext = ({ children }:{children:ReactNode}) => {
    const { myUserData } = useGetUserData();

  return (
    <MyWekiDataContext.Provider value={myUserData}>
      {children}
    </MyWekiDataContext.Provider>
  );
};
