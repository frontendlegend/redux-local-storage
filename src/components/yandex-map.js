import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

import './yandex-map.css';

function YandexMap(props) {
  const mapData = {
    center: [51.128207, 71.430411],
    zoom: props.zoom,
  };
  
  return (
    <div className="content__image yandex-map">
      <YMaps>
        <Map className="yandex-map" defaultState={mapData} />
      </YMaps>
    </div>
  )
}

export default YandexMap;