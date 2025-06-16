import { useEffect } from 'react';
import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the first section of the drawer navigator
  return <Redirect href="/(drawer)/section1" />;
}