import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import DrawerHeader from "../common/DrawerHeader";
import Empty from "../common/Empty";
import img1 from "../assets/room/1.jpeg";
import img2 from "../assets/room/2.jpeg";
import img3 from "../assets/room/3.jpeg";
import img4 from "../assets/room/4.jpeg";
import img5 from "../assets/room/5.jpeg";
import img6 from "../assets/room/6.jpeg";
import img8 from "../assets/room/7.jpeg";
import img9 from "../assets/room/8.jpeg";
import img10 from "../assets/room/9.jpeg";
import img11 from "../assets/room/10.jpeg";
import img12 from "../assets/room/11.jpeg";
import img13 from "../assets/room/12.jpeg";
import img14 from "../assets/room/13.jpeg";
import img15 from "../assets/room/14.jpeg";
import img16 from "../assets/room/15.jpeg";
import img17 from "../assets/room/16.jpeg";
import img18 from "../assets/room/17.jpeg";
import img19 from "../assets/room/18.jpeg";
import img20 from "../assets/room/19.jpeg";
import img21 from "../assets/room/20.jpeg";
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
            <Typography variant="h5">연습실 내부</Typography>
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
              호텔식 편의시설
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
              아트콤마의 청소 시스템
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
            <Typography variant="h4">연습실 내부</Typography>
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
            <Typography variant="h4">호텔식 편의시설</Typography>
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
            <Typography variant="h4">아트콤마의 청소 시스템</Typography>
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
