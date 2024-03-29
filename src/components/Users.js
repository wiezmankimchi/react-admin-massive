import React from 'react'
import { List, Datagrid, TextField, EmailField, UrlField} from 'react-admin'

export default function UserList(props) {
    return (
        <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
    )
}
