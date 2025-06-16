import { ObjectSchema } from 'realm';

export const TaskSchema: ObjectSchema = {
  name: 'Task',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    text: 'string',
    category: 'string',
    done: { type: 'bool', default: false },
    createdAt: 'date',
  },
};
