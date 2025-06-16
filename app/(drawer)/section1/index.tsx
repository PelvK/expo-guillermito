import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
//import { ChevronRight } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';

export default function Section1Screen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla principal del Guillermito</Text>
    </View>
  )

  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: isDark ? '#111827' : '#F9FAFB',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }
    ]}>
      <Text style={[
        styles.title,
        { color: isDark ? '#FFFFFF' : '#1F2937' }
      ]}>
        Home
      </Text>
      
      <View style={[
        styles.card,
        { backgroundColor: isDark ? '#1F2937' : '#FFFFFF' }
      ]}>
        <Text style={[
          styles.cardTitle,
          { color: isDark ? '#FFFFFF' : '#1F2937' }
        ]}>
          Welcome to Section 1
        </Text>
        <Text style={[
          styles.cardDescription,
          { color: isDark ? '#9CA3AF' : '#6B7280' }
        ]}>
          Pantalla inicial del Guillermito
        </Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/section1/detail')}
        >
          <Text style={styles.buttonText}>View Details</Text>
          {/*<ChevronRight size={20} color="#FFFFFF" />*/}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    padding: 14,
    textAlign: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
});