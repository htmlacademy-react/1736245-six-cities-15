import { useRef, useState, useEffect } from 'react';
import leaflet from 'leaflet';

function useMap(mapRef: React.MutableRefObject<null>) {
  const [map, setMap] = useState<leaflet.Map|null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    let instance: leaflet.Map;
    if (mapRef.current !== null && !isRenderedRef.current) {
      instance = leaflet.map(mapRef.current);
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      isRenderedRef.current = true;
      setMap(instance);
    }
  }, [mapRef]);

  return map;
}

export default useMap;
