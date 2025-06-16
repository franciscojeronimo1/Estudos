import Realm from 'realm';
import { TaskSchema } from './TaskSchema';

export const getRealm = () => {
  return Realm.open({ schema: [TaskSchema] });
};
