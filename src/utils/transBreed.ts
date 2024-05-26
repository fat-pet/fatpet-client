import { catDummy } from '@/api/catDummy';
import { dogDummy } from '@/api/dogDummy';

const transBreed = (species: string, code: string) => {
  const dogBreed = dogDummy.find((item) => item.code === code);
  const catBreed = catDummy.find((item) => item.code === code);
  if (species === 'CAT') {
    return catBreed ? catBreed.value : null;
  } else if (species === 'DOG') {
    return dogBreed ? dogBreed.value : null;
  }
};

export default transBreed;
