import { Container, Flex } from "@chakra-ui/react";
import Homepage from "../src/components/Homepage/Homepage";


export default function Home() {
  return (
    <Container>
      <Flex w={'full'}>
    <Homepage />
      </Flex>
    </Container>
  )
}
