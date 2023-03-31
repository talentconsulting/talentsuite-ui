import COLORS from '../../../common/data/enumColors';
import { TColor } from '../../../type/color-type';

export interface IStatus {
	[key: string]: { name: string; color: TColor };
}
const PROJECT_STATUS: IStatus = {
	APPROVED: { name: 'Green', color: COLORS.SUCCESS.name },
	AT_RISK: { name: 'Amber', color: COLORS.WARNING.name },
	BEHIND: { name: 'Red', color: COLORS.DANGER.name },
	CLOSED: { name: 'Closed', color: COLORS.DARK.name },
};
export default PROJECT_STATUS;
