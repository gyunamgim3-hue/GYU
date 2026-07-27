import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
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
              gap: "22px",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "6px",
              }}
            >
              ABOUT GYU
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
              fontSize: "clamp(58px, 9vw, 130px)",
              lineHeight: 0.94,
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
              maxWidth: "580px",
              margin: "64px 0 0",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            GYU is a lifestyle brand inspired by nature, the ocean and the
            freedom to move through life at your own pace.
          </p>
        </div>
      </section>

      <section
        className="page-section"
        style={{
          minHeight: "80vh",
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
            OUR PHILOSOPHY
          </p>

          <h2
            style={{
              maxWidth: "950px",
              margin: "32px 0 0",
              fontSize: "clamp(46px, 7vw, 96px)",
              lineHeight: 1.02,
              fontWeight: 400,
              letterSpacing: "-0.045em",
            }}
          >
            Freedom is not
            <br />
            standing still.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "56px 0 0",
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#bbb",
            }}
          >
            It is moving naturally, choosing your own direction and finding
            comfort in simplicity. GYU creates pieces designed to become part
            of that movement.
          </p>
        </div>
      </section>

      <section
        className="page-section"
        style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "120px",
          paddingBottom: "120px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "64px",
          }}
        >
          <div>
            <p style={sectionLabelStyle}>NATURE</p>

            <h3 style={sectionTitleStyle}>Quiet inspiration.</h3>

            <p style={sectionTextStyle}>
              We draw from open landscapes, soft sunlight and the calm rhythm
              of the natural world.
            </p>
          </div>

          <div>
            <p style={sectionLabelStyle}>OCEAN</p>

            <h3 style={sectionTitleStyle}>Always in motion.</h3>

            <p style={sectionTextStyle}>
              The ocean represents freedom, movement and a life that continues
              to flow without force.
            </p>
          </div>

          <div>
            <p style={sectionLabelStyle}>SIMPLICITY</p>

            <h3 style={sectionTitleStyle}>Made to feel easy.</h3>

            <p style={sectionTextStyle}>
              Our pieces are designed with a clean and relaxed approach for
              everyday life.
            </p>
          </div>
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
          backgroundColor: "#dfe7d5",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <p style={sectionLabelStyle}>OUR DIRECTION</p>

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
            Fewer distractions.
            <br />
            More freedom.
          </h2>

          <Link
            href="/#collection"
            style={{
              display: "inline-block",
              marginTop: "56px",
              color: "#111",
              textDecoration: "none",
              borderBottom: "1px solid #111",
              paddingBottom: "5px",
              fontSize: "13px",
              letterSpacing: "2px",
            }}
          >
            EXPLORE THE COLLECTION
          </Link>
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
          backgroundColor: "#111",
          color: "#fff",
          fontSize: "12px",
          letterSpacing: "1.5px",
        }}
      >
        <span>GYU © 2026</span>

        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={footerLinkStyle}>
            HOME
          </Link>

          <Link href="/contact" style={footerLinkStyle}>
            CONTACT
          </Link>

          <a
            href="https://www.instagram.com/gyu.studio_/"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
          >
            INSTAGRAM
          </a>
        </div>
      </footer>
    </main>
  );
}

const navLinkStyle = {
  color: "inherit",
  textDecoration: "none",
};

const sectionLabelStyle = {
  margin: 0,
  fontSize: "12px",
  letterSpacing: "4px",
};

const sectionTitleStyle = {
  margin: "22px 0 0",
  fontSize: "32px",
  lineHeight: 1.15,
  fontWeight: 400,
  letterSpacing: "-0.03em",
};

const sectionTextStyle = {
  maxWidth: "320px",
  margin: "24px 0 0",
  fontSize: "16px",
  lineHeight: 1.8,
  color: "#555",
};

const footerLinkStyle = {
  color: "#fff",
  textDecoration: "none",
};