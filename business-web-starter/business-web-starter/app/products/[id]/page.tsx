
import ProductActions from "./ProductActions";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = {
  "001": {
    number: "001",
    name: "MINIMAL",
    price: "AED 149",
    frontImage: "/products/option1-front.png",
    backImage: "/products/option1-back.png",
    description: "A clean essential designed for everyday freedom.",
    details:
      "A regular-fit white crew-neck T-shirt finished with the GYU signature logo on the left chest.",
  },
  "002": {
    number: "002",
    name: "POCKET",
    price: "AED 169",
    frontImage: "/products/option2-front.png",
    backImage: "/products/option2-back.png",
    description: "A relaxed silhouette with a subtle functional detail.",
    details:
      "A white pocket T-shirt featuring the GYU signature logo at the front and an ocean-inspired graphic at the back.",
  },
  "003": {
    number: "003",
    name: "CENTER",
    price: "AED 149",
    frontImage: "/products/option3-front.png",
    backImage: "/products/option3-back.png",
    description: "A simple graphic expression of the GYU spirit.",
    details:
      "A regular-fit white crew-neck T-shirt featuring the full-color GYU logo across the center chest.",
  },
};

type ProductId = keyof typeof products;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products[id as ProductId];

  if (!product) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        color: "#111",
      }}
    >
      <header
  className="product-header"
  style={{
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Link
  href="/#collection"
  className="product-header-back"
  style={{
            justifySelf: "start",
            color: "#111",
            textDecoration: "none",
            fontSize: "11px",
            letterSpacing: "1.8px",
          }}
        >
          BACK TO COLLECTION
        </Link>

<Link
  href="/"
  aria-label="GYU home"
  className="product-header-logo"
>
          <Image
            src="/logo/GYU_logo_master.png"
            alt="GYU"
            width={72}
            height={40}
            priority
            style={{
              width: "72px",
              height: "auto",
              display: "block",
            }}
          />
        </Link>

<span
  className="product-header-tagline"
  style={{
            justifySelf: "end",
            fontSize: "11px",
            letterSpacing: "1.8px",
          }}
        >
          FREE TO FLOW
        </span>
      </header>

      <section
  className="page-section"
  style={{
    maxWidth: "1500px",
    margin: "0 auto",
    paddingTop: "80px",
    paddingBottom: "140px",
        }}
      >
        <div
  className="product-layout"
  style={{
    maxWidth: "1400px",
    margin: "0 auto",
  }}
>
          <div
            className="product-gallery"
            style={{
              display: "grid",
              gap: "32px",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                backgroundColor: "#f7f6f2",
                overflow: "hidden",
              }}
            >
              <Image
                src={product.frontImage}
                alt={`GYU ${product.name} front`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 65vw"
                style={{
                  objectFit: "contain",
                  padding: "32px",
                }}
              />
            </div>

            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                backgroundColor: "#f7f6f2",
                overflow: "hidden",
              }}
            >
              <Image
                src={product.backImage}
                alt={`GYU ${product.name} back`}
                fill
                sizes="(max-width: 900px) 100vw, 65vw"
                style={{
                  objectFit: "contain",
                  padding: "32px",
                }}
              />
            </div>
          </div>

<aside className="product-info">
            <p
              style={{
                margin: 0,
                fontSize: "11px",
                letterSpacing: "3px",
              }}
            >
              GYU {product.number}
            </p>

            <h1
              className="product-title"
              style={{
                margin: "16px 0 0",
                lineHeight: 0.95,
                fontWeight: 400,
                letterSpacing: "-0.05em",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                margin: "22px 0 0",
                fontSize: "18px",
              }}
            >
              {product.price}
            </p>

            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p style={labelStyle}>COLOR</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "14px",
                }}
              >
                <span
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: "1px solid #111",
                    boxShadow: "inset 0 0 0 7px #f7f6f2",
                  }}
                />

                <span
                  style={{
                    fontSize: "13px",
                    letterSpacing: "1px",
                  }}
                >
                  WHITE
                </span>
              </div>
            </div>

<ProductActions
  productNumber={product.number}
  productName={product.name}
/>

            <div
              style={{
                marginTop: "40px",
                paddingTop: "32px",
                borderTop: "1px solid #ddd",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "17px",
                  lineHeight: 1.7,
                }}
              >
                {product.description}
              </p>

              <p
                style={{
                  margin: "20px 0 0",
                  color: "#666",
                  lineHeight: 1.8,
                }}
              >
                {product.details}
              </p>
            </div>

            <div
              style={{
                marginTop: "34px",
                paddingTop: "26px",
                borderTop: "1px solid #ddd",
              }}
            >
              <p style={labelStyle}>PRODUCT DETAILS</p>

              <p
                style={{
                  margin: "16px 0 0",
                  color: "#555",
                  lineHeight: 1.9,
                }}
              >
                100% cotton
                <br />
                Regular fit
                <br />
                Crew neck
                <br />
                Short sleeves
                <br />
                Designed in Dubai
              </p>
            </div>

            <div
              style={{
                marginTop: "34px",
                paddingTop: "26px",
                borderTop: "1px solid #ddd",
              }}
            >
              <p style={labelStyle}>SIZE GUIDE</p>

              <div
                style={{
                  marginTop: "16px",
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  fontSize: "12px",
                  textAlign: "center",
                  borderTop: "1px solid #ddd",
                  borderLeft: "1px solid #ddd",
                }}
              >
                {["SIZE", "S", "M", "L", "XL", "CHEST", "50", "52", "54", "56", "LENGTH", "66", "68", "70", "72"].map(
                  (value) => (
                    <span
                      key={value}
                      style={{
                        padding: "11px 6px",
                        borderRight: "1px solid #ddd",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {value}
                    </span>
                  ),
                )}
              </div>

              <p
                style={{
                  margin: "12px 0 0",
                  color: "#777",
                  fontSize: "11px",
                }}
              >
                Measurements are shown in centimeters.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

const labelStyle = {
  margin: 0,
  fontSize: "11px",
  letterSpacing: "2px",
};