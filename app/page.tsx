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
  
     



      {/* HERO */}
      <section
  id="home"
  style={{
    minHeight: "100dvh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "clamp(80px, 15vh, 120px) 20px 60px",
  }}
>

  {/* NAVBAR (TOP OVERLAY) */}
<nav
  style={{
    position: "fixed",
    top: "20px",
    left: 0,
    width: "100%",
    display: "flex",
     gap: "10px",
     justifyContent: "center",
    padding: "0 20px", // ⬅️ smaller padding for mobile
    zIndex: 1000,
    flexWrap: "wrap", // ⬅️ allows wrapping on small screens
  }}
>
  {/* LEFT SIDE */}
  <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
    {["HOME", "ABOUT"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        style={navStyle}
      >
        {item}
      </a>
    ))}
  </div>

  {/* RIGHT SIDE */}
  <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
    {["GALLERY", "BOOK"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        style={navStyle}
      >
        {item}
      </a>
    ))}
  </div>
</nav>

  {/* BACKGROUND IMAGE */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/tattoo.png')",
     backgroundSize: "cover",
backgroundPosition: "center 30%",
      backgroundRepeat: "no-repeat",
      zIndex: 0,
      WebkitMaskImage:
        "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
      maskImage:
        "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
    }}
  />

  {/* DARK OVERLAY */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
      zIndex: 1,
    }}
  />

  {/* CENTER CONTENT */}
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
    {/* LOGO CENTER */}
    <img
      src="/logo.png"
      alt="logo"
      style={{
        width: "clamp(200px, 60vw, 450px)",
        opacity: 0.95,
      }}
    />

    {/* TAGLINE */}
    <h1
      style={{
        fontSize: "clamp(24px, 6vw, 40px)",
        fontWeight: "normal",
        color: "white",
        letterSpacing: "2px",
      }}
    >
      blackwork • fine line • minimalist
    </h1>

    {/* BUTTON */}
   <a
  href="#book"
  style={{ textDecoration: "none" }}
>
  <button
    style={{
      marginTop: "10px",
      padding: "10px 24px",
      background: "white",
      color: "black",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "12px",
      letterSpacing: "1px",
    }}
  >
    BOOK NOW →
  </button>
</a>
  </div>
</section>



      {/* ABOUT */}
 <section
  id="about"
  style={{
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 7%",
  }}
>
  {/* FULL BACKGROUND IMAGE */}
 <div
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/bg1.png')",

    /* FULL STRETCH */
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    zIndex: 0,

    /* SIDE FADE */
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
    maskImage:
      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  }}
/>

  {/* CONTENT */}
<div
  style={{
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "clamp(20px, 6vw, 80px)", // ✅ responsive gap
    maxWidth: "1200px",
    margin: "auto",

    flexWrap: "wrap",              // ✅ allows stacking
    textAlign: "center",           // ✅ better for mobile
  }}
>
  {/* LEFT - IMAGES */}
  
<div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
    <img
      src="/dee.png"
      alt="artist 1"
      style={{
        width: "clamp(140px, 40vw, 200px)",
height: "clamp(200px, 50vw, 300px)",
        objectFit: "cover",

        border: "1px solid rgba(255,255,255,0.15)",
        filter: "grayscale(100%) contrast(110%)",

        transform: "rotate(-2deg)",
      }}
    />
</div>
<div
  style={{
    maxWidth: "500px",
    position: "relative",
    textAlign: "center", // keep this
  }}
>
    <img
      src="/jc.png"
      alt="artist 2"
      style={{
        width: "clamp(140px, 40vw, 200px)",
height: "clamp(200px, 50vw, 300px)",
        objectFit: "cover",

        border: "1px solid rgba(255,255,255,0.15)",
        filter: "grayscale(100%) contrast(110%)",

        transform: "rotate(2deg)",
        
marginTop: "clamp(0px, 5vw, 40px)"
      }}
    />
  </div>



  {/* RIGHT - TEXT */}
  <div
    style={{
      maxWidth: "500px",
      position: "relative",
    }}
  >
    <h2
      style={{
        fontSize: "clamp(50px, 7vw, 90px)",
        marginBottom: "20px",
        color: "#5a0000", // darker maroon

        letterSpacing: "3px",
        textTransform: "uppercase",
      }}
    >
      ABOUT
    </h2>

    {/* thin line accent */}
    <div
      style={{
        width: "60px",
        height: "1px",
        background: "#800000",
        marginBottom: "25px",
      }}
    />

    <p
      style={{
        lineHeight: "1.9",
        fontSize: "14px",
        color: "#bbb",
        letterSpacing: "0.5px",
      }}
    >
      RuDe Tattoo MNL is built by two independent artists who share the same
      passion for ink and self-expression. Starting their journey in 2021,
      they developed their craft through raw experience and individuality.

      <br /><br />

      Based in their own studio, they work independently—no hierarchy, no restrictions, only vision, craft, and control over every piece.

      <br /><br />

      Every piece is intentional. Every line carries identity.
    </p>
  </div>
</div>  
</section>

<section
  id="gallery"
  style={{
    minHeight: "100vh",
    background: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 6%",
    gap: "80px",
  }}
>

  {/* ===== TATTOOS ===== */}
  <div style={{ width: "100%", maxWidth: "1100px" }}>
    <h2 style={{ color: "white", marginBottom: "30px", letterSpacing: "2px", fontSize: "18px" }}>
      TATTOOS
    </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",

      gap: "35px",
    }}>
      {[
        "/tattoo1.jpg","/tattoo2.jpg","/tattoo3.jpg","/tattoo4.jpg",
        "/tattoo5.jpg","/tattoo6.jpg","/tattoo7.jpg","/tattoo8.jpg",
      ].map((img, i) => (
        <div key={i} className="gallery-item">
          <img src={img} alt="tattoo" className="gallery-img" />
        </div>
      ))}
    </div>
  </div>

  {/* ===== PIERCINGS ===== */}
  <div style={{ width: "100%", maxWidth: "1100px" }}>
    <h2 style={{ color: "white", marginBottom: "30px", letterSpacing: "2px", fontSize: "18px" }}>
      PIERCINGS
    </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "35px",
    }}>
      {[
        "/pierce1.jpg","/pierce2.jpg","/pierce3.jpg","/pierce4.jpg",
        "/pierce5.jpg","/pierce6.jpg","/pierce7.jpg","/pierce8.jpg",
      ].map((img, i) => (
        <div key={i} className="gallery-item">
          <img src={img} alt="piercing" className="gallery-img" />
        </div>
      ))}
    </div>
  </div>

  {/* ===== DIVIDER ===== */}
  <div style={{
    width: "100%",
    maxWidth: "1100px",
    height: "1px",
    background: "rgba(255,255,255,0.08)"
  }} />

  {/* ===== LATEST WORKS ===== */}
  <div style={{ width: "100%", maxWidth: "1100px" }}>
    <h2 style={{
      color: "white",
      marginBottom: "30px",
      letterSpacing: "2px",
      fontSize: "18px"
    }}>
      LATEST WORKS
    </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "25px",
    }}>
      {/* EMPTY STATE */}
      <p style={{
        color: "#666",
        gridColumn: "span 4",
        textAlign: "center"
      }}>
        No uploads yet.
      </p>
    </div>
  </div>

</section>


 <section
  id="book"
  style={{
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",   // ✅ IMPORTANT FIX

    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    textAlign: "center",
    padding: "100px 20px",
    paddingBottom: "160px"

  }}
>

  {/* BACKGROUND IMAGE */}
<div
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/bg2.png')",

    /* FULL STRETCH */
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    zIndex: 0,

    /* SIDE FADE */
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
    maskImage:
      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  }}
/>

  {/* DARK OVERLAY */}
  <div
  style={{
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 1,
  }}
/>

  {/* CONTENT */}
  <div style={{ position: "relative", zIndex: 2 }}>
  <h2 style={{ fontSize: "40px", letterSpacing: "3px" }}>
    BOOK / CONTACT
  </h2>

  {/* MAIN DESCRIPTION */}
  <p
  style={{
    color: "#aaa",
    fontSize: "14px",
    maxWidth: "400px",
    textAlign: "center",   // ✅ center the text
    margin: "0 auto",      // ✅ center the block itself
  }}
>
  For bookings and inquiries, message us directly.
</p>

   {/* INFO BLOCK */}
  <div
  style={{
    marginTop: "10px",
    padding: "20px",
    border: "1px solid #800000",
    maxWidth: "600px", // ⬅️ slightly wider for 2 columns
    fontSize: "13px",
    lineHeight: "1.8",
    color: "#bbb",
    background: "rgba(0,0,0,0.4)",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "40px",
      textAlign: "left",
    }}
  >
    {/* LEFT COLUMN */}
    <div style={{ flex: 1 }}>
      <p> 1:00 PM TO 10:00 PM</p>

      <p style={{ color: "#888" }}>
        BY APPOINTMENTS ONLY (no walk-ins available)
      </p>

      <p style={{ marginTop: "10px" }}>
        Located at <br />
        1329 Blumentritt, Sampaloc, Manila
      </p>

      <p style={{ marginTop: "10px" }}> Contact Us:</p>
      <p>Whatsapp: +63 921 675 9644</p>
    </div>

    {/* RIGHT COLUMN */}
    <div style={{ flex: 1 }}>
      <p> Sampaloc, Manila</p>

      <p style={{ color: "#888" }}>
        Private Studio • BY APPOINTMENTS ONLY
      </p>

      <div style={{ marginTop: "10px", color: "#666" }}>
        • 18+ only <br />
        • No minors without consent <br />
        • No copying other artists’ work
      </div>

      <p style={{ marginTop: "10px" }}>Message Us To Book</p>
    </div>
  </div>

  {/* BOTTOM CENTER TEXT */}
  <p
    style={{
      marginTop: "20px",
      fontStyle: "italic",
      color: "#888",
      textAlign: "center",
      lineHeight: "1.6",
    }}
  >
    Every piece is intentional.
    <br />
    Send your concept and we’ll bring it to life.
  </p>
</div>


    {/* INSTAGRAM BUTTON */}
    <a
      href="https://www.instagram.com/rudetattoo_mnl/"
      target="_blank"
      style={{
        marginTop: "20px",
        padding: "12px 30px",
        border: "1px solid white",
        textDecoration: "none",
        color: "white",
        letterSpacing: "2px",
        display: "inline-block",
      }}
    >
      MESSAGE ON INSTAGRAM
    </a>
  </div>
</section>

<footer
  style={{
    background: "black",
    color: "#888",
    padding: "60px 20px 30px",
    textAlign: "center",
    position: "relative",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  }}
>
 

  {/* BRAND */}
  <h3
    style={{
      color: "white",
      letterSpacing: "3px",
      fontSize: "14px",
      marginBottom: "10px",
    }}
  >
    RUDE TATTOO MNL
  </h3>

  {/* TAGLINE */}
  <p
    style={{
      fontSize: "12px",
      color: "#666",
      marginBottom: "25px",
      letterSpacing: "1px",
    }}
  >
    blackwork • fine line • minimalist
  </p>


  {/* DIVIDER */}
  <div
    style={{
      margin: "30px auto",
      width: "80%",
      height: "1px",
      background: "rgba(255,255,255,0.05)",
    }}
  />

  {/* COPYRIGHT */}
  <p
    style={{
      fontSize: "10px",
      color: "#444",
      letterSpacing: "1px",
    }}
  >
    © 2026 RuDe Tattoo MNL  
    <br />
    All works are original. No reproduction without permission.
  </p>
</footer>

    </main>
    </>
  );
}