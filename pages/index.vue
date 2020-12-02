<template>
    <main>
        <h1>Pigskin Stats</h1>
        <div class="charts__container">
            <div class="charts__container__cell">
                <h2>Win Loss</h2>
                <div 
                    v-for="(yearitem, index) in this.winLoss"
                    :key="yearitem + index"
                    class="chart__container"
                >
                    <h3>{{ yearitem.year }}</h3>
                    <TableChart :tableObj="yearitem.basicData"/>
                </div>
            </div>
            <div class="charts__container__cell">
                <h2>Highest Points In A Game</h2>
                <div 
                    v-for="(yearitem, index) in this.highestPerGame"
                    :key="yearitem + index"
                    class="chart__container"
                >
                    <h3>{{ yearitem.year }}</h3>
                    <TableChart :tableObj="yearitem.basicData"/>
                </div>
            </div>
            <div class="charts__container__cell">
                <h2>Points Per Season</h2>
                <div 
                    v-for="(yearitem, index) in this.pointsPerSeason"
                    :key="yearitem + index"
                    class="chart__container"
                >
                    <h3>{{ yearitem.year }}</h3>
                    <TableChart :tableObj="yearitem.basicData"/>
                </div>
            </div>

<!-- BIGGEST BLOWOUTS -->
        </div>
    </main>
</template>

<script>
import BarChart from '~/components/bar-chart';
import LineChart from '~/components/line-chart';
import TableChart from '~/components/table-chart';

export default {
    data() {
        return {
            
        }
    },
    components: {
        BarChart,
        LineChart
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        stats: function () {
            return this.$store.state.statsData
        },
        leagueData: function () {
            return this.$store.state.leagueData
        },
        pointsPerSeason: function () {
            return this.$store.state.pointsPerSeason
        },
        highestPerGame: function () {
            return this.$store.state.highestPerGame
        },
        winLoss: function () {
            return this.$store.state.winLoss
        },
        lineChartOptions1: function () {
            return { 
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    lineTension: 1,
                    spanGaps: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 50,
                                suggestedMax: 250,
                                padding: 25,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                suggestedMin: 50,
                                suggestedMax: 250,
                                padding: 25,
                            }
                        }]
                    }
                }
            }
        },
        lineChartOptions2: function () {
            return {
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    lineTension: 1,
                    spanGaps: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 50,
                                suggestedMax: 220,
                                padding: 25,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                suggestedMin: 50,
                                suggestedMax: 220,
                                padding: 25,
                            }
                        }]
                    }
                }
            }
        },
        barChartYearly: function () {
            return {
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 1200,
                                suggestedMax: 2400,
                                padding: 10,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                suggestedMin: 80,
                                suggestedMax: 140,
                                padding: 10,
                            }
                        }]
                    }
                }
            }
        },
        barChartWeekly: function () {
            return {
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 60,
                                suggestedMax: 280,
                                padding: 10,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                suggestedMin: 80,
                                suggestedMax: 140,
                                padding: 10,
                            }
                        }]
                    }
                }
            }
        },
        barChartOptions2: function () {
            return {
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 100,
                                suggestedMax: 160,
                                padding: 10,
                            }
                        }]
                    }
                }
            }
        }
    },
    head() {
        return {
            script: [
                { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
            ],
        };
    },
};
</script>

<style>
main {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    color: #FFF;
    background-color: var(--blue-grey);
}

.charts__container {
    width: auto;
    max-width: 1400px;
    margin: 6px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
}
.charts__container__cell {
    width: 100%;
    max-width: 98%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    margin: 10px auto;
    padding: 10px 0;
    background-color: #FFF;
    border: 1px solid var(--turkish-blue);
    color: var(--text-color);
}
.chart__container {
    width: auto;
    max-width: 1800px;
    margin: 6px 8px 0;
    padding: 10px;
    background: #FFF;
}
.chart__container--half {
    flex: 1 1 46%;
}
.chart__container--third {
    flex: 1 1 31%;
}
.chart {
    width: auto;
    max-width: 100%;
    height: 100%;
    max-height: 500px;
}

.bar__chart {

}
.points__chart .chart {
    
}
.avg__per__game, .total__points {
    width: auto;
    flex: 1 1 40%;
    margin: 10px 20px;
    min-width: 400px;
}
.chart__side__by__side {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-around;
}


/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 768px) {
    body, html {
        font-size: 14px;
        line-height: 14px;
    }
    .charts__container {
        width: 100%;
    }
    .chart__container {
        width: 100%;
        margin: 4px auto 0;
        padding: 4px;
        background: #FFF;
    }
    .chart__table__inner {
        width: 96%;
        max-width: 300px;
        margin: 0 auto;
    }
    .chart__table__cell--name,
    .chart__table__cell--number {
        padding: 4px;
    }

}
</style>