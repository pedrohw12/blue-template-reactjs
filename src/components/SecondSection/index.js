import React from "react";

// Components
import Item from "./components/Item";

// Styles
import { Container, Title, CardsArea } from "./styles";

const SecondSection = () => {
  const itens = [
    {
      title: "Websites",
      description:
        "Construo sites bonitos e simples, que cumprem com o seu principal objetivo - atrair leads e clientes.",
    },
    {
      title: "Landing Pages",
      description:
        "Páginas bem estruturadas que conduzem as pessoas - bloco a bloco - para o objetivo final.",
    },
    {
      title: "Anúncios",
      description:
        "Faço a gestão das suas campanhas de anúncios no Google.",
    },
    {
      title: "Estratégias",
      description:
        "Eu desenho toda a sua campanha de vendas, desde atração, passando pelo engajamento, até a oferta.",
    },
    {
      title: "Consultoria",
      description:
        "Tem alguma dificuldade no seu projeto? Eu te ajudo a desbloquear o caminho para uma campanha de sucesso.",
    },
    {
      title: "Motivação",
      description:
        "Você sabe o que tem que fazer, mas não faz? Precisa de um empurrão? Eu posso te atormentar, se você quiser, claro.",
    },
  ];

  return (
    <Container className="container-wrap">
      <Title>Meus serviços</Title>
      <CardsArea>
        {itens.map((item, key) => (
          <Item key={key} title={item.title} description={item.description} />
        ))}
      </CardsArea>
    </Container>
  );
};

export default SecondSection;
