const row = "row"
const column = "column"
const rowReverse = "row-reverse"
const columnReverse = "column-reverse"

export type IFlexDirection =
    {
        direction:
            typeof row |
            typeof column |
            typeof rowReverse |
            typeof columnReverse |
            typeof undefined
    }
