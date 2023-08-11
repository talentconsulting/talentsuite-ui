import React, { createContext, FC, ReactNode, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserDataWithUsername } from '../common/data/dummyUserData';
import { IUserModel } from '../models/ui-models/IUserModel';

export interface IAuthContextProps {
	user: string;
	//setUser?(...args: unknown[]): unknown;
	userData: Partial<IUserModel>;
}
const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

interface IAuthContextProviderProps {
	children: ReactNode;
}
export const AuthContextProvider: FC<IAuthContextProviderProps> = ({ children }) => {
	const staticUser = {
		user: 'john',
		userData: getUserDataWithUsername('john')
	};

	return <AuthContext.Provider value={staticUser}>{children}</AuthContext.Provider>;
};
AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
