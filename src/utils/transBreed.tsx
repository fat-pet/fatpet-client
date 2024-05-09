import CatBreeds from '@/api/CatBreed';
import DogBreeds from '@/api/DogBreed';

export default function transBreed(species: string, code: string) {
  const dogBreeds = CatBreeds.find((item) => item.code === code);
  const catBreeds = DogBreeds.find((item) => item.code === code);


  if (species === 'CAT') {
    return catBreeds ? catBreeds.value : null;
  } else if (species === 'DOG') {
    return dogBreeds ? dogBreeds.value : null;
  }
}
