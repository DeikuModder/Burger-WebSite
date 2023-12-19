import RestaurantImage from "@/assets/welcome-image.jpg";
import "@/styles/components/_about.scss";

const About = () => {
  return (
    <section id="about">
      <div
        style={{
          width: "50%",
          textAlign: "center",
          backgroundColor: "#1b1b1bc9",
          padding: 16,
          color: "#eee",
          borderRadius: 32,
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
          }}
        >
          About us
        </h2>
        <p style={{ fontSize: "1.2rem", fontWeight: 300 }}>
          Welcome to Grill Ride, where we serve the juiciest burgers in town!
          Our culinary journey began with a passion for creating the perfect
          burger. <br /> We believe that a burger is not just a meal, but an
          experience that should be savored and enjoyed.
          <br />
          Our team of expert chefs has spent countless hours perfecting our
          recipes to ensure that every bite is packed with flavor and
          satisfaction. At Grill Ride, we are committed to using only the
          freshest and highest quality ingredients. <br />
          Our beef is sourced from local farms and is always fresh, never
          frozen. We also offer a variety of vegetarian and vegan options, so
          everyone can enjoy our delicious burgers. <br />
          Our restaurant is designed to provide a warm and inviting atmosphere
          for our guests. We want you to feel at home when you visit us, and our
          friendly staff is always ready to welcome you with a smile. <br />
          <br />
          Thank you for choosing Grill Ride. We look forward to serving you
          soon!
        </p>
      </div>
      <div style={{ width: "40%" }}>
        <img
          src={RestaurantImage}
          style={{ width: "100%", borderRadius: "100%" }}
          loading="lazy"
          alt="Reastaurant-Photo"
        />
      </div>
    </section>
  );
};

export default About;
