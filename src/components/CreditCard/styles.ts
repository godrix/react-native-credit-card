import styled from 'styled-components/native';
import CardFlip from 'react-native-card-flip';
import {Dimensions} from 'react-native';

export const Card = styled(CardFlip)`
 width: 100%;
 height: 50%;
 padding:15px;
 margin-bottom:-150px;
`;

export const SideA = styled.TouchableOpacity.attrs({
  activeOpacity:1
})`
  width: 90%;
  height: 50%;
  margin:0 0 0 5%;
  padding: 20px 30px;
  background: #9845C4;
  border-radius: 5px;
  justify-content:space-between;
`;

export const Top = styled.View`
flex-direction:row;
justify-content:space-between;
`;

export const Chip = styled.View`
width:60px;
height:40px;
border-radius:5px;
opacity:0.6;
background:#FFFFFF;
`;

export const ChipImage = styled.Image`
width:60px;
height:40px;
`;
export const Flag = styled.View`
width:80px;
height:40px;
background:transparent;
`;

export const CardNumber = styled.View`

`;

export const CardNumberLabel = styled.Text`
opacity:0.6;
color:#FFFFFF;
`;

export const CardNumberValue = styled.Text`
color:#FFFFFF;
font-family: Courier;
font-size:25px;
`;

export const InfoCard = styled.View`
flex-direction:row;
justify-content:space-between;
`;
export const Name = styled.View`
 color:#FFFFFF;
`;
    
export const Namelabel = styled.Text`
color:#FFFFFF;
opacity:0.6;
`;
    
export const NameValue = styled.Text.attrs({
  numberOfLines:1
})`
color:#FFFFFF;
font-size:18px;
text-transform:uppercase;
font-family: Courier;
`;
  
export const Expires = styled.View``;
    
export const ExpiresLabel = styled.Text`
color:#FFFFFF;

opacity:0.6;
`;
    
export const ExpiresValue = styled.Text`
color:#FFFFFF;
font-size:18px;
font-family: Courier;
`;

// Side B styles
export const SideB = styled.TouchableOpacity.attrs({
  activeOpacity:1
})`
  width: 90%;
  height: 50%;
  margin:0 0 0 5%;
  /* padding: 20px 30px; */
  background: #9845C4;
  border-radius: 5px;
  justify-content:space-around;
`;

export const MagneticLine = styled.View`
  width:100%;
  height:50px;
  background:#000;
 
`;
  export const SecurityCode = styled.View`
  width:80%;
  height:40px;
  margin: 0 auto;
  
  `;
  export const SecurityCodeView = styled.View`
    background:#FFF;
    flex-direction:row;
  `;
  export const Signature = styled.Text`
    width:80%;
    font-family: Bradley Hand;
    font-size:21px;
    text-align:center;
    
  `;

  export const SecurityCodeValue = styled.Text`
  background:#CCC;
  font-size:26px;
    text-align:center;
  font-weight:400;
  font-family: Courier;
  width:20%;
  `;
  export const SecurityCodeLabel = styled.Text`
  color:#FFFFFF;
  opacity:0.7;
  align-self: flex-end;
  `;