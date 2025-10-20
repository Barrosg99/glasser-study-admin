import { RedirectField } from "@/components/generics";
import {
  Edit,
  Labeled,
  SimpleForm,
  TextField,
  DataTable,
  ArrayField,
  BooleanField,
  DateField,
  Toolbar,
  SaveButton,
  DeleteButton,
  Button,
  Link,
} from "react-admin";
import { useParams } from "react-router-dom";

const ChatToolbar = () => {
  const { id: chatId } = useParams();
  return (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <SaveButton />
        <Button
          component={Link}
          to={`/chats/${chatId}/messages?perPage=25`}
          sx={{
            color: "white",
            backgroundColor: "secondary.main",
            padding: "6px 16px",
            marginLeft: "10px",
          }}
        >
          Ver Mensagens
        </Button>
      </div>
      <DeleteButton disabled={true} />
    </Toolbar>
  );
};

export const ChatEdit = () => (
  <Edit>
    <SimpleForm toolbar={<ChatToolbar />}>
      <Labeled label="ID">
        <TextField source="id" />
      </Labeled>
      <Labeled label="Nome">
        <TextField source="name" />
      </Labeled>
      <Labeled label="Descrição">
        <TextField source="description" />
      </Labeled>
      <Labeled label="Membros">
        <ArrayField source="members">
          <DataTable bulkActionButtons={false}>
            <DataTable.Col label="Nome">
              <RedirectField source="user" resource="users" />
            </DataTable.Col>
            <DataTable.Col label="Convite">
              <BooleanField source="isInvited" />
            </DataTable.Col>
            <DataTable.Col label="Moderador">
              <BooleanField source="isModerator" />
            </DataTable.Col>
          </DataTable>
        </ArrayField>
      </Labeled>
      <Labeled label="Criado em">
        <DateField source="createdAt" />
      </Labeled>
      <Labeled label="Atualizado em">
        <DateField source="updatedAt" />
      </Labeled>
    </SimpleForm>
  </Edit>
);
