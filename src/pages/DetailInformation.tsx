import { postDiagnoses } from '@/api/axios';
import Form from '@/components/Form';

interface SubmitProps {
  [key: string]: string;
}
interface ApiProps {
  [key: string]: number;
}

export default function DetailInformation() {
  const data = localStorage.getItem('petData');
  const petData = data ? JSON.parse(data) : '';

  const handleSubmit = (data: SubmitProps) => {
    const apiData: ApiProps = {};

    for (const key in data) {
      apiData[key] = Number(data[key]);
    }
    postDiagnoses(
      petData.id,
      apiData['weight'],
      apiData['neckCirc'],
      apiData['chestCirc'],
      apiData['feedAmount'],
    );
  };

  return (
    <div className="flex flex-col items-center h-full">
      <p className="text-xl font-bold tracking-tighter mb-10">
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
        <Form.Input
          name="일일 사료 급여량"
          value="feedAmount"
          type="number"
          unit="kcal"
        />
        <Form.Button name="검사하기" className="mt-10 h-16" type="submit" />
      </Form>
    </div>
  );
}
