export const localStore = {
	token: "token",
	userData: "user_data",
};
export const dashboard = {
	totalRevenue: {
		categories: ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"],
		series: [
			{
				name: "Series A",
				data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
			},
		],
	},
	customers: {
		series: [350, 450, 100],
		labels: ["New", "Returning", "Others"],
	},
	averageProfit: {
		xaxis: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
		series: [
			{
				name: "Series A",
				data: [12, 59, 5, 56, 58, 12, 59],
			},
			{
				name: "Series B",
				data: [12, 59, 5, 56, 58, 12, 59],
			},
		],
		colors: ["rgb(115,103,240)", "rgba(115,103,240,0.5)"],
	},
	topProducts: [
		{
			productImg: "greySofa",
			productName: "Gray Sofa",
			sales: "81",
			earning: "1,912.00",
			stockLeft: "82",
		},
		{
			productImg: "beat-headphone",
			productName: "Beat Headphone",
			sales: "26",
			earning: "1,377.00",
			stockLeft: "61",
		},
		{
			productImg: "woodenRhino",
			productName: "Wooden Rhino",
			sales: "71",
			earning: "9,212.00",
			stockLeft: "23",
		},
		{
			productImg: "redChair",
			productName: "Red Chair",
			sales: "79",
			earning: "1,298.00",
			stockLeft: "54",
		},
		{
			productImg: "wristBand",
			productName: "Wristband",
			sales: "60",
			earning: "7,376.00",
			stockLeft: "76",
		},
	],
	latestUpload: [
		{
			fileName: "Documentation",
			extension: "doc",
			fileSize: "1.2MB",
		},
		{
			fileName: "Expensess",
			extension: "xls",
			fileSize: "518KB",
		},
		{
			fileName: "Receipt",
			extension: "txt",
			fileSize: "355KB",
		},
		{
			fileName: "Project Requirement",
			extension: "doc",
			fileSize: "1.6MB",
		},
		{
			fileName: "App Flow",
			extension: "pdf",
			fileSize: "19.8MB",
		},
		{
			fileName: "Presentation",
			extension: "ppt",
			fileSize: "2.7MB",
		},
	],
	activity: [
		{
			name: "Marshall Nichols",
			activity: "Create",
			aboutActivity: "this project",
			dotColor: "rgb(136, 108, 255)",
			time: "5:21PM",
		},
		{
			name: "Pamela Wanda",
			activity: "Removed",
			aboutActivity: "a file",
			dotColor: "rgb(222, 68, 54)",
			time: "8:34PM",
		},
		{
			name: "Riley Newman",
			activity: "Commented",
			aboutActivity: "'Hi, please done this before tommorow'",
			dotColor: "rgb(63, 135, 245)",
			time: "8:34PM",
		},
		{
			name: "Erin Gonzales",
			activity: "Commented",
			aboutActivity: "'This is not our work!'",
			dotColor: "rgb(255, 193, 7)",
			time: "8:34PM",
		},
		{
			name: "Lilian Stone",
			activity: "Attached file ",
			aboutActivity: "Mockup Zip",
			dotColor: "rgb(5, 201, 167)",
			time: "8:34PM",
		},
		{
			name: "Virgil Gonzales",
			activity: "Complete task",
			aboutActivity: "Prototype Design",
			dotColor: "rgb(63, 135, 245)",
			time: "10:44PM",
		},
	],
	task: {
		today: [
			{
				head: "Define users and workflow",
				detail: "A cheeseburger is more than sandwich",
			},
			{
				head: "Schedule jobs",
				detail: "I'm gonna build me an airport",
			},
			{
				head: "Extend the data model",
				detail: "Let us wax poetic about cheeseburger.",
			},
			{
				head: "Change interface",
				detail: "Efficiently unleash cross-media information",
			},
			{
				head: "Create databases",
				detail: "Here's the story of a man named Brady",
			},
		],
		week: [
			{
				head: "Verify connectivity",
				detail: "Bugger bag egg's old boy willy jolly",
			},
			{
				head: "Order console machines",
				detail: "Value proposition alpha crowdsource",
			},
			{
				head: "Customize Template",
				detail: "Do you see any Teletubbies in here",
			},
			{
				head: "Batch schedule",
				detail: "Trillion a very small stage in a vast",
			},
			{
				head: "Prepare implementation",
				detail: "Drop in axle roll-in rail slide",
			},
		],
		month: [
			{
				head: "Create user groups",
				detail: "Nipperkin run a rig ballast chas",
			},
			{
				head: "Design Wireframe",
				detail: "Value proposition alpha crowdsource",
			},
			{
				head: "Project Launch",
				detail: "I'll be sure to note that",
			},
			{
				head: "Management meeting",
				detail: "Hand-crafted exclusive finest",
			},
			{
				head: "Extend data model",
				detail: "European minnow priapumfish mosshead",
			},
		],
	},
	barchart1: {
		categories: ["16th", "17th", "18th", "19th", "20th", "21th", "22th"],
		series: [
			{
				name: "Net Profit",
				data: [10, 20, 30, 3, 23, 43, 45],
			},
		],
	},
	radarchart1: {
		series: [
			{
				name: "Radar Series 1",
				data: [65, 52, 38, 24, 33, 20],
			},
			{
				name: "Radar Series 1",
				data: [15, 32, 78, 21, 63, 80],
			},
		],
		categories: ["April", "May", "June", "July", "August", "September"],
	},
	barchart2: {
		series: [
			{
				name: "Inflation",
				data: [5.3, 7.1, 4.0, 10.1, 5.0, 8.6, 9.2, 12.3, 9.4, 3.8, 6.5, 4.2],
			},
		],
	},
	barchart3: {
		series: [
			{
				name: "Inflation",
				data: [15.3, 10.1, 12.0, 8.1, 9.0, 10.6, 11.2, 12.3, 13.4, 14.8, 15.5, 16.2],
			},
		],
	},
	salesByCountries: [
		{
			flag: "united-states",
			money: "8.45k",
			country: "United States",
			direction: "up",
			percentage: "25.8%",
		},
		{
			flag: "brazil-",
			money: "7.78k",
			country: "Brazil",
			direction: "down",
			percentage: "16.2%",
		},
		{
			flag: "india",
			money: "6.48k",
			country: "India",
			direction: "up",
			percentage: "12.3%",
		},
		{
			flag: "australia",
			money: "5.12k",
			country: "Australia",
			direction: "down",
			percentage: "11.9%",
		},
		{
			flag: "france",
			money: "4.45k",
			country: "France",
			direction: "up",
			percentage: "16.2%",
		},
		{
			flag: "china",
			money: "3.90k",
			country: "China",
			direction: "up",
			percentage: "14.8%",
		},
	],
	monthlyCampaignState: [
		{
			icon: "email",
			name: "Emails",
			number: "12,346",
			percentage: "0.3%",
		},
		{
			icon: "link",
			name: "Opened",
			number: "8,734",
			percentage: "2.1%",
		},
		{
			icon: "click",
			name: "Clicked",
			number: "967",
			percentage: "1.4%",
		},
		{
			icon: "user",
			name: "Subscribe",
			number: "345",
			percentage: "8.5%",
		},
		{
			icon: "complain",
			name: "Complaints",
			number: "10",
			percentage: "1.5%",
		},
		{
			icon: "signal",
			name: "Unsubscribe",
			number: "86",
			percentage: "0.8%",
		},
	],
};

export const blogData = [
	{
		id: "1",
		blogImg: "blog-1",
		heading: "You should know about Enlink",
		username: "Derry micheal",
		createdAt: "Jan 2, 2019",
		content: "Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear topping. Chupa chups apple pie carrot cake chocolate cake caramels",
		avatar: "thumb-1",
	},
	{
		id: "2",
		blogImg: "blog-5",
		heading: "Enlink Has The Answer",
		username: "Marshall Nichols",
		createdAt: "Jan 6, 2019",
		content: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar",
		avatar: "thumb-2",
	},
	{
		id: "3",
		blogImg: "blog-3",
		heading: "You should kThe Miracle Of Enlink",
		username: "Virgil Gonzales",
		createdAt: "Jan 8, 2019",
		content: "Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.    ",
		avatar: "thumb-3",
	},
	{
		id: "4",
		blogImg: "blog-4",
		heading: "Enlink Has The Answer    ",
		username: " Nicole Wyne",
		createdAt: "Jan 16, 2019",
		content: "European minnow priapumfish mosshead warbonnet shrimpfish bigscale. Cutlassfish porbeagle shark ricefish walking catfish glassfish Black swallower.",
		avatar: "thumb-4",
	},
	{
		id: "5",
		blogImg: "blog-5",
		heading: "oSeven Clarifications On Hand    ",
		username: "Riley Newman",
		createdAt: "Jan 22, 2019",
		content: "Let’s see what Chef Dee got that they don’t want us to eat. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key.    ",
		avatar: "thumb-5",
	},
	{
		id: "6",
		blogImg: "blog-6",
		heading: "You should know about Enlink",
		username: "Derry micheal",
		createdAt: "Jan 2, 2019",
		content: "Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear topping. Chupa chups apple pie carrot cake chocolate cake caramels",
		avatar: "thumb-1",
	},
];

export const crmchart = {
	linechart2: {
		categories: ["16th", "17th", "18th", "19th", "20th", "21st"],
		series: [
			{
				name: "Revenue",
				data: [30, 20, 30, 55, 30, 25],
			},
			{
				name: "Margin",
				data: [20, 30, 50, 45, 10, 55],
			},
		],
	},
	barchart1: {
		categories: ["16th", "17th", "18th", "19th", "20th", "21th", "22th"],
		series: [
			{
				name: "Net Profit",
				data: [10, 20, 30, 3, 23, 43, 45],
			},
		],
	},

	radarchart1: {
		series: [
			{
				name: "Sales",
				data: [65, 52, 58, 24, 103, 35],
			},
			{
				name: "Visits",
				data: [40, 40, 60, 60, 100, 120],
			},
		],
		categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sept"],
	},
	barchart2: {
		series: [
			{
				name: "Inflation",
				data: [5.3, 7.1, 4.0, 10.1, 5.0, 8.6, 9.2, 12.3, 9.4, 3.8, 6.5, 4.2],
			},
		],
	},
	barchart3: {
		series: [
			{
				name: "Inflation",
				data: [5.3, 6.1, 7.0, 8.1, 5.0, 10.6, 7.2, 3.3, 13.4, 9.8, 5.5, 6.2],
			},
		],
	},
  browser :[
    {
      browserImage: "google",
      bname: "Google chrome",
      browserpercentage: "75.2",
    },
    {
      browserImage: "safari",
      bname: "Apple Safari",
      browserpercentage: "45.2",
    },
    {
      browserImage: "internet-explorer",
      bname: "Internet Explorer",
      browserpercentage: "35.2",
    },
    {
      browserImage: "mozilla",
      bname: "Mozilla",
      browserpercentage: "45.32",
    },
    {
      browserImage: "lion",
      bname: "Brave",
      browserpercentage: "35.2",
    },
    {
      browserImage: "safari",
      bname: "Apple Safari",
      browserpercentage: "95.2",
    },
  ],
  project : [
    {
    projectimage: "figma",
      Pname: "Figma",
      projectpercentage: "75.2",
      projecttype:"App Ui Kit",
    },
    {
      projectimage: "science",
      Pname: "React",
      projectpercentage: "95.2",
      projecttype:"Dashboard",
    },
    {
      projectimage: "android",
      Pname: "Android",
      projectpercentage: "85.2",
      projecttype:"App Ui Kit",


    },
    {
      projectimage: "apple-black-logo",
      Pname: "IOS",
      projectpercentage: "90.72",
      projecttype:"Apple",
    },
    {
      projectimage: "file",
      Pname: "PHP",
      projectpercentage: "95.2",
      projecttype:"Backend",

    },
  ]
};




export const eCommerce = {
  popularProducts:[
    {
      itemImage:"iphone",
      itemName:"Apple iPhone 13",
      itemId:"#FXZ-4567",
      itemCost:"$999.29"
    },
    {
      itemImage:"jordan",
      itemName:"Nike Air Jordan",
      itemId:"#FXZ-3456",
      itemCost:"$72.40"
    },
    {
      itemImage:"beats-studio",
      itemName:"Beats Studio 2",
      itemId:"#FXZ-9485",
      itemCost:"$99"
    },
    {
      itemImage:"apple-watch",
      itemName:"Apple Watch Series 7",
      itemId:"#FXZ-2345",
      itemCost:"$249.99"
    },
    {
      itemImage:"amazon-echo-dot",
      itemName:"Amazon Echo Dot",
      itemId:" #FXZ-8959",
      itemCost:"$79.40"
    },
    {
      itemImage:"playstation-console",
      itemName:"Play Station Console",
      itemId:"#FXZ-7892",
      itemCost:"$129.48"
    },
  ],
  salesByOrder:{
    new:[
      {
        sender:{
          name:"Myrtle Ullrich",
          address:"101 Boulder, California(CA), 95959"
        },
        receiver:{
          name:"Barry Schowalter",
          address:"939 Orange, California(CA),92118"
        }
      },
      {
        sender:{
          name:"Veronica Herman",
          address:"162 Windsor, California(CA), 95492"
        },
        receiver:{
          name:"Helen Jacobs",
          address:"487 Sunset, California(CA), 94043"
        }
      }
    ],
    preparing:[
      {
        sender:{
          name:"Barry Schowalter",
          address:"939 Orange, California(CA),92118"
        },
        receiver:{
          name:"Myrtle Ullrich",
          address:"101 Boulder, California(CA), 95959"
        }
      },
      {
        sender:{
          name:"Veronica Herman",
          address:"162 Windsor, California(CA), 95492"
        },
        receiver:{
          name:"Helen Jacobs",
          address:"487 Sunset, California(CA), 94043"
        }
      }
    ],
    shipping:[
      {
        sender:{
          name:"Veronica Herman",
          address:"101 Boulder, California(CA), 95959"
        },
        receiver:{
          name:"Barry Schowalter",
          address:"939 Orange, California(CA),92118"
        }
      },
      {
        sender:{
          name:"Myrtle Ullrich",
          address:"162 Windsor, California(CA), 95492"
        },
        receiver:{
          name:"Helen Jacobs",
          address:"487 Sunset, California(CA), 94043"
        }
      }
    ],
  },
  transactions:[
    {
      icon:"wallet",
      color:"rgb(115,103,240)",
      bgcolor:"rgba(115,103,240,0.3)",
      name:"Wallet",
      detail:"Starbucks",
      amount:"-$75",
      type:"debit"
    },
    {
      icon:"calendar",
      color:"rgb(40, 199, 111)",
      bgcolor:"rgba(40, 199, 111,0.3)",
      name:"Bank Transfer",
      detail:"Add Money",
      amount:"+$480",
      type:"credit"
    },
    {
      icon:"pay-circle",
      color:"rgb(255,0,0)",
      bgcolor:"rgba(255,0,0,0.3)",
      name:"Paypal",
      detail:"Client Payment",
      amount:"+$268",
      type:"credit"
    },
    {
      icon:"credit-card",
      color:"rgb(168, 170, 174)",
      bgcolor:"rgba(168, 170, 174,0.3)",
      name:"Master Card",
      detail:"Ordered iPhone 13",
      amount:"-$699",
      type:"debit"
    },
    {
      icon:"dollar",
      color:"rgb(0, 207, 232)",
      bgcolor:"rgba(0, 207, 232,0.3)",
      name:"Bank Transactions",
      detail:"Refund",
      amount:"+$98",
      type:"credit"
    },
    {
      icon:"pay-circle",
      color:"rgb(255,0,0)",
      bgcolor:"rgba(255,0,0,0.3)",
      name:"Paypal",
      detail:"Client Payment",
      amount:"+$126",
      type:"credit"
    },
    {
      icon:"calendar",
      color:"rgb(40, 199, 111)",
      bgcolor:"rgba(40, 199, 111,0.3)",
      name:"Bank Transfer",
      detail:"Pay Office Rent",
      amount:"-$1290",
      type:"debit"
    },
  ],
  invoiceTable:{
    select1:["6","10","25","50","100","All"],
    select2:["Downloaded","Draft","Sent","Paid","Partial Payment","Past Due"],
    tableData:[
      {
        id:"#5036",
        icon:"pie-chart",
        total:"$3171",
        issuedDate:"2023-08-19",
        color:"rgb(255, 159, 67)"
      },
      {
        id:"#5035",
        icon:"file",
        total:"$4263",
        issuedDate:"2023-08-20",
        color:"rgb(115, 103, 240)"
      },
      {
        id:"#5034",
        icon:"pie-chart",
        total:"$4836",
        issuedDate:"2023-08-10",
        color:"rgb(255, 159, 67)"
      },
      {
        id:"#5033",
        icon:"pound-circle",
        total:"$2869",
        issuedDate:"2023-08-12",
        color:"rgb(40, 199, 111)"
      },
      {
        id:"#5032",
        icon:"exclamation-circle",
        total:"$3171",
        issuedDate:"2023-08-19",
        color:"rgb(234, 84, 85)"
      },
      {
        id:"#5031",
        icon:"pound-circle",
        total:"$3171",
        issuedDate:"2023-08-19",
        color:"rgb(40, 199, 111)"
      }
    ]
  }
}
