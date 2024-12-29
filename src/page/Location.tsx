import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import DrawerHeader from "../common/DrawerHeader";
import Empty from "../common/Empty";
import KaKaoMap from "../common/KaKaoMap";
import { useState } from "react";

const Location = () => {
  const [address, setAddress] = useState("서울 관악구 남부순환로 1868");
  const [name, setName] = useState("서울대입구역점");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 모바일 화면 크기 감지
  const Title = (text: string, location: string) => {
    return (
      <Typography
        onClick={() => {
          setAddress(location);
          setName(text);
        }}
        sx={{
          wordBreak: "keep-all",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "50px",
          fontSize: "17px",
          p: 1,
          width: "300px",
          bgcolor: name === text ? "#f0f0f0" : null,
          "&:hover": {
            bgcolor: "#f0f0f0",
            cursor: "pointer",
          },
        }}
      >
        {text}
      </Typography>
    );
  };
  return (
    <Box width={"100%"} height={"100vh"}>
      <Box>
        <DrawerHeader />
      </Box>
      <Empty />
      <Box
        width={"80%"}
        display={"flex"}
        margin={"0 auto"}
        flexDirection={"column"}
      >
        <Typography
          sx={{ wordBreak: "keep-all" }}
          variant={isMobile ? "h5" : "h4"}
        >
          아트콤마스튜디오 지점안내
        </Typography>
        <hr />
        <Box mt={2} display={"flex"} justifyContent={"space-evenly"}>
          {Title("한양대 에리카점", "경기 안산시 상록구 한양대학1길 61")}
          {Title("서울대 입구역점", "서울 관악구 남부순환로 1868")}
          {Title("서울예대점", "경기 안산시 단원구 예술대학로 149")}
          {Title("고잔점", "경기 안산시 단원구 광덕3로 97")}
        </Box>
        <Box display={"flex"} mt={1} justifyContent={"space-evenly"}>
          {Title("광주수완지구점", "광주 광산구 사암로340번안길 6-9")}
          {Title("신길점", "경기 안산시 단원구 신길로 85")}
          {Title("합주실호수점", "경기 안산시 단원구 광덕서로 44")}
        </Box>
        <KaKaoMap address={address} name={name} />
      </Box>
    </Box>
  );
};

export default Location;
