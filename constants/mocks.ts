import { Category, Match, Team } from "@/libs/types";

export const CATEGORIES_LIST : Category[] = [
  {
    description: "Sub-13",
    id: 1,
    zones: [
        {
            id: 1,
            description: 'Zona A'
        },
        {
            id: 2,
            description: 'Zona B'
        },
        {
            id: 3,
            description: 'Zona C'
        },
    ]
  },
  {
    description: "Sub-15",
    id: 2,
    zones: [
        {
            id: 4,
            description: 'Zona A'
        },
        {
            id: 5,
            description: 'Zona B'
        }
    ]
  },
  {
    description: "Sub-17",
    id: 3,
     zones: [
        {
            id: 6,
            description: 'Zona A'
        },
        {
            id: 7,
            description: 'Zona B'
        }
    ]
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

export const TEAM_LIST : Team[] = [
  {
    id: 1,
    shield: "14.png",
    name: "CLUB ATLÉTICO SARMIENTO DE HUMBOLDT",
    category: CATEGORIES_LIST[0],
    zone: CATEGORIES_LIST[0].zones![0],
  },
  {
    id: 2,
    shield: "15.png",
    name: "CLUB JUVENTUD UNIDA DE HUMBOLDT",
    category: CATEGORIES_LIST[0],
    zone: CATEGORIES_LIST[0].zones![0],
  },
  {
    id: 3,
    shield: "16.png",
    name: "CLUB ATLÉTICO SAN LORENZO",
    category: CATEGORIES_LIST[0],
    zone: CATEGORIES_LIST[0].zones![1],
  },
  {
    id: 4,
    shield: "17.png",
    name: "CLUB ATLÉTICO PILAR",
    category: CATEGORIES_LIST[0],
    zone: CATEGORIES_LIST[0].zones![1],
  },
  {
    id: 5,
    shield: "18.png",
    name: "CLUB UNIÓN DE SANTA FÉ",
    category: CATEGORIES_LIST[1],
    zone: CATEGORIES_LIST[1].zones![0],
  },
  {
    id: 6,
    shield: "19.png",
    name: "CLUB ATLÉTICO SAN LORENZO",
    category: CATEGORIES_LIST[1],
    zone: CATEGORIES_LIST[1].zones![0],
  },
  {
    id: 7,
    shield: "10.png",
    name: "CLUB ATLÉTICO PILAR",
    category: CATEGORIES_LIST[1],
    zone: CATEGORIES_LIST[1].zones![1],
  },
  {
    id: 8,
    shield: "11.png",
    name: "CLUB UNIÓN DE SANTA FÉ",
    category: CATEGORIES_LIST[2],
    zone: CATEGORIES_LIST[2].zones![0],
  },
  {
    id: 9,
    shield: "12.png",
    name: "CLUB ATLÉTICO PILAR",
    category: CATEGORIES_LIST[2],
    zone: CATEGORIES_LIST[2].zones![1],
  },
  {
    id: 10,
    shield: "13.png",
    name: "CLUB UNIÓN DE SANTA FÉ",
    category: CATEGORIES_LIST[2],
    zone: CATEGORIES_LIST[2].zones![1],
  },
];

export const MATCHES_LIST: Match[] = [
  {
    ID: 1,
    localTeam: TEAM_LIST[0],
    visitTeam: TEAM_LIST[1],
    localResult: 2,
    visitResult: 1,
    date: "2025-07-19",
    hour: "15:30",
    legend: "Estadio Municipal",
    category: 1
  },
  {
    ID: 2,
    localTeam: TEAM_LIST[2],
    visitTeam: TEAM_LIST[3],
    localResult: 3,
    visitResult: 3,
    date: "2025-07-19",
    hour: "15:30",
    legend: "Estadio Municipal",
    category: 1
  },
  {
    ID: 3,
    localTeam: TEAM_LIST[0],
    visitTeam: TEAM_LIST[2],
    localResult: 2,
    visitResult: 1,
    date: "2025-07-20",
    hour: "15:30",
    legend: "Estadio Municipal",
    category: 1
  },
  {
    ID: 4,
    localTeam: TEAM_LIST[1],
    visitTeam: TEAM_LIST[3],
    localResult: 3,
    visitResult: 3,
    date: "2025-07-20",
    hour: "15:30",
    legend: "Estadio Municipal",
    category: 1
  },
  {
    ID: 5,
    localTeam: TEAM_LIST[4],
    visitTeam: TEAM_LIST[5],
    localResult: 2,
    visitResult: 1,
    date: "2025-07-19",
    hour: "15:30",
    legend: "Estadio Municipal",
    category: 2
  },
  {
    ID: 6,
    localTeam: TEAM_LIST[7],
    visitTeam: TEAM_LIST[8],
    localResult: 3,
    visitResult: 3,
    date: "2025-07-19",
    hour: "15:30",
    legend: "Estadio Municipal",
    category: 3
  }
];
