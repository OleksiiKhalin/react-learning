import { headerImagesLinks, reactDesciptions } from "../data"
import './Header.css'
import { useState } from "react";


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const [description] = useState(
    reactDesciptions[genRandomInt(reactDesciptions.length - 1)]
  );

  const [headerImg] = useState(() =>
    headerImagesLinks[genRandomInt(headerImagesLinks.length - 1)]
  );

  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header >
  )
}