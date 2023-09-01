import { StatLabel, StatList, StatListItem, StatPercent, StatSection, StatTitle } from "./Statistics.styled";
import {getRandomHexColor} from 'js/randomColor'

export const Statistics = ({ title, stats }) => {
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
