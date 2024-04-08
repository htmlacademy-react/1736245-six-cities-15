// import { createSelector } from '@reduxjs/toolkit';

// // Assuming your store structure looks like this:
// // state = {
// //   cities: { city: 'CityName', activeSorting: 'SortingName' },
// //   offers: { offers: [], favorites: [], areOffersLoading: false, areFavoritesFetched: false },
// //   auth: { authStatus: 'AuthStatus', user: {} },
// //   currentOffer: { currentOffer: null, nearByOffers: [] },
// //   reviews: { reviews: [] }
// // }

// // Basic selectors
// const selectCurrentCity = (state) => state.cities.city;
// const selectOffers = (state) => state.offers.offers;
// const selectFavorites = (state) => state.offers.favorites;
// const selectCurrentOffer = (state) => state.currentOffer.currentOffer;
// const selectNearByOffers = (state) => state.currentOffer.nearByOffers;
// const selectReviews = (state) => state.reviews.reviews;
// const selectIsAuth = (state) => state.auth.authStatus === 'AUTH';

// // Memoized selectors
// export const selectFilteredOffersByCity = createSelector(
//   [selectOffers, selectCurrentCity],
//   (offers, city) => offers.filter((offer) => offer.city.name === city)
// );

// export const selectFavoriteOffers = createSelector(
//   [selectOffers, selectFavorites],
//   (offers, favorites) => offers.filter((offer) => favorites.includes(offer.id))
// );

// export const selectIsCurrentOfferFavorite = createSelector(
//   [selectCurrentOffer, selectFavorites],
//   (currentOffer, favorites) => currentOffer && favorites.includes(currentOffer.id)
// );

// export const selectSortedNearByOffers = createSelector(
//   selectNearByOffers,
//   (nearByOffers) => {
//     // Assuming you have some sorting logic based on your requirements
//     return nearByOffers.sort((a, b) => a.distance - b.distance);
//   }
// );

// export const selectLatestReviews = createSelector(
//   selectReviews,
//   (reviews) => {
//     // Assuming you want to limit to the latest 10 reviews
//     return reviews.slice(0, 10);
//   }
// );

// export const selectIsUserAuth = createSelector(
//   selectIsAuth,
//   (isAuth) => isAuth
// );

