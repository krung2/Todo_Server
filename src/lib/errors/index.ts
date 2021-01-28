import IError from "@interface/IError";

const errors: { [key: string]: IError } = {
  SeverError: {
    code: 500,
    message: '서버 오류',
  },
  InappropriateId: {
    code: 401,
    message: '알맞지 않은 id',
  },
  InappropriatePw: {
    code: 401,
    message: '알맞지 않은 pw',
  },
};

export default errors;