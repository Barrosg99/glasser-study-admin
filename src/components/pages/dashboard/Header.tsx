import { CardWithIcon } from "@/components/generics";

import UserIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Header = () => {
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
        subtitle="100"
      />
      <CardWithIcon
        to="/posts"
        icon={ArticleIcon}
        title="Publicações"
        subtitle="80"
      />
      <CardWithIcon
        to="#"
        icon={ChecklistIcon}
        title="Metas Criadas"
        subtitle="70"
      />
      <CardWithIcon
        to="#"
        icon={CheckCircleIcon}
        title="Taxa de Conclusão de Metas"
        subtitle="20%"
      />
    </div>
  );
};

export default Header;
