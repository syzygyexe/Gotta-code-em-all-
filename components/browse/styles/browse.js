import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow: hidden;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1100px;
  height: fit-content;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 1100px;
  margin-top: -35px;
  font-size: 55px;
  letter-spacing: 7px;
  color: black;
  font-family: "Pokemon Hollow";
  font-weight: 900;
`;

export const Card = styled.div`
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 180px;
  height: 350px;
  margin: 15px;
  font-family: Pokemon;
  font-size: 24px;
  letter-spacing: 2px;
  border-style: solid;
  border-width: 3.5px;
  background-color: ${({ pokemonType }) =>
    pokemonType === "fire" ? "#F08080" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "grass" ? "#7ec850" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "electric" ? "#0892d0" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "water" ? "#d4f1f9" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "ground" ? "#f4e7da" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "rock" ? "#7B7167" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "fairy" ? "#fceaff" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "poison" ? "#40fd14" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "bug" ? "#f8d5a3" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "dragon" ? "#97b3e6" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "psychic" ? "#eaeda1" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "flying" ? "#F5F5F5" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "fighting" ? "#E6E0D4" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "normal" ? "#CCCCCC" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "ice" ? "#e5e5e0" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "dark" ? "#016a86" : null};
  background-color: ${({ pokemonType }) =>
    pokemonType === "ghost" ? "#c0bfc7" : null};
`;

export const CardImageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;

export const CardImage = styled.img`
  margin-top: 50px;
  padding-bottom: 2.5px;
  display: flex;
  justify-content: center;
  width: 120px;
  height: auto;
`;

export const CardTitle = styled.div`
  text-transform: capitalize;
  margin-top: 37.5px;
`;

export const CardType = styled.div`
  text-transform: capitalize;
  margin-top: -10px;
`;

export const CardID = styled.div`
  margin-top: -10px;
`;

export const CardButton = styled.button`
  margin-bottom: -10px;
  background-color: black;
  color: white;
  width: 150px;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  letter-spacing: 2.5px;
  border-radius: 10px;
  border: 0.5px solid black;
  font-family: Pokemon;
  outline: none;
  &:hover {
    background-color: rgb(30, 30, 30);
  }
`;
