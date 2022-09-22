import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import SideItem from "./Sideitem";

const Sidebar = () => {
  const bgCol = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex flexDirection={"column"} w={"400px"} alignItems={"center"}>
      <Box
        w={"full"}
        border={"solid 1px"}
        borderRadius={"lg"}
        overflow={"hidden"}
        borderColor={bgCol}
      >
        <SideItem />
      </Box>
    </Flex>
  );
};

export default Sidebar;
