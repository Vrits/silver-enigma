import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

const Items = () => {
  return (
    <Flex
      flexDirection={"column"}
    //   border="1px black solid"
      borderRadius="lg"
      w={"full"}
      overflow={'hidden'}
    >
      <Box
        p={3}
        alignItems={"flex-start"}
        bg={"gray.100"}
        w={"full"}
      >
        <Text fontSize={"sm"} fontWeight={"bold"}>
          JADWAL SEM GANJIL 2022-2023 (Update 11 September 2022)
        </Text>
      </Box>

      <Box display={"flex"} w="full" p={3}>
        <Image
          boxSize="100px"
          src="https://stmik.id/source/image/dc1024b159ec9f9a20bc842e36f05900/small_37logostmikindonesiabanjarmasin.png"
          alt="logo STMIK"
        />
        <Box display={'flex'} flexDirection={'column'} m={2}>
        <Text fontSize={'xs'} >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A unde
          dignissimos vel iste doloremque vero nemo praesentium adipisci quidem
          quasi.
        </Text>
        <Button colorScheme='red' size={'sm'} mt={2}>Read More</Button>
        </Box>
      </Box>

      <Box
        p={3}
        alignItems={"flex-start"}
        bg={"gray.100"}
        w={"full"}
        borderRadius="lg"
      >
        <Text fontSize={"xs"}>
          Kategori : Pengumuman, oleh : Muhammad Heriyadi, M.Kom Senin, 22
          Agustus 2022 11:12:29 dibaca : 1611 kali
        </Text>
      </Box>
    </Flex>
  );
};

export default Items;
