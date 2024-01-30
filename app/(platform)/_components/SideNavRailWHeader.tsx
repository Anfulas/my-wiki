import { Fade, Notification, Search, Switcher as SwitcherIcon, UserMultiple, Sprout, Task,TaskAdd,TaskAssetView, Dashboard } from '@carbon/icons-react';
import {
  Header, HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SideNavLink, SideNavMenu, SideNavMenuItem,
  SkipToContent
} from "@carbon/react";
import { AppLink } from './AppLink';

export const SideNavRailWHeader = (args: any) => <HeaderContainer render={({
  isSideNavExpanded,
  onClickSideNavExpand
}) => <>
    <Header aria-label="IBM Platform Name">
      <SkipToContent />
      <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
          <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={action('search click')}>
          <Search size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={action('notification click')}>
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={action('app-switcher click')} tooltipAlignment="end">
          <SwitcherIcon size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} onOverlayClick={onClickSideNavExpand} href="#main-content" onSideNavBlur={onClickSideNavExpand} isRail {...args}>
        <SideNavItems>
          {isSideNavExpanded && <HeaderSideNavItems hasDivider={true}>
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderSideNavItems>}
          <SideNavMenu renderIcon={Dashboard} title="Task Center">
            <SideNavLink as={AppLink} renderIcon={Task} {...{ href: "/TaskHall" }}>
              Task Hell
            </SideNavLink>
            <SideNavLink as={AppLink} renderIcon={TaskAdd} {...{ href: "/MyTask" }}>
              My Task
            </SideNavLink>
            <SideNavLink as={AppLink} renderIcon={TaskAssetView} {...{ href: "/TaskReport" }}>
              Task report
            </SideNavLink>
          </SideNavMenu>
          <SideNavMenu renderIcon={Fade} title="Category title">
            <SideNavMenuItem {...{ href: "/" }}>
              Link
            </SideNavMenuItem>
            <SideNavMenuItem aria-current="page" {...{ href: "/" }}>
              Link
            </SideNavMenuItem>
            <SideNavMenuItem {...{ href: "/" }}>
              Link
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={Fade} title="Category title">
            <SideNavMenuItem {...{ href: "/" }}>
              Link
            </SideNavMenuItem>
            <SideNavMenuItem {...{ href: "/" }}>
              Link
            </SideNavMenuItem>
            <SideNavMenuItem {...{ href: "/" }}>
              Link
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink as={AppLink} renderIcon={UserMultiple} {...{ href: "/users" }}>
            Users
          </SideNavLink>
          <SideNavLink as={AppLink} renderIcon={Sprout} {...{ href: "/brand" }}>
            Brand
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </Header>
  </>} />;

function action(arg0: string) {
  console.log(arg0);
}
