// src/App.js
import React from 'react';
import './App.css';
import Activity from './components/Activity';

import in1 from './assets/in1.jpg';
import in2 from './assets/in2.jpg';
import in3 from './assets/in3.jpg';
import tech1 from './assets/tech1.jpg';
import tech2 from './assets/tech2.jpg';
import tech3 from './assets/tech3.jpg';
import Navbar from './components/NavBar';

function App() {
  const activities = [
    {
      title: "Bingo Night 2024",
      date: "2024-09-21",
      description: "The Leo Club of Nakuru hosted its annual Bingo Night on 21st September 2024, dedicated to raising funds for important charitable initiatives. This year, our primary focus was supporting the Lions Feeding Programme. Through this event, we successfully generated approximately $874.67 in proceeds, along with an additional $109.39 in generous donations. With over 170 tickets sold and a remarkable turnout, the Hawaiian-themed evening was a resounding success. The atmosphere was filled with excitement and enthusiasm, and we take great pride in knowing our contributions will provide nourishment for children & families in need, bringing smiles to their faces.",
      images: [img1, img2],
    },{
      title: "Installation of New Board",
      date: "2024-09-28",
      description: "On Saturday, 26th September 2024, Alpha Leo Club of Nakuru, together with Alpha Shah Lalji Leo Club and Omega Egerton Leo Club, held a grand installation ceremony for the incoming presidents and board members. This special occasion brought together enthusiastic members, dignitaries, and community supporters to witness the leadership transition. It was a day to honor outgoing leaders for their remarkable service and to celebrate the fresh spirit, vision, and dedication that the new board brings. Their commitment to making a lasting impact in the community is truly inspiring, and the road ahead promises even greater achievements.",
      images: [in1, in2, in3],
    },
    {
      title: "Tech Challenge Bake Sale",
      date: "2024-10-05",
      description: "On the 5th and 6th of October 2024, Leo club of nakuru hosted a bake sale in the event of tech challenge. We sold over 650 cupcakes and over 180 cups of juice, raising over 46,000ksh",
      images: [tech1, tech2, tech3],
    },
    {
      title: "Lions Feeding Program",
      date: "2024-10-26",
      description: "On the 26th October 2024, the District Governor together with Alpha Leo Club of Nakuru Alpha Shah Lalji Leo Club and Omega Egerton Leo Club joined in serving at the Lions Feeding Programme",
      images: [img5, img6],
    },
    {
      title: "Opening of New Labs",
      date: "2024-10-26",
      description: "On the 26th October 2024, the District Governor together with Alpha Leo Club of Nakuru Alpha Shah Lalji Leo Club and Omega Egerton Leo Club joined in opening of the new labs in the Lions Primary school, the two new labs opened were the New Library and Science Lab",
      images: [img7, img8],
    },
    {
      title: "Tree Planting",
      date: "2024-10-26",
      description: "On the 26th October 2024, the District Governor together with Alpha Leo Club of Nakuru Alpha Shah Lalji Leo Club and Omega Egerton Leo Club joined in tree planting at the Nakuru Athletics Club.",
      images: [img9, img10],
    },
    {
      title: "Halloween Night 2024",
      date: "2024-11-09",
      description: "The Leo Club of Nakuru successfully hosted a thrilling Halloween Party on 9th November 2024. The event drew significant participation, with over 90 tickets sold, generating a total of over 60,000 Ksh. The evening was filled with exciting activities, including games, music, and dance, creating a lively and memorable atmosphere for all attendees. This event not only fostered camaraderie among members and guests but also reinforced our commitment to creating engaging and impactful community initiatives. Thank you to everyone who contributed to making the Halloween Party a success!",
      images: [img11, img12],
    },
    {
      title: "Diabetes Awareness Talk",
      date: "2024-11-15",
      description: "The Leo Club of Nakuru, in collaboration with esteemed health professionals, hosted a Diabetes Awareness Talk on 15th November 2024 at Melvin Jones Lions Academy. The event aimed to shed light on the impact of diabetes on young people and provide practical strategies for managing this condition effectively.",
      images: [img13, img14],
    },
    {
      title: "Secret Santa",
      date: "2024-12-03",
      description: "The Leo Club of Nakuru hosted the much-awaited Secret Santa Celebration, and it turned out to be an incredible success! Members gathered to exchange gifts in the spirit of fun, laughter, and festive cheer.",
      images: [img15, img16],
    },
    {
      title: "Tree and Flower Planting",
      date: "2025-01-27",
      description: "Guided by our annual motto, 'Preserve Today for Tomorrow,' the Leo Club of Nakuru took a meaningful step towards a sustainable future by planting 13 trees and flowers at the Melvin Hallway. This initiative symbolizes our commitment to environmental conservation and the importance of preserving nature for generations to come. Each tree planted today is a promise for cleaner air, a healthier ecosystem, and a greener tomorrow. Together, we can make a lasting impact—one tree at a time!",
      images: [img19, img20],
    },
    {
      title: "Leadership Training",
      date: "2025-02-09",
      description: "On 9th February, we had an incredible Leo Leadership Training organized by the Lions Club of Nakuru in collaboration with the Leo Club of Nakuru, Leo Club of Shah Lalji, and Egerton Leo Club. The session brought together over 50 enthusiastic Leos, eager to enhance their leadership skills and deepen their understanding of the Lions movement.",
      images: [img27, img28],
    },
    {
      title: "Treasure Hunt",
      date: "2025-02-14",
      description: "Treasure Hunt 2025 was a fun-filled, interactive event organized at Melvin Jones Lions Academy on Valentine's Day. Designed to encourage teamwork, critical thinking, and adventure, the event saw energetic participation and vibrant enthusiasm from all involved.",
      images: [img29, img30],
    },
    {
      title: "Visit to a Ngala School",
      date: "2025-02-15",
      description: "As part of our ongoing commitment to community service, Leo Club of Nakuru visited Ngala School for the Deaf for a meaningful outreach program. This event aimed to support the students both environmentally and personally through tree planting and donations, This visit not only brought smiles and support to the students of Ngala School for the Deaf but also helped raise awareness on issues of hygiene, sustainability, and inclusivity. It was a heartwarming experience that strengthened bonds and inspired continued efforts in community outreach.",
      images: [img31, img32],
    },
    {
      title: "Visit to Haven of Hope School",
      date: "2025-02-22",
      description: "Leo Club of Nakuru conducted a heartwarming outreach visit to Haven of Hope School, focusing on spreading joy, support, and kindness among the children. The visit left a lasting impression on both the children and volunteers. It was a day full of smiles, bonding, and meaningful interactions that reminded everyone of the power of compassion and community.",
      images: [img33, img34],
    },
    {
      title: "Visit to Jamie Children Home",
      date: "2025-03-02",
      description: "We went to Jamie Children home from the Leo Leadership camp and donated food items",
      images: [img35, img36],
    }
  ];

  return (
    <div> 
      <Navbar />  
      <div className="App">
      <h1 className="page-title">Leo Club Activities</h1>
      {activities.map((activity, index) => (
        <Activity
          key={index}
          title={activity.title}
          title2={activity.date}
          description={activity.description}
          images={activity.images}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
