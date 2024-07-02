import { SocialIcons } from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus tenetur soluta quisquam doloremque odio iste culpa, laboriosam minima.
            </li>
            <li>+55 (85) 9 9999-9999</li>
            <li>exemplo@huddle.com</li>
          </ul>
          <ul>
            <li>Sobre</li>
            <li>Oque fazemos</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Carreira</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>

          <SocialIcons/>
        </Flex>

        <p>&copy; 2024 Huddle. Todos os direitos reservados</p>
      </Container>
    </StyledFooter>
  )
}