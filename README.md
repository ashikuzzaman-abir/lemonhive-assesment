<!-- <img src="https://media-exp1.licdn.com/dms/image/C561BAQForgdntuiGoQ/company-background_10000/0/1587974137322?e=2159024400&v=beta&t=Jj8LPMifZMdCYt_Z9M6k3bTOgcVdxwGjfyqdmHnqP5w" style="width: 100%;"> </img> -->

<h1 align="center">Lemon Hive React-NextJs-Graphql Assesment</h1>
<p align="justify">Welcome, here I've set up a project from scratch with create-next-app. My task was to implement a UI with core CSS or TailwindCSS, fetch data from GraphQL API and construct a dynamic schedule table using those data. When a user clicks on a schedule from schedule table it will route into a new page with additional information of a conference (Speaker details) and a sidebar which is rearrangeable by dragging and dropping! Every component is tested and mobile responsible.</p>
<p style=" color:orange">"Please read the <i><a href="#instructions" style="color:orange; text-decoration: underline;">instructions</a></i> first"</p>
<br>
<div>
<h2>Table of Contents</h2>
<ul>
<li>
  <a href="#instructions">
    Instructions
  </a>
  </li>
  <li>
    <a href="#technologies">
    Technologies That I Have Used
    </a>
  </li>
  <li>
    <a href="#folder-Structure">Folder Structure</a>
  </li>
  <li>
  <a href="#api-integration">
    GraphQL API Integration
  </a>
  </li>
  <li>
    <a href="#schedule-table">Dynamic Schedule Table</a>
  </li>
  <li>
  <a href="#sidebar">
    Sidebar With Drag and Drop
  </a>
  </li>
  <li>
    <a href="#jest-error-solve">Solve Jest Error</a>
  </li>
</ul>
</div>
<br>
<div id="instructions">
  <h2>Instructions</h2>
  <ul>
    <li>Open terminal</li>
    <li>Clone this repository into your machine</li>
    <li>Change terminal working directory into project directory</li>
    <li>Run "npm install" to install all the dependencies locally </li>
    <li>Run "npm run test" to turn on Jest test environment and view the test results</li>
    <li>If "npm run test" throws any error on terminal view <a href="#jest-error-solve">Solve Jest Error</a></li>
    <li>Run "npm run dev" to open Next.js development server on port 3000</li>
    <li>Open Mozila Firefox browser or Google Chrome browser and visit <a href="http://localhost:3000">http://localhost:3000</a></li>
    <li>I've already live hosted the project on Vercel, you can visit it here: <a href="https://lemonhive-assesment.vercel.app">https://lemonhive-assesment.vercel.app</a></li>
  </ul>
</div>
<br>
<!-- <div style="height: 50vh;"></div> -->
<div id="technologies">
<h2>Technologies That I Have Used</h2>
<ul>
  <li>React.js</li>
  <li>Next.js</li>
  <li>TailwindCSS</li>
  <li>GraphQL</li>
  <li>Apollo Client</li>
  <li>React-beautiful-dnd</li>
  <li>Jest</li>
  <li>@testing-library/react</li>
</ul>
</div>
<br>

<div id="#folder-Structure">
  <h2>Folder Structure</h2>
  <table>
  <tr>
    <td><b style="font-size: 18px">/components</b></td>
    <td>Here I stored all the reusable components of the projects</td>
  </tr>
  <tr>
    <td><b style="font-size: 18px">/configs</b></td>
    <td>Here I stored configurations of the projects</td>
  </tr>
  <tr>
    <td><b style="font-size: 18px">/graphQL</b></td>
    <td>Here I stored GraphQL queries of the projects</td>
  </tr>
  <tr>
    <td><b style="font-size: 18px">/pages</b></td>
    <td>Here I stored web applications static and dynamic pages</td>
  </tr>
  <tr>
    <td><b style="font-size: 18px">/public</b></td>
    <td>Here I stored all the static files such as pictures and svgs</td>
  </tr>
  <tr>
    <td><b style="font-size: 18px">/styles</b></td>
    <td>Here I stored CSS style sheet files of the project</td>
  </tr>
  <tr>
    <td><b style="font-size: 18px">/tests</b></td>
    <td>Here I've written test files of the project</td>
  </tr>
</table>
</div>
<br>
<div id="api-integration">
  <h2>
  GraphQL API Integration
  </h2>
  <p align="justify">
    For GraphQL querying and data fetching I've choose the @apollo/client library. I've wrapped my main <a href="./pages/_app.js">_app</a> component with ApolloProvider and pass client instance with URL of backend GraphQL API and InMemoryCache into it. ApolloProvider will provide this client to all the children components and pages of this webapp. With the Help of this provided client and useQuery hook of apollo I've fetched all the conferences data into <a href="./pages/index.js">index.js</a> page. I've also fetch each conference data into <a href="./pages/[conferenceId].js">[conferenceId].js</a> dynamic page and used these data to show speakers information on <a href="./components/ConferenceContent.jsx">ConferenceContent</a> Component.
  </p>
</div>
<br>
<div id="schedule-table">
  <h2>Dynamic Schedule Table</h2>
  <img src="./docs/ScheduleTable.jpg" width="100%"/>
  <a href="./components/ScheduleTable.jsx">
    <p align="center">Component Source Code: <b>/components/ScheduleTable.jsx</b></p>
  </a>
  <p align="justify">It receives 3 props table, times, headings. Table is a matrix of two dimensional array, times is an array of most left columns value which is the times of the conferences and headings is an array of top row values which is the names of days. First I had to fetch all the conferences data into the parent component of ScheduleTable component and then I had to find out all the times of the conferences and store it into a array(which is a set) then I had to sort it. Then, I initialized a two dimensional array based on the length of times array and the length of days array and fill it with null values. Then, I iterated the fetch return and mutated with each conference information on the matrix array based on its time and day of the conference and passed it into ScheduleTable component as a prop. The ScheduleTable will firstly iterate the headings array as tables first row then it will iterate the table matrix for next rows but put the current indexed value of times array as a first element of each row then the rest of the elements of current indexed rows columns of that time conferences data. If iterating element is null then it won't render anything on the specific slot. Each conference has a link to the detail information page of that conference which is a dynamic page</p>
</div>
<br>
<div id="sidebar">
  <h2>Sidebar with Drag and Drop</h2>
  <img src="https://github.com/ashikuzzaman-abir/lemonhive-assesment/blob/master/docs/sidebar.gif" width="100%"/>
  <a href="./components/SideBar.jsx">
    <p align="center">
    Component Source Code: <b>/component/SideBar.jsx</b>
    </p>
  </a>
  <p align="justify">
    This sidebar is implemented using the react-beautiful-dnd library. I've implemented custom logic to rearrange the navigation smoothly. You can use drag and drop feature while grabbing each children most left icon and make it active by clicking on it
  </p>
</div>
<br>
<div id="jest-error-solve">
  <h2>Solve Jest Error</h2>
  <img src="./docs/jestErrorSolve.jpg" width="100%"/>
  <p align="justify">If "npm run test" fires these errors on terminal just goto /node_modules/parse5/ and open package.json file and delete "type": "module" on line 3. Now re run npm run test, it will resolve the error.</p>
</div>
<!-- <h1 id="drag-n-drop">Drag and Drop</h1> -->
