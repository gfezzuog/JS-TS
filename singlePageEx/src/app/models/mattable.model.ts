export interface DisplayedColumn<T> {
    property: string
    label: string
    content: (row: T) => string | number
    isAction?: boolean
}

export interface ActionTable<T>{
    classes: string
    onClick: (element: T, index: number) => void
    onShow?: (val : T)=> boolean
}