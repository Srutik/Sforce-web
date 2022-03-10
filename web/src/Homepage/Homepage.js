import React, { Fragment } from 'react';
import "./Homepage.css";
import Footer from '../Footer/Footer';
import styled, { keyframes } from 'styled-components';
import { bounce, slideInRight, slideInLeft } from 'react-animations';
import SearchIcon from "@material-ui/icons/Search";


const bounceAnimation = keyframes`${bounce}`;
const BouncyDiv = styled.div`
  animation: 3s ${bounceAnimation};
`;

const SlideLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeftDiv = styled.div`
  animation: 3s ${SlideLeftAnimation};
`;

const SlideRightAnimation = keyframes`${slideInRight}`;
const SlideInRightDiv = styled.div`
  animation: 3s ${SlideRightAnimation};
`;

export default function Homepage() {

    return (
        <Fragment>
        <div className="Home-container">
            <div className="tag-line">
                <SlideInLeftDiv><h1>" We love what we do, We love who we serve. "</h1></SlideInLeftDiv>
            </div>
            <div className="tag-details">
                <SlideInRightDiv><span> --- We are strategic partners uniting professionals to achieve success through lasting personal relationships. --- </span></SlideInRightDiv>
            </div>

            <BouncyDiv>
                <div className="find-container">
                    <div className="search-head">
                        <span>Looking for a job ?</span>
                    </div>
                    <div className="search-panel">
                        <div className="text-1">
                            <input type="text" placeholder="Job title / keyword"></input>
                        </div>
                        <div className="text-2">
                            <input type="text" placeholder="City , State or ZIP "></input>
                        </div>
                        <div className="submit-search">
                            <button><SearchIcon />Search</button>
                        </div>
                    </div>
                </div>
            </BouncyDiv>
        </div>
        <Footer />
        </Fragment>
    )
}