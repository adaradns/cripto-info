import React, { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index'
import { loadExchangeInfo } from '../../store/actions/exchangeinfo/exchangeinfo';
import CardInfoCripto from './CardInfoCripto';
import styled from "styled-components";
import NavBarApp from '../grid/NavBarApp';
import Icon from "react-crypto-icons";
import Grid from 'styled-components-grid';

const icons = require('base64-cryptocurrency-icons');
console.log(icons["BTC"]);

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas: 
    "nav nav nav nav"
    "content content content content";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    
  }
  color: white;
`;


const ExchangeListInfo = () => {
  const exchangeInfo = useSelector((state: RootState) => state.exchangeInfo.exchangeinfo);
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(loadExchangeInfo());

  }, []);
  
  return (
    <Container>
     <NavBarApp /> 
      <Grid>
      {exchangeInfo != null   ? 
        exchangeInfo.data.map((exchange, index) => {
          console.log("exchange",exchange)
          return  <Grid.Unit size={{lg: 1 / 5}} style={{padding: '10px'}}>

                    <CardInfoCripto 
                      key={index}
                      title={exchange.slug}
                      symbol={exchange.symbol}
                      price={exchange.metrics.market_data.price_usd}
                      image = {icons[exchange.symbol].icon != undefined ? icons[exchange.symbol].icon : null}
                      
                    />
                  </Grid.Unit>            
        }) 
        : null}
      </Grid>
    </Container>
  );

}

export default ExchangeListInfo;
