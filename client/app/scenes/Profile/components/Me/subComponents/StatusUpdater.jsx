import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class StatusUpdater extends React.Component {
    render () {
        return (
            <Form inline>
                <Input type="text" name="updatetext" id="updatestatus" size="lg" placeholder="Update your status..." />
                <Button size="lg" id="submitstatus">Update</Button>
            </Form>
        );
    }
}