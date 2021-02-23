<template>
  <div>
    <div>
      <div class="board-row">
        <Cell index="1" @selection="onCellSelection"></Cell>
        <Cell index="2" @selection="onCellSelection"></Cell>
        <Cell index="3" @selection="onCellSelection"></Cell>
      </div>
      <div class="board-row">
        <Cell index="4" @selection="onCellSelection"></Cell>
        <Cell index="5" @selection="onCellSelection"></Cell>
        <Cell index="6" @selection="onCellSelection"></Cell>
      </div>
      <div class="board-row">
        <Cell index="7" @selection="onCellSelection"></Cell>
        <Cell index="8" @selection="onCellSelection"></Cell>
        <Cell index="9" @selection="onCellSelection"></Cell>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "../components/Cell";
export default {
  name: "Board",
  components: {
    Cell
  },
  methods: {}
};
</script>

<style></style>
