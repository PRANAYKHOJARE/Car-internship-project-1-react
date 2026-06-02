import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCars } from "../services/api";
import { useCart } from "../context/CartContext";
import { getCarImage } from "../services/imageApi";

function CarDetails() {
  const { id } = useParams();

  const [car, setCar] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    loadCar();
  }, [id]);

  const loadCar = async () => {
    try {
      const cars = await fetchCars();

      const selectedCar = cars.find((car) => car.id.toString() === id);

      if (selectedCar) {
        const image = await getCarImage(
          `${selectedCar.make} ${selectedCar.model}`,
        );

        setCar({
          ...selectedCar,
          image,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!car) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="car-details">
      <img src={car.image} alt={`${car.make} ${car.model}`} />

      <div className="details-info">
        <h1>
          {car.make} {car.model}
        </h1>

        <p>
          <strong>Year:</strong> {car.year}
        </p>

        <p>
          <strong>Category:</strong> {car.category}
        </p>
        <p>
          <strong>Price:</strong> {car.price}
        </p>
        <p>
          <strong>Fuel:</strong> {car.fuel}
        </p>
        <p>
          <strong>Transmission:</strong> {car.transmission}
        </p>
        <p>
          <strong>Engine:</strong> {car.engine}
        </p>
        <p>
          <strong>Mileage:</strong> {car.mileage}
        </p>
        <p>
          <strong>Seats:</strong> {car.seats}
        </p>
        <p>
          <strong>Color:</strong> {car.color}
        </p>
        <button onClick={() => addToCart(car)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default CarDetails;
