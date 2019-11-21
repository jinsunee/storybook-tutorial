// csf형태로 작성 (Componen Story Format)

import React from "react";
import Hello from "./Hello";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import mdx from "./Hello.mdx";

//(required) title : list에서 어느 위치 어떤 곳에 배채될지
// components의 basic의 Hello라는 이름으로 만들겠다.
// 컴포넌트에 대해서 문서화할거라고 선언
export default {
  title: "components|basic/Hello", // 경로 명시
  component: Hello,
  decorators: [withKnobs],
  /* subtitle 지정 */
  parameters: {
    componentSubtitle: "안녕하세요 라고 보여주는 컴포넌트",
    docs: {
      page: mdx
    }
  }
};

export const hello = () => {
  const name = text("name", "Storybook");
  const big = boolean("big", false);
  return (
    <Hello
      name={name}
      big={big}
      onHello={action("onHello")}
      onBye={action("onBye")}
    />
  );
};

// 한글로 하고 싶다면 story 안에 name으로 지정해서 한다.
hello.story = {
  name: "Default"
};

export const standard = () => <Hello name="Storybook" />;

export const big = () => <Hello name="Storybook" big />;
