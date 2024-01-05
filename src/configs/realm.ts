import Realm from 'realm';

import {UserSchema} from '~/utils';

const PATH = 'pantore.realm';

const databaseOptions = {
  path: PATH,
  schema: [UserSchema],
};

const realm = new Realm(databaseOptions);

export default realm;
