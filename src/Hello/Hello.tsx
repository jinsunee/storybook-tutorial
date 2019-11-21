import React from "react";

// ?는 빠트려도 되는 것
type HelloProps = {
  name: string;
  big?: boolean;
  onHello?: () => void; //(n: number) => 이런식으로 parameter 전달
  onBye? : () => void;
}

/**
 * 안녕하세요라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - 크게 하고 싶으면 big 을 넣고
 * - dd
 */

const Hello = ({ name, big, onHello, onBye }: HelloProps) => {

  return (
    <div>
      {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
      <button onClick={onHello}>Hello</button>
      <button onClick={onBye}>Bye</button>
    </div>
  );
};

// Hello.propTypes = {
//   /** 보여주고 싶은 이름 */
//   name: PropTypes.string.isRequired,
//   /** 어쩌고 */
//   big: PropTypes.bool,
//   /** 어쩌고 */
//   onHello: PropTypes.funcs,
//   /** 어쩌고 */
//   onBye: PropTypes.funcs
// };

Hello.defaultProps = {
  big: false
};

export default Hello;
