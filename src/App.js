import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
const imageUrl = "https://random.dog/4e7e3574-d68b-4807-9e75-12eb4f188e7c.PNG";
const url = "https://random.dog/woof.json";

//const imageUrl2 = "https://random.dog/7e1527a4-9c07-48df-a877-4c6e4681adc1.jpg";
let imageUrl2;
let imgaeUrl3 = "https://random.dog/54876759-47df-4e09-b7d0-80476e658d89.jpg";
let imageUrl4 = "https://random.dog/0afd649d-ec06-403f-aeb5-0262d1750182.jpg";
let imageUrl5 = "https://random.dog/9c9667b6-0956-4013-a81b-c1de90ad1044.jpg";
let imageUrl6 = "https://random.dog/cdfe24b3-8ba8-44b1-a5f4-4174936dabb6.jpg";
let imageUrl7 = "https://random.dog/be32463b-5476-41ab-bc44-37170957ee69.jpg";
let imageUrl8 = "https://random.dog/e2024ac7-8078-413b-9298-5eeaf6b2fe32.jpg";



export default function App() {

  let url = "https://random.dog/woof.json";
  let img1;

  // fetch(url)
  // .then(res => res.json())
  // .then((out) => {
  //   img1 = out.url; 
  //   imageUrl2 = out.url;     
  // })
  // .catch(err => { throw err });

  // console.log("TESTTTT",imageUrl2);


  const [img, setImg] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const [img5, setImg5] = useState();
  const [img6, setImg6] = useState();
  const [img7, setImg7] = useState();
  const [img8, setImg8] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  const fetchImage2 = async () => {
    const res = await fetch("https://random.dog/41bf3852-811c-470f-8e3d-8b023e5e1c0b.jpg");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg2(imageObjectURL);
  };

  const fetchImage3 = async () => {
    const res = await fetch("https://random.dog/54876759-47df-4e09-b7d0-80476e658d89.jpg");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg3(imageObjectURL);
  };

  const fetchImage4 = async () => {
    const res = await fetch(imageUrl4);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg4(imageObjectURL);
  };

  const fetchImage5 = async () => {
    const res = await fetch(imageUrl5);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg5(imageObjectURL);
  };

  const fetchImage6 = async () => {
    const res = await fetch(imageUrl6);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg6(imageObjectURL);
  };

  const fetchImage7 = async () => {
    const res = await fetch(imageUrl7);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg7(imageObjectURL);
  };

  const fetchImage8 = async () => {
    const res = await fetch(imageUrl8);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg8(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
    fetchImage2();
    fetchImage3();
    fetchImage4();
    fetchImage5();
    fetchImage6();
    fetchImage7();
    fetchImage8();
  }, []);

  return (
    <>
      <table>
        <tr>
          <td><img src={img} alt="doggo" width="400" height="400"/></td>
          <td><img src={img2} alt="doggo" width="400" height="400"/></td>
          <td><img src={img3} alt="doggo" width="400" height="400"/></td>
          <td><img src={img4} alt="doggo" width="400" height="400"/></td>
        </tr>
        <tr>
          <td><img src={img5} alt="doggo" width="400" height="400"/></td>
          <td><img src={img6} alt="doggo" width="400" height="400"/></td>
          <td><img src={img7} alt="doggo" width="400" height="400"/></td>
          <td><img src={img8} alt="doggo" width="400" height="400"/></td>
        </tr>
      </table>
      <center><button width="100"><a href='./'>Refresh</a></button></center>
    </>
  );
}

