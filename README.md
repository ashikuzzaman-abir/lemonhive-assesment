<img src="https://media-exp1.licdn.com/dms/image/C561BAQForgdntuiGoQ/company-background_10000/0/1587974137322?e=2159024400&v=beta&t=Jj8LPMifZMdCYt_Z9M6k3bTOgcVdxwGjfyqdmHnqP5w" style="width: 100%;"> </img>

<h1 align="center">Lemon Hive React-NextJs-Graphql Assesment</h1>
<p style="text-align: justify;">Welcome, here I've set up a project from scratch with create-next-app. My task was to implement a UI with core CSS or TailwindCSS, fetch data from GraphQL API and construct a dynamic schedule table using those data. When a user clicks on a schedule from schedule table it will route into a new page with additional information of a conference (Speaker details) and a sidebar which is rearrangeable by dragging and dropping! Every component is tested and mobile responsible.</p>
<p style=" color:orange">"Please read the <i><a style="color:orange; text-decoration: underline;" href="#instruction">instructions</a></i> first"</p>
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
    <a href="#schedule-table">Dynamic Schedule Table</a>
  </li>
  <li>
  <a href="#drag-n-drop">
    Drag-n-drop
  </a>
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
    <li>Run "npm run dev" to turn on Next.js development server</li>
    <li>Open Mozila Firefox browser or Google Chrome Browser and visit <a href="http://localhost:3000">http://localhost:3000</a></li>
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
  <div style="display:flex; gap: 40px;">
    <b style="font-size: 18px; min-width: 120px;">/components</b>
    <p style="margin: auto 0;">Here I stored all the reusable components of the projects</p>
  </div>
  <div style="display:flex; gap: 40px;">
    <b style="font-size: 18px; min-width: 120px;">/configs</b>
    <p style="margin: auto 0;">Here I stored configurations of the projects</p>
  </div>
  <div style="display:flex; gap: 40px;">
    <b style="font-size: 18px; min-width: 120px;">/graphQL</b>
    <p style="margin: auto 0;">Here I stored graphql queries of the projects</p>
  </div>
  <div style="display:flex; gap: 40px;">
    <b style="font-size: 18px; min-width: 120px;">/pages</b>
    <p style="margin: auto 0;">Here I stored web applications static and dynamic pages</p>
  </div>
  <div style="display:flex; gap: 40px;">
    <b style="font-size: 18px; min-width: 120px;">/public</b>
    <p style="margin: auto 0;">Here I stored all the static files such as pictures and svgs</p>
  </div>
  <div style="display:flex; gap: 40px;">
    <b style="font-size: 18px; min-width: 120px;">/styles</b>
    <p style="margin: auto 0;">Here I stored CSS style sheet files of the project</p>
  </div>
  <div style="display:flex; gap: 40px;">
    <b style="font-size: 18px; min-width: 120px;">/tests</b>
    <p style="margin: auto 0;">Here I've written test files of the project</p>
  </div>
</div>
<br>
<div id="schedule-table">
  <h2>Dynamic Schedule Table</h2>
  <img src="./docs/ScheduleTable.jpg" width="100%"/>
</div>
<!-- <h1 id="drag-n-drop">Drag and Drop</h1> -->
