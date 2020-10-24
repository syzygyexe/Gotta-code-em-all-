import React, { useState, useEffect } from "react";
import { Loading, Browse, Navbar } from "../components";
import Modal from "react-modal";
import { axios } from "../axios/axios";

export function BrowseContainer() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonID, setPokemonID] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const pokemonNumber = 151;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const getPokemon = async () => {
      const toArray = [];
      for (let p = 1; p < pokemonNumber; p++) {
        toArray.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${p}`));
      }
      const res = await Promise.all(toArray);
      setPokemon(res.map((p) => p.data.name));
      setPokemonType(res.map((p) => p.data.types[0].type.name));
      setPokemonID(res.map((p) => p.data.id));
      console.log(res.map((p) => p.data.id));
    };
    getPokemon();
  }, []);

  useEffect(() => {
    const imageCollection = async () => {
      const imagePromiseArr = [];
      for (let id = 1; id <= pokemonNumber; id++) {
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
          <Navbar.Button onClick={() => setModalIsOpen(true)}>
            About
          </Navbar.Button>
          <Modal display='flex' isOpen={modalIsOpen}>
            <Browse.CardButton onClick={() => setModalIsOpen(false)}>
              Close
            </Browse.CardButton>
          </Modal>
        </Navbar.Frame>
      </Navbar>
      <Browse>
        <Browse.Title>Pokepedia</Browse.Title>
        <Browse.Frame>
          {pokemon.map((name, index) => (
            // Change Browse.Card design based on the Pokemon type
            <Browse.Card key={index} pokemonType={pokemonType[index]}>
              <Browse.CardImageFrame>
                <Browse.CardImage src={pokemonImg[index]} />
              </Browse.CardImageFrame>
              <Browse.CardTitle>{name}</Browse.CardTitle>
              <Browse.CardType>{pokemonType[index]}</Browse.CardType>
              <Browse.CardID>#{pokemonID[index]}</Browse.CardID>
              {/* In progress */}
              {/* <Browse.CardButton>Learn More</Browse.CardButton> */}
            </Browse.Card>
          ))}
        </Browse.Frame>
      </Browse>
    </>
  );
}
