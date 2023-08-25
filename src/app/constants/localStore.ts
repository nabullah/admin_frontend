export const localStore = {
  token: 'token',
  userData: 'user_data',
};
export const dashboard = {
  totalRevenue:{
    categories: ["16th","17th","18th","19th","20th","21th","22th","23th","24th","25th","26th"],
    series: [
      {
        name: "Series A",
        data: [30,60,40,50,40,55,85,65,75,50,70]
      },
    ]
  },
  customers:{
    series: [350, 450, 100],
    labels:["New", "Returning", "Others"]
  },
  averageProfit:{
    xaxis:["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    series:[
      {
        name: "Series A",
        data: [12, 59, 5, 56, 58, 12, 59]
      },
      {
        name: "Series B",
        data: [12, 59, 5, 56, 58, 12, 59]
      },
    ],
    colors:["rgb(115,103,240)","rgba(115,103,240,0.5)"]
  },
  topProducts:[
    {
      productImg:"greySofa",
      productName:"Gray Sofa",
      sales:"81",
      earning:"1,912.00",
      stockLeft:"82"
    },
    {
      productImg:"beat-headphone",
      productName:"Beat Headphone",
      sales:"26",
      earning:"1,377.00",
      stockLeft:"61"
    },
    {
      productImg:"woodenRhino",
      productName:"Wooden Rhino",
      sales:"71",
      earning:"9,212.00",
      stockLeft:"23"
    },
    {
      productImg:"redChair",
      productName:"Red Chair",
      sales:"79",
      earning:"1,298.00",
      stockLeft:"54"
    },
    {
      productImg:"wristBand",
      productName:"Wristband",
      sales:"60",
      earning:"7,376.00",
      stockLeft:"76"
    }
  ],
  latestUpload:[
    {
      fileName:"Documentation",
      extension:"doc",
      fileSize:"1.2MB"
    },
    {
      fileName:"Expensess",
      extension:"xls",
      fileSize:"518KB"
    },
    {
      fileName:"Receipt",
      extension:"txt",
      fileSize:"355KB"
    },
    {
      fileName:"Project Requirement",
      extension:"doc",
      fileSize:"1.6MB"
    },
    {
      fileName:"App Flow",
      extension:"pdf",
      fileSize:"19.8MB"
    },
    {
      fileName:"Presentation",
      extension:"ppt",
      fileSize:"2.7MB"
    },
  ],
  activity:[
    {
      name:"Marshall Nichols",
      activity:"Create",
      aboutActivity:"this project",
      dotColor:"rgb(136, 108, 255)",
      time:"5:21PM"
    },
    {
      name:"Pamela Wanda",
      activity:"Removed",
      aboutActivity:"a file",
      dotColor:"rgb(222, 68, 54)",
      time:"8:34PM"
    },
    {
      name:"Riley Newman",
      activity:"Commented",
      aboutActivity:"'Hi, please done this before tommorow'",
      dotColor:"rgb(63, 135, 245)",
      time:"8:34PM"
    },
    {
      name:"Erin Gonzales",
      activity:"Commented",
      aboutActivity:"'This is not our work!'",
      dotColor:"rgb(255, 193, 7)",
      time:"8:34PM"
    },
    {
      name:"Lilian Stone",
      activity:"Attached file ",
      aboutActivity:"Mockup Zip",
      dotColor:"rgb(5, 201, 167)",
      time:"8:34PM"
    },
    {
      name:"Virgil Gonzales",
      activity:"Complete task",
      aboutActivity:"Prototype Design",
      dotColor:"rgb(63, 135, 245)",
      time:"10:44PM"
    },
  ],
  task:{
    today:[
      {
        head:"Define users and workflow",
        detail:"A cheeseburger is more than sandwich"
      },
      {
        head:"Schedule jobs",
        detail:"I'm gonna build me an airport"
      },
      {
        head:"Extend the data model",
        detail:"Let us wax poetic about cheeseburger."
      },
      {
        head:"Change interface",
        detail:"Efficiently unleash cross-media information"
      },
      {
        head:"Create databases",
        detail:"Here's the story of a man named Brady"
      }
    ],
    week:[
      {
        head:"Verify connectivity",
        detail:"Bugger bag egg's old boy willy jolly"
      },
      {
        head:"Order console machines",
        detail:"Value proposition alpha crowdsource"
      },
      {
        head:"Customize Template",
        detail:"Do you see any Teletubbies in here"
      },
      {
        head:"Batch schedule",
        detail:"Trillion a very small stage in a vast"
      },
      {
        head:"Prepare implementation",
        detail:"Drop in axle roll-in rail slide"
      }
    ],
    month:[
      {
        head:"Create user groups",
        detail:"Nipperkin run a rig ballast chas"
      },
      {
        head:"Design Wireframe",
        detail:"Value proposition alpha crowdsource"
      },
      {
        head:"Project Launch",
        detail:"I'll be sure to note that"
      },
      {
        head:"Management meeting",
        detail:"Hand-crafted exclusive finest"
      },
      {
        head:"Extend data model",
        detail:"European minnow priapumfish mosshead"
      }
    ],
  }
}

export const blogData = [
  {
    id:"1",
    blogImg:"blog-1",
    heading:"You should know about Enlink",
    username:"Derry micheal",
    createdAt:"Jan 2, 2019",
    content:"Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear topping. Chupa chups apple pie carrot cake chocolate cake caramels",
    avatar:"thumb-1"
  },
  {
    id:"2",
    blogImg:"blog-5",
    heading:"Enlink Has The Answer",
    username:"Marshall Nichols",
    createdAt:"Jan 6, 2019",
    content:"Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar",
    avatar:"thumb-2"
  },
  {
    id:"3",
    blogImg:"blog-3",
    heading:"You should kThe Miracle Of Enlink",
    username:"Virgil Gonzales",
    createdAt:"Jan 8, 2019",
    content:"Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.    ",
    avatar:"thumb-3"
  },
  {
    id:"4",
    blogImg:"blog-4",
    heading:"Enlink Has The Answer    ",
    username:" Nicole Wyne",
    createdAt:"Jan 16, 2019",
    content:"European minnow priapumfish mosshead warbonnet shrimpfish bigscale. Cutlassfish porbeagle shark ricefish walking catfish glassfish Black swallower.",
    avatar:"thumb-4"
  },
  {
    id:"5",
    blogImg:"blog-5",
    heading:"oSeven Clarifications On Hand    ",
    username:"Riley Newman",
    createdAt:"Jan 22, 2019",
    content:"Let’s see what Chef Dee got that they don’t want us to eat. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key.    ",
    avatar:"thumb-5"
  },
  {
    id:"6",
    blogImg:"blog-6",
    heading:"You should know about Enlink",
    username:"Derry micheal",
    createdAt:"Jan 2, 2019",
    content:"Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear topping. Chupa chups apple pie carrot cake chocolate cake caramels",
    avatar:"thumb-1"
  },
]
