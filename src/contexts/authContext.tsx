import React, { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserDataWithUsername } from '../common/data/dummyUserData';
import { IUserModel, UserModel } from '../models/ui-models/IUserModel';
import { useAuth0 } from "@auth0/auth0-react";
import { GetAppSettings } from '../appsettings';
import data from '../common/data/dummyFeatureFlagsData';// This should be removed once login functionality is complete
import { FeatureManager } from './featureFlagsContext';// This should be removed once login functionality is complete, FeatureManager should only be accessed from featureFlagsContext

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

	const featureManager = new FeatureManager(data);

	var apiEndpoint = GetAppSettings().userApiUrl; 
	const [staticUser, setUser] = useState({
		user: 'john',
		userData: new UserModel(),
		isTokenExchangeComplete: false
	});
	
    const getUserByAuthZeroToken = () => {

		const { isAuthenticated } = useAuth0();
		const { getAccessTokenSilently } = useAuth0();

		if(isAuthenticated){
			getAccessTokenSilently().then(token => {

				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: token
				};
	
				fetch(`${apiEndpoint}api/user/exchangeToken`, requestOptions)
					.then(response => response.json())
					.then(json => {
						var clonedUser = {
							user: 'john',
							userData: new UserModel(staticUser.userData),
							isTokenExchangeComplete: true
						};
						clonedUser.userData.surname = json.surname;
						clonedUser.userData.name = json.name;
						clonedUser.userData.email = json.email;
						setUser(clonedUser);
					});
			});
		}

    }

	const getUserFromDummyData = () => {
		var clonedUser = {
			user: 'john',
			userData: getUserDataWithUsername('john'),
			isTokenExchangeComplete: true
		};
		setUser(clonedUser);
	};

	if(staticUser.isTokenExchangeComplete == false){
		if(featureManager.isFeatureActive('Users', 'ExchangeToken')){
			getUserByAuthZeroToken();
		}else{
			getUserFromDummyData();
		}
	}

	useEffect(() => {

     }, [staticUser]);

	return <AuthContext.Provider value={staticUser}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
