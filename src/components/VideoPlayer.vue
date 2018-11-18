<template>
    <div class="container-fluid  video-section-container p-0">
        <div class="video-player-container">
            <video  class="video" :class="{pause: pause, play:!pause}" src="../assets/record_stock.mp4" type="video/mp4"></video>
            <div class="controls">
                <div class="progress-bar">
                    <div class="progress-bar-circle"></div>
                </div>
            </div>
            <div class="video-btn">
                <button @click="playToggle"><i v-show="pause===true" class="fas fa-pause fa-4x"></i><i v-show="pause===false" class="fas fa-play fa-4x"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
      pause: false
    };
  },
  computed: {},
  methods: {
    playToggle() {
      this.pause = !this.pause;
      let video = document.querySelector(".video");
      video.paused ? video.play() : video.pause();
    }
  }
};
</script>

<style lang="scss" scoped>
.video-player-container {
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-color: black;
  .video {
    margin: 0 auto;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
  }
  .controls {
    /*display: flex;*/
    /*position: absolute;*/
    /*width: 100%;*/
    /*height: 100px;*/
    /*background-color: red;*/
    /*bottom: 0;*/
    /*flex-wrap: wrap;*/
  }
  .video-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    height: max-content;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      i {
        color: azure;
      }
    }
  }
}
</style>
