import { RedirectField } from "@/components/generics";
import { getMessageChat } from "@/providers/Data/resources/messages";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  DateField,
  DeleteButton,
  Edit,
  Labeled,
  Link,
  SaveButton,
  SimpleForm,
  TextField,
  TextInput,
  Toolbar,
  useRecordContext,
  SelectInput,
  required,
  useUpdate,
  useNotify,
} from "react-admin";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

const fetchChat = async (id: string) => {
  try {
    const { chat } = await getMessageChat(id);
    return chat;
  } catch {
    return null;
  }
};

const ReportRedirectField = () => {
  const record = useRecordContext();
  const [chat, setChat] = useState<{ id: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (record?.entity === "MESSAGE") {
      fetchChat(record.entityId)
        .then((chat) => setChat(chat))
        .finally(() => setLoading(false));
    }
  }, [record?.entity, record?.entityId]);

  if (!record) return null;

  if (record.entity === "POST") {
    const link = `/posts/${record.entityId}`;

    return (
      <Link to={link} target="_blank">
        POST
      </Link>
    );
  }

  if (record.entity === "MESSAGE") {
    if (loading) return <div>Loading...</div>;
    if (!chat) return null;

    const link = `/chats/${chat.id}/messages?displayedFilters={"messageId":true}&filter={"messageId":"${record.entityId}"}&order=ASC&page=1&perPage=25&sort=id`;

    return (
      <Link to={link} target="_blank">
        MESSAGE
      </Link>
    );
  }
  return null;
};

const ReportToolbar = () => {
  const [open, setOpen] = useState(false);
  const notify = useNotify();
  const record = useRecordContext();
  const [update] = useUpdate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const { id, status, resolvedReason } = data;

    update(
      "reports",
      { id, data: { status, resolvedReason } },
      {
        onSuccess: () => {
          setOpen(false);
          notify("Report resolvido com sucesso", { type: "success" });
        },
        onError: () => {
          notify("Erro ao resolver report", { type: "error" });
        },
      }
    );
  };

  return (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      {record?.status === "PENDING" && (
        <Button
          sx={{
            color: "white",
            backgroundColor: "secondary.main",
            padding: "6px 16px",
            marginLeft: "10px",
          }}
          onClick={() => setOpen(true)}
        >
          Resolver
        </Button>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Resolver Report</DialogTitle>
        <DialogContent>
          <SimpleForm
            onSubmit={onSubmit}
            toolbar={
              <Toolbar>
                <SaveButton label="Resolver" icon={false} />
              </Toolbar>
            }
          >
            <SelectInput
              label="Status"
              source="status"
              validate={required()}
              choices={[
                { id: "resolved", name: "Resolvido" },
                { id: "rejected", name: "Rejeitado" },
              ]}
            />
            <TextInput
              label="Resolução"
              source="resolvedReason"
              validate={required()}
            />
          </SimpleForm>
        </DialogContent>
      </Dialog>
    </Toolbar>
  );
};

export const ReportEdit = () => (
  <Edit>
    <SimpleForm toolbar={<ReportToolbar />}>
      <Labeled label="ID">
        <TextField source="id" />
      </Labeled>
      <Labeled label="Entidade">
        <ReportRedirectField />
      </Labeled>
      <Labeled label="ID da Entidade">
        <TextField source="entityId" />
      </Labeled>
      <Labeled label="Motivo">
        <TextField source="reason" />
      </Labeled>
      <Labeled label="Descrição">
        <TextField source="description" />
      </Labeled>
      <Labeled label="Reportado por">
        <RedirectField source="user" resource="users" />
      </Labeled>
      <Labeled label="Status">
        <TextField source="status" />
      </Labeled>
      <Labeled label="Resolvido por">
        <RedirectField source="resolvedBy" resource="users" />
      </Labeled>
      <Labeled label="Resolução">
        <TextField source="resolvedReason" />
      </Labeled>
      <Labeled label="Criado em">
        <DateField showTime source="createdAt" />
      </Labeled>
      <Labeled label="Atualizado em">
        <DateField showTime source="updatedAt" />
      </Labeled>
    </SimpleForm>
  </Edit>
);
