import logo from "@/assets/Logo-hamburguesa-oficia-variacionl.webp";
import "./animation.css";

const Loader = () => {
  return (
    <section className="flex justify-center items-center h-[100dvh] border border-black">
      <img src={logo} loading="lazy" className="loadImage w-[300px]" />
    </section>
  );
};

export default Loader;
