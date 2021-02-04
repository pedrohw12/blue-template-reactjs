import React from "react";

// Components
import Item from "./components/Item"; 

// Styles
import { Container, Content, Title, Explanation, CardsArea } from "./styles";

const FirstSection = () => {
  const itens = [
    {
      title: "Atraia",
      description:
        "Tenha mais pessoas chegando a seu negócio todos os dias durante o ano.",
    },
    {
      title: "Encante",
      description:
        "A melhor propaganda é feita por um cliente satisfeito.",
    },
    {
      title: "Venda",
      description: "Venda todos os dias do ano.",
    },
  ];

  return (
    <Container>
      <Content className="container-wrap">
        <Title>Quer mais clientes?</Title>
        <Explanation>
          Eu posso te ajudar fazendo a internet trabalhar 24 horas para o seu
          negócio. Parece mágica! Mas é apenas utilizar a melhor ferramenta do
          mundo, para impactar pessoas e fazê-las entender o valor do seu negócio.
        </Explanation>
        <CardsArea>
          {itens.map((item, key) => (
            <Item key={key} title={item.title} description={item.description} />
          ))}
        </CardsArea>
      </Content>
    </Container>
  );
};

export default FirstSection;
