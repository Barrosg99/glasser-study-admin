import { BooleanField, DataTable, DateField, List } from "react-admin";

export const PostList = () => (
  <List>
    <DataTable bulkActionButtons={false}>
      <DataTable.Col source="id" label="ID" />
      <DataTable.Col source="title" label="Título" />
      <DataTable.Col source="subject" label="Assunto" />
      <DataTable.Col source="description" label="Descrição" />
      <DataTable.Col source="tags" label="Tags" />
      <DataTable.Col source="author.name" />
      <DataTable.NumberCol source="likesCount" />
      <DataTable.NumberCol source="commentsCount" />
      <DataTable.Col source="isDeleted" label="Removido">
        <BooleanField source="isDeleted" />
      </DataTable.Col>
      <DataTable.Col source="createdAt">
        <DateField source="createdAt" />
      </DataTable.Col>
      <DataTable.Col source="updatedAt">
        <DateField source="updatedAt" />
      </DataTable.Col>
    </DataTable>
  </List>
);
