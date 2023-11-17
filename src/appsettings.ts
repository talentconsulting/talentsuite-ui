import * as appSettings from './appsettings.json';

export interface IAppSettings{
    ReportsApiUrl:string;
    ProjectsApiUrl:string;
    domain:string;
    clientId:string;
    audience:string | null;
}

export function GetAppSettings(): IAppSettings {
    return appSettings as IAppSettings;
}