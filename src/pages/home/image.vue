<template>
          <div class="imgs">
        <ul>
            <li class="item" style="
              background-image: url('https://pic3.zhimg.com/80/v2-d8e1c695f6f11a6ba6e1d9c465a541c6_1440w.webp');
            "></li>
            <li class="item" style="
              background-image: url('https://pic1.zhimg.com/80/v2-3cb57dd017a65b0d526c3e53f1258e20_1440w.webp');
            "></li>
            <li class="item" style="
              background-image: url('https://pic4.zhimg.com/80/v2-32d0cab745b7ae1839713569ccb66197_1440w.webp');
            "></li>
            <li class="item" style="
              background-image: url('https://pic2.zhimg.com/80/v2-d5f50efe8c3d39eb0e0c18a94a6065c1_1440w.webp');
            "></li>
        </ul>
    </div>
</template>


<style scoped lang="scss">

.imgs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -9;
    background-color: #363636;
    overflow: hidden;

    .item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: no-repeat 50% 50% / cover;
        opacity: 0;
        animation: imageAnimation 36s linear infinite 0s;
        backface-visibility: hidden;
        transform-style: preserve-3d;


        &:nth-child(1) {
            animation-delay: 6s;
        }

        &:nth-child(2) {
            animation-delay: 12s;
        }


    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .2);
        transition: all .2s ease-in-out 0s;
    }
}

@keyframes imageAnimation {
    0% {
        opacity: 0;
        animation-timing-function: ease-in;
    }

    2% {
        opacity: 1;
    }

    8% {
        opacity: 1;
        transform: scale(1.05);
        animation-timing-function: ease-out;
    }

    17% {
        opacity: 1;
        transform: scale(1.1);
    }

    25% {
        opacity: 0;
        transform: scale(1.1);
    }

    100% {
        opacity: 0;
    }
}
</style>
