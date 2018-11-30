<template>
  <div id="app">
      <div class="position-absolute w-100 h-100 particles">
          <vue-particles
                  color="#f9ed37"
                  :particlesNumber="120"
                  :particleSize="2"
                  linesColor="#dedede"
                  :moveSpeed="4"
                  :linesDistance="150"
          >
          </vue-particles>
      </div>
      <full-page ref="fullpage" :options="options" id="fullpage">
          <!--Video Section-->


        <div class="section">
            <VideoPlayer/>
        </div>
        <div class="section">
            <Services/>
        </div>
        <div class="section">

          <Portfolio/>
        </div>
        <div class="section">
          forth section ...
        </div>
        <div class="section">
          fifth section ...
        </div>
        <div class="section">
          <ContactUs/>
        </div>


      </full-page>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import particlesJS from "particles.js/particles";
export default {
  name: "app",
  components: {
    VideoPlayer,
    Portfolio,
    Services,
    ContactUs
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
  },
  mounted() {
    this.loadParticles();
  },
  methods: {
    loadParticles() {
      particlesJS.load("particles-js", "assets/particles.json", function() {
        // console.log("callback - particles.js config loaded");
      });
    }
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
  background-color: black;
  .particles {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  #fullpage {
    background-size: cover;
    background: url("./assets/background.svg") no-repeat 50% 120%;
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
