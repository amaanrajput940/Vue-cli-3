<template>
 <div>
	<center><h1 class="thin">My Blog</h1></center>
	<Articles />
 </div>
</template>

<script>
    import Articles from '@/components/Articles.vue'
    export default {
        name: 'blog',
        components: {
            Articles
        }
    }
</script>
