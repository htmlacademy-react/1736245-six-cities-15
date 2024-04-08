const FavoritesEmpty = (): JSX.Element => (
  <div className="favorites__status-wrapper">
    <b className="favorites__status">Nothing has been saved yet</b>
    <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
  </div>
);

export default FavoritesEmpty;
