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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Divider,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  LockIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import logoStmik from "../../../public/Img/small_97th.png";
import Image from "next/image";

// const Links = [
//   "Home",
//   "PMB Online",
//   "STMIK Indonesia",
//   "Daftar Prodi",
//   "Kategori Artikel",
//   "Hubungi Kami",
// ];

const Links = [
  {
    title: "Home",
  },
  {
    title: "PMB Online",
  },
  {
    title: "STMIK Indonesia",
    subTitle: ["Sejarah STMIK Indonesia", "Visi dan Misi STMIK Indonesia"],
  },
  {
    title: "Daftar Prodi",
    subTitle: [
      "Komputer Akuntansi",
      "Manajemen Informatika",
      "Sistem Informasi",
      "Teknik Informatika",
    ],
  },
  {
    title: "Kategori Artikel",
    subTitle: ["Kegiatan", "Pengumuman", "Dokumentasi"],
  },
  {
    title: "Hubungi Kami",
  },
];

// const NavLinkMobile = ({ link }) => (
//   <Link
//     // px={2}
//     // py={1}
//     p={3}
//     rounded={"md"}
//     transition={"ease .5s all"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//   </Link>
// );

const NavLinkMobile = ({ link }) => (
  <Accordion allowToggle>
    <AccordionItem
      px={2}
      py={1}
      rounded={"md"}
      transition={"ease .5s all"}
      // _hover={{
      //   textDecoration: "none",
      //   bg: useColorModeValue("gray.200", "gray.700"),
      // }}
      borderStyle={"none"}
    >
      <AccordionButton>{link.title} {link.subTitle ? (<AccordionIcon />) : ''}</AccordionButton>
      <Divider />
      {link.subTitle ? (
        <>
          {link.subTitle.map((subtitle, index) => (
            <AccordionPanel key={subtitle+index}>
              {subtitle}
            </AccordionPanel>
          ))}
        </>
      ) : (
        ""
      )}
    </AccordionItem>
  </Accordion>
);

const NavLink = ({ link }) => (
  <Menu>
    <MenuButton
      px={2}
      py={1}
      rounded={"md"}
      transition={"ease .5s all"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {link.title}
      {link.subTitle ? <ChevronDownIcon /> : ""}
    </MenuButton>

    {link.subTitle ? (
      <MenuList>
        {link.subTitle.map((subtitle, index) => (
          <MenuItem key={subtitle + index}>{subtitle}</MenuItem>
        ))}
      </MenuList>
    ) : (
      ""
    )}
  </Menu>
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
                <NavLink key={link.title} link={link} />
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
                <NavLinkMobile key={link.title} link={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
}
