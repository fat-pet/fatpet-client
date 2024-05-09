import CatBreed from '@/api/CatBreed';
import DogBreed from '@/api/DogBreed';

export default function transBreed(speices: string, code: string) {
    const Dogbreed = DogBreed.find((item) => item.code === code);
    const Catbreed = CatBreed.find((item) => item.code === code);
    if (speices === 'CAT') {
        return Catbreed ? Catbreed.value : null;
    } else if (speices === 'DOG') {
        return Dogbreed ? Dogbreed.value : null;
    }
}
