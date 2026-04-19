import Head from "next/head";

export default function Home() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "12px",
    letterSpacing: "2px",
    transition: "0.3s",
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
          width: "100%",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          backgroundColor: "black",
          color: "white",
        }}
      >

        {/* ================= HERO ================= */}
        <section
          id="home"
          style={{
            minHeight: "100vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "120px 20px 60px",
            overflow: "hidden",
          }}
        >
          {/* NAV */}
          <nav
            style={{
              position: "fixed",
              top: "20px",
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
              zIndex: 1000,
              flexWrap: "wrap",
              rowGap: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {["HOME", "ABOUT"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} style={navStyle}>
                  {item}
                </a>
              ))}
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {["GALLERY", "BOOK"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} style={navStyle}>
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* BACKGROUND */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/tattoo.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 1,
            }}
          />

          {/* CONTENT */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src="/logo.png"
              alt="logo"
              style={{
                width: "clamp(180px, 60vw, 450px)",
              }}
            />

            <h1
              style={{
                fontSize: "clamp(18px, 4vw, 40px)",
                fontWeight: "normal",
                letterSpacing: "2px",
              }}
            >
              blackwork • fine line • minimalist
            </h1>

            <a href="#book" style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "10px 24px",
                  background: "white",
                  color: "black",
                  border: "none",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                BOOK NOW →
              </button>
            </a>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            padding: "80px 20px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/bg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          />

          {/* IMAGES */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              zIndex: 2,
            }}
          >
            {[ "/dee.png", "/jc.png" ].map((img, i) => (
              <img
                key={i}
                src={img}
                style={{
                  width: "clamp(150px, 40vw, 200px)",
                  height: "auto",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            ))}
          </div>

          {/* TEXT */}
          <div style={{ maxWidth: "500px", zIndex: 2 }}>
            <h2 style={{ fontSize: "clamp(40px, 7vw, 90px)" }}>ABOUT</h2>
            <p style={{ fontSize: "14px", color: "#bbb", lineHeight: "1.8" }}>
              RuDe Tattoo MNL is built by two independent artists...
            </p>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section
          id="gallery"
          style={{
            minHeight: "100vh",
            padding: "100px 20px",
          }}
        >
          <h2>TATTOOS</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <img
                key={i}
                src={`/tattoo${i + 1}.jpg`}
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        </section>

        {/* ================= BOOK ================= */}
        <section
          id="book"
          style={{
            minHeight: "100vh",
            padding: "100px 20px",
            position: "relative",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/bg2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <h2>BOOK / CONTACT</h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div style={{ flex: "1 1 250px" }}>
                <p>📍 Manila</p>
                <p>📲 WhatsApp</p>
              </div>

              <div style={{ flex: "1 1 250px" }}>
                <p>✔ By appointment only</p>
                <p>✔ 18+ only</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/rudetattoo_mnl/"
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "10px 20px",
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
              }}
            >
              MESSAGE ON INSTAGRAM
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "40px", textAlign: "center" }}>
          © 2026 RuDe Tattoo MNL
        </footer>

      </main>
    </>
  );
}