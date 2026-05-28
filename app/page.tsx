export default function Home() {
  return (
    <main
      style={{
        background: "#070B1A",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px"
        }}
      >
        SDR SaaS
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#A0A0A0",
          marginBottom: "40px"
        }}
      >
        Plataforma de Outbound Inteligente
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px"
        }}
      >
        <Card title="Leads" value="1.245" />
        <Card title="Emails" value="3.582" />
        <Card title="Respostas" value="215" />
        <Card title="Reuniões" value="48" />
      </div>
    </main>
  );
}

function Card({ title, value }: any) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "20px",
        borderRadius: "16px"
      }}
    >
      <p style={{ color: "#9CA3AF" }}>{title}</p>

      <h2
        style={{
          fontSize: "32px",
          marginTop: "10px"
        }}
      >
        {value}
      </h2>
    </div>
  );
}
