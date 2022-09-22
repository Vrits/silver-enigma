import { VStack } from "@chakra-ui/react";
import Items from "../Items/Items";

const DUMMY_DATA = [
  {
    title: "JADWAL SEM GANJIL 2022-2023 (Update 11 September 2022)",
    imgLink:
      "https://stmik.id/source/image/dc1024b159ec9f9a20bc842e36f05900/small_37logostmikindonesiabanjarmasin.png",
    imgAlt: "logo STMIK",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A unde dignissimos vel iste doloremque vero nemo praesentium adipisci quidem quasi.",
    category: "Pengumuman",
    author: "Muhammad Heriyadi, M.Kom",
    date: "Senin 22 Agustus 2022 11:12:29",
    totalVisit: "1649",
  },
  {
    title: "JADWAL SEM GANJIL 2022-2023 (Update 11 September 2022)",
    imgLink:
      "https://stmik.id/source/image/dc1024b159ec9f9a20bc842e36f05900/small_37logostmikindonesiabanjarmasin.png",
    imgAlt: "logo STMIK",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A unde dignissimos vel iste doloremque vero nemo praesentium adipisci quidem quasi.",
    category: "Pengumuman",
    author: "Muhammad Heriyadi, M.Kom",
    date: "Senin 22 Agustus 2022 11:12:29",
    totalVisit: "1649",
  },
  {
    title: "JADWAL SEM GANJIL 2022-2023 (Update 11 September 2022)",
    imgLink:
      "https://stmik.id/source/image/dc1024b159ec9f9a20bc842e36f05900/small_37logostmikindonesiabanjarmasin.png",
    imgAlt: "logo STMIK",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A unde dignissimos vel iste doloremque vero nemo praesentium adipisci quidem quasi.",
    category: "Pengumuman",
    author: "Muhammad Heriyadi, M.Kom",
    date: "Senin 22 Agustus 2022 11:12:29",
    totalVisit: "1649",
  },
];

const Homepage = () => {
  return (
    <VStack w={"700px"} spacing={'4'}>
      {DUMMY_DATA.map((item, index) => (
        <Items
          key={`${item}+${index}`}
          title={item.title}
          imgLink={item.imgLink}
          imgAlt={item.imgAlt}
          description={item.description}
          category={item.category}
          author={item.author}
          date={item.date}
          totalVisit={item.totalVisit}
        />
      ))}
    </VStack>
  );
};

export default Homepage;
