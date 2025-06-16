import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import { COLORS } from '@/constants/theme';

const categories = [
  { id: '1', name: 'Electronics', count: '245 items', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg' },
  { id: '2', name: 'Clothing', count: '132 items', image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg' },
  { id: '3', name: 'Home & Kitchen', count: '89 items', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg' },
  { id: '4', name: 'Sports & Outdoors', count: '76 items', image: 'https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg' },
  { id: '5', name: 'Beauty & Personal Care', count: '112 items', image: 'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg' },
  { id: '6', name: 'Books', count: '68 items', image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg' },
];

export default function ContactsScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = 'dark'; //colorScheme === 'dark';

  return (
    <View style={{backgroundColor: COLORS.background.dark, flex: 1 }}>

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
        Categories
      </Text>
      
      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        {categories.map(category => (
          <TouchableOpacity 
            key={category.id} 
            style={[
              styles.categoryCard,
              { backgroundColor: isDark ? '#1F2937' : '#FFFFFF' }
            ]}
          >
            <Image source={{ uri: category.image }} style={styles.categoryImage} />
            <View style={styles.categoryOverlay} />
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>{category.count}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  categoryCard: {
    height: 120,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  categoryInfo: {
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 14,
    color: '#E5E7EB',
  },
});