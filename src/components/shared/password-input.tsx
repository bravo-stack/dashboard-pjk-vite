"use client";
import { useState } from "react";

import { Input, InputProps } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { InputGroup } from "../ui/input-group";

type Props = Omit<InputProps, "type">;

export default function PasswordInput({ ...props }: Props) {
  const [show, setShow] = useState(false);

  const renderedIcon = () => {
    if (show) {
      return (
        <AiOutlineEye
          style={{ marginRight: "12px" }}
          cursor="pointer"
          onClick={() => setShow(false)}
        />
      );
    } else {
      return (
        // <Icon cursor="pointer" onClick={() => setShow(true)}>
        <AiOutlineEyeInvisible
          style={{ marginRight: "12px" }}
          cursor="pointer"
          onClick={() => setShow(true)}
        />
      );
    }
  };

  return (
    <InputGroup w="100%" endElement={renderedIcon()}>
      <Input {...props} type={show ? "text" : "password"} />
    </InputGroup>
  );
}
