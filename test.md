@media all and (min-width: 768px) {
.header-wrap {
display: none;
}

.desktop-nav {
display: flex;
align-items: center;
justify-content: center;
margin-top: 38px;
}

.desktop-nav ul {
list-style: none;
display: flex;
gap: 30px;
}

.desktop-nav ul > li a {
font-family: "Poppins", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #1a2236;
text-decoration: none;
}

.portfolio-wrap {
display: grid;
grid-template-areas: "header header image image";
}

.portfolio-header {
padding: 160px;
grid-area: header;
margin: 0;
}

.portfolio-header h1 {
font-family: "Playfair Display", serif;
font-style: normal;
font-weight: 400;
font-size: 600px;
line-height: 100%;
color: #1a2236;
}

.portfolio-header p {
font-family: "Poppins", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: -0.01em;
color: #1a2236;
}

.start-btn button {
padding: 20px 60px;
font-family: "Poppins";
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 27px;
text-align: center;
color: #fff;
background: #1a2236;
}

.image-div {
grid-area: image;
}

.point-img {
background-image: url("image/image_dots.png");
background-repeat: no-repeat;
background-size: contain;
width: 175px;
height: 175px;
}

.main-background-img {
background-image: url("image/image-geometry_1.svg");
background-repeat: no-repeat;
background-size: 100% 100%;
width: 702px;
height: 738px;
}
}
