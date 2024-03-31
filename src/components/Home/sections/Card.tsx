/**
 *
 * @param props - Image and title to show in the card
 * @returns
 */
const Card = ({ image, title }: { image: string; title: string }) => {
  return (
    <article className="flex flex-col justify-center items-center">
      <figure className="w-[200px] aspect-square rounded-full sm:w-[270px]">
        <img
          src={image}
          alt="Card Image"
          loading="lazy"
          className="w-full aspect-square rounded-full"
        />
      </figure>
      <h3 className="text-center font-bold text-xl">{title}</h3>
    </article>
  );
};

export default Card;
