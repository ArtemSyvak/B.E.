<template>
  <div id="app">
      <full-page ref="fullpage" :options="options" id="fullpage">
          <!--Video Section-->
        <div class="section">
            <VideoPlayer/>
        </div>
        <div class="section">
          Second section ...
        </div>
        <div class="section">
          third section ...
        </div>
        <div class="section">
          forth section ...
        </div>
        <div class="section">
          fifth section ...
        </div>
        <div class="section">
          six section ...
        </div>
      </full-page>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";
export default {
  name: "app",
  components: {
    VideoPlayer
  },
  data() {
    return {
      options: {
        navigation: true,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: [
          "Video",
          "Services",
          "Portfolio",
          "Team",
          "Feedbacks",
          "ContactUs"
        ],
        sectionsColor: ["#ffffff"]
      }
    };
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #fullpage {
    background: url("./assets/background.svg") center center no-repeat;
    background-size: cover;
  }
}
#fp-nav {
  position: fixed;
  left: 0;
  top: 50%;
  ul {
    position: relative;
    &:after,
    &:before {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 1px 0 1px 180px;
      border-color: transparent transparent transparent darkgray;
      position: absolute;
      left: -57px;
    }
    &:after {
      bottom: -120px;
      transform: rotate(90deg);
    }
    &:before {
      top: -120px;
      transform: rotate(-90deg);
    }
    padding-left: 30px;
    li {
      list-style: none;
      a {
        margin: 10px 0;
        color: darkgrey;
        display: block;
        position: relative;
        padding-left: 20px;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        & span:not(.fp-sr-only) {
          display: inline-block;
          border-radius: 50%;
          background-color: darkgray;
          content: "";
          width: 4px;
          height: 4px;
          position: absolute;
          top: 30%;
          left: 0;
          cursor: pointer;
          webkit-transition: all 0.1s ease-in-out;
          -moz-transition: all 0.1s ease-in-out;
          -o-transition: all 0.1s ease-in-out;
          transition: all 0.1s ease-in-out;
        }
        &:hover {
          color: lightgray;
          text-decoration: none;
          &:not(.active) span:not(.fp-sr-only) {
            width: 7px;
            height: 7px;
            margin-left: -2px;
          }
        }

        &.active {
          color: lightgray;
          span:not(.fp-sr-only) {
            display: inline-block;
            background-color: yellow;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-left: -4px;
            webkit-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -o-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
