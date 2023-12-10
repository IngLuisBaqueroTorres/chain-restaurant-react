"use client";

import React, { useState } from "react";
import Slick from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/carousel.css"

import Card from "../atoms/Card";

interface CarouselProps {
  pLeft?: string;
  pRight?: string;
}
function Carousel(props: CarouselProps) {
  const [cards, setCards] = useState([
    {
      title: "Imagen 1",
      image: "https://via.placeholder.com/150x150",
      description: "Este es el texto de la imagen 1",
      showButton: true,
    },
    {
      title: "Imagen 2",
      image: "https://via.placeholder.com/150x150",
      description: "Este es el texto de la imagen 2",
      showButton: true,
    },
    {
      title: "Imagen 3",
      image: "https://via.placeholder.com/150x150",
      description: "Este es el texto de la imagen 3",
      showButton: false,
    },
    {
      title: "Imagen 4",
      image: "https://via.placeholder.com/150x150",
      description: "Este es el texto de la imagen 4",
      showButton: false,
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div
      style={{
        paddingLeft: props.pLeft,
        paddingRight: props.pRight
      }}
    >
      <h2> Single Item</h2>
      <Slick {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              image={card.image}
              sizeImage="300px"
              titleCard={card.title}
              fontTitleColor="black"
              description={card.description}
              fontDescriptionColor="black"
              showButton={card.showButton}
            />
          </div>
        ))}
      </Slick>
    </div>
  );
}

export default Carousel;
