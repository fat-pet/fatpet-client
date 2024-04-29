export interface PetProps {
    birthDate: [number, number]; // [year, month]
    breeds: string[]; // 견종
    avgWeightHigh: number; // 평균 체중 상한선
    avgWeightLow: number; // 평균 체중 하한선
    name: string; // 이름
    sex: "MALE" | "FEMALE"; // 성별
    species: "DOG" | "CAT" | "OTHER"; // 종
    feedCalories: number; // 사료 칼로리
    id: number; // 고유 식별자
    neutered: boolean; // 중성화 여부
}