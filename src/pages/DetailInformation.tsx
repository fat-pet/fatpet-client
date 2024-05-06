import Form from "@/components/Form";

export default function DetailInformation() {

    const handleSubmit = () =>{

    }
    return (
        <div className="flex flex-col items-center h-full">
            <p className="text-xl font-bold tracking-tighter mb-10">반려동물의 상세정보를 입력해주세요</p>

            <Form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-evenly">
                <Form.Input name="체중" unit="cm"/>
                <Form.Input name="목 둘레 길이" unit="cm"/>
                <Form.Input name="가슴 둘레 길이" unit="cm"/>
                <Form.Input name="사료 급여량(하루 평균)" unit="kcal"/>
                <Form.Button name="검사하기" className="mt-10 h-16"/>
            </Form>
        </div>
    );
}

