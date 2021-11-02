import { PageHeader } from "antd";

export default function PHeader() {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  );
}
