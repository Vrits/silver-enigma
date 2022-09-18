import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  LockIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import logoStmik from "../../../public/Img/small_97th.png";
import Image from "next/image";

const Links = [
  "Home",
  "PMB Online",
  "STMIK Indonesia",
  "Daftar Prodi",
  "Kategori Artikel",
  "Hubungi Kami",
];

const NavLink = ({ children }) => (
  <Link
    // px={2}
    // py={1}
    p={3}
    rounded={"md"}
    transition={"ease .5s all"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar({ children }) {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    toggleColorMode();
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={"center"}>
            <Box>
              <Image src={logoStmik} height="50px" width="50px" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex mx={1} alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"red"}
              size={"sm"}
              mr={4}
              onClick={toggleTheme}
            >
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Center>
                  <LockIcon />
                  Login
                </Center>
              </MenuButton>
              <MenuList>
                <MenuItem>Login Mahasiswa</MenuItem>
                <MenuItem>Login Dosen</MenuItem>
                <MenuItem>Login Admin</MenuItem>
                <MenuItem>Login Administrator</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
}
