import React from "react";
import Button from "./components/atoms/Button";
import Card from "./components/atoms/Card";
import Carousel from "./components/molecules/Carousel";

export default function Home() {
  return (
    <div>
      <Button
        fontColor="white"
        text="Click me!"
        icon="img/shopping-cart.svg"
        color="red"
      />
      <Card
        image="img/restaurant1.jpg"
        alt=";"
        sizeImage="300px"
        titleCard="Title"
        description="estamos ubicados en la ciudad x"
        fontDescriptionColor="black"
        fontTitleColor ="black"
        color="white"
      />
      <Carousel
        pLeft="50px"
        pRight="50px"
      ></Carousel>
    </div>
  );
}
