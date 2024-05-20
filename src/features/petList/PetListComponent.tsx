import { FaDog } from 'react-icons/fa6';
import { FaCat } from 'react-icons/fa';
import { PetProps } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import transBreed from '@/utils/transBreed';

export default function PetListComponent({ pet }: { pet: PetProps }) {
  const navigate = useNavigate();
  function handleClicked() {
    localStorage.setItem('petData', JSON.stringify(pet));
    navigate('/dashboard');
  }

  return (
    <div
      className="w-full aspect-[4/1] flex items-center px-5 border-b-2 hover:cursor-pointer hover:bg-gray-200"
      onClick={handleClicked}
    >
      {pet?.breeds.species === 'DOG' ? (
        <FaDog className="w-16 h-16 mr-5 text-gray-400" />
      ) : (
        <FaCat className="w-16 h-16 mr-5 text-gray-400" />
      )}

      <div>
        <p className="text-lg font-bold">{pet.name}</p>
        <p className="text-xs">
          품종 : {transBreed(pet.breeds.species, pet!.breeds.name)}
        </p>
        <p className="text-xs">
          생일 : {`${pet.birthDate[0]}년 ${pet.birthDate[1]}월`}
        </p>
      </div>
    </div>
  );
}
