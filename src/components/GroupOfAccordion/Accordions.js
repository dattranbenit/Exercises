import React from 'react';
import {Accordion} from "../../components/Accordion/Accordion";
import '../../assets/scss/index.scss'
import parse from 'html-react-parser'

const Accordions = (props) => {
    return (
        <div className="accordion">
            <Accordion open={0}>
                {props.data.map((part) => {
                    return (
                        <Accordion.Item>
                            <Accordion.Header>{part["title"]}</Accordion.Header>
                            <Accordion.Body>
                                {parse(part["content"])}
                            </Accordion.Body>
                        </Accordion.Item>)
                })}
            </Accordion>
        </div>
    );
}

export default Accordions;
