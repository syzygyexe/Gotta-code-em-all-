import React, { useState, useEffect } from "react";
import { Loading, Browse, Navbar } from "../components";
import { axios } from "../axios/axios";

export function BrowseContainer() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);
  const pokemonPerPage = 21;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
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
      console.log(pokemonData);
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
            <Browse.Card>
              <Browse.CardImage src={pokemonImg[index]} />
              <Browse.CardTitle>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Browse.CardTitle>
              <Browse.CardType>{pokemonType[index]}</Browse.CardType>
              <Browse.CardID>#{pokemonData[index]}</Browse.CardID>
              <Browse.CardButton
                onClick={() => {
                  console.log("check");
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
