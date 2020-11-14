import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled.h2`
  color: #2b2b2b;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  margin: 0 2rem;
`;

export const SubTitle = styled.p`
  color: #747474;
  margin: 0 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const Button = styled.div`
  padding: 0.8rem 1.5rem;
  text-align: center;
  border-radius: 8px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#5746f1;")};
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`;

// --------------------------------- Card
export const CardContainer = styled(motion.div)`
  width: 260px;
  height: 190px;
  background-color: white;
  padding: 1.2rem 2rem;
  position: relative;
  border-radius: 8px;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  cursor: pointer;
`;

export const CardImg = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -20px;
  left: 1rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  z-index: 0;
  border-radius: 8px;
`;

export const CardSubheader = styled.p`
  color: #747474;
`;

export const CardTitle = styled.h3`
  color: #2b2b2b;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const CardInfo = styled.p`
  color: #5746f1;
  font-weight: bold;
`;

//  ----------------------------------- Jobs Details

export const JobsContainer = styled.div`
  width: 90vw;
  max-width: 1500px;
  padding: 2rem 1rem;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export const JobDetailContainer = styled(motion.div)`
  width: 90vw;
  max-width: 1000px;
  width: 90vw;
  background-color: white;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  margin: -30px auto 30px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
`;

export const JobDetailHead = styled(motion.div)`
  height: 90px;
  display: grid;
  grid-template-columns: 120px 3fr 1fr;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  z-index: 2;
  position: relative;
`;

export const JobHeadImage = styled.div`
  width: 90px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

// ----------------------------------- Search
export const SearchContainer = styled.form`
  display: grid;
  max-width: 1500px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  margin: -40px auto 0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.8);
  border: none;
  outline: none;
  font-size: 0.9rem;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 600;
  }
`;
