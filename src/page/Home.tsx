import Box from "@mui/material/Box";
import DrawerHeader from "../common/DrawerHeader";
import video from "../assets/art_video.mp4";
import red1 from "../assets/red.jpg";
const Home = () => {
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
        <video src={video} height={"100%"} muted autoPlay loop controls />
      </Box>
    </Box>
  );
};

export default Home;
