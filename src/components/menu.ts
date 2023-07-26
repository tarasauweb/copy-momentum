function Menu () : string {
  const menu:string =  `
    <ul class="menu">
      <li class="menu__items">
        <span class="menu__span">
          BackGround
        </span>
        <ul class="menu__item">
          <li class="menu__subitem">
            flickr
          </li>
          <li class="menu__subitem">
            github
          </li>
          <li class="menu__subitem">
            unsplash
          </li>
        </ul>
      </li>
      <li class="menu__items">
        <span class="menu__span">
          Close widget
        </span>
        <ul class="menu__item">
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
      <li class="menu__items">
        <span class="menu__span">
          Language
        </span>
        <ul class="menu__item menu__lang">
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
  `

  return menu
}

export default Menu