<template>
  <div class="specs-container">
    <div class="specs-wrapper">
      <div class="specs-header">
        <h3>Nos Metiers</h3>
        <h1>Chez LeHibou rencontrez des spécialistes</h1>
      </div>
      <div class="specs-boxes">
        <div
          class="specs-box"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="specs-box-text">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Management de transition",
          description: "Gestion d’un département IT avec un DSI / CIO / CTO",
        },
        {
          title: "Devops",
          description: "Collaboration des développeurs et de l’Infrastructure",
        },
        {
          title: "Big data",
          description:
            "Accès, analyse et partage de l’information au sein des organisations",
        },
        {
          title: "DBA",
          description: "Administration de l’ensemble des bases de données",
        },
        {
          title: "Cloud",
          description: "Gestion du Cloud sur AWS et Microsoft Azure",
        },
        {
          title: "SAP",
          description: "Déploiement de l’ensemble des modules SAP",
        },
        {
          title: "PMO",
          description: "Processus de gestion de projet",
        },
        {
          title: "MOA",
          description: "Compréhension des enjeux, spécications des besoins",
        },
        {
          title: "Développement",
          description: "Gestion des applications et des Appss",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.specs-container {
  position: relative;
  background: #fff5de;
  padding: 80px 0;
  font-family: "Raleway", sans-serif;

  .specs-wrapper {
    width: var(--container-width);
    margin: 0 auto;
  }

  &::before {
    position: absolute;
    content: url("https://www.lehibou.com/bundles/app/images/first/violet-half-ellipse.svg");
    top: 10%;
    left: 10%;
  }

  .specs-header {
    text-align: center;

    h3 {
      margin-bottom: 17px;
      text-transform: uppercase;
      color: #ff7d6d;
      font-size: 21px;
    }

    h1 {
      color: #00274b;
      font-size: 34px;
      margin-bottom: 20px;
    }
  }

  .specs-boxes {
    display: grid;
    //grid-template-columns: repeat(auto-fit,minmax(310px,1fr));
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-content: center;
    position: relative;

    .specs-box {
      background-color: white;
      height: 133px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      &:hover {
        border: 2px solid #ffcc5c;
      }

      &::before {
        content: url("https://www.lehibou.com/bundles/app/images/first/circle-with-tick.svg");
        margin-right: 17px;
      }

      .specs-box-text {
        h3 {
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .specs-container {
    .specs-boxes {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 768px) {
  .specs-container {
    .specs-boxes {
      grid-template-columns: 310px;
    }
  }
}
</style>