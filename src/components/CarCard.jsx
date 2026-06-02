import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="card">
      <img src={car.image} alt={car.make} />

      <h3>
        {car.make} {car.model}
      </h3>

      <p>{car.year}</p>

      <Link to={`/car/${car.id}`}>View Details</Link>
    </div>
  );
}

export default CarCard;
