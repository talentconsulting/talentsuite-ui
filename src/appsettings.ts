import * as appSettings from './appsettings.json';

export interface iAppSettings{
    ReportsApiUrl:string;
}

export function GetAppSettings(): iAppSettings {
    return appSettings as iAppSettings;
}