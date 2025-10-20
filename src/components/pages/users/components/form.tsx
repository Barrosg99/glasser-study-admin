import {
  BooleanInput,
  DateField,
  DeleteButton,
  Edit,
  EmailField,
  Labeled,
  SaveButton,
  SimpleForm,
  TextField,
  Toolbar,
} from "react-admin";

const UserToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
    <DeleteButton disabled={true} />
  </Toolbar>
);

export const UserEdit = () => (
  <Edit redirect={false}>
    <SimpleForm toolbar={<UserToolbar />}>
      <Labeled source="id" label="ID">
        <TextField source="id" />
      </Labeled>
      <Labeled source="name" label="Nome">
        <TextField source="name" />
      </Labeled>
      <Labeled source="email" label="Email">
        <EmailField source="email" />
      </Labeled>
      <Labeled source="goal" label="Objetivo">
        <TextField source="goal" />
      </Labeled>
      <Labeled source="createdAt" label="Criado em">
        <DateField source="createdAt" />
      </Labeled>
      <Labeled source="updatedAt" label="Atualizado em">
        <DateField source="updatedAt" />
      </Labeled>
      <BooleanInput source="isAdmin" label="Admin" />
      <BooleanInput source="blocked" label="Bloqueado" />
    </SimpleForm>
  </Edit>
);
