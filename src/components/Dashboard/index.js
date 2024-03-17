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
              <NavigationIcon></NavigationIcon>
              <NavigationMenu>Dashboard</NavigationMenu>
            </NavigationItem>
            <NavigationItem>
              <NavigationIcon></NavigationIcon>
              <NavigationMenu>Transactions</NavigationMenu>
            </NavigationItem>
            <NavigationItem>
              <NavigationIcon></NavigationIcon>
              <NavigationMenu>Schedules</NavigationMenu>
            </NavigationItem>
            <NavigationItem>
              <NavigationIcon></NavigationIcon>
              <NavigationMenu>Users</NavigationMenu>
            </NavigationItem>
            <NavigationItem>
              <NavigationIcon></NavigationIcon>
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
              {/* Icon */}
            </InputContainer>
            <AlertBell></AlertBell>
            <ProfileImage src="" />
          </ProfileContainer>
        </DashboardHeader>
        <DashboardListContainer>
          <DashboardItem bgColor="#DDEFE0">
            <ItemImage src="" />
            <ItemTitle>Total Revenues</ItemTitle>
            <ItemDollar>$2,129,430</ItemDollar>
          </DashboardItem>
          <DashboardItem bgColor="#F4ECDD">
            <ItemImage src="" />
            <ItemTitle>Total Transactions</ItemTitle>
            <ItemDollar>1,520</ItemDollar>
          </DashboardItem>
          <DashboardItem bgColor="#EFDADA">
            <ItemImage src="" />
            <ItemTitle>Total Likes</ItemTitle>
            <ItemDollar>9,721</ItemDollar>
          </DashboardItem>
          <DashboardItem bgColor="#DEE0EF">
            <ItemImage src="" />
            <ItemTitle>Total Users</ItemTitle>
            <ItemDollar>892</ItemDollar>
          </DashboardItem>
        </DashboardListContainer>
      </DashboardContainer>
    </MainDashboardContainer>
  );
};

export default Dashboard;
