// 'use strict';

export const PermissionsSchema = {
  name: 'Permissions',
  properties: {
    granted: 'string',
    status: 'string',
    requested: 'string'
  }
}

export type IPermissions = typeof PermissionsSchema.properties
