<template>
  <div>
    <bubble-menu
      v-if="editor"
      class="bubble-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button :class="{ 'is-active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
        Bold
      </button>
      <button :class="{ 'is-active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
        Italic
      </button>
      <button :class="{ 'is-active': editor.isActive('strike') }" @click="editor.chain().focus().toggleStrike().run()">
        Strike
      </button>
    </bubble-menu>

    <floating-menu
      v-if="editor"
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
    >
      <button :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">
        H1
      </button>
      <button :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">
        H2
      </button>
      <button :class="{ 'is-active': editor.isActive('bulletList') }" @click="editor.chain().focus().toggleBulletList().run()">
        Bullet List
      </button>
    </floating-menu>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import {
  Editor,
  EditorContent,
  BubbleMenu,
  FloatingMenu
} from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu
  },

  data () {
    return {
      editor: null
    }
  },

  mounted () {
    this.editor = new Editor({
      extensions: [
        StarterKit
      ],
      content: `
        <p>
          Try to select <em>this text</em> to see what we call the bubble menu.
        </p>
        <p>
          Neat, isn’t it? Add an empty paragraph to see the floating menu.
        </p>
      `
    })
  },

  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

<style>
/* Basic editor styles */
/* .ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }
} */

.bubble-menu {
  display: flex;
  background-color: #0D0D0D;
  padding: 0.2rem;
  border-radius: 0.5rem;
}
  .bubble-menu button {
    border: none;
    background: none;
    color: #FFF;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    /* &:hover, */
    /* &.is-active { */
      /* opacity: 1; */
    /* } */

}

.floating-menu {
  display: flex;
  background-color: #0D0D0D10;
  padding: 0.2rem;
  border-radius: 0.5rem;
}
 .floating-menu button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    /* &:hover,
    &.is-active {
      opacity: 1;
    } */
  }
</style>
