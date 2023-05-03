import React, { createContext, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import data from '../common/data/dummyFeatureFlagsData';

export interface IFeature {
	featureFlags: IFeatureManager;
	
}
const FeatureFlagsContext = createContext<IFeature>({} as IFeature);

interface IFeatureFlagsContextProviderProps {
	children: ReactNode;
}

export interface IFeatureManager {
	featureFlags: IFeatureFlagGroup[];
	isFeatureActive(group:string, flag: string): boolean;
}

export class FeatureManager implements IFeatureManager{
	featureFlags: IFeatureFlagGroup[];

	constructor(featureFlags: IFeatureFlagGroup[]){
		this.featureFlags = featureFlags;
	}

	isFeatureActive(group:string, flag: string): boolean{

		var flagGroup = this.featureFlags.find(x=>x.groupName == group);

		if(flagGroup == undefined){
			return false; // If group doesn't exist default feature to inactive
		}

		var featureFlag = flagGroup.flags.find(x=>x.flagName == flag);

		if(featureFlag == undefined){
			return false; // If featureFlag doesn't exist default feature to inactive
		}

		return featureFlag.isActive;
	}
}

export interface IFeatureFlagGroup {
	groupName: string;
	description: string; // Optional
	flags: IFeatureFlag[];
}

export interface IFeatureFlag {
	flagName: string;
	isActive: boolean;
}

export const FeatureFlagsContextProvider: FC<IFeatureFlagsContextProviderProps> = ({ children }) => {

	var featureFlagGroups = data;
	const value = { 'featureFlags':new FeatureManager(featureFlagGroups) };

	return <FeatureFlagsContext.Provider value={ value}>{children}</FeatureFlagsContext.Provider>;
};
FeatureFlagsContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FeatureFlagsContext;
