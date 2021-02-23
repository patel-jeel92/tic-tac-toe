<template>
  <button class="button" @click="handleClick">
    {{ this.cells[this.index].mark }}
  </button>
</template>

<script>
import { addPlayerTurn } from "@/store/actions.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cell",
  props: {
    index: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["activePlayer", "cells"])
  },
  methods: {
    ...mapActions([addPlayerTurn]),
    handleClick() {
      if (!this.cells[this.index].frozen) {
        const mark = this.activePlayer;
        this.addPlayerTurn({ index: this.index, mark: mark, frozen: true });
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
