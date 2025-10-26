import { CardWithIcon } from "@/components/generics";

import UserIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDataProvider } from "react-admin";
import { useEffect, useState } from "react";

const Header = () => {
  const dataProvider = useDataProvider();
  const [applicationSummary, setApplicationSummary] = useState<{
    adminCountUsers: number;
    adminCountPosts: number;
    adminCountGoals: number;
    adminGetPercentageOfCompletedGoals: number;
  }>({
    adminCountUsers: 0,
    adminCountPosts: 0,
    adminCountGoals: 0,
    adminGetPercentageOfCompletedGoals: 0,
  });

  useEffect(() => {
    const getApplicationSummary = async () => {
      const data = await dataProvider.getSummary("application");
      setApplicationSummary(data);
    };
    getApplicationSummary();
  }, [dataProvider]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <CardWithIcon
        to="/users"
        icon={UserIcon}
        title="Usuários"
        subtitle={applicationSummary.adminCountUsers}
      />
      <CardWithIcon
        to="/posts"
        icon={ArticleIcon}
        title="Publicações"
        subtitle={applicationSummary.adminCountPosts}
      />
      <CardWithIcon
        to="#"
        icon={ChecklistIcon}
        title="Metas Criadas"
        subtitle={applicationSummary.adminCountGoals}
      />
      <CardWithIcon
        to="#"
        icon={CheckCircleIcon}
        title="Taxa de Conclusão de Metas"
        subtitle={applicationSummary.adminGetPercentageOfCompletedGoals}
      />
    </div>
  );
};

export default Header;
