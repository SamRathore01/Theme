import React, { useMemo, useCallback } from "react";
import Data from "../codetestjson.json";
import { ReactComponent as PlusIcon } from "../assets/plus.svg";
import styled from "styled-components";
import { Typography } from "@mui/material";

interface Block {
  type: string;
  text?: string;
  url?: string;
  captionText?: string;
}

const Container = styled.div`
  padding: 2rem;
`;

const HeaderContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const BylineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Logo = styled(PlusIcon)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  margin-left: 0.5rem;
`;

const Hr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`;

const ImgContainer = styled.div`
  text-align: center;
`;

const Img = styled.img`
  max-width: 55vw;
  display: block;
  margin: 1rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImgCaption = styled.span`
  display: block;
  text-align: center;
  margin-top: 0.5rem;
`;

const ImgCaptionText = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
`;

const QuoteContainer = styled.div`
  border-left: 9px solid rgb(42, 42, 235);
  padding: 1rem;
  font-style: italic;
  font-weight: 600;
  font-size: 19px;
  margin: 2rem 0;
`;

const List = styled.ol`
  width: 80vw;
  display: block;
  margin: 2rem auto;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  padding: 5px;
`;

const Main: React.FC = () => {
  const renderBlockText = useCallback((block: Block) => {
    return <Typography variant="body1">{block.text}</Typography>;
  }, []);

  const renderedBlocks = useMemo(
    () => (
      <>
        {renderBlockText({ type: "text", text: Data.blocks[0].text })}
        <br />
        {renderBlockText({ type: "text", text: Data.blocks[1].text })}
        <br />
        <ImgContainer>
          <Img src={Data.blocks[2].url} alt={Data.blocks[2].captionText} />
          <ImgCaption>
            <ImgCaptionText>{Data.blocks[2].captionText}</ImgCaptionText>
          </ImgCaption>
        </ImgContainer>

        <br />
        <Typography>
          {renderBlockText({ type: "text", text: Data.blocks[3].text })}
          <Name>as opposed to using 'Content here, content here', </Name>
          <a href="google.com"> web page editors now use Lorem Ipsum </a>
        </Typography>
        <br />
        {renderBlockText({ type: "text", text: Data.blocks[4].text })}
        <br />
        <QuoteContainer className="m-4">
          <span className="p-1">{Data.blocks[5].text}</span>
          <Typography className="m-1"> {Data.byline}</Typography>
        </QuoteContainer>
        <br />
        {renderBlockText({ type: "text", text: Data.blocks[6].text })}
        <br />
        {renderBlockText({ type: "text", text: Data.blocks[7].text })}
        <br />
        <List>
          <ListItem>
            {renderBlockText({ type: "text", text: Data.blocks[6].text })}
          </ListItem>
          <ListItem>
            {renderBlockText({ type: "text", text: Data.blocks[3].text })}
          </ListItem>
          <ListItem>
            {renderBlockText({ type: "text", text: Data.blocks[4].text })}
          </ListItem>
          <ListItem>
            {renderBlockText({ type: "text", text: Data.blocks[1].text })}
          </ListItem>
        </List>
        <br />
        {renderBlockText({ type: "text", text: Data.blocks[7].text })}
      </>
    ),
    [renderBlockText]
  );

  return (
    <Container className="container p-3">
      <HeaderContainer>
        <Typography variant="h4" style={{ fontWeight: "700" }}>
          {Data.headline}
        </Typography>
        <BylineContainer>
          <Name>{Data.byline}</Name>
        </BylineContainer>
         <span> {Data.source} </span>
         <span> {Data.publicationDate}</span>
          <Logo />
      </HeaderContainer>
      <Hr />
      {renderedBlocks}
    </Container>
  );
};
export default Main;
