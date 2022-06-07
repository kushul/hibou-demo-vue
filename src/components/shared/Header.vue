<template>
  <header>
    <div class="header-wrapper">
      <div class="logo-wrapper">
        <img
          src="https://www.lehibou.com/bundles/app/images/header/lehibou_logo.svg"
          alt="logo"
        />
      </div>
      <nav class="header-listing-wrapper">
        <ul>
          <li>
            <a href="/corporate">Corporate</a>
          </li>
          <li>
            <a href="/freelances">Freelances</a>
          </li>
          <li>
            <a href="/Qui-sommes-nous">Qui Sommes nous</a>
          </li>
        </ul>
      </nav>
      <div>
        <ul>
          <li>
            <a href="#">Se connecter</a>
          </li>
          <li>
            <a href="#">S'inscrire</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 96px;
  background: rebeccapurple;
}
.header-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  max-width: var(--container-width);
  margin: 0 auto;
  align-items: center;
  height: 100%;
}
.header-listing-wrapper {
  ul {
    padding: 0;
    display: flex;
    list-style: none;
    li {
      a {
        font-family: RalewayRegular, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: calc(16 / 14 * 100%);
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        color: #00274b;
        text-decoration: none;
      }
    }
  }
}
</style>