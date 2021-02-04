import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuListItem = styled.li`
  list-style: none;
`;

export const MenuListItemAnchor = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 40px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;

  svg {
    margin-left: 5px;
  }
`;
