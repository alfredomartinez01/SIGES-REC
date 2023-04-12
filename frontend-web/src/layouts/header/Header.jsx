import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  left: 25%;
  position: fixed;
  height: 100vh;
`;

const Nav = styled.div`
    border-bottom: 1px solid #D7D7DB;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Header = () => {

    const toogleMenuBtn = () => {
        var windowSize = document.documentElement.clientWidth;

        if (windowSize > 767)
            document.querySelector(".hamburger-icon").classList.toggle('open');

        //For collapse vertical menu
        if (document.documentElement.getAttribute('data-layout') === "vertical") {
            if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', '') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
            } else if (windowSize > 1025) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
            } else if (windowSize <= 767) {
                document.body.classList.add('vertical-sidebar-enable');
                document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
        }
    };

    return (
        <Container>
            <Nav>
                <NavIcon to='#'>
                    <RiIcons.RiBarChartHorizontalLine />
                </NavIcon>

            </Nav>
            {/* <button
                onClick={toogleMenuBtn}
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none"
                id="topnav-hamburger-icon">
                <span className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button> */}
            <div>Header</div>
        </Container>
        
    )
}

export default Header