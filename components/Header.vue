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
        <ul class="login-wrapper">
          <li>
            <a class="btn-connect" href="#">Se connecter</a>
          </li>
          <li>
            <a class="signup" href="#">S'inscrire</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 96px;
  background: #fff;
}

.header-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  max-width: var(--container-width);
  margin: 0 auto;
  align-items: center;
  height: 100%;
}
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
        margin-right: 40px;
      }
    }
  }
}
.login-wrapper {
  display: flex;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    .btn-connect {
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
      margin-right: 40px;
      text-decoration: none;
    }
    .signup {
      background: #ff978a;
      border-radius: 48px;
      padding: 0 28px;
      min-height: 48px;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-align: center;
      align-items: center;
      margin: 0 10px 0 0;
      transition: background-color 0.5s linear;
      font-family: Raleway, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: calc(24 / 16 * 100%);
      color: #00274b;
      text-decoration: none;
    }
  }
}
</style>