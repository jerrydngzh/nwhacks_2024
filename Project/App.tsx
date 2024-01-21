import React from 'react';
import { SafeAreaView } from 'react-native';
import { MiMapView } from '@mappedin/react-native-sdk';

// See Trial API key Terms and Conditions
// https://developer.mappedin.com/guides/api-keys
const options = {
  clientId: '65a0422df128bbf7c7072349',
  clientSecret: '5f72653eba818842c16c4fdb9c874ae02100ffced413f638b7bd9c65fd5b92a4',
  venue: 'life-science-institute'
  // perspective: 'Website',
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MiMapView
        style={{ flex: 1 }}
        key="mappedin"
        options={options}
      />
    </SafeAreaView>
  );
};

export default App;