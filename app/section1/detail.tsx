import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Section1DetailScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  return (
    <View style={[
      styles.container,
      { 
        backgroundColor: isDark ? '#111827' : '#F9FAFB',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }
    ]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={isDark ? '#FFFFFF' : '#1F2937'} />
        </TouchableOpacity>
        <Text style={[
          styles.headerTitle,
          { color: isDark ? '#FFFFFF' : '#1F2937' }
        ]}>
          Section 1 Detail
        </Text>
      </View>
      
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg' }}
          style={styles.image}
        />
        
        <View style={[
          styles.card,
          { backgroundColor: isDark ? '#1F2937' : '#FFFFFF' }
        ]}>
          <Text style={[
            styles.cardTitle,
            { color: isDark ? '#FFFFFF' : '#1F2937' }
          ]}>
            Detailed Information
          </Text>
          <Text style={[
            styles.cardDescription,
            { color: isDark ? '#9CA3AF' : '#6B7280' }
          ]}>
            This is a detail screen that you navigated to from Section 1. It demonstrates how to navigate to a screen outside of the drawer navigator. You can go back to the drawer by pressing the back button.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  card: {
    borderRadius: 12,
    padding: 16,
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
    lineHeight: 24,
  },
});