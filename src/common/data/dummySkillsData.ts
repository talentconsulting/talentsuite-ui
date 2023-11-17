import { TColor } from '../../type/color-type';
import { ISkillModel } from '../../models/ui-models/IUserModel';

const htmlSkill: ISkillModel = {
	name: 'Html',
	icon: 'Code',
	color: 'info',
};

const javaSkill: ISkillModel = {
	name: 'Java',
	icon: 'Coffee',
	color: 'danger',
};

const androidSkill: ISkillModel = {
	name: 'Android',
	icon: 'Android',
	color: 'success',
};
const azureSkill: ISkillModel = {
	name: 'Azure',
	icon: 'Cloud',
	color: 'info',
};
const architectureSkill: ISkillModel = {
	name: 'Architecture',
	icon: 'Architecture',
	color: 'warning',
};
const kubernetesSkill: ISkillModel = {
	name: 'Kubernetes',
	icon: 'Attractions',
	color: 'info',
};
const cssSkill: ISkillModel = {
	name: 'CSS',
	icon: 'Gradient',
	color: 'warning',
};
const reactSkill: ISkillModel = {
	name: 'React',
	icon: 'Web',
	color: 'warning',
};
const cSharpSkill: ISkillModel = {
	name: 'C#',
	icon: 'Tag',
	color: 'success',
};
const sqlServerSkill: ISkillModel = {
	name: 'SqlServer',
	icon: 'DataExploration',
	color: 'success',
};
const postgresSkill: ISkillModel = {
	name: 'Postgres',
	icon: 'DataExploration',
	color: 'danger',
};
const cosmosDbSkill: ISkillModel = {
	name: 'CosmosDb',
	icon: 'DataExploration',
	color: 'success',
};

const SKILLS: { [key: string]: ISkillModel } = {
	HTML_SKILL: htmlSkill,
	JAVA_SKILL: javaSkill,
	ANDROID_SKILL: androidSkill,
	AZURE_SKILL: azureSkill,
	ARCHITECTURE_SKILL: architectureSkill,
	KUBERNETES_SKILL: kubernetesSkill,
	CSS_SKILL: cssSkill,
	REACT_SKILL: reactSkill,
	C_SHARP_SKILL: cSharpSkill,
	SQL_SERVER_SKILL: sqlServerSkill,
	POSTGRES_SKILL: postgresSkill,
	COSMOS_SKILL: cosmosDbSkill,
};

export function getServiceDataWithServiceName(serviceName: string) {
	return SKILLS[
		// @ts-ignore
		Object.keys(SERVICES).filter((f) => SERVICES[f].name.toString() === serviceName)
	];
}

export default SKILLS;
