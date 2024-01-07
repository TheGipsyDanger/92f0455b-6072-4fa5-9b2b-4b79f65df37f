// 'use strict';

export const TaskSchema = {
  name: 'Tasks',
  properties: {
    id: 'string',
    title: 'string',
    description: 'string',
    status: 'string',
    file: 'string'
  }
};

export type ITaskRealm = typeof TaskSchema.properties;
