import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loading from "./loading.svg";
import error from "./error.svg";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Figure = ({ src, arWidth, arHeight, children }) => {
  let width = document.documentElement.clientWidth;
  let height = (width * arHeight) / arWidth;

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(src)
      .then(response =>{
        setImg(response.url);
        setIsLoading(false);
      })
      
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [src]);
  const SizedDiv = styled(Div)`
    width: ${width}px;
    height: ${height}px;
  `;
  if (isError)
    return (
      <>
        <SizedDiv>
          <img alt="error" src={error} />
          Error
        </SizedDiv>
      </>
    );
  if (isLoading)
    return (
      <>
        <SizedDiv>
          <img alt="loading" src={loading} />
          Loading
        </SizedDiv>
        <figcaption>{children}</figcaption>
      </>
    );
  return (
    <>
      <img alt={img} src={img} width={width} height={height} />
      <figcaption>{children}</figcaption>
    </>
  );
};

export default Figure;
