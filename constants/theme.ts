import { Match } from "@/libs/types";

export const BASE_URL = "https://vps-4677860-x.dattaweb.com/guillermito";

export const COLORS = {
  // Primary Colors
  secondary: "#e2c00c", // Vibrant Yellow
  secondaryDark: "#FFB700", // Darker Yellow
  secondaryLight: "#FFE44D", // Lighter Yellow

  // Secondary Colors
  primary: "#1A1A1A", // Rich Black
  primaryDark: "#000000", // Pure Black
  primaryLight: "#333333", // Lighter Black

  // Accent Colors
  accent1: "#FFE082", // Soft Yellow
  accent2: "#424242", // Dark Gray

  // Status Colors
  success: "#4CAF50",
  error: "#F44336",
  warning: "#FFC107",
  info: "#2196F3",

  // Background Colors
  background: {
    light: "#FFFFFF",
    dark: "#1e1c15",
  },

  drawer: {
    active: "#FFB700",
    inactive: "#CCCCCC",
    backColor: "#1e1c15",
  },

  tabBar: {
    active: "#FFB700",
    inactive: "#CCCCCC",
    backColor: "#1e1c15",
  },

  // Text Colors
  text: {
    dark: {
      primary: "#1A1A1A",
      secondary: "#424242",
      tertiary: "#757575",
    },
    light: {
      primary: "#FFFFFF",
      secondary: "#E0E0E0",
      tertiary: "#BDBDBD",
    },
  },

  // Border Colors
  border: {
    light: "#E0E0E0",
    dark: "#333333",
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 999,
};

export const SHADOWS = {
  light: {
    small: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
  },
  dark: {
    small: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
  },
};

export const CATEGORIES_LIST = [
  {
    description: "Sub-13",
    id: 1,
  },
  {
    description: "Sub-15",
    id: 2,
  },
  {
    description: "Sub-17",
    id: 3,
  },
  {
    description: "Sub-19",
    id: 4,
  },
  {
    description: "Sub-21",
    id: 5,
  },
  {
    description: "Sub-23",
    id: 6,
  },
];

export const TEAM_LIST = [
  {
    id: 1,
    shield: "14.png",
    name: "CLUB ATLÉTICO SARMIENTO DE HUMBOLDT",
    category: {
      id: 1,
      description: "Sub-13",
    },
    zone: "Zona A",
  },
  {
    id: 2,
    shield: "15.png",
    name: "CLUB JUVENTUD UNIDA DE HUMBOLDT",
    category: {
      id: 1,
      description: "Sub-13",
    },
    zone: "Zona A",
  },
  {
    id: 3,
    shield: "16.png",
    name: "CLUB ATLÉTICO SAN LORENZO",
    category: {
      id: 1,
      description: "Sub-13",
    },
    zone: "Zona B",
  },
  {
    id: 4,
    shield: "17.png",
    name: "CLUB ATLÉTICO PILAR",
    category: {
      id: 1,
      description: "Sub-13",
    },
    zone: "Zona B",
  },
  {
    id: 5,
    shield: "18.png",
    name: "CLUB UNIÓN DE SANTA FÉ",
    category: {
      id: 2,
      description: "Sub-15",
    },
    zone: "Zona C",
  },
  {
    id: 6,
    shield: "19.png",
    name: "CLUB ATLÉTICO SAN LORENZO",
    category: {
      id: 3,
      description: "Sub-15",
    },
    zone: "Zona C",
  },
  {
    id: 7,
    shield: "10.png",
    name: "CLUB ATLÉTICO PILAR",
    category: {
      id: 2,
      description: "Sub-15",
    },
    zone: "Zona D",
  },
  {
    id: 8,
    shield: "11.png",
    name: "CLUB UNIÓN DE SANTA FÉ",
    category: {
      id: 3,
      description: "Sub-17",
    },
    zone: "Zona D",
  },
  {
    id: 9,
    shield: "12.png",
    name: "CLUB ATLÉTICO PILAR",
    category: {
      id: 3,
      description: "Sub-17",
    },
    zone: "Zona E",
  },
  {
    id: 10,
    shield: "13.png",
    name: "CLUB UNIÓN DE SANTA FÉ",
    category: {
      id: 3,
      description: "Sub-17",
    },
    zone: "Zona E",
  },
];

// Mock data for matches
export const MATCHES_LIST: Match[] = [
  {
    ID: 1,
    localID: 101,
    visitID: 102,
    localImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/11.png",
    visitImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/12.png",
    localName: "CLUB ATLÉTICO PILAR",
    visitName: "CLUB UNIÓN DE SANTA FÉ",
    localResult: 2,
    visitResult: 1,
    date: "2024-01-15",
    hour: "15:30",
    legend: "Estadio Municipal",
  },
  {
    ID: 2,
    localID: 103,
    visitID: 104,
    localImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/13.png",
    visitImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/14.png",
    localName: "CLUB JUVENTUD UNIDA",
    visitName: "CLUB LOS ANDES",
    localResult: 1,
    visitResult: 1,
    localPenalty: 4,
    visitPenalty: 5,
    date: "2024-01-20",
    hour: "18:00",
    legend: "Definición por penales",
  },
  {
    ID: 3,
    localID: 105,
    visitID: 106,
    localImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/15.png",
    visitImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/16.png",
    localName: "CLUB ESTRELLA DEL SUR",
    visitName: "CLUB NUEVA ESPERANZA",
    localResult: 0,
    visitResult: 3,
    date: "2024-01-25",
    hour: "17:00",
    legend: "Estadio Visitante",
  },
  {
    ID: 4,
    localID: 107,
    visitID: 108,
    localImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/17.png",
    visitImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/18.png",
    localName: "CLUB DEPORTIVO NORTE",
    visitName: "CLUB ATLÉTICO SUR",
    localResult: 0,
    visitResult: 0,
    date: "2024-02-01",
    hour: "19:00",
    legend: "Próximo partido",
  },
  {
    ID: 5,
    localID: 109,
    visitID: 110,
    localImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/19.png",
    visitImage: "https://vps-4677860-x.dattaweb.com/guillermito/img/shields/10.png",
    localName: "CLUB ATLÉTICO LIBERTAD",
    visitName: "CLUB BARRIO NUEVO",
    localResult: 0,
    visitResult: 0,
    date: "2024-02-08",
    hour: "16:00",
  },
];


export const ZONES = {
  "Sub-13": ["Zona A", "Zona B", "Zona C"],
  "Sub-15": ["Zona A", "Zona B"],
  "Sub-17": ["Zona A", "Zona B", "Zona C", "Zona D"],
  "Primera División": ["Zona A", "Zona B"],
};
