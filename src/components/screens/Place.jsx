import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "./includes/Header";
import Helmet from "react-helmet";

function Place() {
    const { id } = useParams();
    const [Places, setPlaces] = useState([]);
    const [about, setAbout] = useState([]);
    useEffect(() => {
        axios
            .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
            .then((response) => {
                console.log(response.data.data);
                setPlaces(response.data.data);
                setAbout(response.data.data.gallery);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <>
            <Helmet>
                <title>{Places.name}</title>
            </Helmet>
            <Header />
            <Container>
                <Heading>{Places.name}</Heading>
                <InfoContainer>
                    <PlaceCategory>{Places.category_name}</PlaceCategory>
                    <IconContainer>
                        <Icon
                            src={
                                require("../../assets/images/place.svg").default
                            }
                            alt="Icon"
                        />
                    </IconContainer>
                    <PlaceName>{Places.name}</PlaceName>
                </InfoContainer>
                <LargeImage>
                    <Left>
                        <Image src={Places.image} />
                    </Left>
                    <Right>
                        {about.map((item) => (
                            <Gallery key={item.id}>
                                <GalleryItem src={item.image} alt="Image" />
                            </Gallery>
                        ))}
                    </Right>
                </LargeImage>
                <Details>Place Details</Details>
                <Description>{Places.description}</Description>
            </Container>
        </>
    );
}
const Container = styled.div`
    padding: 0 100px;
    width: 90%;
    margin: 0 auto;
`;
const Heading = styled.h1`
    margin-bottom: 10px;
    font-size: 40px;
`;
const InfoContainer = styled.div`
    display: flex;
    width: 30%;
    align-items: center;
`;
const PlaceCategory = styled.h5`
    border: 1px solid #888;
    width: 90px;
    text-align: center;
    font-size: 15px;
    color: #888;
    font-weight: 500;
    border-radius: 13px;
    padding: 5px 0;
    margin-right: 10px;
`;
const IconContainer = styled.div`
    width: 13px;
    margin-right: 5px;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const PlaceName = styled.h3`
    font-weight: 700;
    font-size: 15px;
    color: #888;
`;
const LargeImage = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 60%;
    margin: 20px 5px;
`;
const Image = styled.img`
    display: block;
    width: 100%;
    border-top-left-radius: 15px;
`;
const Right = styled.ul`
    width: 63%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 5px;
`;
const Gallery = styled.li`
    width: 45%;
    margin: 10px;
`;
const GalleryItem = styled.img`
    display: block;
    width: 100%;
    &:nth-child(3),
    &:nth-child(4) {
        margin-bottom: 0;
    }
`;
const Details = styled.h2`
    font-size: 25px;
    margin-bottom: 20px;
    margin-top: 20px;
`;
const Description = styled.p`
    font-size: 17px;
    color: #808080;
    font-weight: 400;
`;

export default Place;
