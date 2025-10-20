import { Link, useRecordContext } from "react-admin";

const RedirectField = ({
  source,
  name,
  id,
  resource,
}: {
  source: string;
  name?: string;
  id?: string;
  resource: string;
}) => {
  const record = useRecordContext();
  if (!record) return null;

  const link = id ? `/${resource}/${id}` : `/${resource}/${record[source].id}`;

  const text = name ? name : record[source].name;

  return (
    <Link to={link} target="_blank">
      {text}
    </Link>
  );
};

export default RedirectField;
