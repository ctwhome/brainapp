<template>
  <div class="flex flex-col">
    <div class="container mx-auto text-xl">
      Second brain App (with Nuxt, Supabase, Tailwind, Tiptap, and )
    </div>
    <tiptap class="container p-4 mx-auto mt-10 border" />

    <!-- <tutorial class="mt-20" /> -->
    <!-- <blog-list :posts="posts" :more="true" /> -->
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    // blog list
    const posts = await $content('posts')
      .limit(4)
      .sortBy('date', 'asc')
      .fetch()

    return {
      posts
    }
  }
}
</script>

<style>
.boc{
  /*background: rgba(var(--b3));*/
  content: var(--b3)
}
</style>
