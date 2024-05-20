import { BreedItem } from '@/types/types';
import { useState } from 'react';

interface Props {
  item: BreedItem;
}

export default function EditPetItem({ item }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  function handleEdit() {
    if (isEdit == true) {
    }
    setIsEdit(!isEdit);
  }

  function handleDelete() {}
  return (
    <tr className="border-b" key={item.id}>
      <td className="p-2 text-center">{item.value}</td>
      <td className="p-2 text-center">
        {isEdit ? (
          <input
            type="text"
            placeholder={'100g'}
            className="w-full text-center"
          />
        ) : (
          <div>100g</div>
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
