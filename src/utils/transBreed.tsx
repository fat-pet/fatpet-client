import DogBreed from "@/api/mock";

export default function transBreed(code :string) {
    const breed = DogBreed.find(item => item.code === code);
    return breed ? breed.value : null;
}