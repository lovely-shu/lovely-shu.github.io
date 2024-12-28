import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import DrawerHeader from "../common/DrawerHeader";
import Empty from "../common/Empty";
import img1 from "../assets/room/연습실 내부.jpeg";
import img2 from "../assets/room/연습실내부2.jpeg";
import img3 from "../assets/room/연습실내부3.jpeg";
import img4 from "../assets/room/복도.jpeg";
import img5 from "../assets/room/홀3.jpeg";
import img6 from "../assets/room/복도3.jpeg";
import img8 from "../assets/room/거울.jpeg";
import img9 from "../assets/room/로비.jpeg";
import img10 from "../assets/room/방입구.jpeg";
import img11 from "../assets/room/쇼파.jpeg";
import img12 from "../assets/room/합주실.jpeg";
import img13 from "../assets/room/합주실2.jpeg";
import img14 from "../assets/room/화장실.jpeg";
import img15 from "../assets/room/화장실2.jpeg";
import img16 from "../assets/room/피아노.jpeg";
import img17 from "../assets/room/개수대.jpeg";
import img18 from "../assets/room/개수대2.jpeg";
import img19 from "../assets/room/소독.jpeg";
import img20 from "../assets/room/청소.jpeg";
import img21 from "../assets/room/청소2.jpeg";
const imageBox = (src: string) => {
  return (
    <Box height={"350px"}>
      <img height={"100%"} src={src} />
    </Box>
  );
};

const Room = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 모바일 화면 크기 감지
  return (
    <Box width={"100%"} height={"100vh"}>
      <Box>
        <DrawerHeader />
      </Box>
      <Empty />
      {isMobile ? (
        <Box>
          <Box
            width={"90%"}
            display={"flex"}
            margin={"0 auto"}
            flexDirection={"column"}
          >
            <Typography variant="h5">Room Portfolio</Typography>
            <hr />
            <Box
              width={"100%"}
              pt={2}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              margin={"0 auto"}
            >
              <img src={img1} />
              <img src={img2} />
              <img src={img4} />
              <img src={img6} />
              <img src={img8} />
              <img src={img12} />
              <img src={img10} />
              <img src={img13} />
              <img src={img16} />
            </Box>
            <Typography mt={4} variant="h5">
              Convenient Facilities
            </Typography>
            <hr />
            <Box
              width={"100%"}
              pt={2}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              margin={"0 auto"}
            >
              <img src={img14} />
              <img src={img15} />
              <img src={img17} />
              <img src={img18} />
              <img src={img11} />
              <img src={img9} />
              <img src={img5} />
            </Box>
            <Typography mt={4} variant="h5">
              Cleaning System
            </Typography>
            <hr />
            <Box
              width={"100%"}
              pt={2}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              margin={"0 auto"}
            >
              <img src={img20} />
              <img src={img19} />
              <img src={img21} />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            width={"1100px"}
            display={"flex"}
            margin={"0 auto"}
            flexDirection={"column"}
          >
            <Typography variant="h4">Room Portfolio</Typography>
            <hr />
          </Box>
          <Box
            width={"1100px"}
            pt={2}
            display={"flex"}
            justifyContent={"space-between"}
            margin={"0 auto"}
          >
            {imageBox(img1)}
            {imageBox(img2)}
            {imageBox(img3)}
            {imageBox(img4)}
          </Box>
          <Box
            width={"1100px"}
            pt={2}
            display={"flex"}
            justifyContent={"space-between"}
            margin={"0 auto"}
          >
            {imageBox(img6)}
            {imageBox(img8)}
            {imageBox(img12)}
          </Box>
          <Box
            width={"1100px"}
            pt={2}
            display={"flex"}
            justifyContent={"space-between"}
            margin={"0 auto"}
          >
            {imageBox(img10)}
            {imageBox(img13)}
            {imageBox(img16)}
          </Box>
          <Box
            width={"1100px"}
            display={"flex"}
            margin={"0 auto"}
            flexDirection={"column"}
            mt={3}
          >
            <Typography variant="h4">Convenient Facilities</Typography>
            <hr />
          </Box>
          <Box
            width={"1100px"}
            pt={2}
            display={"flex"}
            justifyContent={"space-between"}
            margin={"0 auto"}
          >
            {imageBox(img14)}
            {imageBox(img15)}
            {imageBox(img17)}
            {imageBox(img18)}
          </Box>

          <Box
            width={"1100px"}
            pt={2}
            display={"flex"}
            justifyContent={"space-between"}
            margin={"0 auto"}
          >
            {imageBox(img11)}
            {imageBox(img9)}
            {imageBox(img5)}
          </Box>
          <Box
            width={"1100px"}
            display={"flex"}
            margin={"0 auto"}
            flexDirection={"column"}
            mt={3}
          >
            <Typography variant="h4">Cleaning System</Typography>
            <hr />
          </Box>
          <Box
            width={"1100px"}
            pt={2}
            display={"flex"}
            justifyContent={"space-between"}
            margin={"0 auto"}
          >
            {imageBox(img20)}
            {imageBox(img19)}
            {imageBox(img21)}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Room;
