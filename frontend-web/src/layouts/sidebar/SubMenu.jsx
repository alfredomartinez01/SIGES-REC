import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-family: 'Acme', sans-serif;
  font-size: 16px;
  font-weight: lighter;
  &:hover {
    background: #5B758A;
    color: #5AAAE3;
    border-left: 4px solid white;
    cursor: pointer;
  }
`;

const ItemMenu = styled.div`
  display: flex;
  align-items: center;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SidebarIcon = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownLink = styled(Link)`
  background: #1E3832;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-family: 'Acme', sans-serif;
  font-size: 18px;
  font-weight: 500;
  &:hover {
    background: #2D4B44;
    color: white;
    border-left: 4px solid white;
    cursor: pointer;
  }
`;

const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={!item.subNav && item.path} onClick={item.subNav ? showSubnav : showSidebar}>
        <ItemMenu>
          <SidebarIcon>{item.icon}</SidebarIcon>
          <SidebarLabel>{item.title}</SidebarLabel>
        </ItemMenu>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}  onClick={showSidebar}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;