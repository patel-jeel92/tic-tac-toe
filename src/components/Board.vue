<template>
  <div>
    <div>
      <div class="board-row">
        <Cell index="1"></Cell>
        <Cell index="2"></Cell>
        <Cell index="3"></Cell>
      </div>
      <div class="board-row">
        <Cell index="4"></Cell>
        <Cell index="5"></Cell>
        <Cell index="6"></Cell>
      </div>
      <div class="board-row">
        <Cell index="7"></Cell>
        <Cell index="8"></Cell>
        <Cell index="9"></Cell>
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
  }
};
</script>
