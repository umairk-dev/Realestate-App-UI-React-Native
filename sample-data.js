const { exp } = require("react-native-reanimated");

const DATA = [
    {
        id :"1",
        image:require("./assets/image1.jpg"),
        title:"3 Bedroom House",
        location:"126 Canadian Lakes",
        rating:"1",
        price:"10",
        price:"350",
        unit:"per week",
        currency:"$",
        bed:4,
        bath:2,
        car:2,
        isSelected:false,
        agent:{
            image:require("./assets/dp.jpg"),
            name:"Umair"
        }
    },
    {
        id:"2",
        image:require("./assets/image2.jpg"),
        title:"3 Bedroom House",
        location:"126 Canadian Lakes",
        rating:"1",
        price:"260",
        unit:"per week",
        currency:"$",
        bed:3,
        bath:2,
        car:1,
        isSelected:true,
        agent:{
            image:require("./assets/dp.jpg"),
            name:"Umair"
        }
    }
];

export default DATA;