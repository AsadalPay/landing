import Nav from "./components/Nav/Nav";
import "./styles.css";

export const metadata = {
  title: "Asadal Pay | Подключения",
  description: "Asadal pay app",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="docs">
      <Nav />
      <div className="content">{children}</div>
    </div>
  );
}
