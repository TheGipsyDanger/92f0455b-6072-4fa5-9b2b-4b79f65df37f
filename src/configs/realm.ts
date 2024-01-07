import Realm from 'realm';
import {UserSchema} from '~/utils/realm/models/user';
import {PermissionsSchema} from '~/utils/realm/models/permissions';
import {RouterSchema} from '~/utils/realm/models/router';
import {TaskSchema} from '~/utils/realm/models/task';

const realm = new Realm({
  path: 'pantore.realm',
  schema: [UserSchema, RouterSchema, PermissionsSchema, TaskSchema],
  deleteRealmIfMigrationNeeded: true
});

export default realm;
