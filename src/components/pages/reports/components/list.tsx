import {
  DataTable,
  DateField,
  List,
  SelectInput,
  TextInput,
} from "react-admin";

const filters = [
  <SelectInput
    key="status"
    source="status"
    choices={[
      { id: "pending", name: "Pendente" },
      { id: "resolved", name: "Resolvido" },
      { id: "rejected", name: "Rejeitado" },
    ]}
  />,
  <SelectInput
    key="entity"
    source="entity"
    choices={[
      { id: "message", name: "Mensagem" },
      { id: "post", name: "Post" },
    ]}
  />,
  <TextInput key="reason" source="reason" label="Motivo" />,
];

export const ReportList = () => (
  <List filters={filters}>
    <DataTable bulkActionButtons={false}>
      <DataTable.Col source="id" />
      <DataTable.Col source="entity" />
      <DataTable.Col source="entityId" />
      <DataTable.Col source="reason" label="Motivo" />
      <DataTable.Col source="status" label="Status" />
      <DataTable.Col source="createdAt" label="Criado em">
        <DateField source="createdAt" />
      </DataTable.Col>
      <DataTable.Col source="updatedAt" label="Atualizado em">
        <DateField source="updatedAt" />
      </DataTable.Col>
    </DataTable>
  </List>
);
