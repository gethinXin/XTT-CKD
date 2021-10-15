<template>
  <div>
    <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
      <div :class="['el-card__header', headerBorder || 'none-border']">
        <div class="card-header">
          <div :class="[headerAvatar && 'avatar']">
            <el-avatar v-if="headerAvatar" :size="30" :shape="shape" :src="defaultAvatar" @error="errorHandler">
              <img :src="imgSrc" />
            </el-avatar>
            <span :class="[headerAvatar || 'title']">{{ title }}</span>
          </div>
          <div>
            <slot name="header-extra"></slot>
          </div>
        </div>
      </div>
      <div class="el-card__body" :style="bodyStyle">
        <div class="text item">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import defaultAvatar from '@/assets/image/user/user.png'

export default {
  name: 'x-card',
  props: {
    header: {
      type: String,
      default: '',
    },
    headerBorder: {
      type: Boolean,
      default: true,
    },
    headerAvatar: {
      type: Boolean,
      default: false,
    },
    bodyStyle: {
      type: [String, Object, Array],
      default: '',
    },
    shadow: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: '',
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return ['circle', 'square'].includes(val)
      },
    },
  },
  setup() {
    const errorHandler = () => true
    return {
      defaultAvatar,
      errorHandler,
    }
  },
}
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div > .title:before {
    content: '';
    width: 5px;
    height: 15px;
    display: inline-block;
    background-color: #3963bc;
    margin-right: 5px;
    margin-bottom: -2px;
  }
}
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  & > span:nth-child(2) {
    margin-left: 10px;
  }
}

::v-deep(.el-icon-more) {
  transform: rotate(90deg);
}
::v-deep(.el-menu.el-menu--horizontal) {
  border: none;
}
::v-deep(.el-card__header) {
  padding: calc(var(--el-card-padding) - 2px) var(--el-card-padding);
  &.none-border {
    border: none;
  }
}
</style>
