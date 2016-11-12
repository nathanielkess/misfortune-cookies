import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';


export interface Fortune {
  id: string;
  text: string;
}

export interface FortuneStore {
  fortunes: Fortune[]
}

@Injectable()
export class FortuneService {

  fortunes: Observable<Array<Fortune>>

  constructor(private store: Store<FortuneStore>) {
    this.fortunes = store.select('fortunes');
  }

  loadFortunes(){
    let initialItems: Fortune[] = [
      { id: '1', text:'You will have a great party.' },
      { id: '2', text:'You will build a boat.' },
      { id: '3', text:'Things are looking up.' }
    ];

    this.store.dispatch({type: 'ADD_ITEMS', payload:initialItems});
  }

  saveItem(item: Fortune) {
    (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Fortune) {
    this.store.dispatch({ type: 'CREATE_ITEM', payload: this.addUUID(item) });
  }

  updateItem(item: Fortune) {
    this.store.dispatch({ type: 'UPDATE_ITEM', payload: item });
  }

  deleteItem(item: Fortune) {
    this.store.dispatch({ type: 'DELETE_ITEM', payload: item });
  }

  // NOTE: Utility functions to simulate server generated IDs
  private addUUID(item: Fortune): Fortune {
    return Object.assign({}, item, {id: this.generateUUID()}); // Avoiding state mutation FTW!
  }

  private generateUUID(): string {
    return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
      .replace(/1|0/g, function() {
        return (0 | Math.random() * 16).toString(16);
      });
  };

}
