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
import SERVICES from './serviceDummyData';

import User7Landing from '../../assets/img/wanna/landing1.png';
import { TColor } from '../../type/color-type';
import { IUserModel, ISkillModel } from '../../models/ui-models/IUserModel';

const john: IUserModel = {
	id: 'b8b675f9-f10b-4112-9027-84af190dbea4',
	username: 'john',
	name: 'John',
	surname: 'Doe',
	position: 'CEO, Founder',
	email: 'john@omtanke.studio',
	src: UserImage,
	srcSet: UserImageWebp,
	isOnline: true,
	isReply: true,
	color: 'primary',
	services: [SERVICES.SURFING, SERVICES.KITE_SURFING, SERVICES.TENNIS],
	password: '@ABC123',
};

const grace: IUserModel = {
	id: '161ff923-0a91-450e-8051-dbf67302e456',
	username: 'grace',
	name: 'Grace',
	surname: 'Buckland',
	position: 'Staff',
	email: 'grace@omtanke.studio',
	src: UserImage2,
	srcSet: UserImage2Webp,
	isOnline: true,
	color: 'warning',
	services: [SERVICES.SNOWBOARDING, SERVICES.ICE_SKATING, SERVICES.KITE_SURFING],
	password: '@ABC123',
};

const jane: IUserModel = {
	id: '3',
	username: 'jane',
	name: 'Jane',
	surname: 'Lee',
	position: 'Staff',
	email: 'jane@omtanke.studio',
	src: UserImage3,
	srcSet: UserImage3Webp,
	isOnline: true,
	color: 'secondary',
	services: [SERVICES.YOGA, SERVICES.HANDBALL, SERVICES.CRICKET],
	password: '@ABC123',
};

const ryan: IUserModel = {
	id: '4',
	username: 'ryan',
	name: 'Ryan',
	surname: 'McGrath',
	position: 'Worker',
	email: 'ryan@omtanke.studio',
	src: UserImage4,
	srcSet: UserImage4Webp,
	isOnline: false,
	color: 'info',
	services: [SERVICES.HIKING, SERVICES.FOOTBALL, SERVICES.HANDBALL],
	password: '@ABC123',
};

const ella: IUserModel = {
	id: '5',
	username: 'ella',
	name: 'Ella',
	surname: 'Oliver',
	position: 'Worker',
	email: 'ella@omtanke.studio',
	src: UserImage5,
	srcSet: UserImage5Webp,
	isOnline: false,
	color: 'success',
	services: [SERVICES.ICE_SKATING, SERVICES.TENNIS, SERVICES.SNOWBOARDING, SERVICES.YOGA],
	password: '@ABC123',
};

const chloe: IUserModel = {
	id: '6',
	username: 'chloe',
	name: 'Chloe',
	surname: 'Walker',
	position: 'Staff',
	email: 'chloe@omtanke.studio',
	src: UserImage6,
	srcSet: UserImage6Webp,
	isOnline: true,
	color: 'warning',
	services: [SERVICES.VOLLEYBALL, SERVICES.CRICKET],
	password: '@ABC123',
};

const sam: IUserModel = {
	id: '7',
	username: 'sam',
	name: 'Sam',
	surname: 'Roberts',
	position: 'Worker',
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
