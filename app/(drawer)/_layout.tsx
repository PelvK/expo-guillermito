import { Drawer } from 'expo-router/drawer';
import { CustomDrawerContent } from '@/components/drawer/CustomDrawerContent';
import { Chrome as Home, FileText, ChartBar as BarChart4, ShoppingCart, User, Settings, HomeIcon, Shield, Users2, AnvilIcon, BadgeInfoIcon, AlignVerticalDistributeEndIcon } from 'lucide-react-native';
import { useColorScheme } from 'react-native';
import { COLORS } from '@/constants/theme';

export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  const isDark = 'dark'; // colorScheme === 'dark';
  
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: COLORS.drawer.active,
        drawerInactiveTintColor: COLORS.drawer.inactive,
        drawerStyle: {
          backgroundColor: isDark ? COLORS.drawer.backColor : '#FFFFFF',
        },
        headerStyle: {
          backgroundColor: isDark ? COLORS.primary : '#FFFFFF',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="section1/index"
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="section2/index"
        options={{
          title: 'Encuentros',
          drawerIcon: ({ color, size }) => <AlignVerticalDistributeEndIcon color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="section3/index"
        options={{
          title: 'Equipos',
          drawerIcon: ({ color, size }) => <Shield color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="section4/index"
        options={{
          title: 'Grupos',
          drawerIcon: ({ color, size }) => <Users2 color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="section5/index"
        options={{
          title: 'Cruces',
          drawerIcon: ({ color, size }) => <AnvilIcon color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="section6"
        options={{
          title: 'Información',
          drawerIcon: ({ color, size }) => <BadgeInfoIcon color={color} size={size} />,
        }}
      />
    </Drawer>
  );
}