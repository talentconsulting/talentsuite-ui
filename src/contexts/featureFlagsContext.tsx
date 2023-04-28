import React, { createContext, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

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

	//  The string must match the id for the page found in menu.ts
	var showPagesFlags: IFeatureFlagGroup = {
		groupName :"ShowPages",
		description : "Tells the UI which pages to display",
		flags : []
	}
	showPagesFlags.flags.push({flagName:"listProjects", isActive: true});
	showPagesFlags.flags.push({flagName:"listReports", isActive: true});
	showPagesFlags.flags.push({flagName:"listPeople", isActive: true});
	showPagesFlags.flags.push({flagName:"schedule", isActive: true});
	showPagesFlags.flags.push({flagName:"calendar", isActive: true});
	showPagesFlags.flags.push({flagName:"appointmentList", isActive: true});
	showPagesFlags.flags.push({flagName:"wiki", isActive: true});
	showPagesFlags.flags.push({flagName:"auth", isActive: true});
	showPagesFlags.flags.push({flagName:"login", isActive: true});
	showPagesFlags.flags.push({flagName:"signUp", isActive: true});

	//  Reports FeatureFlags
	var reportsFlags: IFeatureFlagGroup = {
		groupName :"Reports",
		description : "FeatureFlags related to Reports",
		flags : []
	}
	reportsFlags.flags.push({flagName:"UseDummyData", isActive: true});

	//  Projects FeatureFlags
	var projectsFlags: IFeatureFlagGroup = {
		groupName :"Projects",
		description : "FeatureFlags related to Projects",
		flags : []
	}
	projectsFlags.flags.push({flagName:"UseDummyData", isActive: true});

	const featureFlagGroups : IFeatureFlagGroup[] = [];
	featureFlagGroups.push(showPagesFlags);
	featureFlagGroups.push(reportsFlags);
	featureFlagGroups.push(projectsFlags);

	const value = { 'featureFlags':new FeatureManager(featureFlagGroups) };

	return <FeatureFlagsContext.Provider value={ value}>{children}</FeatureFlagsContext.Provider>;
};
FeatureFlagsContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FeatureFlagsContext;
