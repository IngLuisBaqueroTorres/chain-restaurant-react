import React, { FunctionComponent } from "react";
import "./css/card.css";
import Button from "./Button";

interface CardProps {
  image?: string;
  alt?: string;
  description?: string;
  sizeImage?: string;
  fontDescriptionColor?: string;
  fontTitleColor?: string; 
  color?: string;
  showButton?: boolean;
  titleCard?: string;
}

const Card: FunctionComponent<CardProps> = ({
  image,
  alt,
  description,
  sizeImage,
  fontDescriptionColor,
  color,
  fontTitleColor,
  titleCard,
  showButton = true,
}) => {
  return (
    <div
      className="card"
      style={{
        background: color,
      }}
    >
      <img className="imageStyle" src={image} alt={alt} width={sizeImage} />
      <div style={{ padding: 10 }}>
        <div style={{ color: fontTitleColor }}>
          <h1 style={{ fontSize: 20 }}>{titleCard}</h1>
        </div>
        <div
          style={{
            color: fontDescriptionColor,
            paddingBottom: 10,
          }}
        >
          {description}
        </div>
        {showButton ? (
          <div>
            <Button
              fontColor="white"
              text="Click me!"
              icon="img/shopping-cart.svg"
              color="red"
              padding="10px"
            />
          </div>
        ):null}
      </div>
    </div>
  );
};

export default Card;
