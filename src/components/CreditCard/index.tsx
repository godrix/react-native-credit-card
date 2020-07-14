import React, { useRef, useEffect } from 'react';
import { Text } from 'react-native';
import CardFlip from 'react-native-card-flip';

import assets from './assets';
import {
  Card, SideA, SideB, Top, Chip, ChipImage, Flag, CardNumber, CardNumberLabel, CardNumberValue, InfoCard, Name,
  Namelabel,
  NameValue,
  Expires,
  ExpiresLabel,
  ExpiresValue,
  MagneticLine,
  SecurityCode,
  SecurityCodeView,
  Signature,
  SecurityCodeValue,
  SecurityCodeLabel
} from './styles';

interface CreditCardProps{
  data:{
    cardNumber:string;
    cardNumberPlaceHolder?:string;
    cardNumberLabel?:string;
    name:string;
    nameLabel?:string;
    expiresIn:string;
    expiresInLabel?:string;
    securityCode:string;
    securityCodeLabel?:string;
  }
}



const CreditCard: React.FC<CreditCardProps> = ({data}) => {
  const card = useRef<CardFlip>(null);
  
  useEffect(()=>{
      if(data.expiresIn.length === 5){
        card.current?.flip()
      }
    },[data.expiresIn]);

  useEffect(()=>{
      if(data.securityCode.length === 3){
        card.current?.flip()
      }
    },[data.securityCode]);


  return (
    <Card ref={card}>
      <SideA onPress={() => card.current?.flip()} >
        <Top>
          <Chip>
          <ChipImage source={assets.chip}/>
          </Chip>
          <Flag></Flag>
        </Top>
        <CardNumber>
  <CardNumberLabel>{data?.cardNumberLabel || 'card number'}</CardNumberLabel>
          <CardNumberValue>{data?.cardNumber || ''}</CardNumberValue>
        </CardNumber>
        <InfoCard>
          <Name>
            <Namelabel>
            {data?.nameLabel || 'cardhold name'}
          </Namelabel>
            <NameValue>
            {data?.name || ''}
          </NameValue>
          </Name>
          <Expires>
            <ExpiresLabel>
            {data?.expiresInLabel || 'expires'}
          </ExpiresLabel>
            <ExpiresValue>
              {data?.expiresIn || ''}
          </ExpiresValue>
          </Expires>
        </InfoCard>
      </SideA>
      <SideB onPress={() => card.current?.flip()} >
        <MagneticLine/>
        <SecurityCode>
        <SecurityCodeView>
  <Signature>{data?.name}</Signature>
  <SecurityCodeValue>{data?.securityCode || '000'}</SecurityCodeValue>
        </SecurityCodeView>
        <SecurityCodeLabel>
        {data?.securityCodeLabel || 'security code'}
          </SecurityCodeLabel>
        </SecurityCode>
      </SideB>
    </Card>
  );
}

export default CreditCard;