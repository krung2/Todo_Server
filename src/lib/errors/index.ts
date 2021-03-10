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
  WrongRequest: {
    code: 400,
    message: '검증 오류',
  },
  NotExistToken: {
    code: 401,
    message: '토큰 없음',
  },
  Forbidden: {
    code: 403,
    message: '권한 없음',
  },
};

export default errors;