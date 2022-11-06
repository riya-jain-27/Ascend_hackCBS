import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Steps.css";
import info from "./Info";
import StepsEntry from "./StepsEntry";
function createEntry(entry) {
    return (
        <StepsEntry
            key={entry.id}
            time={entry.time}
            para={entry.para}
            img={entry.img}
            direction={entry.direction}
        />
    );
}
function Steps() {
    AOS.init({});
    return (
        <section class="not-coloured timeline" id="about">
            {info.map(createEntry)}
        </section>
    );
}
export default Steps;
