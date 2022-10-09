import React, { useState } from "react";
import styled from "styled-components";

const Maker = () => {

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ url, setUrl ] = useState("");


  const uploadImage = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "bnyfc82y")
    data.append("cloud_name","dtlb2mt5i")

  await fetch("https://api.cloudinary.com/v1_1/dtlb2mt5i/image/upload",{
        method: "post",
        body: data
      })
      .then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err))  
  };

  console.log(url)


  if (url !== undefined){

  return (
    <Container>
      <Block>
        <Form>
          <SubTitle>Maker</SubTitle>
          {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}

          <FormDiv>
            <input
              type="file"
              onChange={(e) => {setImage(e.target.files[0]);
              }}
            ></input>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            ></input>
            <button onClick={uploadImage}>
              Submit
            </button>
          </FormDiv>
        </Form>
      </Block>

      <Block>
        <Polaroid>
          <Titles href="" title={description}>
          <img src={url}/>
          </Titles>
        </Polaroid>
      </Block>

      <Block></Block>
    </Container>
  );
};}

const Container = styled.div`
  background-color: rgb(247, 247, 250);
  padding-left: 20px;
  max-width: 80vw;
  width: 720px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Block = styled.div`
  margin: 10px;
  padding: 10px;
  flex: 40%;
`;

const Polaroid = styled.div`
  background: #ffffff;
  display: inline-block;
  margin: 10px 10px 10px;
  padding: 15px 15px 30px;
  text-align: center;
  text-decoration: none;
  -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  transition: all 0.2s linear;
  z-index: 0;
  position: relative;

  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
    z-index: 10;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
`;

const Titles = styled.div`
  &:after {
    color: #333;
    font-size: 20px;
    content: attr(title);
    position: relative;
    top: 10px;
  }
`;

const Img = styled.img`
  pointer-events: none;
  filter: grayscale(60%);
  display: block;
  width: 250px;
  height: 250px;
  max-width: 250px;
  max-height: 250px;
`;

const Form = styled.form`
  width: 250px;
  height: 320px;
  border: 0.5px solid lightgray;
  padding: 0 20px;
  background-color: white;
`;

const SubTitle = styled.h1`
  text-align: center;
`;

const ErrorMessage = styled.button`
  text-align: center;
  width: 300px;
  height: 3em;
  color: black;
  font-weight: bold;
  background-color: pink;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 245px;
  margin-top: 10px;
  height: 3em;
  border: 0.5px solid lightgray;
  border-radius: 5px;
`;

const Label = styled.label`
  margin-top: 10px;
  text-align: center;
`;

const SignupButton = styled.button`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 250px;
  height: 3em;
  color: white;
  background-color: crimson;
  border: none;
  border-radius: 5px;
`;

export default Maker;
