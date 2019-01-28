<template>
<div>
  <div class="progress">
    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40"
         aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Complete (success)</span>
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20"
         aria-valuemin="0" aria-valuemax="100" style="width: 20%">
      <span class="sr-only">20% Complete</span>
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60"
         aria-valuemin="0" aria-valuemax="100" style="width: 60%">
      <span class="sr-only">60% Complete (warning)</span>
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80"
         aria-valuemin="0" aria-valuemax="100" style="width: 80%">
      <span class="sr-only">80% Complete (danger)</span>
    </div>
  </div>
  <div>
    <h2>Alert Messager</h2>
    <LinkButton @click="alert1()">Alert</LinkButton>
    <LinkButton @click="alert2()">Error</LinkButton>
    <LinkButton @click="alert3()">Info</LinkButton>
    <LinkButton @click="alert4()">Question</LinkButton>
    <LinkButton @click="alert5()">Warning</LinkButton>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    alert1() {
      this.$messager.alert({
        title: "Alert",
        msg: "Here is a message!"
      });
    },
    alert2() {
      this.$messager.alert({
        title: "Error",
        icon: "error",
        msg: "Here is an error message!"
      });
    },
    alert3() {
      this.$messager.alert({
        title: "Info",
        icon: "info",
        msg: "Here is a info message!"
      });
    },
    alert4() {
      this.$messager.alert({
        title: "Question",
        icon: "question",
        msg: "Here is a question message!"
      });
    },
    alert5() {
      this.$messager.alert({
        title: "Warning",
        icon: "warning",
        msg: "Here is a warning message!"
      });
    }
  }
};
</script>
<style>

</style>
