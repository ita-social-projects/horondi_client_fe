// import React from 'react';

// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// import { GOOGLE_MAPS_API_KEY } from '../../../configs/index';
// import { useStyles } from './map-container.styles';

// const MapContainer = () => {
//   const classes = useStyles();

//   const defaultCenter = {
//     lat: 41.3851, lng: 2.1734
//   };

//   const locations = [
//     {
//       name: 'Location 1',
//       location: {
//         lat: 45.3954,
//         lng: 12.162
//       }
//     }
//   ];

//   return (
//     <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={classes.map}
//         zoom={13}
//         center={defaultCenter}
//       >
//         {locations.map((item) => {
//           return <Marker key={item.name} position={item.location} />;
//         })}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapContainer;
