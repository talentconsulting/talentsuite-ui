import { IFeatureFlagGroup } from '../../contexts/featureFlagsContext';

const data: IFeatureFlagGroup[] = [
    {
		groupName :"ShowPages",
		description : "Tells the UI which pages to display",
		flags : [
            //  The flagName must match the id for the page found in menu.ts
            {flagName:"listProjects", isActive: true},
            {flagName:"listReports", isActive: true},
            {flagName:"listPeople", isActive: true},
            {flagName:"schedule", isActive: true},
            {flagName:"calendar", isActive: true},
            {flagName:"appointmentList", isActive: true},
            {flagName:"wiki", isActive: true},
            {flagName:"auth", isActive: true},
            {flagName:"login", isActive: true},
            {flagName:"signUp", isActive: true}
        ]
	},
	{
		groupName :"Reports",
		description : "FeatureFlags related to Reports",
		flags : [
            {flagName:"UseDummyData", isActive: true}
        ]
	},
	{
		groupName :"Projects",
		description : "FeatureFlags related to Projects",
		flags : [
            {flagName:"UseDummyData", isActive: true}
        ]
	},
	{
		groupName :"Users",
		description : "FeatureFlags related to Users",
		flags : [
            {flagName:"UseDummyData", isActive: true}
        ]
	}
];

export default data;