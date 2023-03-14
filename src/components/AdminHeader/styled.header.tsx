import styled from 'styled-components'

export const HistoryIconS = styled.img`
margin-right:28px;
`
export const GuardIconS = styled.img`
margin-right:27px;
`

export const ProfileSectionS = styled.div`
display:flex
`

export  const AvatarS=styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    text-decoration: none;
`
export const AvatarSectionS = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-white);
  font-size: 2.8rem;
  cursor: pointer;

  svg {
    &.profile-icon {
      height: 25px;
      width: 25px;
    }
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin-right: 18px;
  }

  p {
    &.name {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      padding-left: 5px;
      padding-right: 8px;
      margin-bottom: 0;
    }
  }
`

export const MenuProfile = styled.ul`
  list-style: none;
  padding: 0 8px 0 8px;

  li.dropdown-profile-item {
  &:first-child {
      padding-top: 18px;
    }

    padding: 6px 0;

    button {
      border-radius: 5px;
    }

  .title {
      padding-top: 6px;
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 14px;
      color: var(--color-gray);
    }

  .text {
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: var(--color-black);
    }
  }
  `
export const AdminHeaderS = styled.header<{ bgColor: string }>`
  position: relative;
  background-color:${props => props.bgColor};
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 2;
  font-size: 14px;

  h1 {
    color: #fff;
    font-size: 22px;
    margin-left: 5px;
    margin-top: 2px
  }

  & > div:first-child {
    display: flex;
    align-items: center;
  }

  .menu {
    display: flex;
    margin-left: 63px;

    &-item {
      cursor: pointer;
      color: #fff;
      margin-right: 6px;
      padding: 5px 20px;
      font-weight: 600;
      border-radius: 3px;

      &.active, &:hover {
        color: #fff;
      }
    }
  }
`
export const MenuItem = styled.div<any>`
  position: relative;
  cursor: pointer;
  color: #fff;
  margin-right: 6px;
  padding: 5px 20px;
  font-weight: 600;
  border-radius: 3px;

  &:hover {
    background-color: ${props => props.activeColor};
  }

  ${props => props.active && `background-color: ${props.activeColor};`}
`

export const Wrapper = styled.div<any>`
  position: absolute;
  top: 25px;
  left: 0;
  padding-top: 8px;
`

export const WrapperSubMenu = styled.div<any>`
  padding: 10px;
  box-shadow: 0 9px 10px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const SubMenuItem = styled.div<any>`
  cursor: pointer;
  width: auto;
  color: #fff;
  white-space: nowrap;
  padding: 5px 20px;
  font-weight: 600;
  border-radius: 3px;

  &:hover {
    background-color: ${props => props.activeColor};
  }

  ${props => props.active && `background-color: ${props.activeColor};`}
`

export const StyledCaret = styled.span<any>`
  > span {
    transition: transform 0.5s 0s ease;
    transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
  }

  margin-left: 5px;
`