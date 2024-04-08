import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleFavorite } from '../../store/thunks/offers';
import { AppRoute, AuthorizationStatus } from '../../services/constants';

type TFavoriteLabelProps = {
  isFavorite: boolean;
  id: string | undefined;
  className: string;
  width: string;
  height: string;
}

const FavoriteLabel = React.memo(({ id, isFavorite, className, width, height }: TFavoriteLabelProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  const isFavoriteActive = isFavorite ? ' place-card__bookmark-button--active' : '';
  const navigate = useNavigate();

  const handleToggleFavorite = () => {
    if (!authStatus || authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    } else {
      if (id && authStatus === AuthorizationStatus.Auth) {
        dispatch(toggleFavorite({ id, isFavorite: !isFavorite }));
      }
    }
  };

  return (
    <button onClick={handleToggleFavorite} id={id} className={className + isFavoriteActive} type="button">
      <svg className="place-card__bookmark-icon" width={width} height={height}><use xlinkHref="#icon-bookmark"></use></svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
});
FavoriteLabel.displayName = 'FavoriteLabel';
export default FavoriteLabel;
