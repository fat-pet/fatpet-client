import { postPetDiagnoses } from '@/api/axios';
import Form from '@/components/Form';
import Loading from '@/components/Loading';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SubmitProps {
  [key: string]: string;
}

export default function DiagnosePet() {
  const data = localStorage.getItem('petData');
  const navigate = useNavigate();
  const [isLoding, setIsLoding] = useState<boolean>(false);
  const petData = data ? JSON.parse(data) : '';

  const handleSubmit = (data: SubmitProps) => {
    setIsLoding(true);

    postPetDiagnoses(
      petData.id,
      Number(data['weight']),
      Number(data['neckCirc']),
      Number(data['chestCirc']),
    ).then((res) => {
      setIsLoding(false);
      navigate(`/diagnose/result/${petData.id}`, {
        state: { value: res.data.body, weight: data['weight'] },
      });
    });
  };

  return (
    <div className="flex flex-col items-center h-full">
      <Loading IsLoading={isLoding} />
      <p className="text-xl font-bold  mb-10">
        반려동물의 상세정보를 입력해주세요
      </p>

      <Form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col justify-evenly"
      >
        <Form.Input name="체중" value="weight" type="number" unit="kg" />
        <Form.Input
          name="목 둘레 길이"
          value="neckCirc"
          type="number"
          unit="cm"
        />
        <Form.Input
          name="가슴 둘레 길이"
          value="chestCirc"
          type="number"
          unit="cm"
        />
        {/* <Form.Input
          name="일일 사료 급여량"
          value="feedAmount"
          type="number"
          unit="kcal"
        /> */}
        <Form.Button
          name="검사하기"
          type="submit"
          className="bg-neutral-800 hover:opacity-70 transition-opacity text-white"
        />
      </Form>
    </div>
  );
}
