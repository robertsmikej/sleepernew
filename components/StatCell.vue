<template>
    <div class="indiv__stat__cell">
        <h2 v-if="cell.number">{{ cell.number }}</h2>
        <h3 v-if="header">{{ header }}</h3>
        <div class="indiv__stat__player__cell">
            <p v-if="cell.winner">Winner: {{ cell.winner }}</p>
            <p v-if="cell.loser">Loser: {{ cell.loser }}</p>
            <p v-if="cell.week">Week {{ cell.week }}</p>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        header: String,
        cell: Object
    }
}
</script>

<style>
.indiv__stat__cell {
    margin: 10px;
    padding: 20px 30px;
    border: 1px solid #232323;
    border-radius: 5px;
}
.indiv__stat__player__cell {

}
.indiv__stat__cell h2 {
    margin: 0;
    font-size: 3em;
}
.indiv__stat__cell h3 {
    margin: 3px 0 3px;
}
.indiv__stat__cell p {
    margin: 0;
}
.indiv__stat__cell p:nth-of-type(1){
    color: green;
}
.indiv__stat__cell p:nth-of-type(2){
    color: red;
}
</style>
