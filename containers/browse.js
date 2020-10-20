import React, { useState, useEffect } from "react";
import { Loading, Browse, Navbar } from "../components";
import { axios } from "../axios/axios";

export function BrowseContainer() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);
  const pokemonPerPage = 251;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const getPokemon = async () => {
      const toArray = [];
      for (let p = 1; p < pokemonPerPage; p++) {
        toArray.push(axios.get(`/${p}`));
      }
      const res = await Promise.all(toArray);
      setPokemon(res.map((p) => p.data.name));
      setPokemonType(res.map((p) => p.data.types[0].type.name));
      setPokemonData(res.map((p) => p.data.id));
    };
    getPokemon();
  }, []);

  useEffect(() => {
    const imageCollection = async () => {
      const imagePromiseArr = [];
      for (let id = 1; id <= pokemonPerPage; id++) {
        imagePromiseArr.push(
          `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
        );
      }
      const result = await Promise.all(imagePromiseArr);
      setPokemonImg(result);
    };
    imageCollection();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Loading.ReleaseBody />
      <Navbar>
        <Navbar.Frame>
          <Navbar.Image
            src={"../images/misc/about.gif"}
            width='50px'
            height='auto'
          />
          <Navbar.Button>About</Navbar.Button>
        </Navbar.Frame>
      </Navbar>
      <Browse>
        <Browse.Title>Pokepedia</Browse.Title>
        <Browse.Frame>
          {pokemon.map((name, index) => (
            // Change Browse.Card design based on the Pokemon type
            <Browse.Card pokemonType={pokemonType[index]}>
              <Browse.CardImageFrame>
                <Browse.CardImage src={pokemonImg[index]} />
              </Browse.CardImageFrame>
              <Browse.CardTitle>{name}</Browse.CardTitle>
              <Browse.CardType>{pokemonType[index]}</Browse.CardType>
              <Browse.CardID>#{pokemonData[index]}</Browse.CardID>
              <Browse.CardButton
                onClick={() => {
                  console.log("check!!!!!!!!!!!!!!!!!");
                }}
              >
                Learn More
              </Browse.CardButton>
            </Browse.Card>
          ))}
        </Browse.Frame>
      </Browse>
    </>
  );
}
