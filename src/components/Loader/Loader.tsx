import logo from "@/assets/Logo-hamburguesa-oficia-variacionl.webp";
import "@/styles/components/_loader.scss";

const Loader = () => {
  return (
    <section>
      <img src={logo} loading="lazy" className="loadImage" />
      Loading...
    </section>
  );
};

export default Loader;
