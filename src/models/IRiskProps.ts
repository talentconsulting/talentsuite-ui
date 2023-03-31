import { IStatus } from './enums/enumStatus';

export interface IRiskProps {
    id: string;
    reportId: string;
    riskDetails: string;
    riskMitigation: string;
    ragStatus: IStatus;
}