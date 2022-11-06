import React from "react";
function StepsEntry(props) {
    const dir = props.direction;
    const classTag = dir + " card border-0";
    const aosTag = "fade-up-" + dir;
    return (
        <div class={classTag} data-aos={aosTag}>
            <div class="card-body">
                <h3>
                    <img class="social-logo" src={props.img} alt="" />
                    {props.time}
                </h3>
                {props.para}
            </div>
        </div>
    );
}
export default StepsEntry;
