import COLORS from '../../../common/data/enumColors';
import { TColor } from '../../../type/color-type';

export interface IStatus {
	[key: string]: { name: string; color: TColor, value: string };
}
const RAG_STATUS: IStatus = {
	APPROVED: { name: 'Green', color: COLORS.SUCCESS.name, value: 'G' },
	AT_RISK: { name: 'Amber', color: COLORS.WARNING.name, value: 'A' },
	BEHIND: { name: 'Red', color: COLORS.DANGER.name, value: 'R' },
	UNKNOWN: { name: 'Unknown', color: COLORS.GREY.name, value: 'U' },
};

export const getStatusByValue = (queryValue:string) => {
	for (const statusKey in RAG_STATUS) {
        if (RAG_STATUS.hasOwnProperty(statusKey)) {
            const status = RAG_STATUS[statusKey];
            if (status.value === queryValue) {
                return status;
            }
        }
    }
    return RAG_STATUS.UNKNOWN;
};


export default RAG_STATUS;
