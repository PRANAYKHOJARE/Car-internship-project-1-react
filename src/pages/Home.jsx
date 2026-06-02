import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCars } from "../services/api";
import { getCarImage } from "../services/imageApi";
import { useWishlist } from "../context/WishlistContext";
import { motion } from "framer-motion";

function Home() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars();

        const carsWithImages = await Promise.all(
          data.slice(0, 16).map(async (car, index) => ({
            ...car,
            id: index + 1,
            image: await getCarImage(`${car.make} ${car.model}`),
          })),
        );

        setCars(carsWithImages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    // Initial load
    loadCars();

    // Auto refresh every 30 seconds
    const interval = setInterval(() => {
      console.log("Refreshing car data...");
      loadCars();
    }, 30000);

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesSearch = `${car.make} ${car.model}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" ||
      (car.category && car.category.toLowerCase() === category);

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <h2>Loading Cars...</h2>;
  }

  return (
    <>
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Find Your Dream Car</h1>
        <p>Browse Premium Cars</p>
      </motion.section>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Cars</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      <div className="grid">
        {filteredCars.map((car) => (
          <motion.div
            className="card"
            key={car.id}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <img src={car.image} alt={`${car.make} ${car.model}`} />

            <h3>
              {car.make} {car.model}
            </h3>

            <p>{car.year}</p>

            <div className="card-actions">
              <button
                className="wishlist-btn"
                onClick={() => addToWishlist(car)}
              >
                ❤️ Wishlist
              </button>

              <Link className="details-btn" to={`/car/${car.id}`}>
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Home;
