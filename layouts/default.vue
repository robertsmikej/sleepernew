<template>
    <div class="container">
        <nuxt/>
    </div>
</template>

<style>
:root {
    --site-white: #FFF;
    --dark-yellow: #fec303;
    --lightest-grey: #f2f2f2;
    --teal: #139487;
    --cyan: #1dbad3;
    --aqua: #0ED7F4;
    --blue-grey: #607C8a;
    --blue: #009CD6;
    --light-blue: #F1F5F6;
    --dark-blue: #36485f;
    --dark-grey: #2B373C;
    --lime-green: #98C93C;
    --light-red: #CF2255;
    --deep-red: #901D00;
    --light-orange: #FA9E0D;
    --logo-orange: #F0512B;
    --powder-blue: #BCF2FC;
    --turkish-blue: #50A3B1;
    --default-font: 'Work Sans', 'Helvetica Neue', Arial, sans-serif;
    --text-color: #2B373C;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
body, html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 16px;
}
body * {
    box-sizing: border-box;
}
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    line-height: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: var(--dark-blue);
    background-color: var(--light-orange);
    background-color: var(--dark-blue);
}
main {
    width: 100%;
    height: 100%;
    background-color: #FFF;
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    flex-wrap: wrap;
    opacity: 1; 
}
.containerShow {
    opacity: 0;
}
h1 {
    font-size: 1.6em;
    line-height: 1em;
    font-weight: 400;
    margin: 10px 0 0;
    text-align: center;
    width: 100%;
}
h2 {
    font-size: 1.4em;
    line-height: 1em;
    font-weight: 500;
    margin: 10px 0 0;
    width: 100%;
}
h3 {
    font-size: 1.2em;
    line-height: 1.2em;
    font-weight: 400;
    margin: 4px auto 6px;
    width: 100%;
}
h4 {
    font-size: 1.1em;
    line-height: 1.2em;
    font-weight: 400;
    margin: 10px auto 0;
    width: 100%;
}
h5 {
    font-size: 1em;
    line-height: 1.2em;
    font-weight: 400;
    margin: 10px auto 0;
}
h5 {
    font-size: 1em;
    line-height: 1.2em;
    font-weight: 300;
    margin: 10px auto 0;
}
p {
    font-size: 1em;
    line-height: 1.3em;
    font-weight: 300;
    margin: 14px 0 0;
}
ul, li {
    font-size: 1.1em;
    line-height: 1.4em;
    font-weight: 500;
}
a {
    color: var(--dark-grey);
    font-size: 1em;
    line-height: 1em;
    font-weight: 400;
}
</style>
