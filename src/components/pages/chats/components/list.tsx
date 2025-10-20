import {
  DataTable,
  DateField,
  List,
} from "react-admin";

export const ChatList = () => (
  <List>
    <DataTable bulkActionButtons={false}>
      <DataTable.Col source="id" label="ID" />
      <DataTable.Col source="name" label="Nome" />
      <DataTable.Col source="description" label="Descrição" />
      <DataTable.Col source="createdAt" label="Criado em">
        <DateField source="createdAt" />
      </DataTable.Col>
      <DataTable.Col source="updatedAt" label="Atualizado em">
        <DateField source="updatedAt" />
      </DataTable.Col>
    </DataTable>
  </List>
);
