import {userType} from './types';

export type TSubMenu = {
  title: string,
  url: string,
  active?: boolean
}

export type TMenu = {
  title: string;
  url: string;
  active?: boolean,
  submenu?: TSubMenu[]
}

export type TAdminHeader = {
  logo?: string,
  bgColor: string,
  user: userType,
  onMenuClick: (url: string) => void,
  menu: TMenu[],
  historyUrl?:string,
  settingsUrl?: string
}
