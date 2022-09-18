import { Box, Flex, Text, Image, Button, Center, useColorModeValue } from "@chakra-ui/react";

const Items = ({
  title,
  imgLink,
  imgAlt,
  description,
  category,
  author,
  date,
  totalVisit,
}) => {

  const ftItem = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex
      flexDirection={"column"}
      border={'1px'}
      borderColor={'gray.100'}
      borderRadius="lg"
      w={"full"}
      overflow={"hidden"}
    >
      <Box p={3} alignItems={"flex-start"} bg={ftItem} w={"full"}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          {title}
        </Text>
      </Box>

      <Box display={"flex"} w="full" p={3} alignItems={"center"}>
        <Image
          boxSize="100px"
          src={imgLink}
          alt={imgAlt}
        />
        <Box display={"flex"} flexDirection={"column"} m={2}>
          <Text fontSize={"xs"}>
            {description}
          </Text>
          <Button colorScheme="red" size={"sm"} mt={2}>
            Read More
          </Button>
        </Box>
      </Box>

      <Box
        p={3}
        alignItems={"flex-start"}
        bg={ftItem}
        w={"full"}
      >
        <Text fontSize={"xs"}>
          Kategori : {category}, oleh : {author}, {date}, Dibaca : {totalVisit} kali
        </Text>
      </Box>
    </Flex>
  );
};

export default Items;
