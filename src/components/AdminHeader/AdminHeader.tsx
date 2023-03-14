import React, {useState} from "react";
import {HiUserCircle} from 'react-icons/hi';
import {darken} from "polished";
import {CaretDownOutlined} from '@ant-design/icons';
// @ts-ignore
import IconGuardUrl, {ReactComponent as IconGuard} from './guard.svg'
// @ts-ignore
import IconHistoryUrl, {ReactComponent as IconHistory} from './history.svg'
import cookies from 'js-cookie';

import {Button, Modal, Popover} from "antd";

const confirm = Modal.confirm;

import {TAdminHeader, TMenu, TSubMenu} from './type';
import {
  AdminHeaderS,
  GuardIconS,
  HistoryIconS,
  MenuItem,
  AvatarSectionS,
  StyledCaret,
  SubMenuItem,
  Wrapper,
  WrapperSubMenu,
  ProfileSectionS, AvatarS, MenuProfile,
} from './styled.header';

const getSelectedItem = (menu: TMenu[]): TSubMenu | null => {
  const submenuItems = menu.filter((el) => el.submenu);
  const items: TSubMenu[] = [];
  submenuItems.forEach((menu) => {
    menu.submenu?.forEach((submenu) => {
      items.push(submenu)
    })
  })
  const findItem = items.find((el) => el.url === window.location.pathname);
  if (findItem) {
    return findItem;
  } else {
    return null;
  }
}

const AdminHeader = ({
                       logo,
                       bgColor,
                       user,
                       onMenuClick,
                       menu,
                       historyUrl, settingsUrl
                     }: TAdminHeader) => {

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const [selectedItem, setSelectedItem] = useState<TSubMenu | null>(getSelectedItem(menu));

  const [activeElement, setElement] = useState<any>(null);

  const controlClick = (url: string): void => {
    setElement(null);
    setSelectedItem(null);
    onMenuClick(url);
  }

  const submenuClick = (url: string, rootUrl: string) => {
    const item = menu.find((el) => el.url === rootUrl);
    if (item) {
      setElement(item);
      const findElem = item.submenu?.find((el) => el.url === url);
      setSelectedItem(findElem || null);
      onMenuClick(url);
    }
  }

  const logout = () => confirm({
    title: 'Are you sure want to logout?',
    okText: 'Yes',
    cancelText: 'No',
    onOk() {
      cookies.remove('jwt')
      window.location.pathname = '/login';
    }
  })
  const content = (
    <MenuProfile>
      <li key="0" className={`dropdown-profile-item`}>
        <p className={'title'}>
          ADMIN ROLE
        </p>
        <p className={'text'}>
          {user?.role}
        </p>
      </li>
      <li key="1" className={`dropdown-profile-item`}>
        <p className={'title'}>
          ACCOUNT
        </p>
        <p className={'text'}>
          {user?.email}
        </p>
      </li>

      <li key="2" className={`dropdown-profile-item`} onClick={() => logout()}>
        <Button>Log out</Button>
      </li>
    </MenuProfile>
  );

  return (
    <AdminHeaderS bgColor={bgColor}>
      <div>
        <img className="logo" src={logo} alt="logo"/>
        {Boolean(menu.length) && <div className="menu">
          {menu.map((item, index) =>
            <MenuItem
              key={index}
              onClick={() => {
                !Boolean(item.submenu) ? controlClick(item.url) : undefined;
              }}
              active={window.location.pathname.startsWith(item.url)}
              activeColor={darken(0.1, bgColor)}
              onMouseEnter={() => setActiveIdx(index)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {activeElement?.url === item.url ? (
                <>
                  {selectedItem ? (
                    `${item.title} / ${selectedItem.title}`
                  ) : (
                    item.title
                  )}
                </>
              ) : (
                item.title
              )}
              {item.submenu && (
                <>
                  <StyledCaret active={activeIdx === index}>
                    <CaretDownOutlined/>
                  </StyledCaret>
                  <Wrapper style={{display: activeIdx === index ? 'inline-block' : 'none'}}>
                    <WrapperSubMenu
                      style={{backgroundColor: bgColor}}>
                      {item.submenu.map((el, idx) => (
                        <SubMenuItem
                          key={idx}
                          activeColor={darken(0.1, bgColor)}
                          active={window.location.pathname.startsWith(el.url)}
                          onClick={() => submenuClick(el.url, item.url)}
                        >
                          {el.title}
                        </SubMenuItem>
                      ))}
                    </WrapperSubMenu>
                  </Wrapper>
                </>
              )}
            </MenuItem>
          )}
        </div>}
      </div>
      <ProfileSectionS>
        {historyUrl && <a target={'_blank'} href={historyUrl}><HistoryIconS src={IconHistoryUrl}/></a>}
        {settingsUrl && <a target={'_blank'} href={settingsUrl}><GuardIconS src={IconGuardUrl}/></a>}
        <Popover content={content}
                 trigger="click"
                 placement="bottomRight"
        >
          <AvatarSectionS>
            {user.photoUrl
              ?<AvatarS src={user.photoUrl}/>
              : <HiUserCircle viewBox="0 0 20 20" className={'profile-icon'}/>
            }
            <p className={'name'}>
              {user.name}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path
                d="M11.7512 6.08459L8.5 9.32876L5.24875 6.08459L4.25 7.08334L8.5 11.3333L12.75 7.08334L11.7512 6.08459Z"
                fill="white"/>
            </svg>
          </AvatarSectionS>
        </Popover>
      </ProfileSectionS>

    </AdminHeaderS>
  )
}

export default AdminHeader;
