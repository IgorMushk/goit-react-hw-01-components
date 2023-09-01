import { StatLabel, StatList, StatListItem, StatPercent, StatSection, StatTitle } from "./Statistics.styled";
import {getRandomHexColor} from 'js/randomColor'

export const Statistics = ({ title, stats }) => {
  // console.log('title', title);
  //console.log('stats', stats);
  return (
    <StatSection >
      { title && <StatTitle >{title}</StatTitle>}

      <StatList > 
        { stats.map(({id, label, percentage}) =>(
            <StatListItem key={id} color={getRandomHexColor()}>
            <StatLabel >{label}</StatLabel>
            <StatPercent >{percentage}%</StatPercent>
          </StatListItem>
        ))}
      </StatList>
    </StatSection>
  );
};

//</section><section class="statistics">
//  <h2 class="title">Upload stats</h2>
//
//  <ul class="stat-list">
//    <li class="item">
//      <span class="label">.docx</span>
//      <span class="percentage">4%</span>
//    </li>
//    <li class="item">
//      <span class="label">.mp3</span>
//      <span class="percentage">14%</span>
//    </li>
//    <li class="item">
//      <span class="label">.pdf</span>
//      <span class="percentage">41%</span>
//    </li>
//    <li class="item">
//      <span class="label">.mp4</span>
//      <span class="percentage">12%</span>
//    </li>
//  </ul>
//</section>

// [
//     { "id": "id-1", "label": ".docx", "percentage": 22 },
//     { "id": "id-2", "label": ".pdf", "percentage": 4 },
//     { "id": "id-3", "label": ".mp3", "percentage": 17 },
//     { "id": "id-4", "label": ".psd", "percentage": 47 },
//     { "id": "id-5", "label": ".pdf", "percentage": 10 }
//   ]

// export const Statistics = ({ title, stats }) => {
//     // console.log('title', title);
//     // console.log('stats', stats);
//     return (
//       <StatSection >
//         { title && <StatTitle >{title}</StatTitle>}
  
//         <StatList >
//           <StatListItem color={getRandomHexColor()}>
//             <StatLabel >.docx</StatLabel>
//             <StatPercent >4%</StatPercent>
//           </StatListItem>
//           <StatListItem color={getRandomHexColor()}>
//             <StatLabel >.mp3</StatLabel>
//             <StatPercent >14%</StatPercent>
//           </StatListItem>
//           <StatListItem color={getRandomHexColor()}>
//             <StatLabel >.pdf</StatLabel>
//             <StatPercent >41%</StatPercent>
//           </StatListItem>
//           <StatListItem color={getRandomHexColor()}>
//             <StatLabel >.mp4</StatLabel>
//             <StatPercent >12%</StatPercent>
//           </StatListItem>
//         </StatList>
//       </StatSection>
//     );
//   };