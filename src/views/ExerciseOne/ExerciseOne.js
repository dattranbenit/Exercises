import '../../assets/scss/index.scss'
import React from 'react'
import {
    Container,
    Button
} from "reactstrap";
import SmallCard from "../../components/SmallCard/SmallCard";
import { Link } from 'react-router-dom';

const ExerciseOne = () => {
    return ( 
        <div className="body" >
            <div className="banner" >
                <div className="banner__title" >
                    <div className="banner__subtitle">
                        Hello Developer 
                    </div> 
                    <p className="banner__content"> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form </p>
                </div>
            </div>

            <div> 
                <Container className="container" >
                    <SmallCard content=" Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. " />

                    <SmallCard content=" Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. " />

                    <SmallCard content=" Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. " />
                </Container> 
            </div>
            <div className="button__container">
                <Link to="/">
                    <Button color="info" className="button">Back</Button>
                </Link>
            </div>
        </div>
    );
}

export default ExerciseOne;