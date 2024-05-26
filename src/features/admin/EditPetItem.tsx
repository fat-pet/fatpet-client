import { deleteBreed, putBreed } from '@/api/axios';
import { Breed } from '@/types/types';
import transBreed from '@/utils/formatBreed';
import { useState } from 'react';

interface Props {
  item: Breed;
}

export default function EditPetItem({ item }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { id, code, species, name, sex, avgWeightHigh, avgWeightLow } = item;
  function handleEdit() {
    if (isEdit == true) {
      putBreed(id, code, avgWeightLow, avgWeightHigh);
    }
    setIsEdit(!isEdit);
  }

  function handleDelete() {
    deleteBreed(id);
  }
  return (
    <tr className="border-b" key={id}>
      <td className="p-2 text-center">{`${transBreed(species, name)} ${sex === 'MALE' ? '(수컷)' : '(암컷)'}`}</td>
      <td className="p-2 text-center">
        {isEdit ? (
          <div className="flex">
            <input
              type="text"
              placeholder={`${String(avgWeightLow)}g`}
              className="w-full text-center"
            />
            ~
            <input
              type="text"
              placeholder={`${String(avgWeightHigh)}g`}
              className="w-full text-center"
            />
          </div>
        ) : (
          <div>{`${avgWeightLow}g ~ ${avgWeightHigh}g`}</div>
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
