import React from 'react';
import '../../assets/scss/index.scss'
import Tabs from "../../components/GroupOfTabs/Tabs";
import Accordions from "../../components/GroupOfAccordion/Accordions";
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
const data = require('../../data.json')

const ExerciseTwo = () => {
    return (
        <div>
            <Tabs
                data = {data}
            />
            <Accordions
                data = {data}
            />
            <div className="button__container">
                <Link to="/">
                    <Button color="info" className="button">Back</Button>
                </Link>
            </div>
        </div>
    );
}

export default ExerciseTwo;
