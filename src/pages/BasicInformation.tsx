import Form from '@/components/Form';
import { FaDog } from 'react-icons/fa6';
import { FaCat } from 'react-icons/fa';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { useRef, useState } from 'react';
import DogBreed from '@/api/DogBreed';
import { createPet } from '@/api/axios';
import { useNavigate } from 'react-router-dom';
import CatBreed from '@/api/CatBreed';

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
  const dateRef = useRef<HTMLInputElement>(null);
  const neuteredRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleSubmit(data: SubmitProps) {
    console.log(dateRef);
    const date = dateRef.current!.value.split('-');
    const birthDate = `${date[0]}-${date[1]}`;
    const neutered = neuteredRef.current!.checked;
    const feedCalories = parseInt(data['feedAmount']);
    const name = data['name'];
    createPet(sex, name, species, code, birthDate, neutered, feedCalories).then(
      () => navigate('/dashboard/petlist'),
    );
  }

  function handleDropdown(breed: string, code: string) {
    setBreed(breed);
    setCode(code);
    setIsDropdownView(false);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl font-bold mb-10">
        반려동물의 기본정보를 입력해주세요
      </p>
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        {/* 나이 */}
        <div className="flex my-5 w-full">
          <div className="w-full mr-10">
            <label>출생일(년, 월)</label>
            <br />
            <input type="date" ref={dateRef} className="border-2 h-12" />
          </div>
        </div>

        {/* 종류 */}
        <div className="w-full">
          <label>종류</label>
          <div className="flex mt-4">
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

        {/* 성별 */}
        <div className="my-5 w-full">
          <label>성별</label>
          <div className="flex mt-2 w-full">
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

        {/* 품종*/}
        <div className="mb-5 relative w-full">
          <label>품종</label>
          <button
            type="button"
            className="border w-5/6 h-12 flex items-center justify-center mt-3"
            onClick={() => setIsDropdownView(!isDropdownView)}
          >
            {breed}
          </button>
          {isDropdownView ? (
            <ul
              className="border w-5/6 absolute top-20 z-10 h-40 overflow-auto"
              onBlur={() => console.log('hello')}
            >
              {(species === 'DOG' ? DogBreed : CatBreed).map(
                (item: BreedItem) => {
                  return (
                    <li
                      onClick={() => handleDropdown(item.value, item.code)}
                      className="border-b h-10 flex justify-center items-center hover:cursor-pointer hover:bg-gray-200 bg-white"
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
        <Form.Button name="다음" type="submit" />
      </Form>
    </div>
  );
}
