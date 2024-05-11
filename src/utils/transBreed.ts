import CatDummyData from '@/api/CatDummyData';
import DogDummyData from '@/api/DogDummyData';

const transBreed = (species: string, code: string) => {
  const dogBreeds = DogDummyData.find((item) => item.code === code);
  const catBreeds = CatDummyData.find((item) => item.code === code);

  if (species === 'CAT') {
    return catBreeds ? catBreeds.value : null;
  } else if (species === 'DOG') {
    return dogBreeds ? dogBreeds.value : null;
  }
};

export default transBreed;
