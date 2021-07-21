import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarWrapper,
    SidebarRoute 
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                       What we do
                    </SidebarLink>
                    <SidebarLink to='whoweare' onClick={toggle}>
                       The Mentors
                    </SidebarLink>
                    <SidebarLink to='sheprog' onClick={toggle}>
                       SheCanCode Program
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                       Courses
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/contact'>Register</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
