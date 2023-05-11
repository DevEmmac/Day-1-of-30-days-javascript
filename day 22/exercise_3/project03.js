
const body =  document.body
const titleDiv = document.createElement('div')
const spanYear = document.createElement('span')
const h1 = document.createElement('h1')
const h2 = document.createElement('h2')
const titleContainer = document.createElement('div')
const subtitleContainer = document.createElement('div')
const p = document.createElement('div')
const bodyContainer = document.createElement('div')

//python declaration
const pythonDiv = document.createElement('div')
const pythonTitle = document.createElement('p')
const pythonDetails = document.createElement('details')
const pythonSummary = document.createElement('summary')
const pythonStatus = document.createElement('p')

//js declaration
const jsDiv = document.createElement('div')
const jsTitle = document.createElement('p')
const jsDetails = document.createElement('details')
const jsSummary = document.createElement('summary')
const jsStatus = document.createElement('p')

//html and css declaration
const htmlDiv = document.createElement('div')
const htmlTitle = document.createElement('p')
const htmlDetails = document.createElement('details')
const htmlSummary = document.createElement('summary')
const htmlStatus = document.createElement('p')

//react
const reactDiv = document.createElement('div')
const reactTitle = document.createElement('p')
const reactDetails = document.createElement('details')
const reactSummary = document.createElement('summary')
const reactStatus = document.createElement('p')

//reactNative
const reactNativeDiv = document.createElement('div')
const reactNativeTitle = document.createElement('p')
const reactNativeDetails = document.createElement('details')
const reactNativeSummary = document.createElement('summary')
const reactNativeStatus = document.createElement('p')

//fullstack
const fullStackDiv = document.createElement('div')
const fullStackTitle = document.createElement('p')
const fullStackDetails = document.createElement('details')
const fullStackSummary = document.createElement('summary')
const fullStackStatus = document.createElement('p')
//data analysis
const dataAnalysisDiv = document.createElement('div')
const dataAnalysisTitle = document.createElement('p')
const dataAnalysisDetails = document.createElement('details')
const dataAnalysisSummary = document.createElement('summary')
const dataAnalysisStatus = document.createElement('p')
// machine learning
const machineLearnDiv = document.createElement('div')
const machineLearnTitle = document.createElement('p')
const machineLearnDetails = document.createElement('details')
const machineLearnSummary = document.createElement('summary')
const machineLearnStatus = document.createElement('p')

// declaring about author
const aboutAuthor =  document.createElement('div')
const authorDetails = document.createElement('h4')

// icons
const links = document.createElement('p')

// author bio
const authorBio = document.createElement('p')

//skill
const skillsDiv = document.createElement('div')

// skill title div
const skillTitleDiv = document.createElement('div')

// skill title text
const titleText = document.createElement('p')
const skillDiv = document.createElement('div')
const keyItem = document.createElement('div')
const keywords = document.createElement('div')
const qualificationDiv = document.createElement('div')
const qualiText = document.createElement('p')
const skillText = document.createElement('p')
let keyColors




// styling
// title
body.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif'

titleDiv.className = 'title-div'
titleDiv.style.textAlign = 'center'
titleDiv.style.display ='flex'
titleDiv.style.margin ='0 auto'
titleDiv.style.justifyContent ='center'
body.appendChild(titleDiv)

h1.className = 'h1'
h1.textContent = `${asabenehChallenges2020.description} in `
titleContainer.appendChild(h1)


spanYear.style.fontSize = '5rem'
spanYear.textContent = `${asabenehChallenges2020.challengeYear}`
h1.appendChild(spanYear)

titleDiv.appendChild(titleContainer)

// subtitle
body.appendChild(subtitleContainer)

h2.className = 'h2'
h2.style.textAlign = "center"
h2.style.margin = "5px auto"
h2.textContent = `${asabenehChallenges2020.challengeSubtitle}`
h2.style.textDecoration = 'underline'
subtitleContainer.appendChild(h2)

// date styling
p.style.className = "date"
p.style.fontSize = '1.2rem'
p.style.padding = '4px'
p.style.border = 'transparent'
p.style.width = '250px'
p.style.margin = '0 auto 1rem '

// body contents styling
bodyContainer.style.textAlign= 'center'
bodyContainer.id = 'main-body'
bodyContainer.style.border = '5px'

//Python
//python div
pythonDiv.style.display ='flex'
pythonDiv.style.margin ='0 auto'
pythonDiv.style.width = '50%'
pythonDiv.style.padding ='0.4rem 0.8rem'
pythonDiv.style.justifyContent ='space-between'
bodyContainer.appendChild(pythonDiv)

// inserting python items into python div
pythonTitle.textContent = `${asabenehChallenges2020.challenges[0].name}`
pythonTitle.style.textDecoration = 'underline'
pythonTitle.style.color = '#551a8b'
pythonDiv.appendChild(pythonTitle)
pythonDetails.style.paddingTop = '1rem'
pythonDiv.appendChild(pythonDetails)

//changing python detail name to 'python'
pythonSummary.textContent = `${asabenehChallenges2020.challenges[0].topics[0]}`
pythonDetails.appendChild(pythonSummary)

// listing all topics in python topics array
for(let i = 0; i < asabenehChallenges2020.challenges[0].topics.length; i++) {
  let pythonSummaryArr = document.createElement('p')
  pythonSummaryArr.textContent = `${asabenehChallenges2020.challenges[0].topics[i]}`
  pythonDetails.appendChild(pythonSummaryArr)
}
// python status
pythonStatus.textContent = `${asabenehChallenges2020.challenges[0].status}`
if (pythonStatus.textContent.includes('Done')) {
    pythonDiv.style.backgroundColor = '#5bbc7a'
} else if (pythonStatus.textContent.includes('Ongoing')) {
    pythonDiv.style.backgroundColor = "#f7dc5c"
} else {
    pythonDiv.style.backgroundColor = "#fd5e53"
}
pythonDiv.appendChild(pythonStatus)

// javascript
//js div
jsDiv.style.display ='flex'
jsDiv.style.margin ='0 auto'
jsDiv.style.width ='50%'
jsDiv.style.borderTop ='5px solid white'
jsDiv.style.padding ='0.4rem 0.8rem'
jsDiv.style.justifyContent ='space-between'
bodyContainer.appendChild(jsDiv)

// inserting js items into js div
jsTitle.textContent = `${asabenehChallenges2020.challenges[1].name}`
jsTitle.style.textDecoration = 'underline'
jsTitle.style.color = '#551a8b'
jsDiv.appendChild(jsTitle)
jsDetails.style.paddingTop = '1rem'
jsDiv.appendChild(jsDetails)

//changing js detail name to 'JavaScript'
jsSummary.textContent = `${asabenehChallenges2020.challenges[1].topics[0]}`
jsDetails.appendChild(jsSummary)

// listing all topics in js topics array
for(let i = 0; i < asabenehChallenges2020.challenges[1].topics.length; i++) {
  let jsSummaryArr = document.createElement('p')
  jsSummaryArr.textContent = `${asabenehChallenges2020.challenges[1].topics[i]}`
  jsDetails.appendChild(jsSummaryArr)
}
// js status
jsStatus.textContent = `${asabenehChallenges2020.challenges[1].status}`
if (jsStatus.textContent.includes('Done')) {
    jsDiv.style.backgroundColor = '#5bbc7a'
} else if (jsStatus.textContent.includes('Ongoing')) {
    jsDiv.style.backgroundColor = "#f7dc5c"
} else {
    jsDiv.style.backgroundColor = "#fd5e53"
}
jsDiv.appendChild(jsStatus)

//HTML and CSS
//html div
htmlDiv.style.display ='flex'
htmlDiv.style.margin ='0 auto'
htmlDiv.style.width ='50%'
htmlDiv.style.borderTop ='5px solid white'
htmlDiv.style.padding ='0.4rem 0.8rem'
htmlDiv.style.justifyContent ='space-between'
bodyContainer.appendChild(htmlDiv)

// inserting html items into html div
htmlTitle.textContent = `${asabenehChallenges2020.challenges[2].name}`
htmlDiv.appendChild(htmlTitle)
htmlDetails.style.paddingTop = '1rem'
htmlDiv.appendChild(htmlDetails)

//changing html detail name to 'HTML & CSS'
htmlSummary.textContent = 'HTML & CSS'

htmlDetails.appendChild(htmlSummary)

// listing all topics in html topics array
for(let i = 0; i < asabenehChallenges2020.challenges[2].topics.length; i++) {
  let htmlSummaryArr = document.createElement('p')
  htmlSummaryArr.textContent = `${asabenehChallenges2020.challenges[2].topics[i]}`
  htmlDetails.appendChild(htmlSummaryArr)
}
// html status
htmlStatus.textContent = `${asabenehChallenges2020.challenges[2].status}`
if (htmlStatus.textContent.includes('Done')) {
    htmlDiv.style.backgroundColor = '#5bbc7a'
} else if (htmlStatus.textContent.includes('Ongoing')) {
    htmlDiv.style.backgroundColor = "##f7dc5c"
} else {
    htmlDiv.style.backgroundColor = "#fd5e53"
}
htmlDiv.appendChild(htmlStatus)

// React
//react div
reactDiv.style.display ='flex'
reactDiv.style.margin ='0 auto'
reactDiv.style.borderTop ='5px solid white'
reactDiv.style.width ='50%'
reactDiv.style.padding ='0.4rem 0.8rem'
reactDiv.style.justifyContent ='space-between'
bodyContainer.appendChild(reactDiv)

// inserting react items into react div
reactTitle.textContent = `${asabenehChallenges2020.challenges[3].name}`
reactDiv.appendChild(reactTitle)
reactDetails.style.paddingTop = '1rem'
reactDiv.appendChild(reactDetails)

//changing react detail name to 'React'
reactSummary.textContent = 'React'
reactDetails.appendChild(reactSummary)

// listing all topics in react topics array
for(let i = 0; i < asabenehChallenges2020.challenges[3].topics.length; i++) {
  let reactSummaryArr = document.createElement('p')
  reactSummaryArr.textContent = `${asabenehChallenges2020.challenges[3].topics[i]}`
  reactDetails.appendChild(reactSummaryArr)
}
// react status
reactStatus.textContent = `${asabenehChallenges2020.challenges[3].status}`
if (reactStatus.textContent.includes('Done')) {
    reactDiv.style.backgroundColor = '#5bbc7a'
} else if (reactStatus.textContent.includes('Ongoing')) {
    reactDiv.style.backgroundColor = "#f7dc5c"
} else {
    reactDiv.style.backgroundColor = "#fd5e53"
}
reactDiv.appendChild(reactStatus)

//ReactNative
//react div
reactNativeDiv.style.display ='flex'
reactNativeDiv.style.margin ='0 auto'
reactNativeDiv.style.borderTop ='5px solid white'
reactNativeDiv.style.width ='50%'
reactNativeDiv.style.padding ='0.4rem 0.8rem'
reactNativeDiv.style.justifyContent ='space-between'
bodyContainer.appendChild(reactNativeDiv)

// inserting reactNative items into reactNative div
reactNativeTitle.textContent = `${asabenehChallenges2020.challenges[4].name}`
reactNativeDiv.appendChild(reactNativeTitle)
reactNativeDetails.style.paddingTop = '1rem'
reactNativeDiv.appendChild(reactNativeDetails)

//changing reactNative detail name to 'React'
reactNativeSummary.textContent = 'ReactNative'
reactNativeDetails.appendChild(reactNativeSummary)

// listing all topics in reactNative topics array
for(let i = 0; i < asabenehChallenges2020.challenges[4].topics.length; i++) {
  let reactNativeSummaryArr = document.createElement('p')
  reactNativeSummaryArr.textContent = `${asabenehChallenges2020.challenges[4].topics[i]}`
  reactNativeDetails.appendChild(reactNativeSummaryArr)
}
// reactNative status
reactNativeStatus.textContent = `${asabenehChallenges2020.challenges[4].status}`
if (reactNativeStatus.textContent.includes('Done')) {
    reactNativeDiv.style.backgroundColor = '#5bbc7a'
} else if (reactNativeStatus.textContent.includes('Ongoing')) {
    reactNativeDiv.style.backgroundColor = "#f7dc5c"
} else {
    reactNativeDiv.style.backgroundColor = "#fd5e53"
}
reactNativeDiv.appendChild(reactNativeStatus)

//Fullstack
//fullstack div
fullStackDiv.style.display ='flex'
fullStackDiv.style.margin ='0 auto'
fullStackDiv.style.borderTop ='5px solid white'
fullStackDiv.style.width ='50%'
fullStackDiv.style.padding ='0.4rem 0.8rem'
fullStackDiv.style.justifyContent ='space-between'
bodyContainer.appendChild(fullStackDiv)

// inserting fullstack items into fullstack div
fullStackTitle.textContent = `${asabenehChallenges2020.challenges[5].name}`
fullStackDiv.appendChild(fullStackTitle)
fullStackDetails.style.paddingTop = '1rem'
fullStackDiv.appendChild(fullStackDetails)

//changing fullstack detail name to 'fullstack'
fullStackSummary.textContent = 'Fullstack'
fullStackDetails.appendChild(fullStackSummary)

// listing all topics in fullstack topics array
for(let i = 0; i < asabenehChallenges2020.challenges[5].topics.length; i++) {
  let fullStackSummaryArr = document.createElement('p')
  fullStackSummaryArr.textContent = `${asabenehChallenges2020.challenges[5].topics[i]}`
  fullStackDetails.appendChild(fullStackSummaryArr)
}
// fullstack status
fullStackStatus.textContent = `${asabenehChallenges2020.challenges[5].status}`
if (fullStackStatus.textContent.includes('Done')) {
    fullStackDiv.style.backgroundColor = '#5bbc7a'
} else if (fullStackStatus.textContent.includes('Ongoing')) {
    fullStackDiv.style.backgroundColor = "#f7dc5c"
} else {
    fullStackDiv.style.backgroundColor = "#fd5e53"
}
fullStackDiv.appendChild(fullStackStatus)

// data analysis
//dataAnalysis div
dataAnalysisDiv.style.display ='flex'
dataAnalysisDiv.style.margin ='0 auto'
dataAnalysisDiv.style.borderTop ='5px solid white'
dataAnalysisDiv.style.width ='50%'
dataAnalysisDiv.style.padding ='0.4rem 0.8rem'
dataAnalysisDiv.style.justifyContent ='space-between'
bodyContainer.appendChild(dataAnalysisDiv)

// inserting dataAnalysis items into dataAnalysis div
dataAnalysisTitle.textContent = `${asabenehChallenges2020.challenges[6].name}`
dataAnalysisDiv.appendChild(dataAnalysisTitle)
dataAnalysisDetails.style.paddingTop = '1rem'
dataAnalysisDiv.appendChild(dataAnalysisDetails)

//changing dataAnalysis detail name to 'dataAnalysis'
dataAnalysisSummary.textContent = 'Data Analysis'
dataAnalysisDetails.appendChild(dataAnalysisSummary)

// listing all topics in dataAnalysis topics array
for(let i = 0; i < asabenehChallenges2020.challenges[6].topics.length; i++) {
  let dataAnalysisSummaryArr = document.createElement('p')
  dataAnalysisSummaryArr.textContent = `${asabenehChallenges2020.challenges[6].topics[i]}`
  dataAnalysisDetails.appendChild(dataAnalysisSummaryArr)
}
// dataAnalysis status
dataAnalysisStatus.textContent = `${asabenehChallenges2020.challenges[6].status}`
if (dataAnalysisStatus.textContent.includes('Done')) {
    dataAnalysisDiv.style.backgroundColor = '#5bbc7a'
} else if (dataAnalysisStatus.textContent.includes('Ongoing')) {
    dataAnalysisDiv.style.backgroundColor = "#f7dc5c"
} else {
    dataAnalysisDiv.style.backgroundColor = "#fd5e53"
}
dataAnalysisDiv.appendChild(dataAnalysisStatus)

// machine learning
//machine learning div
machineLearnDiv.style.display ='flex'
machineLearnDiv.style.margin ='0 auto'
machineLearnDiv.style.width ='50%'
machineLearnDiv.style.borderTop ='5px solid white'
machineLearnDiv.style.padding ='0.4rem 0.8rem'
machineLearnDiv.style.justifyContent ='space-between'
bodyContainer.appendChild(machineLearnDiv)


// inserting machine learning items into machine learning div
machineLearnTitle.textContent = `${asabenehChallenges2020.challenges[7].name}`
machineLearnDiv.appendChild(machineLearnTitle)
machineLearnDetails.style.paddingTop = '1rem'
machineLearnDiv.appendChild(machineLearnDetails)


//changing machine learning detail name to 'machine learning'
machineLearnSummary.textContent = 'Machine Learning'
machineLearnDetails.appendChild(machineLearnSummary)


// listing all topics in machine learning topics array
for(let i = 0; i < asabenehChallenges2020.challenges[7].topics.length; i++) {
  let machineLearnSummaryArr = document.createElement('p')
  machineLearnSummaryArr.textContent = `${asabenehChallenges2020.challenges[7].topics[i]}`
  machineLearnDetails.appendChild(machineLearnSummaryArr)
}

// machine learning status
machineLearnStatus.textContent = `${asabenehChallenges2020.challenges[7].status}`
if (machineLearnStatus.textContent.includes('Done')) {
    machineLearnDiv.style.backgroundColor = '#5bbc7a'
} else if (machineLearnStatus.textContent.includes('Ongoing')) {
    machineLearnDiv.style.backgroundColor = "#f7dc5c"
} else {
    machineLearnDiv.style.backgroundColor = "#fd5e53"
}
machineLearnDiv.appendChild(machineLearnStatus)


// about user
aboutAuthor.style.margin = '0 auto'
aboutAuthor.style.width = '50%'
bodyContainer.appendChild(aboutAuthor)

const fullName = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;

authorDetails.style.textAlign = 'center'
authorDetails.style.fontSize = '1.5rem'
authorDetails.textContent = `${fullName}`
aboutAuthor.append(authorDetails)


// links  
asabenehChallenges2020.author.socialLinks.forEach(socialLinks => {
    
    links.innerHTML += `<a id="link" target="_blank" href="${socialLinks.url}" title="${socialLinks.social}">${socialLinks.fontawesomeIcon}</a>`
   
});

aboutAuthor.appendChild(links)


// author bio
authorBio.textContent = `${asabenehChallenges2020.author.bio}`
authorBio.style.textAlign = 'center'
aboutAuthor.appendChild(authorBio)


// skill div
skillsDiv.style.display = 'flex'
aboutAuthor.appendChild(skillsDiv)


//skill title div
skillTitleDiv.style.marginRight = '4rem'
skillTitleDiv.style.marginTop = '1rem'
skillsDiv.appendChild(skillTitleDiv)


// skill title text
titleText.textContent = 'Titles'
titleText.style.textAlign = 'left'
titleText.style.fontWeight = 'bold'
skillTitleDiv.appendChild(titleText)

let titleArr
for(let i = 0; i < asabenehChallenges2020['author']['titles'].length; i++) {
  titleArr = document.createElement('p')
  titleArr.style.textAlign = 'left'
  titleArr.textContent = `${asabenehChallenges2020['author']['titles'][i].join('')}`
  skillTitleDiv.appendChild(titleArr)
}


// skill
skillDiv.style.marginRight = '4rem'
skillDiv.style.marginTop = '1rem'
skillDiv.style.textAlign = 'left'
skillsDiv.appendChild(skillDiv)

skillText.textContent = 'Skills'
skillText.style.fontWeight = 'bold'
skillDiv.appendChild(skillText)

let skillArr
for(let i = 0; i < `${asabenehChallenges2020['author']['skills'].length}`; i++) {
  skillArr = document.createElement('p')
  skillArr.style.textAlign = 'justify'
  skillArr.textContent = `${asabenehChallenges2020['author']['skills'][i]}`

  skillDiv.appendChild(skillArr)
}


// qualification
qualificationDiv.style.marginTop = '1rem'
skillsDiv.appendChild(qualificationDiv)

qualiText.textContent = 'Qualifications'
qualiText.style.fontWeight = 'bold'
qualiText.style.textAlign = 'left'
qualificationDiv.appendChild(qualiText)

let quaArr
for(let i = 0; i < `${asabenehChallenges2020['author']['qualifications'].length}`; i++) {
  quaArr= document.createElement('p')
  quaArr.style.textAlign = 'left'
  quaArr.textContent = `${asabenehChallenges2020['author']['qualifications'][i]}`
  qualificationDiv.appendChild(quaArr)
}


//keywords
keywords.style.fontWeight = 'bold'
keywords.textContent = 'Keywords'


keywords.style.marginLeft = '35rem'
keywords.style.width = '40rem'
keywords.style.textAlign = 'left'

//keywords.style.paddingLeft = '10rem'
keywords.style.paddingBottom = '0.7rem'
bodyContainer.appendChild(keywords)

keyItem.style.display = 'flex'
keyItem.style.flexWrap = 'wrap'
keyItem.style.width = '55rem'
keyItem.style.margin = '0 auto'
bodyContainer.appendChild(keyItem)




//key items
  let arr
for(let i = 0; i < `${asabenehChallenges2020['keywords'].length}`; i++) {
  arr= document.createElement('p')
  arr.textContent = `# ${asabenehChallenges2020['keywords'][i]}`
  arr.style.margin = '0.2rem 0.4rem'
  arr.style.padding = '0.2rem 1.6rem 0.2rem 0.4rem'
   arr.style.fontStyle = 'italic'
  arr.style.borderRadius = '50px' 
  arr.style.border = '1px solid black'
  let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    keyColors = `rgb(${random1},${random2},${random3})`
  arr.style.backgroundColor = `${keyColors}`
  keyItem.appendChild(arr)
}
bodyContainer.appendChild(keyItem)


// functionality
//changing challengeYear color
let colors
const colorChange = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    colors = `rgb(${random1},${random2},${random3})`
    spanYear.style.color = colors
}
setInterval(colorChange, 1000)



// changing Date color
const now = new Date()
const years = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()
if(hours < 10){
    hours = `0${hours}`
}
if(seconds < 10){
    seconds = `0${seconds}`
}
if(minutes < 10){
    minutes = `0${minutes}`
}
let mon = new Array("January", "February", "March", "April", "May", "June", "July",  "August", "September", "October", "November", "December");
let monn = mon[month]
const dates = `${monn} ${date}, ${years} ${hours}:${minutes}:${seconds}`
p.textContent = dates


const backgroundColorChange = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    p.style.backgroundColor = color
}
setInterval(backgroundColorChange, 700)
body.appendChild(p)

//body
body.appendChild(bodyContainer)