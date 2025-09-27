"use client";
import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import Dashboard from "./pages/dashboard";

const AdminApp = () => (
  <Admin dashboard={Dashboard}>
    <Resource
      name="research"
      list={ListGuesser}
      edit={EditGuesser}
      options={{ label: "Relatórios" }}
    />
    <Resource
      name="reports"
      list={ListGuesser}
      edit={EditGuesser}
      options={{ label: "Denúncias" }}
    />
  </Admin>
);

export default AdminApp;
