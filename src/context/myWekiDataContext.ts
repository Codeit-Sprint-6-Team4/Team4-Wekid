import { createContext } from 'react';
import { userType } from '@api/user';

export const MyWekiDataContext = createContext<userType | null>(null);
