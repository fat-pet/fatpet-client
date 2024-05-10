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
    <div className="w-11/12 border aspect-[1/1.5] z-10 p-10 bg-white rounded-lg">
      <p className="text-xl font-bold tracking-tighter">
        회원 닉네임 & 이메일 변경
      </p>

      <Form
        onSubmit={handleEdit}
        className="flex flex-col items-center mt-10 justify-between h-full"
      >
        <div className="w-full h-1/3 flex flex-col justify-between items-center">
          <Form.Input name="닉네임" value="nickName"></Form.Input>
          <Form.Input name="이메일" value="email"></Form.Input>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center">
          <Form.Button name="변경" type="submit"></Form.Button>
          <div className="h-5"></div>
          <Form.Button
            name="취소"
            type="button"
            onClick={() => setOpen(false)}
          ></Form.Button>
        </div>
      </Form>
    </div>
  );
}
