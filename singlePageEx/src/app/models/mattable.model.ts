export interface DisplayedColumn<T> {
    property: string
    label: string
    content: (row: T) => string | number
    isAction?: boolean // bottoni o azioni personalizzate
}

export interface ActionTable<T>{
    classes: string

    onClick: (val: T) => void
}