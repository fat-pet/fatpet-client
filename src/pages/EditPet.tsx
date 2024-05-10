import { editPet } from '@/api/axios';
import Form from '@/components/Form';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface SubmitProps {
  [key: string]: string;
}

export default function EditPet() {
  const location = useLocation();
  const { id, name, neutered, feedCalories } = location.state;
  const neuteredRef = useRef<HTMLInputElement>(neutered);
  function handleSubmit(data: SubmitProps) {
    const feedCalories = parseInt(data['feedAmount']);
    id &&
      editPet(
        data['name'],
        neuteredRef.current!.checked,
        feedCalories,
        parseInt(id),
      );
  }
  return (
    <div className="flex flex-col items-center font-bold h-full">
      <p className="w-full text-xl">펫 정보 수정</p>

      <Form
        onSubmit={handleSubmit}
        className="w-full h-2/3 flex flex-col justify-between mt-10"
      >
        <div>
          <Form.Input name="이름" value="name" placeholder={name} />
          <div className="text-lg font-bold flex items-center my-10">
            중성화 여부 :{' '}
            <input type="checkbox" className="h-5 w-5 ml-5" ref={neuteredRef} />
          </div>
          <Form.Input
            name="급여 사료 열량 (100g당)"
            value="feedAmount"
            placeholder={feedCalories}
          />
        </div>
        <Form.Button name="수정하기" type="submit" />
      </Form>
    </div>
  );
}
