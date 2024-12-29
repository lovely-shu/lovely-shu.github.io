import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerHeader from "../common/DrawerHeader";
import Empty from "../common/Empty";
const Business = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 모바일 화면 크기 감지
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
        <Typography variant={isMobile ? "h5" : "h4"}>창업 문의</Typography>
        <hr />
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={2}
        >
          <Table size="small" sx={{ textAlign: "center", width: "100%" }}>
            <TableHead>
              <TableRow sx={{ bgcolor: "#f0f0f0" }}>
                <TableCell sx={{ textAlign: "center", fontSize: "20px", p: 1 }}>
                  기재 항목
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontSize: "20px", p: 1 }}>
                  이름 (상호명)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontSize: "20px", p: 1 }}>
                  연락처 및 이메일
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontSize: "20px", p: 1 }}>
                  시공 예정(희망) 날짜
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                    wordBreak: "keep-all",
                    fontSize: "20px",
                    p: 1,
                  }}
                >
                  부동산 계약 여부(미정, 계약예정, 계약완료, 자가)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontSize: "20px", p: 1 }}>
                  시공 예산 (최소 5천~)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontSize: "20px", p: 1 }}>
                  문의 내용
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    textAlign: "center",
                    bgcolor: "#f0f0f0",
                    fontSize: "20px",
                    wordBreak: "keep-all",
                    p: 1,
                  }}
                >
                  문자로 해당 사항을 보내주시면 자세한 상담 도와드리겠습니다.
                  <br /> 010 9034 4440
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Business;
