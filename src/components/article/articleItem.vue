<template>
    <div class="article-item">
        <!-- 文章缩略图 -->
        <div class="article-cover">
            <router-link to="/" href="">
                <img class="cover" src="@/assets/blogImage/1.webp">
                <img />
            </router-link>
        </div>

        <div class="article-info">
            <div class="article-meta">
                <div class="flex items-center justify-center mr-4  text-amber-300">
                    <Icon icon="mdi:user-box-outline" width="24" class="mr-2 " />
                    <span class="text-base mr-4">taizilaoren</span>
                    <Icon icon="uiw:date" width="20" class="mr-2" />
                    <span class="text-base mr-4">2023</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { Icon } from "@iconify/vue"
</script>
<style lang="scss" scoped>
.article-item {
    display: flex;
    height: 14rem;
    margin: 1.25rem 0.5rem 0;
    border-radius: 0.5rem;
    box-shadow: 0 0.625rem 1.875rem -0.9375rem #bfc;
    animation-duration: 0.5s;
    transition: all 0.2s ease-in-out 0s;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 1.5rem var(--box-bg-shadow);

        .cover {
            transform: scale(1.05) rotate(1deg);
        }
    }

    &:nth-child(even) {
        flex-direction: row-reverse;

        .article-cover {
            margin-right: auto;
            margin-left: 1.5rem;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
            border-radius: 0 0.625rem 0.625rem 0;
        }

        .article-info {
            padding: 1rem 0 3rem 1.5rem;

            .article-meta {
                justify-content: flex-start;
            }
        }

        .article-category {
            right: 0.5rem;
            justify-content: flex-start;
        }
    }
}

.article-cover {
    width: 50%;
    margin-right: 1.5rem;
    clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
    border-radius: 0.625rem 0 0 0.625rem;

    .cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s ease-in-out 0s;
    }
}

.article-info {
    position: relative;
    width: 50%;
    padding: 1rem 1.5rem 3rem 0;

    .article-meta {
        display: flex;
        justify-content: flex-end;
        font-size: 0.8125rem;
        color: var(--grey-5);
    }

    .meta-item {
        display: flex;
        align-items: center;
    }

    .ml:not(:first-child) {
        margin-left: 0.625rem;
    }

    .article-title {
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0.625rem 0;
        color: #d96d7f;
        overflow: hidden;
        font-size: larger;
        font-weight: bolder;
    }
}

.article-category {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0.5rem;
    font-size: 0.8125em;
    color: grey;
}
</style>