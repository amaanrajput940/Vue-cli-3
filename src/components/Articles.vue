<template>
    <div class="articles">
        <div class="posts" v-for="(post, index) in posts" :key="index">
            <h1><router-link :to="post.permalink">{{post.title}}</router-link></h1>
            <p>Posted by - {{post.author.name}}</p>
            <div v-html="post.content">{{post.content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'articles',
        data () {
            return {
                posts: [
                    {
                        title: "PHP Tutorial for Beginners: Learn in 10 Days",
                        permalink: "php-tutorial-for-beginners",
                        content: "Tutorial: <a href='https://amaanrajput.me/php-tutorial-for-beginners-learn-in-10-days/'>https://amaanrajput.me/php-tutorial-for-beginners-learn-in-10-days/</a>",
                        author: {
                            name: "Amaan Rajput"
                        }
                    },
                    {
                        title: "Build a web application with Vue JS!",
                        permalink: "build-a-web-application-with-vue-js",
                        content: "Tutorial: <a href='https://amaanrajput.me/vue-cli-how-to-create-a-website-with-vue-js'>https://amaanrajput.me/vue-cli-how-to-create-a-website-with-vue-js</a>",
                        author: {
                            name: "Amaan Rajput"
                        }
                    },
                    {
                        title: "Why choose Laravel rather than other PHP frameworks",
                        permalink: "why-choose-laravel-rather-than-other-php-frameworks",
                        content: "Tutorial: <a href='https://amaanrajput.me/why-choose-laravel-rather-than-other-php-frameworks/'>https://amaanrajput.me/why-choose-laravel-rather-than-other-php-frameworks/</a>",
                        author: {
                            name: "Amaan Rajput"
                        }
                    }
                ]
            }
        }
    }
</script>
