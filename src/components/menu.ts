function Menu () : string {
  const menu:string =  `
    <ul class="menu">
      <li class="menu__items">
        <ul class="menu__subscribe">
          <li class="menu__span">
            BackGround
          </li>
        </ul>
        <ul class="menu__nav">
          <li class="menu__subitems">
            <ul class="menu__submenu">
              <li class="menu__subitem">
                flickr
              </li>
              <li class="menu__subitem">
                unsplash
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="menu__items">
        <ul class="menu__subscribe">
          <li class="menu__span">
            Close widget
          </li>
        </ul>
        <ul class="menu__nav">
          <li class="menu__subitems">
            <ul class="menu__submenu">
              <li class="menu__subitem">
                player
              </li>
              <li class="menu__subitem">
                slider
              </li>
              <li class="menu__subitem">
                time
              </li>
              <li class="menu__subitem">
                date
              </li>
              <li class="menu__subitem">
                greeting
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="menu__items">
        <ul class="menu__subscribe">
          <li class="menu__span">
            Language
          </li>
        </ul>
       
        <ul class="menu__nav">
          <li class="menu__subitems">
            <ul class="menu__submenu">
              <li class="menu__subitem">
                Eng
              </li>
              <li class="menu__subitem">
                Bel
              </li>
              <li class="menu__subitem">
                Rus
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  `

  return menu
}

export default Menu