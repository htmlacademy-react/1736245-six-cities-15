import { useAppDispatch } from '../../hooks';
import { toggleFavorite } from '../../store/thunks/offers';

type TFavoriteLabelProps = {
  isFavorite: boolean;
  id: string | undefined;
  className: string;
  width: string;
  height: string;
}

const FavoriteLabel = ({ id, isFavorite, className, width, height }: TFavoriteLabelProps) => {
  const dispatch = useAppDispatch();

  const handleToggleFavorite = () => {
    if(id) {
      dispatch(toggleFavorite({id, isFavorite: !isFavorite}));
    }
  };

  return (
    <button onClick= { handleToggleFavorite } id={id} className={className} type="button">
      <svg className="place-card__bookmark-icon" width = { width } height = { height }><use xlinkHref="#icon-bookmark"></use></svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

export default FavoriteLabel;
