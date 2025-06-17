export type Team = {
    id: number,
    shield: string,
    name: string,
    category: {
        id: number,
        description: string
    },
    zone: string,
}

export type Match = {
    ID: number,
    localID: number,
    visitID: number,
    localImage: string,
    visitImage: string,
    localName: string,
    visitName: string,
    localResult: number,
    visitResult: number,
    localPenalty?: number,
    visitPenalty?: number,
    date?: string,
    hour?: string,
    legend?: string
}