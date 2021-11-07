/* global kakao */
import React, { useEffect } from 'react'

const KakaoMap = (searchWord) => {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(36.01508134061981, 129.3225570661101),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

        //markerPosition에 marker 설치
        const markerPosition = new kakao.maps.LatLng(36.01508134061981, 129.3225570661101);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);


        // if (searchWord !== undefined) {
        //     //검색창 구현
        //     const ps = new kakao.maps.services.Places();
        //     // 키워드로 장소를 검색합니다
        //     ps.keywordSearch('이태원 맛집', placesSearchCB);
        // }
        // // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        // function placesSearchCB(data, status, pagination) {
        //     if (status === kakao.maps.services.Status.OK) {

        //         // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        //         // LatLngBounds 객체에 좌표를 추가합니다
        //         const bounds = new kakao.maps.LatLngBounds();

        //         for (var i = 0; i < data.length; i++) {
        //             displayMarker(data[i]);
        //             bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        //         }

        //         // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        //         map.setBounds(bounds);
        //     }

        // }

        // // 지도에 마커를 표시하는 함수입니다
        // function displayMarker(place) {

        //     // 마커를 생성하고 지도에 표시합니다
        //     const marker = new kakao.maps.Marker({
        //         map: map,
        //         position: new kakao.maps.LatLng(place.y, place.x)
        //     });

        //     // // 마커에 클릭이벤트를 등록합니다
        //     // kakao.maps.event.addListener(marker, 'click', function () {
        //     //     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        //     //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        //     //     infowindow.open(map, marker);
        //     // });
        // }


    }, [])


    return (
        <div>
            <div id="map" style={{ width: "500px", height: "400px" }}></div>
        </div>
    )
}

export default KakaoMap;