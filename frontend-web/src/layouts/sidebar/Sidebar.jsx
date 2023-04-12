import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const ContainerSidebar = styled.div`
  background: transparent;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;

  @media (max-width: 100%) {
    width: 150px;
  }
`;

const SidebarNav = styled.div`
  background: #394855;
  height: 100%;
  width: 100%;
  padding-top: 30px;
  left: 0;
`;

const TitleSidebar = styled.p`
  font-family: 'Acme', sans-serif;
  color: #FFFFFF;
  margin-bottom: 0;
  padding-left: 15px;
`;

const LogoSidebar = styled.p`
  font-family: 'Acme', sans-serif;
  color: #FFFFFF;
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 20px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const auth = true
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <ContainerSidebar>
          
          <SidebarNav sidebar={sidebar}>
          <LogoSidebar>
            SIGES - REC
          </LogoSidebar>
          <TitleSidebar>
            MEN&Uacute;
          </TitleSidebar>
            <SidebarWrap>
              {
                auth ?
                  (
                    SidebarData.map((item, index) =>
                      <SubMenu item={item} key={index} showSidebar={showSidebar} />
                    )
                  )
                  : <SubMenu item={SidebarData[SidebarData.length - 2]} /> // Si no está autenticado, mostramos el manual de usuario
              }
            </SidebarWrap>
          </SidebarNav>
        </ContainerSidebar>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;