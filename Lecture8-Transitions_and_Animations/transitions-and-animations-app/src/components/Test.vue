<template>
  <transition name="fade-in">
    <h1>{{ messsage }}</h1>
  </transition>
</template>

<style>
.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;   /* Sets the starting state as completely hidden. */
}
.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 3s ease-in; /* Will perform a transition to the opacity state within 3 seconds */
}
</style>
