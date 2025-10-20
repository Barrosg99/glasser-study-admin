import {
  BooleanField,
  DataTable,
  DateField,
  EmailField,
  List,
} from "react-admin";

export const UserList = () => (
  <List>
    <DataTable bulkActionButtons={false}>
      <DataTable.Col source="id" label="ID" />
      <DataTable.Col source="name" label="Nome" />
      <DataTable.Col source="email">
        <EmailField source="email" label="Email" />
      </DataTable.Col>
      <DataTable.Col source="goal" label="Objetivo" />
      <DataTable.Col source="isAdmin" label="Admin">
        <BooleanField source="isAdmin" />
      </DataTable.Col>
      <DataTable.Col source="createdAt" label="Criado em">
        <DateField source="createdAt" />
      </DataTable.Col>
      <DataTable.Col source="updatedAt" label="Atualizado em">
        <DateField source="updatedAt" />
      </DataTable.Col>
    </DataTable>
  </List>
);
