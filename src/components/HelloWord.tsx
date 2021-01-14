import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(prop) {
    const count = ref(0)
    const handleClick: () => number = () => count.value++
    return () => (
      <>
        <h1>{prop.msg}</h1>
        <button onClick={handleClick}>count is: {count.value}</button>
      </>
    )
  }
})
