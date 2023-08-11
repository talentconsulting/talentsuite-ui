import * as appSettings from './appsettings.json';

export interface iAppSettings{
    ReportsApiUrl:string;
    domain:string;
    clientId:string;
    audience:string | null;
}

export function GetAppSettings(): iAppSettings {
    return appSettings as iAppSettings;
}