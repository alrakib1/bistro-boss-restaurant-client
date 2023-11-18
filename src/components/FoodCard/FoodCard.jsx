const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  // console.log(price);
  return (
    <div className="card mx-6 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-3 py-[1px] bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline bg-slate-100 border-amber-500 text-center border-0 border-b-4 mt-4 mb-10">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
