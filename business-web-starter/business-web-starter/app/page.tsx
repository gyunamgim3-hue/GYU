import Image from "next/image";
import Link from "next/link";

const products = [
  {
    number: "001",
    name: "MINIMAL",
    image: "/products/option1-front.png",
    description: "A clean essential designed for everyday freedom.",
  },
  {
    number: "002",
    name: "POCKET",
    image: "/products/option2-front.png",
    description: "A relaxed silhouette with a subtle functional detail.",
  },
  {
    number: "003",
    name: "CENTER",
    image: "/products/option3-front.png",
    description: "A simple graphic expression of the GYU spirit.",
  },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: "#f5f2ea", color: "#111" }}>
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
          <a href="#collection" style={navLinkStyle}>
            COLLECTION
          </a>
<Link href="/about" style={navLinkStyle}>
  ABOUT
</Link>

<a href="#contact" style={navLinkStyle}>
  CONTACT
</a>

<a
  href="https://www.instagram.com/gyu.studio_/"
  target="_blank"
  rel="noopener noreferrer"
  style={navLinkStyle}
>
  INSTAGRAM
</a>

<section
  id="top"
  style={{
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    padding: "140px 24px 80px",
    boxSizing: "border-box",
    backgroundColor: "#111",
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      zIndex: 0,
      filter: "brightness(0.72) saturate(0.85)",
    }}
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
  </video>

  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.18)",
      zIndex: 1,
    }}
  />

  <div
    style={{
      position: "relative",
      zIndex: 2,
      color: "#fff",
    }}
  >
    <p style={{ ...eyebrowStyle, color: "#fff" }}>GYU STUDIO</p>

    <h1
      style={{
        margin: "26px 0 0",
        fontSize: "clamp(58px, 10vw, 150px)",
        lineHeight: "0.95",
        fontWeight: 400,
        letterSpacing: "-0.06em",
      }}
    >
      Live your flow,
      <br />
      Move lightly.
    </h1>

    <a
      href="#collection"
      style={{
        display: "inline-block",
        marginTop: "44px",
        padding: "15px 28px",
        border: "1px solid rgba(255,255,255,0.85)",
        color: "#fff",
        textDecoration: "none",
        fontSize: "12px",
        letterSpacing: "2px",
      }}
    >
      DISCOVER COLLECTION
    </a>
  </div>
</section>

      <section
        id="collection"
        style={{
          padding: "120px 40px",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: "30px",
              marginBottom: "60px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p style={eyebrowStyle}>THE FIRST COLLECTION</p>
              <h2
                style={{
                  margin: "18px 0 0",
                  fontSize: "clamp(40px, 6vw, 84px)",
                  lineHeight: 1,
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                }}
              >
                White T-Shirts
              </h2>
            </div>

            <p
              style={{
                maxWidth: "420px",
                margin: 0,
                color: "#555",
                lineHeight: 1.7,
              }}
            >
              everyday essentials
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {products.map((product) => (
<Link
  href={`/products/${product.number}`}
  key={product.number}
  style={{
    textDecoration: "none",
    color: "inherit",
    display: "block",
  }}
>
  <article>
<div
  style={{
    position: "relative",
    aspectRatio: "1 / 1",
    backgroundColor: "#f7f6f2",
    overflow: "hidden",
  }}
>
<Image
  src={product.image}
  alt={`GYU ${product.number} ${product.name}`}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  style={{
    objectFit: "contain",
    padding: "12px",
  }}
/>
</div>

                <div style={{ paddingTop: "22px" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      letterSpacing: "2px",
                    }}
                  >
                    {product.number}
                  </p>

<h3
  style={{
    margin: "10px 0 0",
    fontSize: "24px",
    fontWeight: 400,
    letterSpacing: "-0.02em",
  }}
>
                    {product.name}
                  </h3>

                  <p
                    style={{
                      margin: "14px 0 0",
                      color: "#666",
                      lineHeight: 1.6,
                    }}
                  >
                    {product.description}
                  </p>
                </div>
              </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{
          padding: "140px 40px",
          backgroundColor: "#111",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <p style={{ ...eyebrowStyle, color: "#aaa" }}>ABOUT GYU</p>

<h2
  style={{
    maxWidth: "900px",
    margin: "26px 0 0",
    fontSize: "clamp(42px, 7vw, 96px)",
    lineHeight: 1.05,
    fontWeight: 400,
    letterSpacing: "-0.04em",
  }}
>
  Inspired by nature.
  <br />
  Designed for your own pace.
</h2>


        </div>
      </section>

      <footer
        id="contact"
        style={{
          padding: "44px 40px",
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

const eyebrowStyle = {
  margin: 0,
  fontSize: "12px",
  letterSpacing: "4px",
};