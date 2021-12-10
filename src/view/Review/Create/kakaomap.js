import React, { useEffect } from 'react';
import SearchMap from "./searchMap";

export default function KakaoMap(props) {
    console.log("props in KakaoMap are: ", props.search);
    useEffect(() => {
        SearchMap(props.search);
    }, [props.search]); // 마운트 될때 사용할수 있도록 useEffect 사용

    return (
        <div id='myMap' style={{
            width: '100%',
            height: '300px'
        }}></div>
    );
}