import { getBreed } from '@/api/axios';
import EditPetItem from '@/features/admin/EditPetItem';
import { Breed } from '@/types/types';
import { useEffect, useState } from 'react';

export default function AdminEditBreed() {
  const [species, setSpecies] = useState<'DOG' | 'CAT'>('DOG');
  const [dogData, setDogData] = useState<Breed[]>([]);
  const [catData, setCatData] = useState<Breed[]>([]);

  useEffect(() => {
    getBreed().then((res) => {
      const dogs: Breed[] = [];
      const cats: Breed[] = [];
      res.data.body.forEach((item: Breed) => {
        if (item?.species === 'DOG') {
          dogs.push(item);
        } else if (item?.species === 'CAT') {
          cats.push(item);
        }
      });
      setDogData(dogs);
      setCatData(cats);
    });
  }, []);

  return (
    <div>
      <header className="font-bold text-2xl">품종 정보 수정</header>

      <nav className="flex text-lg text-gray-200 mt-20 ml-5 font-medium">
        <div
          className={`${species === 'DOG' ? 'text-black' : ''} hover:cursor-pointer`}
          onClick={() => {
            setSpecies('DOG');
          }}
        >
          강아지
        </div>
        <div className="mx-1.5">|</div>
        <div
          className={`${species === 'CAT' ? 'text-black' : ''} hover:cursor-pointer`}
          onClick={() => {
            setSpecies('CAT');
          }}
        >
          고양이
        </div>
      </nav>

      <table className="w-full table-fixed border-collapse border-t">
        <thead>
          <tr className="border-b">
            <th className="w-1/2 p-2">품종명</th>
            <th className="p-2">평균 무게</th>
            <th className="p-2">수정 / 삭제</th>
          </tr>
        </thead>
        {species === 'CAT' ? (
          <tbody>
            {catData?.map((item) => (
              <EditPetItem
                key={item.id}
                item={item}
                setDogData={setDogData}
                setCatData={setCatData}
              />
            ))}
          </tbody>
        ) : (
          <tbody>
            {dogData?.map((item) => (
              <EditPetItem
                key={item.id}
                item={item}
                setDogData={setDogData}
                setCatData={setCatData}
              />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
