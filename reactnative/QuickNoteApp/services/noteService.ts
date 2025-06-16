import Realm from 'realm';
import { Category, Note } from '../types';

class NoteSchema extends Realm.Object<Note> implements Note {
  _id!: number;
  text!: string;
  category!: Category;

  static schema: Realm.ObjectSchema = {
    name: 'Note',
    primaryKey: '_id',
    properties: {
      _id: 'int',
      text: 'string',
      category: 'string',
    },
  };
}

export class NoteService {
  private realm: Realm;

  constructor() {
    this.realm = new Realm({ schema: [NoteSchema] });
  }

  getAllNotes(): Note[] {
    return Array.from(this.realm.objects<Note>('Note'));
  }

  addNote(note: Omit<Note, '_id'>): void {
    const nextId = this.getNextId();
    this.realm.write(() => {
      this.realm.create('Note', {
        _id: nextId,
        ...note,
      });
    });
  }

  private getNextId(): number {
    const notes = this.realm.objects<Note>('Note');
    return notes.length > 0 ? notes.sorted('_id', true)[0]._id + 1 : 1;
  }

  close(): void {
    this.realm.close();
  }
}