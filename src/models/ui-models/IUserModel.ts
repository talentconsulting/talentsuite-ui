import { TColor } from '../../type/color-type';

// These 2 imports set a default appearence for the user image, we may want a different way of doing this that returns a photo
import UserImage from '../../assets/img/wanna/wanna1.png';
import UserImageWebp from '../../assets/img/wanna/wanna1.webp';
import { TJobRole } from '../../type/jobrole-type';

export class UserModel implements IUserModel {
	id: string = '';
	username: string= '';
	name: string= '';
	surname: string= '';
	jobRole: TJobRole = 'NotSet';
	email?: string= '';
	src: string= UserImage;
	srcSet: string= UserImageWebp;
	isOnline: boolean = false;
	isReply?: boolean = false;
	color: TColor = 'grey';
	fullImage?: string = '';
	skills?: ISkillModel[] = [];
	password: string = '';

	constructor(cloneModel:IUserModel | undefined = undefined){
        this.id = (cloneModel == undefined) ? '' : cloneModel.id;
		this.username = (cloneModel == undefined) ? '' : cloneModel.username;
		this.name = (cloneModel == undefined) ? '' : cloneModel.name;
		this.surname = (cloneModel == undefined) ? '' : cloneModel.surname;
		this.jobRole = (cloneModel == undefined) ? 'NotSet' : cloneModel.jobRole;
		this.email = (cloneModel == undefined) ? '' : cloneModel.email;
		this.src = (cloneModel == undefined) ? UserImage : cloneModel.src;
		this.srcSet = (cloneModel == undefined) ? UserImageWebp : cloneModel.srcSet;
		this.isOnline = (cloneModel == undefined) ? false : cloneModel.isOnline;
		this.isReply = (cloneModel == undefined) ? false : cloneModel.isReply;
		this.color = (cloneModel == undefined) ? 'grey' : cloneModel.color;
		this.fullImage = (cloneModel == undefined) ? '' : cloneModel.fullImage;
		this.skills = (cloneModel == undefined) ? [] : cloneModel.skills;
		this.password = (cloneModel == undefined) ? '' : cloneModel.password;
    }
}

export interface IUserModel {
	id: string;
	username: string;
	name: string;
	surname: string;
	jobRole: TJobRole;
	email?: string;
	src: string;
	srcSet: string;
	isOnline: boolean;
	isReply?: boolean;
	color: TColor;
	fullImage?: string;
	skills?: ISkillModel[];
	password: string;
}

export interface ISkillModel {
	name: string;
	icon: string;
	color: TColor;
}