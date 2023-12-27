import GrillRide from "@/assets/grill-ride-bag.webp";
import "@/styles/components/_contact.scss";
import { faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact">
      <figure style={{ width: "40%", shapeOutside: "circle(50%)" }}>
        <img
          src={GrillRide}
          loading="lazy"
          style={{ width: "100%", borderRadius: "100%" }}
        />
      </figure>
      <div
        style={{
          width: "40%",
          textAlign: "center",
          backgroundColor: "#1b1b1bc9",
          padding: 32,
          color: "#eee",
          borderRadius: 32,
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: 32,
          }}
        >
          Contact us, ask for your Grill Ride!
        </h2>

        <ul style={{ textAlign: "start", fontSize: "1.5rem" }}>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} /> 555-555-55555
          </li>
          <li>
            <FontAwesomeIcon icon={faMailBulk} /> grillride@notrealemail.com
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
