import UserImage from '../../assets/img/wanna/wanna1.png';
import UserImageWebp from '../../assets/img/wanna/wanna1.webp';
import UserImage2 from '../../assets/img/wanna/wanna2.png';
import UserImage2Webp from '../../assets/img/wanna/wanna2.webp';
import UserImage3 from '../../assets/img/wanna/wanna3.png';
import UserImage3Webp from '../../assets/img/wanna/wanna3.webp';
import UserImage4 from '../../assets/img/wanna/wanna4.png';
import UserImage4Webp from '../../assets/img/wanna/wanna4.webp';
import UserImage5 from '../../assets/img/wanna/wanna5.png';
import UserImage5Webp from '../../assets/img/wanna/wanna5.webp';
import UserImage6 from '../../assets/img/wanna/wanna6.png';
import UserImage6Webp from '../../assets/img/wanna/wanna6.webp';
import UserImage7 from '../../assets/img/wanna/wanna7.png';
import UserImage7Webp from '../../assets/img/wanna/wanna7.webp';
import SKILLS from './dummySkillsData';

import User7Landing from '../../assets/img/wanna/landing1.png';
import { TColor } from '../../type/color-type';
import { IUserModel, ISkillModel } from '../../models/ui-models/IUserModel';

const john: IUserModel = {
	id: '93e0f88c-691f-4373-8abf-3f895bddec60',
	username: 'john',
	name: 'John',
	surname: 'Doe',
	jobRole: 'Architect',
	email: 'john@omtanke.studio',
	src: UserImage,
	srcSet: UserImageWebp,
	isOnline: true,
	isReply: true,
	color: 'primary',
	skills: [SKILLS.HTML_SKILL, SKILLS.JAVA_SKILL, SKILLS.ANDROID_SKILL],
	password: '@ABC123',
};

const grace: IUserModel = {
	id: '161ff923-0a91-450e-8051-dbf67302e456',
	username: 'grace',
	name: 'Grace',
	surname: 'Buckland',
	jobRole: 'Developer',
	email: 'grace@omtanke.studio',
	src: UserImage2,
	srcSet: UserImage2Webp,
	isOnline: true,
	color: 'warning',
	skills: [SKILLS.CSS_SKILL, SKILLS.KUBERNETES_SKILL, SKILLS.JAVA_SKILL],
	password: '@ABC123',
};

const jane: IUserModel = {
	id: '83c756a8-ff87-48be-a862-096678b41817',
	username: 'jane',
	name: 'Jane',
	surname: 'Lee',
	jobRole: 'Developer',
	email: 'jane@omtanke.studio',
	src: UserImage3,
	srcSet: UserImage3Webp,
	isOnline: true,
	color: 'secondary',
	skills: [SKILLS.SQL_SERVER_SKILL, SKILLS.ARCHITECTURE_SKILL, SKILLS.C_SHARP_SKILL],
	password: '@ABC123',
};

const ryan: IUserModel = {
	id: '8ed672f0-5146-4ecc-89a0-6a36c1f5db71',
	username: 'ryan',
	name: 'Ryan',
	surname: 'McGrath',
	jobRole: 'BusinessAnalyst',
	email: 'ryan@omtanke.studio',
	src: UserImage4,
	srcSet: UserImage4Webp,
	isOnline: false,
	color: 'info',
	skills: [SKILLS.POSTGRES_SKILL, SKILLS.COSMOS_SKILL, SKILLS.ARCHITECTURE_SKILL],
	password: '@ABC123',
};

const ella: IUserModel = {
	id: 'b8b675f9-f10b-4112-9027-84af190dbea4',
	username: 'ella',
	name: 'Ella',
	surname: 'Oliver',
	jobRole: 'DeliveryManager',
	email: 'ella@omtanke.studio',
	src: UserImage5,
	srcSet: UserImage5Webp,
	isOnline: false,
	color: 'success',
	skills: [SKILLS.KUBERNETES_SKILL, SKILLS.ANDROID_SKILL, SKILLS.CSS_SKILL, SKILLS.SQL_SERVER_SKILL],
	password: '@ABC123',
};

const chloe: IUserModel = {
	id: '6',
	username: 'chloe',
	name: 'Chloe',
	surname: 'Walker',
	jobRole: 'Tester',
	email: 'chloe@omtanke.studio',
	src: UserImage6,
	srcSet: UserImage6Webp,
	isOnline: true,
	color: 'warning',
	skills: [SKILLS.REACT_SKILL, SKILLS.C_SHARP_SKILL],
	password: '@ABC123',
};

const sam: IUserModel = {
	id: '7',
	username: 'sam',
	name: 'Sam',
	surname: 'Roberts',
	jobRole: 'DevOps',
	email: 'sam@omtanke.studio',
	src: UserImage7,
	srcSet: UserImage7Webp,
	isOnline: false,
	color: 'danger',
	fullImage: User7Landing,
	password: '@ABC123',
};

const USERS: { [key: string]: IUserModel } = {
	JOHN: john,
	GRACE: grace,
	JANE: jane,
	RYAN: ryan,
	ELLA: ella,
	CHLOE: chloe,
	SAM: sam,
};

export const data: IUserModel[] = [
	john,
	grace,
	jane,
	ryan,
	ella,
	chloe,
	sam,
];

export function getUserDataWithUsername(username: string): IUserModel {
	// @ts-ignore
	return USERS[Object.keys(USERS).filter((f) => USERS[f].username.toString() === username)];
}

export function getUserDataWithId(id?: string): IUserModel {
	// @ts-ignore
	return USERS[Object.keys(USERS).filter((f) => USERS[f].id.toString() === id.toString())];
}

export default USERS;
