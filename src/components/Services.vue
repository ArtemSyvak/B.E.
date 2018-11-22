<template>
    <div class="container-fluid h-100">
        <div class="row justify-content-center align-items-center h-100">
            <div id="photo-making" class="col-3  ">
                <img class="services-image" src="https://nigelotoole.github.io/direction-reveal/images/mountain-2.jpg" alt="">
                <p class="services-title">Фото</p>
            </div>
            <div id="video-making" class="col-3 ">
                <img class="services-image" src="https://nigelotoole.github.io/direction-reveal/images/mountain-2.jpg" alt="">
                <p class="services-title">Відео</p>
            </div>
            <div id="addvertisement" class="col-3 " >
                <img class="services-image" src="https://nigelotoole.github.io/direction-reveal/images/mountain-1.jpg" alt="">
                <p class="services-title">Реклама</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Services",
  computed: {}
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
.services-title{
  font-family: Roboto, Arial, sans-serif;
  font-size: 45px;
  color: azure;
}
.services-image{
  width: 75%;
}
</style>