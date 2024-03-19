import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet, { layerGroup } from 'leaflet';
import { DEFAULT_CITY, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../services/constants';
import { TOffer } from '../../services/types/offers';

type TMapProps = {
  activeOfferId: string | null;
  offers: TOffer[];
};

function Map({offers, activeOfferId}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const city = DEFAULT_CITY;

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (city && map) {
      const loc: leaflet.LatLngExpression = {
        lat: city.location.latitude,
        lng: city.location.longitude};
      map.setView(loc, city.location.zoom);
    }
  }, [map, city]);
  useEffect(() => {
    if (offers) {
      if (map) {
        const markerLayer = layerGroup().addTo(map);
        offers.forEach((offer) => {
          leaflet
            .marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            }, {
              icon: offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
            })
            .addTo(markerLayer);
        });
      }
    }
  }, [map, offers, activeOfferId, currentCustomIcon, defaultCustomIcon]);

  if (offers) {
    return (
      <section ref={mapRef} data-id={activeOfferId} className="cities__map map"></section>
    );
  }
  return (
    <section className="cities__map map"></section>
  );
}

export default Map;
