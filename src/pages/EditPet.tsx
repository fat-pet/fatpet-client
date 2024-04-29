import Form from "@/components/Form";

export default function EditPet() {
    function handleSubmit(){

    }
    return (
        <div className="flex flex-col justify-center items-center font-bold mt-12 mx-8 h-full">
            <p className="w-full text-xl">펫 정보 수정</p>
            <Form onSubmit={handleSubmit} className="w-full h-1/3 flex flex-col justify-between">
                <Form.Input name="이름"/>
                <div className="text-lg font-bold flex items-center">
                    중성화 여부 : <input type="checkbox" className="h-5 w-5 ml-5"/>
                </div>
                <Form.Input name="급여 사료 열량 (100g당)"/>
            </Form>
        </div>
    );
}

