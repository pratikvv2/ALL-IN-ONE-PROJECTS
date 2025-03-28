import QRCode from 'qrcode.react';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const QrApp = () => {
    const [qrCodeText, setQrCodeText] = useState('');
    const [text, setText] = useState('');

    const handleGenerateQR = () => {
        setQrCodeText(text);
    }

    const deleteQR = () => {
        setText('');
        setQrCodeText('')
    }

    return (
        <>
            <Form>
                <h4>Your QR Code Generator App</h4>
                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">

                    <InputGroup>
                        <Form.Control
                            placeholder='Type or Paste any link to generate QR'
                            required
                            aria-label="QR box"
                            aria-describedby="Search-box"
                            value={text}
                            onChange={(e) => setText(e.target.value)}

                        />
                    </InputGroup>
                    <div className="d-flex gap-3">
                        <Button variant="outline-primary" className='my-3' onClick={handleGenerateQR}>
                            Generate QR
                        </Button>
                        {qrCodeText.length > 0 && (
                            <Button variant="outline-danger" className='my-3' onClick={deleteQR}>
                                Delete
                            </Button>
                        )}
                    </div>

                    {qrCodeText.length > 0 && (
                        <div className="qrcode-image">
                            <p>Right Click on this QR & Download</p>
                            <QRCode size={256} value={qrCodeText} />
                        </div>
                    )}

                </Form.Group>
            </Form>
        </>
    )
}

export default QrApp