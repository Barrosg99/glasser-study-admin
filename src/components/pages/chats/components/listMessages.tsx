import { RedirectField } from "@/components/generics";
import { DataTable, DateField, List, TextInput } from "react-admin";
import { useParams } from "react-router-dom";

const MessageFilters = [
  <TextInput source="messageId" label="ID da Mensagem" key="messageId" />,
];
export const MessageList = () => {
  const { chatId } = useParams();

  return (
    <List
      resource="messages"
      filters={MessageFilters}
      filter={{ chatId }}
      perPage={25}
    >
      <DataTable bulkActionButtons={false}>
        <DataTable.Col label="Nome">
          <RedirectField source="sender" resource="users" />
        </DataTable.Col>
        <DataTable.Col source="content" label="Conteúdo" />
        <DataTable.Col source="createdAt" label="Criado em">
          <DateField showTime source="createdAt" />
        </DataTable.Col>
      </DataTable>
    </List>
  );
};
