import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { StyleSheet, View, Text, Image, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function CustomDrawerContent(props: any) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  return (
    <DrawerContentScrollView 
      {...props}
      contentContainerStyle={[
        styles.container, 
        { paddingTop: insets.top }
      ]}
    >
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' }}
          style={styles.userImage}
        />
        <View style={styles.userInfo}>
          <Text style={[
            styles.userName, 
            { color: isDark ? '#FFFFFF' : '#1F2937' }
          ]}>
            Jessica Smith
          </Text>
          <Text style={[
            styles.userEmail, 
            { color: isDark ? '#9CA3AF' : '#6B7280' }
          ]}>
            jessica@example.com
          </Text>
        </View>
      </View>
      
      <View style={[
        styles.divider, 
        { backgroundColor: isDark ? '#374151' : '#E5E7EB' }
      ]} />
      
      <DrawerItemList {...props} />
      
      <View style={styles.footer}>
        <Text style={[
          styles.versionText, 
          { color: isDark ? '#9CA3AF' : '#6B7280' }
        ]}>
          App Version 1.0.0
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
  footer: {
    padding: 16,
    marginTop: 'auto',
  },
  versionText: {
    fontSize: 12,
    textAlign: 'center',
  },
});