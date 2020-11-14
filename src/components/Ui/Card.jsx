import {
  CardContainer,
  CardImg,
  CardSubheader,
  CardTitle,
  CardInfo,
} from "../../style/StyledComponents";
import { getTimeAgo } from "../../utils/time";

export default function Card({ data, onClick }) {
  const { title, company_logo, location, company, created_at, type } = data;

  return (
    <CardContainer
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.15, ease: [0.43, 0.54, 0.84, 1] },
      }}>
      <CardImg style={{ backgroundImage: `url(${company_logo})  ` }} />
      <CardSubheader>
        {getTimeAgo(created_at)} * {type}
      </CardSubheader>
      <CardTitle> {title} </CardTitle>
      <CardSubheader>{company}</CardSubheader>
      <CardInfo>{location}</CardInfo>
    </CardContainer>
  );
}
