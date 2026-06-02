function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search cars..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
