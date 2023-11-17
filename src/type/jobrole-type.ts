import { ISelectItem } from '../components/bootstrap/forms/Select';

export type TJobRole =
	| 'NotSet'
	| 'Developer'
	| 'BusinessAnalyst'
	| 'DeliveryManager'
	| 'Tester'
	| 'Architect'
	| 'DevOps';

const JobRoleTypes: ISelectItem[] = [
	{'value': 'NotSet', 'text': 'NotSet'},
	{'value': 'Developer', 'text': 'Developer'},
	{'value': 'BusinessAnalyst', 'text': 'BusinessAnalyst'},
	{'value': 'DeliveryManager', 'text': 'DeliveryManager'},
	{'value': 'Tester', 'text': 'Tester'},
	{'value': 'Architect', 'text': 'Architect'},
	{'value': 'DevOps', 'text': 'DevOps'}
];

export default JobRoleTypes;