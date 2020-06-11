[1mdiff --git a/.gitignore b/.gitignore[m
[1mindex 4d29575..e9fb7f6 100644[m
[1m--- a/.gitignore[m
[1m+++ b/.gitignore[m
[36m@@ -10,6 +10,7 @@[m
 [m
 # production[m
 /build[m
[32m+[m[32m/.vscode[m
 [m
 # misc[m
 .DS_Store[m
[1mdiff --git a/README.md b/README.md[m
[1mindex 54ef094..7f58ddb 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -1,68 +1 @@[m
[31m-This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).[m
[31m-[m
[31m-## Available Scripts[m
[31m-[m
[31m-In the project directory, you can run:[m
[31m-[m
[31m-### `npm start`[m
[31m-[m
[31m-Runs the app in the development mode.<br />[m
[31m-Open [http://localhost:3000](http://localhost:3000) to view it in the browser.[m
[31m-[m
[31m-The page will reload if you make edits.<br />[m
[31m-You will also see any lint errors in the console.[m
[31m-[m
[31m-### `npm test`[m
[31m-[m
[31m-Launches the test runner in the interactive watch mode.<br />[m
[31m-See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.[m
[31m-[m
[31m-### `npm run build`[m
[31m-[m
[31m-Builds the app for production to the `build` folder.<br />[m
[31m-It correctly bundles React in production mode and optimizes the build for the best performance.[m
[31m-[m
[31m-The build is minified and the filenames include the hashes.<br />[m
[31m-Your app is ready to be deployed![m
[31m-[m
[31m-See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.[m
[31m-[m
[31m-### `npm run eject`[m
[31m-[m
[31m-**Note: this is a one-way operation. Once you `eject`, you can’t go back!**[m
[31m-[m
[31m-If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.[m
[31m-[m
[31m-Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.[m
[31m-[m
[31m-You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.[m
[31m-[m
[31m-## Learn More[m
[31m-[m
[31m-You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).[m
[31m-[m
[31m-To learn React, check out the [React documentation](https://reactjs.org/).[m
[31m-[m
[31m-### Code Splitting[m
[31m-[m
[31m-This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting[m
[31m-[m
[31m-### Analyzing the Bundle Size[m
[31m-[m
[31m-This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size[m
[31m-[m
[31m-### Making a Progressive Web App[m
[31m-[m
[31m-This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app[m
[31m-[m
[31m-### Advanced Configuration[m
[31m-[m
[31m-This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration[m
[31m-[m
[31m-### Deployment[m
[31m-[m
[31m-This section has moved here: https://facebook.github.io/create-react-app/docs/deployment[m
[31m-[m
[31m-### `npm run build` fails to minify[m
[31m-[m
[31m-This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify[m
[32m+[m[32mA simple React JS website that was created for my sisters wedding. Contains a date countdown, gift registry, guest information and RSVP system (soon).[m
\ No newline at end of file[m
[1mdiff --git a/public/0.jpg b/public/0.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..6c7cae3[m
Binary files /dev/null and b/public/0.jpg differ
[1mdiff --git a/public/coravin.jpg b/public/coravin.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..a571048[m
Binary files /dev/null and b/public/coravin.jpg differ
[1mdiff --git a/public/hudsonsbay.png b/public/hudsonsbay.png[m
[1mnew file mode 100644[m
[1mindex 0000000..2c1b631[m
Binary files /dev/null and b/public/hudsonsbay.png differ
[1mdiff --git a/public/swirl_left_small.png b/public/swirl_left_small.png[m
[1mnew file mode 100644[m
[1mindex 0000000..ba368e1[m
Binary files /dev/null and b/public/swirl_left_small.png differ
[1mdiff --git a/public/swirl_right_small.png b/public/swirl_right_small.png[m
[1mnew file mode 100644[m
[1mindex 0000000..bb2bfd9[m
Binary files /dev/null and b/public/swirl_right_small.png differ
[1mdiff --git a/public/yeti.jpg b/public/yeti.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..a3934c5[m
Binary files /dev/null and b/public/yeti.jpg differ
[1mdiff --git a/src/App.css b/src/App.css[m
[1mindex 1ce4d64..4659ad9 100644[m
[1m--- a/src/App.css[m
[1m+++ b/src/App.css[m
[36m@@ -1,3 +1,8 @@[m
[32m+[m[32m@font-face {[m
[32m+[m[32m   font-family: 'fancy-cursive';[m
[32m+[m[32m   src: local('fancy-cursive'), url(./fonts/fancy-cursive.ttf) format('truetype');[m
[32m+[m[32m}[m
[32m+[m
 .App {[m
   text-align: center;[m
 }[m
[36m@@ -12,23 +17,31 @@[m
   position: fixed;[m
   top:0;[m
   left:0;[m
[31m-  height:80px;[m
[32m+[m[32m  height:70px;[m
   width:100%;[m
[31m-  background-color: transparent;[m
   justify-content: center;[m
   align-items: center;[m
   border-bottom: 2px solid #fff;[m
[31m-  background-color: #fff;[m
[31m-}[m
[31m-[m
[31m-.nav-container {[m
[31m-[m
[32m+[m[32m  background: rgba(255, 255, 255, 1);[m
[32m+[m[32m  z-index: 999;[m
[32m+[m[32m  border-bottom: 3px solid #ebc6c6;[m
 }[m
[31m-[m
 .nav-tab {[m
   padding-left: 20px;[m
   padding-right: 20px;[m
 }[m
[32m+[m[32m.nav-tab a {[m
[32m+[m[32m  text-decoration: none !important;[m
[32m+[m[32m}[m
[32m+[m[32m.nav-tab-text {[m
[32m+[m[32m  border: 0;[m
[32m+[m[32m  color: black;[m
[32m+[m[32m  font-weight: 600;[m
[32m+[m[32m}[m
[32m+[m[32m.nav-tab-text:hover {[m
[32m+[m[32m  font-weight: 700;[m
[32m+[m[32m  color: #2d2e21;[m
[32m+[m[32m}[m
 [m
 [m
 /*  HOME[m
[36m@@ -41,20 +54,144 @@[m
   background-position: center;[m
   background-repeat: no-repeat;[m
   background-size: cover;[m
[31m-  height:80vh;[m
[32m+[m[32m  height:90vh;[m
[32m+[m[32m  top:0;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.home-backdrop-tint {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top:0;[m
[32m+[m[32m  left:0;[m
[32m+[m[32m  background: rgba(0, 0, 0, 0.4);[m[41m [m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 90vh;[m[41m   [m
[32m+[m[32m}[m
[32m+[m[32m.home-backdrop-text{[m
[32m+[m[32m  margin:0px;[m
[32m+[m[32m  padding:0px;[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 200px;[m
[32m+[m[32m  left: 70px;[m
[32m+[m[32m  text-align: left;[m
[32m+[m[32m}[m
[32m+[m[32m.home-backdrop-text p#tagline {[m
[32m+[m[32m  font-weight: 800;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m  font-size: 30px;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m}[m
[32m+[m[32m.home-backdrop-text p#names {[m
[32m+[m[32m  font-family: fancy-cursive;[m
[32m+[m[32m  font-size: 60px;[m
[32m+[m[32m  color:#fff;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m}[m
[32m+[m[32m.home-backdrop-text p#date {[m
[32m+[m[32m  font-size: 20px;[m
[32m+[m[32m  font-weight: 700;[m
[32m+[m[32m  color:#fff;[m
[32m+[m[32m}[m
[32m+[m[32m.home-backdrop-text p#names span {[m
[32m+[m[32m  color: #ebc6c6;[m
[32m+[m[32m}[m
[32m+[m[32m.home-backdrop-text p#date span#datetext {[m
[32m+[m[32m  margin: 10px;[m
 }[m
 [m
[32m+[m[32m@media (max-width: 830px) {[m
[32m+[m[32m  .home-backdrop-tint {[m
[32m+[m[32m    display:none;[m[41m   [m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m.home-backdrop-tint-sm {[m
[32m+[m[32m  display:none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (max-width: 829px) {[m
[32m+[m[32m  .home-backdrop-tint-sm {[m
[32m+[m[32m    display:block;[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    top:0;[m
[32m+[m[32m    left:0;[m
[32m+[m[32m    background: rgba(0, 0, 0, 0.4);[m[41m [m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    height: 100vh;[m[41m   [m
[32m+[m[32m  }[m
[32m+[m[32m  .home-backdrop {[m
[32m+[m[32m    background-image: url("/kdcover.jpg");[m
[32m+[m[32m    background-position: center;[m
[32m+[m[32m    background-repeat: no-repeat;[m
[32m+[m[32m    background-size: cover;[m
[32m+[m[32m    height:100vh;[m
[32m+[m[32m    top:0;[m
[32m+[m[32m  }[m
[32m+[m[32m  .home-backdrop-text{[m
[32m+[m[32m    margin:0px;[m
[32m+[m[32m    padding:0px;[m
[32m+[m[32m    position: absolute;[m
[32m+[m[32m    top: 120px;[m
[32m+[m[32m    left: 50px;[m
[32m+[m[32m    text-align: left;[m
[32m+[m[32m  }[m
[32m+[m[32m  .home-backdrop-text p#tagline {[m
[32m+[m[32m    font-weight: 800;[m
[32m+[m[32m    color: #fff;[m
[32m+[m[32m    font-size: 30px;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    line-height: 1;[m
[32m+[m[32m  }[m
[32m+[m[32m  .home-backdrop-text p#names {[m
[32m+[m[32m    font-family: fancy-cursive;[m
[32m+[m[32m    font-size: 40px;[m
[32m+[m[32m    color:#fff;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    margin-top:20px;[m
[32m+[m[32m  }[m[41m  [m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
 [m
 /* COUNTDOWN TIMER */[m
 [m
 .countdown {[m
[31m-  height: 300px;[m
[32m+[m[32m  height: 400px;[m
   background-color: #ebc6c6;[m
 }[m
[31m-[m
[32m+[m[32m.countdown-times {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction:  row;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  padding: 30px;[m
[32m+[m[32m}[m
[32m+[m[32m.countdown-times div {[m
[32m+[m[32m  margin: 0px 0px;[m
[32m+[m[32m  border: 1px solid #fff;[m
[32m+[m[32m  padding: 10px;[m
[32m+[m[32m  width: 160px;[m
[32m+[m[32m}[m
[32m+[m[32m.countdown-number {[m
[32m+[m[32m  font-size: 5vw;[m
[32m+[m[32m  font-weight: 700;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m  margin: 0px;[m
[32m+[m[32m}[m
[32m+[m[32m.countdown-label {[m
[32m+[m[32m  font-family: fancy-cursive;[m
[32m+[m[32m  font-size: 30px;[m
[32m+[m[32m  margin: 0px;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m}[m
[32m+[m[32m.countdown-subheading {[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m  font-size: 20px;[m
[32m+[m[32m}[m
 [m
 /* ABOUTIMG */[m
[31m-[m
[32m+[m[32m.about-img {[m
[32m+[m[32m  padding: 30px 0px;[m[41m  [m
[32m+[m[32m}[m
 .person-img {[m
   max-width: 100%;[m
 }[m
[36m@@ -92,6 +229,11 @@[m
   flex-direction: row;[m
   justify-content: center;[m
 }[m
[32m+[m[32m@media (max-width: 600px) {[m
[32m+[m[32m  .more-info-items {[m
[32m+[m[32m      flex-direction: column;[m[41m    [m
[32m+[m[32m  }[m
[32m+[m[32m}[m
 .more-info-item {[m
   padding: 30px;[m
 }[m
[36m@@ -149,8 +291,7 @@[m
   justify-content: center;[m
 }[m
 .footer-item {[m
[31m-  padding-left: 20px;[m
[31m-  padding-right: 20px;[m
[32m+[m
 }[m
 .footer-item p {[m
   font-size: 20px;[m
[36m@@ -167,11 +308,17 @@[m
   flex:1;[m
   padding: 30px;[m
 }[m
[32m+[m[32m@media (max-width: 980px) {[m
[32m+[m[32m  .events {[m
[32m+[m[32m      flex-direction: column;[m[41m    [m
[32m+[m[32m  }[m
[32m+[m[32m}[m
 .event {[m
   flex:1;[m
   border:4px solid #ebc6c6;[m
   margin: 40px;[m
 }[m
[32m+[m
 .event-title {[m
   background-color: #ebc6c6;[m
   padding: 20px;[m
[36m@@ -186,11 +333,17 @@[m
 }[m
 .event-timing {[m
   padding: 20px;[m
[32m+[m[32m  flex: 1;[m
 }[m
 .event-timings {[m
   display: flex;[m
   flex-direction: row;[m
 }[m
[32m+[m[32m@media (max-width: 630px) {[m
[32m+[m[32m  .event-timings {[m
[32m+[m[32m      flex-direction: column;[m[41m    [m
[32m+[m[32m  }[m
[32m+[m[32m}[m
 .event-info-details {[m
   padding: 20px;[m
 }[m
[36m@@ -203,12 +356,24 @@[m
 .event-location {[m
   margin: 0px 100px 100px 100px;[m
 }[m
[31m-[m
[32m+[m[32m@media (max-width: 500px) {[m
[32m+[m[32m  .event {[m
[32m+[m[32m      margin:0px;[m[41m   [m
[32m+[m[32m      margin-top: 10px;[m[41m [m
[32m+[m[32m      margin-bottom:20px;[m
[32m+[m[32m  }[m
[32m+[m[32m  .event-location {[m
[32m+[m[32m    margin: 0px 25px 100px 25px;[m
[32m+[m[32m  }[m[41m  [m
[32m+[m[32m}[m
 /* GENERAL */[m
 [m
[32m+[m[32m.general-hr {[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m}[m
 .subheading {[m
   margin: 0px;[m
[31m-  padding: 50px;[m
[32m+[m[32m  padding-top: 50px;[m
   font-size: 30px;[m
   font-weight: bold;[m
 }[m
[36m@@ -222,18 +387,29 @@[m
   align-items: center;[m
   justify-content: center;[m
 }[m
[32m+[m[32m.sub-backdrop-tint {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top:0;[m
[32m+[m[32m  left:0;[m
[32m+[m[32m  background: rgba(0, 0, 0, 0.4);[m[41m [m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 55vh;[m[41m  [m
[32m+[m[32m}[m
 .sub-backdrop-content {[m
   display: flex;[m
   flex-direction: column;[m
   align-items: center;[m
[32m+[m[32m  height: 55vh;[m
[32m+[m[32m  padding-top: 115px;[m
 }[m
 .sub-backdrop-item > p {[m
   text-transform: uppercase;[m
[31m-  font-size: 50px;[m
[32m+[m[32m  font-size: 40px;[m
   color: #fff;[m
   font-weight: 900;[m
 }[m
 .sub-backdrop-item-contact {[m
[32m+[m[32m  margin-top: 40px;[m
   border: 2px solid #ebc6c6;[m
 }[m
 .sub-backdrop-item-contact > p {[m
[36m@@ -262,12 +438,116 @@[m
 .guestinfo-details {[m
   display: flex;[m
   flex-direction: row;[m
[32m+[m[41m  [m
 }[m
 .guestinfo-details-text {[m
   display: flex;[m
   flex-direction: column;[m
[31m-  padding: 20px;[m
[32m+[m[32m  padding: 20px 100px 20px 100px;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  flex-wrap: wrap;[m
 }[m
 .guestinfo-details-img img {[m
   max-width: 100%;[m
[32m+[m[32m}[m
[32m+[m[32m.guestinfo-details-text ul > li {[m
[32m+[m[32m  text-align: left;[m
[32m+[m[32m  padding:10px;[m
[32m+[m[32m}[m
[32m+[m[32m.guestinfo-details-text > ul {[m
[32m+[m[32m  columns: 2;[m
[32m+[m[32m  -webkit-columns: 2;[m
[32m+[m[32m  -moz-columns: 2;[m
[32m+[m[32m}[m
[32m+[m[32m.guestinfo-details-text > #transpo {[m
[32m+[m[32m  columns: 1;[m
[32m+[m[32m  -webkit-columns: 1;[m
[32m+[m[32m  -moz-columns: 1;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (max-width: 600px) {[m
[32m+[m[32m  .guestinfo-details {[m
[32m+[m[32m      flex-direction: column;[m
[32m+[m[32m  }[m
[32m+[m[32m  .guestinfo-element {[m
[32m+[m[32m    border: 4px solid #ebc6c6;[m
[32m+[m[32m    margin-top: 20px;[m
[32m+[m[32m    padding: 20px;[m
[32m+[m[32m  }[m[41m  [m
[32m+[m
[32m+[m[32m  .guestinfo-elements {[m
[32m+[m[32m    margin: 5px;[m
[32m+[m[32m  }[m[41m [m
[32m+[m[32m  .guestinfo-details-text {[m
[32m+[m[32m    padding: 10px;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m@media (max-width: 1100px) {[m
[32m+[m[32m  .guestinfo-details-text > ul {[m
[32m+[m[32m    columns: 1;[m
[32m+[m[32m    -webkit-columns: 1;[m
[32m+[m[32m    -moz-columns: 1;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32m/* Registry */[m
[32m+[m
[32m+[m[32m.registry-container {[m
[32m+[m[32m  padding: 30px;[m
[32m+[m[32m}[m
[32m+[m[32m.registry-container > div {[m
[32m+[m[32m  margin-bottom: 30px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* RegistryItem */[m
[32m+[m
[32m+[m[32