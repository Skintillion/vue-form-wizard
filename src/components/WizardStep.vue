<template>
  <li :class="{active:tab.active}">
    <a href="javascript:void(0)" :class="{disabled: isDisabled}">
      <slot name="title">
        <span class="stepTitle"
              :class="{active:tab.active, has_error:tab.validationError}"
              :style="tab.active ? stepTitleStyle : {}">
              {{tab.title}}
        </span>
      </slot>
    </a>
  </li>
</template>
<script>
  export default {
    name: 'wizard-step',
    props: {
      tab: {
        type: Object,
        default: () => {

        }
      },
      transition: {
        type: String,
        default: ''
      },
      index: {
        type: Number,
        default: 0
      },
      allowSkip: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      iconActiveStyle () {
        return {
          backgroundColor: this.tab.color
        }
      },
      stepCheckedStyle () {
        return {
          borderColor: this.tab.color
        }
      },
      errorStyle () {
        return {
          borderColor: this.tab.errorColor,
          backgroundColor: this.tab.errorColor
        }
      },
      stepTitleStyle () {
        let isError = this.tab.validationError
        return {
          color: isError ? this.tab.errorColor : this.tab.color
        }
      },
      isStepSquare () {
        return this.tab.shape === 'square'
      },
      isTabShape () {
        return this.tab.shape === 'tab'
      },
      isDisabled() {
        if (this.allowSkip) {
            return false;
        }
        return !this.tab.checked;
      }
    }
  }
</script>
<style>
</style>
