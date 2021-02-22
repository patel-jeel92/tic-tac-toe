<template>
  <button class="button" @click="handleClick">{{ value }}</button>
</template>

<script>
export default {
  name: "Cell",
  data: () => {
    return {
      // TODO: Remove default value.
      value: "X",
      frozen: Boolean
    };
  },
  props: {
    index: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      // TODO: Finish stub method.
      if (!this.frozen) {
        this.value = this.activePlayer;
        this.frozen = true;
        this.$emit("selection", this.index);
      }
    }
  }
};
</script>

<style>
.button {
  width: 64px;
  height: 64px;
}
</style>
