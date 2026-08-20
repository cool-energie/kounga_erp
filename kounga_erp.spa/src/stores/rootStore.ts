import ViewMessageModel from '@/types/ViewMessageModel'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  infoColor,
  noticeColor,
  warningColor,
  warningIcon,
  noticeIcon,
  infoIcon,
  errorColor,
  errorIcon,
} from '@/helpers/consts'

export const useRootStore = defineStore('rootStore', () => {
  const snackbars = ref(new Array<ViewMessageModel>())
  const viewMessages = ref(new Array<ViewMessageModel>())
  let i = ref(0)

  function addSnackbar(model) {
    snackbars.value.push(model)
  }

  function addViewMessage(model) {
    viewMessages.value.push(model)
  }

  function clearSnackbar() {
    snackbars.value = new Array<ViewMessageModel>()
  }

  function clearViewMessage() {
    viewMessages.value = viewMessages.value.filter((m) => !m.showed)
  }

  function markViewMessage() {
    viewMessages.value.forEach((m) => {
      m.showed = true
    })
  }

  function showSnackbar(text: string, prependIcon: string, color: string) {
    addSnackbar({ color, prependIcon, text })
  }

  function showErrorSnackbar(text: string) {
    addSnackbar({ color: errorColor, prependIcon: errorIcon, text })
  }

  function showInfoSnackbar(text: string) {
    addSnackbar({ color: infoColor, prependIcon: infoIcon, text })
  }

  function showNoticeSnackbar(text: string) {
    addSnackbar({ color: noticeColor, prependIcon: noticeIcon, text })
  }

  function showWarningSnackbar(text: string) {
    addSnackbar({ color: warningColor, prependIcon: warningIcon, text })
  }

  function showViewMessage(text: string, prependIcon: string, color: string) {
    addViewMessage({ color, prependIcon, text })
  }

  function showInfoViewMessage(text: string) {
    addViewMessage({ color: infoColor, prependIcon: infoIcon, text })
  }

  function showNoticeViewMessage(text: string) {
    addViewMessage({ color: noticeColor, prependIcon: noticeIcon, text })
  }

  function showWarningViewMessage(text: string) {
    addViewMessage({ color: warningColor, prependIcon: warningIcon, text })
  }

  return {
    snackbars,
    showSnackbar,
    showInfoSnackbar,
    showNoticeSnackbar,
    showWarningSnackbar,
    clearSnackbar,
    viewMessages,
    showNoticeViewMessage,
    showInfoViewMessage,
    clearViewMessage,
    markViewMessage,
    showErrorSnackbar,
  }
})
