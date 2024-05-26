import Form from '@/components/Form';
import { FaDog } from 'react-icons/fa6';
import { FaCat } from 'react-icons/fa';
import { useState } from 'react';
import { postDiagnoses } from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import { dogDummy } from '@/api/dogDummy';
import { catDummy } from '@/api/catDummy';

interface BreedItem {
  id: number;
  value: string;
  code: string;
}

interface SubmitProps {
  [key: string]: string;
}

export default function Diagnose() {
  const [species, setSpecies] = useState<string>('');
  const [isDropdownView, setIsDropdownView] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [breed, setBreed] = useState<string>();
  const navigate = useNavigate();

  function handleSubmit(data: SubmitProps) {
    const age = `${data['year']}-${data['month']}`;
    const weight = parseFloat(data['weight']);
    const neckCirc = parseFloat(data['neckCirc']);
    const chestCirc = parseFloat(data['chestCirc']);
    const feedCalories = parseInt(data['feedAmount']);
    postDiagnoses(age, code, weight, neckCirc, chestCirc, feedCalories).then(
      () => navigate('/pet/list'),
    );
  }

  function handleDropdown(breed: string, code: string) {
    setBreed(breed);
    setCode(code);
    setIsDropdownView(false);
  }
  return (
    <div className="h-full flex flex-col items-center justify-center text-lg">
      <p className="text-xl font-bold  mb-10">반려동물의 정보를 입력해주세요</p>
      <Form
        onSubmit={handleSubmit}
        className="h-full flex flex-col justify-between"
      >
        {/* 나이 */}
        <div className="flex w-full items-end">
          <Form.Input
            name="나이"
            value="year"
            unit="년"
            type="number"
            placeholder="2024"
            className="w-1/3"
          />
          <div className="w-1/2"></div>
          <Form.Input
            name=""
            value="month"
            unit="월"
            type="number"
            placeholder="03"
            className="w-1/3"
          />
        </div>

        {/* 종류 */}
        <div className="w-full">
          <label>종류</label>
          <div className="flex">
            <Form.SelectButton
              label="강아지"
              state={species === 'DOG' ? true : false}
              icon={<FaDog className="w-7 h-7 mr-2" />}
              handleClick={() => setSpecies('DOG')}
            />
            <Form.SelectButton
              label="고양이"
              state={species === 'CAT' ? true : false}
              icon={<FaCat className="w-7 h-7 mr-2" />}
              handleClick={() => setSpecies('CAT')}
            />
          </div>
        </div>

        {/* 품종*/}
        <div className="relative w-full">
          <div className="flex justify-between">
            <p>품종</p>
            {error ? (
              <p className="text-red-500 text-sm font-medium">
                필수 입력 항목입니다.
              </p>
            ) : (
              ''
            )}
          </div>
          <button
            type="button"
            className="w-full  h-12 bg-gray-50 border outline-none px-3 font-medium border-gray-200 drop-shadow-sm"
            onClick={() => setIsDropdownView(!isDropdownView)}
          >
            {breed
              ? breed
              : `품종을 선택해주세요 ${isDropdownView ? '▲' : '▼'}`}
          </button>
          {isDropdownView ? (
            <ul
              className="border-2 w-full absolute top-20 z-10 h-40 overflow-auto"
              onBlur={() => console.log('hello')}
            >
              {(species === 'DOG' ? dogDummy : catDummy).map(
                (item: BreedItem) => {
                  return (
                    <li
                      onClick={() => handleDropdown(item.value, item.code)}
                      className="border-b-2 h-10 flex justify-center items-center hover:cursor-pointer hover:bg-gray-200 bg-white"
                    >
                      {item.value}
                    </li>
                  );
                },
              )}
            </ul>
          ) : (
            ''
          )}
        </div>

        {/* 체중 */}
        <div className="w-full">
          <Form.Input name="체중" value="weight" unit="kg" type="number" />
        </div>

        {/* 목 둘레 */}
        <div className="w-full">
          <Form.Input name="목 둘레" value="neckCirc" unit="cm" type="number" />
        </div>

        {/* 가슴 둘레 */}
        <div className="w-full">
          <Form.Input
            name="가슴 둘레"
            value="chestCirc"
            unit="cm"
            type="number"
          />
        </div>

        {/* 급여 사료 열량 */}
        <div className="flex  w-full">
          <Form.Input
            name="급여 사료 열량(100g당)"
            value="feedAmount"
            type="number"
            unit="kcal"
            placeholder="300"
          />
        </div>

        <Form.Button
          name="펫 생성"
          type="submit"
          onClick={() => {
            console.log(breed ? '' : setError(true));
          }}
        />
      </Form>
    </div>
  );
}
