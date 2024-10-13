import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Abp_onlinStor',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44321/',
    redirectUri: baseUrl,
    clientId: 'Abp_onlinStor_App',
    responseType: 'code',
    scope: 'offline_access Abp_onlinStor',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44321',
      rootNamespace: 'Abp_onlinStor',
    },
  },
} as Environment;
