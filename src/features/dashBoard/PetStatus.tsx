import { FaDog } from 'react-icons/fa6';
import { FaCat } from 'react-icons/fa';
import { PetProps } from '@/types/types';
import transBreed from '@/utils/transBreed';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface Props {
  pet: PetProps;
  handleDelete: () => void;
}

export default function PetStatus({ pet, handleDelete }: Props) {
  console.log(pet.breed.species, pet!.breed.name);
  console.log(transBreed(pet.breed.species, pet!.breed.name));
  return (
    <div className="w-full h-full flex flex-col  items-center">
      <p className="w-full text-sm mb-3 ml-20 font-bold">현재 선택 중인 펫</p>

      <div className="w-5/6 h-40 bg-green-600 rounded-xl px-5 text-white shadow-lg">
        <div className="h-2/3 flex items-center pl-3 justify-between">
          {pet?.breed.species === 'DOG' ? (
            <FaDog className="text-6xl" />
          ) : (
            <FaCat className="text-6xl" />
          )}
          <div className="flex flex-col justify-center w-1/2">
            <p className="text-lg font-bold">{pet.name}</p>
            <p className="text-xs">
              품종 : {transBreed(pet.breed.species, pet!.breed.name)}
            </p>
            <p className="text-xs">
              성별 : {pet?.breed.sex === 'MALE' ? '수컷' : '암컷'}
            </p>
            <p className="text-xs  sm:block">
              생일 : {`${pet?.birthDate[0]}년 ${pet?.birthDate[1]}월`}
            </p>
          </div>
          <Link to="/pet/list">
            <IoIosArrowForward className="text-4xl" />
          </Link>
        </div>
        <div className="h-1/3 border-t flex items-center text-center text-white text-sm xsm:text-base">
          <Link
            to={`/pet/edit`}
            state={{
              id: pet.id,
              name: pet.name,
              neutered: pet.neutered,
              feedCalories: pet.feedCalories,
            }}
            className="w-1/2"
          >
            펫 정보 수정
          </Link>
          <button className="border-l w-1/2" onClick={handleDelete}>
            펫 정보 삭제
          </button>
        </div>
      </div>
    </div>
  );
}
