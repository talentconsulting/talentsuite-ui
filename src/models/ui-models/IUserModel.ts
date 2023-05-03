import { TColor } from '../../type/color-type';

export interface IUserModel {
	id: string;
	username: string;
	name: string;
	surname: string;
	position: string;
	email?: string;
	src: string;
	srcSet: string;
	isOnline: boolean;
	isReply?: boolean;
	color: TColor;
	fullImage?: string;
	services?: ISkillModel[];
	password: string;
}

export interface ISkillModel {
	name: string;
	icon: string;
	color: TColor;
}