import React from 'react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import HamburgerIconString from '../../assets/menu-vertical.png';
import styled from '@emotion/styled';

const HamburgerIcon = styled.img`
  width: 30px;
`;

const ChakraMenu = ({ menu }) => {
  /* const [showProductos, setshowProductos] = useState(false);

  const disappearSubmenu = () => {
    setTimeout(() => setshowProductos(false), 300);
  }; */
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon src={HamburgerIconString} />}
        aria-label="Options"
        variant="outline"
        pos="absolute"
        left="10px"
        top="10px"
      />
      <MenuList w="95vw">
        {menu.map((li) => {
          return (
            <NavLink to={li.linkTo} key={li.name}>
              {li.children ? (
                <MenuGroup title={li.name} fontSize="x-large">
                  <MenuDivider />
                  {li.children.map((subItem) => {
                    return (
                      <NavLink to={subItem.linkTo} key={subItem.name}>
                        <MenuItem fontSize="x-large">{subItem.name}</MenuItem>
                      </NavLink>
                    );
                  })}
                  <MenuDivider />
                </MenuGroup>
              ) : (
                <>
                  <MenuItem fontSize="x-large">{li.name}</MenuItem>
                  <MenuDivider />
                </>
              )}
            </NavLink>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default ChakraMenu;
