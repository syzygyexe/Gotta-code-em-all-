import React, { useState, useEffect } from "react";
import { Loading, Browse, Navbar } from "../components";
import axios from "axios";

export function BrowseContainer() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
  //     //   res.data is all json data from the pokeapi. Inside results there is an array of diffrent data(name etc).
  //     setPokemon(res.data.results.map((p) => p.name));
  //   });
  // }, []);

  useEffect(() => {
    const getPokemon = async () => {
      const toArray = [];
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      console.log(res);
      toArray.push(res.data);
      console.log(toArray);
      // setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    };
    getPokemon();
  }, []);

  useEffect(() => {
    const imageCollection = async () => {
      const imagePromiseArr = [];
      for (let id = 1; id <= 20; id++) {
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
          {pokemonData.map((data, index) => (
            <Browse.Card key={index}>
              <Browse.CardImage src={pokemonImg[index]} />
              <h1> {Math.round(data.weight / 4.3)} lbs</h1>
            </Browse.Card>
          ))}
        </Browse.Frame>
      </Browse>
    </>
  );
}

