import Form from "@/components/Form";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { useState } from "react";
import DogBreed from "@/api/mock";

interface DogBreedItem {
    id : string;
    value : string;
}

export default function CreatePet() {

    const [species, setSpecies] = useState<string>('')
    const [sex, setSex] = useState<string>('')
    const [isDropdownView, setIsDropdownView] = useState<boolean>(false)
    const [breed,setBreed] = useState<string>(`품종을 선택해주세요 ${isDropdownView ?  '▲' : '▼'}`)

    function handleSumbit(){
        return
    }

    function handleDropdown(breed : string){
        setBreed(breed)
        setIsDropdownView(false)
    }
    return (
        <div className="flex flex-col items-center justify-center mt-20 mx-8 font-bold text-lg">
            <p className="text-xl font-bold tracking-tighter mb-10">반려동물의 기본정보를 입력해주세요</p>
            <Form onSubmit={handleSumbit} className="flex flex-col items-center justify-center">
                {/* 이름 */}
                <div className="w-full">
                    <Form.Input name="펫 이름" minlen={2} maxlen={6}/>
                </div>
                
                {/* 나이 & 종류 */}
                <div className="flex mt-5 w-full">
                    <div className="w-1/3 flex mr-10">
                        <Form.Input name="나이" type="number"/>
                        <p className="mt-12 ml-5">살</p>
                    </div>
                    <div className="w-2/3">
                        <label>종류</label>
                        <div className="flex mt-4">
                            <Form.SelectButton label="강아지" state={species==='dog' ? true : false} icon={<FaDog className="w-7 h-7 mr-2"/>} handleClick={()=>setSpecies('dog')}/>
                            <Form.SelectButton label="고양이" state={species==='cat' ? true : false} icon={<FaCat className="w-7 h-7 mr-2"/>} handleClick={()=>setSpecies('cat')}/>
                        </div>
                    </div>
                </div>

                {/* 성별 */}
                <div className="my-5 w-full">
                    <label>성별</label>
                    <div className="flex mt-2 w-full">
                        <Form.SelectButton label="수컷" state={sex==='male' ? true : false} icon={<IoMdMale className="w-6 h-6 mr-2 text-blue-600"/>} handleClick={()=>setSex('male')}/>
                        <Form.SelectButton label="암컷" state={sex==='female' ? true : false} icon={<IoMdFemale className="w-6 h-6 mr-2 text-red-600"/>} handleClick={()=>setSex('female')}/>
                        <p className="flex items-center w-1/2">중성화여부<input className="w-5 h-5 ml-3" type="checkbox"/></p>
                    </div>
                </div>

                {/* 품종 (품종 데이터 받아와야하나?)*/}
                <div className="mb-5 relative w-full">
                    <label>품종</label>
                    <button type="button" className="border-2 w-5/6 h-12 flex items-center justify-center mt-3" onClick={()=>setIsDropdownView(!isDropdownView)}>
                        {breed}
                    </button>
                    {isDropdownView ?
                    <ul className="border-2 w-5/6 absolute top-20 z-10" onBlur={()=>console.log('hello')}>
                        {DogBreed.map((item : DogBreedItem) =>{
                            return <li onClick={()=>handleDropdown(item.value)} className="border-b-2 h-10 flex justify-center items-center hover:cursor-pointer hover:bg-gray-200 bg-white">{item.value}</li>
                        })}
                    </ul>
                    :''}
                </div>

                {/* 급여 사료 열량 */}
                <div className="flex mb-20 w-full">
                    <Form.Input name="급여 사료 열량(100g당)" type="number"/>
                    <p className="mt-12 ml-5">kcal</p>
                </div>

                <Form.Button name="펫 생성" type="submit"/>
            </Form>
        </div>
    );
}

