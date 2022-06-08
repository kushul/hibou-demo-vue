<template>
  <div class="feature">
    <div class="feature-wrapper">
      <div class="feature-heading">
        <h3>ADN</h3>
        <h1>Nos Points Fort</h1>
      </div>
      <div id="feature-boxes" class="feature-boxes">
        <div class="feature-box">
          <div class="feature-box__number">1</div>
          <div class="feature-box__title">Des professionnels expérimentés</div>
          <div class="feature-box__desc">
            Une communauté de freelances qualifiés par notre équipe pour vous
            accompagner dans vos projets
          </div>
        </div>
        <div class="feature-box">
          <div class="feature-box__number">2</div>
          <div class="feature-box__title">Un interlocuteur unique</div>
          <div class="feature-box__desc">
            Un.e account manager vous sera dédié et vous accompagnera dans
            toutes les étapes
          </div>
        </div>
        <div class="feature-box">
          <div class="feature-box__number">3</div>
          <div class="feature-box__title">Un reporting en temps-réel</div>
          <div class="feature-box__desc">
            En 1 clic, vous accédez à tous les indicateurs de suivi de notre
            partenariat via notre FMS (Freelance Management System)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.feature {
  padding: 50px 0;

  .feature-wrapper {
    max-width: var(--container-width);
    margin: 0 auto;
    //padding: 20px;

    .feature-heading {
      font-family: "Raleway", sans-serif;
      text-align: center;

      h3 {
        color: #ff7d6d;
      }

      h1 {
        color: #00274b;
        margin: 10px 0 20px 0;
      }
    }

    .feature-boxes {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      .feature-box {
        color: #00274b;
        padding: 24px;
        max-width: 362px;
        border: 2px solid #e0e0e0;
        border-radius: 13px;
        margin: 0 10px;

        &:hover {
          border: 2px solid rgba(255, 151, 138, 0.5);
        }

        &:hover .feature-box__number {
          background: #ff7d6d;
          border: 4px solid #f6f6f6;
          color: #fff;
        }

        .feature-box__number {
          border: 4px solid #f6f6f6;
          border-radius: 12px;
          font-family: "Dekko", cursive;
          font-size: 32px;
          width: 64px;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .feature-box__title {
          font-family: "DM Sans", sans-serif;
          font-weight: bold;
          font-size: 24px;
          margin: 10px 0;
        }

        .feature-box__desc {
          font-size: 16px;
          font-family: "Raleway", sans-serif;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  #feature-boxes {
    grid-template-columns: 1fr;
    justify-items: center;

    .feature-box {
      margin: 10px 0;
      border: 2px solid rgba(255, 151, 138, 0.5);

      .feature-box__number {
        background: #ff7d6d;
        border: 4px solid #f6f6f6;
        color: #fff;
      }
    }
  }
}
</style>