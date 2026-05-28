export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        background: "#0F172A",
        minHeight: "100vh",
        padding: "24px",
        borderRight: "1px solid #1E293B"
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "40px"
        }}
      >
        SDR SaaS
      </h1>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >
        <MenuItem name="Dashboard" />
        <MenuItem name="Leads" />
        <MenuItem name="Campanhas" />
        <MenuItem name="E-mails" />
        <MenuItem name="Respostas" />
        <MenuItem name="Analytics" />
        <MenuItem name="Integrações" />
        <MenuItem name="Configurações" />
      </nav>
    </aside>
  );
}

function MenuItem({ name }: any) {
  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "10px",
        cursor: "pointer",
        background: "#111827"
      }}
    >
      {name}
    </div>
  );
}
