<template>
  <div class="popup-fade">
    <div class="popup">
      <div class="popup-close">
        <i class="far fa-times-circle" @click="close_task()"></i>
      </div>
      <label for="cng-desc" class="popup-label">Изменить описание:</label>
      <input
        type="text"
        placeholder="Add a description"
        class="change__description"
        id="cng-desc"
        value="'+infoDescription+''"
      />
      <select name="status" id="status" class="status-select">
        <option value="plan">Plan</option>
        <option value="process">In process</option>
        <option value="done">Done</option>
      </select>
      <div class="submit_btn" @click="edit_desc()">Сохранить</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {},
  data() {
    return {};
  },
  methods: {
    edit_desc() {},
    close_task() {}
  }
};
</script>