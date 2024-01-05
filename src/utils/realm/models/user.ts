export const UserSchema = {
  name: 'user',
  properties: {
    name: 'string',
  },
};

export type IUser = typeof UserSchema.properties;
