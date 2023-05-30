import { Button } from "@chakra-ui/react";

function CustomButton({onClick, disabled, children}) {
    return (
        <Button isDisabled={disabled} colorScheme="teal" onClick={onClick}>
            {children}
        </Button>
    );
}

export default CustomButton;

