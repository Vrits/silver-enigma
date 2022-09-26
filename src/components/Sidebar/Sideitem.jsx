import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const SideItem = ({ title, subTitle }) => {
  const bgCol = useColorModeValue("gray.100", "gray.700");

  return (
      <Box
        w={"full"}
        border={"solid 1px"}
        borderRadius={"lg"}
        overflow={"hidden"}
        borderColor={bgCol}
      >
        <Box display={"flex"} p={3} bg={bgCol} w={"full"}>
          <Center>
            <InfoIcon />
            <Text fontSize={"md"} mx={2}>
              {title}
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
          <VStack spacing={1} divider={<StackDivider borderColor={bgCol} />}>
            {subTitle.map((item, index) => (
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
                key={item + index}
              >
                {item}
              </Text>
            ))}
            {/* <Text
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
          </Text> */}
          </VStack>
        </Box>
      </Box>
  );
};

export default SideItem;
