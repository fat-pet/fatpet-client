import Form from '@/components/Form';
import { FaDog } from 'react-icons/fa6';
import { FaCat } from 'react-icons/fa';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { useRef, useState, useEffect } from 'react';
import { createPet } from '@/api/axios';
import { useNavigate } from 'react-router-dom';

interface BreedItem {
  id: number;
  value: string;
  code: string;
}

interface SubmitProps {
  [key: string]: string;
}

export default function BasicInformation() {
  const [species, setSpecies] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [isDropdownView, setIsDropdownView] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const [breed, setBreed] = useState<string>(
    `품종을 선택해주세요 ${isDropdownView ? '▲' : '▼'}`,
  );
  const [dogData, setDogData] = useState<BreedItem[]>([]);
  const [catData, setCatData] = useState<BreedItem[]>([]);
  const neuteredRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch dog data
    fetch('/mockJson/dogDummyData.json')
      .then((response) => response.json())
      .then((data) => setDogData(data))
      .catch((error) => console.error('Error fetching dog data:', error));

    // Fetch cat data
    fetch('/mockJson/catDummyData.json')
      .then((response) => response.json())
      .then((data) => setCatData(data))
      .catch((error) => console.error('Error fetching cat data:', error));
  }, []);

  function handleSubmit(data: SubmitProps) {
    const birthDate = `${data['year']}-${data['month']}`;
    const neutered = neuteredRef.current!.checked;
    const feedCalories = parseInt(data['feedAmount']);
    const name = data['name'];
    createPet(sex, name, species, code, birthDate, neutered, feedCalories).then(
      () => navigate('/pet/list'),
    );
  }

  function handleDropdown(breed: string, code: string) {
    setBreed(breed);
    setCode(code);
    setIsDropdownView(false);
  }

  return (
    <div className="flex flex-col items-center justify-between text-lg w-full">
      <p className="text-xl font-bold mb-10">
        반려동물의 기본정보를 입력해주세요
      </p>
      <Form
        onSubmit={handleSubmit}
        className="flex w-full h-full flex-col items-center justify-between"
      >
        {/* 이름 */}
        <div className="w-full">
          <Form.Input name="이름" value="name" placeholder="나비" />
        </div>

        {/* 나이 */}
        <div className="flex w-full items-end">
          <div className="w-2/5">
            <Form.Input
              name="나이"
              value="year"
              unit="년"
              type="number"
              placeholder="2024"
            />
          </div>
          <div className="w-2/5">
            <Form.Input
              name=""
              value="month"
              unit="월"
              type="number"
              placeholder="03"
            />
          </div>
        </div>

        {/* 종류 */}
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
            <p className="flex items-center w-1/2">
              중성화여부
              <input
                ref={neuteredRef}
                className="w-5 h-5 ml-3"
                type="checkbox"
              />
            </p>
          </div>
        </div>

        {/* 품종 */}
        <div className="relative w-full">
          <label className="font-medium">품종</label>
          <button
            type="button"
            className="border-2 w-full h-12 flex items-center justify-center"
            onClick={() => setIsDropdownView(!isDropdownView)}
          >
            {breed}
          </button>
          {isDropdownView && (
            <ul className="border-2 w-full absolute top-20 z-10 h-40 overflow-auto bg-white">
              {(species === 'DOG' ? dogData : catData).map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleDropdown(item.value, item.code)}
                  className="border-b-2 h-10 flex justify-center items-center hover:cursor-pointer hover:bg-gray-200"
                >
                  {item.value}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 급여 사료 열량 */}
        <div className="flex mb-10 w-full">
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
          className="bg-neutral-800 hover:opacity-70 transition-opacity text-white"
        />
      </Form>
    </div>
  );
}
