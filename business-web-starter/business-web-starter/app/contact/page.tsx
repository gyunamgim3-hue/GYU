import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f2ea",
        color: "#111",
      }}
    >
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 40px",
          boxSizing: "border-box",
          backgroundColor: "rgba(245, 242, 234, 0.94)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Link href="/" aria-label="GYU home">
          <Image
            src="/logo/GYU_logo_master.png"
            alt="GYU"
            width={90}
            height={45}
            priority
            style={{
              width: "72px",
              height: "auto",
              display: "block",
            }}
          />
        </Link>

        <nav
          style={{
            display: "flex",
            gap: "28px",
            fontSize: "12px",
            letterSpacing: "1.8px",
          }}
        >
          <Link href="/#collection" style={navLinkStyle}>
            COLLECTION
          </Link>

          <Link href="/about" style={navLinkStyle}>
            ABOUT
          </Link>

          <Link href="/contact" style={navLinkStyle}>
            CONTACT
          </Link>
        </nav>
      </header>

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