import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FilmDetails, FilmForkTableRow } from '../models/filmfork.model';
import { ActionTable, DisplayedColumn } from '../models/mattable.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent<T = any> implements OnInit {

  @Input() dataSource: MatTableDataSource<T> | T[] = []
  @Input() displayedColumns: DisplayedColumn<T>[] = []
  rowDef: string[] = []
  @Input() actions: ActionTable<T>[] = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Calcola l'ordine delle colonne direttamente dalla configurazione generica
    this.rowDef = this.displayedColumns.map((column) => column.property)
  }

  navTo(route: any[], specific : string = ""): void {
    this.router.navigate(route)
  }

}
