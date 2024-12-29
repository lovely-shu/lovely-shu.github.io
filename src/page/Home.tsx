import Box from "@mui/material/Box";
import DrawerHeader from "../common/DrawerHeader";
import video from "../assets/art_video.mp4";
import red1 from "../assets/red.jpg";
import { useMediaQuery, useTheme } from "@mui/material";
const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 모바일 화면 크기 감지
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      sx={{
        backgroundImage: `url(${red1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box>
        <DrawerHeader />
      </Box>
      <Box
        display={"flex"}
        sx={{ objectFit: "contain", height: "100%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <video
          src={video}
          height={isMobile ? "88%" : "100%"}
          muted
          autoPlay
          loop
          controls
        />
      </Box>
    </Box>
  );
};

export default Home;
