

const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card mx-6 bg-base-100 shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;