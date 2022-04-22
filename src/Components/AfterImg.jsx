import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
const FIRST_IMAGE = {
    imageUrl: 'https://resumegenius.com/wp-content/uploads/Majestic-Modern-Resume-Template-Violet-1.png'
};
const SECOND_IMAGE = {
    imageUrl: 'https://www.resumecoach.com/wp-content/plugins/cv-wp-lib-slider/src/img/templates/en/cf/montevideo.png'
};
const AfterImg = () => {
    return (
        <>
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
        </>
    );
};

export default AfterImg;