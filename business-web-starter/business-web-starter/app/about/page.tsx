import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f2ea",
        color: "#111",
      }}
    >
<header
  className="site-header"
  style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
  className="site-nav"
  style={{
            display: "flex",
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
  className="page-section"
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "140px",
    paddingBottom: "100px",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
              flexWrap: "wrap",
            }}
          >
<p
  style={{
    margin: 0,
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: "6px",
  }}
>
  ABOUT
</p>

<Image
  src="/logo/GYU_logo_master.png"
  alt="GYU"
  width={180}
  height={90}
  style={{
    width: "72px",
    height: "auto",
  }}
/>
          </div>

<h1
  className="about-title"
  style={{
              maxWidth: "950px",
              margin: "36px 0 0",
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: "-0.055em",
            }}
          >
            Live your flow,
            <br />
            Move lightly.
          </h1>

          <p
            style={{
              maxWidth: "520px",
              margin: "64px 0 0",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            Inspired by the quiet rhythm of nature.
            <br />
            Designed for life at your own pace.
          </p>
        </div>
      </section>

      <section
  className="page-section"
  style={{
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "120px",
    paddingBottom: "120px",
    boxSizing: "border-box",
    backgroundColor: "#111",
    color: "#fff",
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
              fontSize: "12px",
              letterSpacing: "4px",
              color: "#aaa",
            }}
          >
            OUR DIRECTION
          </p>

          <h2
            style={{
              maxWidth: "900px",
              margin: "32px 0 0",
              fontSize: "clamp(46px, 7vw, 96px)",
              lineHeight: 1.02,
              fontWeight: 400,
              letterSpacing: "-0.045em",
            }}
          >
            Inspired by nature.
            <br />
            Made with simplicity.
          </h2>
        </div>
      </section>

      <footer
  className="page-section"
  style={{
    paddingTop: "44px",
    paddingBottom: "44px",
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
          backgroundColor: "#f5f2ea",
          fontSize: "12px",
          letterSpacing: "1.5px",
        }}
      >
        <span>GYU © 2026</span>

        <a href="#" style={navLinkStyle}>
          INSTAGRAM
        </a>
      </footer>
    </main>
  );
}

const navLinkStyle = {
  color: "inherit",
  textDecoration: "none",
};