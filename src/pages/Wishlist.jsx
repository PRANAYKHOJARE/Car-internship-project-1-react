import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No cars in wishlist</h2>
      ) : (
        <div className="grid">
          {wishlist.map((car) => (
            <div className="card" key={car.id}>
              <img src={car.image} alt={`${car.make} ${car.model}`} />

              <h3>
                {car.make} {car.model}
              </h3>

              <p>{car.year}</p>

              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(car.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
