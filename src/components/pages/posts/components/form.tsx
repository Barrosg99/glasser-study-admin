import { RedirectField } from "@/components/generics";
import {
  ArrayField,
  BooleanField,
  DataTable,
  DateField,
  DeleteButton,
  Edit,
  Labeled,
  NumberField,
  SaveButton,
  SimpleForm,
  TextField,
  Toolbar,
  UrlField,
  useNotify,
  useRecordContext,
  useRefresh,
} from "react-admin";

const PostToolbar = () => {
  const record = useRecordContext();
  const refresh = useRefresh();
  const notify = useNotify();

  const onSuccess = () => {
    notify(`Post deleted`);
    refresh();
  };

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
      }}
    >
      {!record?.isDeleted && (
        <DeleteButton
          mutationMode="pessimistic"
          redirect={false}
          mutationOptions={{ onSuccess }}
        />
      )}
    </Toolbar>
  );
};

export const PostEdit = () => (
  <Edit redirect={false}>
    <SimpleForm toolbar={<PostToolbar />}>
      <Labeled label="ID">
        <TextField source="id" />
      </Labeled>
      <Labeled label="Título">
        <TextField source="title" />
      </Labeled>
      <Labeled label="Assunto">
        <TextField source="subject" />
      </Labeled>
      <Labeled label="Descrição">
        <TextField source="description" />
      </Labeled>
      <Labeled label="Tags">
        <TextField source="tags" />
      </Labeled>
      <Labeled label="Materiais">
        <ArrayField source="materials">
          <DataTable bulkActionButtons={false}>
            <DataTable.Col source="name" />
            <DataTable.Col source="link">
              <UrlField source="link" />
            </DataTable.Col>
            <DataTable.Col source="type" />
          </DataTable>
        </ArrayField>
      </Labeled>
      <Labeled label="Autor">
        <RedirectField source="author" resource="users" />
      </Labeled>
      <Labeled label="Número de Likes">
        <NumberField source="likesCount" />
      </Labeled>
      <Labeled label="Número de Comentários">
        <NumberField source="commentsCount" />
      </Labeled>
      <Labeled label="Criado em">
        <DateField source="createdAt" />
      </Labeled>
      <Labeled label="Atualizado em">
        <DateField source="updatedAt" />
      </Labeled>
      <Labeled label="Deletado">
        <BooleanField source="isDeleted" />
      </Labeled>
    </SimpleForm>
  </Edit>
);
