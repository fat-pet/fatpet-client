import { editMember } from '@/api/axios';
import Form from '@/components/Form';

interface EditMember {
  [key: string]: string;
}

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditNickName({ setOpen }: Props) {
  const handleEdit = (data: EditMember) => {
    editMember(data['email'], data['nickName']).then(() => {
      setOpen(false);
    });
  };

  return (
    <div className="w-11/12 border z-10 p-10 bg-white rounded-lg">
      <p className="text-xl font-bold ">내 정보 수정하기</p>
      <Form onSubmit={handleEdit} className="flex flex-col items-center mt-10 ">
        <div className="w-full h-1/3 flex flex-col items-center">
          <Form.Input name="닉네임" value="nickName"></Form.Input>
          <Form.Input name="이메일" value="email"></Form.Input>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center mt-10">
          <Form.Button
            name="변경"
            type="submit"
            className="bg-neutral-800 hover:opacity-70 transition-opacity text-white"
          ></Form.Button>
          <div className="h-5"></div>
          <Form.Button
            name="취소"
            type="button"
            onClick={() => setOpen(false)}
            className="bg-gray-200 hover:opacity-70 transition-opacity"
          ></Form.Button>
        </div>
      </Form>
    </div>
  );
}
