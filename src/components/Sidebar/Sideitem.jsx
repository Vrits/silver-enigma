import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const SideItem = () => {
  const bgCol = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Box display={"flex"} p={3} bg={bgCol} w={"full"}>
        <Center>
          <InfoIcon />
          <Text fontSize={"md"} mx={2}>
            Kategori Artikel
          </Text>
        </Center>
      </Box>
      <Box
        m={5}
        p={3}
        borderRadius={"lg"}
        border={"solid 1px"}
        borderColor={bgCol}
      >
        <VStack
          spacing={1}
          divider={<StackDivider borderColor={bgCol} />}
          // textAlign={"center"}
        >
          <Text
            fontSize={"sm"}
            w={"full"}
            p={3}
            borderRadius={"lg"}
            transition={"ease-out .5s all"}
            _hover={{
              cursor: "pointer",
              bg: useColorModeValue("gray.100", "gray.700"),
            }}
          >
            Kegiatan
          </Text>
          <Text
            fontSize={"sm"}
            w={"full"}
            p={3}
            borderRadius={"lg"}
            transition={"ease-out .5s all"}
            _hover={{
              cursor: "pointer",
              bg: useColorModeValue("gray.100", "gray.700"),
            }}
          >
            Pengumuman
          </Text>
          <Text
            fontSize={"sm"}
            w={"full"}
            p={3}
            borderRadius={"lg"}
            transition={"ease-out .5s all"}
            _hover={{
              cursor: "pointer",
              bg: useColorModeValue("gray.100", "gray.700"),
            }}
          >
            Dokumentasi
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default SideItem;
