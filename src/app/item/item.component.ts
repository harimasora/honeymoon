import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() buyItemTapped = new EventEmitter<{
    id: string;
    newStock: number;
  }>();

  available: boolean = false;

  constructor() {}

  buy() {
    let newStock = this.item.stock - 1;
    this.buyItemTapped.emit({
      id: this.item.id,
      newStock,
    });
  }

  ngOnInit(): void {
    this.available = this.item.stock > 0;
  }
}
