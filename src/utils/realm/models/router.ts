// 'use strict';

export const RouterSchema = {
  name: 'Router',
  properties: {
    initialRouter: 'string',
  },
};

export type IRouter = typeof RouterSchema.properties;
