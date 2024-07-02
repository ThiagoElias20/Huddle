import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import {Container} from "./styles/Container.styled"
import {Flex} from "./styles/Flex.styled"
import {Button} from "./styles/Button.styled"

export function Header() {
  return (
    <StyledHeader>
      <Container>
      <Nav>
        <Logo src="./images/logo.svg" alt="" />
        <Button>Tente de graça</Button>
      </Nav>
      <Flex>
        <div>
          <h1>Construa a Comunidade Que Seus Fãs Vão Amar</h1>

          <p>O Huddle reimagina a forma como construímos comunidades. Você
            ter uma voz,
            mas o mesmo acontece com o seu público. Crie conexões com o seu 
            usuários como
            você se envolve em uma discussão genuína.
          </p>

          <Button bg="#ff0099" color="#fff">
            Comece gratuitamente
          </Button>
        </div>

        <Image src="./images/illustration-mockups.svg" alt="" />
      </Flex>
      </Container>
    </StyledHeader>
  )
}