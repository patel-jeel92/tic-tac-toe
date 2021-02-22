<template>
  <button class="button" @click="handleClick">{{ value }}</button>
</template>

<script>
export default {
  name: "Cell",
  data: () => {
    return {
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
      // TODO: Handle click event. Use store action to update cell map with active Player and update value.
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
