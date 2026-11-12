'use strict'

// 封面图片判定的单一来源。
// random_cover.js（处理 Post）与 scripts/i18n-posts.js（物化译文 Page）共用，
// 避免两处各自维护正则与 cover_type 规则导致漂移。
const IMG_TEST_REG = /\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i

const isImageCover = (val) => {
  const s = val ? String(val) : ''
  return !!s && (s.indexOf('//') !== -1 || IMG_TEST_REG.test(s))
}

module.exports = { IMG_TEST_REG, isImageCover }