import Form from '@/components/Form';
import { useState } from 'react';
import { FaDog } from 'react-icons/fa6';
import { FaCat } from 'react-icons/fa';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { postBreed } from '@/api/axios';

interface DataProps {
  [key: string]: string;
}

export default function AdminAddBreed() {
  const [species, setSpecies] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  function handleSubmit(data: DataProps) {
    postBreed(
      species,
      data['name'],
      Number(data['code']),
      sex,
      Number(data['avgWeightLow']),
      Number(data['avgWeightHigh']),
    );
  }
  return (
    <div className="h-full">
      <header className="text-2xl font-bold">품종 추가</header>
      <div className="h-5/6 mt-10">
        <Form
          onSubmit={handleSubmit}
          className="h-full flex flex-col justify-between"
        >
          <Form.Input
            value="name"
            name="품종 이름"
            type="text"
            placeholder="BIG"
          />

          {/* 강아지 or 고양이 */}
          <div className="w-full">
            <label className="font-medium">종류</label>
            <div className="flex">
              <Form.SelectButton
                label="강아지"
                state={species === 'DOG' ? true : false}
                icon={<FaDog className="w-7 h-7 mr-2 text-gray-500" />}
                handleClick={() => setSpecies('DOG')}
              />
              <Form.SelectButton
                label="고양이"
                state={species === 'CAT' ? true : false}
                icon={<FaCat className="w-7 h-7 mr-2 text-gray-500" />}
                handleClick={() => setSpecies('CAT')}
              />
            </div>
          </div>

          <Form.Input
            value="code"
            name="품종 코드"
            type="number"
            placeholder="23"
          />

          {/* 성별 */}
          <div className="w-full">
            <label className="font-medium">성별</label>
            <div className="flex w-full">
              <Form.SelectButton
                label="수컷"
                state={sex === 'MALE' ? true : false}
                icon={<IoMdMale className="w-6 h-6 mr-2 text-blue-600" />}
                handleClick={() => setSex('MALE')}
              />
              <Form.SelectButton
                label="암컷"
                state={sex === 'FEMALE' ? true : false}
                icon={<IoMdFemale className="w-6 h-6 mr-2 text-red-600" />}
                handleClick={() => setSex('FEMALE')}
              />
            </div>
          </div>

          <Form.Input
            value="avgWeightLow"
            name="평균 최저무게"
            unit="g"
            type="number"
          />
          <Form.Input
            value="avgWeightHigh"
            name="평균 최고무게"
            unit="g"
            type="number"
          />
          <Form.Button
            name="추가하기"
            type="submit"
            className="bg-neutral-800 hover:opacity-70 transition-opacity text-white"
          />
        </Form>
      </div>
    </div>
  );
}
