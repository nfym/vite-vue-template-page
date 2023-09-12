<!--
 * @Description: 登录页
 * @Date: 2023-09-06 18:11:26
 * @LastEditTime: 2023-09-12 15:02:21
-->
<script setup lang="ts">
import { ref, reactive, UnwrapRef } from 'vue'
import { useRoute } from 'vue-router'
import { useSwitchPage, useI18n } from '@/hooks'

interface FormState {
  username: string
  password: string
}

const prefixCls = ref('login')
const switchPage = useSwitchPage()
const { $t, locale } = useI18n()
const route = useRoute()

const errorMsg = ref('')
const formState: UnwrapRef<FormState> = reactive({
  username: '',
  password: ''
})

function goHomePage() {
  if (route.query.redirect) {
    window.location.href = route.query.redirect as string
  } else {
    switchPage({ name: 'DataManage' })
  }
}
function removeLoginFailed() {
  errorMsg.value = ''
}
const handleFinish = async () => {
  if (formState.username === 'test' && formState.password === '123456') {
    goHomePage()
  } else {
    errorMsg.value = $t('login.error')
  }
}

const toggleLocale = () => {
  locale.value = locale.value == 'en_US' ? 'zh_CN' : 'en_US'
}
const toggleMode = () => {
  toolbarData[0].icon =
    toolbarData[0].icon === 'ri-moon-line' ? 'ri-sun-line' : 'ri-moon-line'
}

const toolbarData = reactive([
  {
    icon: 'ri-sun-line',
    title: $t('login.toggleMode'),

    func: toggleMode
  },
  {
    icon: 'ri-translate',
    title: $t('login.toggleLocale'),
    func: toggleLocale
  }
])
</script>

<template>
  <comp-scrollbar>
    <div :class="prefixCls">
      <section :class="`${prefixCls}__left-wrap`"></section>

      <section :class="`${prefixCls}__right-wrap`">
        <div :class="`${prefixCls}__right-content`">
          <div :class="`${prefixCls}__head`">
            <!-- <img
              src="/logo.svg"
              :class="`${prefixCls}__logo`"
              alt="system logo"
            /> -->
            {{ $t('actions.login') }}
          </div>
          <span :class="`${prefixCls}__title`">
            {{ $t('fields.title') }}
          </span>

          <a-form
            :model="formState"
            :class="`${prefixCls}__form`"
            @finish="handleFinish"
          >
            <a-form-item>
              <a-input
                v-model:value.trim="formState.username"
                size="large"
                :class="`${prefixCls}__form-input`"
                placeholder="请输入 test"
                @change="removeLoginFailed"
              />
            </a-form-item>
            <a-form-item>
              <a-input-password
                v-model:value="formState.password"
                size="large"
                :class="`${prefixCls}__form-input`"
                placeholder="请输入 123456"
                autocomplete
                @change="removeLoginFailed"
              />
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                block
                html-type="submit"
                size="large"
                :class="`${prefixCls}__btn`"
                :disabled="
                  formState.username === '' || formState.password === ''
                "
              >
                {{ $t('actions.login') }}
              </a-button>
            </a-form-item>
            <span :class="[`${prefixCls}__failed`, { showFailed: !errorMsg }]">
              {{ errorMsg }}
            </span>
          </a-form>
        </div>

        <div :class="`${prefixCls}__triangle`">
          <div :class="`${prefixCls}__topLeft`"></div>
          <div :class="`${prefixCls}__topRight`"></div>
          <div :class="`${prefixCls}__btmLeft`"></div>
          <div :class="`${prefixCls}__btmRight`"></div>
        </div>
      </section>

      <section :class="`${prefixCls}__toolbar`">
        <comp-toolbar
          shape="circle"
          type="default"
          size="large"
          :icon-data="toolbarData"
        ></comp-toolbar>
      </section>
    </div>
  </comp-scrollbar>
</template>

<style lang="less" scoped>
@prefix-cls: ~'login';

.@{prefix-cls} {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;

  &__left-wrap {
    position: relative;
    width: 40%;
    min-width: 400px;
    height: 100%;
    min-height: 460px;
    background: url('@/assets/petting.svg') no-repeat;
    background-color: #95cafe;
    background-position: left bottom;
    background-size: 100%;
  }

  &__right-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    min-width: 600px;
    height: 100%;
    min-height: 460px;
    background-color: @gray-1;
  }

  &__right-content {
    z-index: 9;
    width: 20rem;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    color: @heading-color;
    font-size: 1.75rem;
    line-height: 1.75rem;
    border-bottom: 1px solid #f0f0f1;
  }

  &__logo {
    height: 2rem;
    margin-right: 1rem;
    will-change: filter;
  }

  &__logo:hover {
    filter: drop-shadow(0 0 2rem #78b4fe);
  }

  &__title {
    color: @gray-8;
    font-size: 1rem;
  }

  &__content {
    z-index: 9;
    width: 20rem;
    height: 380px;
    margin-right: 30%;
  }

  &__form {
    margin-top: 2rem;
  }

  &__form-input {
    font-size: 0.875rem;
    background-color: @gray-3;
  }

  &__failed {
    display: block;
    height: 1.5rem;
    color: @error-color;
    line-height: 1.5rem;
    visibility: visible;
  }

  .showFailed {
    visibility: hidden;
  }

  // input 输入
  :deep(.ant-input) {
    color: @gray-8;
    border: 1px solid @border-color-base;

    &::placeholder {
      color: @gray-6;
    }

    &:hover,
    &:focus {
      border-color: @primary-color-5;
    }
  }

  // 密码输入
  :deep(.ant-input-affix-wrapper) {
    // content 内层
    > input.ant-input {
      background-color: @gray-3;
      border: none;
    }
  }

  // 修改禁用按钮样式
  :deep(
      .ant-btn-primary[disabled],
      .ant-btn-primary[disabled]:hover,
      .ant-btn-primary[disabled]:focus,
      .ant-btn-primary[disabled]:active
    ) {
    color: #fff;
    text-shadow: none;
    background: @primary-color;
    border-color: @primary-color;
    box-shadow: none;
    opacity: 0.5;
  }

  // 浏览器自动填入
  :deep input:-webkit-autofill {
    -webkit-text-fill-color: #595958 !important;
    background-color: #fff;
    background-image: none;
    transition: background-color 50000s ease-in-out 0s;
  }

  &__triangle {
    width: 0;
    height: 0;
  }

  &__topLeft {
    position: absolute;
    top: 0;
    left: 0;
    border-top: 10rem solid #f6fbfd;
    border-right: 10rem solid transparent;
  }

  &__topRight {
    position: absolute;
    top: 0;
    right: 0;
    border-top: 10rem solid #f6fbfd;
    border-left: 10rem solid transparent;
  }

  &__btmLeft {
    position: absolute;
    bottom: 0;
    left: 0;
    border-right: 10rem solid transparent;
    border-bottom: 10rem solid #f6fbfd;
  }

  &__btmRight {
    position: absolute;
    right: 0;
    bottom: 0;
    border-bottom: 10rem solid #f6fbfd;
    border-left: 10rem solid transparent;
  }

  &__toolbar {
    position: fixed;
    top: 1rem;
    right: 0.5rem;
  }
}
</style>
