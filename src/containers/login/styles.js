import styled from "styled-components";
import FundoLogo from "../../assets/imgfundo.svg";
import FundoLogin from "../../assets/fundologin.svg";

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;


`
export const LeftContainer = styled.div`
background:url('${FundoLogo}');
background-size: cover;
background-position:center;
height: 100%;
width: 100%;
max-width: 50%;
display: flex;
justify-content: center;
align-items: center;

img{
    width:80% ;
  
}

`
export const RightContainer = styled.div`
background: url('${FundoLogin}');
background-color: black;
background-size: cover;
background-position:center;
height: 100%;
width: 100%;
max-width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p{
    color:#fff;
    font-size: 18px;
    font-weight: 800;
    a{
        text-decoration:underline;
        color:rgba(151, 88, 166, 1) ;
        
    }
}

`
export const Title = styled.h2`
font-size:40px ;
font-weight:400 ;
line-height:40px ;
text-align: center;
color:rgba(255, 255, 255, 1);
span{
color:rgba(151, 88, 166, 1);
font-family: "Road Rage", sans-serif;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
gap:20px;
padding:20px;
width: 100%;
max-width:400px;

`
export const InputContainer = styled.div`
display:flex;
flex-direction:column;
gap:5px;
width:100%;
label{
    font-size:18px;
    font-weight: 600;
    color:#ffff;

}
input{
    width:100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
    cursor: pointer;
    background: rgba(190,200,200,0.35057773109243695) ;

    }


`


