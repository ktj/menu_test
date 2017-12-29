import React, { Component } from 'react';
import Theme from 'hsl-shared-components/lib/Theme';
import styled, { ThemeProvider } from 'styled-components';
import Icons from 'hsl-shared-components/lib/Icons';
import Nav, { NavItem, NavItemSeparator } from 'hsl-shared-components/lib/Nav';
import Menu, { MenuItem } from 'hsl-shared-components/lib/Menu';
import DropdownMenu from 'hsl-shared-components/lib/DropdownMenu';
import ResponsiveProvider from 'hsl-shared-components/lib/Utils/ResponsiveProvider';
import './App.css';

const A = styled.a`
  color: inherit;
  text-decoration: none;
  &:link, &:visited, &:link:active, &:visited:active {
    color: inherit;
  }
`;

const DropdownContent = {
  content: [
    {
      header: 'Ajankohtaiset teemat',
      links: [
        { text: 'Uudet vyöhykkeet', link: '/test' },
        { text: 'Uudet laitteet', link: '/test', active: true },
        { text: 'Uusi raitiolinjasto', link: '/test' },
        { text: 'Länsimetro', link: '/test' },
        { text: 'Pasilan Aseman uudistaminen', link: '/test' },
        { text: 'Kalasatama', link: '/test' }
      ]
    },
    {
      header: 'Liikkumisen palveluita',
      links: [
        { text: 'Kaupunkipyörät', link: '/test' },
        { text: 'Pyöräparkki', link: '/test', active: true },
        { text: 'Pyöräily', link: '/test' },
        { text: 'Liityntäpysäköinti', link: '/test' },
        { text: 'Pikaratikka', link: '/test' }
      ]
    },
    {
      header: 'Tietoa HSL:stä',
      links: [
        { text: 'HSL lyhyesti', link: '/test' },
        { text: 'Päätöksenteko', link: '/test' },
        { text: 'Strategia', link: '/test' },
        { text: 'Talous', link: '/test' },
        { text: 'Hankinnat', link: '/test' },
        { text: 'Julkaisut', link: '/test' },
        { text: 'HSL työpaikkana ja avoimet työpaikat', link: '/test' },
        { text: 'Viestintä', link: '/test' },
        { text: 'Linjastosuunnitelmat', link: '/test' },
        { text: 'Liikennesuunnittelu', link: '/test' },
        { text: 'Tutkimukset', link: '/test' },
        { text: 'HLJ – Helsingin seudun liikennejärjestelmäsuunnitelma', link: '/test' },
      ]
    }
  ],
  quickLinks: [
    {
      icon: <Icons.Briefcase />,
      text: 'Yrityksille',
      link: '/test'
    },
    {
      icon: <Icons.Bookpile />,
      text: 'Oppilaitoksille',
      link: '/test'
    },
    {
      icon: <Icons.Present />,
      text: 'Asiakasedut',
      link: '/test'
    },
    {
      icon: <Icons.ShoppingBasket />,
      text: 'Osta HSL-fanituotteita',
      link: '/test'
    },
  ]
};

const languages = [
  {
    id: 'fi',
    name: 'FI',
    accessibilityLabel: 'suomeksi'

  }, {
    id: 'sv',
    name: 'SV',
    accessibilityLabel: 'på svenska'
  }, {
    id: 'en',
    name: 'EN',
    accessibilityLabel: 'in english'
  }];

const icons = [
  [<Icons.Tickets />, 'Liput ja hinnat'],
  [<Icons.CustomerService />, 'Ohjeita ja tietoa'],
];

const logo = <Icons.HSLLogo />;

  const menu = (<Menu
    selectedLanguage="fi"
    changeLanguage={()=>{console.log(123)}}
    changeLanguageTranslation="Vaihda kieli"
    languages={languages}
    search={{
      element: (<A href="/test" />),
      accessibilityLabel: 'haku'
    }}
  >
    <MenuItem
      hideForSmall
      link={<A href="/test" key="test2" />}
      icon={<Icons.SignIn />}
      text="Kirjaudu"
      key="signin"
    />
  </Menu>);


class App extends Component {
  render() {
    return (
      <ResponsiveProvider>
        <ThemeProvider theme={Theme}>
          <div className="App">
            <Nav logo={logo} menu={menu}>
              <NavItem
                key="Reittiopas"
                link={<A href="/test" />}
                icon={<Icons.JourneyPlanner />}
                text="Reittiopas"
                active
              />
              {icons.map(icon =>
                (<NavItem
                  key={icon[1]}
                  link={<A href="/test" />}
                  icon={icon[0]}
                  text={icon[1]}
                />)
             )}
              <DropdownMenu
                text="Lisää"
                content={DropdownContent}
                onToggle={()=>{console.log(123)}}
              />
              <NavItemSeparator onlyForSmall />
              <NavItem
                onlyForSmall
                key="Kirjaudu"
                link={<A href="/test" />}
                icon={<Icons.SignIn />}
                text="Kirjaudu"
              />
            </Nav>
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>

          </div>
        </ThemeProvider>
      </ResponsiveProvider>
    );
  }
}

export default App;
