import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  Query,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  private collectionRef = collection(this.firestore, 'items');

  item$: Observable<Item[]>;

  updateStatus(event: { id: string; newStock: number }) {
    const { id, newStock } = event;
    const docRef = doc(this.firestore, this.collectionRef.path, id);
    updateDoc(docRef, { stock: newStock });
  }

  constructor(private firestore: Firestore) {
    this.item$ = collectionData(this.collectionRef as Query<Item>, {
      idField: 'id',
    });
  }

  ngOnInit(): void {}
}
