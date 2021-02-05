import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuListItem = styled.li`
  list-style: none;
`;

export const MenuListItemAnchor = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 40px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #215ede;
  font-size: 14px;
  border: 0;
  color: #fff;

  svg {
    margin-left: 5px;
  }
`;
