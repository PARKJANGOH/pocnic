/*global kakao*/ 
import React, { useState, useEffect } from 'react';

const KakaoMapSearch = () => {
  const [myAddress, setMyAddress] = useState('하하하');
    const { kakao } = window;
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        //위도, 경도로 변환 및 마커표시
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(myAddress, function (result, status) {
            
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                map.setCenter(coords);
            }
        });

    }, [/*표시할 주소 변수*/]);
    return (
        <div id='map' style={{
            width: '100%',
            height: '300px'
      }}>
        <div>
          {myAddress}
        </div>
        </div>
    );
}

export default KakaoMapSearch;