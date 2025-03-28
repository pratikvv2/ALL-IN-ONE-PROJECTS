import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import { TEXTS } from './TEXTS';
import { Button, Form } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { MicroPhoneIcon, MicroPhoneStopIcon } from '@/assets/icons';


const TextReader = () => {
    // 
    // const [transcript, setTranscript] = useState('');
    const [text, setText] = useState('');
    const [speaking, setSpeaking] = useState({
        id: 0,
        status: false,
    });
    // const [checked, setChecked] = useState(false);
    const [listening, setListening] = useState(false);
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
    // 


    const handleRead = (data) => {
        const utterance = new SpeechSynthesisUtterance(data.info);
        speechSynthesis.speak(utterance);
        setSpeaking({
            id: data.id,
            status: true,
        });
        utterance.onend = () => setSpeaking(false);
    }

    const stopReading = () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            setSpeaking({
                id: 0,
                status: false,
            });
        }
    }

    const handleReadTextArea = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
        setSpeaking({
            id: 'text',
            status: true,
        });
        utterance.onend = () => setSpeaking(false);
    }

    return (
        <div className='text-reader-container'>
            <h3 className='my-3'>Read the passages</h3>
            <Accordion defaultActiveKey="1">
                {TEXTS.map(item => (
                    <Accordion.Item eventKey={`${item.id}`} key={item.id}>
                        <Accordion.Header>{item.name}</Accordion.Header>
                        <Accordion.Body>
                            <p>{item.info}</p>
                            <Button onClick={() => handleRead(item)} variant="primary">Read</Button>
                            {(speaking.id === item.id) && (
                                <Button className='mx-3' onClick={() => stopReading()} variant="danger">Stop</Button>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <div className="mt-3">
                <h3>Create your own text to read.</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter your text &nbsp;&nbsp;
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
                        </Form.Label>
                        <Form.Control
                            placeholder='Start writing or Click the mic icon & start dictating..'
                            as="textarea" rows={3} value={text}
                            onChange={(e) => setText(e.target.value)}

                        />
                    </Form.Group>
                    <Button onClick={() => handleReadTextArea()} variant="primary">Read</Button>
                    {text.length > 0 && (
                        <Button className='mx-3' onClick={() => setText('')} variant="warning">Clear</Button>
                    )}
                    {(speaking.id === 'text') && (
                        <Button className='mx-3' onClick={() => stopReading()} variant="danger">Stop</Button>
                    )}
                </Form>

            </div>
        </div>
    );
}

export default TextReader