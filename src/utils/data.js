import banner from '../LastOut/bannerr.jpg'
import graph from '../LastOut/graph.png'
import trade from '../LastOut/trading.jpeg'
export const slidesData = [
    {
      image: banner,
      time: '3h 45m',
      name: 'Godzilla',
      subtext: 'Eastern Time Zone',
    },
    {
      image: banner,
      time: '5h 20m',
      name: 'King Kong',
      subtext: 'Pacific Time Zone',
    },
    {
      image: banner,
      time: '2h 15m',
      name: 'Mothra',
      subtext: 'Mountain Time Zone',
    },
    {
      image: banner,
      time: '6h 30m',
      name: 'Mechagodzilla',
      subtext: 'Central Time Zone',
    },
  ];
  
  export const tradingData = [
    {
      image: graph,
      img2: trade,
      tradeName: 'Trade in the USA',
      tradeCode: 'TSRF USA',
      price: '$5.03',
      changePercentage: '13%',
      changeDirection: 'up', // for visual direction of increase/decrease
    },
    {
      image: graph,
      img2: trade,
      tradeName: 'Trade in Europe',
      tradeCode: 'TSRF EU',
      price: '$4.98',
      changePercentage: '8%',
      changeDirection: 'down', // for visual direction of increase/decrease
    },
  ];

  export const pieData = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];