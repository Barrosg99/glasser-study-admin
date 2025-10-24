"use client";
import { Admin, Resource } from "react-admin";
import { Route } from "react-router-dom";

import authProvider from "@/providers/Auth";
import dataProvider from "@/providers/Data";

import { Users, Posts, Chats, Reports, Dashboard } from "./pages";

const AdminApp = () => (
  <Admin
    dashboard={Dashboard.default}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="users"
      list={Users.List}
      edit={Users.Edit}
      options={{ label: "Usuários" }}
    />
    <Resource
      name="posts"
      list={Posts.List}
      edit={Posts.Edit}
      options={{ label: "Publicações" }}
    />
    <Resource
      name="chats"
      list={Chats.List}
      edit={Chats.Edit}
      options={{ label: "Chats" }}
    >
      <Route path=":chatId/messages" element={<Chats.MessageList />} />
    </Resource>
    <Resource
      name="reports"
      list={Reports.List}
      edit={Reports.Edit}
      options={{ label: "Denúncias" }}
    />
  </Admin>
);

export default AdminApp;
