import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const DrawerHeader = () => {
  const [open, setOpen] = React.useState(false);
  const navi = useNavigate();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const menuName = [
    "홈",
    "브랜드 소개",
    "연습실 안내",
    "지점 안내",
    "창업 문의",
  ];
  const menuIcon = [
    <HomeIcon />,
    <GroupsOutlinedIcon />,
    <MeetingRoomOutlinedIcon />,
    <AddLocationAltOutlinedIcon />,
    <AddBusinessOutlinedIcon />,
  ];
  const menuNavi = ["/", "/brand", "/room", "/location", "/business"];
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }}
      >
        {menuName.map((text, index) => (
          <ListItem key={text}>
            <ListItemButton
              onClick={() => navi(menuNavi[index])}
              sx={{ height: "100%" }}
            >
              <ListItemIcon>{menuIcon[index]}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ fontSize: "18px" }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
      height={"40px"}
      position={"fixed"}
      top={10}
      left={0}
      alignItems={"center"}
      zIndex={999}
    >
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "orange", fontSize: "40px" }} />
      </Button>
      <Drawer
        sx={{
          ".css-cyqh1t-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "rgba(255,255,255,0.9)",
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
      <Typography color="orange" pr={1} variant="h5">
        Art,Comma
      </Typography>
    </Box>
  );
};

export default DrawerHeader;
