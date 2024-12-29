import { Box } from "@mui/material";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}
interface mapProps {
  address: string;
  name: string;
}
const KaKaoMap = ({ address, name }: mapProps) => {
  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (result: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        const container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(result[0].y, result[0].x), // 지도 중심 좌표
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(result[0].y, result[0].x),
          map: map,
        });

        // 인포윈도우 생성
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `   <div 
          style="padding:10px; 
                 width:180px; 
                 height:40px; 
                 text-align:center; 
                 display:flex; 
                 align-items:center; 
                 justify-content:center; 
                 margin:0 auto;
                 font-size:17px; 
                 font-weight:bold;">${name}</div>`, // 표시할 내용
        });

        infowindow.open(map, marker); // 인포윈도우 열기

        // 지도 타입 컨트롤 추가
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );
      } else {
        console.error("주소 검색 실패:", status);
      }
    });
  }, [name]);

  return (
    <Box mt={3}>
      <div id="map" style={{ width: "100%", height: "450px" }} />
    </Box>
  );
};

export default KaKaoMap;
