import Logo from "@/assets/Logo-hamburguesa-oficia-variacionl.webp";

const Welcome = () => {
  return (
    <section id="welcomeSection">
      <div
        style={{
          width: "50%",
          backgroundColor: "#1f1f1fe0",
          textAlign: "center",
          borderRadius: 32,
        }}
      >
        <h1>
          <span>CHEAPEST 📗 </span> <span>FASTEST ⚡</span>{" "}
          <span>DELICIOUS 🔥 </span> BURGERS 🍔
        </h1>
      </div>

      <div style={{ width: "50%" }} className="logoContainer">
        <img src={Logo} style={{ width: "100%", borderRadius: "100%" }} />
      </div>
    </section>
  );
};

export default Welcome;
