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
      className="w-full aspect-[2/1] rounded-xl bg-blue-400 mb-20 flex items-center px-5 text-white hover:cursor-pointer"
      onClick={handleClicked}
    >
      {pet?.breeds.species === 'DOG' ? (
        <FaDog className="w-24 h-24 mr-5" />
      ) : (
        <FaCat className="w-24 h-24 mr-5" />
      )}

      <div>
        <p className="text-lg font-bold">이름 : {pet.name}</p>
        <p className="text-xs xxsm:text-sm">
          품종 : {transBreed(pet.breeds.species, pet!.breeds.name)}
        </p>
        <p className="text-xs xxsm:text-sm">
          생일 : {`${pet.birthDate[0]}년 ${pet.birthDate[1]}월`}
        </p>
      </div>
    </div>
  );
}
