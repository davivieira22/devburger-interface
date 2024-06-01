import PropTypes from 'prop-types'


import { ContainerButton } from "./styles";

export const Button = ({children}) => { 
 

return <ContainerButton>{children}</ContainerButton>;
}


Button.propTypes={
    children:PropTypes.string
}