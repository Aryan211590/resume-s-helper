import React from "react";

import Grid from "@material-ui/core/Grid";
import "react-image-gallery/styles/css/image-gallery.css";
import MyImageGallery from "./MyImageGallery";
const Demo = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <MyImageGallery />
                </Grid>
                <Grid container spacing={2} item xs={6} direction="column">
                    {/* <Grid item>
                        <div id="myPortal" />
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Demo