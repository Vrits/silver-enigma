import { VStack } from "@chakra-ui/react";
import SideItem from "./Sideitem";

const Sidebar = () => {
  return (
    <VStack spacing={5} w={"400px"}>
      <SideItem
        title={"Kategori Artikel"}
        subTitle={["Kegiatan", "Pengumuman", "Dokumentasi"]}
      />
      <SideItem
        title={"Navigasi Situs"}
        subTitle={[
          "Sejarah STMIK Indonesia",
          "Visi Misi dan Tujuan STMIK Indonesia",
          "Semua Download",
          "Semua Artikel",
          "Hubungi Kami",
        ]}
      />
    </VStack>
  );
};

export default Sidebar;
