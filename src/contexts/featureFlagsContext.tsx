import React, { createContext, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface IFeature {
	featureFlags: Map<string, boolean>;
	
}
const FeatureFlagsContext = createContext<IFeature>({} as IFeature);

interface IFeatureFlagsContextProviderProps {
	children: ReactNode;
}
export const FeatureFlagsContextProvider: FC<IFeatureFlagsContextProviderProps> = ({ children }) => {

	const value = { 
		'featureFlags':new Map<string, boolean>([
			
			["listProjects", true],
			["listPeople", true],
			["schedule", true],
			["calendar", true],
			["appointmentList", true],
			["wiki", true],
			["auth", true],
			["login", true],
			["signUp", true],
		])
	};

	return <FeatureFlagsContext.Provider value={ value}>{children}</FeatureFlagsContext.Provider>;
};
FeatureFlagsContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FeatureFlagsContext;
