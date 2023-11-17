import COLORS from '../../../common/data/enumColors';
import { TColor } from '../../../type/color-type';

export interface IStatus {
	[key: string]: { name: string; color: TColor, value: string, severity: number };
}
const RAG_STATUS: IStatus = {
	APPROVED: { name: 'Green', color: COLORS.SUCCESS.name, value: 'G', severity: 0 },
	AT_RISK: { name: 'Amber', color: COLORS.WARNING.name, value: 'A', severity: 1 },
	BEHIND: { name: 'Red', color: COLORS.DANGER.name, value: 'R', severity: 2 },
	UNKNOWN: { name: 'Unknown', color: COLORS.GREY.name, value: 'U', severity: 3 },
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
