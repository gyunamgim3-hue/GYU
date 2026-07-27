import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f2ea",
        color: "#111",
      }}
    >
<SiteHeader />

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "140px 40px 100px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              letterSpacing: "5px",
            }}
          >
            CONTACT
          </p>

          <h1
            style={{
              maxWidth: "950px",
              margin: "36px 0 0",
              fontSize: "clamp(58px, 9vw, 130px)",
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: "-0.055em",
            }}
          >
            Let&apos;s move
            <br />
            together.
          </h1>

          <div
            style={{
              marginTop: "64px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "18px",
              fontSize: "18px",
              lineHeight: 1.6,
            }}
          >
            <p
              style={{
                maxWidth: "520px",
                margin: "0 0 16px",
                color: "#555",
              }}
            >
              For general enquiries, collaborations and wholesale.
            </p>

            <a href="mailto:gyunamgim3@gmail.com" style={contactLinkStyle}>
              gyunamgim3@gmail.com
            </a>

            <a
              href="https://www.instagram.com/gyu.studio_/"
              target="_blank"
              rel="noopener noreferrer"
              style={contactLinkStyle}
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "44px 40px",
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
          fontSize: "12px",
          letterSpacing: "1.5px",
        }}
      >
        <span>GYU © 2026</span>

        <Link href="/" style={navLinkStyle}>
          BACK TO HOME
        </Link>
      </footer>
    </main>
  );
}

const navLinkStyle = {
  color: "inherit",
  textDecoration: "none",
};

const contactLinkStyle = {
  color: "inherit",
  textDecoration: "none",
  borderBottom: "1px solid #111",
  paddingBottom: "4px",
};