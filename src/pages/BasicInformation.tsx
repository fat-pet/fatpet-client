import Form from "@/components/Form";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
export default function BasicInformation() {

    function handleSumbit(){
        return
    }
    function handleClick(){
        console.log('hello')   
    }

    return (
        <div className="flex flex-col items-center mt-20 mx-8">
            <p className="text-xl font-bold tracking-tighter mb-10">반려동물의 기본정보를 입력해주세요</p>
            <Form onSubmit={handleSumbit}>
                <Form.Input name="이름" type="text"/>
                <div className="flex mt-5">
                    <div className="w-1/3 flex mr-10">
                        <Form.Input name="나이" type="number"/>
                        <p className="font-bold text-lg mt-12 ml-5">살</p>
                    </div>
                    <div className="">
                        <p className="font-bold text-lg ">종류</p>
                        <div className="flex mt-4 font-bold text-lg">
                            <button className="border-2 rounded-lg w-28 h-10 mr-5 flex items-center justify-center hover:bg-gray-300" onClick={handleClick}><FaDog className="w-7 h-7 mr-2"/>강아지</button>
                            <button className="border-2 rounded-lg w-28 h-10 mr-5 flex items-center justify-center hover:bg-gray-300" onClick={handleClick}><FaCat className="w-7 h-7 mr-2"/>고양이</button>
                        </div>
                    </div>
                </div>

            </Form>
        </div>
    );
}

