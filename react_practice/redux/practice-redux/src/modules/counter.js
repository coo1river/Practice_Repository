// 액션 타입 정의

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// 액션 생성자 함수
export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

// 초기 값 설정
const initialState = {
  count: 0,
};

// 리듀서
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
