// 'use strict';

export const UserSchema = {
  name: 'User',
  properties: {
    name: 'string'
  }
};

export type IUser = typeof UserSchema.properties;
