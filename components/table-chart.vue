<template>
    <div class="chart__table">
        <div class="chart__table__inner">
            <div
                v-for="item in tableObj"
                :key="item.name + item.stat"
                class="chart__table__cell"
            >
                <div class="chart__table__cell--name">
                    {{ item.name }}
                </div>
                <div
                    v-if="Number.isInteger(item.stat)"
                    class="chart__table__cell--number"
                >
                    {{ item.stat.toFixed(2) }}
                </div>
                <div
                    v-else-if="typeof item.stat === 'number'"
                    class="chart__table__cell--number"
                >
                    {{ item.stat.toFixed(2) }}
                </div>
                <div
                    v-else
                    class="chart__table__cell--number"
                >
                    {{ item.stat }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: {
        tableObj: Array
    },
    computed: {

    },
    methods: {

    }
}
</script>

<style>
.chart__table {
    flex: 1 1 auto;
}
.chart__table__inner {
    width: 220px;
    border: 1px solid var(--turkish-blue);
}
.chart__table__cell {
    display: flex;
    flex-direction: row;
}
.chart__table__cell:nth-of-type(odd) {
    background-color: var(--turkish-blue); 
    color: #FFF;
}
.chart__table__cell:nth-of-type(1) {
    background-color: var(--blue-grey); 
    font-weight: 700;
}
.chart__table__cell--name {
    flex: 1;
    text-align: left;
    padding: 6px 8px 6px 6px;
}
.chart__table__cell--number {
    flex: 1;
    text-align: right;
    padding: 6px 6px 6px 8px;
}
</style>
