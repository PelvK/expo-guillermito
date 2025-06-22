import { Category, Match, Team } from "@/libs/types";
import { Position } from "@/libs/types/Position";

export const CATEGORIES_LIST: Category[] = [
  {
    description: "Sub-13",
    id: 1,
    zones: [
      {
        id: 1,
        description: "Zona A",
      },
      {
        id: 2,
        description: "Zona B",
      },
      {
        id: 3,
        description: "Zona C",
      },
    ],
  },
  {
    description: "Sub-15",
    id: 2,
    zones: [
      {
        id: 4,
        description: "Zona A",
      },
      {
        id: 5,
        description: "Zona B",
      },
    ],
  },
  {
    description: "Sub-17",
    id: 3,
    zones: [
      {
        id: 6,
        description: "Zona A",
      },
      {
        id: 7,
        description: "Zona B",
      },
    ],
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

export const TEAM_LIST: Team[] = [
  {
    id: 1,
    shield: "14.png",
    name: "CLUB ATLÉTICO RIVER PLATE",
    category: CATEGORIES_LIST[0],
    zone: CATEGORIES_LIST[0].zones![0],
  },
  {
    id: 2,
    shield: "15.png",
    name: "CLUB ATLÉTICO BOCA JRS.",
    category: CATEGORIES_LIST[0],
    zone: CATEGORIES_LIST[0].zones![0],
  },
  {
    id: 3,
    shield: "16.png",
    name: "CLUB ATLÉTICO ARGENTINO JRS.",
    category: CATEGORIES_LIST[0],
    zone: CATEGORIES_LIST[0].zones![1],
  },
  {
    id: 4,
    shield: "17.png",
    name: "CLUB ATLÉTICO SARMIENTO",
    category: CATEGORIES_LIST[0],
    zone: CATEGORIES_LIST[0].zones![1],
  },
  {
    id: 5,
    shield: "18.png",
    name: "ESTUDIANTES DE LA PLATA",
    category: CATEGORIES_LIST[1],
    zone: CATEGORIES_LIST[1].zones![0],
  },
  {
    id: 6,
    shield: "19.png",
    name: "ROSARIO CENTRAL",
    category: CATEGORIES_LIST[1],
    zone: CATEGORIES_LIST[1].zones![0],
  },
  {
    id: 7,
    shield: "10.png",
    name: "NEWELL'S OLD BOYS ",
    category: CATEGORIES_LIST[1],
    zone: CATEGORIES_LIST[1].zones![1],
  },
  {
    id: 8,
    shield: "11.png",
    name: "GIMNASIA Y ESGRIMA DE DE LA PLATA",
    category: CATEGORIES_LIST[2],
    zone: CATEGORIES_LIST[2].zones![0],
  },
  {
    id: 9,
    shield: "12.png",
    name: "CLUB BARRACAS CENTRAL",
    category: CATEGORIES_LIST[2],
    zone: CATEGORIES_LIST[2].zones![1],
  },
  {
    id: 10,
    shield: "13.png",
    name: "CLUB ATLÉTICO PLATENSE",
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
    legend: "Zona A",
    place: {
      id: 1,
      description: "Cancha 1",
    },
    category: 1,
    type: 1,
  },
  {
    ID: 2,
    localTeam: TEAM_LIST[2],
    visitTeam: TEAM_LIST[3],
    localResult: 3,
    visitResult: 3,
    date: "2025-07-19",
    hour: "15:30",
    legend: "Zona B",
    place: {
      id: 1,
      description: "Cancha 1",
    },
    category: 1,
    type: 1,
  },
  {
    ID: 3,
    localTeam: TEAM_LIST[0],
    visitTeam: TEAM_LIST[2],
    localResult: 2,
    visitResult: 1,
    date: "2025-07-20",
    hour: "15:30",
    legend: "Zona B",
    place: {
      id: 2,
      description: "Cancha 2",
    },
    category: 1,
    type: 1,
  },
  {
    ID: 4,
    localTeam: TEAM_LIST[1],
    visitTeam: TEAM_LIST[3],
    localResult: 3,
    visitResult: 3,
    date: "2025-07-20",
    hour: "15:30",
    legend: "Zona C",
    place: {
      id: 3,
      description: "Cancha 3",
    },
    category: 1,
    type: 1,
  },
  {
    ID: 5,
    localTeam: TEAM_LIST[4],
    visitTeam: TEAM_LIST[5],
    localResult: 2,
    visitResult: 1,
    date: "2025-07-19",
    hour: "15:30",
    legend: "Zona C",
    place: {
      id: 2,
      description: "Cancha 2",
    },
    category: 2,
    type: 1,
  },
  {
    ID: 6,
    localTeam: TEAM_LIST[7],
    visitTeam: TEAM_LIST[8],
    localResult: 3,
    visitResult: 3,
    date: "2025-07-19",
    hour: "15:30",
    legend: "Zona D",
    place: {
      id: 1,
      description: "Cancha 1",
    },
    category: 3,
    type: 1,
  },
];

// Mock data for standings
export const POSITIONS_LIST: Position[] = [
  {
    ID: 1,
    position: 1,
    team: TEAM_LIST[0],
    matchs: {
      played: 4,
      won: 3,
      drawn: 1,
      lost: 0,
    },
    goals: {
      favor: 15,
      against: 4,
      difference: 11,
    },
    points: 10,
  },
  {
    ID: 2,
    position: 2,
    team: TEAM_LIST[1],
    matchs: {
      played: 4,
      won: 2,
      drawn: 2,
      lost: 0,
    },
    goals: {
      favor: 11,
      against: 6,
      difference: 5,
    },
    points: 8,
  },
  {
    ID: 3,
    position: 3,
    team: TEAM_LIST[2],
    matchs: {
      played: 4,
      won: 2,
      drawn: 1,
      lost: 1,
    },
    goals: {
      favor: 9,
      against: 9,
      difference: 0,
    },
    points: 7,
  },
  {
    ID: 4,
    position: 4,
    team: TEAM_LIST[3],
    matchs: {
      played: 4,
      won: 1,
      drawn: 0,
      lost: 3,
    },
    goals: {
      favor: 4,
      against: 9,
      difference: -5,
    },
    points: 3,
  },
];
