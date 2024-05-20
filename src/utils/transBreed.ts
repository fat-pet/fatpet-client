import { catDummy } from '@/api/catDummy';
import { dogDummy } from '@/api/dogDummy';

const transBreed = (species: string, code: string) => {
  const dogBreeds = dogDummy.find((item) => item.code === code);
  const catBreeds = catDummy.find((item) => item.code === code);
  if (species === 'CAT') {
    return catBreeds ? catBreeds.value : null;
  } else if (species === 'DOG') {
    return dogBreeds ? dogBreeds.value : null;
  }
};

export default transBreed;
