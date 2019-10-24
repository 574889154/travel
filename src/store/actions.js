// export default {
//   changeCity (ctx, city) {
//     ctx.commit('changeCity', city)
//   }
// }
export default {
  changeCity ({ commit }, city) {
    commit('changeCity', city)
  }
}
