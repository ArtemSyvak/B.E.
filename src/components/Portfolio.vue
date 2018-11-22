<template>
    <div class="direction-reveal">

        <a href="#" class="direction-reveal__card swing--out-bottom">
            <img src="https://nigelotoole.github.io/direction-reveal/images/mountain-1.jpg" alt="Image" class="img-fluid">

            <div class="direction-reveal__overlay direction-reveal__anim--in">
                <h3 class="direction-reveal__title">Lorem ipsum</h3>
                <p class="direction-reveal__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore eritatis et quasi.</p>
            </div>
        </a>

        <a href="#" class="direction-reveal__card swing--out-left">
            <img src="https://nigelotoole.github.io/direction-reveal/images/mountain-2.jpg" alt="Image" class="img-fluid">

            <div class="direction-reveal__overlay direction-reveal__anim--in">
                <h3 class="direction-reveal__title">Lorem ipsum</h3>
                <p class="direction-reveal__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore eritatis et quasi.</p>
            </div>
        </a>

    </div>
</template>

<script>
export default {
  name: "Portfolio",
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/direction-reveal/styles/direction-reveal.scss";
</style>
