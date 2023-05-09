import COLORS from '../../../common/data/enumColors';
import { TColor } from '../../../type/color-type';

export interface IStatus {
	[key: string]: { name: string; color: TColor };
}
const RAG_STATUS: IStatus = {
	APPROVED: { name: 'Green', color: COLORS.SUCCESS.name },
	AT_RISK: { name: 'Amber', color: COLORS.WARNING.name },
	BEHIND: { name: 'Red', color: COLORS.DANGER.name },
	CLOSED: { name: 'Closed', color: COLORS.DARK.name },
	UNKNOWN: { name: 'Unknown', color: COLORS.GREY.name },
};


export const parseStatus = (key:string) => {
	if(RAG_STATUS[key] == undefined){
		return RAG_STATUS.UNKNOWN;
	}

	return RAG_STATUS[key];
};


export default RAG_STATUS;
