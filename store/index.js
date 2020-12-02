const axios = require('axios');

const years = ["2019", "2020"];
const colors = [
    "#0074D9",
    "#7FDBFF",
    "#39CCCC",
    "#FF4136",
    "#2ECC40",
    "#FFDC00",
    "#F012BE",
    "#B10DC9",
    "#111111",
    "#01FF70",
    "#F80063",
    "#F08F1E"
];

function chartOptions(type) {
    if (type === "barChartYearly") {
        return {
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
    } else if (type === "barChartWeekly") {
        return {
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
}

export const state = () => ({
    sitewide: {},
    statsData: {},
    leagueData: {},
    pointsPerSeason: {},
    highestPerGame: {},
    winLoss: {}
});

export const getters = {
    sitewide: state => state.sitewide,
    statsData: state => state.statsData,
    leagueData: state => state.leagueData,
    pointsPerSeason: state => state.pointsPerSeason,
    highestPerGame: state => state.highestPerGame,
    winLoss: state => state.winLoss,
};

function sortArr(arr, string = "stat") {
    return arr.sort((b, a) => (a[string] > b[string]) ? 1 : -1)
}
function getWeeksInSeason(weeks) {
    let weekCounter = -1;
    for (let w in weeks) {
        if (Object.keys(weeks[w].players).length > 0) {
            weekCounter++
        }        
    }
    return weekCounter;
}

function pointsPerSeason(stats, season) {
    let dataObj = {
        labels: [],
        datasets: [{
            label: 'Yearly Points',
            data: [],
            backgroundColor: colors
        }],
        options: chartOptions("barChartYearly"),
        year: season,
        basicData: []
    };
    let weeks = stats[season].weeks;
    for (let w in weeks) {
        let week = weeks[w];
        for (let p in week.players) {
            let player = week.players[p];
            let labelIndex = dataObj.labels.indexOf(player.name);
            let points = Number(player.player.points.actual);
            if (dataObj.labels.indexOf(player.name) >= 0) { //IF PLAYER EXISTS
                dataObj.datasets[0].data[labelIndex] = dataObj.datasets[0].data[labelIndex] + points;
                //BASIC DATA

                let playerIndex = dataObj.basicData.findIndex(function (p) { 
                    return p.name === player.player.name
                });  
                dataObj.basicData[playerIndex].stat = dataObj.basicData[playerIndex].stat + points;
                
            } else { //IF PLAYER DOESN'T EXIST YET
                dataObj.labels.push(player.name);
                dataObj.datasets[0].data.push(points);

                //BASIC DATA
                dataObj.basicData.push({
                    name: player.name,
                    stat: points
                });
            }
        }
    }
    sortArr(dataObj.basicData);
    return dataObj;
}
function pointsPerSeasonAll(stats) {
    let dataObj = {
        year: "All Time",
        basicData: []
    };
    // console.log(stats);
    let newArr = [];
    for (let s in stats) {
        let basic = stats[s].basicData;
        basic.forEach(stat => {
            newArr.push(stat);
        });        
    }
    let sorted = sortArr(newArr);
    dataObj.basicData = sorted.slice(0, 16);
    return dataObj;
}


function highestPerGame(stats, season) {
    let dataObj = {
        labels: [],
        datasets: [{
            label: 'Highest Per',
            data: [],
            backgroundColor: colors
        }],
        options: chartOptions("barChartWeekly"),
        year: season,
        basicData: []
    };
    let weeks = stats[season].weeks;
    for (let w in weeks) {
        let week = weeks[w];
        for (let p in week.players) {
            let player = week.players[p];
            let labelIndex = dataObj.labels.indexOf(player.name);
            let points = Number(player.player.points.actual);
            if (dataObj.labels.indexOf(player.name) >= 0) { //IF PLAYER EXISTS
                if (dataObj.datasets[0].data[labelIndex] <= points) { 
                    dataObj.datasets[0].data[labelIndex] = points;
                }
                //BASIC DATA
                let playerIndex = dataObj.basicData.findIndex(p => p.name === player.name);
                if (dataObj.basicData[playerIndex].stat <= points) {
                    dataObj.basicData[playerIndex].stat = points;
                }
            } else { //IF PLAYER DOESN'T EXIST YET
                dataObj.labels.push(player.name);
                dataObj.datasets[0].data.push(points);
                //BASIC DATA
                dataObj.basicData.push({
                    name: player.name,
                    stat: points
                });
            }
        }
    }
    sortArr(dataObj.basicData);
    return dataObj;
}
function highestPerGameAll(stats) {
    let dataObj = {
        year: "All Time",
        basicData: []
    };
    // console.log(stats);
    let newArr = [];
    for (let s in stats) {
        let basic = stats[s].basicData;
        basic.forEach(stat => {
            newArr.push(stat);
        });        
    }
    let sorted = sortArr(newArr);
    dataObj.basicData = sorted.slice(0, 16);
    return dataObj;
}


function winLoss(stats, season) {
    let dataObj = {
        year: season,
        basicData: []
    };
    let weeks = stats[season].weeks;
    let weeksInSeason = getWeeksInSeason(weeks);
    let lastWeek = weeks[weeksInSeason];
    for (let p in lastWeek.players) {
        let player = lastWeek.players[p];
        dataObj.basicData.push({
            name: player.name,
            stat: player.player.current_record.wins + "-" + player.player.current_record.losses,
            wins: player.player.current_record.wins,
            losses: player.player.current_record.losses
        });
    }
    sortArr(dataObj.basicData, 'wins');
    console.log(dataObj);
    return dataObj;
}
function winLossAll(stats) {
    let dataObj = {
        year: "All Time",
        basicData: []
    };
    console.log(stats);
    let statsCopy = JSON.parse(JSON.stringify(stats));
    for (let s in statsCopy) {
        let basic = statsCopy[s].basicData;
        for (let p in basic) {
            let player = basic[p];
            let playerIndex = dataObj.basicData.findIndex(p => p.name === player.name);
            if (playerIndex > -1) {
                dataObj.basicData[playerIndex].wins = dataObj.basicData[playerIndex].wins + player.wins;
                dataObj.basicData[playerIndex].losses = dataObj.basicData[playerIndex].losses + player.losses;
                dataObj.basicData[playerIndex].stat = dataObj.basicData[playerIndex].wins + "-" + dataObj.basicData[playerIndex].losses
            } else {
                dataObj.basicData.push(player)
            }
            // if (dataObj.basicData[playerIndex].stat <= points) {
            //     console.log(player);
            // }
        }
        
    }
    sortArr(dataObj.basicData, 'wins');
    console.log(dataObj);
    return dataObj;
}

export const mutations = {
    setSitewide(state, data) {
        data.current_week = 15;
        state.sitewide = data;
    },
    setStats(state, data) {
        state.statsData = data[0];
        let statsObj = data[0];
        let newLeagueDataObj = {};
        for (let y in statsObj) {
            newLeagueDataObj[y] = {
                playerList: []
            };
            let year = statsObj[y];
            if (year.hasOwnProperty("weeks")) {
                for (let w in year.weeks) {
                    let week = year.weeks[w];
                    Object.keys(week.players).forEach(name => {
                        //CREATE LIST OF PLAYER NAMES
                        if (newLeagueDataObj[y].playerList.indexOf(name) === -1) {
                            newLeagueDataObj[y].playerList.push(name);
                        }
                    });
                }
            }
        }
        state.leagueData = newLeagueDataObj;

        for (let y in years) {
            state.pointsPerSeason[years[y]] = pointsPerSeason(statsObj, years[y]);
            state.highestPerGame[years[y]] = highestPerGame(statsObj, years[y]);

            state.winLoss[years[y]] = winLoss(statsObj, years[y]);
        }
        state.pointsPerSeason["all_time"] = pointsPerSeasonAll(state.pointsPerSeason); //MUST BE AFTER OTHER  FUNCTION CALLS - NEEDS THAT DATA
        state.highestPerGame["all_time"] = highestPerGameAll(state.highestPerGame); //MUST BE AFTER OTHER FUNCTION CALLS - NEEDS THAT DATA
        state.winLoss["all_time"] = winLossAll(state.winLoss); //MUST BE AFTER OTHER FUNCTION CALLS - NEEDS THAT DATA
        
        
    },

};





export const actions = {
    async nuxtServerInit({ commit }) {
        // let sitewideFiles = await require.context('~/assets/content/sitewide/', false, /\.json$/);
        // let sitewides = sitewideFiles.keys().map(key => {
        //     let res = sitewideFiles(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setSitewide', sitewides[0]);

        let statsData = await require.context('~/assets/content/stats', false, /\.json$/);
        let d = statsData.keys().map(key => {
            let res = statsData(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setStats', d);

        // let players = await require.context('~/static/stats/playerdata/', false, /\.json$/);
        // let nfl = players.keys().map(key => {
        //     let res = players(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setNFLPlayers', nfl);
        
    }
};