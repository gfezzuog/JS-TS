
export interface DynamicDialogAction {
  label: string;
  class: string;
  value: any; // cosa ritorna al click
}

export interface DynamicDialogData {
  title?: string;
  message?: string;
  payload?: any; // dati generici (row, o letterlalmente qualsiasi altra cosa)
  actions: DynamicDialogAction[];
}
