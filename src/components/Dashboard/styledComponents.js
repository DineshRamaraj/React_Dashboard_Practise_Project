import styled from "styled-components";

export const MainDashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const NavigationSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0px 30px 30px;
  min-height: 100vh;
  background-color: #000000;
  width: 30%;
  max-width: 250px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const NavigationTopContainer = styled.div``;

export const NavigationHeading = styled.h1`
  font-size: 28px;
  font-family: "Roboto";
  color: #ffffff;
  padding-left: 40px;
`;

export const NavigationListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const NavigationItem = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const NavigationIcon = styled.img`
  margin-right: 20px;
  width: 25px;
  height: 25px;
`;

export const NavigationMenu = styled.p`
  font-size: 18px;
  font-family: "Roboto";
  color: #ffffff;
`;

export const NavigationBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavigationHelp = styled.p`
  font-size: 16px;
  font-family: "Roboto";
  color: #ffffff;
`;

export const NavigationContact = styled.p`
  font-size: 16px;
  font-family: "Roboto";
  color: #ffffff;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  background-color: aliceblue;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DashboardHeading = styled.h1`
  font-family: "Roboto";
  font-size: 24px;
  color: #000000;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 14px;
  font-family: "Roboto";
  color: #000000;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const AlertBell = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 30px;
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 30px;
`;

export const DashboardListContainer = styled.ul`
  display: flex;
  padding-left: 0;
  list-style-type: none;
`;

export const DashboardItem = styled.li`
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  padding: 10px 30px;
  width: 25%;
  margin: 10px;
`;

export const ItemImage = styled.img`
  align-self: flex-end;
  width: 25px;
  height: 20px;
`;

export const ItemTitle = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  color: #000000;
`;

export const ItemDollar = styled.h1`
  font-family: "Roboto";
  font-size: 24px;
  color: #000000;
  margin-top: 0;
`;
