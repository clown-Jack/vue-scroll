import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class ElementScroll extends Vue {
    @Prop(Array) public count!: Array<Number>;
    protected render() {
        return (
            <ul>
                {
                    this.count.map(item => {
                        return <li class="infinite-list-item">{item}</li>
                    })
                }
            </ul>
        )
    }
}

