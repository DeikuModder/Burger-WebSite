const Item = ({
  image,
  title,
  price,
  ingredients,
}: {
  image: string;
  title: string;
  price: number;
  ingredients: string[];
}) => {
  return (
    <article className="flex flex-col justify-center items-center w-[270px] text-center bg-neutral-50 rounded-b-xl">
      <figure className="h-[60%] w-full">
        <img src={image} className="h-full w-full" loading="lazy" />
      </figure>
      <div className="h-[40%] p-1">
        <h3 className="text-xl font-bold">{title} 🍔</h3>
        <p className="text-xl font-semibold">{price}$</p>
        <p className="flex flex-wrap">
          {ingredients.join(", ").replace(/_+/g, " ")}
        </p>
      </div>
    </article>
  );
};

export default Item;
