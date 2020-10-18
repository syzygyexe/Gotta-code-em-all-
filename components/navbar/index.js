import React from "react";
import { Container, Frame, Button, Image } from "./styles/navbar";

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.Frame = function NavbarFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Navbar.Button = function NavbarButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Navbar.Image = function NavbarImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};
