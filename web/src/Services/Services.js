import React from 'react';
import "./Services.css";
import styled, { keyframes } from 'styled-components';
import { slideInRight, slideInLeft } from 'react-animations';

const SlideLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeftDiv = styled.div`
  animation: 3s ${SlideLeftAnimation};
`;

const SlideRightAnimation = keyframes`${slideInRight}`;
const SlideInRightDiv = styled.div`
  animation: 3s ${SlideRightAnimation};
`;

export default function Services() {
    return (
        <div className="Services-container">
            <div className="Services-header">
                <div className="Header-head">
                    <span>“Put right candidate to right place”</span>
                    <SlideInLeftDiv><h1>Great Results Through Strategic Partnership and Knowledge Sharing.</h1></SlideInLeftDiv>
                    <div className="span2">
                        <span>With an expansive talent network of Technology and Finance & Accounting professionals,
                            our great people are empowering businesses to achieve great results.</span>
                    </div>
                </div>
            </div>

            <div className="Services-body">
                <div className="Body-head">
                    <h1>Acquire the Right Technology, Finance, Insurance & Banking Talent.</h1>
                    <span>As a staffing agency, we serve our clients, big and small, with in-demand talent in the areas of Technology, Banking or Insurance and Finance & Accounting, spanning a variety of industries.</span>
                </div>

                <div className="Body-item">
                    <div className="flex-1">
                        <div className="Item-img">Image-1</div>
                    </div>
                    <div className="flex-2">
                        <div className="Item-data">Item-1</div>
                    </div>
                </div>

                <div className="Body-item">
                    <div className="flex-1">
                        <div className="Item-img">Image-2</div>
                    </div>
                    <div className="flex-2">
                        <div className="Item-data">Item-2</div>
                    </div>
                </div>

                <div className="Body-item">
                    <div className="flex-1">
                        <div className="Item-img">Image-3</div>
                    </div>
                    <div className="flex-2">
                        <div className="Item-data">Item-3</div>
                    </div>
                </div>

                <div className="Body-item">
                    <div className="flex-1">
                        <div className="Item-img">Image-4</div>
                    </div>
                    <div className="flex-2">
                        <div className="Item-data">Item-4</div>
                    </div>
                </div>


            </div>
        </div>
    )
}
