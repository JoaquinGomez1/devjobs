import { useContext, useEffect } from "react";
import { SelectedJobProvider } from "../context/SelectedJob";
import {
  JobDetailContainer,
  Title,
  SubTitle,
  JobHeadImage,
  JobDetailHead,
  Button,
  CardInfo,
} from "../../style/StyledComponents";
import { getTimeAgo } from "../../utils/time";

export default function JobDetail() {
  const { selectedJob } = useContext(SelectedJobProvider);
  const {
    title,
    company_logo,
    location,
    company,
    created_at,
    type,
    url,
    company_url,
    description,
  } = selectedJob;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <JobDetailContainer>
        <JobDetailHead>
          <JobHeadImage style={{ backgroundImage: `url(${company_logo})  ` }} />
          <div>
            <Title> {company} </Title>
            <SubTitle>{company_url}</SubTitle>
          </div>

          <a href={company_url} target='_blank' rel='noreferrer'>
            <Button bgColor='aliceblue' color='#5746f1;'>
              Company Website
            </Button>
          </a>
        </JobDetailHead>
      </JobDetailContainer>

      <JobDetailContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ marginTop: "50px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <SubTitle>
              {getTimeAgo(created_at)} * {type}
            </SubTitle>
            <Title> {title} </Title>
            <SubTitle>{company}</SubTitle>
            <CardInfo style={{ margin: "0 2rem" }}>{location}</CardInfo>
          </div>

          <a
            href={url}
            target='_blank'
            rel='noreferrer'
            style={{ margin: "auto 0" }}>
            <Button whileHover={{ scale: 1.08 }}>Apply Now</Button>
          </a>
        </div>

        <div
          style={{ margin: "40px 2rem" }}
          dangerouslySetInnerHTML={{ __html: description }}></div>
      </JobDetailContainer>
    </>
  );
}
