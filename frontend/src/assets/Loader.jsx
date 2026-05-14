import React from 'react'

const Loader = ({ type = "primary", width="32", height="24" }) => {

    if (type === "button") {
        return (
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width={width} height={height} style={{ shapeRendering: "auto", display: "block", background: "transparent" }}><g><circle fill="#004a7c" r="24" cy="50" cx="84">
                <animate begin="0s" keySplines="0 0.5 0.5 1" values="10;0" keyTimes="0;1" calcMode="spline" dur="0.5s" repeatCount="indefinite" attributeName="r"></animate>
                <animate begin="0s" values="#004a7c;#75777c;#894600;#008b8b;#004a7c" keyTimes="0;0.25;0.5;0.75;1" calcMode="discrete" dur="2s" repeatCount="indefinite" attributeName="fill"></animate>
            </circle><circle fill="#004a7c" r="24" cy="50" cx="16">
                    <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2s" repeatCount="indefinite" attributeName="r"></animate>
                    <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2s" repeatCount="indefinite" attributeName="cx"></animate>
                </circle><circle fill="#008b8b" r="24" cy="50" cx="50">
                    <animate begin="-0.5s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2s" repeatCount="indefinite" attributeName="r"></animate>
                    <animate begin="-0.5s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2s" repeatCount="indefinite" attributeName="cx"></animate>
                </circle><circle fill="#894600" r="24" cy="50" cx="84">
                    <animate begin="-1s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2s" repeatCount="indefinite" attributeName="r"></animate>
                    <animate begin="-1s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2s" repeatCount="indefinite" attributeName="cx"></animate>
                </circle><circle fill="#75777c" r="24" cy="50" cx="16">
                    <animate begin="-1.5s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2s" repeatCount="indefinite" attributeName="r"></animate>
                    <animate begin="-1.5s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="2s" repeatCount="indefinite" attributeName="cx"></animate>
                </circle><g></g></g></svg>
        )
    }

    return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width={width} height={height} style={{ shapeRendering: "auto", display: "block", background: "transparent" }}><g><g transform="translate(50,50)">
            <g transform="scale(0.7)">
                <circle fill="#ffffff" r="50" cy="0" cx="0"></circle>
                <circle fill="#004a7c" r="15" cy="-28" cx="0">
                    <animateTransform values="0 0 0;360 0 0" keyTimes="0;1" repeatCount="indefinite" dur="1s" type="rotate" attributeName="transform"></animateTransform>
                </circle>
            </g>
        </g><g></g></g></svg>
    )
}

export default Loader