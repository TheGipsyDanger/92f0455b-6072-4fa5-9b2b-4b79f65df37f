import Realm from 'realm';
import {UserSchema} from '~/utils/realm/models/user';
import {PermissionsSchema} from '~/utils/realm/models/permissions';

const realm = new Realm({
  path: 'pantore.realm',
  schema: [UserSchema, PermissionsSchema],
  deleteRealmIfMigrationNeeded: true,
});

export default realm;
