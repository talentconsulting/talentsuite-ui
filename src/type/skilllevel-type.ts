import { ISelectItem } from '../components/bootstrap/forms/Select';

export type TSkillLevel =
	| 'None'
	| 'Intermediate'
	| 'Advanced';

const SkillLevels: ISelectItem[] = [
	{'value': 'None', 'text': 'None'},
	{'value': 'Intermediate', 'text': 'Intermediate'},
	{'value': 'Advanced', 'text': 'Advanced'}
];

export default SkillLevels;