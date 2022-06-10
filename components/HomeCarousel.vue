<template>
  <div class="carousel-container">
    {{ data }}
    <div class="carousel-wrapper">
      <h3 class="tagline">Specialists</h3>
      <h1 class="title">Specialists on the platform</h1>
      <swiper
        :pagination="true"
        :navigation="true"
        :modules="[Pagination, Navigation]"
        class="profile-carousel"
        :slides-per-view="4"
        :allowTouchMove="false"
        :breakpoints="{
          '480': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
          },
          '1024': {
            slidesPerView: 4,
          },
        }"
        :space-between="50"
        :loop="true"
      >
        <swiper-slide v-for="i in 10" :key="i">
          <div class="profile-card-wrapper">
            <div class="image-wrapper">
              <img
                src="https://www.lehibou.com/media/cache/freelance_profile_square/uploads/user/images/0/1e97db05e46a111fdbc5683c0426ceb4.jpg"
                alt="Profile pic"
              />
            </div>
            <div class="content-wrapper">
              <h3 class="name">Darlene</h3>
              <h4 class="job">Analyst, Writer</h4>
              <p class="completed-hours">24 hours completed missions</p>
              <p class="hours">23 hours jobs</p>
              <p class="availability">Available for new projects</p>
              <div class="badges-wrapper">
                <span>MOA</span>
                <span>Big data</span>
                <span>DBA</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="ellipse-wrapper">
        <img
          src="https://www.lehibou.com/bundles/app/images/first/violet-half-ellipse.svg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

const { data } = await useFetch("api/db.json");
</script>

<style lang="scss" scoped>
.carousel-container {
  background: #ffe5e2;
  padding: 50px 0;
}
.carousel-wrapper {
  width: var(--container-width);
  margin: 0 auto;
  position: relative;

  .ellipse-wrapper {
    position: absolute;
    right: -40px;
    top: 30px;
    transform: rotate(180deg);
  }
}
.profile-carousel {
  min-height: 550px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-card-wrapper {
  display: grid;
  border-radius: 20px;
  background: #ffffff;
}
.image-wrapper {
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
}
.content-wrapper {
  padding: 20px;
  color: #222222;
  font-weight: 400;
  .name {
    font-weight: 700;
    font-size: 18px;
    margin: 0;
    font-family: var(--font-raleway);
  }
  .job {
    color: #828282;
    font-size: 14px;
    font-weight: 400;
  }
  .completed-hours {
    font-size: 12px;
  }
  .hours {
    font-size: 14px;
    font-weight: 700;
  }
  .availability {
    color: #00ba88;
    font-size: 12px;
  }
  .badges-wrapper {
    display: flex;
    align-items: center;
    span {
      background: #f17c6d;
      color: #fff;
      margin: 0 10px;
      border-radius: 30px;
      font-size: 14px;
      font-weight: 400;
      padding: 5px 10px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>

<style lang="scss">
.carousel-wrapper {
  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid #e1e1e1;

    &::after {
      font-size: 16px;
      color: #222222;
    }
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    left: 0;
  }
}
</style>