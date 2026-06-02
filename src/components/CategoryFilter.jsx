function CategoryFilter({ category, setCategory }) {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="">All</option>

      <option value="SUV">SUV</option>

      <option value="Sedan">Sedan</option>

      <option value="Sports">Sports</option>
    </select>
  );
}

export default CategoryFilter;
