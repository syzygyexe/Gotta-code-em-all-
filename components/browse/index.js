import React from "react";
import {
  Container,
  Frame,
  Title,
  Card,
  CardImage,
  CardImageFrame,
  CardTitle,
  CardType,
  CardID,
  CardButton,
} from "./styles/browse";

export default function Browse({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Browse.Frame = function BrowseFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Browse.Title = function BrowseTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

// transport (!!!!!!!!!!!!!!!!!!!)
Browse.Card = function BrowseCard({ pokemonType, children, ...restProps }) {
  return (
    <Card pokemonType={pokemonType} {...restProps}>
      {children}
    </Card>
  );
};

Browse.CardImage = function BrowseCardImage({ src, ...restProps }) {
  return <CardImage src={src} {...restProps} />;
};

Browse.CardImageFrame = function BrowseCardImageFrame({
  children,
  ...restProps
}) {
  return <CardImageFrame {...restProps}>{children}</CardImageFrame>;
};

Browse.CardTitle = function BrowseCardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};

Browse.CardType = function BrowseCardType({ children, ...restProps }) {
  return <CardType {...restProps}>{children}</CardType>;
};

Browse.CardID = function BrowseCardID({ children, ...restProps }) {
  return <CardID {...restProps}>{children}</CardID>;
};

Browse.CardButton = function BrowseCardButton({
  onClick,
  children,
  ...restProps
}) {
  return (
    <CardButton onClick={onClick} {...restProps}>
      {children}
    </CardButton>
  );
};
