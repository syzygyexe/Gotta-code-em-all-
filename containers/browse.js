import React, { useState, useEffect } from "react";
import { Loading, Browse, Navbar } from "../components";
import axios from "axios";

export function BrowseContainer() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      //   res.data is all json data from the pokeapi. Inside results there is an array of diffrent data(name etc).
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, []);

  useEffect(() => {
    const imageCollection = async () => {
      const promiseArr = [];
      for (let id = 1; id <= 20; id++) {
        promiseArr.push(
          `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
        );
      }
      const result = await Promise.all(promiseArr);
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
          {pokemon.map((pokeinfo, index) => (
            <Browse.Card key={index}>
              <Browse.CardImage src={pokemonImg[index]} />
              {pokeinfo}
            </Browse.Card>
          ))}
        </Browse.Frame>
      </Browse>
    </>
  );
}

