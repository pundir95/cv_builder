import { Button } from "react-bootstrap";
import BuilderSpinner from "./BuilderSpinner";

const BuilderButton = ({ type, text, className, variant, isLoading,onClick , disabled, icon,children }) => {
  return (
    <Button type={type} variant={variant} className={className} onClick={onClick} disabled ={disabled} >
      {isLoading ? <BuilderSpinner /> : text} {icon} {children}
    </Button>
  );
};

export default BuilderButton;
