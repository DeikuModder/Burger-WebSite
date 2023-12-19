import Promo5 from "@/assets/promo-5.webp";
import Promo10 from "@/assets/promo-10.webp";

const Promos = () => {
  return (
    <section id="promosSection">
      <h2
        style={{
          color: "#eee",
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: "2.5rem",
          backgroundColor: "#1b1b1bc9",
          marginBottom: 32,
          padding: 8,
        }}
      >
        PROMOTIONS❗🤩
      </h2>
      <div className="promoImagesContainer">
        <div className="promoImages">
          <img src={Promo5} style={{ width: "100%" }} />
        </div>
        <div className="promoImages">
          <img src={Promo10} style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  );
};

export default Promos;
