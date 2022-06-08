<template>
  <section class="banner">
    <section class="banner-box">
      <img
        class="banner-box-img"
        src="https://www.lehibou.com/bundles/app/images/first/random-man.jpg"
        alt="person-image"
      />
      <div class="banner-box-text">
        <h1 class="banner-box-text__heading">Vous êtes un grand compte ?</h1>
        <p class="banner-box-text__paragraph">
          Vous souhaitez référencer une plateforme freelance ? Découvrez les
          offres Corporate LeHibou !
        </p>
        <button class="banner-box-text__button">
          <a href="#">Découvrir les offres Corporate</a>
        </button>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  padding: 100px 0 160px 0;
  //display: -ms-flexbox;
  display: flex;
  //-ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;

  &::after {
    content: url("https://www.lehibou.com/bundles/app/images/first/yellow-thin-ellipse.svg");
    position: absolute;
    bottom: 100px;
    right: -3rem;
  }
}

.banner-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  background: #00274b;
  padding: 105px 60px;
  //max-height: 480px;
  border-radius: 12px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  overflow: hidden;
  color: white;
  width: var(--container-width);
  margin: 0 auto;

  .banner-box-img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 12px;
  }

  .banner-box-text {
    position: relative;
    padding: 50px 0;
    &::after {
      content: url("https://www.lehibou.com/bundles/app/images/third/white-ball.svg");
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      top: -10px;
    }

    .banner-box-text__heading {
      font-family: "Domine", serif;
      font-size: 32px;
    }

    .banner-box-text__paragraph {
      font-family: "DM Sans", sans-serif;
      font-size: 23px;
      padding: 20px 0;
    }

    button {
      background: #ff978a;
      min-height: 48px;
      border-radius: 48px;
      padding: 12px 28px;
      transition: background-color 0.5s linear, color 1s linear;
      font-family: Raleway, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: calc(24 / 16 * 100%);
      text-decoration: none;
      cursor: pointer;

      &:hover {
        background: #fff;
      }

      a {
        text-decoration: none;
        color: #00274b;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  /* For mobile phones: */
  .banner {
    padding: 90px;

    .banner-box {
      grid-template-columns: 1fr;
      max-height: inherit;

      .banner-box-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .banner-box-text__paragraph {
          margin: 20px 0;
        }
        .banner-box-text__button {
          padding: 18px 28px;
          a {
            font-size: 23px;
          }
        }

        &::after {
          display: none;
        }
      }
    }
  }
}
</style>