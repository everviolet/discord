<h3 align="center">
	<img src="https://github.com/everviolet/.github/raw/main/assets/logo-circle.png" width="100" alt="Logo"/><br/>
	Evergarden for <a href="https://discord.app">Discord</a>
</h3>

<p align="center">
	<a href="https://github.com/everviolet/discord/stargazers"><img src="https://img.shields.io/github/stars/everviolet/discord?style=for-the-badge&colorA=313B40&colorB=DBBC7F"></a>
	<a href="https://github.com/everviolet/discord/issues"><img src="https://img.shields.io/github/issues/everviolet/discord?style=for-the-badge&colorA=313B40&colorB=E69875"></a>
	<a href="https://github.com/everviolet/discord/contributors"><img src="https://img.shields.io/github/contributors/everviolet/discord?style=for-the-badge&colorA=313B40&colorB=97C9C3"></a>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/everviolet/discord/main/assets/previews/preview.webp"/>
</p>

### Previews

<details>
<summary>Winter</summary>
<img src="https://raw.githubusercontent.com/everviolet/discord/main/assets/previews/winter.webp"/>
</details>
<details>
<summary>Fall</summary>
<img src="https://raw.githubusercontent.com/everviolet/discord/main/assets/previews/fall.webp"/>
</details>
<details>
<summary>Spring</summary>
<img src="https://raw.githubusercontent.com/everviolet/discord/main/assets/previews/spring.webp"/>
</details>
<details>
<summary>Summer</summary>
<img src="https://raw.githubusercontent.com/everviolet/discord/main/assets/previews/summer.webp"/>
</details>

### Usage

#### [BetterDiscord](https://betterdiscord.app)

1. Download your preferred flavour:

- [Summer](./themes/summer.theme.css?raw=1)
- [Spring](./themes/spring.theme.css?raw=1)
- [Fall](./themes/fall.theme.css?raw=1)
- [Winter](./themes/winter.theme.css?raw=1)

2. Copy the downloaded file to your BetterDiscord themes folder.
3. Enable the theme in BetterDiscord settings.

#### Clients/Mods with custom CSS support

1. Simply add your preferred flavour into your discord clients CustomCSS file/editor.

```css
/* summer */
@import url("https://everviolet.github.io/discord/themes/evergarden-summer.theme.css");
/* spring */
@import url("https://everviolet.github.io/discord/themes/evergarden-spring.theme.css");
/* fall */
@import url("https://everviolet.github.io/discord/themes/evergarden-fall.theme.css");
/* winter */
@import url("https://everviolet.github.io/discord/themes/evergarden-winter.theme.css");

/* You can also append colors to customize the accent, e.g. */
/* winter (pink accent)*/
@import url("https://everviolet.github.io/discord/themes/evergarden-winter-pink.theme.css");
/* spring (orange accent) */
@import url("https://everviolet.github.io/discord/themes/evergarden-spring-orange.theme.css");
```

#### [Stylus](https://github.com/openstyles/stylus)

1. Enable CSP Patching from Stylus Settings > Advanced.
2. [Click here to install](https://github.com/everviolet/discord/raw/main/discord.user.css).
3. Choose your preferred flavour and accent color from the Stylus preference dropdown.

### FAQ

- Q: **_"Can this get my account banned?"_**
- A: Using third party clients and injecting custom css is against the ToS. While nobody has ever been banned for simply using discord client mods, We are not responsible for anything that might happen to your account by using third party clients. Use at your own discretion!

- Q: **_"Can I automatically switch flavors between light and dark mode?"_**
- A: The following snippet showcases a configuration that switches between
  `summer` in light mode and `winter` in dark mode by adding an inline
  [`prefers-color-scheme` media
  feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme),
  `(prefers-color-scheme: <light-or-dark>)`, after each `@import` statement
  (see ["Importing CSS rules conditional on media queries" -
  MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@import#importing_css_rules_conditional_on_media_queries)).

  ```css
  @import url("https://everviolet.github.io/discord/themes/evergarden-winter.theme.css")
  (prefers-color-scheme: dark);
  @import url("https://everviolet.github.io/discord/themes/evergarden-summer.theme.css")
  (prefers-color-scheme: light);
  ```

- Q: **_"Can I disable Rainbow Threads"_**
- A: Yes, by placing the following in your QuickCSS threads will be the same colour as typical channels. *note: please respect the `space` between the colon and semi-colon*
  ```css
  :root {
    --ctp-rainbow-thread-disabled: ;
  }
  ```

### Thanks to <3

- [GlowingUmbreon](https://github.com/glowingumbreon)
- [Isabelinc](https://github.com/Isabelincorp)
- [Ren](https://github.com/watatomo)
- [winston](https://github.com/nekowinston)
- [rubyowo](https://github.com/rubyowo)
- [Aven](https://github.com/ToxicAven)
- [comfysage](https://github.com/comfysage)

<hr>

<p align="center">
	<a href="https://github.com/comfysage/evergarden/blob/mega/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=LICENSE&message=GPL3&colorA=313B40&colorB=9BB5CF"/></a>
</p>
