import { useState } from "react";
import { Button, Form, InputGroup, Stack } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { MicroPhoneIcon, MicroPhoneStopIcon, TrashIcon } from '@/assets/icons';
import { AMAZON_LINK, FLIPKART_LINK, GOOGLE_LINK, MYNTRA_LINK } from "@/utils/constants";

const VoiceEcommerce = () => {
    const [listening, setListening] = useState(false);
    const [text, setText] = useState('');
    const recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
        setListening(true);
    };

    recognition.onend = () => {
        setListening(false);
    };

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        setText(result);
    };

    const startListening = () => {
        recognition.start();
    };

    const stopListening = () => {
        recognition.stop();
    };

    const handleSearch = (type) => {
        const newText = text.replace(/\s/g, "+");

        switch (type) {
            case 1:
                window.open(GOOGLE_LINK + newText, 'blank');
                break;
            case 2:
                window.open(FLIPKART_LINK + newText, 'blank');
                break;
            case 3:
                window.open(AMAZON_LINK + newText, 'blank');
                break;
            case 4:
                window.open(MYNTRA_LINK + newText, 'blank');
                break;

            default:
                break;
        }

    }

    return (
        <Form>
            <h4>Your Voice Search on Google or Any Ecommerce App</h4>
            <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">

                <InputGroup>
                    <Form.Control
                        placeholder='Type or Speak for Search..'
                        aria-label="Search box"
                        aria-describedby="Search-box"
                        value={text}
                        onChange={(e) => setText(e.target.value)}

                    />
                    <ToggleButton
                        className="pl-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={listening}
                        value="1"
                        title='Dictate your words..'
                        onChange={listening ? stopListening : startListening}
                    >
                        {listening ? (
                            <MicroPhoneStopIcon sx={{ color: 'red' }} />
                        ) : (
                            <MicroPhoneIcon />
                        )}

                    </ToggleButton>
                    {text.length > 0 && (
                        <Button title="Clear" onClick={() => setText('')} variant="outline-warning"><TrashIcon /></Button>
                    )}
                </InputGroup>
            </Form.Group>
            <Stack className="flex-column flex-md-row d-md-flex gap-3">
                <Button onClick={() => handleSearch(1)} variant="outline-info">Google Search</Button>
                <Button onClick={() => handleSearch(2)} variant="outline-primary">Search on Flipkart</Button>
                <Button onClick={() => handleSearch(3)} variant="outline-primary">Search on Amazon</Button>
                <Button onClick={() => handleSearch(4)} variant="outline-primary">Search on Myntra</Button>
            </Stack>
        </Form>

    )
}

export default VoiceEcommerce
// https://www.google.com/search?q=what+is+love