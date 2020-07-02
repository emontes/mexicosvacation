import React from 'react'
import styled from 'styled-components'
import InsertaScript from '../InsertaScript'
import Title from '../Title'

const liga = "//tp.media/content?0=0&1=10&promo_id=4285&shmarker=182367&campaign_id=101&search_host=hotels.mexicosvacation.com%2Fhotels&locale=es&currency=usd&draggable=true&disable_zoom=false&show_logo=false&scrollwheel=false&color=%2307AF61&contrast_color=%23ffffff&width=800&height=500&zoom=4&radius=46&stars=0%2C1%2C2%2C3%2C4%2C5&price_from=&price_to=&lat=22.775588&lng=-102.572179"
const liga2 = "//www.travelpayouts.com/chansey/iframe.js?v=1&marker=182367&host=hotels.mexicosvacation.com%2Fhotels&locale=en_us&currency=usd&nobooking=&powered_by=true&hotel_id=329923"
const Map = () => {
    return (
        <MapWrapper>
          <Title title="Find your Hotel" subtitle="in the map" />
          <div className="map">
            <InsertaScript liga={liga} noAsync={true} />
            <InsertaScript liga={liga2} />
          </div>
        </MapWrapper>
    )
}




export default Map

const MapWrapper = styled.section`
display: none;
padding: 4rem 0;
background: var(--mainGrey);
@media screen and (min-width: 992px) {
    display: unset;
}
.map {
    width: 800px;
    margin: auto;
    border: 1px solid var(--mainBlack);
}
`

