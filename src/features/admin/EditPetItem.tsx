import { deleteBreed, getBreed, putBreed } from '@/api/axios';
import { Breed } from '@/types/types';
import { useRef, useState } from 'react';

interface Props {
  item: Breed;
  setDogData: React.Dispatch<React.SetStateAction<Breed[]>>;
  setCatData: React.Dispatch<React.SetStateAction<Breed[]>>;
}

export default function EditPetItem({ item, setDogData, setCatData }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { id, code, nameKor, sex, avgWeightHigh, avgWeightLow } = item;
  const lowRef = useRef<HTMLInputElement>(null);
  const highRef = useRef<HTMLInputElement>(null);

  function handleEdit() {
    if (isEdit && lowRef.current && highRef.current) {
      const avgWeightLow = Number(lowRef.current.value);
      const avgWeightHigh = Number(highRef.current.value);
      putBreed(id, code, avgWeightLow, avgWeightHigh).then(() => {
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
      });
    }
    setIsEdit(!isEdit);
  }

  function handleDelete() {
    deleteBreed(id).then(() => {
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
    });
  }

  return (
    <tr className="border-b" key={id}>
      <td className="p-2 text-center">{`${nameKor} ${sex === 'MALE' ? '(수컷)' : '(암컷)'}`}</td>
      <td className="p-2 text-center">
        {isEdit ? (
          <div className="flex">
            <input
              type="text"
              placeholder={`${String(avgWeightLow)}kg`}
              className="w-full text-center"
              ref={lowRef}
            />
            ~
            <input
              type="text"
              placeholder={`${String(avgWeightHigh)}kg`}
              className="w-full text-center"
              ref={highRef}
            />
          </div>
        ) : (
          <div>{`${avgWeightLow}kg ~ ${avgWeightHigh}kg`}</div>
        )}
      </td>
      <td className="p-2 flex justify-center">
        <button onClick={handleEdit}>{isEdit ? '확인' : '수정'}</button>
        <div className="w-2"></div>
        <button onClick={handleDelete}>삭제</button>
      </td>
    </tr>
  );
}
