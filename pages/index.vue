<template>
    <section class="container">
        <div>
            <app-logo/>
            <h1 class="title">
                Ali Bozkurt - Designs
            </h1>
            <div class="row justify-content-center pb-3">
                <div class="btn-group">
                    <button :class="active === 'gray' ? 'btn btn-primary' : 'btn btn-secondary'"
                            @click="active = 'gray'">
                        All Gray
                    </button>
                    <button :class="active === 'color' ? 'btn btn-primary' : 'btn btn-secondary'"
                            @click="active = 'color'">
                        All Color
                    </button>
                </div>
            </div>
            <div class="row flex-wrap justify-content-center">
                <div class="img-hov col-3 p-0" v-for="(img, i) in imgs" :key="i">
                    <img class="img-col" :class="active" :src="img.src">
                    <div class="img-text"><span class="rounded" :class="img.textClass">{{ img.text }}</span></div>
                </div>
            </div>
            <div class="links">
                <a
                    href="https://www.behance.net/alibozkurt"
                    target="_blank"
                    class="button--green">Behance</a>
                <a
                    href="https://www.facebook.com/lephistodesign"
                    target="_blank"
                    class="button--grey">Facebook</a>
            </div>
        </div>
    </section>
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'
    import Img1 from '~/assets/img/poster-on-wall.jpg';
    import Img2 from '~/assets/img/brand-identities.jpg';
    import Img3 from '~/assets/img/spring-fest.jpg';
    import Img4 from '~/assets/img/pori-anti-racism-week.jpg';
    import Img5 from '~/assets/img/triangles-and-g-clef.jpg';
    import Img6 from '~/assets/img/two-lost-souls.jpg';

    export default {
        components: {
            AppLogo,
        },
        head() {
            return {
                title: 'Ali Bozkurt - Designs'
            }
        },
        data() {
            return {
                active: 'color',
                imgs: [
                    { src: Img1, text: 'Posters on the Wall' },
                    { src: Img2, text: 'Brand Identities', textClass: 'light' },
                    { src: Img3, text: 'Spring Fest', textClass: 'light' },
                    { src: Img4, text: 'Pori Anti Racism Week' },
                    { src: Img5, text: 'Triangles and G clef' },
                    { src: Img6, text: 'Lost Two Souls' },
                ],
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 64px;
        color: #35495e;
        letter-spacing: 1px;
        padding-bottom: 35px;
    }

    .links {
        padding-top: 15px;
    }

    .img-hov {
        box-sizing: border-box;
        position: relative;
        transition: all ease-in-out 0.5s;
        .img-text {
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 0;
            left: 0;

            height: 100%;
            width: 100%;

            opacity: 0;
            transition: opacity ease-in-out .25s;

            > span {
                padding: 5px 10px;
                background: rgba(255, 255, 255, 0.8);
                font-weight: 500;

                &.light {
                    color: white;
                    background: rgba(0, 0, 0, 0.6);
                }
            }
        }
        .img-col {
            width: 100%;
            height: auto;
            &.gray {
                filter: grayscale(1);
            }
            &:hover {
                filter: blur(1px) opacity(.5) grayscale(100%);
            }
        }
        &:hover {
            .img-text {
                opacity: 1;
            }
            .img-col.color {
                filter: blur(1px) grayscale(1);
            }
            .img-col.gray {
                filter: blur(1px) grayscale(0);
            }
        }
    }
    .btn:focus {
        box-shadow: none;
    }
</style>
