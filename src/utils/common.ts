import { getConfig } from '../config';

export const apiVersion = { apiVersion: '2022-03-07' };

export const settingType = getConfig()?.defineQueryTypes?.settingType || 'globalSetting';
