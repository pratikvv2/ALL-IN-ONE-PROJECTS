import { WhatsAppIcon } from "@/assets/icons"
import { WA_LINK } from "@/utils/constants";
import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"

const Home = () => {
    const [userNumber, setUserNumber] = useState('');

    const redirectToWhatsapp = () => {
        let num = userNumber;
        if (num.includes('+91 ') || num.includes('+91') || num.includes(' ')) {
            // Note: This specifically looks for the exact sequence of characters +91 in the input string and removes it.
            num = num.replace('+91', '').replace(/\s/g, "");

        }

        if (num.length !== 10) {
            alert('You must write/paste a valid whatsapp number');
            return;
        }
        window.open(WA_LINK + num, 'blank')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            redirectToWhatsapp();
        }
    }

    const handleWhatsappNumber = (e) => {
        const inputValue = e.target.value;
        // Note: The regular expression /[^0-9+\s]/g specifies a character class [^...] that matches any
        // character that is not (^) a digit (0-9), a plus sign (+), or a whitespace character (\s).
        const sanitizedValue = inputValue.replace(/[^0-9+\s]/g, '');
        setUserNumber(sanitizedValue);

    }

    return (
        <div>
            <h4 className="heading-text">Home</h4>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Enter User's number"
                    aria-label="Enter User's number"
                    aria-describedby="user-number"
                    value={userNumber}
                    onChange={handleWhatsappNumber}
                    onKeyPress={handleKeyPress}

                />
                <Button onClick={redirectToWhatsapp} variant="outline-success" id="button-addon2">
                    Chat <WhatsAppIcon />
                </Button>
            </InputGroup>


        </div>
    )
}

export default Home