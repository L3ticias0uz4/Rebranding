import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #555;
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 15px 30px;
  border: none;
  background: #000;
  color: #fff;
  border-radius: 8px;
`;

export default function Hero() {
  return (
    <Section>
      <div>
        <Title>
          Tecnologia que resolve soluções inteligentes para impulsionar seu negócio
        </Title>
        <Subtitle>
          Oferecemos tecnologia, suporte e consultoria para levar sua empresa para o próximo nível.
        </Subtitle>
        <Button>Fale com especialista</Button>
      </div>
    </Section>
  );
}