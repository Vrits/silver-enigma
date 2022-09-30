import { Container, Flex } from "@chakra-ui/react";
import Homepage from "../src/components/Homepage/Homepage";

export default function Home() {
  return (
    <Container maxWidth={['full', 'full','xl']} px={['0', '0', '4']}>
      <Flex  w={"full"}>
        <Homepage />
      </Flex>
    </Container>
  );
}
