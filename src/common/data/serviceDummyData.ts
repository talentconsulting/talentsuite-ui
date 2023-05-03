import { TColor } from '../../type/color-type';
import { ISkillModel } from '../../models/ui-models/IUserModel';

const surfing: ISkillModel = {
	name: 'Surfing',
	icon: 'Surfing',
	color: 'info',
};
const kiteSurfing: ISkillModel = {
	name: 'Kite Surfing',
	icon: 'Kitesurfing',
	color: 'danger',
};
const tennis: ISkillModel = {
	name: 'Tennis',
	icon: 'SportsTennis',
	color: 'success',
};
const kayaking: ISkillModel = {
	name: 'Kayaking',
	icon: 'Kayaking',
	color: 'info',
};
const handball: ISkillModel = {
	name: 'Handball',
	icon: 'SportsHandball',
	color: 'warning',
};
const iceSkating: ISkillModel = {
	name: 'Ice Skating',
	icon: 'IceSkating',
	color: 'info',
};
const snowboarding: ISkillModel = {
	name: 'Snowboarding',
	icon: 'Snowboarding',
	color: 'warning',
};
const volleyball: ISkillModel = {
	name: 'Volleyball',
	icon: 'SportsVolleyball',
	color: 'warning',
};
const cricket: ISkillModel = {
	name: 'Cricket',
	icon: 'SportsCricket',
	color: 'success',
};
const yoga: ISkillModel = {
	name: 'Yoga',
	icon: 'SelfImprovement',
	color: 'success',
};
const hiking: ISkillModel = {
	name: 'Hiking',
	icon: 'Hiking',
	color: 'danger',
};
const football: ISkillModel = {
	name: 'Football',
	icon: 'SportsFootball',
	color: 'success',
};

const SERVICES: { [key: string]: ISkillModel } = {
	SURFING: surfing,
	KITE_SURFING: kiteSurfing,
	TENNIS: tennis,
	KAYAKING: kayaking,
	HANDBALL: handball,
	ICE_SKATING: iceSkating,
	SNOWBOARDING: snowboarding,
	VOLLEYBALL: volleyball,
	CRICKET: cricket,
	YOGA: yoga,
	HIKING: hiking,
	FOOTBALL: football,
};

export function getServiceDataWithServiceName(serviceName: string) {
	return SERVICES[
		// @ts-ignore
		Object.keys(SERVICES).filter((f) => SERVICES[f].name.toString() === serviceName)
	];
}

export default SERVICES;
