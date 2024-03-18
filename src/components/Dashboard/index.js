import { IoIosSearch } from "react-icons/io";
import ChartComponent from '../ChartComponent'
import PieChartComponent from '../PieChartComponent'
import {
  MainDashboardContainer,
  NavigationSideBar,
  NavigationTopContainer,
  NavigationHeading,
  NavigationListContainer,
  NavigationItem,
  NavigationIcon,
  NavigationMenu,
  NavigationBottomContainer,
  NavigationHelp,
  NavigationContact,
  DashboardContainer,
  DashboardHeader,
  DashboardHeading,
  ProfileContainer,
  InputContainer,
  Input,
  AlertBell,
  ProfileImage,
  DashboardListContainer,
  DashboardItem,
  ItemImage,
  ItemTitle,
  ItemDollar
} from "./styledComponents";


const Dashboard = () => {
  return (
    <MainDashboardContainer>
      <NavigationSideBar>
        <NavigationTopContainer>
          <NavigationHeading>Board.</NavigationHeading>
          <NavigationListContainer>
            <NavigationItem>
              <NavigationIcon src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727413/orwxs5lhk6sn1jvjfmru.png" alt="dashboard"/>
              <NavigationMenu>Dashboard</NavigationMenu>
            </NavigationItem>
            <NavigationItem>
              <NavigationIcon src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727412/nnrdtzlpcfe9n0s9ilgr.png" alt="transaction"/>
              <NavigationMenu>Transactions</NavigationMenu>
            </NavigationItem>
            <NavigationItem>
              <NavigationIcon src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727412/qw93fwq0qefqhkopaofx.png" alt="schedules"/>
              <NavigationMenu>Schedules</NavigationMenu>
            </NavigationItem>
            <NavigationItem>
              <NavigationIcon src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727412/swamgjapf4yegy71okri.png" alt="user"/>
              <NavigationMenu>Users</NavigationMenu>
            </NavigationItem>
            <NavigationItem>
              <NavigationIcon src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727413/sgmsrcezm7okn6xtgxlg.png" alt="setting"/>
              <NavigationMenu>Settings</NavigationMenu>
            </NavigationItem>
          </NavigationListContainer>
        </NavigationTopContainer>
        <NavigationBottomContainer>
          <NavigationHelp>Help</NavigationHelp>
          <NavigationContact>Contact Us</NavigationContact>
        </NavigationBottomContainer>
      </NavigationSideBar>
      <DashboardContainer>
        <DashboardHeader>
          <DashboardHeading>Dashboard</DashboardHeading>
          <ProfileContainer>
            <InputContainer>
              <Input type="search" placeholder="Search" />
              <IoIosSearch size={20}/>
            </InputContainer>
            <AlertBell src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727412/qhvapmnmdwroodycldea.png" alt="alertbell"/>
            <ProfileImage src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727413/ftrhz4m9sxzvt7vzqjh7.png" alt="profile" />
          </ProfileContainer>
        </DashboardHeader>
        <DashboardListContainer>
          <DashboardItem bgColor="#DDEFE0">
            <ItemImage src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727413/bi8cpkyqwxlfdusa1vgh.png" alt="revenues" />
            <ItemTitle>Total Revenues</ItemTitle>
            <ItemDollar>$2,129,430</ItemDollar>
          </DashboardItem>
          <DashboardItem bgColor="#F4ECDD">
            <ItemImage src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727413/lqdbvabvkk5pmvslul1j.png" alt="Transaction" />
            <ItemTitle>Total Transactions</ItemTitle>
            <ItemDollar>1,520</ItemDollar>
          </DashboardItem>
          <DashboardItem bgColor="#EFDADA">
            <ItemImage src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727412/sobuamoec6ckjc1k2ylm.png" alt="like" />
            <ItemTitle>Total Likes</ItemTitle>
            <ItemDollar>9,721</ItemDollar>
          </DashboardItem>
          <DashboardItem bgColor="#DEE0EF">
            <ItemImage src="https://res.cloudinary.com/dhwz560kk/image/upload/v1710727412/vlm8acy8wntchw0bs3ak.png" alt="user" />
            <ItemTitle>Total Users</ItemTitle>
            <ItemDollar>892</ItemDollar>
          </DashboardItem>
        </DashboardListContainer>
        <ChartComponent/>
        <PieChartComponent/>
      </DashboardContainer>
    </MainDashboardContainer>
  );
};

export default Dashboard;
