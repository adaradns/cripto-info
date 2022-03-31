import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardInfo 
  } from "../grid/Card";


const CardInfoCripto = (props) => {
    
    return(
        <CardWrapper>
            <CardHeader><CardHeading>{props.title.charAt(0).toUpperCase()+ props.title.slice(1)} ({props.symbol})</CardHeading></CardHeader>
            <CardBody>
                <CardInfo>{props.price} (USD)</CardInfo>
                <img src={props.image} alt={props.symbol}/>
            </CardBody>
        </CardWrapper>
    );
}

export default CardInfoCripto;