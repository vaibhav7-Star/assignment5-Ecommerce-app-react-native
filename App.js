
import { StyleSheet, Text, View } from 'react-native';
import Rootnavigation from './Rootnavigation';
import ProviderStore from './redux/Provider';

export default function App() {
  return (
    <ProviderStore>
   <Rootnavigation/>
   </ProviderStore>
  );
}

