interface breed {
  avgWeightHigh: number;
  avgWeightLow: number;
  name: string;
  sex: string;
  species: string;
}

export interface PetProps {
  birthDate: [number, number]; // [year, month]
  breed: breed; // 견종
  avgWeightHigh: number; // 평균 체중 상한선
  avgWeightLow: number; // 평균 체중 하한선
  name: string; // 이름
  sex: 'MALE' | 'FEMALE'; // 성별
  species: 'DOG' | 'CAT'; // 종
  feedCalories: number; // 사료 칼로리
  id: number; // 고유 식별자
  neutered: boolean; // 중성화 여부
}

export interface PetResult {
  neckCirc: number;
  weight: number;
  chestCirc: number;
  feedAmount: number;
  bcs: string;
  der: number;
  createdDate: string;
  id: number;
}

export interface Member {
  email: string;
  nickname: string;
  loginId: string;
}

export interface BoardProps {
  title: string;
  createdDate: number[];
  member: Member;
  id: number;
  content: string;
}

export interface CommentProps {
  id: number;
  createdDate: string;
  content: string;
  member: Member;
}

export interface BreedItem {
  id: number;
  value: string;
  code: string;
}

export interface Breed {
  species: string;
  name: string;
  code: number;
  sex: string;
  avgWeightLow: number;
  avgWeightHigh: number;
  id: number;
}
