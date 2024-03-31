import Promo_1 from "../../../assets/promo-5.webp";
import Promo_2 from "../../../assets/promo-10.webp";
import Card from "./Card";

const Promotions = () => {
  return (
    <section className="bg-neutral-900 flex flex-col items-center justify-center p-4 gap-4 text-yellow-400 sm:flex-row sm:justify-around sm:p-8">
      <h2 className="text-3xl font-bold text-neutral-200 sm:text-4xl">
        <span className="text-red-500">SUPER</span> PROMOTIONS!
      </h2>
      <Card image={Promo_1} title="EXRTRA CHEESE BURGER" />
      <Card image={Promo_2} title="SUPER ONION BURGER" />
    </section>
  );
};

export default Promotions;
