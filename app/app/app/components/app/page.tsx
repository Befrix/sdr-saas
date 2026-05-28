import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        background: "#070B1A",
        color: "white",
        minHeight: "100vh"
      }}
    >
      <Sidebar />

      <section
        style={{
          flex: 1,
          padding: "40px"
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "30px"
          }}
        >
          Dashboard SDR
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "30px"
          }}
        >
          <Card title="Leads" value="1.245" />
          <Card title="E-mails" value="3.582" />
          <Card title="Respostas" value="215" />
          <Card title="Reuniões" value="48" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px"
          }}
        >
          <div
            style={{
              background: "#111827",
              height: "400px",
              borderRadius: "20px",
              padding: "20px"
            }}
          >
            Gráfico de Campanhas
          </div>

          <div
            style={{
              background: "#111827",
              height: "400px",
              borderRadius: "20px",
              padding: "20px"
            }}
          >
            Funil SDR
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ title, value }: any) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "24px",
        borderRadius: "20px"
      }}
    >
      <p style={{ color: "#94A3B8" }}>{title}</p>

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
