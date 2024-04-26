import Form from "@/components/Form";

export default function BasicInformation() {

    function handleSumbit(){
        return
    }

    return (
        <div>
            <p>반려동물의 기본정보를 입력해주세요</p>
            <Form onSubmit={handleSumbit}>
                <Form.Input name="이름" type="text"/>
                <div className="flex ">
                    <Form.Input name="나이" type="text"/>
                    <Form.Input name="성별" type="text"/>
                </div>
            </Form>
        </div>
    );
}

