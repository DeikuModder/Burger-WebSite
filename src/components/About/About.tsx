import RestaurantPic from "../../assets/welcome-image.jpg";

const About = () => {
  return (
    <section className="p-4">
      <h2 className="text-5xl font-bold text-center">About us</h2>
      <div className="flex flex-col justify-center items-center gap-2 sm:flex-row-reverse sm:gap-8">
        <figure
          className="w-[300px] sm:w-[500px]"
          style={{ shapeOutside: "circle(50%)" }}
        >
          <img
            src={RestaurantPic}
            className="w-full rounded-full"
            loading="lazy"
            alt="Reastaurant-Photo"
          />
        </figure>

        <p className="text-xl font-semibold bg-[#f3f3f3a1] p-2 rounded-xl text-center max-w-[700px] sm:text-start sm:text-2xl">
          Welcome to Grill Ride, where we serve the juiciest burgers in town!
          Our culinary journey began with a passion for creating the perfect
          burger. <br /> We believe that a burger is not just a meal, but an
          experience that should be savored and enjoyed.
          <br />
          Our restaurant is designed to provide a warm and inviting atmosphere
          for our guests. We want you to feel at home when you visit us, and our
          friendly staff is always ready to welcome you with a smile. <br />
          <br />
          Thank you for choosing Grill Ride. We look forward to serving you
          soon!
        </p>
      </div>
    </section>
  );
};

export default About;
