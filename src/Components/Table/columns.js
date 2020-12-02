 const COLUMNS = [
    {Header:'ID',Footer:'ID',accessor:'id'},
    {Header:'First name',Footer:'First name',accessor:'first_name'},
    {Header:'Last name',Footer:'Last name',accessor:'last_name'},
    {Header:'Email',Footer:'Email',accessor:'email'},
    {Header:'Birth date',Footer:'Birth date',accessor:'date_of_birth'},
    {Header:'Country',Footer:'Country',accessor:'country'},
    {Header:'Phone',Footer:'Phone',accessor:'phone'},
    {Header:'Age',Footer:'Age',accessor:'age'},
]

const groupedColumns = [
    {Header:'ID',Footer:'ID',accessor:'id'},
    {Header:'Name',Footer:'Name',columns:[
        {Header:'First name',Footer:'First name',accessor:'first_name'},
        {Header:'Last name',Footer:'Last name',accessor:'last_name'}
    ]},
    {Header:'Info',Footer:'Info',columns:[
        {Header:'Email',Footer:'Email',accessor:'email'},
        {Header:'Birth date',Footer:'Birth date',accessor:'date_of_birth'},
        {Header:'Country',Footer:'Country',accessor:'country'},
        {Header:'Phone',Footer:'Phone',accessor:'phone'},
        {Header:'Age',Footer:'Age',accessor:'age'},
    ]},
]

export {
    COLUMNS,
    groupedColumns
}