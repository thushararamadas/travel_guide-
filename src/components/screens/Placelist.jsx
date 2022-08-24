import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./includes/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

function Placelist() {
    const [List, setList] = useState([]);
    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/places/")
            .then((response) => {
                console.log(response);
                setList(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const renderItems = () => {
        return List.map((place) => (
            <PlaceList key={place.id}>
                <PlaceLink to={`/place/${place.id}`}>
                    <ImageContainer>
                        <Image src={place.image} />
                    </ImageContainer>
                    <Name>{place.name}</Name>
                    <Location>
                        <Icon>
                            <IconImg
                                src={
                                    require("../../assets/images/place.svg")
                                        .default
                                }
                                alt="Icon"
                            />
                        </Icon>
                        <LocationName>{place.location}</LocationName>
                    </Location>
                </PlaceLink>
            </PlaceList>
        ));
    };
    return (
        <>
            <Helmet>
                <title>Places | Travel Guide</title>
            </Helmet>
            <Container>
                <Header />
                <TopContainer>
                    <Heading>Welcome</Heading>
                    <SubHeading>Explore The World Around You</SubHeading>
                </TopContainer>
                <Places>{renderItems()}</Places>
            </Container>
        </>
    );
}
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const TopContainer = styled.div``;
const Heading = styled.h1`
    margin-bottom: 15px;
`;
const SubHeading = styled.h3`
    color: #e4e4e4;
    font-weight: 600;
    margin-bottom: 20px;
`;
const Places = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const PlaceList = styled.li`
    width: 23%;
    margin-bottom: 20px;
`;
const PlaceLink = styled(Link)``;
const ImageContainer = styled.div`
    width: 100%;
    margin-bottom: 8px;
`;
const Image = styled.img`
    display: block;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;
const Name = styled.h4`
    font-size: 20px;
    margin-bottom: 10px;
`;
const Location = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;
const Icon = styled.div`
    width: 15px;
`;
const IconImg = styled.img`
    display: block;
    width: 100%;
`;
const LocationName = styled.h3`
    font-size: 15px;
    font-weight: 500;
    color: #888;
    width: 92%;
`;

export default Placelist;
