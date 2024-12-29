import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import DrawerHeader from "../common/DrawerHeader";
import Footer from "../common/Footer";
import ReactFullpage from "@fullpage/react-fullpage";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";

const Brand = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 모바일 화면 크기 감지
  return (
    <Box width={"100%"} height={"100vh"}>
      <Box>
        <DrawerHeader />
      </Box>
      <ReactFullpage
        // 라이브러리 설정
        credits={{ enabled: false }} // 크레딧 표시 비활성화
        scrollingSpeed={700} // 스크롤 속도
        anchors={["section1", "section2", "section3"]} // URL 앵커
        navigation // 네비게이션 추가
        navigationTooltips={["Home", "About", "Contact"]} // 네비게이션 툴팁
        render={() => (
          <Box height={"100vh"}>
            <Box
              className="section"
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              sx={{
                backgroundImage: `url(${image1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Box bgcolor={"rgba(255,255,255,0.9)"} p={5} borderRadius={2}>
                <Typography
                  sx={{ wordBreak: "keep-all", textAlign: "center" }}
                  variant={isMobile ? "h5" : "h3"}
                >
                  아트콤마 스튜디오, 예술인을 위한 최고의 연습 공간
                </Typography>
                <Typography
                  sx={{ wordBreak: "keep-all" }}
                  variant={isMobile ? "h6" : "h4"}
                  textAlign={"center"}
                  mt={2}
                >
                  "열악한 환경에서 시작된 꿈, 완벽한 공간으로 실현되다"
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    wordBreak: "keep-all",
                    textAlign: "center",
                    lineHeight: 2,
                    fontSize: "17px",
                  }}
                >
                  아트콤마 스튜디오는 예술을 전공하고 현재도 예술인으로 활동
                  중인 대표의 경험에서 탄생했습니다. <br />
                  대표는 어린 시절, 방음이 제대로 되지 않아 외부 소음에 방해받던
                  작업실에서 <br />
                  곰팡이 냄새 가득한 지하 공간까지, 창작에 집중하기 어려운 환경
                  속에서 작업해왔습니다. <br /> 이때 느낀 불편함과 아쉬움은 창작
                  활동뿐만 아니라 정신적, 감정적으로도 큰 영향을 끼쳤습니다.
                </Typography>
              </Box>
            </Box>
            <Box
              className="section"
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              sx={{
                backgroundImage: `url(${image2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Box bgcolor={"rgba(255,255,255,0.9)"} p={5} borderRadius={2}>
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  sx={{
                    textAlign: "center",
                    lineHeight: 1.5,
                    wordBreak: "keep-all",
                  }}
                >
                  "조금 더 나은 환경에서 창작할 수 있었다면,
                  <br /> 제 작품도, 제 마음도 더 풍요로웠을 겁니다."
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    wordBreak: "keep-all",
                    textAlign: "center",
                    lineHeight: 2,
                    fontSize: "17px",
                  }}
                >
                  대표는 이러한 경험을 바탕으로 예술인들이 오직 창작에만 몰두할
                  수 있는 최적의 공간을 만들겠다는 꿈을 꾸게 되었습니다. <br />
                  그리고 그 꿈은 오늘, 아트콤마 스튜디오라는 이름으로
                  실현되었습니다.
                </Typography>
              </Box>
            </Box>
            <Box
              className="section"
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              sx={{
                backgroundImage: `url(${image3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Box bgcolor={"rgba(255,255,255,0.9)"} p={5} borderRadius={2}>
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  textAlign={"center"}
                  sx={{ wordBreak: "keep-all" }}
                >
                  최고의 방음 시설과 섬세한 디테일
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    wordBreak: "keep-all",
                    textAlign: "center",
                    lineHeight: 2,
                    fontSize: "17px",
                  }}
                >
                  아트콤마 스튜디오는 최고 수준의 방음 시설을 자랑합니다. <br />
                  외부 소음으로부터 완벽히 차단된 공간에서 오직 창작과 연습에만
                  집중할 수 있습니다. <br /> 방음 시설뿐만 아니라, 스튜디오 내
                  각 공간은 예술작업에 적합하도록 섬세하게 설계되었습니다.{" "}
                  <br />
                  현대적이고 감각적인 인테리어는 사용자의 예술적 감각을
                  자극하며,
                  <br />
                  단순한 작업실을 넘어 창작의 영감을 불어넣는 공간으로 자리 잡고
                  있습니다.
                </Typography>
              </Box>
            </Box>
            <Box
              className="section"
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              sx={{
                backgroundImage: `url(${image4})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Box bgcolor={"rgba(255,255,255,0.9)"} p={5} borderRadius={2}>
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  textAlign={"center"}
                  sx={{ wordBreak: "keep-all" }}
                >
                  예술인은 소통하며 성장합니다
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    wordBreak: "keep-all",
                    textAlign: "center",
                    lineHeight: 2,
                    fontSize: "17px",
                  }}
                >
                  아트콤마 스튜디오는 단순히 개인 공간에 그치지 않고, 예술인
                  간의 소통과 협업을 중요하게 생각합니다. <br /> "누가 내 주변에
                  있는가"는 예술작업에 있어 중요한 요소 중 하나입니다. <br />{" "}
                  좋은 사람들과 소통하며 영감을 주고받는 환경이 예술인의 성장과
                  창작에 큰 힘이 됩니다.
                </Typography>
              </Box>
            </Box>
            <Box
              className="section"
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
              sx={{
                backgroundImage: `url(${image5})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Box bgcolor={"rgba(255,255,255,0.9)"} p={5} borderRadius={2}>
                <Typography
                  variant={isMobile ? "h5" : "h3"}
                  textAlign={"center"}
                  sx={{ wordBreak: "keep-all" }}
                >
                  창작의 새로운 기준, 아트콤마 스튜디오
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    wordBreak: "keep-all",
                    fontSize: "17px",
                    textAlign: "center",
                  }}
                >
                  아트콤마 스튜디오는 열악한 환경에서 벗어나, 오직 창작에만
                  몰두할 수 있는 환경을 제공합니다. <br /> 편안함과 세련됨,
                  그리고 예술적 소통의 가치를 담아낸 공간. 이곳에서 여러분의
                  창작이 빛나기를 바랍니다.
                </Typography>
                <Typography
                  sx={{ mt: 5, wordBreak: "keep-all", textAlign: "center" }}
                >
                  아트콤마 스튜디오 드림
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      />
      <Footer />
    </Box>
  );
};

export default Brand;
