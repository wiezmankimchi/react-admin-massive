import React from 'react'
import { List, Datagrid, TextField, EmailField, UrlField} from 'react-admin'

export default function TableList(props) {
    return (
        <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="table" />
        </Datagrid>
    </List>
    )
}
 