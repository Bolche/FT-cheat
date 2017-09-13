webpackJsonp([ 2 ], {
    0: function(e, a, i) {
        i(433), i(114), i(129), i(230), i(434), i(81), i(435), i(65), i(101), i(436), i(98), 
        i(102), i(437), i(71), i(438), i(439), i(440), i(110), i(87), i(116), i(118), i(441), 
        i(266), i(127), i(120), i(124), i(132), i(106), i(295), i(140), e.exports = i(374);
    },
    2: function(e, a) {
        e.exports = vendor_lib;
    },
    8: function(e, a, i) {
        e.exports = i(2)(29);
    },
    65: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = [ {
            typeId: 100213,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            comment: "Short for 'the amount of gold received for X hours'",
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 1
            }),
            price: {
                crowns: 50
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 3600
                }
            },
            hours: 1
        }, {
            typeId: 100214,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 6
            }),
            price: {
                crowns: 250
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 21600
                }
            },
            hours: 6
        }, {
            typeId: 100215,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 24
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 100216,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 1
            }),
            price: {
                crowns: 50
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 3600
                }
            },
            hours: 1
        }, {
            typeId: 100217,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 6
            }),
            price: {
                crowns: 250
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 21600
                }
            },
            hours: 6
        }, {
            typeId: 100218,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 24
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 100219,
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 1
            }),
            price: {
                crowns: 100
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    time: 3600
                }
            },
            hours: 1
        }, {
            typeId: 100220,
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 6
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    time: 21600
                }
            },
            hours: 6
        }, {
            typeId: 100221,
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 24
            }),
            price: {
                crowns: 1e3
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 100222,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "100",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "100"
            }),
            resource: "gold",
            price: {
                crowns: 60
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 1
                } ] ]
            }
        }, {
            typeId: 100223,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "1K"
            }),
            resource: "gold",
            price: {
                crowns: 480
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 10
                } ] ]
            }
        }, {
            typeId: 100224,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "10K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "10K"
            }),
            resource: "gold",
            price: {
                crowns: 4e3
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 100
                } ] ]
            }
        }, {
            typeId: 100225,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "100",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "100"
            }),
            resource: "shards",
            price: {
                crowns: 60
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 1
                } ] ]
            }
        }, {
            typeId: 100226,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "1K"
            }),
            resource: "shards",
            price: {
                crowns: 480
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 10
                } ] ]
            }
        }, {
            typeId: 100227,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "10K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "10K"
            }),
            resource: "shards",
            price: {
                crowns: 4e3
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 100
                } ] ]
            }
        }, {
            typeId: 100228,
            name: r("More {resource} dropped", {
                resource: r("Gems")
            }),
            mult: "100",
            description: r("Increase the amount of Gems dropped by the bosses (level 100 and above) by 100%"),
            resource: "gems",
            price: {
                crowns: 500
            },
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gems", {
                    value: 1
                } ] ]
            }
        }, {
            typeId: 100229,
            name: r("Instant reborn"),
            description: r("You instantly get reborn bonuses without losing progress"),
            price: {
                crowns: 500
            },
            tag: "reborn",
            virtual: 1,
            qty: 1,
            reward: {
                reborn: 1
            }
        }, {
            typeId: 100230,
            name: r("Balancer"),
            description: r("Increase the chance Gems are being dropped by the bosses (level 100 and above) by 100%"),
            price: {
                crowns: 1e3
            },
            tag: "balancer",
            virtual: 1,
            qty: 1,
            reward: {
                counters: {
                    MBGMS: 1
                }
            }
        }, {
            typeId: 100231,
            name: r("More {resource} within {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 2
                })
            }),
            resource: "gold",
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}% within {hours}h.", {
                resource: r("Gold"),
                percent: "1K",
                hours: 2
            }),
            price: {
                crowns: 50
            },
            tag: "mult_temporal",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 10,
                    actionTime: 7200
                } ] ]
            }
        }, {
            typeId: 100232,
            name: r("More {resource} within {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "gold",
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}% within {hours}h.", {
                resource: r("Gold"),
                percent: "1K",
                hours: 24
            }),
            price: {
                crowns: 300
            },
            tag: "mult_temporal",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 10,
                    actionTime: 86400
                } ] ]
            }
        }, {
            typeId: 100233,
            name: r("More {resource} within {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 2
                })
            }),
            resource: "shards",
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}% within {hours}h.", {
                resource: r("Shards"),
                percent: "1K",
                hours: 2
            }),
            price: {
                crowns: 50
            },
            tag: "mult_temporal",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 10,
                    actionTime: 7200
                } ] ]
            }
        }, {
            typeId: 100234,
            name: r("More {resource} within {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "shards",
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}% within {hours}h.", {
                resource: r("Shards"),
                percent: "1K",
                hours: 24
            }),
            price: {
                crowns: 300
            },
            tag: "mult_temporal",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 10,
                    actionTime: 86400
                } ] ]
            }
        }, {
            typeId: 100236,
            name: "Crowns x 150",
            price: {
                real: 2
            },
            amount: 150,
            points: 55,
            crownsNumStyle: 1,
            pi_code: "corecw2p1043631",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 55
                },
                res: {
                    crowns: 150
                }
            }
        }, {
            typeId: 100237,
            name: "Crowns x 400",
            price: {
                real: 5
            },
            amount: 400,
            extra_amount: 25,
            points: 75,
            crownsNumStyle: 2,
            pi_code: "corecw3p1043632",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 75
                },
                res: {
                    crowns: 400
                }
            }
        }, {
            typeId: 100238,
            name: "Crowns x 1000",
            price: {
                real: 10
            },
            amount: 1e3,
            extra_amount: 250,
            points: 105,
            crownsNumStyle: 3,
            pi_code: "corecw4p1043633",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 105
                },
                res: {
                    crowns: 1e3
                }
            }
        }, {
            typeId: 100239,
            name: "Crowns x 2200",
            price: {
                real: 20
            },
            amount: 2200,
            extra_amount: 700,
            points: 310,
            crownsNumStyle: 4,
            hren: "hot",
            pi_code: "corecw5p1043634",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 310
                },
                res: {
                    crowns: 2200
                }
            }
        }, {
            typeId: 100240,
            name: "Crowns x 5000",
            price: {
                real: 40
            },
            amount: 5e3,
            extra_amount: 2e3,
            points: 550,
            crownsNumStyle: 5,
            hren: "best",
            pi_code: "corecw6p1043635",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 550
                },
                res: {
                    crowns: 5e3
                }
            }
        }, {
            typeId: 100241,
            clarification: "50% off",
            name: "Crowns x 2200",
            price: {
                real: 10,
                old: {
                    real: 20
                }
            },
            discount: 50,
            saleLabel: "50% OFF",
            crownsNumStyle: 4,
            hren: "hot",
            amount: 2200,
            extra_amount: 700,
            points: 310,
            pi_code: "corecw4p1043633",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 310
                },
                res: {
                    crowns: 2200
                }
            }
        }, {
            typeId: 100242,
            clarification: "50% off",
            name: "Crowns x 5000",
            price: {
                real: 20,
                old: {
                    real: 40
                }
            },
            discount: 50,
            saleLabel: "50% OFF",
            amount: 5e3,
            extra_amount: 2e3,
            crownsNumStyle: 5,
            hren: "best",
            points: 550,
            pi_code: "corecw5p1043634",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 550
                },
                res: {
                    crowns: 5e3
                }
            }
        }, {
            typeId: 100243,
            clarification: "25% off",
            name: "Crowns x 2200",
            price: {
                real: 15,
                old: {
                    real: 20
                }
            },
            discount: 25,
            saleLabel: "25% OFF",
            hren: "hot",
            amount: 2200,
            extra_amount: 700,
            points: 310,
            crownsNumStyle: 4,
            pi_code: "corecw7p1050307",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 310
                },
                res: {
                    crowns: 2200
                }
            }
        }, {
            typeId: 100244,
            clarification: "25% off",
            name: "Crowns x 5000",
            price: {
                real: 30,
                old: {
                    real: 40
                }
            },
            discount: 25,
            saleLabel: "25% OFF",
            amount: 5e3,
            extra_amount: 2e3,
            hren: "best",
            points: 550,
            crownsNumStyle: 5,
            pi_code: "corecw9p1050309",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 550
                },
                res: {
                    crowns: 5e3
                }
            }
        }, {
            typeId: 100245,
            clarification: "50% off",
            name: "Crowns x 150",
            price: {
                real: 1,
                old: {
                    real: 2
                }
            },
            discount: 50,
            saleLabel: "50% OFF",
            amount: 150,
            points: 55,
            crownsNumStyle: 1,
            pi_code: "corecw1p1043630",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 55
                },
                res: {
                    crowns: 150
                }
            }
        }, {
            typeId: 100246,
            clarification: "50% off",
            name: "Crowns x 400",
            price: {
                real: 2.5,
                old: {
                    real: 5
                }
            },
            discount: 50,
            saleLabel: "50% OFF",
            amount: 400,
            extra_amount: 25,
            points: 75,
            crownsNumStyle: 2,
            pi_code: "corecw16p1051064",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 75
                },
                res: {
                    crowns: 400
                }
            }
        }, {
            typeId: 100247,
            clarification: "50% off",
            name: "Crowns x 1000",
            price: {
                real: 5,
                old: {
                    real: 10
                }
            },
            discount: 50,
            saleLabel: "50% OFF",
            amount: 1e3,
            extra_amount: 250,
            points: 105,
            crownsNumStyle: 3,
            pi_code: "corecw3p1043632",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 105
                },
                res: {
                    crowns: 1e3
                }
            }
        }, {
            typeId: 100248,
            clarification: "x2",
            name: "Crowns x 150",
            price: {
                real: 2
            },
            saleLabel: "x2",
            oldAmount: 150,
            amount: 300,
            points: 55,
            crownsNumStyle: 1,
            pi_code: "corecw2p1043631",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 55
                },
                res: {
                    crowns: 300
                }
            }
        }, {
            typeId: 100249,
            clarification: "x2",
            name: "Crowns x 400",
            price: {
                real: 5
            },
            saleLabel: "x2",
            oldAmount: 400,
            amount: 800,
            extra_amount: 50,
            points: 75,
            crownsNumStyle: 2,
            pi_code: "corecw3p1043632",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 75
                },
                res: {
                    crowns: 800
                }
            }
        }, {
            typeId: 100250,
            clarification: "x2",
            name: "Crowns x 1000",
            price: {
                real: 10
            },
            saleLabel: "x2",
            oldAmount: 1e3,
            amount: 2e3,
            extra_amount: 500,
            points: 105,
            crownsNumStyle: 3,
            pi_code: "corecw4p1043633",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 105
                },
                res: {
                    crowns: 2e3
                }
            }
        }, {
            typeId: 100251,
            clarification: "x2",
            name: "Crowns x 2200",
            price: {
                real: 20
            },
            saleLabel: "x2",
            oldAmount: 2200,
            amount: 4400,
            extra_amount: 1400,
            points: 310,
            crownsNumStyle: 4,
            hren: "hot",
            pi_code: "corecw5p1043634",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 310
                },
                res: {
                    crowns: 4400
                }
            }
        }, {
            typeId: 100252,
            clarification: "x2",
            name: "Crowns x 5000",
            price: {
                real: 40
            },
            saleLabel: "x2",
            oldAmount: 5e3,
            amount: 1e4,
            extra_amount: 4e3,
            points: 550,
            crownsNumStyle: 5,
            hren: "best",
            pi_code: "corecw6p1043635",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 550
                },
                res: {
                    crowns: 1e4
                }
            }
        }, {
            typeId: 100253,
            clarification: "x5",
            name: "Crowns x 150",
            price: {
                real: 2
            },
            saleLabel: "x5",
            oldAmount: 150,
            amount: 750,
            points: 55,
            crownsNumStyle: 1,
            pi_code: "corecw2p1043631",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 55
                },
                res: {
                    crowns: 750
                }
            }
        }, {
            typeId: 100254,
            clarification: "x5",
            name: "Crowns x 400",
            price: {
                real: 5
            },
            saleLabel: "x5",
            oldAmount: 400,
            amount: 2e3,
            extra_amount: 125,
            points: 75,
            crownsNumStyle: 2,
            pi_code: "corecw3p1043632",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 75
                },
                res: {
                    crowns: 2e3
                }
            }
        }, {
            typeId: 100255,
            clarification: "x5",
            name: "Crowns x 1000",
            price: {
                real: 10
            },
            saleLabel: "x5",
            oldAmount: 1e3,
            amount: 5e3,
            extra_amount: 1250,
            points: 105,
            crownsNumStyle: 3,
            pi_code: "corecw4p1043633",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 105
                },
                res: {
                    crowns: 5e3
                }
            }
        }, {
            typeId: 100256,
            clarification: "x5",
            name: "Crowns x 2200",
            price: {
                real: 20
            },
            saleLabel: "x5",
            oldAmount: 2200,
            amount: 11e3,
            extra_amount: 3500,
            points: 310,
            crownsNumStyle: 4,
            hren: "hot",
            pi_code: "corecw5p1043634",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 310
                },
                res: {
                    crowns: 11e3
                }
            }
        }, {
            typeId: 100257,
            clarification: "x5",
            name: "Crowns x 5000",
            price: {
                real: 40
            },
            saleLabel: "x5",
            oldAmount: 5e3,
            amount: 25e3,
            extra_amount: 1e4,
            points: 550,
            crownsNumStyle: 5,
            hren: "best",
            pi_code: "corecw6p1043635",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 550
                },
                res: {
                    crowns: 25e3
                }
            }
        }, {
            typeId: 100258,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 120
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 120
            }),
            price: {
                crowns: 1500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 432e3
                }
            },
            hours: 120
        }, {
            typeId: 100259,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 120
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 120
            }),
            price: {
                crowns: 1500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 432e3
                }
            },
            hours: 120
        }, {
            typeId: 100260,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "100K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "100K"
            }),
            resource: "gold",
            price: {
                crowns: 6e3
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 1e3
                } ] ]
            }
        }, {
            typeId: 100261,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "100K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "100K"
            }),
            resource: "shards",
            price: {
                crowns: 6e3
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 1e3
                } ] ]
            }
        }, {
            typeId: 100262,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 120
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 120
            }),
            price: {
                crowns: 1500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    oldTime: 432e3,
                    time: 864e3
                }
            },
            hours: 120
        }, {
            typeId: 100263,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 120
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 120
            }),
            price: {
                crowns: 1500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    oldTime: 432e3,
                    time: 864e3
                }
            },
            hours: 120
        }, {
            typeId: 100264,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 120
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 120
            }),
            price: {
                crowns: 750,
                old: {
                    crowns: 1500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 432e3
                }
            },
            hours: 120
        }, {
            typeId: 100265,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 120
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 120
            }),
            price: {
                crowns: 750,
                old: {
                    crowns: 1500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 432e3
                }
            },
            hours: 120
        }, {
            typeId: 100266,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "100K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "100K"
            }),
            resource: "gold",
            price: {
                crowns: 3e3,
                old: {
                    crowns: 6e3
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 1e3
                } ] ]
            }
        }, {
            typeId: 100267,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "100K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "100K"
            }),
            resource: "shards",
            price: {
                crowns: 3e3,
                old: {
                    crowns: 6e3
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 1e3
                } ] ]
            }
        }, {
            typeId: 100268,
            name: "Crowns x 150",
            price: {
                real: 1.99
            },
            amount: 150,
            points: 55,
            crownsNumStyle: 1,
            pi_code: "corecw17p1065038",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 55
                },
                res: {
                    crowns: 150
                }
            }
        }, {
            typeId: 100269,
            name: "Crowns x 900",
            price: {
                real: 9.99
            },
            amount: 900,
            extra_amount: "20%",
            points: 110,
            crownsNumStyle: 3,
            pi_code: "corecw19p1065040",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 110
                },
                res: {
                    crowns: 900
                }
            }
        }, {
            typeId: 100270,
            name: "Crowns x 2000",
            price: {
                real: 19.99
            },
            amount: 2e3,
            extra_amount: "30%",
            points: 220,
            crownsNumStyle: 4,
            pi_code: "corecw20p1065041",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 220
                },
                res: {
                    crowns: 2e3
                }
            }
        }, {
            typeId: 100271,
            name: "Crowns x 5300",
            price: {
                real: 49.99
            },
            amount: 5300,
            extra_amount: "40%",
            points: 495,
            crownsNumStyle: 5,
            hren: "hot",
            pi_code: "corecw22p1065043",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 495
                },
                res: {
                    crowns: 5300
                }
            }
        }, {
            typeId: 100272,
            name: "Crowns x 11.3K",
            price: {
                real: 99.99
            },
            amount: 11300,
            extra_amount: "50%",
            points: 1100,
            crownsNumStyle: 5,
            hren: "best",
            pi_code: "corecw23p1065044",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 1100
                },
                res: {
                    crowns: 11300
                }
            }
        }, {
            typeId: 100273,
            clarification: "x2",
            name: "Crowns x 150",
            price: {
                real: 1.99
            },
            saleLabel: "x2",
            oldAmount: 150,
            amount: 300,
            points: 55,
            crownsNumStyle: 1,
            pi_code: "corecw17p1065038",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 55
                },
                res: {
                    crowns: 300
                }
            }
        }, {
            typeId: 100274,
            clarification: "x2",
            name: "Crowns x 900",
            price: {
                real: 9.99
            },
            saleLabel: "x2",
            oldAmount: 900,
            amount: 1800,
            extra_amount: "20%",
            points: 110,
            crownsNumStyle: 3,
            pi_code: "corecw19p1065040",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 110
                },
                res: {
                    crowns: 1800
                }
            }
        }, {
            typeId: 100275,
            clarification: "x2",
            name: "Crowns x 2000",
            price: {
                real: 19.99
            },
            saleLabel: "x2",
            oldAmount: 2e3,
            amount: 4e3,
            extra_amount: "30%",
            points: 220,
            crownsNumStyle: 4,
            pi_code: "corecw20p1065041",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 220
                },
                res: {
                    crowns: 4e3
                }
            }
        }, {
            typeId: 100276,
            clarification: "x2",
            name: "Crowns x 5300",
            price: {
                real: 49.99
            },
            saleLabel: "x2",
            oldAmount: 5300,
            amount: 10600,
            extra_amount: "40%",
            points: 495,
            crownsNumStyle: 5,
            hren: "hot",
            pi_code: "corecw22p1065043",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 495
                },
                res: {
                    crowns: 10600
                }
            }
        }, {
            typeId: 100277,
            clarification: "x2",
            name: "Crowns x 11.3K",
            price: {
                real: 99.99
            },
            saleLabel: "x2",
            oldAmount: 11300,
            amount: 22600,
            extra_amount: "50%",
            points: 1100,
            crownsNumStyle: 5,
            hren: "best",
            pi_code: "corecw23p1065044",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 1100
                },
                res: {
                    crowns: 22600
                }
            }
        }, {
            typeId: 100278,
            clarification: "x5",
            name: "Crowns x 150",
            price: {
                real: 1.99
            },
            saleLabel: "x5",
            oldAmount: 150,
            amount: 750,
            points: 55,
            crownsNumStyle: 1,
            pi_code: "corecw17p1065038",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 55
                },
                res: {
                    crowns: 750
                }
            }
        }, {
            typeId: 100279,
            clarification: "x5",
            name: "Crowns x 900",
            price: {
                real: 9.99
            },
            saleLabel: "x5",
            oldAmount: 900,
            amount: 4500,
            extra_amount: "20%",
            points: 110,
            crownsNumStyle: 3,
            pi_code: "corecw19p1065040",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 110
                },
                res: {
                    crowns: 4500
                }
            }
        }, {
            typeId: 100280,
            clarification: "x5",
            name: "Crowns x 2000",
            price: {
                real: 19.99
            },
            saleLabel: "x5",
            oldAmount: 2e3,
            amount: 1e4,
            extra_amount: "30%",
            points: 220,
            crownsNumStyle: 4,
            pi_code: "corecw20p1065041",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 220
                },
                res: {
                    crowns: 1e4
                }
            }
        }, {
            typeId: 100281,
            clarification: "x5",
            name: "Crowns x 5300",
            price: {
                real: 49.99
            },
            saleLabel: "x5",
            oldAmount: 5300,
            amount: 26500,
            extra_amount: "40%",
            points: 495,
            crownsNumStyle: 5,
            hren: "hot",
            pi_code: "corecw22p1065043",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 495
                },
                res: {
                    crowns: 26500
                }
            }
        }, {
            typeId: 100282,
            clarification: "x5",
            name: "Crowns x 11.3K",
            price: {
                real: 99.99
            },
            saleLabel: "x5",
            oldAmount: 11300,
            amount: 56500,
            extra_amount: "50%",
            points: 1100,
            crownsNumStyle: 5,
            hren: "best",
            pi_code: "corecw23p1065044",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 1100
                },
                res: {
                    crowns: 56500
                }
            }
        }, {
            typeId: 100283,
            clarification: "50% off",
            name: "Crowns x 900",
            price: {
                real: 4.99,
                old: {
                    real: 9.99
                }
            },
            discount: 50,
            saleLabel: "50% OFF",
            amount: 900,
            extra_amount: "20%",
            points: 110,
            crownsNumStyle: 3,
            pi_code: "corecw18p1065039",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 110
                },
                res: {
                    crowns: 900
                }
            }
        }, {
            typeId: 100284,
            clarification: "50% off",
            name: "Crowns x 2000",
            price: {
                real: 9.99,
                old: {
                    real: 19.99
                }
            },
            discount: 50,
            saleLabel: "50% OFF",
            crownsNumStyle: 4,
            amount: 2e3,
            extra_amount: "30%",
            points: 220,
            pi_code: "corecw19p1065040",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 220
                },
                res: {
                    crowns: 2e3
                }
            }
        }, {
            typeId: 100285,
            clarification: "50% off",
            name: "Crowns x 5300",
            price: {
                real: 24.99,
                old: {
                    real: 49.99
                }
            },
            discount: 50,
            saleLabel: "50% OFF",
            amount: 5300,
            extra_amount: "40%",
            crownsNumStyle: 5,
            hren: "hot",
            points: 495,
            pi_code: "corecw21p1065042",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 495
                },
                res: {
                    crowns: 5300
                }
            }
        }, {
            typeId: 100286,
            clarification: "50% off",
            name: "Crowns x 11.3K",
            discount: 50,
            saleLabel: "50% OFF",
            price: {
                real: 49.99,
                old: {
                    real: 99.99
                }
            },
            amount: 11300,
            extra_amount: "50%",
            points: 1100,
            crownsNumStyle: 5,
            hren: "best",
            pi_code: "corecw22p1065043",
            cc_code: 115128,
            virtual: 1,
            tag: "real",
            resource: "crowns",
            qty: 1,
            reward: {
                counters: {
                    vip: 1100
                },
                res: {
                    crowns: 11300
                }
            }
        }, {
            typeId: 11e4,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 1
            }),
            price: {
                crowns: 50
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    oldTime: 3600,
                    time: 7200
                }
            },
            hours: 1
        }, {
            typeId: 110001,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 6
            }),
            price: {
                crowns: 250
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    oldTime: 21600,
                    time: 43200
                }
            },
            hours: 6
        }, {
            typeId: 110002,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 24
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    oldTime: 86400,
                    time: 172800
                }
            },
            hours: 24
        }, {
            typeId: 110003,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 1
            }),
            price: {
                crowns: 50
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    oldTime: 3600,
                    time: 7200
                }
            },
            hours: 1
        }, {
            typeId: 110004,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 6
            }),
            price: {
                crowns: 250
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    oldTime: 21600,
                    time: 43200
                }
            },
            hours: 6
        }, {
            typeId: 110005,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 24
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    oldTime: 86400,
                    time: 172800
                }
            },
            hours: 24
        }, {
            typeId: 110006,
            clarification: "x2",
            saleLabel: "x2",
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 1
            }),
            price: {
                crowns: 100
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    oldTime: 3600,
                    time: 7200
                }
            },
            hours: 1
        }, {
            typeId: 110007,
            clarification: "x2",
            saleLabel: "x2",
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 6
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    oldTime: 21600,
                    time: 43200
                }
            },
            hours: 6
        }, {
            typeId: 110008,
            clarification: "x2",
            saleLabel: "x2",
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 24
            }),
            price: {
                crowns: 1e3
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    oldTime: 86400,
                    time: 172800
                }
            },
            hours: 24
        }, {
            typeId: 110009,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "100",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "100"
            }),
            resource: "gold",
            price: {
                crowns: 30,
                old: {
                    crowns: 60
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 1
                } ] ]
            }
        }, {
            typeId: 110010,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "1K"
            }),
            resource: "gold",
            price: {
                crowns: 240,
                old: {
                    crowns: 480
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 10
                } ] ]
            }
        }, {
            typeId: 110011,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "10K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "10K"
            }),
            resource: "gold",
            price: {
                crowns: 2e3,
                old: {
                    crowns: 4e3
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 100
                } ] ]
            }
        }, {
            typeId: 110012,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "100",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "100"
            }),
            resource: "shards",
            price: {
                crowns: 30,
                old: {
                    crowns: 60
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 1
                } ] ]
            }
        }, {
            typeId: 110013,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "1K"
            }),
            resource: "shards",
            price: {
                crowns: 240,
                old: {
                    crowns: 480
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 10
                } ] ]
            }
        }, {
            typeId: 110014,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "10K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "10K"
            }),
            resource: "shards",
            price: {
                crowns: 2e3,
                old: {
                    crowns: 4e3
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 100
                } ] ]
            }
        }, {
            typeId: 110015,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 1
            }),
            price: {
                crowns: 25,
                old: {
                    crowns: 50
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 3600
                }
            },
            hours: 1
        }, {
            typeId: 110016,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 6
            }),
            price: {
                crowns: 125,
                old: {
                    crowns: 250
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 21600
                }
            },
            hours: 6
        }, {
            typeId: 110017,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 24
            }),
            price: {
                crowns: 250,
                old: {
                    crowns: 500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 110018,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 1
            }),
            price: {
                crowns: 25,
                old: {
                    crowns: 50
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 3600
                }
            },
            hours: 1
        }, {
            typeId: 110019,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 6
            }),
            price: {
                crowns: 125,
                old: {
                    crowns: 250
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 21600
                }
            },
            hours: 6
        }, {
            typeId: 110020,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 24
            }),
            price: {
                crowns: 250,
                old: {
                    crowns: 500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 110021,
            clarification: "50% off",
            discount: 50,
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 1
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 1
            }),
            price: {
                crowns: 50,
                old: {
                    crowns: 100
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    time: 3600
                }
            },
            hours: 1
        }, {
            typeId: 110022,
            clarification: "50% off",
            discount: 50,
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 6
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 6
            }),
            price: {
                crowns: 250,
                old: {
                    crowns: 500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    time: 21600
                }
            },
            hours: 6
        }, {
            typeId: 110023,
            clarification: "50% off",
            discount: 50,
            name: r("Gold & Shards for {time}", {
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            description: r("You instantly get Gold & Shards, as if you played for {hours}h.", {
                hours: 24
            }),
            price: {
                crowns: 500,
                old: {
                    crowns: 1e3
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 110024,
            clarification: "casual",
            name: r("Novice pack"),
            price: {
                real: 1,
                old: {
                    real: 10
                }
            },
            tag: "starter_pack",
            pi_code: "corecw1p1043630",
            cc_code: 115128,
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 10
                } ], [ "shards", {
                    value: 10
                } ] ],
                counters: {
                    ST_PK: 1
                }
            }
        }, {
            typeId: 110025,
            clarification: "casual",
            name: r("King pack"),
            price: {
                real: 20,
                old: {
                    real: 100
                }
            },
            tag: "starter_pack",
            pi_code: "corecw5p1043634",
            cc_code: 115128,
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 100
                } ], [ "shards", {
                    value: 100
                } ] ],
                hero: {
                    id: 100500
                },
                counters: {
                    ST_PK: 1
                }
            }
        }, {
            typeId: 110026,
            clarification: "crowns",
            name: r("Novice pack"),
            price: {
                real: 1,
                old: {
                    real: 10
                }
            },
            tag: "starter_pack",
            pi_code: "corecw1p1043630",
            cc_code: 115128,
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 10
                } ] ],
                counters: {
                    ST_PK: 1
                },
                res: {
                    crowns: 500
                }
            }
        }, {
            typeId: 110027,
            clarification: "crowns",
            name: r("King pack"),
            price: {
                real: 20,
                old: {
                    real: 100
                }
            },
            tag: "starter_pack",
            pi_code: "corecw5p1043634",
            cc_code: 115128,
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 100
                } ] ],
                hero: {
                    id: 100500
                },
                res: {
                    crowns: 5e3
                },
                counters: {
                    ST_PK: 1
                }
            }
        }, {
            typeId: 110028,
            clarification: "gold",
            name: r("Novice pack"),
            price: {
                real: 1,
                old: {
                    real: 10
                }
            },
            tag: "starter_pack",
            pi_code: "corecw1p1043630",
            cc_code: 115128,
            virtual: 1,
            qty: 1,
            reward: {
                order: [ "timeskip", "mults", "counters" ],
                mults: [ [ "gold", {
                    value: 10
                } ] ],
                counters: {
                    ST_PK: 2
                },
                timeskip: {
                    res: [ "gold" ],
                    time: 86400,
                    min: {
                        gold: 25e4
                    }
                }
            }
        }, {
            typeId: 110029,
            clarification: "gold",
            name: r("King pack"),
            price: {
                real: 20,
                old: {
                    real: 100
                }
            },
            tag: "starter_pack",
            pi_code: "corecw5p1043634",
            cc_code: 115128,
            virtual: 1,
            qty: 1,
            reward: {
                order: [ "timeskip", "mults", "counters", "hero" ],
                mults: [ [ "gold", {
                    value: 100
                } ] ],
                hero: {
                    id: 100500
                },
                timeskip: {
                    res: [ "gold" ],
                    time: 777600,
                    min: {
                        gold: 225e4
                    }
                },
                counters: {
                    ST_PK: 3
                }
            }
        }, {
            typeId: 12e4,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 4
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 4
            }),
            price: {
                crowns: 100
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 14400
                }
            },
            hours: 4
        }, {
            typeId: 120001,
            extra_amount: "20%",
            tags: "best gold timeskip",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 24
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 120002,
            extra_amount: "30%",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 72
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 72
            }),
            price: {
                crowns: 1300
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 259200
                }
            },
            hours: 72
        }, {
            typeId: 120003,
            extra_amount: "40%",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 168
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 168
            }),
            price: {
                crowns: 2500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 604800
                }
            },
            hours: 168
        }, {
            typeId: 120004,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 4
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 4
            }),
            price: {
                crowns: 100
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 14400
                }
            },
            hours: 4
        }, {
            typeId: 120005,
            extra_amount: "20%",
            tags: "best shards timeskip",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 24
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 120006,
            extra_amount: "30%",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 72
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 72
            }),
            price: {
                crowns: 1300
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 259200
                }
            },
            hours: 72
        }, {
            typeId: 120007,
            extra_amount: "40%",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 168
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 168
            }),
            price: {
                crowns: 2500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 604800
                }
            },
            hours: 168
        }, {
            typeId: 120008,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "1K"
            }),
            resource: "gold",
            price: {
                crowns: 480
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 10
                } ] ]
            }
        }, {
            typeId: 120009,
            extra_amount: "20%",
            tags: "best gold multiplier",
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "10K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "10K"
            }),
            resource: "gold",
            price: {
                crowns: 4e3
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 100
                } ] ]
            }
        }, {
            typeId: 120010,
            extra_amount: "30%",
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "25K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "25K"
            }),
            resource: "gold",
            price: {
                crowns: 8500
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 250
                } ] ]
            }
        }, {
            typeId: 120011,
            extra_amount: "40%",
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "50K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "50K"
            }),
            resource: "gold",
            price: {
                crowns: 14500
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 500
                } ] ]
            }
        }, {
            typeId: 120012,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "1K"
            }),
            resource: "shards",
            price: {
                crowns: 480
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 10
                } ] ]
            }
        }, {
            typeId: 120013,
            extra_amount: "20%",
            tags: "best shards multiplier",
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "10K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "10K"
            }),
            resource: "shards",
            price: {
                crowns: 4e3
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 100
                } ] ]
            }
        }, {
            typeId: 120014,
            extra_amount: "30%",
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "25K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "25K"
            }),
            resource: "shards",
            price: {
                crowns: 8500
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 250
                } ] ]
            }
        }, {
            typeId: 120015,
            extra_amount: "40%",
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "50K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "50K"
            }),
            resource: "shards",
            price: {
                crowns: 14500
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 500
                } ] ]
            }
        }, {
            typeId: 120016,
            tags: "reborn",
            name: r("More {resource} dropped", {
                resource: r("Gems")
            }),
            mult: "100",
            description: r("Increase the amount of Gems dropped by the bosses (level 100 and above) by 100%"),
            resource: "gems",
            tag: "mult",
            price: {
                crowns: 500
            },
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gems", {
                    value: 1
                } ] ]
            }
        }, {
            typeId: 120017,
            tags: "reborn",
            name: r("Instant reborn"),
            description: r("You instantly get reborn bonuses without losing progress"),
            price: {
                crowns: 500
            },
            resource: "gems",
            tag: "reborn",
            virtual: 1,
            qty: 1,
            reward: {
                reborn: 1
            }
        }, {
            typeId: 120018,
            tags: "reborn",
            name: r("Balancer"),
            description: r("Increase the chance Gems are being dropped by the bosses (level 100 and above) by 100%"),
            price: {
                crowns: 1e3
            },
            resource: "gems",
            tag: "balancer",
            virtual: 1,
            qty: 1,
            reward: {
                counters: {
                    MBGMS: 1
                }
            }
        }, {
            typeId: 120019,
            shopInvisible: !0,
            tag: "essence",
            resource: "essence",
            price: {
                crowns: 150
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    essence: 400
                }
            }
        }, {
            typeId: 120020,
            shopInvisible: !0,
            lvl: 2,
            extra_amount: "20%",
            tag: "essence",
            resource: "essence",
            price: {
                crowns: 450
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    essence: 1440
                }
            }
        }, {
            typeId: 120021,
            shopInvisible: !0,
            lvl: 3,
            extra_amount: "30%",
            tag: "essence",
            resource: "essence",
            price: {
                crowns: 1500
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    essence: 5200
                }
            }
        }, {
            typeId: 120022,
            shopInvisible: !0,
            lvl: 4,
            extra_amount: "40%",
            tag: "essence",
            resource: "essence",
            price: {
                crowns: 4500
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    essence: 16800
                }
            }
        }, {
            typeId: 120023,
            shopInvisible: !0,
            res_name: r("gems of {stat_name}", {
                stat_name: r("strength")
            }),
            tag: "strength_res",
            resource: "strength_res",
            price: {
                crowns: 120
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    strength_res: 40
                }
            }
        }, {
            typeId: 120024,
            shopInvisible: !0,
            res_name: r("gems of {stat_name}", {
                stat_name: r("strength")
            }),
            lvl: 2,
            extra_amount: "20%",
            tag: "strength_res",
            resource: "strength_res",
            price: {
                crowns: 350
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    strength_res: 140
                }
            }
        }, {
            typeId: 120025,
            shopInvisible: !0,
            res_name: r("gems of {stat_name}", {
                stat_name: r("strength")
            }),
            lvl: 3,
            extra_amount: "30%",
            tag: "strength_res",
            resource: "strength_res",
            price: {
                crowns: 1e3
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    strength_res: 440
                }
            }
        }, {
            typeId: 120026,
            shopInvisible: !0,
            res_name: r("gems of {stat_name}", {
                stat_name: r("strength")
            }),
            lvl: 4,
            extra_amount: "40%",
            tag: "strength_res",
            resource: "strength_res",
            price: {
                crowns: 2800
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    strength_res: 1300
                }
            }
        }, {
            typeId: 120027,
            shopInvisible: !0,
            stoneCls: "char",
            res_name: r("gems of {stat_name}", {
                stat_name: r("charisma")
            }),
            tag: "charisma_res",
            resource: "charisma_res",
            price: {
                crowns: 120
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    charisma_res: 40
                }
            }
        }, {
            typeId: 120028,
            shopInvisible: !0,
            stoneCls: "char",
            res_name: r("gems of {stat_name}", {
                stat_name: r("charisma")
            }),
            lvl: 2,
            extra_amount: "20%",
            tag: "charisma_res",
            resource: "charisma_res",
            price: {
                crowns: 350
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    charisma_res: 140
                }
            }
        }, {
            typeId: 120029,
            shopInvisible: !0,
            stoneCls: "char",
            res_name: r("gems of {stat_name}", {
                stat_name: r("charisma")
            }),
            lvl: 3,
            extra_amount: "30%",
            tag: "charisma_res",
            resource: "charisma_res",
            price: {
                crowns: 1e3
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    charisma_res: 440
                }
            }
        }, {
            typeId: 120030,
            shopInvisible: !0,
            stoneCls: "char",
            res_name: r("gems of {stat_name}", {
                stat_name: r("charisma")
            }),
            lvl: 4,
            extra_amount: "40%",
            tag: "charisma_res",
            resource: "charisma_res",
            price: {
                crowns: 2800
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    charisma_res: 1300
                }
            }
        }, {
            typeId: 120031,
            shopInvisible: !0,
            stoneCls: "int",
            res_name: r("gems of {stat_name}", {
                stat_name: r("intelligence")
            }),
            tag: "intelligence_res",
            resource: "intelligence_res",
            price: {
                crowns: 120
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    intelligence_res: 40
                }
            }
        }, {
            typeId: 120032,
            shopInvisible: !0,
            stoneCls: "int",
            res_name: r("gems of {stat_name}", {
                stat_name: r("intelligence")
            }),
            lvl: 2,
            extra_amount: "20%",
            tag: "intelligence_res",
            resource: "intelligence_res",
            price: {
                crowns: 350
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    intelligence_res: 140
                }
            }
        }, {
            typeId: 120033,
            shopInvisible: !0,
            stoneCls: "int",
            res_name: r("gems of {stat_name}", {
                stat_name: r("intelligence")
            }),
            lvl: 3,
            extra_amount: "30%",
            tag: "intelligence_res",
            resource: "intelligence_res",
            price: {
                crowns: 1e3
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    intelligence_res: 440
                }
            }
        }, {
            typeId: 120034,
            shopInvisible: !0,
            stoneCls: "int",
            res_name: r("gems of {stat_name}", {
                stat_name: r("intelligence")
            }),
            lvl: 4,
            extra_amount: "40%",
            tag: "intelligence_res",
            resource: "intelligence_res",
            price: {
                crowns: 2800
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    intelligence_res: 1300
                }
            }
        }, {
            typeId: 120035,
            shopInvisible: !0,
            stoneCls: "lck",
            res_name: r("gems of {stat_name}", {
                stat_name: r("luck")
            }),
            tag: "luck_res",
            resource: "luck_res",
            price: {
                crowns: 120
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    luck_res: 40
                }
            }
        }, {
            typeId: 120036,
            shopInvisible: !0,
            stoneCls: "lck",
            res_name: r("gems of {stat_name}", {
                stat_name: r("luck")
            }),
            lvl: 2,
            extra_amount: "20%",
            tag: "luck_res",
            resource: "luck_res",
            price: {
                crowns: 350
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    luck_res: 140
                }
            }
        }, {
            typeId: 120037,
            shopInvisible: !0,
            stoneCls: "lck",
            res_name: r("gems of {stat_name}", {
                stat_name: r("luck")
            }),
            lvl: 3,
            extra_amount: "30%",
            tag: "luck_res",
            resource: "luck_res",
            price: {
                crowns: 1e3
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    luck_res: 440
                }
            }
        }, {
            typeId: 120038,
            shopInvisible: !0,
            stoneCls: "lck",
            res_name: r("gems of {stat_name}", {
                stat_name: r("luck")
            }),
            lvl: 4,
            extra_amount: "40%",
            tag: "luck_res",
            resource: "luck_res",
            price: {
                crowns: 2800
            },
            virtual: 1,
            qty: 1,
            reward: {
                res: {
                    luck_res: 1300
                }
            }
        }, {
            typeId: 120100,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 4
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 4
            }),
            price: {
                crowns: 100
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    oldTime: 14400,
                    time: 28800
                }
            },
            hours: 4
        }, {
            typeId: 120101,
            clarification: "x2",
            tags: "best gold timeskip",
            extra_amount: "20%",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 24
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    oldTime: 86400,
                    time: 172800
                }
            },
            hours: 24
        }, {
            typeId: 120102,
            clarification: "x2",
            extra_amount: "30%",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 72
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 72
            }),
            price: {
                crowns: 1300
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    oldTime: 259200,
                    time: 518400
                }
            },
            hours: 72
        }, {
            typeId: 120103,
            clarification: "x2",
            extra_amount: "40%",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 168
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 168
            }),
            price: {
                crowns: 2500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    oldTime: 604800,
                    time: 1209600
                }
            },
            hours: 168
        }, {
            typeId: 120104,
            clarification: "x2",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 4
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 4
            }),
            price: {
                crowns: 100
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    oldTime: 14400,
                    time: 28800
                }
            },
            hours: 4
        }, {
            typeId: 120105,
            clarification: "x2",
            tags: "best shards timeskip",
            extra_amount: "20%",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 24
            }),
            price: {
                crowns: 500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    oldTime: 86400,
                    time: 172800
                }
            },
            hours: 24
        }, {
            typeId: 120106,
            clarification: "x2",
            extra_amount: "30%",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 72
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 72
            }),
            price: {
                crowns: 1300
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    oldTime: 259200,
                    time: 518400
                }
            },
            hours: 72
        }, {
            typeId: 120107,
            clarification: "x2",
            extra_amount: "40%",
            saleLabel: "x2",
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 168
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 168
            }),
            price: {
                crowns: 2500
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    oldTime: 604800,
                    time: 1209600
                }
            },
            hours: 168
        }, {
            typeId: 120200,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 4
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 4
            }),
            price: {
                crowns: 50,
                old: {
                    crowns: 100
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 14400
                }
            },
            hours: 4
        }, {
            typeId: 120201,
            clarification: "50% off",
            tags: "best gold timeskip",
            extra_amount: "20%",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 24
            }),
            price: {
                crowns: 250,
                old: {
                    crowns: 500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 120202,
            clarification: "50% off",
            extra_amount: "30%",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 72
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 72
            }),
            price: {
                crowns: 650,
                old: {
                    crowns: 1300
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 259200
                }
            },
            hours: 72
        }, {
            typeId: 120203,
            clarification: "50% off",
            extra_amount: "40%",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Gold"),
                time: r("{hours}h", {
                    hours: 168
                })
            }),
            resource: "gold",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Gold"),
                hours: 168
            }),
            price: {
                crowns: 1250,
                old: {
                    crowns: 2500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 604800
                }
            },
            hours: 168
        }, {
            typeId: 120204,
            clarification: "50% off",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 4
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 4
            }),
            price: {
                crowns: 50,
                old: {
                    crowns: 100
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 14400
                }
            },
            hours: 4
        }, {
            typeId: 120205,
            clarification: "50% off",
            tags: "best shards timeskip",
            extra_amount: "20%",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 24
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 24
            }),
            price: {
                crowns: 250,
                old: {
                    crowns: 500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 86400
                }
            },
            hours: 24
        }, {
            typeId: 120206,
            clarification: "50% off",
            extra_amount: "30%",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 72
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 72
            }),
            price: {
                crowns: 650,
                old: {
                    crowns: 1300
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 259200
                }
            },
            hours: 72
        }, {
            typeId: 120207,
            clarification: "50% off",
            extra_amount: "40%",
            discount: 50,
            name: r("{resource} for {time}", {
                resource: r("Shards"),
                time: r("{hours}h", {
                    hours: 168
                })
            }),
            resource: "shards",
            description: r("You instantly get {resource}, as if you played for {hours}h.", {
                resource: r("Shards"),
                hours: 168
            }),
            price: {
                crowns: 1250,
                old: {
                    crowns: 2500
                }
            },
            tag: "timeskip",
            virtual: 1,
            qty: 1,
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 604800
                }
            },
            hours: 168
        }, {
            typeId: 120208,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "1K"
            }),
            resource: "gold",
            price: {
                crowns: 240,
                old: {
                    crowns: 480
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 10
                } ] ]
            }
        }, {
            typeId: 120209,
            clarification: "50% off",
            tags: "best gold multiplier",
            extra_amount: "20%",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "10K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "10K"
            }),
            resource: "gold",
            price: {
                crowns: 2e3,
                old: {
                    crowns: 4e3
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 100
                } ] ]
            }
        }, {
            typeId: 120210,
            clarification: "50% off",
            extra_amount: "30%",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "25K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "25K"
            }),
            resource: "gold",
            price: {
                crowns: 4250,
                old: {
                    crowns: 8500
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 250
                } ] ]
            }
        }, {
            typeId: 120211,
            clarification: "50% off",
            extra_amount: "40%",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Gold")
            }),
            mult: "50K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Gold"),
                percent: "50K"
            }),
            resource: "gold",
            price: {
                crowns: 7250,
                old: {
                    crowns: 14500
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "gold", {
                    value: 500
                } ] ]
            }
        }, {
            typeId: 120212,
            clarification: "50% off",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "1K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "1K"
            }),
            resource: "shards",
            price: {
                crowns: 240,
                old: {
                    crowns: 480
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 10
                } ] ]
            }
        }, {
            typeId: 120213,
            clarification: "50% off",
            tags: "best shards multiplier",
            extra_amount: "20%",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "10K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "10K"
            }),
            resource: "shards",
            price: {
                crowns: 2e3,
                old: {
                    crowns: 4e3
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 100
                } ] ]
            }
        }, {
            typeId: 120214,
            clarification: "50% off",
            extra_amount: "30%",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "25K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "25K"
            }),
            resource: "shards",
            price: {
                crowns: 4250,
                old: {
                    crowns: 8500
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 250
                } ] ]
            }
        }, {
            typeId: 120215,
            clarification: "50% off",
            extra_amount: "40%",
            discount: 50,
            name: r("More {resource} dropped", {
                resource: r("Shards")
            }),
            mult: "50K",
            description: r("Increase the amount of {resource} dropped by the monsters by {percent}%", {
                resource: r("Shards"),
                percent: "50K"
            }),
            resource: "shards",
            price: {
                crowns: 7250,
                old: {
                    crowns: 14500
                }
            },
            tag: "mult",
            virtual: 1,
            qty: 1,
            reward: {
                mults: [ [ "shards", {
                    value: 500
                } ] ]
            }
        } ];
    },
    71: function(e, a, i) {
        "use strict";
        var r, t;
        t = i(26)._tr, r = i(8), e.exports = [ {
            id: 1001,
            title: t("Humble"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Hoard {gold} gold.", {
                gold: "500K"
            }),
            icon: "rc/iconach/ic-ach-01.jpg",
            icon2x: "rc/iconach/ic-ach-01@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    "H:gold": r("5e+5")
                }
            },
            objectives: [ {
                counter: "H:gold",
                value: r("5e+5"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1002,
            title: t("Scanty"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Hoard {gold} gold.", {
                gold: "5T"
            }),
            icon: "rc/iconach/ic-ach-01.jpg",
            icon2x: "rc/iconach/ic-ach-01@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    "H:gold": r("5e+12")
                }
            },
            objectives: [ {
                counter: "H:gold",
                value: r("5e+12"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1003,
            title: t("Covetous"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Hoard {gold} gold.", {
                gold: "500Q"
            }),
            icon: "rc/iconach/ic-ach-01.jpg",
            icon2x: "rc/iconach/ic-ach-01@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    "H:gold": r("5e+20")
                }
            },
            objectives: [ {
                counter: "H:gold",
                value: r("5e+20"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1004,
            title: t("Avid"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Hoard {gold} gold.", {
                gold: "50N"
            }),
            icon: "rc/iconach/ic-ach-01.jpg",
            icon2x: "rc/iconach/ic-ach-01@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    "H:gold": r("5e+31")
                }
            },
            objectives: [ {
                counter: "H:gold",
                value: r("5e+31"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1005,
            title: t("Rich man"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "1M"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+6")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+6"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1006,
            title: t("Moneybags"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "1B"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+9")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+9"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1007,
            title: t("Big Purse"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "1q"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+15")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+15"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1008,
            title: t("Deep Pocket"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100Q"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+20")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+20"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1009,
            title: t("Heavy Purse"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100S"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+26")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+26"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1010,
            title: t("Forbes № 1"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100N"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "06",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+32")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+32"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1011,
            title: t("Wealth"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100U"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "07",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+38")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+38"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1012,
            title: t("Profusion"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100KD"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "08",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+44")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+44"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1013,
            title: t("Too much money"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100BD"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "09",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+50")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+50"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1014,
            title: t("Affluence"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100qD"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "10",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+56")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+56"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1015,
            title: t("Opulence"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100sD"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "11",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+62")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+62"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1016,
            title: t("Abundance"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "100OD"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "12",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+68")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+68"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1017,
            title: t("Exuberancy"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Receive (cumulative) {gold} gold.", {
                gold: "1dD"
            }),
            icon: "rc/iconach/ic-ach-02.jpg",
            icon2x: "rc/iconach/ic-ach-02@2x.jpg",
            lvl: "13",
            type: "ach",
            lock: {
                counters: {
                    gold: r("1e+72")
                }
            },
            objectives: [ {
                counter: "gold",
                value: r("1e+72"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1018,
            title: t("Chief"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Level up heroes {times} times.", {
                times: "100"
            }),
            icon: "rc/iconach/ic-ach-03.jpg",
            icon2x: "rc/iconach/ic-ach-03@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    HLVL: r("1e+2")
                }
            },
            objectives: [ {
                counter: "HLVL",
                value: r("1e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1019,
            title: t("Coach"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Level up heroes {times} times.", {
                times: "500"
            }),
            icon: "rc/iconach/ic-ach-03.jpg",
            icon2x: "rc/iconach/ic-ach-03@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    HLVL: r("5e+2")
                }
            },
            objectives: [ {
                counter: "HLVL",
                value: r("5e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1020,
            title: t("Teacher"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Level up heroes {times} times.", {
                times: "2K"
            }),
            icon: "rc/iconach/ic-ach-03.jpg",
            icon2x: "rc/iconach/ic-ach-03@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    HLVL: r("2e+3")
                }
            },
            objectives: [ {
                counter: "HLVL",
                value: r("2e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1021,
            title: t("Instructor"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Level up heroes {times} times.", {
                times: "5K"
            }),
            icon: "rc/iconach/ic-ach-03.jpg",
            icon2x: "rc/iconach/ic-ach-03@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    HLVL: r("5e+3")
                }
            },
            objectives: [ {
                counter: "HLVL",
                value: r("5e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1022,
            title: t("Trainer"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Level up heroes {times} times.", {
                times: "25K"
            }),
            icon: "rc/iconach/ic-ach-03.jpg",
            icon2x: "rc/iconach/ic-ach-03@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    HLVL: r("2.5e+4")
                }
            },
            objectives: [ {
                counter: "HLVL",
                value: r("2.5e+4"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1023,
            title: t("Guru"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Level up heroes {times} times.", {
                times: "50K"
            }),
            icon: "rc/iconach/ic-ach-03.jpg",
            icon2x: "rc/iconach/ic-ach-03@2x.jpg",
            lvl: "06",
            type: "ach",
            lock: {
                counters: {
                    HLVL: r("5e+4")
                }
            },
            objectives: [ {
                counter: "HLVL",
                value: r("5e+4"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1024,
            title: t("Discreet"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Get {times} hero upgrades.", {
                times: "25"
            }),
            icon: "rc/iconach/ic-ach-04.jpg",
            icon2x: "rc/iconach/ic-ach-04@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    HSKL: r("2.5e+1")
                }
            },
            objectives: [ {
                counter: "HSKL",
                value: r("2.5e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1025,
            title: t("Noble"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Get {times} hero upgrades.", {
                times: "50"
            }),
            icon: "rc/iconach/ic-ach-04.jpg",
            icon2x: "rc/iconach/ic-ach-04@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    HSKL: r("5e+1")
                }
            },
            objectives: [ {
                counter: "HSKL",
                value: r("5e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1026,
            title: t("Well-disposed"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Get {times} hero upgrades.", {
                times: "100"
            }),
            icon: "rc/iconach/ic-ach-04.jpg",
            icon2x: "rc/iconach/ic-ach-04@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    HSKL: r("1e+2")
                }
            },
            objectives: [ {
                counter: "HSKL",
                value: r("1e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1027,
            title: t("Honorable"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Get {times} hero upgrades.", {
                times: "200"
            }),
            icon: "rc/iconach/ic-ach-04.jpg",
            icon2x: "rc/iconach/ic-ach-04@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    HSKL: r("2e+2")
                }
            },
            objectives: [ {
                counter: "HSKL",
                value: r("2e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1028,
            title: t("Harmful"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "10M"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+7")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+7"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1029,
            title: t("Deadly"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "100B"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+11")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+11"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1030,
            title: t("Destructive"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "10q"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+16")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+16"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1031,
            title: t("Devastating"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "1s"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+21")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+21"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1032,
            title: t("Disruptive"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "1O"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+27")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+27"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1033,
            title: t("Blasting"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "10N"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "06",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+31")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+31"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1034,
            title: t("Subversive"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "10U"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "07",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+37")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+37"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1035,
            title: t("Disastrous"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "10KD"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "08",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+43")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+43"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1036,
            title: t("Baneful"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "10BD"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "09",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+49")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+49"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1037,
            title: t("Fatal"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Reach {dps} DPS.", {
                dps: "10qD"
            }),
            icon: "rc/iconach/ic-ach-05.jpg",
            icon2x: "rc/iconach/ic-ach-05@2x.jpg",
            lvl: "10",
            type: "ach",
            lock: {
                counters: {
                    DPS: r("1e+55")
                }
            },
            objectives: [ {
                counter: "DPS",
                value: r("1e+55"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1038,
            title: t("Berserk"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "1"
            }),
            description: t("Click {times} in one second.", {
                times: "12"
            }),
            icon: "rc/iconach/ic-ach-06.jpg",
            icon2x: "rc/iconach/ic-ach-06@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    CLKSEC: r("1.2e+1")
                }
            },
            objectives: [ {
                counter: "CLKSEC",
                value: r("1.2e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 1
                }
            }
        }, {
            id: 1039,
            title: t("Maniac"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "3"
            }),
            description: t("Click {times} in one second.", {
                times: "14"
            }),
            icon: "rc/iconach/ic-ach-06.jpg",
            icon2x: "rc/iconach/ic-ach-06@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    CLKSEC: r("1.4e+1")
                }
            },
            objectives: [ {
                counter: "CLKSEC",
                value: r("1.4e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 3
                }
            }
        }, {
            id: 1040,
            title: t("Furious"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Click {times} in one second.", {
                times: "25"
            }),
            icon: "rc/iconach/ic-ach-06.jpg",
            icon2x: "rc/iconach/ic-ach-06@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    CLKSEC: r("2.5e+1")
                }
            },
            objectives: [ {
                counter: "CLKSEC",
                value: r("2.5e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1041,
            title: t("Convulsions"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Click {times} in one second.", {
                times: "35"
            }),
            icon: "rc/iconach/ic-ach-06.jpg",
            icon2x: "rc/iconach/ic-ach-06@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    CLKSEC: r("3.5e+1")
                }
            },
            objectives: [ {
                counter: "CLKSEC",
                value: r("3.5e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1044,
            title: t("Proficient Clicking"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Click {times} times.", {
                times: "1K"
            }),
            icon: "rc/iconach/ic-ach-07.jpg",
            icon2x: "rc/iconach/ic-ach-07@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    CLK: r("1e+3")
                }
            },
            objectives: [ {
                counter: "CLK",
                value: r("1e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1045,
            title: t("Sore Finger"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Click {times} times.", {
                times: "10K"
            }),
            icon: "rc/iconach/ic-ach-07.jpg",
            icon2x: "rc/iconach/ic-ach-07@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    CLK: r("1e+4")
                }
            },
            objectives: [ {
                counter: "CLK",
                value: r("1e+4"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1046,
            title: t("Carpal Tunnel"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Click {times} times.", {
                times: "50K"
            }),
            icon: "rc/iconach/ic-ach-07.jpg",
            icon2x: "rc/iconach/ic-ach-07@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    CLK: r("5e+4")
                }
            },
            objectives: [ {
                counter: "CLK",
                value: r("5e+4"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1047,
            title: t("Broken Mouse"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Click {times} times. RIP in peace, mouse.", {
                times: "100K"
            }),
            icon: "rc/iconach/ic-ach-07.jpg",
            icon2x: "rc/iconach/ic-ach-07@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    CLK: r("1e+5")
                }
            },
            objectives: [ {
                counter: "CLK",
                value: r("1e+5"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1048,
            title: t("Finger Amputee"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Click {times} times.", {
                times: "250K"
            }),
            icon: "rc/iconach/ic-ach-07.jpg",
            icon2x: "rc/iconach/ic-ach-07@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    CLK: r("2.5e+5")
                }
            },
            objectives: [ {
                counter: "CLK",
                value: r("2.5e+5"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1049,
            title: t("Path Finder"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Beat Zone {level}.", {
                level: "10"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1e+1")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1050,
            title: t("Path Fighter"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Beat Zone {level}.", {
                level: "25"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("2.5e+1")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("2.5e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1051,
            title: t("Path Master"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Beat Zone {level}.", {
                level: "50"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("5e+1")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("5e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1052,
            title: t("Path Knight"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "100"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1e+2")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1053,
            title: t("Path Baron"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "120"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1.2e+2")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1.2e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1054,
            title: t("Path Lord"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "140"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "06",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1.4e+2")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1.4e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1055,
            title: t("Path Duke"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "160"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "07",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1.6e+2")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1.6e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1056,
            title: t("Path King"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "1.2K"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "08",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1.2e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1.2e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1057,
            title: t("Path Emperor"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "1.4K"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "09",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1.4e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1.4e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1058,
            title: t("Path-lightened"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "1.6K"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "10",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1.6e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1.6e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1059,
            title: t("Path prophet"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "1.8K"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "11",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("1.8e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("1.8e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1060,
            title: t("True path prophet"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "2K"
            }),
            icon: "rc/iconach/ic-ach-08.jpg",
            icon2x: "rc/iconach/ic-ach-08@2x.jpg",
            lvl: "12",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("2e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("2e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1061,
            title: t("Dao of Path"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "2.2K"
            }),
            icon: "rc/iconach/ic-ach-12.jpg",
            icon2x: "rc/iconach/ic-ach-12@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("2.2e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("2.2e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1062,
            title: t("End of Path?"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "2.4K"
            }),
            icon: "rc/iconach/ic-ach-12.jpg",
            icon2x: "rc/iconach/ic-ach-12@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("2.4e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("2.4e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1063,
            title: t("Path dead end"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "2.6K"
            }),
            icon: "rc/iconach/ic-ach-12.jpg",
            icon2x: "rc/iconach/ic-ach-12@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("2.6e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("2.6e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1064,
            title: t("Path of all pathes"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "2.8K"
            }),
            icon: "rc/iconach/ic-ach-12.jpg",
            icon2x: "rc/iconach/ic-ach-12@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("2.8e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("2.8e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1065,
            title: t("Do not turn back"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "3K"
            }),
            icon: "rc/iconach/ic-ach-12.jpg",
            icon2x: "rc/iconach/ic-ach-12@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("3e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("3e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1066,
            title: t("Real end of path"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "3.2K"
            }),
            icon: "rc/iconach/ic-ach-12.jpg",
            icon2x: "rc/iconach/ic-ach-12@2x.jpg",
            lvl: "06",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("3.2e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("3.2e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1067,
            title: t("Last inch"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "3.4K"
            }),
            icon: "rc/iconach/ic-ach-12.jpg",
            icon2x: "rc/iconach/ic-ach-12@2x.jpg",
            lvl: "07",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("3.4e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("3.4e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1068,
            title: t("God of Path"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Beat Zone {level}.", {
                level: "3.6K"
            }),
            icon: "rc/iconach/ic-ach-12.jpg",
            icon2x: "rc/iconach/ic-ach-12@2x.jpg",
            lvl: "08",
            type: "ach",
            lock: {
                counters: {
                    WMAXLOCK: r("3.6e+3")
                }
            },
            objectives: [ {
                counter: "WMAXLOCK",
                value: r("3.6e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1069,
            title: t("Reborn rookie"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "10"
            }),
            description: t("Reborn the world {times} times.", {
                times: "1"
            }),
            icon: "rc/iconach/ic-ach-09.jpg",
            icon2x: "rc/iconach/ic-ach-09@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    REBORN: r("1e+0")
                }
            },
            objectives: [ {
                counter: "REBORN",
                value: r("1e+0"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 9
                }
            }
        }, {
            id: 1070,
            title: t("Never-ceasing"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "50"
            }),
            description: t("Reborn the world {times} times.", {
                times: "3"
            }),
            icon: "rc/iconach/ic-ach-09.jpg",
            icon2x: "rc/iconach/ic-ach-09@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    REBORN: r("3e+0")
                }
            },
            objectives: [ {
                counter: "REBORN",
                value: r("3e+0"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 40
                }
            }
        }, {
            id: 1071,
            title: t("Everlasting"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "250"
            }),
            description: t("Reborn the world {times} times.", {
                times: "5"
            }),
            icon: "rc/iconach/ic-ach-09.jpg",
            icon2x: "rc/iconach/ic-ach-09@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    REBORN: r("5e+0")
                }
            },
            objectives: [ {
                counter: "REBORN",
                value: r("5e+0"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 200
                }
            }
        }, {
            id: 1072,
            title: t("Eternal"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "1K"
            }),
            description: t("Reborn the world {times} times.", {
                times: "10"
            }),
            icon: "rc/iconach/ic-ach-09.jpg",
            icon2x: "rc/iconach/ic-ach-09@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    REBORN: r("1e+1")
                }
            },
            objectives: [ {
                counter: "REBORN",
                value: r("1e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 750
                }
            }
        }, {
            id: 1073,
            title: t("Reborn Lord"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "2.5K"
            }),
            description: t("Reborn the world {times} times.", {
                times: "25"
            }),
            icon: "rc/iconach/ic-ach-09.jpg",
            icon2x: "rc/iconach/ic-ach-09@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    REBORN: r("2.5e+1")
                }
            },
            objectives: [ {
                counter: "REBORN",
                value: r("2.5e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 1500
                }
            }
        }, {
            id: 1074,
            title: t("Perpetual"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "5K"
            }),
            description: t("Reborn the world {times} times.", {
                times: "50"
            }),
            icon: "rc/iconach/ic-ach-09.jpg",
            icon2x: "rc/iconach/ic-ach-09@2x.jpg",
            lvl: "06",
            type: "ach",
            lock: {
                counters: {
                    REBORN: r("5e+1")
                }
            },
            objectives: [ {
                counter: "REBORN",
                value: r("5e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 2500
                }
            }
        }, {
            id: 1075,
            title: t("Endless"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "10K"
            }),
            description: t("Reborn the world {times} times.", {
                times: "100"
            }),
            icon: "rc/iconach/ic-ach-09.jpg",
            icon2x: "rc/iconach/ic-ach-09@2x.jpg",
            lvl: "07",
            type: "ach",
            lock: {
                counters: {
                    REBORN: r("1e+2")
                }
            },
            objectives: [ {
                counter: "REBORN",
                value: r("1e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 7500
                }
            }
        }, {
            id: 1076,
            title: t("Infinity"),
            rewardDescription: t("{damage} Starting Click Damage", {
                damage: "25K"
            }),
            description: t("Reborn the world {times} times.", {
                times: "250"
            }),
            icon: "rc/iconach/ic-ach-09.jpg",
            icon2x: "rc/iconach/ic-ach-09@2x.jpg",
            lvl: "08",
            type: "ach",
            lock: {
                counters: {
                    REBORN: r("2.5e+2")
                }
            },
            objectives: [ {
                counter: "REBORN",
                value: r("2.5e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1,
                    ADD_DPC: 17500
                }
            }
        }, {
            id: 1077,
            title: t("Murderer"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Kill {count} monsters.", {
                count: "100"
            }),
            icon: "rc/iconach/ic-ach-10.jpg",
            icon2x: "rc/iconach/ic-ach-10@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    MOBKL: r("1e+2")
                }
            },
            objectives: [ {
                counter: "MOBKL",
                value: r("1e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1078,
            title: t("Expert Murderer"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Kill {count} monsters.", {
                count: "1K"
            }),
            icon: "rc/iconach/ic-ach-10.jpg",
            icon2x: "rc/iconach/ic-ach-10@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    MOBKL: r("1e+3")
                }
            },
            objectives: [ {
                counter: "MOBKL",
                value: r("1e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1079,
            title: t("Slaughterer"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Kill {count} monsters.", {
                count: "10K"
            }),
            icon: "rc/iconach/ic-ach-10.jpg",
            icon2x: "rc/iconach/ic-ach-10@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    MOBKL: r("1e+4")
                }
            },
            objectives: [ {
                counter: "MOBKL",
                value: r("1e+4"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1080,
            title: t("Expert Slaughterer"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Kill {count} monsters.", {
                count: "100K"
            }),
            icon: "rc/iconach/ic-ach-10.jpg",
            icon2x: "rc/iconach/ic-ach-10@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    MOBKL: r("1e+5")
                }
            },
            objectives: [ {
                counter: "MOBKL",
                value: r("1e+5"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1081,
            title: t("Exterminator"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Kill {count} monsters.", {
                count: "1M"
            }),
            icon: "rc/iconach/ic-ach-10.jpg",
            icon2x: "rc/iconach/ic-ach-10@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    MOBKL: r("1e+6")
                }
            },
            objectives: [ {
                counter: "MOBKL",
                value: r("1e+6"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1082,
            title: t("Monster Genocide"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Kill {count} monsters.", {
                count: "1.5M"
            }),
            icon: "rc/iconach/ic-ach-10.jpg",
            icon2x: "rc/iconach/ic-ach-10@2x.jpg",
            lvl: "06",
            type: "ach",
            lock: {
                counters: {
                    MOBKL: r("1.5e+6")
                }
            },
            objectives: [ {
                counter: "MOBKL",
                value: r("1.5e+6"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1083,
            title: t("Boss Murderer"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Kill {count} bosses.", {
                count: "10"
            }),
            icon: "rc/iconach/ic-ach-11.jpg",
            icon2x: "rc/iconach/ic-ach-11@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    BOSSKL: r("1e+1")
                }
            },
            objectives: [ {
                counter: "BOSSKL",
                value: r("1e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1084,
            title: t("Boss Executioner"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Kill {count} bosses.", {
                count: "100"
            }),
            icon: "rc/iconach/ic-ach-11.jpg",
            icon2x: "rc/iconach/ic-ach-11@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    BOSSKL: r("1e+2")
                }
            },
            objectives: [ {
                counter: "BOSSKL",
                value: r("1e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1085,
            title: t("Boss Slaughterer"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Kill {count} bosses.", {
                count: "1K"
            }),
            icon: "rc/iconach/ic-ach-11.jpg",
            icon2x: "rc/iconach/ic-ach-11@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    BOSSKL: r("1e+3")
                }
            },
            objectives: [ {
                counter: "BOSSKL",
                value: r("1e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1086,
            title: t("Boss Exterminator"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Kill {count} bosses.", {
                count: "10K"
            }),
            icon: "rc/iconach/ic-ach-11.jpg",
            icon2x: "rc/iconach/ic-ach-11@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    BOSSKL: r("1e+4")
                }
            },
            objectives: [ {
                counter: "BOSSKL",
                value: r("1e+4"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1087,
            title: t("Boss Genocide"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Kill {count} bosses.", {
                count: "100K"
            }),
            icon: "rc/iconach/ic-ach-11.jpg",
            icon2x: "rc/iconach/ic-ach-11@2x.jpg",
            lvl: "05",
            type: "ach",
            lock: {
                counters: {
                    BOSSKL: r("1e+5")
                }
            },
            objectives: [ {
                counter: "BOSSKL",
                value: r("1e+5"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1088,
            title: t("Inhuman"),
            rewardDescription: t("{percent}% DPS", {
                percent: "1"
            }),
            description: t("Level up superheroes {count} time.", {
                count: "1"
            }),
            icon: "rc/iconach/ic-ach-13.jpg",
            icon2x: "rc/iconach/ic-ach-13@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    SHLVL: r("1e+0")
                }
            },
            objectives: [ {
                counter: "SHLVL",
                value: r("1e+0"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .01
                } ] ]
            }
        }, {
            id: 1089,
            title: t("More than human"),
            rewardDescription: t("{percent}% DPS", {
                percent: "2"
            }),
            description: t("Level up superheroes {count} times.", {
                count: "10"
            }),
            icon: "rc/iconach/ic-ach-13.jpg",
            icon2x: "rc/iconach/ic-ach-13@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    SHLVL: r("1e+1")
                }
            },
            objectives: [ {
                counter: "SHLVL",
                value: r("1e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .02
                } ] ]
            }
        }, {
            id: 1090,
            title: t("Superhuman"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Level up superheroes {count} times.", {
                count: "250"
            }),
            icon: "rc/iconach/ic-ach-13.jpg",
            icon2x: "rc/iconach/ic-ach-13@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    SHLVL: r("2.5e+2")
                }
            },
            objectives: [ {
                counter: "SHLVL",
                value: r("2.5e+2"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1091,
            title: t("Wonder Wowman"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Level up superheroes {count} times.", {
                count: "1K"
            }),
            icon: "rc/iconach/ic-ach-13.jpg",
            icon2x: "rc/iconach/ic-ach-13@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    SHLVL: r("1e+3")
                }
            },
            objectives: [ {
                counter: "SHLVL",
                value: r("1e+3"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1092,
            title: t("Lodestar"),
            rewardDescription: t("{percent}% DPS", {
                percent: "3"
            }),
            description: t("Get {count} superhero stars.", {
                count: "1"
            }),
            icon: "rc/iconach/ic-ach-14.jpg",
            icon2x: "rc/iconach/ic-ach-14@2x.jpg",
            lvl: "01",
            type: "ach",
            lock: {
                counters: {
                    SHST: r("1e+0")
                }
            },
            objectives: [ {
                counter: "SHST",
                value: r("1e+0"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .03
                } ] ]
            }
        }, {
            id: 1093,
            title: t("Multiple star"),
            rewardDescription: t("{percent}% DPS", {
                percent: "5"
            }),
            description: t("Get {count} superhero stars.", {
                count: "5"
            }),
            icon: "rc/iconach/ic-ach-14.jpg",
            icon2x: "rc/iconach/ic-ach-14@2x.jpg",
            lvl: "02",
            type: "ach",
            lock: {
                counters: {
                    SHST: r("5e+0")
                }
            },
            objectives: [ {
                counter: "SHST",
                value: r("5e+0"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .05
                } ] ]
            }
        }, {
            id: 1094,
            title: t("Constellation"),
            rewardDescription: t("{percent}% DPS", {
                percent: "10"
            }),
            description: t("Get {count} superhero stars.", {
                count: "10"
            }),
            icon: "rc/iconach/ic-ach-14.jpg",
            icon2x: "rc/iconach/ic-ach-14@2x.jpg",
            lvl: "03",
            type: "ach",
            lock: {
                counters: {
                    SHST: r("1e+1")
                }
            },
            objectives: [ {
                counter: "SHST",
                value: r("1e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .1
                } ] ]
            }
        }, {
            id: 1095,
            title: t("Galaxy"),
            rewardDescription: t("{percent}% DPS", {
                percent: "15"
            }),
            description: t("Get {count} superhero stars.", {
                count: "40"
            }),
            icon: "rc/iconach/ic-ach-14.jpg",
            icon2x: "rc/iconach/ic-ach-14@2x.jpg",
            lvl: "04",
            type: "ach",
            lock: {
                counters: {
                    SHST: r("4e+1")
                }
            },
            objectives: [ {
                counter: "SHST",
                value: r("4e+1"),
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    ACHV: 1,
                    "C::ACHV": 1
                },
                mults: [ [ "DPS", {
                    value: .15
                } ] ]
            }
        }, {
            id: 2001,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("1e+2"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .1
                } ], [ "DPC", {
                    value: .1
                } ], [ "gold", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1
                },
                vars: {}
            }
        }, {
            id: 2002,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("3e+2"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .05
                } ], [ "DPC", {
                    value: .05
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1
                },
                vars: {}
            },
            lock: {
                quests: [ 2001 ]
            }
        }, {
            id: 2003,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("6e+2"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .05
                } ], [ "DPC", {
                    value: .05
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ], [ "gems", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1
                },
                vars: {}
            },
            lock: {
                quests: [ 2002 ]
            }
        }, {
            id: 2004,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("1e+3"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .05
                } ], [ "DPC", {
                    value: .05
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ], [ "gems", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1,
                    MFAVTG: 1,
                    FCHEST: 1
                },
                vars: {}
            },
            lock: {
                quests: [ 2003 ]
            }
        }, {
            id: 2005,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("1.5e+3"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .05
                } ], [ "DPC", {
                    value: .05
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ], [ "gems", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1,
                    MFAVTG: 1
                },
                vars: {}
            },
            lock: {
                quests: [ 2004 ]
            }
        }, {
            id: 2006,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("2.1e+3"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .05
                } ], [ "DPC", {
                    value: .05
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ], [ "gems", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1
                },
                vars: {}
            },
            lock: {
                quests: [ 2005 ]
            }
        }, {
            id: 2007,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("2.8e+3"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .05
                } ], [ "DPC", {
                    value: .05
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ], [ "gems", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1,
                    MFAVTG: 1,
                    FCHEST: 1
                },
                vars: {}
            },
            lock: {
                quests: [ 2006 ]
            }
        }, {
            id: 2008,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("3.6e+3"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .05
                } ], [ "DPC", {
                    value: .05
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ], [ "gems", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1
                },
                vars: {
                    FLDSC: .05
                }
            },
            lock: {
                quests: [ 2007 ]
            }
        }, {
            id: 2009,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("4.5e+3"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .05
                } ], [ "DPC", {
                    value: .05
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ], [ "gems", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1
                },
                vars: {
                    FLDSC: .1
                }
            },
            lock: {
                quests: [ 2008 ]
            }
        }, {
            id: 2010,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("5.5e+3"),
                isAbsolute: !0
            } ],
            reward: {
                mults: [ [ "DPS", {
                    value: .1
                } ], [ "DPC", {
                    value: .1
                } ], [ "gold", {
                    value: .05
                } ], [ "shards", {
                    value: .05
                } ], [ "gems", {
                    value: .05
                } ] ],
                counters: {
                    VIPLVL: 1,
                    MFAVTG: 1,
                    FCHEST: 1
                },
                vars: {
                    FLDSC: .15
                }
            },
            lock: {
                quests: [ 2009 ]
            }
        }, {
            id: 2011,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("3.6e+3"),
                isAbsolute: !0
            } ],
            reward: {
                vars: {
                    FLDSC: .05
                }
            },
            lock: {
                quests: [ 2010 ]
            }
        }, {
            id: 2012,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("4.5e+3"),
                isAbsolute: !0
            } ],
            reward: {
                vars: {
                    FLDSC: .1
                }
            },
            lock: {
                quests: [ 2011 ]
            }
        }, {
            id: 2013,
            type: "vip",
            objectives: [ {
                counter: "vip",
                value: r("5.5e+3"),
                isAbsolute: !0
            } ],
            reward: {
                vars: {
                    FLDSC: .15
                }
            },
            lock: {
                quests: [ 2012 ]
            }
        }, {
            id: 3001,
            type: "rooms",
            objectives: [ {
                counter: "GOLDRM_1",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "GEMSRM_1",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "DPCRM_1",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "SHARDSRM_1",
                value: 1,
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    RMS: 1
                }
            }
        }, {
            id: 3002,
            type: "rooms",
            objectives: [ {
                counter: "GOLDRM_2",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "GEMSRM_2",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "DPCRM_2",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "SHARDSRM_2",
                value: 1,
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    RMS: 1
                }
            }
        }, {
            id: 3003,
            type: "rooms",
            objectives: [ {
                counter: "GOLDRM_3",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "GEMSRM_3",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "DPCRM_3",
                value: 1,
                isAbsolute: !0
            }, {
                counter: "SHARDSRM_3",
                value: 1,
                isAbsolute: !0
            } ],
            reward: {
                counters: {
                    RMS: 1
                }
            }
        }, {
            id: 4001,
            type: "tutorial",
            objectives: [ {
                condition: {
                    vars: {
                        TUTALBUMREWARD: {
                            isSet: !0
                        }
                    }
                }
            } ],
            lock: {
                vars: {
                    TUTALBUMREWARD: {
                        isSet: !0
                    }
                }
            },
            reward: {
                res: {
                    shards: 45
                }
            }
        }, {
            id: 4002,
            type: "tutorial",
            objectives: [ {
                condition: {
                    vars: {
                        TUT: {
                            gte: 4
                        }
                    }
                }
            } ],
            lock: {
                vars: {
                    TUT: {
                        gte: 4
                    }
                }
            },
            reward: {
                counters: {
                    ShowPicPrs: 1
                }
            }
        }, {
            id: 4003,
            type: "tutorial",
            objectives: [ {
                condition: {
                    vars: {
                        TUTALBUM: {
                            gte: 10
                        }
                    }
                }
            } ],
            lock: {
                vars: {
                    TUTALBUM: {
                        gte: 10
                    }
                }
            },
            reward: {
                counters: {
                    ShowPicTgs: 1
                }
            }
        }, {
            id: 4004,
            type: "tutorial",
            objectives: [ {
                condition: {
                    vars: {
                        TUTGUILDREWARD: {
                            isSet: !0
                        }
                    }
                }
            } ],
            lock: {
                vars: {
                    TUTGUILDREWARD: {
                        isSet: !0
                    }
                }
            },
            reward: {
                res: {
                    gems: 3
                }
            }
        }, {
            id: 5001,
            type: "misc",
            objectives: [ {
                counter: "Pictures",
                value: r("7e+0"),
                isAbsolute: !0
            } ],
            lock: {
                counters: {
                    Pictures: r("7e+0")
                }
            },
            reward: {
                counters: {
                    SW_SP: 1
                }
            },
            noStart: !1
        }, {
            id: 5002,
            type: "misc",
            objectives: [ {
                counter: "REG",
                value: r("1e+0"),
                isAbsolute: !0
            } ],
            lock: {
                counters: {
                    REG: r("1e+0")
                }
            },
            reward: {
                counters: {
                    SW_SP: 1
                }
            },
            noStart: !1
        }, {
            id: 5003,
            type: "misc",
            objectives: [ {
                counter: "MAXLOCK",
                value: r("2e+1"),
                isAbsolute: !0
            } ],
            lock: {
                counters: {
                    MAXLOCK: r("2e+1")
                }
            },
            reward: {
                event: {
                    name: "addMarker",
                    data: [ {
                        src: "//main.exoclick.com/tag.php?goal=e0a8d0f797be1b9c4ec7052a7b7484a7"
                    }, {
                        src: "//r.remarketingpixel.com/px.gif?akey=55ba5e968ae875e80dc46d13ca2fb5d4"
                    } ]
                }
            },
            noStart: !0
        }, {
            id: 5004,
            type: "misc",
            objectives: [ {
                counter: "MAXLOCK",
                value: r("1e+0"),
                isAbsolute: !1
            } ],
            lock: {
                counters: {
                    MAXLOCK: r("1.9e+1")
                }
            },
            reward: {
                event: {
                    name: "addMarker",
                    data: [ {
                        src: "//main.exoclick.com/tag.php?goal=e0a8d0f797be1b9c4ec7052a7b7484a7"
                    }, {
                        src: "//r.remarketingpixel.com/px.gif?akey=55ba5e968ae875e80dc46d13ca2fb5d4"
                    } ]
                }
            },
            noStart: !1
        }, {
            id: 5005,
            description: t("Finish {levels} levels", {
                levels: "5"
            }),
            rewardIcon: "rc/sunduk-150.png",
            rewardText: "",
            type: "start_quest",
            objectives: [ {
                counter: "PASSLOCK",
                value: r("5e+0"),
                isAbsolute: !1
            } ],
            nonautoReward: !0,
            lock: {
                vars: {
                    TUT_SH: 1,
                    LT_SH_AC: 1
                }
            },
            popup: "startQuest",
            reward: {
                vars: {
                    QT_SH: 1
                },
                res: {
                    chests: 1
                }
            }
        }, {
            id: 5006,
            description: t('Raise the attribute "{stat_name}" to {value}', {
                stat_name: t("strength"),
                value: 2
            }),
            rewardIcon: "rc/ms-stone-orange.png",
            rewardText: "10",
            type: "start_quest",
            objectives: [ {
                counter: "strength",
                value: r("2e+0"),
                isAbsolute: !1
            } ],
            nonautoReward: !0,
            lock: {
                vars: {
                    TUT_MR_GD: 13
                }
            },
            popup: "startQuest",
            reward: {
                res: {
                    strength_res: 10
                }
            }
        }, {
            id: 6001,
            description: t("Open {pictures} pictures", {
                pictures: "5"
            }),
            rewardIcon: "rc/ic-abil-butil@2x.png",
            rewardText: "timeskip",
            type: "start_quest",
            objectives: [ {
                counter: "Pictures",
                value: r("5e+0"),
                isAbsolute: !1
            } ],
            lock: {
                counters: {
                    MAXLOCK: 3
                }
            },
            nonautoReward: !0,
            popup: "startQuest",
            reward: {
                timeskip: {
                    res: [ "shards" ],
                    time: 1080
                }
            }
        }, {
            id: 6002,
            description: t("Finish {levels} levels", {
                levels: "5"
            }),
            rewardIcon: "rc/ic-abil-gold@2x.png",
            rewardText: "timeskip",
            type: "start_quest",
            objectives: [ {
                counter: "PASSLOCK",
                value: r("5e+0"),
                isAbsolute: !1
            } ],
            lock: {
                quests: [ 6001 ]
            },
            nonautoReward: !0,
            popup: "startQuest",
            reward: {
                timeskip: {
                    res: [ "gold" ],
                    time: 1080
                }
            }
        }, {
            id: 6003,
            description: t("Open {pictures} pictures with a favorite tag", {
                pictures: "5"
            }),
            rewardIcon: "rc/ico-real-big.png",
            rewardText: "25",
            type: "start_quest",
            objectives: [ {
                counter: "FPictures",
                value: r("5e+0"),
                isAbsolute: !1
            } ],
            lock: {
                quests: [ 6002 ]
            },
            nonautoReward: !0,
            popup: "startQuest",
            reward: {
                res: {
                    crowns: r("2.5e+1")
                }
            }
        }, {
            id: 6004,
            description: t("Kill {count} monsters", {
                count: "25"
            }),
            rewardIcon: "rc/ico-sword.png",
            rewardText: "3%",
            type: "start_quest",
            objectives: [ {
                counter: "MSTRKL",
                value: r("2.5e+1"),
                isAbsolute: !1
            } ],
            lock: {
                quests: [ 6003 ]
            },
            nonautoReward: !0,
            popup: "startQuest",
            reward: {
                mults: [ [ "DPS", {
                    value: .03
                } ] ],
                counters: {
                    SQF: 1
                }
            }
        } ];
    },
    81: function(e, a, i) {
        "use strict";
        var r, t;
        t = i(26)._tr, r = i(8), e.exports = [ {
            id: 1,
            name: t("Akira Hitsujikai"),
            info: t("Best of making eyes in a Wild West."),
            icons: [ "__03b2/images/hero-all/tithero-01/x1/ava/tithero-01-1-ava.jpg", "__b251/images/hero-all/tithero-01/x1/ava/tithero-01-2-ava.jpg", "__f9d3/images/hero-all/tithero-01/x1/ava/tithero-01-3-ava.jpg", "__8a60/images/hero-all/tithero-01/x1/ava/tithero-01-4-ava.jpg", "__3b55/images/hero-all/tithero-01/x1/ava/tithero-01-5-ava.jpg" ],
            images: [ "__0528/images/hero-all/tithero-01/x1/tithero-01-1.jpg", "__5b5e/images/hero-all/tithero-01/x1/tithero-01-2.jpg", "__c5d2/images/hero-all/tithero-01/x1/tithero-01-3.jpg", "__28cb/images/hero-all/tithero-01/x1/tithero-01-4.jpg", "__98ed/images/hero-all/tithero-01/x1/tithero-01-5.jpg" ],
            "icons@2x": [ "__e5a3/images/hero-all/tithero-01/x2/ava/tithero-01-1-ava.jpg", "__6f49/images/hero-all/tithero-01/x2/ava/tithero-01-2-ava.jpg", "__0d5c/images/hero-all/tithero-01/x2/ava/tithero-01-3-ava.jpg", "__c54b/images/hero-all/tithero-01/x2/ava/tithero-01-4-ava.jpg", "__fe84/images/hero-all/tithero-01/x2/ava/tithero-01-5-ava.jpg" ],
            "images@2x": [ "__7e4d/images/hero-all/tithero-01/x2/tithero-01-1.jpg", "__2b31/images/hero-all/tithero-01/x2/tithero-01-2.jpg", "__5044/images/hero-all/tithero-01/x2/tithero-01-3.jpg", "__99a9/images/hero-all/tithero-01/x2/tithero-01-4.jpg", "__a0ba/images/hero-all/tithero-01/x2/tithero-01-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Fast shot"),
                    num: "I"
                }),
                info: t("+{dpc} DPC", {
                    dpc: 100
                }),
                icon: "__b99e/rc/icons/ic-abil-35.jpg",
                reward: {
                    counters: {
                        ADD_DPC: 100
                    }
                },
                id: 1000101,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1e+2")
                }
            }, {
                name: t("Swift hand"),
                info: t("Automatically performs {clicks} clicks per second for {seconds} seconds."),
                icon: "__caf2/rc/skill-icon01.png",
                reward: {
                    counters: {
                        "C::SK:1": 1
                    },
                    failText: t("This skill will be available when hero {heroName} will reach level {lvl}.", {
                        heroName: t("Akira Hitsujikai"),
                        lvl: 25
                    })
                },
                skillId: 1,
                id: 1000102,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("3e+2")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fast shot"),
                    num: "II"
                }),
                info: t("+{pc}% DPC", {
                    pc: "100"
                }),
                icon: "__b99e/rc/icons/ic-abil-35.jpg",
                reward: {
                    mults: [ [ "DPC", {
                        value: 1
                    } ] ]
                },
                id: 1000103,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.855e+3")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fast shot"),
                    num: "III"
                }),
                info: t("+{dpc} DPC", {
                    dpc: 250
                }),
                icon: "__b99e/rc/icons/ic-abil-35.jpg",
                reward: {
                    counters: {
                        ADD_DPC: 250
                    }
                },
                id: 1000104,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.1335e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fast shot"),
                    num: "IV"
                }),
                info: t("+{pc}% DPC", {
                    pc: "200"
                }),
                icon: "__b99e/rc/icons/ic-abil-35.jpg",
                reward: {
                    mults: [ [ "DPC", {
                        value: 2
                    } ] ]
                },
                id: 1000105,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("6.915e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fast shot"),
                    num: "V"
                }),
                info: t("+{dpc} DPC", {
                    dpc: 750
                }),
                icon: "__b99e/rc/icons/ic-abil-35.jpg",
                reward: {
                    counters: {
                        ADD_DPC: 750
                    }
                },
                id: 1000106,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("3.557018035e+9")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fast shot"),
                    num: "VI"
                }),
                info: t("+{pc}% DPC", {
                    pc: "500"
                }),
                icon: "__b99e/rc/icons/ic-abil-35.jpg",
                reward: {
                    mults: [ [ "DPC", {
                        value: 5
                    } ] ]
                },
                id: 1000107,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("2.53047546e+17")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fast shot"),
                    num: "VII"
                }),
                info: t("+{dpc} DPC", {
                    dpc: 1e3
                }),
                icon: "__b99e/rc/icons/ic-abil-35.jpg",
                reward: {
                    counters: {
                        ADD_DPC: 1e3
                    }
                },
                id: 1000108,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.80018937e+25")
                }
            } ],
            special: !1
        }, {
            id: 2,
            name: t("Eiko Nousagi"),
            info: t("Sleazy bar waitress."),
            icons: [ "__f924/images/hero-all/tithero-02/x1/ava/tithero-02-1-ava.jpg", "__b0f5/images/hero-all/tithero-02/x1/ava/tithero-02-2-ava.jpg", "__597f/images/hero-all/tithero-02/x1/ava/tithero-02-3-ava.jpg", "__0348/images/hero-all/tithero-02/x1/ava/tithero-02-4-ava.jpg", "__2c7f/images/hero-all/tithero-02/x1/ava/tithero-02-5-ava.jpg" ],
            images: [ "__b06a/images/hero-all/tithero-02/x1/tithero-02-1.jpg", "__65f4/images/hero-all/tithero-02/x1/tithero-02-2.jpg", "__06a9/images/hero-all/tithero-02/x1/tithero-02-3.jpg", "__18c5/images/hero-all/tithero-02/x1/tithero-02-4.jpg", "__5ea1/images/hero-all/tithero-02/x1/tithero-02-5.jpg" ],
            "icons@2x": [ "__d611/images/hero-all/tithero-02/x2/ava/tithero-02-1-ava.jpg", "__7633/images/hero-all/tithero-02/x2/ava/tithero-02-2-ava.jpg", "__9ac0/images/hero-all/tithero-02/x2/ava/tithero-02-3-ava.jpg", "__03e9/images/hero-all/tithero-02/x2/ava/tithero-02-4-ava.jpg", "__c997/images/hero-all/tithero-02/x2/ava/tithero-02-5-ava.jpg" ],
            "images@2x": [ "__6bef/images/hero-all/tithero-02/x2/tithero-02-1.jpg", "__a4e1/images/hero-all/tithero-02/x2/tithero-02-2.jpg", "__b00a/images/hero-all/tithero-02/x2/tithero-02-3.jpg", "__d4a0/images/hero-all/tithero-02/x2/tithero-02-4.jpg", "__a430/images/hero-all/tithero-02/x2/tithero-02-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Strip Seal"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__fa76/rc/icons/ic-abil-34.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000201,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("4.7e+2")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Strip Seal"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__fa76/rc/icons/ic-abil-34.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000202,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.4e+3")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Strip Seal"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__fa76/rc/icons/ic-abil-34.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000203,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("8.55e+3")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Strip Seal"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__fa76/rc/icons/ic-abil-34.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1000204,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("5.216e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Strip Seal"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__fa76/rc/icons/ic-abil-34.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000205,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("3.18105e+5")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Strip Seal"),
                    num: "VI"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__fa76/rc/icons/ic-abil-34.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1000206,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.636228295e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Strip Seal"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__fa76/rc/icons/ic-abil-34.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1000207,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.16401871e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Strip Seal"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__fa76/rc/icons/ic-abil-34.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1000208,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("8.2808711e+25")
                }
            } ],
            special: !1
        }, {
            id: 3,
            name: t("Hoshi Asashin"),
            info: t("Well-trained “honey trap”."),
            icons: [ "__5f5e/images/hero-all/tithero-03/x1/ava/tithero-03-1-ava.jpg", "__67f3/images/hero-all/tithero-03/x1/ava/tithero-03-2-ava.jpg", "__cc59/images/hero-all/tithero-03/x1/ava/tithero-03-3-ava.jpg", "__c43f/images/hero-all/tithero-03/x1/ava/tithero-03-4-ava.jpg", "__46a7/images/hero-all/tithero-03/x1/ava/tithero-03-5-ava.jpg" ],
            images: [ "__035c/images/hero-all/tithero-03/x1/tithero-03-1.jpg", "__e043/images/hero-all/tithero-03/x1/tithero-03-2.jpg", "__405d/images/hero-all/tithero-03/x1/tithero-03-3.jpg", "__c861/images/hero-all/tithero-03/x1/tithero-03-4.jpg", "__240b/images/hero-all/tithero-03/x1/tithero-03-5.jpg" ],
            "icons@2x": [ "__b8bf/images/hero-all/tithero-03/x2/ava/tithero-03-1-ava.jpg", "__9caa/images/hero-all/tithero-03/x2/ava/tithero-03-2-ava.jpg", "__16d7/images/hero-all/tithero-03/x2/ava/tithero-03-3-ava.jpg", "__81fc/images/hero-all/tithero-03/x2/ava/tithero-03-4-ava.jpg", "__c743/images/hero-all/tithero-03/x2/ava/tithero-03-5-ava.jpg" ],
            "images@2x": [ "__f239/images/hero-all/tithero-03/x2/tithero-03-1.jpg", "__020e/images/hero-all/tithero-03/x2/tithero-03-2.jpg", "__8219/images/hero-all/tithero-03/x2/tithero-03-3.jpg", "__8130/images/hero-all/tithero-03/x2/tithero-03-4.jpg", "__a6ca/images/hero-all/tithero-03/x2/tithero-03-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Lovely hands"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__3485/rc/icons/ic-abil-33.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000301,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("2.265e+3")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lovely hands"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__3485/rc/icons/ic-abil-33.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000302,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("6.705e+3")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lovely hands"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__3485/rc/icons/ic-abil-33.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1000303,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("4.0905e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lovely hands"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__3485/rc/icons/ic-abil-33.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1000304,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("2.49475e+5")
                }
            }, {
                name: t("Ancestors Force"),
                info: t("+{pc}% DPS for {seconds} seconds."),
                icon: "__1730/rc/skill-icon02.png",
                reward: {
                    counters: {
                        "C::SK:2": 1
                    },
                    failText: t("This skill will be available when hero {heroName} will reach level {lvl}.", {
                        heroName: t("Hoshi Asashin"),
                        lvl: 100
                    })
                },
                skillId: 2,
                id: 1000305,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.52138e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lovely hands"),
                    num: "V"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__3485/rc/icons/ic-abil-33.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1000306,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("7.82543965e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lovely hands"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__3485/rc/icons/ic-abil-33.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1000307,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("5.567046e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lovely hands"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "150"
                }),
                icon: "__3485/rc/icons/ic-abil-33.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1.5
                    } ] ]
                },
                id: 1000308,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("3.960416615e+26")
                }
            } ],
            special: !1
        }, {
            id: 100500,
            name: t("Yukari Tenshi"),
            info: t("Servant of the Seventh Heaven of Love."),
            icons: [ "__ca4d/images/hero-all/tithero-12/x1/ava/tithero-12-1-ava.jpg", "__94fe/images/hero-all/tithero-12/x1/ava/tithero-12-2-ava.jpg", "__c505/images/hero-all/tithero-12/x1/ava/tithero-12-3-ava.jpg", "__94da/images/hero-all/tithero-12/x1/ava/tithero-12-4-ava.jpg", "__eee3/images/hero-all/tithero-12/x1/ava/tithero-12-5-ava.jpg" ],
            images: [ "__42f8/images/hero-all/tithero-12/x1/tithero-12-1.jpg", "__a0b5/images/hero-all/tithero-12/x1/tithero-12-2.jpg", "__309c/images/hero-all/tithero-12/x1/tithero-12-3.jpg", "__a024/images/hero-all/tithero-12/x1/tithero-12-4.jpg", "__7ce9/images/hero-all/tithero-12/x1/tithero-12-5.jpg" ],
            "icons@2x": [ "__2408/images/hero-all/tithero-12/x2/ava/tithero-12-1-ava.jpg", "__d20c/images/hero-all/tithero-12/x2/ava/tithero-12-2-ava.jpg", "__bf88/images/hero-all/tithero-12/x2/ava/tithero-12-3-ava.jpg", "__e03f/images/hero-all/tithero-12/x2/ava/tithero-12-4-ava.jpg", "__baff/images/hero-all/tithero-12/x2/ava/tithero-12-5-ava.jpg" ],
            "images@2x": [ "__4a32/images/hero-all/tithero-12/x2/tithero-12-1.jpg", "__21fb/images/hero-all/tithero-12/x2/tithero-12-2.jpg", "__9401/images/hero-all/tithero-12/x2/tithero-12-3.jpg", "__5bc6/images/hero-all/tithero-12/x2/tithero-12-4.jpg", "__e790/images/hero-all/tithero-12/x2/tithero-12-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Heaven Spear"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__c0c3/rc/icons/ic-abil-36.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 11050001,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("5.44e+3")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Heaven Spear"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__c0c3/rc/icons/ic-abil-36.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 11050002,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.6095e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Heaven Spear"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__c0c3/rc/icons/ic-abil-36.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 11050003,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("9.818e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Heaven Spear"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__c0c3/rc/icons/ic-abil-36.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 11050004,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("5.9874e+5")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Heaven Spear"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__c0c3/rc/icons/ic-abil-36.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 11050005,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("3.65132e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Heaven Spear"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__c0c3/rc/icons/ic-abil-36.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 11050006,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.87810552e+11")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Heaven Spear"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__c0c3/rc/icons/ic-abil-36.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 11050007,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.33609104e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Heaven Spear"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__c0c3/rc/icons/ic-abil-36.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 11050008,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("9.50499985e+26")
                }
            } ],
            special: !0,
            position: 3.5
        }, {
            id: 4,
            name: t("Izumi Yosei"),
            info: t("Sorceress, that posess a rare love magic."),
            icons: [ "__4f27/images/hero-all/tithero-04/x1/ava/tithero-04-1-ava.jpg", "__fa08/images/hero-all/tithero-04/x1/ava/tithero-04-2-ava.jpg", "__bd69/images/hero-all/tithero-04/x1/ava/tithero-04-3-ava.jpg", "__0a5f/images/hero-all/tithero-04/x1/ava/tithero-04-4-ava.jpg", "__0595/images/hero-all/tithero-04/x1/ava/tithero-04-5-ava.jpg" ],
            images: [ "__ab55/images/hero-all/tithero-04/x1/tithero-04-1.jpg", "__4afa/images/hero-all/tithero-04/x1/tithero-04-2.jpg", "__8b16/images/hero-all/tithero-04/x1/tithero-04-3.jpg", "__40c7/images/hero-all/tithero-04/x1/tithero-04-4.jpg", "__9944/images/hero-all/tithero-04/x1/tithero-04-5.jpg" ],
            "icons@2x": [ "__d619/images/hero-all/tithero-04/x2/ava/tithero-04-1-ava.jpg", "__5c75/images/hero-all/tithero-04/x2/ava/tithero-04-2-ava.jpg", "__7280/images/hero-all/tithero-04/x2/ava/tithero-04-3-ava.jpg", "__6c1b/images/hero-all/tithero-04/x2/ava/tithero-04-4-ava.jpg", "__42c9/images/hero-all/tithero-04/x2/ava/tithero-04-5-ava.jpg" ],
            "images@2x": [ "__cd6e/images/hero-all/tithero-04/x2/tithero-04-1.jpg", "__7d7e/images/hero-all/tithero-04/x2/tithero-04-2.jpg", "__8e67/images/hero-all/tithero-04/x2/tithero-04-3.jpg", "__1812/images/hero-all/tithero-04/x2/tithero-04-4.jpg", "__dc18/images/hero-all/tithero-04/x2/tithero-04-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Thunder bolt"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__de76/rc/icons/ic-abil-32.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000401,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.088e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Thunder bolt"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__de76/rc/icons/ic-abil-32.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000402,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("3.2195e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Thunder bolt"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__de76/rc/icons/ic-abil-32.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000403,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.9636e+5")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Thunder bolt"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "5"
                }),
                icon: "__de76/rc/icons/ic-abil-32.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .05
                    } ] ]
                },
                id: 1000404,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.19748e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Thunder bolt"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__de76/rc/icons/ic-abil-32.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000405,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("7.302645e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Thunder bolt"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "5"
                }),
                icon: "__de76/rc/icons/ic-abil-32.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .05
                    } ] ]
                },
                id: 1000406,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("3.756211045e+11")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Thunder bolt"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__de76/rc/icons/ic-abil-32.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1000407,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("2.672182085e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Thunder bolt"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__de76/rc/icons/ic-abil-32.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1000408,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.900999975e+27")
                }
            } ],
            special: !1
        }, {
            id: 5,
            name: t("Moe Kasa"),
            info: t("Very cute Sweet Lolita."),
            icons: [ "__d7ea/images/hero-all/tithero-06/x1/ava/tithero-06-1-ava.jpg", "__fd6a/images/hero-all/tithero-06/x1/ava/tithero-06-2-ava.jpg", "__d019/images/hero-all/tithero-06/x1/ava/tithero-06-3-ava.jpg", "__18fd/images/hero-all/tithero-06/x1/ava/tithero-06-4-ava.jpg", "__e2cc/images/hero-all/tithero-06/x1/ava/tithero-06-5-ava.jpg" ],
            images: [ "__ce60/images/hero-all/tithero-06/x1/tithero-06-1.jpg", "__adf3/images/hero-all/tithero-06/x1/tithero-06-2.jpg", "__254e/images/hero-all/tithero-06/x1/tithero-06-3.jpg", "__b5bd/images/hero-all/tithero-06/x1/tithero-06-4.jpg", "__437b/images/hero-all/tithero-06/x1/tithero-06-5.jpg" ],
            "icons@2x": [ "__c191/images/hero-all/tithero-06/x2/ava/tithero-06-1-ava.jpg", "__54f5/images/hero-all/tithero-06/x2/ava/tithero-06-2-ava.jpg", "__5b03/images/hero-all/tithero-06/x2/ava/tithero-06-3-ava.jpg", "__c0b9/images/hero-all/tithero-06/x2/ava/tithero-06-4-ava.jpg", "__5b3c/images/hero-all/tithero-06/x2/ava/tithero-06-5-ava.jpg" ],
            "images@2x": [ "__d90e/images/hero-all/tithero-06/x2/tithero-06-1.jpg", "__56d3/images/hero-all/tithero-06/x2/tithero-06-2.jpg", "__c0c6/images/hero-all/tithero-06/x2/tithero-06-3.jpg", "__3493/images/hero-all/tithero-06/x2/tithero-06-4.jpg", "__d37a/images/hero-all/tithero-06/x2/tithero-06-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Meteor Strike"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__c866/rc/icons/ic-abil-31.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000501,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("5.2305e+4")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Meteor Strike"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__c866/rc/icons/ic-abil-31.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000502,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.54775e+5")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Meteor Strike"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__c866/rc/icons/ic-abil-31.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000503,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("9.43875e+5")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Meteor Strike"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "7.5"
                }),
                icon: "__c866/rc/icons/ic-abil-31.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .075
                    } ] ]
                },
                id: 1000504,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("5.75607e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Meteor Strike"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__c866/rc/icons/ic-abil-31.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000505,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("3.5102495e+7")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Meteor Strike"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "7.5"
                }),
                icon: "__c866/rc/icons/ic-abil-31.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .075
                    } ] ]
                },
                id: 1000506,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.80554235e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Meteor Strike"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__c866/rc/icons/ic-abil-31.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1000507,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.28446934e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Meteor Strike"),
                    num: "VIII"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.5"
                }),
                icon: "__c866/rc/icons/ic-abil-31.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .005
                    } ] ]
                },
                id: 1000508,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("9.1377612e+27")
                }
            } ],
            special: !1
        }, {
            id: 6,
            name: t("Shizuka Neko"),
            info: t("Tsundere catgirl."),
            icons: [ "__9369/images/hero-all/tithero-07/x1/ava/tithero-07-1-ava.jpg", "__14ce/images/hero-all/tithero-07/x1/ava/tithero-07-2-ava.jpg", "__b3b3/images/hero-all/tithero-07/x1/ava/tithero-07-3-ava.jpg", "__3a88/images/hero-all/tithero-07/x1/ava/tithero-07-4-ava.jpg", "__2fa9/images/hero-all/tithero-07/x1/ava/tithero-07-5-ava.jpg" ],
            images: [ "__edbc/images/hero-all/tithero-07/x1/tithero-07-1.jpg", "__672a/images/hero-all/tithero-07/x1/tithero-07-2.jpg", "__14c6/images/hero-all/tithero-07/x1/tithero-07-3.jpg", "__30f8/images/hero-all/tithero-07/x1/tithero-07-4.jpg", "__6eeb/images/hero-all/tithero-07/x1/tithero-07-5.jpg" ],
            "icons@2x": [ "__85fe/images/hero-all/tithero-07/x2/ava/tithero-07-1-ava.jpg", "__ebb1/images/hero-all/tithero-07/x2/ava/tithero-07-2-ava.jpg", "__012f/images/hero-all/tithero-07/x2/ava/tithero-07-3-ava.jpg", "__9bbb/images/hero-all/tithero-07/x2/ava/tithero-07-4-ava.jpg", "__0307/images/hero-all/tithero-07/x2/ava/tithero-07-5-ava.jpg" ],
            "images@2x": [ "__cd27/images/hero-all/tithero-07/x2/tithero-07-1.jpg", "__2aaa/images/hero-all/tithero-07/x2/tithero-07-2.jpg", "__4826/images/hero-all/tithero-07/x2/tithero-07-3.jpg", "__fedc/images/hero-all/tithero-07/x2/tithero-07-4.jpg", "__714f/images/hero-all/tithero-07/x2/tithero-07-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Cat tornado"),
                    num: "I"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "5"
                }),
                icon: "__1d49/rc/icons/ic-abil-30.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .05
                    } ] ]
                },
                id: 1000601,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("2.51485e+5")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Cat tornado"),
                    num: "II"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "10"
                }),
                icon: "__1d49/rc/icons/ic-abil-30.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .1
                    } ] ]
                },
                id: 1000602,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("7.44115e+5")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Cat tornado"),
                    num: "III"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "10"
                }),
                icon: "__1d49/rc/icons/ic-abil-30.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .1
                    } ] ]
                },
                id: 1000603,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("4.53789e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Cat tornado"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__1d49/rc/icons/ic-abil-30.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1000604,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("2.767361e+7")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Cat tornado"),
                    num: "V"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "15"
                }),
                icon: "__1d49/rc/icons/ic-abil-30.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .15
                    } ] ]
                },
                id: 1000605,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.6876308e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Cat tornado"),
                    num: "VI"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__1d49/rc/icons/ic-abil-30.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1000606,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("8.6805468e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Cat tornado"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "20"
                }),
                icon: "__1d49/rc/icons/ic-abil-30.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .2
                    } ] ]
                },
                id: 1000607,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("6.1753723e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Cat tornado"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "20"
                }),
                icon: "__1d49/rc/icons/ic-abil-30.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .2
                    } ] ]
                },
                id: 1000608,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("4.39318214e+28")
                }
            } ],
            special: !1
        }, {
            id: 7,
            name: t("Aika Erufu"),
            info: t("Elven huntress"),
            icons: [ "__423d/images/hero-all/tithero-08/x1/ava/tithero-08-1-ava.jpg", "__f81b/images/hero-all/tithero-08/x1/ava/tithero-08-2-ava.jpg", "__4220/images/hero-all/tithero-08/x1/ava/tithero-08-3-ava.jpg", "__bacf/images/hero-all/tithero-08/x1/ava/tithero-08-4-ava.jpg", "__e303/images/hero-all/tithero-08/x1/ava/tithero-08-5-ava.jpg" ],
            images: [ "__8dd9/images/hero-all/tithero-08/x1/tithero-08-1.jpg", "__98bb/images/hero-all/tithero-08/x1/tithero-08-2.jpg", "__fbda/images/hero-all/tithero-08/x1/tithero-08-3.jpg", "__0fd9/images/hero-all/tithero-08/x1/tithero-08-4.jpg", "__15a8/images/hero-all/tithero-08/x1/tithero-08-5.jpg" ],
            "icons@2x": [ "__2944/images/hero-all/tithero-08/x2/ava/tithero-08-1-ava.jpg", "__56bd/images/hero-all/tithero-08/x2/ava/tithero-08-2-ava.jpg", "__6c38/images/hero-all/tithero-08/x2/ava/tithero-08-3-ava.jpg", "__7dd6/images/hero-all/tithero-08/x2/ava/tithero-08-4-ava.jpg", "__7003/images/hero-all/tithero-08/x2/ava/tithero-08-5-ava.jpg" ],
            "images@2x": [ "__af80/images/hero-all/tithero-08/x2/tithero-08-1.jpg", "__2d6c/images/hero-all/tithero-08/x2/tithero-08-2.jpg", "__0fc6/images/hero-all/tithero-08/x2/tithero-08-3.jpg", "__d2b9/images/hero-all/tithero-08/x2/tithero-08-4.jpg", "__5f9f/images/hero-all/tithero-08/x2/tithero-08-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Modern Bow"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__560d/rc/icons/ic-abil-29.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1000701,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.209225e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Modern Bow"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__560d/rc/icons/ic-abil-29.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1000702,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("3.577955e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Modern Bow"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__560d/rc/icons/ic-abil-29.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000703,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("2.1819595e+7")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Modern Bow"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__560d/rc/icons/ic-abil-29.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000704,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.33063305e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Modern Bow"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__560d/rc/icons/ic-abil-29.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000705,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("8.11465225e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Modern Bow"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__560d/rc/icons/ic-abil-29.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000706,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("4.1738761e+13")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Modern Bow"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__560d/rc/icons/ic-abil-29.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000707,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("2.969310515e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Modern Bow"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__560d/rc/icons/ic-abil-29.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000708,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("2.11237821e+29")
                }
            } ],
            special: !1
        }, {
            id: 8,
            name: t("Madoka Kaito"),
            info: t("Absolutely usual schoolgirl-samurai."),
            icons: [ "__e82f/images/hero-all/tithero-05/x1/ava/tithero-05-1-ava.jpg", "__7e1f/images/hero-all/tithero-05/x1/ava/tithero-05-2-ava.jpg", "__c122/images/hero-all/tithero-05/x1/ava/tithero-05-3-ava.jpg", "__451c/images/hero-all/tithero-05/x1/ava/tithero-05-4-ava.jpg", "__147a/images/hero-all/tithero-05/x1/ava/tithero-05-5-ava.jpg" ],
            images: [ "__3dc1/images/hero-all/tithero-05/x1/tithero-05-1.jpg", "__3fb8/images/hero-all/tithero-05/x1/tithero-05-2.jpg", "__258e/images/hero-all/tithero-05/x1/tithero-05-3.jpg", "__2e5c/images/hero-all/tithero-05/x1/tithero-05-4.jpg", "__86bc/images/hero-all/tithero-05/x1/tithero-05-5.jpg" ],
            "icons@2x": [ "__20c3/images/hero-all/tithero-05/x2/ava/tithero-05-1-ava.jpg", "__a282/images/hero-all/tithero-05/x2/ava/tithero-05-2-ava.jpg", "__5f4e/images/hero-all/tithero-05/x2/ava/tithero-05-3-ava.jpg", "__16c2/images/hero-all/tithero-05/x2/ava/tithero-05-4-ava.jpg", "__e884/images/hero-all/tithero-05/x2/ava/tithero-05-5-ava.jpg" ],
            "images@2x": [ "__2809/images/hero-all/tithero-05/x2/tithero-05-1.jpg", "__f4ea/images/hero-all/tithero-05/x2/tithero-05-2.jpg", "__e538/images/hero-all/tithero-05/x2/tithero-05-3.jpg", "__0213/images/hero-all/tithero-05/x2/tithero-05-4.jpg", "__7cb7/images/hero-all/tithero-05/x2/tithero-05-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Ki Burst"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__4180/rc/icons/ic-abil-28.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1000801,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("5.814415e+6")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ki Burst"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__4180/rc/icons/ic-abil-28.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1000802,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.7204145e+7")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ki Burst"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__4180/rc/icons/ic-abil-28.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000803,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.04916735e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ki Burst"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__4180/rc/icons/ic-abil-28.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000804,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("6.39817885e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ki Burst"),
                    num: "V"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__4180/rc/icons/ic-abil-28.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1000805,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("3.901826775e+9")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ki Burst"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__4180/rc/icons/ic-abil-28.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000806,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("2.00695494e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ki Burst"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__4180/rc/icons/ic-abil-28.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1000807,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.427754985e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ki Burst"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__4180/rc/icons/ic-abil-28.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000808,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.015710045e+30")
                }
            } ],
            special: !1
        }, {
            id: 9,
            name: t("Atsuko Tarisuto"),
            info: t("Guitarist of famous rock band."),
            icons: [ "__3328/images/hero-all/tithero-09/x1/ava/tithero-09-1-ava.jpg", "__29ec/images/hero-all/tithero-09/x1/ava/tithero-09-2-ava.jpg", "__ecf6/images/hero-all/tithero-09/x1/ava/tithero-09-3-ava.jpg", "__b6b3/images/hero-all/tithero-09/x1/ava/tithero-09-4-ava.jpg", "__6ba9/images/hero-all/tithero-09/x1/ava/tithero-09-5-ava.jpg" ],
            images: [ "__4c08/images/hero-all/tithero-09/x1/tithero-09-1.jpg", "__2168/images/hero-all/tithero-09/x1/tithero-09-2.jpg", "__8d25/images/hero-all/tithero-09/x1/tithero-09-3.jpg", "__a30d/images/hero-all/tithero-09/x1/tithero-09-4.jpg", "__4f84/images/hero-all/tithero-09/x1/tithero-09-5.jpg" ],
            "icons@2x": [ "__432e/images/hero-all/tithero-09/x2/ava/tithero-09-1-ava.jpg", "__7d15/images/hero-all/tithero-09/x2/ava/tithero-09-2-ava.jpg", "__2f14/images/hero-all/tithero-09/x2/ava/tithero-09-3-ava.jpg", "__9f3e/images/hero-all/tithero-09/x2/ava/tithero-09-4-ava.jpg", "__c5aa/images/hero-all/tithero-09/x2/ava/tithero-09-5-ava.jpg" ],
            "images@2x": [ "__092d/images/hero-all/tithero-09/x2/tithero-09-1.jpg", "__041b/images/hero-all/tithero-09/x2/tithero-09-2.jpg", "__f5c4/images/hero-all/tithero-09/x2/tithero-09-3.jpg", "__f668/images/hero-all/tithero-09/x2/tithero-09-4.jpg", "__2366/images/hero-all/tithero-09/x2/tithero-09-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Sound chains"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__5846/rc/icons/ic-abil-27.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1000901,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("2.7957965e+7")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sound chains"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__5846/rc/icons/ic-abil-27.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1000902,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("8.272419e+7")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sound chains"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__5846/rc/icons/ic-abil-27.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000903,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("5.04480205e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sound chains"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__5846/rc/icons/ic-abil-27.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1000904,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("3.076491625e+9")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sound chains"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5846/rc/icons/ic-abil-27.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000905,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.876149075e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sound chains"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5846/rc/icons/ic-abil-27.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000906,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("9.6502148e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sound chains"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5846/rc/icons/ic-abil-27.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000907,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("6.8651976e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sound chains"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5846/rc/icons/ic-abil-27.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1000908,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("4.88392636e+30")
                }
            } ],
            special: !1
        }, {
            id: 10,
            name: t("Hana Hekishoku"),
            info: t('A mysterious heroine - "Swordswoman of the leaves."'),
            icons: [ "__3d5d/images/hero-all/tithero-10/x1/ava/tithero-10-1-ava.jpg", "__306b/images/hero-all/tithero-10/x1/ava/tithero-10-2-ava.jpg", "__c7c3/images/hero-all/tithero-10/x1/ava/tithero-10-3-ava.jpg", "__2549/images/hero-all/tithero-10/x1/ava/tithero-10-4-ava.jpg", "__2c8f/images/hero-all/tithero-10/x1/ava/tithero-10-5-ava.jpg" ],
            images: [ "__19ce/images/hero-all/tithero-10/x1/tithero-10-1.jpg", "__0c1b/images/hero-all/tithero-10/x1/tithero-10-2.jpg", "__5b17/images/hero-all/tithero-10/x1/tithero-10-3.jpg", "__365e/images/hero-all/tithero-10/x1/tithero-10-4.jpg", "__e9aa/images/hero-all/tithero-10/x1/tithero-10-5.jpg" ],
            "icons@2x": [ "__6290/images/hero-all/tithero-10/x2/ava/tithero-10-1-ava.jpg", "__1603/images/hero-all/tithero-10/x2/ava/tithero-10-2-ava.jpg", "__24a1/images/hero-all/tithero-10/x2/ava/tithero-10-3-ava.jpg", "__3641/images/hero-all/tithero-10/x2/ava/tithero-10-4-ava.jpg", "__f63f/images/hero-all/tithero-10/x2/ava/tithero-10-5-ava.jpg" ],
            "images@2x": [ "__a257/images/hero-all/tithero-10/x2/tithero-10-1.jpg", "__ca10/images/hero-all/tithero-10/x2/tithero-10-2.jpg", "__7ef7/images/hero-all/tithero-10/x2/tithero-10-3.jpg", "__222a/images/hero-all/tithero-10/x2/tithero-10-4.jpg", "__2ee1/images/hero-all/tithero-10/x2/tithero-10-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Furious strike"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__0cea/rc/icons/ic-abil-26.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1001001,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.3443281e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Furious strike"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__0cea/rc/icons/ic-abil-26.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1001002,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("3.97770205e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Furious strike"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__0cea/rc/icons/ic-abil-26.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001003,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("2.425737815e+9")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Furious strike"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__0cea/rc/icons/ic-abil-26.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001004,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.4792973e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Furious strike"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__0cea/rc/icons/ic-abil-26.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001005,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("9.0212573e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Furious strike"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__0cea/rc/icons/ic-abil-26.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001006,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("4.6402001e+15")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Furious strike"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__0cea/rc/icons/ic-abil-26.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001007,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("3.301055085e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Furious strike"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__0cea/rc/icons/ic-abil-26.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001008,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("2.348382495e+31")
                }
            } ],
            special: !1
        }, {
            id: 11,
            name: t("Shun Soresha"),
            info: t("Professional high-class geisha."),
            icons: [ "__c10a/images/hero-all/tithero-11/x1/ava/tithero-11-1-ava.jpg", "__a814/images/hero-all/tithero-11/x1/ava/tithero-11-2-ava.jpg", "__55ef/images/hero-all/tithero-11/x1/ava/tithero-11-3-ava.jpg", "__625c/images/hero-all/tithero-11/x1/ava/tithero-11-4-ava.jpg", "__9f6d/images/hero-all/tithero-11/x1/ava/tithero-11-5-ava.jpg" ],
            images: [ "__0f4d/images/hero-all/tithero-11/x1/tithero-11-1.jpg", "__a30c/images/hero-all/tithero-11/x1/tithero-11-2.jpg", "__e19a/images/hero-all/tithero-11/x1/tithero-11-3.jpg", "__18fa/images/hero-all/tithero-11/x1/tithero-11-4.jpg", "__6e72/images/hero-all/tithero-11/x1/tithero-11-5.jpg" ],
            "icons@2x": [ "__2d44/images/hero-all/tithero-11/x2/ava/tithero-11-1-ava.jpg", "__08c2/images/hero-all/tithero-11/x2/ava/tithero-11-2-ava.jpg", "__151b/images/hero-all/tithero-11/x2/ava/tithero-11-3-ava.jpg", "__7bdb/images/hero-all/tithero-11/x2/ava/tithero-11-4-ava.jpg", "__94e6/images/hero-all/tithero-11/x2/ava/tithero-11-5-ava.jpg" ],
            "images@2x": [ "__664b/images/hero-all/tithero-11/x2/tithero-11-1.jpg", "__6172/images/hero-all/tithero-11/x2/tithero-11-2.jpg", "__6b53/images/hero-all/tithero-11/x2/tithero-11-3.jpg", "__ba22/images/hero-all/tithero-11/x2/tithero-11-4.jpg", "__9fe9/images/hero-all/tithero-11/x2/tithero-11-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Lion strike"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__d531/rc/icons/ic-abil-25.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1001101,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("6.4640551e+8")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lion strike"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__d531/rc/icons/ic-abil-25.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1001102,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.91263463e+9")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lion strike"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__d531/rc/icons/ic-abil-25.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001103,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.16638955e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lion strike"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__d531/rc/icons/ic-abil-25.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001104,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("7.1130396e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lion strike"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__d531/rc/icons/ic-abil-25.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001105,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("4.337773125e+11")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lion strike"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__d531/rc/icons/ic-abil-25.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001106,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("2.23118957e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lion strike"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__d531/rc/icons/ic-abil-25.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001107,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.58727631e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Lion strike"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__d531/rc/icons/ic-abil-25.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001108,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.12919409e+32")
                }
            } ],
            special: !1
        }, {
            id: 12,
            name: t("Akemi Inma"),
            info: t("Demon that penetrates into the people's dreams."),
            icons: [ "__c727/images/hero-all/tithero-13/x1/ava/tithero-13-1-ava.jpg", "__2027/images/hero-all/tithero-13/x1/ava/tithero-13-2-ava.jpg", "__50c6/images/hero-all/tithero-13/x1/ava/tithero-13-3-ava.jpg", "__a21e/images/hero-all/tithero-13/x1/ava/tithero-13-4-ava.jpg", "__eaa8/images/hero-all/tithero-13/x1/ava/tithero-13-5-ava.jpg" ],
            images: [ "__7ff4/images/hero-all/tithero-13/x1/tithero-13-1.jpg", "__fda8/images/hero-all/tithero-13/x1/tithero-13-2.jpg", "__6c39/images/hero-all/tithero-13/x1/tithero-13-3.jpg", "__9798/images/hero-all/tithero-13/x1/tithero-13-4.jpg", "__3d14/images/hero-all/tithero-13/x1/tithero-13-5.jpg" ],
            "icons@2x": [ "__dd26/images/hero-all/tithero-13/x2/ava/tithero-13-1-ava.jpg", "__1081/images/hero-all/tithero-13/x2/ava/tithero-13-2-ava.jpg", "__0a0c/images/hero-all/tithero-13/x2/ava/tithero-13-3-ava.jpg", "__deb8/images/hero-all/tithero-13/x2/ava/tithero-13-4-ava.jpg", "__b6ab/images/hero-all/tithero-13/x2/ava/tithero-13-5-ava.jpg" ],
            "images@2x": [ "__ce4e/images/hero-all/tithero-13/x2/tithero-13-1.jpg", "__18cd/images/hero-all/tithero-13/x2/tithero-13-2.jpg", "__efcc/images/hero-all/tithero-13/x2/tithero-13-3.jpg", "__a8ba/images/hero-all/tithero-13/x2/tithero-13-4.jpg", "__d563/images/hero-all/tithero-13/x2/tithero-13-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Mental ray"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__a746/rc/icons/ic-abil-24.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001201,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("3.108170435e+9")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mental ray"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__a746/rc/icons/ic-abil-24.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001202,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("9.1966951e+9")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mental ray"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__a746/rc/icons/ic-abil-24.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001203,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("5.608457e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mental ray"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__a746/rc/icons/ic-abil-24.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001204,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("3.420227555e+11")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mental ray"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__a746/rc/icons/ic-abil-24.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001205,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("2.08577092e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mental ray"),
                    num: "VI"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__a746/rc/icons/ic-abil-24.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001206,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.07284318e+17")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mental ray"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__a746/rc/icons/ic-abil-24.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001207,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("7.6322451e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mental ray"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__a746/rc/icons/ic-abil-24.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001208,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("5.42960665e+32")
                }
            } ],
            special: !1
        }, {
            id: 13,
            name: t("Kaori Offredi"),
            info: t("Daughter of the leader of the mafia family."),
            icons: [ "__157f/images/hero-all/tithero-14/x1/ava/tithero-14-1-ava.jpg", "__1058/images/hero-all/tithero-14/x1/ava/tithero-14-2-ava.jpg", "__b335/images/hero-all/tithero-14/x1/ava/tithero-14-3-ava.jpg", "__96dd/images/hero-all/tithero-14/x1/ava/tithero-14-4-ava.jpg", "__6b77/images/hero-all/tithero-14/x1/ava/tithero-14-5-ava.jpg" ],
            images: [ "__b4af/images/hero-all/tithero-14/x1/tithero-14-1.jpg", "__ed80/images/hero-all/tithero-14/x1/tithero-14-2.jpg", "__7fc6/images/hero-all/tithero-14/x1/tithero-14-3.jpg", "__369b/images/hero-all/tithero-14/x1/tithero-14-4.jpg", "__e494/images/hero-all/tithero-14/x1/tithero-14-5.jpg" ],
            "icons@2x": [ "__8039/images/hero-all/tithero-14/x2/ava/tithero-14-1-ava.jpg", "__616b/images/hero-all/tithero-14/x2/ava/tithero-14-2-ava.jpg", "__3602/images/hero-all/tithero-14/x2/ava/tithero-14-3-ava.jpg", "__fde0/images/hero-all/tithero-14/x2/ava/tithero-14-4-ava.jpg", "__00b3/images/hero-all/tithero-14/x2/ava/tithero-14-5-ava.jpg" ],
            "images@2x": [ "__014d/images/hero-all/tithero-14/x2/tithero-14-1.jpg", "__9fd4/images/hero-all/tithero-14/x2/tithero-14-2.jpg", "__3f3b/images/hero-all/tithero-14/x2/tithero-14-3.jpg", "__8bbc/images/hero-all/tithero-14/x2/tithero-14-4.jpg", "__4b02/images/hero-all/tithero-14/x2/tithero-14-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Inner spirit"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__3645/rc/icons/ic-abil-23.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001301,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.494529875e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Inner spirit"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__3645/rc/icons/ic-abil-23.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001302,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("4.42213061e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Inner spirit"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__3645/rc/icons/ic-abil-23.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001303,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("2.696765425e+11")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Inner spirit"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__3645/rc/icons/ic-abil-23.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001304,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.64457914e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Inner spirit"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__3645/rc/icons/ic-abil-23.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001305,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.00292021e+13")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Inner spirit"),
                    num: "VI"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__3645/rc/icons/ic-abil-23.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001306,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("5.1586495e+17")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Inner spirit"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__3645/rc/icons/ic-abil-23.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001307,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("3.66988187e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Inner spirit"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__3645/rc/icons/ic-abil-23.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001308,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("2.6107672e+33")
                }
            } ],
            special: !1
        }, {
            id: 14,
            name: t("Mariko Kikaibaka"),
            info: t("Engineering and technical systems expert."),
            icons: [ "__db6b/images/hero-all/tithero-15/x1/ava/tithero-15-1-ava.jpg", "__ab4d/images/hero-all/tithero-15/x1/ava/tithero-15-2-ava.jpg", "__c5a3/images/hero-all/tithero-15/x1/ava/tithero-15-3-ava.jpg", "__2f0d/images/hero-all/tithero-15/x1/ava/tithero-15-4-ava.jpg", "__f069/images/hero-all/tithero-15/x1/ava/tithero-15-5-ava.jpg" ],
            images: [ "__0f68/images/hero-all/tithero-15/x1/tithero-15-1.jpg", "__2518/images/hero-all/tithero-15/x1/tithero-15-2.jpg", "__d144/images/hero-all/tithero-15/x1/tithero-15-3.jpg", "__c23f/images/hero-all/tithero-15/x1/tithero-15-4.jpg", "__d162/images/hero-all/tithero-15/x1/tithero-15-5.jpg" ],
            "icons@2x": [ "__4257/images/hero-all/tithero-15/x2/ava/tithero-15-1-ava.jpg", "__3710/images/hero-all/tithero-15/x2/ava/tithero-15-2-ava.jpg", "__66f1/images/hero-all/tithero-15/x2/ava/tithero-15-3-ava.jpg", "__3ad0/images/hero-all/tithero-15/x2/ava/tithero-15-4-ava.jpg", "__ab47/images/hero-all/tithero-15/x2/ava/tithero-15-5-ava.jpg" ],
            "images@2x": [ "__6685/images/hero-all/tithero-15/x2/tithero-15-1.jpg", "__4625/images/hero-all/tithero-15/x2/tithero-15-2.jpg", "__1633/images/hero-all/tithero-15/x2/tithero-15-3.jpg", "__0680/images/hero-all/tithero-15/x2/tithero-15-4.jpg", "__d5b5/images/hero-all/tithero-15/x2/tithero-15-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Fire flow"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__5da3/rc/icons/ic-abil-22.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001401,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("7.186284e+10")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire flow"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__5da3/rc/icons/ic-abil-22.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001402,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("2.1263333e+11")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire flow"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5da3/rc/icons/ic-abil-22.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001403,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.29671026e+12")
                }
            }, {
                name: t("Philosopher Stone"),
                info: t("+{pc}% gold dropped from monsters for {seconds} seconds."),
                icon: "__913e/rc/skill-icon03.png",
                reward: {
                    counters: {
                        "C::SK:3": 1
                    },
                    failText: t("This skill will be available when hero {heroName} will reach level {lvl}.", {
                        heroName: t("Mariko Kikaibaka"),
                        lvl: 75
                    })
                },
                skillId: 3,
                id: 1001404,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("7.9077795e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire flow"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5da3/rc/icons/ic-abil-22.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001405,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("4.822432525e+13")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire flow"),
                    num: "V"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__5da3/rc/icons/ic-abil-22.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1001406,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("2.480480385e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire flow"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__5da3/rc/icons/ic-abil-22.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001407,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.764622695e+26")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire flow"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__5da3/rc/icons/ic-abil-22.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1001408,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.25535895e+34")
                }
            } ],
            special: !1
        }, {
            id: 15,
            name: t("Naomi Kensei"),
            info: t("Mentor of the kendō school."),
            icons: [ "__2263/images/hero-all/tithero-16/x1/ava/tithero-16-1-ava.jpg", "__7e53/images/hero-all/tithero-16/x1/ava/tithero-16-2-ava.jpg", "__a41f/images/hero-all/tithero-16/x1/ava/tithero-16-3-ava.jpg", "__afc2/images/hero-all/tithero-16/x1/ava/tithero-16-4-ava.jpg", "__b08d/images/hero-all/tithero-16/x1/ava/tithero-16-5-ava.jpg" ],
            images: [ "__c151/images/hero-all/tithero-16/x1/tithero-16-1.jpg", "__bde5/images/hero-all/tithero-16/x1/tithero-16-2.jpg", "__32d4/images/hero-all/tithero-16/x1/tithero-16-3.jpg", "__7650/images/hero-all/tithero-16/x1/tithero-16-4.jpg", "__6e7d/images/hero-all/tithero-16/x1/tithero-16-5.jpg" ],
            "icons@2x": [ "__19b0/images/hero-all/tithero-16/x2/ava/tithero-16-1-ava.jpg", "__d01a/images/hero-all/tithero-16/x2/ava/tithero-16-2-ava.jpg", "__28ee/images/hero-all/tithero-16/x2/ava/tithero-16-3-ava.jpg", "__1e0c/images/hero-all/tithero-16/x2/ava/tithero-16-4-ava.jpg", "__8924/images/hero-all/tithero-16/x2/ava/tithero-16-5-ava.jpg" ],
            "images@2x": [ "__ee7c/images/hero-all/tithero-16/x2/tithero-16-1.jpg", "__f51d/images/hero-all/tithero-16/x2/tithero-16-2.jpg", "__0e18/images/hero-all/tithero-16/x2/tithero-16-3.jpg", "__e230/images/hero-all/tithero-16/x2/tithero-16-4.jpg", "__e8a8/images/hero-all/tithero-16/x2/tithero-16-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Stunning strike"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__aebd/rc/icons/ic-abil-21.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1001501,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("3.455446345e+11")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Stunning strike"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__aebd/rc/icons/ic-abil-21.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1001502,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.02242419e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Stunning strike"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__aebd/rc/icons/ic-abil-21.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001503,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("6.23508995e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Stunning strike"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__aebd/rc/icons/ic-abil-21.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001504,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("3.80236961e+13")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Stunning strike"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__aebd/rc/icons/ic-abil-21.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001505,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("2.31881412e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Stunning strike"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__aebd/rc/icons/ic-abil-21.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001506,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.19271196e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Stunning strike"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__aebd/rc/icons/ic-abil-21.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001507,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("8.4849959e+26")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Stunning strike"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__aebd/rc/icons/ic-abil-21.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001508,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("6.03625665e+34")
                }
            } ],
            special: !1
        }, {
            id: 16,
            name: t("Fumiko Hariuddo"),
            info: t("A halberdist from a distant country."),
            icons: [ "__f4c6/images/hero-all/tithero-17/x1/ava/tithero-17-1-ava.jpg", "__1096/images/hero-all/tithero-17/x1/ava/tithero-17-2-ava.jpg", "__8c31/images/hero-all/tithero-17/x1/ava/tithero-17-3-ava.jpg", "__84af/images/hero-all/tithero-17/x1/ava/tithero-17-4-ava.jpg", "__119a/images/hero-all/tithero-17/x1/ava/tithero-17-5-ava.jpg" ],
            images: [ "__929d/images/hero-all/tithero-17/x1/tithero-17-1.jpg", "__7d3e/images/hero-all/tithero-17/x1/tithero-17-2.jpg", "__aa48/images/hero-all/tithero-17/x1/tithero-17-3.jpg", "__62b6/images/hero-all/tithero-17/x1/tithero-17-4.jpg", "__b596/images/hero-all/tithero-17/x1/tithero-17-5.jpg" ],
            "icons@2x": [ "__32e1/images/hero-all/tithero-17/x2/ava/tithero-17-1-ava.jpg", "__eec2/images/hero-all/tithero-17/x2/ava/tithero-17-2-ava.jpg", "__5f37/images/hero-all/tithero-17/x2/ava/tithero-17-3-ava.jpg", "__de20/images/hero-all/tithero-17/x2/ava/tithero-17-4-ava.jpg", "__442f/images/hero-all/tithero-17/x2/ava/tithero-17-5-ava.jpg" ],
            "images@2x": [ "__a2e4/images/hero-all/tithero-17/x2/tithero-17-1.jpg", "__7d00/images/hero-all/tithero-17/x2/tithero-17-2.jpg", "__1207/images/hero-all/tithero-17/x2/tithero-17-3.jpg", "__2d10/images/hero-all/tithero-17/x2/tithero-17-4.jpg", "__7e58/images/hero-all/tithero-17/x2/tithero-17-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Concentration"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__842b/rc/icons/ic-abil-20.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001601,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.661513715e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Concentration"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__842b/rc/icons/ic-abil-20.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001602,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("4.9162153e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Concentration"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__842b/rc/icons/ic-abil-20.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001603,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("2.99807505e+13")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Concentration"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__842b/rc/icons/ic-abil-20.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001604,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.828327985e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Concentration"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__842b/rc/icons/ic-abil-20.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001605,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.114976495e+15")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Concentration"),
                    num: "VI"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__842b/rc/icons/ic-abil-20.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001606,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("5.73502545e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Concentration"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__842b/rc/icons/ic-abil-20.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001607,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("4.079917805e+27")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Concentration"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__842b/rc/icons/ic-abil-20.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001608,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("2.90246824e+35")
                }
            } ],
            special: !1
        }, {
            id: 17,
            name: t("Kamiko Furuto"),
            info: t("The ingenuous flutist."),
            icons: [ "__fe9e/images/hero-all/tithero-18/x1/ava/tithero-18-1-ava.jpg", "__3bbb/images/hero-all/tithero-18/x1/ava/tithero-18-2-ava.jpg", "__cbdd/images/hero-all/tithero-18/x1/ava/tithero-18-3-ava.jpg", "__d3db/images/hero-all/tithero-18/x1/ava/tithero-18-4-ava.jpg", "__5f6c/images/hero-all/tithero-18/x1/ava/tithero-18-5-ava.jpg" ],
            images: [ "__067a/images/hero-all/tithero-18/x1/tithero-18-1.jpg", "__6ac5/images/hero-all/tithero-18/x1/tithero-18-2.jpg", "__65d4/images/hero-all/tithero-18/x1/tithero-18-3.jpg", "__d12f/images/hero-all/tithero-18/x1/tithero-18-4.jpg", "__0422/images/hero-all/tithero-18/x1/tithero-18-5.jpg" ],
            "icons@2x": [ "__93cf/images/hero-all/tithero-18/x2/ava/tithero-18-1-ava.jpg", "__36ae/images/hero-all/tithero-18/x2/ava/tithero-18-2-ava.jpg", "__36ae/images/hero-all/tithero-18/x2/ava/tithero-18-3-ava.jpg", "__1cc6/images/hero-all/tithero-18/x2/ava/tithero-18-4-ava.jpg", "__1cc6/images/hero-all/tithero-18/x2/ava/tithero-18-5-ava.jpg" ],
            "images@2x": [ "__7e8b/images/hero-all/tithero-18/x2/tithero-18-1.jpg", "__7e48/images/hero-all/tithero-18/x2/tithero-18-2.jpg", "__bfb9/images/hero-all/tithero-18/x2/tithero-18-3.jpg", "__d511/images/hero-all/tithero-18/x2/tithero-18-4.jpg", "__5826/images/hero-all/tithero-18/x2/tithero-18-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Electric sound"),
                    num: "I"
                }),
                info: t("+{pc}% gold found", {
                    pc: "110"
                }),
                icon: "__c18f/rc/icons/ic-abil-19.jpg",
                reward: {
                    mults: [ [ "gold", {
                        value: 1.1
                    } ] ]
                },
                id: 1001701,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("7.98920755e+12")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Electric sound"),
                    num: "II"
                }),
                info: t("+{pc}% gold found", {
                    pc: "115"
                }),
                icon: "__c18f/rc/icons/ic-abil-19.jpg",
                reward: {
                    mults: [ [ "gold", {
                        value: 1.15
                    } ] ]
                },
                id: 1001702,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("2.36390854e+13")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Electric sound"),
                    num: "III"
                }),
                info: t("+{pc}% gold found", {
                    pc: "125"
                }),
                icon: "__c18f/rc/icons/ic-abil-19.jpg",
                reward: {
                    mults: [ [ "gold", {
                        value: 1.25
                    } ] ]
                },
                id: 1001703,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.441591705e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Electric sound"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__c18f/rc/icons/ic-abil-19.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001704,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("8.7913158e+14")
                }
            }, {
                name: t("Goldminer"),
                info: t("Every click give {pc}% of monster's gold, for {seconds} seconds. ({pc2}% on Bosses)"),
                icon: "__2f68/rc/skill-icon04.png",
                reward: {
                    counters: {
                        "C::SK:4": 1
                    },
                    failText: t("This skill will be available when hero {heroName} will reach level {lvl}.", {
                        heroName: t("Kamiko Furuto"),
                        lvl: 100
                    })
                },
                skillId: 4,
                id: 1001705,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("5.36124295e+15")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Electric sound"),
                    num: "V"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__c18f/rc/icons/ic-abil-19.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001706,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("2.75762448e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Electric sound"),
                    num: "VI"
                }),
                info: t("+{pc}% gold found", {
                    pc: "125"
                }),
                icon: "__c18f/rc/icons/ic-abil-19.jpg",
                reward: {
                    mults: [ [ "gold", {
                        value: 1.25
                    } ] ]
                },
                id: 1001707,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.961784e+28")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Electric sound"),
                    num: "VII"
                }),
                info: t("+{pc}% gold found", {
                    pc: "150"
                }),
                icon: "__c18f/rc/icons/ic-abil-19.jpg",
                reward: {
                    mults: [ [ "gold", {
                        value: 1.5
                    } ] ]
                },
                id: 1001708,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.395620215e+36")
                }
            } ],
            special: !1
        }, {
            id: 18,
            name: t("Mana Kakitateru"),
            info: t("Master of a rare style of the fighting fan."),
            icons: [ "__6ea6/images/hero-all/tithero-19/x1/ava/tithero-19-1-ava.jpg", "__f52d/images/hero-all/tithero-19/x1/ava/tithero-19-2-ava.jpg", "__2936/images/hero-all/tithero-19/x1/ava/tithero-19-3-ava.jpg", "__0879/images/hero-all/tithero-19/x1/ava/tithero-19-4-ava.jpg", "__29af/images/hero-all/tithero-19/x1/ava/tithero-19-5-ava.jpg" ],
            images: [ "__42d1/images/hero-all/tithero-19/x1/tithero-19-1.jpg", "__b29c/images/hero-all/tithero-19/x1/tithero-19-2.jpg", "__270b/images/hero-all/tithero-19/x1/tithero-19-3.jpg", "__b089/images/hero-all/tithero-19/x1/tithero-19-4.jpg", "__927d/images/hero-all/tithero-19/x1/tithero-19-5.jpg" ],
            "icons@2x": [ "__5a8a/images/hero-all/tithero-19/x2/ava/tithero-19-1-ava.jpg", "__9966/images/hero-all/tithero-19/x2/ava/tithero-19-2-ava.jpg", "__765c/images/hero-all/tithero-19/x2/ava/tithero-19-3-ava.jpg", "__0ace/images/hero-all/tithero-19/x2/ava/tithero-19-4-ava.jpg", "__4ad0/images/hero-all/tithero-19/x2/ava/tithero-19-5-ava.jpg" ],
            "images@2x": [ "__fa81/images/hero-all/tithero-19/x2/tithero-19-1.jpg", "__6257/images/hero-all/tithero-19/x2/tithero-19-2.jpg", "__32c7/images/hero-all/tithero-19/x2/tithero-19-3.jpg", "__ffc3/images/hero-all/tithero-19/x2/tithero-19-4.jpg", "__1446/images/hero-all/tithero-19/x2/tithero-19-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Secret fan transform"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__6ec9/rc/icons/ic-abil-18.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001801,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("3.84152339e+13")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Secret fan transform"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__6ec9/rc/icons/ic-abil-18.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001802,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.136659655e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Secret fan transform"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__6ec9/rc/icons/ic-abil-18.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001803,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("6.9317366e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Secret fan transform"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__6ec9/rc/icons/ic-abil-18.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001804,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("4.22720839e+15")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Secret fan transform"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__6ec9/rc/icons/ic-abil-18.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001805,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("2.57789524e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Secret fan transform"),
                    num: "VI"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__6ec9/rc/icons/ic-abil-18.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001806,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.325973675e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Secret fan transform"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__6ec9/rc/icons/ic-abil-18.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001807,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("9.43302455e+28")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Secret fan transform"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__6ec9/rc/icons/ic-abil-18.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1001808,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("6.71068765e+36")
                }
            } ],
            special: !1
        }, {
            id: 19,
            name: t("Mi Hyo"),
            info: t("Warrior-beast of the southern jungle."),
            icons: [ "__7950/images/hero-all/tithero-20/x1/ava/tithero-20-1-ava.jpg", "__fb61/images/hero-all/tithero-20/x1/ava/tithero-20-2-ava.jpg", "__9f20/images/hero-all/tithero-20/x1/ava/tithero-20-3-ava.jpg", "__8f97/images/hero-all/tithero-20/x1/ava/tithero-20-4-ava.jpg", "__28fb/images/hero-all/tithero-20/x1/ava/tithero-20-5-ava.jpg" ],
            images: [ "__4725/images/hero-all/tithero-20/x1/tithero-20-1.jpg", "__72f4/images/hero-all/tithero-20/x1/tithero-20-2.jpg", "__6a53/images/hero-all/tithero-20/x1/tithero-20-3.jpg", "__1d3e/images/hero-all/tithero-20/x1/tithero-20-4.jpg", "__6934/images/hero-all/tithero-20/x1/tithero-20-5.jpg" ],
            "icons@2x": [ "__3836/images/hero-all/tithero-20/x2/ava/tithero-20-1-ava.jpg", "__7a7c/images/hero-all/tithero-20/x2/ava/tithero-20-2-ava.jpg", "__3250/images/hero-all/tithero-20/x2/ava/tithero-20-3-ava.jpg", "__71f1/images/hero-all/tithero-20/x2/ava/tithero-20-4-ava.jpg", "__6aec/images/hero-all/tithero-20/x2/ava/tithero-20-5-ava.jpg" ],
            "images@2x": [ "__4e9d/images/hero-all/tithero-20/x2/tithero-20-1.jpg", "__50c6/images/hero-all/tithero-20/x2/tithero-20-2.jpg", "__961b/images/hero-all/tithero-20/x2/tithero-20-3.jpg", "__18b8/images/hero-all/tithero-20/x2/tithero-20-4.jpg", "__0500/images/hero-all/tithero-20/x2/tithero-20-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Water strike"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__ba29/rc/icons/ic-abil-17.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001901,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.84715465e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Water strike"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__ba29/rc/icons/ic-abil-17.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001902,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("5.46550405e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Water strike"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__ba29/rc/icons/ic-abil-17.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1001903,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("3.33305e+15")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Water strike"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__ba29/rc/icons/ic-abil-17.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1001904,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("2.03260708e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Water strike"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__ba29/rc/icons/ic-abil-17.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001905,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.23955283e+17")
                }
            }, {
                name: t("Guild Master Power"),
                info: t("+{pc}% click damage for {seconds} seconds."),
                icon: "__5459/rc/skill-icon05.png",
                reward: {
                    counters: {
                        "C::SK:5": 1
                    },
                    failText: t("This skill will be available when hero {heroName} will reach level {lvl}.", {
                        heroName: t("Mi Hyo"),
                        lvl: 250
                    })
                },
                skillId: 5,
                id: 1001906,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("6.3757999e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Water strike"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__ba29/rc/icons/ic-abil-17.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001907,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("4.53576705e+29")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Water strike"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__ba29/rc/icons/ic-abil-17.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1001908,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("3.22676104e+37")
                }
            } ],
            special: !1
        }, {
            id: 20,
            name: t("Rika Mahojo"),
            info: t("A magical girl with a unique pet."),
            icons: [ "__1d9c/images/hero-all/tithero-21/x1/ava/tithero-21-1-ava.jpg", "__60c0/images/hero-all/tithero-21/x1/ava/tithero-21-2-ava.jpg", "__aa33/images/hero-all/tithero-21/x1/ava/tithero-21-3-ava.jpg", "__16fa/images/hero-all/tithero-21/x1/ava/tithero-21-4-ava.jpg", "__8563/images/hero-all/tithero-21/x1/ava/tithero-21-5-ava.jpg" ],
            images: [ "__1d93/images/hero-all/tithero-21/x1/tithero-21-1.jpg", "__e18d/images/hero-all/tithero-21/x1/tithero-21-2.jpg", "__f7e5/images/hero-all/tithero-21/x1/tithero-21-3.jpg", "__c6e2/images/hero-all/tithero-21/x1/tithero-21-4.jpg", "__df7c/images/hero-all/tithero-21/x1/tithero-21-5.jpg" ],
            "icons@2x": [ "__8fbe/images/hero-all/tithero-21/x2/ava/tithero-21-1-ava.jpg", "__6506/images/hero-all/tithero-21/x2/ava/tithero-21-2-ava.jpg", "__574e/images/hero-all/tithero-21/x2/ava/tithero-21-3-ava.jpg", "__6876/images/hero-all/tithero-21/x2/ava/tithero-21-4-ava.jpg", "__5b5b/images/hero-all/tithero-21/x2/ava/tithero-21-5-ava.jpg" ],
            "images@2x": [ "__2277/images/hero-all/tithero-21/x2/tithero-21-1.jpg", "__12e9/images/hero-all/tithero-21/x2/tithero-21-2.jpg", "__20cc/images/hero-all/tithero-21/x2/tithero-21-3.jpg", "__fa57/images/hero-all/tithero-21/x2/tithero-21-4.jpg", "__e4a0/images/hero-all/tithero-21/x2/tithero-21-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Slave Arrow"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__f6e2/rc/icons/ic-abil-16.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002001,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("8.8818418e+14")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Slave Arrow"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__f6e2/rc/icons/ic-abil-16.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002002,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("2.62802806e+15")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Slave Arrow"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__f6e2/rc/icons/ic-abil-16.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002003,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.60266076e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Slave Arrow"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__f6e2/rc/icons/ic-abil-16.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002004,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("9.7735696e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Slave Arrow"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__f6e2/rc/icons/ic-abil-16.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002005,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("5.96025465e+17")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Slave Arrow"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__f6e2/rc/icons/ic-abil-16.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002006,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("3.06573389e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Slave Arrow"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__f6e2/rc/icons/ic-abil-16.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002007,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("2.180974145e+30")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Slave Arrow"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__f6e2/rc/icons/ic-abil-16.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002008,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.551552875e+38")
                }
            } ],
            special: !1
        }, {
            id: 21,
            name: t("Sango Yudoku"),
            info: t('The killer, known as the "Poisonous Flower"'),
            icons: [ "__e8e9/images/hero-all/tithero-22/x1/ava/tithero-22-1-ava.jpg", "__0805/images/hero-all/tithero-22/x1/ava/tithero-22-2-ava.jpg", "__c5a3/images/hero-all/tithero-22/x1/ava/tithero-22-3-ava.jpg", "__6fd4/images/hero-all/tithero-22/x1/ava/tithero-22-4-ava.jpg", "__c20a/images/hero-all/tithero-22/x1/ava/tithero-22-5-ava.jpg" ],
            images: [ "__b6bc/images/hero-all/tithero-22/x1/tithero-22-1.jpg", "__e69d/images/hero-all/tithero-22/x1/tithero-22-2.jpg", "__a693/images/hero-all/tithero-22/x1/tithero-22-3.jpg", "__3c1d/images/hero-all/tithero-22/x1/tithero-22-4.jpg", "__05bd/images/hero-all/tithero-22/x1/tithero-22-5.jpg" ],
            "icons@2x": [ "__5cc3/images/hero-all/tithero-22/x2/ava/tithero-22-1-ava.jpg", "__3b1f/images/hero-all/tithero-22/x2/ava/tithero-22-2-ava.jpg", "__53cc/images/hero-all/tithero-22/x2/ava/tithero-22-3-ava.jpg", "__9101/images/hero-all/tithero-22/x2/ava/tithero-22-4-ava.jpg", "__3a8d/images/hero-all/tithero-22/x2/ava/tithero-22-5-ava.jpg" ],
            "images@2x": [ "__c9c3/images/hero-all/tithero-22/x2/tithero-22-1.jpg", "__547f/images/hero-all/tithero-22/x2/tithero-22-2.jpg", "__7c85/images/hero-all/tithero-22/x2/tithero-22-3.jpg", "__9fe4/images/hero-all/tithero-22/x2/tithero-22-4.jpg", "__c8bf/images/hero-all/tithero-22/x2/tithero-22-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Deadly poison"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__5de4/rc/icons/ic-abil-15.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002101,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("4.27073683e+15")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Deadly poison"),
                    num: "II"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "10"
                }),
                icon: "__5de4/rc/icons/ic-abil-15.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .1
                    } ] ]
                },
                id: 1002102,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.263658645e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Deadly poison"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__5de4/rc/icons/ic-abil-15.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002103,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("7.70621955e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Deadly poison"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "10"
                }),
                icon: "__5de4/rc/icons/ic-abil-15.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .1
                    } ] ]
                },
                id: 1002104,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("4.69951442e+17")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Deadly poison"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__5de4/rc/icons/ic-abil-15.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002105,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("2.865923495e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Deadly poison"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "10"
                }),
                icon: "__5de4/rc/icons/ic-abil-15.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .1
                    } ] ]
                },
                id: 1002106,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.474124725e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Deadly poison"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5de4/rc/icons/ic-abil-15.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002107,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.048697645e+31")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Deadly poison"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "10"
                }),
                icon: "__5de4/rc/icons/ic-abil-15.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .1
                    } ] ]
                },
                id: 1002108,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("7.46047285e+38")
                }
            } ],
            special: !1
        }, {
            id: 22,
            name: t("Takaro Kaminoken"),
            info: t("The divine blade of the West."),
            icons: [ "__c076/images/hero-all/tithero-23/x1/ava/tithero-23-1-ava.jpg", "__69cd/images/hero-all/tithero-23/x1/ava/tithero-23-2-ava.jpg", "__6de2/images/hero-all/tithero-23/x1/ava/tithero-23-3-ava.jpg", "__850c/images/hero-all/tithero-23/x1/ava/tithero-23-4-ava.jpg", "__cd48/images/hero-all/tithero-23/x1/ava/tithero-23-5-ava.jpg" ],
            images: [ "__cdd3/images/hero-all/tithero-23/x1/tithero-23-1.jpg", "__dfda/images/hero-all/tithero-23/x1/tithero-23-2.jpg", "__44bd/images/hero-all/tithero-23/x1/tithero-23-3.jpg", "__e60f/images/hero-all/tithero-23/x1/tithero-23-4.jpg", "__9d54/images/hero-all/tithero-23/x1/tithero-23-5.jpg" ],
            "icons@2x": [ "__d349/images/hero-all/tithero-23/x2/ava/tithero-23-1-ava.jpg", "__4ba6/images/hero-all/tithero-23/x2/ava/tithero-23-2-ava.jpg", "__72bf/images/hero-all/tithero-23/x2/ava/tithero-23-3-ava.jpg", "__5264/images/hero-all/tithero-23/x2/ava/tithero-23-4-ava.jpg", "__bdd2/images/hero-all/tithero-23/x2/ava/tithero-23-5-ava.jpg" ],
            "images@2x": [ "__4438/images/hero-all/tithero-23/x2/tithero-23-1.jpg", "__3327/images/hero-all/tithero-23/x2/tithero-23-2.jpg", "__dfb7/images/hero-all/tithero-23/x2/tithero-23-3.jpg", "__1462/images/hero-all/tithero-23/x2/tithero-23-4.jpg", "__de94/images/hero-all/tithero-23/x2/tithero-23-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Divine blade"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__f3be/rc/icons/ic-abil-14.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002201,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("2.053537255e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Divine blade"),
                    num: "II"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "5"
                }),
                icon: "__f3be/rc/icons/ic-abil-14.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .05
                    } ] ]
                },
                id: 1002202,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("6.07616485e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Divine blade"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__f3be/rc/icons/ic-abil-14.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002203,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("3.7054517e+17")
                }
            }, {
                name: t("Master Attack"),
                info: t("Deals {pc}% DPS + DPC damage, when activated."),
                icon: "__12d7/rc/skill-icon06.png",
                reward: {
                    counters: {
                        "C::SK:6": 1
                    },
                    failText: t("This skill will be available when hero {heroName} will reach level {lvl}.", {
                        heroName: t("Takaro Kaminoken"),
                        lvl: 75
                    })
                },
                skillId: 6,
                id: 1002204,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("2.259710285e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Divine blade"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__f3be/rc/icons/ic-abil-14.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002205,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.378048075e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Divine blade"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__f3be/rc/icons/ic-abil-14.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002206,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("7.08816805e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Divine blade"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "5"
                }),
                icon: "__f3be/rc/icons/ic-abil-14.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .05
                    } ] ]
                },
                id: 1002207,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("5.0425483e+31")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Divine blade"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__f3be/rc/icons/ic-abil-14.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002208,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("3.587287075e+39")
                }
            } ],
            special: !1
        }, {
            id: 23,
            name: t("Ume Shinpu"),
            info: t("The Archmage Bride."),
            icons: [ "__cb17/images/hero-all/tithero-24/x1/ava/tithero-24-1-ava.jpg", "__b6a1/images/hero-all/tithero-24/x1/ava/tithero-24-2-ava.jpg", "__c112/images/hero-all/tithero-24/x1/ava/tithero-24-3-ava.jpg", "__6de3/images/hero-all/tithero-24/x1/ava/tithero-24-4-ava.jpg", "__d31e/images/hero-all/tithero-24/x1/ava/tithero-24-5-ava.jpg" ],
            images: [ "__0dda/images/hero-all/tithero-24/x1/tithero-24-1.jpg", "__c7ca/images/hero-all/tithero-24/x1/tithero-24-2.jpg", "__eac1/images/hero-all/tithero-24/x1/tithero-24-3.jpg", "__40ff/images/hero-all/tithero-24/x1/tithero-24-4.jpg", "__3d76/images/hero-all/tithero-24/x1/tithero-24-5.jpg" ],
            "icons@2x": [ "__9497/images/hero-all/tithero-24/x2/ava/tithero-24-1-ava.jpg", "__dc99/images/hero-all/tithero-24/x2/ava/tithero-24-2-ava.jpg", "__91a7/images/hero-all/tithero-24/x2/ava/tithero-24-3-ava.jpg", "__ebb3/images/hero-all/tithero-24/x2/ava/tithero-24-4-ava.jpg", "__b698/images/hero-all/tithero-24/x2/ava/tithero-24-5-ava.jpg" ],
            "images@2x": [ "__e250/images/hero-all/tithero-24/x2/tithero-24-1.jpg", "__2135/images/hero-all/tithero-24/x2/tithero-24-2.jpg", "__ff08/images/hero-all/tithero-24/x2/tithero-24-3.jpg", "__6b91/images/hero-all/tithero-24/x2/tithero-24-4.jpg", "__f86b/images/hero-all/tithero-24/x2/tithero-24-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Aura wings"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__1459/rc/icons/ic-abil-13.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002301,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("9.87421005e+16")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Aura wings"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__1459/rc/icons/ic-abil-13.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002302,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("2.921657655e+17")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Aura wings"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__1459/rc/icons/ic-abil-13.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002303,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.78172606e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Aura wings"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__1459/rc/icons/ic-abil-13.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002304,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.08655706e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Aura wings"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__1459/rc/icons/ic-abil-13.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002305,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("6.62619395e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Aura wings"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__1459/rc/icons/ic-abil-13.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002306,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("3.40826836e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Aura wings"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__1459/rc/icons/ic-abil-13.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002307,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("2.424654405e+32")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Aura wings"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__1459/rc/icons/ic-abil-13.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002308,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.72490789e+40")
                }
            } ],
            special: !1
        }, {
            id: 24,
            name: t("Amaya Karasu"),
            info: t("Shaman from a clan of ravens."),
            icons: [ "__3c4d/images/hero-all/tithero-25/x1/ava/tithero-25-1-ava.jpg", "__70b7/images/hero-all/tithero-25/x1/ava/tithero-25-2-ava.jpg", "__7894/images/hero-all/tithero-25/x1/ava/tithero-25-3-ava.jpg", "__2f04/images/hero-all/tithero-25/x1/ava/tithero-25-4-ava.jpg", "__9d85/images/hero-all/tithero-25/x1/ava/tithero-25-5-ava.jpg" ],
            images: [ "__8a4f/images/hero-all/tithero-25/x1/tithero-25-1.jpg", "__de19/images/hero-all/tithero-25/x1/tithero-25-2.jpg", "__b271/images/hero-all/tithero-25/x1/tithero-25-3.jpg", "__0586/images/hero-all/tithero-25/x1/tithero-25-4.jpg", "__2ac2/images/hero-all/tithero-25/x1/tithero-25-5.jpg" ],
            "icons@2x": [ "__ad17/images/hero-all/tithero-25/x2/ava/tithero-25-1-ava.jpg", "__0885/images/hero-all/tithero-25/x2/ava/tithero-25-2-ava.jpg", "__b07c/images/hero-all/tithero-25/x2/ava/tithero-25-3-ava.jpg", "__4b28/images/hero-all/tithero-25/x2/ava/tithero-25-4-ava.jpg", "__e998/images/hero-all/tithero-25/x2/ava/tithero-25-5-ava.jpg" ],
            "images@2x": [ "__ecfc/images/hero-all/tithero-25/x2/tithero-25-1.jpg", "__0820/images/hero-all/tithero-25/x2/tithero-25-2.jpg", "__491a/images/hero-all/tithero-25/x2/tithero-25-3.jpg", "__9692/images/hero-all/tithero-25/x2/tithero-25-4.jpg", "__7aa6/images/hero-all/tithero-25/x2/tithero-25-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Spiritshaping"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__40b6/rc/icons/ic-abil-12.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002401,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("4.74790628e+17")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Spiritshaping"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__40b6/rc/icons/ic-abil-12.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002402,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.404847235e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Spiritshaping"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__40b6/rc/icons/ic-abil-12.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002403,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("8.56723555e+18")
                }
            }, {
                name: t("Blessing"),
                info: t("Makes the effect of the next skill used {times} times more powerful"),
                icon: "__0e8f/rc/skill-icon07.png",
                reward: {
                    counters: {
                        "C::SK:7": 1
                    },
                    failText: t("This skill will be available when hero {heroName} will reach level {lvl}.", {
                        heroName: t("Amaya Karasu"),
                        lvl: 75
                    })
                },
                skillId: 7,
                id: 1002404,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("5.22459115e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Spiritshaping"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__40b6/rc/icons/ic-abil-12.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002405,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("3.18613314e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Spiritshaping"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__40b6/rc/icons/ic-abil-12.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002406,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.638828685e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Spiritshaping"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__40b6/rc/icons/ic-abil-12.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002407,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.16586864e+33")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Spiritshaping"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__40b6/rc/icons/ic-abil-12.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1002408,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("8.29403155e+40")
                }
            } ],
            special: !1
        }, {
            id: 25,
            name: t("Chiasa Saike"),
            info: t('Girl from the guild of "Reapers".'),
            icons: [ "__f6df/images/hero-all/tithero-26/x1/ava/tithero-26-1-ava.jpg", "__da18/images/hero-all/tithero-26/x1/ava/tithero-26-2-ava.jpg", "__0d4e/images/hero-all/tithero-26/x1/ava/tithero-26-3-ava.jpg", "__67fe/images/hero-all/tithero-26/x1/ava/tithero-26-4-ava.jpg", "__ee05/images/hero-all/tithero-26/x1/ava/tithero-26-5-ava.jpg" ],
            images: [ "__cce7/images/hero-all/tithero-26/x1/tithero-26-1.jpg", "__a58a/images/hero-all/tithero-26/x1/tithero-26-2.jpg", "__cbe9/images/hero-all/tithero-26/x1/tithero-26-3.jpg", "__78e3/images/hero-all/tithero-26/x1/tithero-26-4.jpg", "__3767/images/hero-all/tithero-26/x1/tithero-26-5.jpg" ],
            "icons@2x": [ "__2df7/images/hero-all/tithero-26/x2/ava/tithero-26-1-ava.jpg", "__4011/images/hero-all/tithero-26/x2/ava/tithero-26-2-ava.jpg", "__0187/images/hero-all/tithero-26/x2/ava/tithero-26-3-ava.jpg", "__af9e/images/hero-all/tithero-26/x2/ava/tithero-26-4-ava.jpg", "__4024/images/hero-all/tithero-26/x2/ava/tithero-26-5-ava.jpg" ],
            "images@2x": [ "__3fb5/images/hero-all/tithero-26/x2/tithero-26-1.jpg", "__924b/images/hero-all/tithero-26/x2/tithero-26-2.jpg", "__78fc/images/hero-all/tithero-26/x2/tithero-26-3.jpg", "__c8ed/images/hero-all/tithero-26/x2/tithero-26-4.jpg", "__4d95/images/hero-all/tithero-26/x2/tithero-26-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Frying pan mastery"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__d378/rc/icons/ic-abil-11.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002501,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("2.282978985e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Frying pan mastery"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__d378/rc/icons/ic-abil-11.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002502,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("6.7550548e+18")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Frying pan mastery"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__d378/rc/icons/ic-abil-11.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002503,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("4.11946184e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Frying pan mastery"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__d378/rc/icons/ic-abil-11.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002504,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("2.51218773e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Frying pan mastery"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__d378/rc/icons/ic-abil-11.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002505,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.532017395e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Frying pan mastery"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "5"
                }),
                icon: "__d378/rc/icons/ic-abil-11.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .05
                    } ] ]
                },
                id: 1002506,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("7.8801291e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Frying pan mastery"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "100"
                }),
                icon: "__d378/rc/icons/ic-abil-11.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: 1
                    } ] ]
                },
                id: 1002507,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("5.60595225e+33")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Frying pan mastery"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "5"
                }),
                icon: "__d378/rc/icons/ic-abil-11.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .05
                    } ] ]
                },
                id: 1002508,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("3.988094685e+41")
                }
            } ],
            special: !1
        }, {
            id: 26,
            name: t("Eri Bado"),
            info: t("Bard-traveler."),
            icons: [ "__e06d/images/hero-all/tithero-27/x1/ava/tithero-27-1-ava.jpg", "__4317/images/hero-all/tithero-27/x1/ava/tithero-27-2-ava.jpg", "__3ab3/images/hero-all/tithero-27/x1/ava/tithero-27-3-ava.jpg", "__ed8d/images/hero-all/tithero-27/x1/ava/tithero-27-4-ava.jpg", "__d4ad/images/hero-all/tithero-27/x1/ava/tithero-27-5-ava.jpg" ],
            images: [ "__78d3/images/hero-all/tithero-27/x1/tithero-27-1.jpg", "__0225/images/hero-all/tithero-27/x1/tithero-27-2.jpg", "__132f/images/hero-all/tithero-27/x1/tithero-27-3.jpg", "__31a2/images/hero-all/tithero-27/x1/tithero-27-4.jpg", "__9264/images/hero-all/tithero-27/x1/tithero-27-5.jpg" ],
            "icons@2x": [ "__0220/images/hero-all/tithero-27/x2/ava/tithero-27-1-ava.jpg", "__4b18/images/hero-all/tithero-27/x2/ava/tithero-27-2-ava.jpg", "__6211/images/hero-all/tithero-27/x2/ava/tithero-27-3-ava.jpg", "__d160/images/hero-all/tithero-27/x2/ava/tithero-27-4-ava.jpg", "__3c34/images/hero-all/tithero-27/x2/ava/tithero-27-5-ava.jpg" ],
            "images@2x": [ "__e1fd/images/hero-all/tithero-27/x2/tithero-27-1.jpg", "__dc7b/images/hero-all/tithero-27/x2/tithero-27-2.jpg", "__ca78/images/hero-all/tithero-27/x2/tithero-27-3.jpg", "__9870/images/hero-all/tithero-27/x2/tithero-27-4.jpg", "__aaa2/images/hero-all/tithero-27/x2/tithero-27-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Distortion strike"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__c267/rc/icons/ic-abil-10.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002601,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.09774556e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Distortion strike"),
                    num: "II"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__c267/rc/icons/ic-abil-10.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1002602,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("3.248094485e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Distortion strike"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__c267/rc/icons/ic-abil-10.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002603,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.980798325e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Distortion strike"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__c267/rc/icons/ic-abil-10.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1002604,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.20795809e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Distortion strike"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__c267/rc/icons/ic-abil-10.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002605,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("7.36653865e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Distortion strike"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__c267/rc/icons/ic-abil-10.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1002606,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("3.789074205e+26")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Distortion strike"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__c267/rc/icons/ic-abil-10.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002607,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("2.695561055e+34")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Distortion strike"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__c267/rc/icons/ic-abil-10.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1002608,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.91763186e+42")
                }
            } ],
            special: !1
        }, {
            id: 27,
            name: t("Gina Kaizoku"),
            info: t("Lucky pirate captain."),
            icons: [ "__f77e/images/hero-all/tithero-28/x1/ava/tithero-28-1-ava.jpg", "__cb30/images/hero-all/tithero-28/x1/ava/tithero-28-2-ava.jpg", "__cfb7/images/hero-all/tithero-28/x1/ava/tithero-28-3-ava.jpg", "__282d/images/hero-all/tithero-28/x1/ava/tithero-28-4-ava.jpg", "__2344/images/hero-all/tithero-28/x1/ava/tithero-28-5-ava.jpg" ],
            images: [ "__790c/images/hero-all/tithero-28/x1/tithero-28-1.jpg", "__19ee/images/hero-all/tithero-28/x1/tithero-28-2.jpg", "__f0a6/images/hero-all/tithero-28/x1/tithero-28-3.jpg", "__06a7/images/hero-all/tithero-28/x1/tithero-28-4.jpg", "__9c05/images/hero-all/tithero-28/x1/tithero-28-5.jpg" ],
            "icons@2x": [ "__bb9a/images/hero-all/tithero-28/x2/ava/tithero-28-1-ava.jpg", "__9913/images/hero-all/tithero-28/x2/ava/tithero-28-2-ava.jpg", "__1e11/images/hero-all/tithero-28/x2/ava/tithero-28-3-ava.jpg", "__e088/images/hero-all/tithero-28/x2/ava/tithero-28-4-ava.jpg", "__8afe/images/hero-all/tithero-28/x2/ava/tithero-28-5-ava.jpg" ],
            "images@2x": [ "__c80c/images/hero-all/tithero-28/x2/tithero-28-1.jpg", "__ba01/images/hero-all/tithero-28/x2/tithero-28-2.jpg", "__19b6/images/hero-all/tithero-28/x2/tithero-28-3.jpg", "__615c/images/hero-all/tithero-28/x2/tithero-28-4.jpg", "__6bbf/images/hero-all/tithero-28/x2/tithero-28-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Sword slash"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__ff5e/rc/icons/ic-abil-09.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002701,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("5.27838985e+19")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sword slash"),
                    num: "II"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__ff5e/rc/icons/ic-abil-09.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1002702,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.561810825e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sword slash"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__ff5e/rc/icons/ic-abil-09.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002703,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("9.5244528e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sword slash"),
                    num: "IV"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__ff5e/rc/icons/ic-abil-09.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1002704,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("5.8083348e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sword slash"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__ff5e/rc/icons/ic-abil-09.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002705,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("3.542119815e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sword slash"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS of all heroes", {
                    pc: "12.5"
                }),
                icon: "__ff5e/rc/icons/ic-abil-09.jpg",
                reward: {
                    mults: [ [ "DPS", {
                        value: .125
                    } ] ]
                },
                id: 1002706,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.821935025e+27")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sword slash"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__ff5e/rc/icons/ic-abil-09.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002707,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.29613115e+35")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Sword slash"),
                    num: "VIII"
                }),
                info: t("Increases your DPC by {pc}% of your total DPS.", {
                    pc: "0.25"
                }),
                icon: "__ff5e/rc/icons/ic-abil-09.jpg",
                reward: {
                    mults: [ [ "DPC_DPS", {
                        value: .0025
                    } ] ]
                },
                id: 1002708,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("9.22072375e+42")
                }
            } ],
            special: !1
        }, {
            id: 28,
            name: t("Bunko Shinpuru"),
            info: t("Absolutely unremarkable girl."),
            icons: [ "__b677/images/hero-all/tithero-29/x1/ava/tithero-29-1-ava.jpg", "__c291/images/hero-all/tithero-29/x1/ava/tithero-29-2-ava.jpg", "__44f3/images/hero-all/tithero-29/x1/ava/tithero-29-3-ava.jpg", "__419a/images/hero-all/tithero-29/x1/ava/tithero-29-4-ava.jpg", "__72a8/images/hero-all/tithero-29/x1/ava/tithero-29-5-ava.jpg" ],
            images: [ "__538d/images/hero-all/tithero-29/x1/tithero-29-1.jpg", "__e46b/images/hero-all/tithero-29/x1/tithero-29-2.jpg", "__cfa5/images/hero-all/tithero-29/x1/tithero-29-3.jpg", "__12c7/images/hero-all/tithero-29/x1/tithero-29-4.jpg", "__85d6/images/hero-all/tithero-29/x1/tithero-29-5.jpg" ],
            "icons@2x": [ "__db98/images/hero-all/tithero-29/x2/ava/tithero-29-1-ava.jpg", "__87f6/images/hero-all/tithero-29/x2/ava/tithero-29-2-ava.jpg", "__2f9c/images/hero-all/tithero-29/x2/ava/tithero-29-3-ava.jpg", "__162c/images/hero-all/tithero-29/x2/ava/tithero-29-4-ava.jpg", "__4b0c/images/hero-all/tithero-29/x2/ava/tithero-29-5-ava.jpg" ],
            "images@2x": [ "__55f3/images/hero-all/tithero-29/x2/tithero-29-1.jpg", "__a56d/images/hero-all/tithero-29/x2/tithero-29-2.jpg", "__4e2d/images/hero-all/tithero-29/x2/tithero-29-3.jpg", "__fd82/images/hero-all/tithero-29/x2/tithero-29-4.jpg", "__a379/images/hero-all/tithero-29/x2/tithero-29-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Fire mastery"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__323f/rc/icons/ic-abil-08.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002801,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("2.53805624e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire mastery"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__323f/rc/icons/ic-abil-08.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002802,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("7.5097971e+20")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire mastery"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__323f/rc/icons/ic-abil-08.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002803,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("4.579729335e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire mastery"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__323f/rc/icons/ic-abil-08.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002804,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("2.79287448e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire mastery"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__323f/rc/icons/ic-abil-08.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002805,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.70318971e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire mastery"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__323f/rc/icons/ic-abil-08.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002806,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("8.760576e+27")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire mastery"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__323f/rc/icons/ic-abil-08.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002807,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("6.23230535e+35")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Fire mastery"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__323f/rc/icons/ic-abil-08.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002808,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("4.433684525e+43")
                }
            } ],
            special: !1
        }, {
            id: 29,
            name: t("Haru Kajiya"),
            info: t("The girl is a blacksmith."),
            icons: [ "__940a/images/hero-all/tithero-30/x1/ava/tithero-30-1-ava.jpg", "__f201/images/hero-all/tithero-30/x1/ava/tithero-30-2-ava.jpg", "__c223/images/hero-all/tithero-30/x1/ava/tithero-30-3-ava.jpg", "__c151/images/hero-all/tithero-30/x1/ava/tithero-30-4-ava.jpg", "__e88e/images/hero-all/tithero-30/x1/ava/tithero-30-5-ava.jpg" ],
            images: [ "__c998/images/hero-all/tithero-30/x1/tithero-30-1.jpg", "__2575/images/hero-all/tithero-30/x1/tithero-30-2.jpg", "__d63b/images/hero-all/tithero-30/x1/tithero-30-3.jpg", "__8706/images/hero-all/tithero-30/x1/tithero-30-4.jpg", "__cc74/images/hero-all/tithero-30/x1/tithero-30-5.jpg" ],
            "icons@2x": [ "__09a5/images/hero-all/tithero-30/x2/ava/tithero-30-1-ava.jpg", "__8701/images/hero-all/tithero-30/x2/ava/tithero-30-2-ava.jpg", "__a6ef/images/hero-all/tithero-30/x2/ava/tithero-30-3-ava.jpg", "__d0cc/images/hero-all/tithero-30/x2/ava/tithero-30-4-ava.jpg", "__1b75/images/hero-all/tithero-30/x2/ava/tithero-30-5-ava.jpg" ],
            "images@2x": [ "__8ea7/images/hero-all/tithero-30/x2/tithero-30-1.jpg", "__c842/images/hero-all/tithero-30/x2/tithero-30-2.jpg", "__8444/images/hero-all/tithero-30/x2/tithero-30-3.jpg", "__d7e0/images/hero-all/tithero-30/x2/tithero-30-4.jpg", "__1835/images/hero-all/tithero-30/x2/tithero-30-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Epic gloves"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__cf34/rc/icons/ic-abil-07.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002901,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.22039668e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Epic gloves"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__cf34/rc/icons/ic-abil-07.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1002902,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("3.611004105e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Epic gloves"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__cf34/rc/icons/ic-abil-07.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002903,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("2.202112935e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Epic gloves"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__cf34/rc/icons/ic-abil-07.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1002904,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.342923255e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Epic gloves"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__cf34/rc/icons/ic-abil-07.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002905,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("8.18960205e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Epic gloves"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__cf34/rc/icons/ic-abil-07.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002906,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("4.212427495e+28")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Epic gloves"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__cf34/rc/icons/ic-abil-07.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002907,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("2.99673611e+36")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Epic gloves"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__cf34/rc/icons/ic-abil-07.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1002908,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("2.13188888e+44")
                }
            } ],
            special: !1
        }, {
            id: 30,
            name: t("Azumi Uchubito"),
            info: t("Soldier of the star Empire."),
            icons: [ "__7378/images/hero-all/tithero-31/x1/ava/tithero-31-1-ava.jpg", "__55bc/images/hero-all/tithero-31/x1/ava/tithero-31-2-ava.jpg", "__7ae5/images/hero-all/tithero-31/x1/ava/tithero-31-3-ava.jpg", "__156d/images/hero-all/tithero-31/x1/ava/tithero-31-4-ava.jpg", "__5255/images/hero-all/tithero-31/x1/ava/tithero-31-5-ava.jpg" ],
            images: [ "__0f70/images/hero-all/tithero-31/x1/tithero-31-1.jpg", "__6910/images/hero-all/tithero-31/x1/tithero-31-2.jpg", "__96b5/images/hero-all/tithero-31/x1/tithero-31-3.jpg", "__d7f7/images/hero-all/tithero-31/x1/tithero-31-4.jpg", "__6fb0/images/hero-all/tithero-31/x1/tithero-31-5.jpg" ],
            "icons@2x": [ "__0a08/images/hero-all/tithero-31/x2/ava/tithero-31-1-ava.jpg", "__d64f/images/hero-all/tithero-31/x2/ava/tithero-31-2-ava.jpg", "__2482/images/hero-all/tithero-31/x2/ava/tithero-31-3-ava.jpg", "__ee00/images/hero-all/tithero-31/x2/ava/tithero-31-4-ava.jpg", "__af5f/images/hero-all/tithero-31/x2/ava/tithero-31-5-ava.jpg" ],
            "images@2x": [ "__54ae/images/hero-all/tithero-31/x2/tithero-31-1.jpg", "__f4c1/images/hero-all/tithero-31/x2/tithero-31-2.jpg", "__1013/images/hero-all/tithero-31/x2/tithero-31-3.jpg", "__b269/images/hero-all/tithero-31/x2/tithero-31-4.jpg", "__a7aa/images/hero-all/tithero-31/x2/tithero-31-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Flame craft "),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__3f9f/rc/icons/ic-abil-06.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003001,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("5.8681444e+21")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Flame craft "),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__3f9f/rc/icons/ic-abil-06.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003002,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.736311965e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Flame craft "),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__3f9f/rc/icons/ic-abil-06.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003003,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.058862e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Flame craft "),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__3f9f/rc/icons/ic-abil-06.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003004,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("6.4573001e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Flame craft "),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__3f9f/rc/icons/ic-abil-06.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003005,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("3.9378809e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Flame craft "),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__3f9f/rc/icons/ic-abil-06.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003006,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("2.025499845e+29")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Flame craft "),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__3f9f/rc/icons/ic-abil-06.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003007,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.440947895e+37")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Flame craft "),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__3f9f/rc/icons/ic-abil-06.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003008,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.02509553e+45")
                }
            } ],
            special: !1
        }, {
            id: 31,
            name: t("Momo Sakuru"),
            info: t("Defender of the fox clan."),
            icons: [ "__93c7/images/hero-all/tithero-32/x1/ava/tithero-32-1-ava.jpg", "__1c0f/images/hero-all/tithero-32/x1/ava/tithero-32-2-ava.jpg", "__a683/images/hero-all/tithero-32/x1/ava/tithero-32-3-ava.jpg", "__ebac/images/hero-all/tithero-32/x1/ava/tithero-32-4-ava.jpg", "__2ca7/images/hero-all/tithero-32/x1/ava/tithero-32-5-ava.jpg" ],
            images: [ "__6ef9/images/hero-all/tithero-32/x1/tithero-32-1.jpg", "__6e55/images/hero-all/tithero-32/x1/tithero-32-2.jpg", "__3e89/images/hero-all/tithero-32/x1/tithero-32-3.jpg", "__ef26/images/hero-all/tithero-32/x1/tithero-32-4.jpg", "__6289/images/hero-all/tithero-32/x1/tithero-32-5.jpg" ],
            "icons@2x": [ "__d350/images/hero-all/tithero-32/x2/ava/tithero-32-1-ava.jpg", "__a7d9/images/hero-all/tithero-32/x2/ava/tithero-32-2-ava.jpg", "__2cbf/images/hero-all/tithero-32/x2/ava/tithero-32-3-ava.jpg", "__3a8d/images/hero-all/tithero-32/x2/ava/tithero-32-4-ava.jpg", "__3a8d/images/hero-all/tithero-32/x2/ava/tithero-32-5-ava.jpg" ],
            "images@2x": [ "__a831/images/hero-all/tithero-32/x2/tithero-32-1.jpg", "__818e/images/hero-all/tithero-32/x2/tithero-32-2.jpg", "__f8e1/images/hero-all/tithero-32/x2/tithero-32-3.jpg", "__25fc/images/hero-all/tithero-32/x2/tithero-32-4.jpg", "__7e1d/images/hero-all/tithero-32/x2/tithero-32-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Mallet"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__24cd/rc/icons/ic-abil-05.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003101,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("2.821633295e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mallet"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__24cd/rc/icons/ic-abil-05.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003102,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("8.34886685e+22")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mallet"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__24cd/rc/icons/ic-abil-05.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003103,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("5.0914225e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mallet"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__24cd/rc/icons/ic-abil-05.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003104,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("3.10492238e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mallet"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__24cd/rc/icons/ic-abil-05.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003105,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.89348711e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mallet"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__24cd/rc/icons/ic-abil-05.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003106,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("9.73939525e+29")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mallet"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__24cd/rc/icons/ic-abil-05.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003107,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("6.9286409e+37")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Mallet"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__24cd/rc/icons/ic-abil-05.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003108,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("4.929060145e+45")
                }
            } ],
            special: !1
        }, {
            id: 32,
            name: t("Maki Tsuinteru"),
            info: t("Beginner adventurer."),
            icons: [ "__9749/images/hero-all/tithero-33/x1/ava/tithero-33-1-ava.jpg", "__f09f/images/hero-all/tithero-33/x1/ava/tithero-33-2-ava.jpg", "__c0f9/images/hero-all/tithero-33/x1/ava/tithero-33-3-ava.jpg", "__e9e6/images/hero-all/tithero-33/x1/ava/tithero-33-4-ava.jpg", "__2cac/images/hero-all/tithero-33/x1/ava/tithero-33-5-ava.jpg" ],
            images: [ "__2b18/images/hero-all/tithero-33/x1/tithero-33-1.jpg", "__e2b7/images/hero-all/tithero-33/x1/tithero-33-2.jpg", "__1ce1/images/hero-all/tithero-33/x1/tithero-33-3.jpg", "__0641/images/hero-all/tithero-33/x1/tithero-33-4.jpg", "__af16/images/hero-all/tithero-33/x1/tithero-33-5.jpg" ],
            "icons@2x": [ "__fc0e/images/hero-all/tithero-33/x2/ava/tithero-33-1-ava.jpg", "__73cb/images/hero-all/tithero-33/x2/ava/tithero-33-2-ava.jpg", "__b079/images/hero-all/tithero-33/x2/ava/tithero-33-3-ava.jpg", "__c921/images/hero-all/tithero-33/x2/ava/tithero-33-4-ava.jpg", "__fe68/images/hero-all/tithero-33/x2/ava/tithero-33-5-ava.jpg" ],
            "images@2x": [ "__0850/images/hero-all/tithero-33/x2/tithero-33-1.jpg", "__e41d/images/hero-all/tithero-33/x2/tithero-33-2.jpg", "__b0b7/images/hero-all/tithero-33/x2/tithero-33-3.jpg", "__e8c3/images/hero-all/tithero-33/x2/tithero-33-4.jpg", "__a4b5/images/hero-all/tithero-33/x2/tithero-33-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Ice cannon"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__5bf1/rc/icons/ic-abil-04.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003201,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.356751615e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ice cannon"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__5bf1/rc/icons/ic-abil-04.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003202,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("4.01446163e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ice cannon"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__5bf1/rc/icons/ic-abil-04.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003203,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("2.448155035e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ice cannon"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__5bf1/rc/icons/ic-abil-04.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003204,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.492968085e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ice cannon"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5bf1/rc/icons/ic-abil-04.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003205,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("9.1046264e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ice cannon"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5bf1/rc/icons/ic-abil-04.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003206,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("4.68308206e+30")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ice cannon"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5bf1/rc/icons/ic-abil-04.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003207,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("3.33156147e+38")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Ice cannon"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__5bf1/rc/icons/ic-abil-04.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003208,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("2.370084845e+46")
                }
            } ],
            special: !1
        }, {
            id: 33,
            name: t("Ren Buzoku"),
            info: t("Talking With The Wind."),
            icons: [ "__033d/images/hero-all/tithero-34/x1/ava/tithero-34-1-ava.jpg", "__95ee/images/hero-all/tithero-34/x1/ava/tithero-34-2-ava.jpg", "__feb6/images/hero-all/tithero-34/x1/ava/tithero-34-3-ava.jpg", "__2877/images/hero-all/tithero-34/x1/ava/tithero-34-4-ava.jpg", "__3b4e/images/hero-all/tithero-34/x1/ava/tithero-34-5-ava.jpg" ],
            images: [ "__c5d2/images/hero-all/tithero-34/x1/tithero-34-1.jpg", "__c2cc/images/hero-all/tithero-34/x1/tithero-34-2.jpg", "__3bcc/images/hero-all/tithero-34/x1/tithero-34-3.jpg", "__8242/images/hero-all/tithero-34/x1/tithero-34-4.jpg", "__29a9/images/hero-all/tithero-34/x1/tithero-34-5.jpg" ],
            "icons@2x": [ "__d652/images/hero-all/tithero-34/x2/ava/tithero-34-1-ava.jpg", "__a2c8/images/hero-all/tithero-34/x2/ava/tithero-34-2-ava.jpg", "__a2c8/images/hero-all/tithero-34/x2/ava/tithero-34-3-ava.jpg", "__e6d3/images/hero-all/tithero-34/x2/ava/tithero-34-4-ava.jpg", "__e6d3/images/hero-all/tithero-34/x2/ava/tithero-34-5-ava.jpg" ],
            "images@2x": [ "__d88b/images/hero-all/tithero-34/x2/tithero-34-1.jpg", "__f156/images/hero-all/tithero-34/x2/tithero-34-2.jpg", "__7580/images/hero-all/tithero-34/x2/tithero-34-3.jpg", "__9593/images/hero-all/tithero-34/x2/tithero-34-4.jpg", "__f6e6/images/hero-all/tithero-34/x2/tithero-34-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Shaman sword"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__daf6/rc/icons/ic-abil-03.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003301,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("6.52379225e+23")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Shaman sword"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__daf6/rc/icons/ic-abil-03.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003302,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("1.930310115e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Shaman sword"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__daf6/rc/icons/ic-abil-03.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003303,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("1.177168665e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Shaman sword"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__daf6/rc/icons/ic-abil-03.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003304,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("7.1787743e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Shaman sword"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__daf6/rc/icons/ic-abil-03.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003305,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("4.37786037e+26")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Shaman sword"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__daf6/rc/icons/ic-abil-03.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003306,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("2.25180896e+31")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Shaman sword"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__daf6/rc/icons/ic-abil-03.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003307,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("1.601945015e+39")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Shaman sword"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__daf6/rc/icons/ic-abil-03.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003308,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("1.139629465e+47")
                }
            } ],
            special: !1
        }, {
            id: 34,
            name: t("Shika Kakikomi"),
            info: t("Mage of the rune scrolls."),
            icons: [ "__b1cb/images/hero-all/tithero-35/x1/ava/tithero-35-1-ava.jpg", "__7a3b/images/hero-all/tithero-35/x1/ava/tithero-35-2-ava.jpg", "__5534/images/hero-all/tithero-35/x1/ava/tithero-35-3-ava.jpg", "__c655/images/hero-all/tithero-35/x1/ava/tithero-35-4-ava.jpg", "__a862/images/hero-all/tithero-35/x1/ava/tithero-35-5-ava.jpg" ],
            images: [ "__2489/images/hero-all/tithero-35/x1/tithero-35-1.jpg", "__8d0d/images/hero-all/tithero-35/x1/tithero-35-2.jpg", "__186a/images/hero-all/tithero-35/x1/tithero-35-3.jpg", "__dcea/images/hero-all/tithero-35/x1/tithero-35-4.jpg", "__99a1/images/hero-all/tithero-35/x1/tithero-35-5.jpg" ],
            "icons@2x": [ "__51c3/images/hero-all/tithero-35/x2/ava/tithero-35-1-ava.jpg", "__b9f6/images/hero-all/tithero-35/x2/ava/tithero-35-2-ava.jpg", "__d1e4/images/hero-all/tithero-35/x2/ava/tithero-35-3-ava.jpg", "__4912/images/hero-all/tithero-35/x2/ava/tithero-35-4-ava.jpg", "__cebe/images/hero-all/tithero-35/x2/ava/tithero-35-5-ava.jpg" ],
            "images@2x": [ "__7bc3/images/hero-all/tithero-35/x2/tithero-35-1.jpg", "__ed43/images/hero-all/tithero-35/x2/tithero-35-2.jpg", "__215b/images/hero-all/tithero-35/x2/tithero-35-3.jpg", "__3ff8/images/hero-all/tithero-35/x2/tithero-35-4.jpg", "__e81c/images/hero-all/tithero-35/x2/tithero-35-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Runic song"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__b5c1/rc/icons/ic-abil-02.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003401,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("3.136894405e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Runic song"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__b5c1/rc/icons/ic-abil-02.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003402,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("9.2816858e+24")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Runic song"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__b5c1/rc/icons/ic-abil-02.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003403,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("5.6602872e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Runic song"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__b5c1/rc/icons/ic-abil-02.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003404,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("3.45183538e+26")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Runic song"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__b5c1/rc/icons/ic-abil-02.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003405,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("2.105046445e+27")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Runic song"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__b5c1/rc/icons/ic-abil-02.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003406,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("1.082757795e+32")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Runic song"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__b5c1/rc/icons/ic-abil-02.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003407,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("7.702778e+39")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Runic song"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__b5c1/rc/icons/ic-abil-02.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003408,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("5.47978405e+47")
                }
            } ],
            special: !1
        }, {
            id: 35,
            name: t("Yukiko Hikogatana"),
            info: t("High-level telekinetic."),
            icons: [ "__6b81/images/hero-all/tithero-36/x1/ava/tithero-36-1-ava.jpg", "__a33c/images/hero-all/tithero-36/x1/ava/tithero-36-2-ava.jpg", "__f964/images/hero-all/tithero-36/x1/ava/tithero-36-3-ava.jpg", "__e518/images/hero-all/tithero-36/x1/ava/tithero-36-4-ava.jpg", "__d63c/images/hero-all/tithero-36/x1/ava/tithero-36-5-ava.jpg" ],
            images: [ "__bc3c/images/hero-all/tithero-36/x1/tithero-36-1.jpg", "__61b7/images/hero-all/tithero-36/x1/tithero-36-2.jpg", "__920b/images/hero-all/tithero-36/x1/tithero-36-3.jpg", "__f999/images/hero-all/tithero-36/x1/tithero-36-4.jpg", "__28f9/images/hero-all/tithero-36/x1/tithero-36-5.jpg" ],
            "icons@2x": [ "__2f65/images/hero-all/tithero-36/x2/ava/tithero-36-1-ava.jpg", "__c119/images/hero-all/tithero-36/x2/ava/tithero-36-2-ava.jpg", "__3637/images/hero-all/tithero-36/x2/ava/tithero-36-3-ava.jpg", "__03e1/images/hero-all/tithero-36/x2/ava/tithero-36-4-ava.jpg", "__b305/images/hero-all/tithero-36/x2/ava/tithero-36-5-ava.jpg" ],
            "images@2x": [ "__8c1a/images/hero-all/tithero-36/x2/tithero-36-1.jpg", "__e2fd/images/hero-all/tithero-36/x2/tithero-36-2.jpg", "__f857/images/hero-all/tithero-36/x2/tithero-36-3.jpg", "__81d0/images/hero-all/tithero-36/x2/tithero-36-4.jpg", "__f511/images/hero-all/tithero-36/x2/tithero-36-5.jpg" ],
            cls: t("Mage"),
            abilities: [ {
                name: t("{name} {num}", {
                    name: t("Telekinesis"),
                    num: "I"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__a0db/rc/icons/ic-abil-01.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003501,
                lock: {
                    attrs: {
                        level: {
                            gte: 10
                        }
                    }
                },
                price: {
                    gold: r("1.508341485e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Telekinesis"),
                    num: "II"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "25"
                }),
                icon: "__a0db/rc/icons/ic-abil-01.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .25
                    } ] ]
                },
                id: 1003502,
                lock: {
                    attrs: {
                        level: {
                            gte: 25
                        }
                    }
                },
                price: {
                    gold: r("4.46299746e+25")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Telekinesis"),
                    num: "III"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__a0db/rc/icons/ic-abil-01.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003503,
                lock: {
                    attrs: {
                        level: {
                            gte: 50
                        }
                    }
                },
                price: {
                    gold: r("2.72168742e+26")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Telekinesis"),
                    num: "IV"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "50"
                }),
                icon: "__a0db/rc/icons/ic-abil-01.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .5
                    } ] ]
                },
                id: 1003504,
                lock: {
                    attrs: {
                        level: {
                            gte: 75
                        }
                    }
                },
                price: {
                    gold: r("1.65977742e+27")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Telekinesis"),
                    num: "V"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__a0db/rc/icons/ic-abil-01.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003505,
                lock: {
                    attrs: {
                        level: {
                            gte: 100
                        }
                    }
                },
                price: {
                    gold: r("1.01218864e+28")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Telekinesis"),
                    num: "VI"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__a0db/rc/icons/ic-abil-01.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003506,
                lock: {
                    attrs: {
                        level: {
                            gte: 250
                        }
                    }
                },
                price: {
                    gold: r("5.20632285e+32")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Telekinesis"),
                    num: "VII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__a0db/rc/icons/ic-abil-01.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003507,
                lock: {
                    attrs: {
                        level: {
                            gte: 500
                        }
                    }
                },
                price: {
                    gold: r("3.70379686e+40")
                }
            }, {
                name: t("{name} {num}", {
                    name: t("Telekinesis"),
                    num: "VIII"
                }),
                info: t("+{pc}% DPS for self", {
                    pc: "75"
                }),
                icon: "__a0db/rc/icons/ic-abil-01.jpg",
                heroReward: {
                    mults: [ [ "DPS", {
                        value: .75
                    } ] ]
                },
                id: 1003508,
                lock: {
                    attrs: {
                        level: {
                            gte: 750
                        }
                    }
                },
                price: {
                    gold: r("2.634894445e+48")
                }
            } ],
            special: !1
        } ];
    },
    87: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = [ {
            id: 1,
            hotKeyCode: 49,
            name: r("Swift hand"),
            info: r("Automatically performs {clicks} clicks per second for {seconds} seconds."),
            infoParams: {
                clicks: {
                    path: "effect.simple.clicksPerSec"
                },
                seconds: {
                    path: "actionTime",
                    mult: .001,
                    noSkillPower: !0
                }
            },
            icon: "__caf2/rc/skill-icon01.png",
            animation: "anim_skill_swhand",
            actionTime: 15,
            cooldown: 300,
            effect: {
                simple: {
                    clicksPerSec: 10
                },
                charged: {
                    clicksPerSec: 20
                },
                className: "SwiftHand"
            },
            lock: {
                counters: {
                    "C::SK:1": 1
                },
                failText: r("This skill will be available when hero {heroName} will reach level {lvl}.", {
                    heroName: r("Akira Hitsujikai"),
                    lvl: 25
                })
            }
        }, {
            id: 2,
            hotKeyCode: 50,
            name: r("Ancestors Force"),
            info: r("+{pc}% DPS for {seconds} seconds."),
            infoParams: {
                pc: {
                    path: "effect.simple.dpsMultiplier",
                    mult: 100
                },
                seconds: {
                    path: "actionTime",
                    mult: .001,
                    noSkillPower: !0
                }
            },
            icon: "__1730/rc/skill-icon02.png",
            animation: "anim_skill_ancestor",
            actionTime: 30,
            cooldown: 600,
            effect: {
                simple: {
                    dpsMultiplier: 1
                },
                charged: {
                    dpsMultiplier: 2
                },
                className: "AncestorsForce"
            },
            lock: {
                counters: {
                    "C::SK:2": 1
                },
                failText: r("This skill will be available when hero {heroName} will reach level {lvl}.", {
                    heroName: r("Hoshi Asashin"),
                    lvl: 100
                })
            }
        }, {
            id: 3,
            hotKeyCode: 51,
            name: r("Philosopher Stone"),
            info: r("+{pc}% gold dropped from monsters for {seconds} seconds."),
            infoParams: {
                pc: {
                    path: "effect.simple.goldMultiplier",
                    mult: 100
                },
                seconds: {
                    path: "actionTime",
                    mult: .001,
                    noSkillPower: !0
                }
            },
            icon: "__913e/rc/skill-icon03.png",
            animation: "anim_skill_philstone",
            actionTime: 30,
            cooldown: 1800,
            effect: {
                simple: {
                    goldMultiplier: 1
                },
                charged: {
                    goldMultiplier: 2
                },
                className: "PhilosopherStone"
            },
            lock: {
                counters: {
                    "C::SK:3": 1
                },
                failText: r("This skill will be available when hero {heroName} will reach level {lvl}.", {
                    heroName: r("Mariko Kikaibaka"),
                    lvl: 75
                })
            }
        }, {
            id: 4,
            hotKeyCode: 52,
            name: r("Goldminer"),
            info: r("Every click give {pc}% of monster's gold, for {seconds} seconds. ({pc2}% on Bosses)"),
            infoParams: {
                pc: {
                    path: "effect.simple.goldPercentFromMob",
                    mult: 100
                },
                pc2: {
                    path: "effect.simple.goldPercentFromBoss",
                    mult: 100,
                    toFixed: 2
                },
                seconds: {
                    path: "actionTime",
                    mult: .001,
                    noSkillPower: !0
                }
            },
            icon: "__2f68/rc/skill-icon04.png",
            animation: "anim_skill_goldmine",
            actionTime: 30,
            cooldown: 3600,
            effect: {
                simple: {
                    goldPercentFromMob: .01,
                    goldPercentFromBoss: .001
                },
                charged: {
                    goldPercentFromMob: .02,
                    goldPercentFromBoss: .002
                },
                className: "Goldminer"
            },
            lock: {
                counters: {
                    "C::SK:4": 1
                },
                failText: r("This skill will be available when hero {heroName} will reach level {lvl}.", {
                    heroName: r("Kamiko Furuto"),
                    lvl: 100
                })
            }
        }, {
            id: 5,
            hotKeyCode: 53,
            name: r("Guild Master Power"),
            info: r("+{pc}% click damage for {seconds} seconds."),
            infoParams: {
                pc: {
                    path: "effect.simple.dpcMultiplier",
                    mult: 100
                },
                seconds: {
                    path: "actionTime",
                    mult: .001,
                    noSkillPower: !0
                }
            },
            icon: "__5459/rc/skill-icon05.png",
            animation: "anim_skill_gmp",
            actionTime: 30,
            cooldown: 3600,
            effect: {
                simple: {
                    dpcMultiplier: 2
                },
                charged: {
                    dpcMultiplier: 4
                },
                className: "GuildMasterPower"
            },
            lock: {
                counters: {
                    "C::SK:5": 1
                },
                failText: r("This skill will be available when hero {heroName} will reach level {lvl}.", {
                    heroName: r("Mi Hyo"),
                    lvl: 250
                })
            }
        }, {
            id: 6,
            hotKeyCode: 54,
            name: r("Master Attack"),
            info: r("Deals {pc}% DPS + DPC damage, when activated."),
            infoParams: {
                pc: {
                    path: "effect.simple.dpsMasterAttack",
                    mult: 100
                }
            },
            icon: "__12d7/rc/skill-icon06.png",
            animation: "anim_skill_master",
            actionTime: 3,
            cooldown: 28800,
            effect: {
                simple: {
                    dpsMultiplier: .05,
                    dpsMasterAttack: 20
                },
                charged: {
                    dpsMultiplier: .05,
                    dpsMasterAttack: 40
                },
                className: "MasterAttack"
            },
            lock: {
                counters: {
                    "C::SK:6": 1
                },
                failText: r("This skill will be available when hero {heroName} will reach level {lvl}.", {
                    heroName: r("Takaro Kaminoken"),
                    lvl: 75
                })
            }
        }, {
            id: 7,
            hotKeyCode: 55,
            name: r("Blessing"),
            info: r("Makes the effect of the next skill used {times} times more powerful"),
            icon: "__0e8f/rc/skill-icon07.png",
            infoParams: {
                times: {
                    path: "effect.simple.skillEffectMult",
                    noSkillPower: !0
                }
            },
            animation: "anim_skill_bless",
            actionTime: 0,
            cooldown: 3600,
            effect: {
                simple: {
                    skillEffectMult: 2,
                    skillsAmount: 1
                },
                charged: {
                    skillEffectMult: 2,
                    skillsAmount: 1
                },
                className: "Blessing"
            },
            noBless: !0,
            noSkillPower: !0,
            lock: {
                counters: {
                    "C::SK:7": 1
                },
                failText: r("This skill will be available when hero {heroName} will reach level {lvl}.", {
                    heroName: r("Amaya Karasu"),
                    lvl: 75
                })
            }
        } ];
    },
    98: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = {
            improvements: [ {
                id: 1,
                improvements: [ {
                    id: 1,
                    price: {
                        gems: 2
                    },
                    desc: r("cooldown -{percent}%", {
                        percent: 25
                    }),
                    tooltip: null,
                    changes: {
                        cooldown: 225
                    },
                    skillId: 1,
                    reward: {
                        counters: {
                            SL_IM_1: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_1: 0
                        }
                    }
                }, {
                    id: 2,
                    price: {
                        gems: 4
                    },
                    desc: r("x{times} effect", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                clicksPerSec: 20
                            },
                            charged: {
                                clicksPerSec: 40
                            },
                            className: "SwiftHand"
                        }
                    },
                    skillId: 1,
                    reward: {
                        counters: {
                            SL_IM_1: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_1: 1
                        }
                    }
                }, {
                    id: 3,
                    price: {
                        crowns: 150
                    },
                    desc: r("x{times} duration", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        actionTime: 30
                    },
                    skillId: 1,
                    reward: {
                        counters: {
                            SL_IM_1: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_1: 2
                        }
                    }
                }, {
                    id: 4,
                    price: {
                        crowns: 250
                    },
                    desc: r("x{times} effect", {
                        times: 4
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                clicksPerSec: 40
                            },
                            charged: {
                                clicksPerSec: 80
                            },
                            className: "SwiftHand"
                        }
                    },
                    skillId: 1,
                    reward: {
                        counters: {
                            SL_IM_1: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_1: 3
                        }
                    }
                } ]
            }, {
                id: 2,
                improvements: [ {
                    id: 1,
                    price: {
                        gems: 6
                    },
                    desc: r("cooldown -{percent}%", {
                        percent: 25
                    }),
                    tooltip: null,
                    changes: {
                        cooldown: 450
                    },
                    skillId: 2,
                    reward: {
                        counters: {
                            SL_IM_2: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_2: 0
                        }
                    }
                }, {
                    id: 2,
                    price: {
                        gems: 12
                    },
                    desc: r("x{times} effect", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                dpsMultiplier: 2
                            },
                            charged: {
                                dpsMultiplier: 4
                            },
                            className: "AncestorsForce"
                        }
                    },
                    skillId: 2,
                    reward: {
                        counters: {
                            SL_IM_2: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_2: 1
                        }
                    }
                }, {
                    id: 3,
                    price: {
                        crowns: 200
                    },
                    desc: r("x{times} duration", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        actionTime: 60
                    },
                    skillId: 2,
                    reward: {
                        counters: {
                            SL_IM_2: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_2: 2
                        }
                    }
                }, {
                    id: 4,
                    price: {
                        crowns: 350
                    },
                    desc: r("x{times} effect", {
                        times: 4
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                dpsMultiplier: 4
                            },
                            charged: {
                                dpsMultiplier: 8
                            },
                            className: "AncestorsForce"
                        }
                    },
                    skillId: 2,
                    reward: {
                        counters: {
                            SL_IM_2: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_2: 3
                        }
                    }
                } ]
            }, {
                id: 3,
                improvements: [ {
                    id: 1,
                    price: {
                        gems: 9
                    },
                    desc: r("cooldown -{percent}%", {
                        percent: 25
                    }),
                    tooltip: null,
                    changes: {
                        cooldown: 1350
                    },
                    skillId: 3,
                    reward: {
                        counters: {
                            SL_IM_3: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_3: 0
                        }
                    }
                }, {
                    id: 2,
                    price: {
                        gems: 18
                    },
                    desc: r("x{times} effect", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                goldMultiplier: 2
                            },
                            charged: {
                                goldMultiplier: 4
                            },
                            className: "PhilosopherStone"
                        }
                    },
                    skillId: 3,
                    reward: {
                        counters: {
                            SL_IM_3: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_3: 1
                        }
                    }
                }, {
                    id: 3,
                    price: {
                        crowns: 250
                    },
                    desc: r("x{times} duration", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        actionTime: 60
                    },
                    skillId: 3,
                    reward: {
                        counters: {
                            SL_IM_3: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_3: 2
                        }
                    }
                }, {
                    id: 4,
                    price: {
                        crowns: 500
                    },
                    desc: r("x{times} effect", {
                        times: 4
                    }),
                    tooltip: null,
                    changes: {
                        info: r("+{pc}% gold dropped from monsters for {seconds} seconds."),
                        effect: {
                            simple: {
                                goldMultiplier: 4
                            },
                            charged: {
                                goldMultiplier: 8
                            },
                            className: "PhilosopherStone"
                        }
                    },
                    skillId: 3,
                    reward: {
                        counters: {
                            SL_IM_3: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_3: 3
                        }
                    }
                } ]
            }, {
                id: 4,
                improvements: [ {
                    id: 1,
                    price: {
                        gems: 12
                    },
                    desc: r("cooldown -{percent}%", {
                        percent: 25
                    }),
                    tooltip: null,
                    changes: {
                        cooldown: 2700
                    },
                    skillId: 4,
                    reward: {
                        counters: {
                            SL_IM_4: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_4: 0
                        }
                    }
                }, {
                    id: 2,
                    price: {
                        gems: 24
                    },
                    desc: r("x{times} effect", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                goldPercentFromMob: .02,
                                goldPercentFromBoss: .002
                            },
                            charged: {
                                goldPercentFromMob: .04,
                                goldPercentFromBoss: .004
                            },
                            className: "Goldminer"
                        }
                    },
                    skillId: 4,
                    reward: {
                        counters: {
                            SL_IM_4: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_4: 1
                        }
                    }
                }, {
                    id: 3,
                    price: {
                        crowns: 350
                    },
                    desc: r("x{times} duration", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        actionTime: 60
                    },
                    skillId: 4,
                    reward: {
                        counters: {
                            SL_IM_4: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_4: 2
                        }
                    }
                }, {
                    id: 4,
                    price: {
                        crowns: 700
                    },
                    desc: r("x{times} effect", {
                        times: 4
                    }),
                    tooltip: null,
                    changes: {
                        info: r("Every click give {pc}% of monster's gold, for {seconds} seconds. ({pc2}% on Bosses)"),
                        effect: {
                            simple: {
                                goldPercentFromMob: .04,
                                goldPercentFromBoss: .004
                            },
                            charged: {
                                goldPercentFromMob: .08,
                                goldPercentFromBoss: .008
                            },
                            className: "Goldminer"
                        }
                    },
                    skillId: 4,
                    reward: {
                        counters: {
                            SL_IM_4: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_4: 3
                        }
                    }
                } ]
            }, {
                id: 5,
                improvements: [ {
                    id: 1,
                    price: {
                        gems: 15
                    },
                    desc: r("cooldown -{percent}%", {
                        percent: 25
                    }),
                    tooltip: null,
                    changes: {
                        cooldown: 2700
                    },
                    skillId: 5,
                    reward: {
                        counters: {
                            SL_IM_5: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_5: 0
                        }
                    }
                }, {
                    id: 2,
                    price: {
                        gems: 30
                    },
                    desc: r("x{times} effect", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                dpcMultiplier: 4
                            },
                            charged: {
                                dpcMultiplier: 8
                            },
                            className: "GuildMasterPower"
                        }
                    },
                    skillId: 5,
                    reward: {
                        counters: {
                            SL_IM_5: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_5: 1
                        }
                    }
                }, {
                    id: 3,
                    price: {
                        crowns: 500
                    },
                    desc: r("x{times} duration", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        actionTime: 60
                    },
                    skillId: 5,
                    reward: {
                        counters: {
                            SL_IM_5: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_5: 2
                        }
                    }
                }, {
                    id: 4,
                    price: {
                        crowns: 1e3
                    },
                    desc: r("x{times} effect", {
                        times: 4
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                dpcMultiplier: 8
                            },
                            charged: {
                                dpcMultiplier: 16
                            },
                            className: "GuildMasterPower"
                        }
                    },
                    skillId: 5,
                    reward: {
                        counters: {
                            SL_IM_5: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_5: 3
                        }
                    }
                } ]
            }, {
                id: 6,
                improvements: [ {
                    id: 1,
                    price: {
                        gems: 18
                    },
                    desc: r("cooldown -{percent}%", {
                        percent: 25
                    }),
                    tooltip: null,
                    changes: {
                        cooldown: 21600
                    },
                    skillId: 6,
                    reward: {
                        counters: {
                            SL_IM_6: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_6: 0
                        }
                    }
                }, {
                    id: 2,
                    price: {
                        gems: 36
                    },
                    desc: r("x{times} effect", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                dpsMasterAttack: 40
                            },
                            charged: {
                                dpsMasterAttack: 80
                            },
                            className: "MasterAttack"
                        }
                    },
                    skillId: 6,
                    reward: {
                        counters: {
                            SL_IM_6: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_6: 1
                        }
                    }
                }, {
                    id: 3,
                    price: {
                        crowns: 700
                    },
                    desc: r("x{times} effect", {
                        times: 4
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                dpsMasterAttack: 80
                            },
                            charged: {
                                dpsMasterAttack: 160
                            },
                            className: "MasterAttack"
                        }
                    },
                    skillId: 6,
                    reward: {
                        counters: {
                            SL_IM_6: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_6: 2
                        }
                    }
                }, {
                    id: 4,
                    price: {
                        crowns: 1400
                    },
                    desc: r("x{times} effect", {
                        times: 6
                    }),
                    tooltip: null,
                    changes: {
                        info: r("Deals {pc}% DPS + DPC damage, when activated."),
                        effect: {
                            simple: {
                                dpsMasterAttack: 120
                            },
                            charged: {
                                dpsMasterAttack: 240
                            },
                            className: "MasterAttack"
                        }
                    },
                    skillId: 6,
                    reward: {
                        counters: {
                            SL_IM_6: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_6: 3
                        }
                    }
                } ]
            }, {
                id: 7,
                improvements: [ {
                    id: 1,
                    price: {
                        gems: 21
                    },
                    desc: r("cooldown -{percent}%", {
                        percent: 25
                    }),
                    tooltip: null,
                    changes: {
                        cooldown: 2700
                    },
                    skillId: 7,
                    reward: {
                        counters: {
                            SL_IM_7: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_7: 0
                        }
                    }
                }, {
                    id: 2,
                    price: {
                        gems: 42
                    },
                    desc: r("x{times} effect", {
                        times: 4
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                skillEffectMult: 4,
                                skillsAmount: 1
                            },
                            charged: {
                                skillEffectMult: 4,
                                skillsAmount: 1
                            },
                            className: "Blessing"
                        }
                    },
                    skillId: 7,
                    reward: {
                        counters: {
                            SL_IM_7: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_7: 1
                        }
                    }
                }, {
                    id: 3,
                    price: {
                        crowns: 1e3
                    },
                    desc: r("x{times} times", {
                        times: 2
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                skillEffectMult: 4,
                                skillsAmount: 2
                            },
                            charged: {
                                skillEffectMult: 4,
                                skillsAmount: 2
                            },
                            className: "Blessing"
                        }
                    },
                    skillId: 7,
                    reward: {
                        counters: {
                            SL_IM_7: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_7: 2
                        }
                    }
                }, {
                    id: 4,
                    price: {
                        crowns: 1950
                    },
                    desc: r("x{times} effect", {
                        times: 6
                    }),
                    tooltip: null,
                    changes: {
                        effect: {
                            simple: {
                                skillEffectMult: 6,
                                skillsAmount: 2
                            },
                            charged: {
                                skillEffectMult: 6,
                                skillsAmount: 2
                            },
                            className: "Blessing"
                        }
                    },
                    skillId: 7,
                    reward: {
                        counters: {
                            SL_IM_7: 1
                        }
                    },
                    lock: {
                        counters: {
                            SL_IM_7: 3
                        }
                    }
                } ]
            } ],
            stats: [ {
                id: 1,
                name: "strength",
                icon: "str",
                bonusText: r("DPC bonus"),
                tooltipText: r("{res_name} drops from monster with some chance", {
                    res_name: r("Gems of {statName}", {
                        statName: r("strength")
                    })
                })
            }, {
                id: 2,
                name: "charisma",
                icon: "char",
                bonusText: r("DPS bonus"),
                tooltipText: r("{res_name} drops from bosses - once for each boss with some chance", {
                    res_name: r("Gems of {statName}", {
                        statName: r("charisma")
                    })
                })
            }, {
                id: 3,
                name: "intelligence",
                icon: "int",
                bonusText: r("abilities"),
                tooltipText: r("{res_name} drops from bosses - once for each boss with some chance", {
                    res_name: r("Gems of {statName}", {
                        statName: r("intelligence")
                    })
                })
            }, {
                id: 4,
                name: "luck",
                icon: "lck",
                bonusText: r("drop rate"),
                tooltipText: r("{res_name} is a reward for the reborn", {
                    res_name: r("Gems of {statName}", {
                        statName: r("luck")
                    })
                })
            } ]
        };
    },
    101: function(e, a) {
        "use strict";
        e.exports = {
            locations: [ {
                id: 1,
                image: "__f16c/images/back/01-Forest-1.jpg",
                platforms: [ 1, 4, 9, 14 ],
                mobs: [ 1, 2, 3, 27, 20, 21, 22 ]
            }, {
                id: 2,
                image: "__203a/images/back/02-Forest-2.jpg",
                platforms: [ 2, 6, 7 ],
                mobs: [ 1, 2, 3, 27, 24, 25, 26 ]
            }, {
                id: 3,
                image: "__5727/images/back/03-Desert.jpg",
                platforms: [ 3, 5, 11 ],
                mobs: [ 4, 5, 6, 10, 16, 18, 24, 25, 26 ]
            }, {
                id: 4,
                image: "__e7a2/images/back/04-Town-Square-1.jpg",
                platforms: [ 1, 4, 15 ],
                mobs: [ 4, 5, 7, 8, 15, 18, 19, 20, 21, 22, 26 ]
            }, {
                id: 5,
                image: "__f63e/images/back/04-Town-Square-2.jpg",
                platforms: [ 1, 4, 15 ],
                mobs: [ 4, 5, 7, 8, 15, 18, 19, 21, 22, 24, 25 ]
            }, {
                id: 6,
                image: "__41dc/images/back/05-Beach.jpg",
                platforms: [ 5, 9, 12 ],
                mobs: [ 1, 2, 6, 10, 16, 19, 24, 25, 26 ]
            }, {
                id: 7,
                image: "__45db/images/back/06-Cave.jpg",
                platforms: [ 2, 6, 11 ],
                mobs: [ 5, 10, 11, 18, 19, 20, 21, 22, 26 ]
            }, {
                id: 8,
                image: "__fd76/images/back/07-Cemetery.jpg",
                platforms: [ 7, 10 ],
                mobs: [ 10, 11, 13, 20, 21, 22, 24, 25 ]
            }, {
                id: 9,
                image: "__70f4/images/back/08-Snow-tundra.jpg",
                platforms: [ 8 ],
                mobs: [ 7, 8, 9, 10, 18, 22, 24, 25, 26 ]
            }, {
                id: 10,
                image: "__cf2f/images/back/09-River.jpg",
                platforms: [ 1, 5, 9 ],
                mobs: [ 1, 2, 3, 9, 11, 16, 17, 21, 24, 26 ]
            }, {
                id: 11,
                image: "__5483/images/back/10-Marshes.jpg",
                platforms: [ 6, 10, 13 ],
                mobs: [ 1, 2, 3, 9, 11, 16, 17, 19, 22, 25, 26 ]
            }, {
                id: 12,
                image: "__d967/images/back/11-Mountain.jpg",
                platforms: [ 3, 8, 11 ],
                mobs: [ 3, 4, 5, 6, 15, 18, 22, 24, 25, 26 ]
            }, {
                id: 13,
                image: "__1e61/images/back/12-Undersea-world.jpg",
                platforms: [ 5, 12, 14 ],
                mobs: [ 1, 3, 9, 10, 17, 19, 21, 22, 24 ]
            }, {
                id: 14,
                image: "__bffa/images/back/13-Astral.jpg",
                platforms: [ 13 ],
                mobs: [ 4, 5, 6, 8, 13, 15, 19, 20, 21, 22, 25, 26 ]
            }, {
                id: 15,
                image: "__3064/images/back/14-Jungle.jpg",
                platforms: [ 1, 10, 14 ],
                mobs: [ 1, 2, 3, 11, 16, 17, 19, 21, 22, 24, 25, 26 ]
            }, {
                id: 16,
                image: "__4887/images/back/15-Interior-1.jpg",
                platforms: [ 15 ],
                mobs: [ 4, 5, 6, 7, 8, 13, 18, 21, 22, 24, 25, 26 ]
            } ],
            floors: [ {
                id: 1,
                image: "__1f2a/images/platforms/platform-001.png"
            }, {
                id: 2,
                image: "__9b3f/images/platforms/platform-002.png"
            }, {
                id: 3,
                image: "__1804/images/platforms/platform-003.png"
            }, {
                id: 4,
                image: "__c23a/images/platforms/platform-004.png"
            }, {
                id: 5,
                image: "__99a8/images/platforms/platform-005.png"
            }, {
                id: 6,
                image: "__7750/images/platforms/platform-006.png"
            }, {
                id: 7,
                image: "__96ed/images/platforms/platform-007.png"
            }, {
                id: 8,
                image: "__eeb9/images/platforms/platform-008.png"
            }, {
                id: 9,
                image: "__95e8/images/platforms/platform-009.png"
            }, {
                id: 10,
                image: "__a994/images/platforms/platform-010.png"
            }, {
                id: 11,
                image: "__8b65/images/platforms/platform-011.png"
            }, {
                id: 12,
                image: "__33b3/images/platforms/platform-012.png"
            }, {
                id: 13,
                image: "__3107/images/platforms/platform-013.png"
            }, {
                id: 14,
                image: "__c066/images/platforms/platform-014.png"
            }, {
                id: 15,
                image: "__724e/images/platforms/platform-015.png"
            } ]
        };
    },
    102: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = {
            prefix: [ r("Weak"), r("Yapping"), r("Normal"), r("Strong"), r("Awful"), r("Clumsy"), r("Coquettish"), r("Crafty"), r("Darned"), r("Disgusting"), r("Dwarfy"), r("Fanged"), r("Fat"), r("Fussy"), r("Giggling"), r("Hateful"), r("Horrible"), r("Jumpy"), r("Levitating"), r("Morbid"), r("Nameless"), r("Old"), r("Plump"), r("Quivering"), r("Rotten"), r("Scared"), r("Shaggy"), r("Sharp-eared"), r("Single-eared"), r("Squared"), r("Three-toed"), r("Ungrateful"), r("Unnoticeable"), r("Watchdog") ],
            mobs: [ {
                id: 1,
                name: r("Slime"),
                image: "__cf2d/images/monsters/monster0001.png",
                movie: "monster01"
            }, {
                id: 2,
                name: r("Orc"),
                image: "__1423/images/monsters/monster0003.png",
                movie: "monster02"
            }, {
                id: 3,
                name: r("Tentacle Beast"),
                image: "__49b1/images/monsters/monster0005.png",
                movie: "monster03"
            }, {
                id: 4,
                name: r("Incubus"),
                image: "__390a/images/monsters/monster0007.png",
                movie: "monster04"
            }, {
                id: 5,
                name: r("Cerberus"),
                image: "__3aaa/images/monsters/monster0009.png",
                movie: "monster05"
            }, {
                id: 6,
                name: r("Succubus"),
                image: "__463d/images/monsters/monster0011.png",
                movie: "monster06"
            }, {
                id: 7,
                name: r("Ninja"),
                image: "__8bc3/images/monsters/monster0013.png",
                movie: "monster07"
            }, {
                id: 8,
                name: r("Rogue mage"),
                image: "__35e0/images/monsters/monster0015.png",
                movie: "monster08"
            }, {
                id: 9,
                name: r("Dragon"),
                image: "__8885/images/monsters/monster0017.png",
                movie: "monster09"
            }, {
                id: 10,
                name: r("Oni"),
                image: "__7961/images/monsters/monster0019.png",
                movie: "monster10"
            }, {
                id: 11,
                name: r("Spider"),
                image: "__d984/images/monsters/monster0021.png",
                movie: "monster11"
            }, {
                id: 12,
                name: r("Dark Elf"),
                image: "__7e35/images/monsters/monster0023.png",
                movie: "monster12"
            }, {
                id: 13,
                name: r("Vampire"),
                image: "__68d5/images/monsters/monster0025.png",
                movie: "monster13"
            }, {
                id: 14,
                name: r("Mimic chest"),
                image: "__2f97/images/monsters/monster0027.png",
                movie: "monster14"
            }, {
                id: 15,
                name: r("Mimic chest"),
                image: "__2f97/images/monsters/monster0027.png",
                movie: "monster14"
            }, {
                id: 16,
                name: r("Lion"),
                image: "__69cb/images/monsters/monster0031.png",
                movie: "monster16"
            }, {
                id: 17,
                name: r("Lizardman"),
                image: "__5076/images/monsters/monster0033.png",
                movie: "monster17"
            }, {
                id: 18,
                name: r("Lizardman"),
                image: "__5076/images/monsters/monster0033.png",
                movie: "monster17"
            }, {
                id: 19,
                name: r("Poke-monster"),
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster19"
            }, {
                id: 20,
                name: r("Poke-monster"),
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster19"
            }, {
                id: 21,
                name: "Kitsune",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster21",
                type: "strip"
            }, {
                id: 22,
                name: "Amur",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster22",
                type: "strip"
            }, {
                id: 23,
                name: "Panda",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster23",
                type: "strip"
            }, {
                id: 24,
                name: "Angel girl",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster24",
                type: "strip"
            }, {
                id: 25,
                name: "Ice elemental",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster25",
                type: "strip"
            }, {
                id: 26,
                name: "Ogre girl",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster26",
                type: "strip"
            }, {
                id: 27,
                name: r("Spider"),
                image: "__e60d/images/monsters/monster0018.png",
                movie: "monster27"
            } ]
        };
    },
    106: function(e, a) {
        "use strict";
        e.exports = [ {
            id: 1,
            tag: "Sketch Lanza",
            kind: 1
        }, {
            id: 2,
            tag: "anal",
            kind: 2
        }, {
            id: 3,
            tag: "Cowboy Bebop",
            kind: 3
        }, {
            id: 4,
            tag: "titjob / paizuri / titfuck",
            kind: 2
        }, {
            id: 5,
            tag: "cum",
            kind: 2
        }, {
            id: 6,
            tag: "bukkake / bukakke / bukake",
            kind: 2
        }, {
            id: 7,
            tag: "Star Wars",
            kind: 3
        }, {
            id: 8,
            tag: "Leia Organa",
            kind: 4
        }, {
            id: 9,
            tag: "Han Solo",
            kind: 4
        }, {
            id: 10,
            tag: "boobs / tits",
            kind: 2
        }, {
            id: 11,
            tag: "oral",
            kind: 2
        }, {
            id: 12,
            tag: "blowjob",
            kind: 2
        }, {
            id: 13,
            tag: "facial",
            kind: 2
        }, {
            id: 14,
            tag: "One Piece",
            kind: 3
        }, {
            id: 15,
            tag: "Nico Robin (One Piece)",
            kind: 4
        }, {
            id: 16,
            tag: "Sinner 2",
            kind: 1
        }, {
            id: 17,
            tag: "creampie",
            kind: 2
        }, {
            id: 18,
            tag: "Justice League",
            kind: 3
        }, {
            id: 19,
            tag: "Wonder Woman (Justice League)",
            kind: 4
        }, {
            id: 20,
            tag: "gangbang",
            kind: 2
        }, {
            id: 21,
            tag: "double penetration / DP",
            kind: 2
        }, {
            id: 22,
            tag: "Kingdom Hearts",
            kind: 3
        }, {
            id: 23,
            tag: "Xion (Kingdom Hearts)",
            kind: 4
        }, {
            id: 24,
            tag: "Batou",
            kind: 1
        }, {
            id: 26,
            tag: "deepthroat",
            kind: 2
        }, {
            id: 28,
            tag: "Avatar: The Ledend of Korra",
            kind: 3
        }, {
            id: 29,
            tag: "Korra (character)",
            kind: 4
        }, {
            id: 30,
            tag: "orgy",
            kind: 2
        }, {
            id: 31,
            tag: "Kairi (Kingdom Hearts)",
            kind: 4
        }, {
            id: 32,
            tag: "Riku (Kingdom Hearts)",
            kind: 4
        }, {
            id: 33,
            tag: "Sora (Kingdom Hearts)",
            kind: 4
        }, {
            id: 34,
            tag: "Halo",
            kind: 3
        }, {
            id: 35,
            tag: "Cortana (Halo)",
            kind: 4
        }, {
            id: 36,
            tag: "adultartist",
            kind: 1
        }, {
            id: 37,
            tag: "anus / asshole",
            kind: 2
        }, {
            id: 38,
            tag: "ass",
            kind: 2
        }, {
            id: 39,
            tag: "DC Comics",
            kind: 3
        }, {
            id: 40,
            tag: "Harley Quinn",
            kind: 4
        }, {
            id: 41,
            tag: "Naruto",
            kind: 3
        }, {
            id: 42,
            tag: "Sasuke Uchiha (Naruto)",
            kind: 4
        }, {
            id: 43,
            tag: "Hinata Hyuga (Naruto)",
            kind: 4
        }, {
            id: 44,
            tag: "boots",
            kind: 2
        }, {
            id: 45,
            tag: "Soul Eater",
            kind: 3
        }, {
            id: 46,
            tag: "The Simpsons",
            kind: 3
        }, {
            id: 47,
            tag: "Marge Simpson (Simpsons)",
            kind: 4
        }, {
            id: 48,
            tag: "Homer Simpson (Simpsons)",
            kind: 4
        }, {
            id: 49,
            tag: "Borderlands",
            kind: 3
        }, {
            id: 50,
            tag: "Mad Moxxi (Borderlands)",
            kind: 4
        }, {
            id: 51,
            tag: "evulchibi",
            kind: 1
        }, {
            id: 52,
            tag: "Darkstalkers",
            kind: 3
        }, {
            id: 53,
            tag: "lesbian",
            kind: 2
        }, {
            id: 54,
            tag: "gloryhole",
            kind: 2
        }, {
            id: 55,
            tag: "PoV",
            kind: 2
        }, {
            id: 56,
            tag: "Mario Bros.",
            kind: 3
        }, {
            id: 57,
            tag: "Princess Peach (Mario Bros.)",
            kind: 4
        }, {
            id: 58,
            tag: "Princess Daisy (Mario Bros.)",
            kind: 4
        }, {
            id: 59,
            tag: "Princess Rosalina (Mario Bros.)",
            kind: 4
        }, {
            id: 60,
            tag: "Sketch Lanza",
            kind: 2
        }, {
            id: 61,
            tag: "Bible Black",
            kind: 3
        }, {
            id: 62,
            tag: "Sonic",
            kind: 3
        }, {
            id: 63,
            tag: "Kaori Saeki (Bible Black)",
            kind: 4
        }, {
            id: 64,
            tag: "Shadow the Hedgehog (Sonic)",
            kind: 4
        }, {
            id: 65,
            tag: "interracial",
            kind: 2
        }, {
            id: 66,
            tag: "Street Fighter",
            kind: 3
        }, {
            id: 67,
            tag: "Crimson Viper (Street Fighter)",
            kind: 4
        }, {
            id: 68,
            tag: "trimdream",
            kind: 1
        }, {
            id: 69,
            tag: "Resident Evil",
            kind: 3
        }, {
            id: 70,
            tag: "Jill Valentine (Resident Evil)",
            kind: 4
        }, {
            id: 71,
            tag: "Nemesis (Resident Evil)",
            kind: 4
        }, {
            id: 72,
            tag: "reiner55",
            kind: 1
        }, {
            id: 73,
            tag: "Final Fantasy / FF",
            kind: 3
        }, {
            id: 74,
            tag: "Tifa Lockhart (Final Fantasy)",
            kind: 4
        }, {
            id: 75,
            tag: "ahegao",
            kind: 2
        }, {
            id: 76,
            tag: "69 (sex position)",
            kind: 2
        }, {
            id: 77,
            tag: "Luke Skywalker",
            kind: 4
        }, {
            id: 78,
            tag: "Quickhand Quinn",
            kind: 1
        }, {
            id: 79,
            tag: "doggystyle",
            kind: 2
        }, {
            id: 80,
            tag: "Disney",
            kind: 3
        }, {
            id: 81,
            tag: "Ariel (Disney)",
            kind: 4
        }, {
            id: 82,
            tag: "nude",
            kind: 2
        }, {
            id: 83,
            tag: "Elena (Street Fighter)",
            kind: 4
        }, {
            id: 84,
            tag: "Evangelion",
            kind: 3
        }, {
            id: 85,
            tag: "Asuka Langley Sohryu (Evangelion)",
            kind: 4
        }, {
            id: 86,
            tag: "footjob",
            kind: 2
        }, {
            id: 87,
            tag: "Juri Han (Street Fighter)",
            kind: 4
        }, {
            id: 88,
            tag: "Cinderella",
            kind: 3
        }, {
            id: 89,
            tag: "Digimon",
            kind: 3
        }, {
            id: 90,
            tag: "Lilamon (Digimon)",
            kind: 4
        }, {
            id: 91,
            tag: "threesome",
            kind: 2
        }, {
            id: 92,
            tag: "Avatar: The Last Airbender",
            kind: 3
        }, {
            id: 93,
            tag: "Toph Beifong (Avatar)",
            kind: 4
        }, {
            id: 94,
            tag: "Kushina Uzumaki (Naruto)",
            kind: 4
        }, {
            id: 95,
            tag: "Naruto Uzumaki",
            kind: 4
        }, {
            id: 96,
            tag: "Dragon Ball Z / DBZ",
            kind: 3
        }, {
            id: 97,
            tag: "Bulma (Dragon ball)",
            kind: 4
        }, {
            id: 98,
            tag: "Trunks (Dragon Ball)",
            kind: 4
        }, {
            id: 99,
            tag: "Goten (Dragon Ball)",
            kind: 4
        }, {
            id: 100,
            tag: "wedding dress / bride",
            kind: 2
        }, {
            id: 101,
            tag: "Nami (One Piece)",
            kind: 4
        }, {
            id: 102,
            tag: "Absalom (One Piece)",
            kind: 4
        }, {
            id: 103,
            tag: "wrestling",
            kind: 2
        }, {
            id: 104,
            tag: "WWE",
            kind: 3
        }, {
            id: 105,
            tag: "Trish Stratus (Wrestler)",
            kind: 4
        }, {
            id: 106,
            tag: "The Undertaker (Wrestler)",
            kind: 4
        }, {
            id: 107,
            tag: "Soulcalibur",
            kind: 3
        }, {
            id: 108,
            tag: "Astaroth (Soulcalibur)",
            kind: 4
        }, {
            id: 109,
            tag: "Ivy / Isabella Valentine (Soulcalibur)",
            kind: 4
        }, {
            id: 110,
            tag: "handjob",
            kind: 2
        }, {
            id: 111,
            tag: "Tenten (Naruto)",
            kind: 4
        }, {
            id: 112,
            tag: "cumshot",
            kind: 2
        }, {
            id: 113,
            tag: "Fairy Tail",
            kind: 3
        }, {
            id: 114,
            tag: "Lucy Heartfilia (Fairy Tail)",
            kind: 4
        }, {
            id: 115,
            tag: "Erza Scarlet (Fairy Tail)",
            kind: 4
        }, {
            id: 116,
            tag: "Fatal Fury: King of Fighters (KOF)",
            kind: 3
        }, {
            id: 117,
            tag: "Mai Shiranui (King of Fighters)",
            kind: 4
        }, {
            id: 118,
            tag: "smithmrrobert",
            kind: 1
        }, {
            id: 119,
            tag: "dildo",
            kind: 2
        }, {
            id: 120,
            tag: "Love Hina",
            kind: 3
        }, {
            id: 121,
            tag: "Motoko Aoyama (Love Hina)",
            kind: 4
        }, {
            id: 122,
            tag: "tarzan",
            kind: 2
        }, {
            id: 123,
            tag: "painful",
            kind: 2
        }, {
            id: 124,
            tag: "crossover",
            kind: 2
        }, {
            id: 125,
            tag: "Lara Croft: Tomb Raider",
            kind: 3
        }, {
            id: 126,
            tag: "Kerchak / Gorilla (Tarzan)",
            kind: 4
        }, {
            id: 127,
            tag: "Lara Croft (Tomb Rider)",
            kind: 4
        }, {
            id: 128,
            tag: "Mass Effect",
            kind: 3
        }, {
            id: 129,
            tag: "Miranda Lawson (Mass Effect)",
            kind: 4
        }, {
            id: 130,
            tag: "Commander Shepard (Mass Effect)",
            kind: 4
        }, {
            id: 131,
            tag: "full nelson (sex positon)",
            kind: 2
        }, {
            id: 132,
            tag: "Koei",
            kind: 3
        }, {
            id: 133,
            tag: "Lianshi (Koei)",
            kind: 4
        }, {
            id: 134,
            tag: "ELBENTO",
            kind: 1
        }, {
            id: 135,
            tag: "Tsunade (Naruto)",
            kind: 4
        }, {
            id: 136,
            tag: "squeezing",
            kind: 2
        }, {
            id: 137,
            tag: "Dead or Alive (DoA)",
            kind: 3
        }, {
            id: 138,
            tag: "Ayane (Dead or Alive)",
            kind: 4
        }, {
            id: 139,
            tag: "Asami Sato (Korra)",
            kind: 4
        }, {
            id: 140,
            tag: "Ami Mizuno / Sailor Mercury (Sailor Moon)",
            kind: 4
        }, {
            id: 141,
            tag: "Rinoa Heartilly (Final Fantasy)",
            kind: 4
        }, {
            id: 142,
            tag: "Luigi (Mario Bros.)",
            kind: 4
        }, {
            id: 143,
            tag: "Mario (Mario Bros.)",
            kind: 4
        }, {
            id: 144,
            tag: "blonde",
            kind: 2
        }, {
            id: 145,
            tag: "Natsu Dragneel (Fairy Tail)",
            kind: 4
        }, {
            id: 146,
            tag: "Mavis Vermilion (Fairy Tail)",
            kind: 4
        }, {
            id: 147,
            tag: "Liara T'Soni (Mass Effect)",
            kind: 4
        }, {
            id: 148,
            tag: "Kaidan Alenko (Mass Effect)",
            kind: 4
        }, {
            id: 149,
            tag: "Ryu (Street Fighter)",
            kind: 4
        }, {
            id: 150,
            tag: "Blanka (Street Fighter)",
            kind: 4
        }, {
            id: 151,
            tag: "Tina Armstrong (Dead or Alive)",
            kind: 4
        }, {
            id: 152,
            tag: "Kasumi (Dead or Alive)",
            kind: 4
        }, {
            id: 153,
            tag: "Bleach",
            kind: 3
        }, {
            id: 154,
            tag: "Rangiku Matsumoto (Bleach)",
            kind: 4
        }, {
            id: 155,
            tag: "Ariel (Kingdom Hearts)",
            kind: 4
        }, {
            id: 156,
            tag: "bikini",
            kind: 2
        }, {
            id: 157,
            tag: "Jellal Fernandes (Fairy Tail)",
            kind: 4
        }, {
            id: 158,
            tag: "Ino Yamanaka (Naruto)",
            kind: 4
        }, {
            id: 159,
            tag: "Choza Akimichi (Naruto)",
            kind: 4
        }, {
            id: 160,
            tag: "Inoichi Yamanaka (Naruto)",
            kind: 4
        }, {
            id: 161,
            tag: "Shikaku Nara (Naruto)",
            kind: 4
        }, {
            id: 162,
            tag: "Tekken",
            kind: 3
        }, {
            id: 163,
            tag: "Nina Williams (Tekken)",
            kind: 4
        }, {
            id: 164,
            tag: "Anna Williams (Tekken)",
            kind: 4
        }, {
            id: 165,
            tag: "Kazuya Mishima (Tekken)",
            kind: 4
        }, {
            id: 166,
            tag: "couple",
            kind: 2
        }, {
            id: 167,
            tag: "internal",
            kind: 2
        }, {
            id: 168,
            tag: "Yuffie Kisaragi (Final Fantasy)",
            kind: 4
        }, {
            id: 169,
            tag: "Zero",
            kind: 1
        }, {
            id: 170,
            tag: "Pauline (Mario Bros.)",
            kind: 4
        }, {
            id: 171,
            tag: "Goomba (Mario Bros.)",
            kind: 4
        }, {
            id: 172,
            tag: "redhead",
            kind: 2
        }, {
            id: 173,
            tag: "Power Girl (DC)",
            kind: 4
        }, {
            id: 174,
            tag: "pinup",
            kind: 2
        }, {
            id: 175,
            tag: "Metroid",
            kind: 3
        }, {
            id: 176,
            tag: "Samus Aran (Metroid)",
            kind: 4
        }, {
            id: 177,
            tag: "big boobs / huge tits",
            kind: 2
        }, {
            id: 178,
            tag: "orcs",
            kind: 2
        }, {
            id: 179,
            tag: "vaginal",
            kind: 2
        }, {
            id: 180,
            tag: "Taimanin Asagi",
            kind: 3
        }, {
            id: 181,
            tag: "Sakura Haruno (Naruto)",
            kind: 4
        }, {
            id: 182,
            tag: "Jiraiya (Naruto)",
            kind: 4
        }, {
            id: 183,
            tag: "TMNT",
            kind: 3
        }, {
            id: 184,
            tag: "April O'Neil",
            kind: 4
        }, {
            id: 185,
            tag: "Splinter",
            kind: 4
        }, {
            id: 186,
            tag: "Donatello",
            kind: 4
        }, {
            id: 187,
            tag: "Leonardo",
            kind: 4
        }, {
            id: 188,
            tag: "Raphael (TMNT)",
            kind: 4
        }, {
            id: 189,
            tag: "Michelangelo (TMNT)",
            kind: 4
        }, {
            id: 190,
            tag: "cowgirl (sex position)",
            kind: 2
        }, {
            id: 191,
            tag: "Mortal Kombat",
            kind: 3
        }, {
            id: 192,
            tag: "Johnny Cage",
            kind: 4
        }, {
            id: 193,
            tag: "Sonya Blade",
            kind: 4
        }, {
            id: 194,
            tag: "Irma Langinstein",
            kind: 4
        }, {
            id: 195,
            tag: "BioShock Infinite",
            kind: 3
        }, {
            id: 196,
            tag: "Elizabeth (BioShock)",
            kind: 4
        }, {
            id: 197,
            tag: "licking",
            kind: 2
        }, {
            id: 198,
            tag: "pussy",
            kind: 2
        }, {
            id: 199,
            tag: "Batman",
            kind: 3
        }, {
            id: 200,
            tag: "Poison Ivy (Batman / DC)",
            kind: 4
        }, {
            id: 201,
            tag: "Joker (Batman)",
            kind: 4
        }, {
            id: 202,
            tag: "Batman (character)",
            kind: 4
        }, {
            id: 203,
            tag: "Pokemon",
            kind: 3
        }, {
            id: 204,
            tag: "Jessie (Pokemon)",
            kind: 4
        }, {
            id: 205,
            tag: "Ash (Pokemon)",
            kind: 4
        }, {
            id: 206,
            tag: "nvcxxx",
            kind: 1
        }, {
            id: 207,
            tag: "Azula (Avatar)",
            kind: 4
        }, {
            id: 208,
            tag: "MILF",
            kind: 2
        }, {
            id: 209,
            tag: "Johnny Test",
            kind: 3
        }, {
            id: 210,
            tag: "Aeris / Aerith Gainsborough (Final Fantasy)",
            kind: 4
        }, {
            id: 211,
            tag: "Mirajane Strauss (Fairy Tail)",
            kind: 4
        }, {
            id: 212,
            tag: "Serah Farron (Final Fantasy)",
            kind: 4
        }, {
            id: 213,
            tag: "Moogle (Final Fantasy)",
            kind: 4
        }, {
            id: 214,
            tag: "King / Kungu (Tekken)",
            kind: 4
        }, {
            id: 215,
            tag: "missionary (sex position)",
            kind: 2
        }, {
            id: 216,
            tag: "Ritsuko Akagi (Evangelion)",
            kind: 4
        }, {
            id: 217,
            tag: "Shinji Ikari (Evangelion)",
            kind: 4
        }, {
            id: 218,
            tag: "zombies",
            kind: 2
        }, {
            id: 219,
            tag: "Sherry Birkin (Resident Evil)",
            kind: 4
        }, {
            id: 220,
            tag: "Fairly Odd Parents",
            kind: 3
        }, {
            id: 221,
            tag: "Vicky (Fairly Odd Parents)",
            kind: 4
        }, {
            id: 222,
            tag: "Timmy Turner (Fairly Odd Parents)",
            kind: 4
        }, {
            id: 223,
            tag: "Saints Row",
            kind: 3
        }, {
            id: 224,
            tag: "Shaundi (Saints Row)",
            kind: 4
        }, {
            id: 225,
            tag: "Videl (Dragon Ball)",
            kind: 4
        }, {
            id: 226,
            tag: "Broly (Dragon Ball)",
            kind: 4
        }, {
            id: 227,
            tag: "Lulu (Final Fantasy)",
            kind: 4
        }, {
            id: 228,
            tag: "Hilda / Touko (Pokemon)",
            kind: 4
        }, {
            id: 229,
            tag: "Rosa (Pokemon)",
            kind: 4
        }, {
            id: 230,
            tag: "slave",
            kind: 2
        }, {
            id: 231,
            tag: "Rukia Kuchiki (Bleach)",
            kind: 4
        }, {
            id: 232,
            tag: "Ikkitousen / Battle Vixens",
            kind: 3
        }, {
            id: 233,
            tag: "Unchou Kan-u / Kanu (Ikkitousen)",
            kind: 4
        }, {
            id: 234,
            tag: "Raikage (Naruto)",
            kind: 4
        }, {
            id: 235,
            tag: "clones",
            kind: 2
        }, {
            id: 236,
            tag: "Samui (Naruto)",
            kind: 4
        }, {
            id: 237,
            tag: "Highschool of the Dead / HOTD",
            kind: 3
        }, {
            id: 238,
            tag: "Saeko Busujima (Highschool of the Dead)",
            kind: 4
        }, {
            id: 239,
            tag: "ecchi",
            kind: 2
        }, {
            id: 240,
            tag: "Nonnude",
            kind: 2
        }, {
            id: 241,
            tag: "Dragon's Crown",
            kind: 3
        }, {
            id: 242,
            tag: "Sorceress (Dragon's Crown)",
            kind: 4
        }, {
            id: 243,
            tag: "bathroom",
            kind: 2
        }, {
            id: 244,
            tag: "Momonosuke (One Piece)",
            kind: 4
        }, {
            id: 245,
            tag: "succubus",
            kind: 2
        }, {
            id: 246,
            tag: "Zetsu",
            kind: 2
        }, {
            id: 247,
            tag: "Spike Spiegel (Cowboy Bebop)",
            kind: 4
        }, {
            id: 248,
            tag: "Edward (Cowboy Bebop)",
            kind: 4
        }, {
            id: 249,
            tag: "Shizuka Marikawa (Highschool of the Dead)",
            kind: 4
        }, {
            id: 250,
            tag: "foursome",
            kind: 2
        }, {
            id: 251,
            tag: "The Legend of Zelda",
            kind: 3
        }, {
            id: 252,
            tag: "Link (Legend of Zelda)",
            kind: 4
        }, {
            id: 253,
            tag: "Princess Zelda (Legend of Zelda)",
            kind: 4
        }, {
            id: 254,
            tag: "stockings / pantyhose",
            kind: 2
        }, {
            id: 255,
            tag: "high heels",
            kind: 2
        }, {
            id: 256,
            tag: "double anal",
            kind: 2
        }, {
            id: 257,
            tag: "Kasuga (Sengoku BASARA)",
            kind: 4
        }, {
            id: 258,
            tag: "Mei Terumi (Naruto)",
            kind: 4
        }, {
            id: 259,
            tag: "Aki Nijou (Maken-Ki)",
            kind: 4
        }, {
            id: 260,
            tag: "Jessica Rabbit",
            kind: 4
        }, {
            id: 261,
            tag: "Black Canary (DC Comics)",
            kind: 4
        }, {
            id: 262,
            tag: "Super Smash Bros",
            kind: 3
        }, {
            id: 263,
            tag: "Wii Fit Trainer (Super Smash Bros.)",
            kind: 4
        }, {
            id: 264,
            tag: "sketch",
            kind: 2
        }, {
            id: 265,
            tag: "cunnilingus / pussy licking",
            kind: 2
        }, {
            id: 266,
            tag: "World of Warcraft",
            kind: 3
        }, {
            id: 267,
            tag: "Draenei (Warcraft)",
            kind: 4
        }, {
            id: 268,
            tag: "Night Elf (Warcraft)",
            kind: 4
        }, {
            id: 269,
            tag: "bdsm",
            kind: 2
        }, {
            id: 270,
            tag: "X-Men / Xmen",
            kind: 3
        }, {
            id: 271,
            tag: "Marvel",
            kind: 3
        }, {
            id: 272,
            tag: "Rogue / Marie D'Ancanto (X-Men)",
            kind: 4
        }, {
            id: 273,
            tag: "Apocalypse / En Sabah Nur (Marvel)",
            kind: 4
        }, {
            id: 274,
            tag: "Gray Fullbuster (Fairy Tail)",
            kind: 4
        }, {
            id: 275,
            tag: "bunnysuit / bunny suit",
            kind: 2
        }, {
            id: 276,
            tag: "catsuit / cat suit",
            kind: 2
        }, {
            id: 277,
            tag: "Code Geass",
            kind: 3
        }, {
            id: 278,
            tag: "Kallen Kozuki (Code Geass)",
            kind: 4
        }, {
            id: 279,
            tag: "Milly Ashford (Code Geass)",
            kind: 4
        }, {
            id: 280,
            tag: "latex",
            kind: 2
        }, {
            id: 281,
            tag: "leather",
            kind: 2
        }, {
            id: 282,
            tag: "corset",
            kind: 2
        }, {
            id: 283,
            tag: "slutty",
            kind: 2
        }, {
            id: 284,
            tag: "Arkham Asylum",
            kind: 3
        }, {
            id: 285,
            tag: "Nosferatuzod",
            kind: 1
        }, {
            id: 286,
            tag: "Selphie Tilmitt (Final Fanatasy)",
            kind: 4
        }, {
            id: 287,
            tag: "Oerba Dia Vanille (Final Fantasy)",
            kind: 4
        }, {
            id: 288,
            tag: "Xena (Warrior Princess)",
            kind: 4
        }, {
            id: 289,
            tag: "schoolgirl",
            kind: 2
        }, {
            id: 290,
            tag: "Aqua (Kingdom Hearts)",
            kind: 4
        }, {
            id: 291,
            tag: "Master Eraqus (Kingdom Hearts)",
            kind: 4
        }, {
            id: 292,
            tag: "Yen Sid (Kingdom Hearts)",
            kind: 4
        }, {
            id: 293,
            tag: "Master Xehanort (Kingdom Hearts)",
            kind: 4
        }, {
            id: 294,
            tag: "inusen666",
            kind: 1
        }, {
            id: 295,
            tag: "Yuna (Final Fantasy)",
            kind: 4
        }, {
            id: 296,
            tag: "Garnet / Dagger / Sarah (Final Fantasy)",
            kind: 4
        }, {
            id: 297,
            tag: "Rydia (Final Fantasy)",
            kind: 4
        }, {
            id: 298,
            tag: "Minerva Orlando (Fairy Tail)",
            kind: 4
        }, {
            id: 299,
            tag: "Tony Tony Chopper (One Piece)",
            kind: 4
        }, {
            id: 300,
            tag: "stand carry (sex position)",
            kind: 2
        }, {
            id: 301,
            tag: "Ultraman (DC Comics)",
            kind: 4
        }, {
            id: 302,
            tag: "Superwoman (DC Comics)",
            kind: 4
        }, {
            id: 303,
            tag: "posing",
            kind: 2
        }, {
            id: 304,
            tag: "masturbation / masturbate",
            kind: 2
        }, {
            id: 305,
            tag: "Olette (Kingdom Hearts)",
            kind: 4
        }, {
            id: 306,
            tag: "Namine (Kingdom Hearts)",
            kind: 4
        }, {
            id: 307,
            tag: "swimsuit",
            kind: 2
        }, {
            id: 308,
            tag: "Saya Takagi (Highschool of the Dead)",
            kind: 4
        }, {
            id: 309,
            tag: "Rei Miyamoto (Highschool of the Dead)",
            kind: 4
        }, {
            id: 310,
            tag: "JH",
            kind: 1
        }, {
            id: 311,
            tag: "Masaki Kurosaki (Bleach)",
            kind: 4
        }, {
            id: 312,
            tag: "Kon (Bleach)",
            kind: 4
        }, {
            id: 313,
            tag: "forest",
            kind: 2
        }, {
            id: 314,
            tag: "outdoors",
            kind: 2
        }, {
            id: 315,
            tag: "reverse cowgirl (sex position)",
            kind: 2
        }, {
            id: 316,
            tag: "Overlord",
            kind: 3
        }, {
            id: 317,
            tag: "Succubus Eye (Fairy Tail)",
            kind: 4
        }, {
            id: 318,
            tag: "Kick Ass",
            kind: 3
        }, {
            id: 319,
            tag: "Hit-Girl / Mindy McCready (Kick Ass)",
            kind: 4
        }, {
            id: 320,
            tag: "panels",
            kind: 2
        }, {
            id: 321,
            tag: "Iceman / Bobby Drake (X-Men)",
            kind: 4
        }, {
            id: 322,
            tag: "Emma Frost / White Queen (Marvel)",
            kind: 4
        }, {
            id: 323,
            tag: "Goku (Dragon Ball)",
            kind: 4
        }, {
            id: 324,
            tag: "Temari (Naruto)",
            kind: 4
        }, {
            id: 325,
            tag: "Boa Hancock (One Piece)",
            kind: 4
        }, {
            id: 326,
            tag: "Sanji (One Piece)",
            kind: 4
        }, {
            id: 327,
            tag: "Flare Corona (Fairy Tail)",
            kind: 4
        }, {
            id: 328,
            tag: "Rouge the Bat (Sonic)",
            kind: 4
        }, {
            id: 329,
            tag: "Jean Grey / Phoenix (X-Men)",
            kind: 4
        }, {
            id: 330,
            tag: "Kagura Mikazuchi (Fairy Tail)",
            kind: 4
        }, {
            id: 331,
            tag: "Ultear Milkovich (Fairy Tail)",
            kind: 4
        }, {
            id: 332,
            tag: "Arch Demon (Dragon's Crown)",
            kind: 4
        }, {
            id: 333,
            tag: "tears",
            kind: 2
        }, {
            id: 334,
            tag: "Master Roshi (Dragon Ball)",
            kind: 4
        }, {
            id: 335,
            tag: "Android 18 (DBZ)",
            kind: 4
        }, {
            id: 336,
            tag: "Britney Spears (celebrity)",
            kind: 4
        }, {
            id: 337,
            tag: "Roronoa Zoro (One Piece)",
            kind: 4
        }, {
            id: 338,
            tag: "Monkey D. Luffy",
            kind: 4
        }, {
            id: 339,
            tag: "Karui (Naruto)",
            kind: 4
        }, {
            id: 340,
            tag: "Mabui (Naruto)",
            kind: 4
        }, {
            id: 341,
            tag: "Kisuke Urahara",
            kind: 4
        }, {
            id: 342,
            tag: "Yoruichi Shihoin (Bleach)",
            kind: 4
        }, {
            id: 343,
            tag: "double vaginal",
            kind: 2
        }, {
            id: 344,
            tag: "Gildarts Clive (Fairy Tail)",
            kind: 4
        }, {
            id: 345,
            tag: "Cana Alberona (Fairy Tail)",
            kind: 4
        }, {
            id: 346,
            tag: "beach",
            kind: 2
        }, {
            id: 347,
            tag: "scissoring",
            kind: 2
        }, {
            id: 348,
            tag: "Juvia Lockser (Fairy Tail)",
            kind: 4
        }, {
            id: 349,
            tag: "bondage",
            kind: 2
        }, {
            id: 350,
            tag: "Ichigo Kurosaki (Bleach)",
            kind: 4
        }, {
            id: 351,
            tag: "Hitsugaya Toshiro (Bleach)",
            kind: 4
        }, {
            id: 352,
            tag: "Tier Harribel (Bleach)",
            kind: 4
        }, {
            id: 353,
            tag: "Nelliel Tu Odelschwanck (Bleach)",
            kind: 4
        }, {
            id: 354,
            tag: "Gohan (Dragon Ball)",
            kind: 4
        }, {
            id: 355,
            tag: "Hercule / Mr. Satan (Dragon Ball)",
            kind: 4
        }, {
            id: 356,
            tag: "Sadi-chan (One Piece)",
            kind: 4
        }, {
            id: 357,
            tag: "Domino (One Piece)",
            kind: 4
        }, {
            id: 358,
            tag: "wishmasterz",
            kind: 1
        }, {
            id: 359,
            tag: "Asuma Sarutobi (Naruto)",
            kind: 4
        }, {
            id: 360,
            tag: "Kurenai Yuhi (Naruto)",
            kind: 4
        }, {
            id: 361,
            tag: "Sailor Moon",
            kind: 3
        }, {
            id: 362,
            tag: "Tuxedo Mask / Mamoru Chiba (Sailor Moon)",
            kind: 4
        }, {
            id: 363,
            tag: "Sophitia (Soulcalibur)",
            kind: 4
        }, {
            id: 364,
            tag: "Chun-Li (Street Fighter)",
            kind: 4
        }, {
            id: 365,
            tag: "Fingering",
            kind: 2
        }, {
            id: 366,
            tag: "Beelzebub",
            kind: 3
        }, {
            id: 367,
            tag: "Yolda (Beelzebub)",
            kind: 4
        }, {
            id: 368,
            tag: "Hilda (Beelzebub)",
            kind: 4
        }, {
            id: 369,
            tag: "Monet (One Piece)",
            kind: 4
        }, {
            id: 370,
            tag: "hotsprings",
            kind: 2
        }, {
            id: 371,
            tag: "Laxus Dreyar (Fairy Tail)",
            kind: 4
        }, {
            id: 372,
            tag: "semen",
            kind: 2
        }, {
            id: 373,
            tag: "Meredy (Fairy Tail)",
            kind: 4
        }, {
            id: 375,
            tag: "Ashley Graham (Resident Evil)",
            kind: 4
        }, {
            id: 376,
            tag: "Bitores Mendez (Resident Evil)",
            kind: 4
        }, {
            id: 377,
            tag: "Perona (One Piece)",
            kind: 4
        }, {
            id: 378,
            tag: "WHentai Tan",
            kind: 1
        }, {
            id: 379,
            tag: "WHentai Tan",
            kind: 2
        }, {
            id: 380,
            tag: "Dota",
            kind: 2
        }, {
            id: 381,
            tag: "Anti-Mage (Dota 2)",
            kind: 4
        }, {
            id: 382,
            tag: "Chichi (Dargon Ball)",
            kind: 4
        }, {
            id: 383,
            tag: "strapon / strap-on",
            kind: 2
        }, {
            id: 384,
            tag: "penis",
            kind: 2
        }, {
            id: 385,
            tag: "Shizune (Naruto)",
            kind: 4
        }, {
            id: 386,
            tag: "Hiashi Hyuga (Naruto)",
            kind: 4
        }, {
            id: 387,
            tag: "Tayuya (Naruto)",
            kind: 4
        }, {
            id: 388,
            tag: "sperm",
            kind: 2
        }, {
            id: 389,
            tag: "Sebastian",
            kind: 1
        }, {
            id: 390,
            tag: "Tidus (Final Fantasy)",
            kind: 4
        }, {
            id: 391,
            tag: "Magi",
            kind: 3
        }, {
            id: 392,
            tag: "Morgiana (Magi)",
            kind: 4
        }, {
            id: 393,
            tag: "Kougyoku Ren (Magi)",
            kind: 4
        }, {
            id: 394,
            tag: "Yamraiha (Magi)",
            kind: 4
        }, {
            id: 395,
            tag: "Beast (Disney)",
            kind: 4
        }, {
            id: 396,
            tag: "Belle (Disney)",
            kind: 4
        }, {
            id: 397,
            tag: "nurse",
            kind: 2
        }, {
            id: 398,
            tag: "cosplay",
            kind: 2
        }, {
            id: 399,
            tag: "Yu-Gi-Oh!",
            kind: 3
        }, {
            id: 400,
            tag: "Tea Gardner (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 401,
            tag: "Johnny Steps (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 402,
            tag: "bath",
            kind: 2
        }, {
            id: 403,
            tag: "Akame ga Kill!",
            kind: 3
        }, {
            id: 404,
            tag: "Devil May Cry",
            kind: 3
        }, {
            id: 405,
            tag: "Lady / Mary (Devil May Cry)",
            kind: 4
        }, {
            id: 406,
            tag: "spit roast (sex position)",
            kind: 2
        }, {
            id: 407,
            tag: "group",
            kind: 2
        }, {
            id: 408,
            tag: "Cloud Strife (Final Fantasy)",
            kind: 4
        }, {
            id: 409,
            tag: "Don Corneo (Final Fantasy)",
            kind: 4
        }, {
            id: 410,
            tag: "Orihime Inoue (Bleach)",
            kind: 4
        }, {
            id: 411,
            tag: "Kaname Tosen / Tousen (Bleach)",
            kind: 4
        }, {
            id: 412,
            tag: "Fullmetal Alchemist",
            kind: 3
        }, {
            id: 413,
            tag: "Edward Elric (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 414,
            tag: "Lust (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 415,
            tag: "Lisanna Strauss (Fairy Tail)",
            kind: 4
        }, {
            id: 416,
            tag: "Lollipop Chainsaw",
            kind: 3
        }, {
            id: 417,
            tag: "Juliet Starling (Lollipop Chainsaw)",
            kind: 4
        }, {
            id: 418,
            tag: "Lightning (Final Fantasy)",
            kind: 4
        }, {
            id: 419,
            tag: "Karin (Naruto)",
            kind: 4
        }, {
            id: 420,
            tag: "Mito Uzumaki (Naruto)",
            kind: 4
        }, {
            id: 421,
            tag: "Golden Axe",
            kind: 3
        }, {
            id: 422,
            tag: "Death Adder (Golden Axe)",
            kind: 4
        }, {
            id: 423,
            tag: "Jacqueline Natla (Lara Croft)",
            kind: 4
        }, {
            id: 424,
            tag: "Ada Wong (Resident Evil)",
            kind: 4
        }, {
            id: 425,
            tag: "Bayonetta",
            kind: 3
        }, {
            id: 426,
            tag: "Bayonetta / Cereza (character)",
            kind: 4
        }, {
            id: 427,
            tag: "Cervantes de Leon (Soulcalibur)",
            kind: 4
        }, {
            id: 428,
            tag: "RedberZ",
            kind: 1
        }, {
            id: 429,
            tag: "Ben 10",
            kind: 3
        }, {
            id: 430,
            tag: "Looma Red Wind (Ben 10)",
            kind: 4
        }, {
            id: 431,
            tag: "Ben Tennyson (Ben 10)",
            kind: 4
        }, {
            id: 432,
            tag: "Trish (Devil May Cry)",
            kind: 4
        }, {
            id: 433,
            tag: "Kat (Devil May Cry)",
            kind: 4
        }, {
            id: 434,
            tag: "Misty (Pokemon)",
            kind: 4
        }, {
            id: 435,
            tag: "May (Pokemon)",
            kind: 4
        }, {
            id: 436,
            tag: "Dawn (Pokemon)",
            kind: 4
        }, {
            id: 437,
            tag: "Cammy (Street Fighter)",
            kind: 4
        }, {
            id: 438,
            tag: "Larxene (Kingdom Hearts)",
            kind: 4
        }, {
            id: 439,
            tag: "Jeanne (Bayonetta)",
            kind: 4
        }, {
            id: 440,
            tag: "Luca Goers (Final Fantasy)",
            kind: 4
        }, {
            id: 441,
            tag: "M. Bison (Street Fighter)",
            kind: 4
        }, {
            id: 442,
            tag: "Guilty Gear",
            kind: 3
        }, {
            id: 443,
            tag: "Lili / Emilie de Rochefort (Street Fighter X Tekke",
            kind: 4
        }, {
            id: 444,
            tag: "Mary (Street Fighter)",
            kind: 4
        }, {
            id: 445,
            tag: "Midna / Midona (Legend of Zelda)",
            kind: 4
        }, {
            id: 446,
            tag: "Agitha (Legends of Zelda)",
            kind: 4
        }, {
            id: 447,
            tag: "Street Fighter X Tekken",
            kind: 3
        }, {
            id: 448,
            tag: "Asuka Kazama (Street Fighter X Tekken)",
            kind: 4
        }, {
            id: 449,
            tag: "Jin Kazama (Street Fighter X Tekken)",
            kind: 4
        }, {
            id: 450,
            tag: "Overwatch",
            kind: 3
        }, {
            id: 451,
            tag: "Rose (Overlord)",
            kind: 4
        }, {
            id: 452,
            tag: "Velvet (Overlord)",
            kind: 4
        }, {
            id: 453,
            tag: "Ashley Williams (Mass Effect)",
            kind: 4
        }, {
            id: 454,
            tag: "Tali'Zorah nar Rayya (Mass Effect)",
            kind: 4
        }, {
            id: 455,
            tag: "Reit",
            kind: 1
        }, {
            id: 456,
            tag: "Oerba Yun Fang (Final Fantasy)",
            kind: 4
        }, {
            id: 457,
            tag: "Amazon (Dragon's Crown)",
            kind: 4
        }, {
            id: 458,
            tag: "Elf (Dragon's Crown)",
            kind: 4
        }, {
            id: 459,
            tag: "Agent Xero (Modifyers)",
            kind: 4
        }, {
            id: 460,
            tag: "Rose (Street Fighter)",
            kind: 4
        }, {
            id: 461,
            tag: "Gundam 00",
            kind: 3
        }, {
            id: 462,
            tag: "Karen Joshua (Gundam)",
            kind: 4
        }, {
            id: 463,
            tag: "uniform",
            kind: 2
        }, {
            id: 464,
            tag: "Attack on Titan / Shingeki no Kyojin",
            kind: 3
        }, {
            id: 465,
            tag: "Mikasa Ackerman (Attack on Titan)",
            kind: 4
        }, {
            id: 466,
            tag: "Valkyria Chronicles",
            kind: 3
        }, {
            id: 467,
            tag: "Deadman Wonderland",
            kind: 3
        }, {
            id: 468,
            tag: "Elfman Strauss (Fairy Tail)",
            kind: 4
        }, {
            id: 469,
            tag: "Anko Mitarashi (Naruto)",
            kind: 4
        }, {
            id: 470,
            tag: "High School DxD",
            kind: 3
        }, {
            id: 471,
            tag: "Rias Gremory (High School DxD)",
            kind: 4
        }, {
            id: 472,
            tag: "Xenovia Quarta (High School DxD)",
            kind: 4
        }, {
            id: 473,
            tag: "Issei Hyoudou (High School DxD)",
            kind: 4
        }, {
            id: 474,
            tag: "Akeno Himejima (High School DxD)",
            kind: 4
        }, {
            id: 475,
            tag: "Grayfia Lucifuge (High School DxD)",
            kind: 4
        }, {
            id: 476,
            tag: "Sengoku BASARA",
            kind: 3
        }, {
            id: 477,
            tag: "Samurai Warriors",
            kind: 3
        }, {
            id: 478,
            tag: "Nene (Samurai Warriors)",
            kind: 4
        }, {
            id: 479,
            tag: "Serena / Yvonne (Pokemon)",
            kind: 4
        }, {
            id: 480,
            tag: "Tashigi (One Piece)",
            kind: 4
        }, {
            id: 481,
            tag: "halloween",
            kind: 2
        }, {
            id: 482,
            tag: "Mako (Korra)",
            kind: 4
        }, {
            id: 483,
            tag: "Bolin (Korra)",
            kind: 4
        }, {
            id: 484,
            tag: "Teen Titans",
            kind: 3
        }, {
            id: 485,
            tag: "Raven (Teen Titans)",
            kind: 4
        }, {
            id: 486,
            tag: "Slade (Teen Titans)",
            kind: 4
        }, {
            id: 487,
            tag: "Red X (Teen Titans)",
            kind: 4
        }, {
            id: 488,
            tag: "Faye Valentine / Reagan (Cowboy Bebop)",
            kind: 4
        }, {
            id: 489,
            tag: "Jet Black (Cowboy Bebop)",
            kind: 4
        }, {
            id: 490,
            tag: "Total Drama",
            kind: 3
        }, {
            id: 491,
            tag: "Bridgette (Total Drama)",
            kind: 4
        }, {
            id: 492,
            tag: "Gwen (Total Drama)",
            kind: 4
        }, {
            id: 493,
            tag: "Courtney (Total Drama)",
            kind: 4
        }, {
            id: 494,
            tag: "Ifrit (Final Fantasy)",
            kind: 4
        }, {
            id: 495,
            tag: "Incredibles",
            kind: 3
        }, {
            id: 496,
            tag: "Catwoman (DC Comics)",
            kind: 4
        }, {
            id: 497,
            tag: "Helen Parr (Incredibles)",
            kind: 4
        }, {
            id: 498,
            tag: "Christie Monteiro (Tekken)",
            kind: 4
        }, {
            id: 499,
            tag: "Kneesocks (Panty & Stocking with Garterbelt)",
            kind: 4
        }, {
            id: 500,
            tag: "Akuma (Street Fighter)",
            kind: 4
        }, {
            id: 501,
            tag: "Ogre (Street Fighter x Tekken)",
            kind: 4
        }, {
            id: 502,
            tag: "Bouncywild (Kingdom Hearts)",
            kind: 4
        }, {
            id: 503,
            tag: "Fortuneteller (Kingdom Hearts)",
            kind: 4
        }, {
            id: 504,
            tag: "Starfire (Teen Titans)",
            kind: 4
        }, {
            id: 505,
            tag: "Asuka Connell (Fairy Tail)",
            kind: 4
        }, {
            id: 506,
            tag: "Misato Katsuragi (Evangelion)",
            kind: 4
        }, {
            id: 507,
            tag: "Rei Ayanami (Evangelion)",
            kind: 4
        }, {
            id: 508,
            tag: "Ninja Gaiden",
            kind: 3
        }, {
            id: 509,
            tag: "Ryu Hayabusa (Ninja Gaiden)",
            kind: 4
        }, {
            id: 510,
            tag: "pirates",
            kind: 2
        }, {
            id: 511,
            tag: "Queen's Blade",
            kind: 3
        }, {
            id: 512,
            tag: "Cattleya (Queen's Blade)",
            kind: 4
        }, {
            id: 513,
            tag: "Left 4 Dead / L4D",
            kind: 3
        }, {
            id: 514,
            tag: "Zoey (Left 4 Dead)",
            kind: 4
        }, {
            id: 515,
            tag: "nuns",
            kind: 2
        }, {
            id: 516,
            tag: "Taki (Soulcalibur)",
            kind: 4
        }, {
            id: 517,
            tag: "Slayers",
            kind: 3
        }, {
            id: 518,
            tag: "Lina Inverse (Slayers)",
            kind: 4
        }, {
            id: 519,
            tag: "Captain Ginyu (Dragon Ball)",
            kind: 4
        }, {
            id: 520,
            tag: "Tim Drake / Robin (DC Comics)",
            kind: 4
        }, {
            id: 521,
            tag: "Skarlet (Street Fighter vs. Mortal Kombat)",
            kind: 4
        }, {
            id: 522,
            tag: "Witch Craft Works / WcW",
            kind: 3
        }, {
            id: 523,
            tag: "Kasumi Takamiya (Witch Craft Works)",
            kind: 4
        }, {
            id: 524,
            tag: "Madam Shyarly (One Piece)",
            kind: 4
        }, {
            id: 525,
            tag: "Mileena",
            kind: 4
        }, {
            id: 526,
            tag: "Sheeva",
            kind: 4
        }, {
            id: 527,
            tag: "Akiza Izinski / Aki Izayoi (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 528,
            tag: "Alexis Rhodes (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 529,
            tag: "Claw Reacher (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 530,
            tag: "Sky Scout / Harpie's Brother (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 531,
            tag: "Kuribon (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 532,
            tag: "Man-Eater Bug (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 533,
            tag: "Julia Chang (Tekken)",
            kind: 4
        }, {
            id: 534,
            tag: "Konan (Naruto)",
            kind: 4
        }, {
            id: 535,
            tag: "riffsandskulls",
            kind: 1
        }, {
            id: 536,
            tag: "69 + 1",
            kind: 2
        }, {
            id: 537,
            tag: "Dark Magician Girl (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 538,
            tag: "Queen's Knight (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 539,
            tag: "Inque (Batman / DC Comics)",
            kind: 4
        }, {
            id: 540,
            tag: "dangernivs",
            kind: 1
        }, {
            id: 541,
            tag: "Kakashi Hatake (Naruto)",
            kind: 4
        }, {
            id: 542,
            tag: "Rock Lee (Naruto)",
            kind: 4
        }, {
            id: 543,
            tag: "Black Lagoon",
            kind: 3
        }, {
            id: 544,
            tag: "Revy (Black Lagoon)",
            kind: 4
        }, {
            id: 545,
            tag: "Poison (Street Fighter)",
            kind: 4
        }, {
            id: 546,
            tag: "Dimaria Yesta",
            kind: 4
        }, {
            id: 547,
            tag: "tentacles",
            kind: 2
        }, {
            id: 548,
            tag: "kissing",
            kind: 2
        }, {
            id: 549,
            tag: "Takashi Komuro (Highschool of the Dead)",
            kind: 4
        }, {
            id: 550,
            tag: "Kohta Hirano (Highschool of the Dead)",
            kind: 4
        }, {
            id: 551,
            tag: "Marcus Damon (Digimon)",
            kind: 4
        }, {
            id: 552,
            tag: "Sarah Damon (Digimon)",
            kind: 4
        }, {
            id: 553,
            tag: "Quistis Trepe (Final Fantasy)",
            kind: 4
        }, {
            id: 554,
            tag: "GI Joe",
            kind: 3
        }, {
            id: 555,
            tag: "Cover Girl (GI Joe)",
            kind: 4
        }, {
            id: 556,
            tag: "Baroness (GI Joe)",
            kind: 4
        }, {
            id: 557,
            tag: "Lady Jaye (GI Joe)",
            kind: 4
        }, {
            id: 558,
            tag: "Bulla (Dragon Ball)",
            kind: 4
        }, {
            id: 559,
            tag: "Paine (Final Fantasy)",
            kind: 4
        }, {
            id: 560,
            tag: "minotaurs",
            kind: 2
        }, {
            id: 561,
            tag: "Katara (Avatar)",
            kind: 4
        }, {
            id: 562,
            tag: "Mikumo Kushinada (HSDK)",
            kind: 4
        }, {
            id: 563,
            tag: "Leonidas I (Spartaaaa)",
            kind: 4
        }, {
            id: 564,
            tag: "Vegeta (Dragon Ball)",
            kind: 4
        }, {
            id: 565,
            tag: "Rosario + Vampire",
            kind: 3
        }, {
            id: 566,
            tag: "Moka Akashiya / Inner Moka / Outer Moka (Rosario +",
            kind: 4
        }, {
            id: 567,
            tag: "Xmas / Christmas",
            kind: 2
        }, {
            id: 568,
            tag: "Yugito Nii (Naruto)",
            kind: 4
        }, {
            id: 569,
            tag: "Fu / Fuu (Naruto)",
            kind: 4
        }, {
            id: 570,
            tag: "WitchBlade",
            kind: 3
        }, {
            id: 571,
            tag: "Batgirl / Cassandra Cain (DC Comics)",
            kind: 4
        }, {
            id: 572,
            tag: "Bass Armstrong (Dead or Alive)",
            kind: 4
        }, {
            id: 573,
            tag: "Jaycee (Tekken)",
            kind: 4
        }, {
            id: 574,
            tag: "Wet",
            kind: 2
        }, {
            id: 575,
            tag: "shower",
            kind: 2
        }, {
            id: 576,
            tag: "Fantastic Four",
            kind: 3
        }, {
            id: 577,
            tag: "Mister Fantastic (Fantastic Four)",
            kind: 4
        }, {
            id: 578,
            tag: "Human Torch (Fantastic Four)",
            kind: 4
        }, {
            id: 579,
            tag: 'Invisible Woman / Susan "Sue" Storm Richards (Fant',
            kind: 4
        }, {
            id: 580,
            tag: "Portgas D. Ace (One Piece)",
            kind: 4
        }, {
            id: 581,
            tag: "Totally Spies",
            kind: 3
        }, {
            id: 582,
            tag: "Sam (Totally Spies)",
            kind: 4
        }, {
            id: 583,
            tag: "Alex (Totally Spies)",
            kind: 4
        }, {
            id: 584,
            tag: "Clover (Totally Spies)",
            kind: 4
        }, {
            id: 585,
            tag: "Disgaea",
            kind: 3
        }, {
            id: 586,
            tag: "Etna (Disgaea)",
            kind: 4
        }, {
            id: 587,
            tag: "Ty Lee (Avatar)",
            kind: 4
        }, {
            id: 588,
            tag: "Retsu Unohana (Bleach)",
            kind: 4
        }, {
            id: 589,
            tag: "Ganondorf (Legend of Zelda)",
            kind: 4
        }, {
            id: 590,
            tag: "TitFlaviy",
            kind: 1
        }, {
            id: 591,
            tag: "Danny Phantom",
            kind: 3
        }, {
            id: 592,
            tag: "Danny Phantom (character)",
            kind: 4
        }, {
            id: 593,
            tag: "Madeline Maddie Fenton (Danny Phantom)",
            kind: 4
        }, {
            id: 594,
            tag: "Dash Parr (Incredibles)",
            kind: 4
        }, {
            id: 595,
            tag: "Isshin Kurosaki",
            kind: 4
        }, {
            id: 596,
            tag: "Kim Possible",
            kind: 3
        }, {
            id: 597,
            tag: "Kim / Kimberly Ann Possible",
            kind: 4
        }, {
            id: 598,
            tag: "Monkey Fist (Kim Possible)",
            kind: 4
        }, {
            id: 599,
            tag: "Dr. Drakken (Kim Possible)",
            kind: 4
        }, {
            id: 600,
            tag: "Ling Xiaoyu (Tekken)",
            kind: 4
        }, {
            id: 601,
            tag: "Melpha (Queen's Blade)",
            kind: 4
        }, {
            id: 602,
            tag: "Layla Heartfilia (Fairy Tail)",
            kind: 4
        }, {
            id: 603,
            tag: "Sheva Alomar (Resident Evil)",
            kind: 4
        }, {
            id: 604,
            tag: "Marguerite (One Piece)",
            kind: 4
        }, {
            id: 605,
            tag: "Kukaku Shiba",
            kind: 4
        }, {
            id: 606,
            tag: "Dragon Quest",
            kind: 3
        }, {
            id: 607,
            tag: "Jessica Albert (Dragon Quest)",
            kind: 4
        }, {
            id: 608,
            tag: "Kid Icarus: Uprising",
            kind: 3
        }, {
            id: 609,
            tag: "Medusa (Kid Icarus: Uprising)",
            kind: 4
        }, {
            id: 610,
            tag: "Pit (Kid Icarus: Uprising)",
            kind: 4
        }, {
            id: 611,
            tag: "Infinite Stratos / IS",
            kind: 3
        }, {
            id: 612,
            tag: "Laura Bodewig (Infinite Stratos)",
            kind: 4
        }, {
            id: 613,
            tag: "Charlotte Dunois (Infinite Stratos)",
            kind: 4
        }, {
            id: 614,
            tag: "Cecilia Alcott (Infinite Stratos)",
            kind: 4
        }, {
            id: 615,
            tag: "Krillin (Dragon Ball)",
            kind: 4
        }, {
            id: 616,
            tag: "Saint Seiya",
            kind: 3
        }, {
            id: 617,
            tag: "Fire Emblem",
            kind: 3
        }, {
            id: 618,
            tag: "Lucina (Fire Emblem)",
            kind: 4
        }, {
            id: 619,
            tag: "Tharja (Fire Emblem)",
            kind: 4
        }, {
            id: 620,
            tag: "handcuffs",
            kind: 2
        }, {
            id: 621,
            tag: "Usopp (One Piece)",
            kind: 4
        }, {
            id: 622,
            tag: "facesitting",
            kind: 2
        }, {
            id: 623,
            tag: "glasses",
            kind: 2
        }, {
            id: 624,
            tag: "Nomo",
            kind: 1
        }, {
            id: 625,
            tag: "Edea Kramer (Final Fantasy)",
            kind: 4
        }, {
            id: 626,
            tag: "Winry Rockbell (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 627,
            tag: "Kyubi / Kurama (Naruto)",
            kind: 4
        }, {
            id: 628,
            tag: "Rikku (Final Fantasy)",
            kind: 4
        }, {
            id: 629,
            tag: "Fay (Legend of Zelda)",
            kind: 4
        }, {
            id: 630,
            tag: "Tsuruhime (Sengoku BASARA)",
            kind: 4
        }, {
            id: 631,
            tag: "Leina Vance (Queen's Blade)",
            kind: 4
        }, {
            id: 632,
            tag: "Azuma (Fairy Tail)",
            kind: 4
        }, {
            id: 633,
            tag: "League of Legends / LoL",
            kind: 3
        }, {
            id: 634,
            tag: "Miss Fortune (League of Legends)",
            kind: 4
        }, {
            id: 635,
            tag: "Reiner Braun (Shingeki no Kyojin)",
            kind: 4
        }, {
            id: 636,
            tag: "Annie Leonhart (Attack on Titan)",
            kind: 4
        }, {
            id: 637,
            tag: "Lelouch Lamperouge vi Britannia (Code Geass)",
            kind: 4
        }, {
            id: 638,
            tag: "Zatanna Zatara (DC Comics)",
            kind: 4
        }, {
            id: 639,
            tag: "Aladdin",
            kind: 3
        }, {
            id: 640,
            tag: "Jasmine (Aladdin)",
            kind: 4
        }, {
            id: 641,
            tag: "kitsune999",
            kind: 1
        }, {
            id: 642,
            tag: "Minato Namikaze (Naruto)",
            kind: 4
        }, {
            id: 643,
            tag: "Sahashi Minato (Sekirei)",
            kind: 4
        }, {
            id: 644,
            tag: "Musubi (Sekirei)",
            kind: 4
        }, {
            id: 645,
            tag: "Tsukiumi (Sekirei)",
            kind: 4
        }, {
            id: 646,
            tag: "Kazehana (Sekirei)",
            kind: 4
        }, {
            id: 647,
            tag: "Uzume (Sekirei)",
            kind: 4
        }, {
            id: 648,
            tag: "Tatsuki Arisawa (Bleach)",
            kind: 4
        }, {
            id: 649,
            tag: "retroraul",
            kind: 1
        }, {
            id: 650,
            tag: "InuYasha",
            kind: 3
        }, {
            id: 651,
            tag: "Sango (InuYasha)",
            kind: 4
        }, {
            id: 652,
            tag: "fisting",
            kind: 2
        }, {
            id: 653,
            tag: "Sherry Blendy (Fairy Tail)",
            kind: 4
        }, {
            id: 654,
            tag: "Lyon Vastia (Fairy Tail)",
            kind: 4
        }, {
            id: 655,
            tag: "mosnter",
            kind: 2
        }, {
            id: 656,
            tag: "milking / lactation",
            kind: 2
        }, {
            id: 657,
            tag: "Metal Slug",
            kind: 3
        }, {
            id: 658,
            tag: "Bowser",
            kind: 4
        }, {
            id: 659,
            tag: "Shuma-Gorath",
            kind: 4
        }, {
            id: 660,
            tag: "Tibbers (League of Legends)",
            kind: 4
        }, {
            id: 661,
            tag: "Fio Germi (Metal Slug)",
            kind: 4
        }, {
            id: 662,
            tag: "Shanks (One Piece)",
            kind: 4
        }, {
            id: 663,
            tag: "vagina",
            kind: 2
        }, {
            id: 664,
            tag: "Risty (Queen's Blade)",
            kind: 4
        }, {
            id: 665,
            tag: "Black Cat / Felicia Hardy (Marvel)",
            kind: 4
        }, {
            id: 666,
            tag: "Flash",
            kind: 4
        }, {
            id: 667,
            tag: "Deadpool / Wade Wilson (Marvel)",
            kind: 4
        }, {
            id: 668,
            tag: "Doctor Doom (Marvel)",
            kind: 4
        }, {
            id: 669,
            tag: "James (Pokemon)",
            kind: 4
        }, {
            id: 670,
            tag: "classroom",
            kind: 2
        }, {
            id: 671,
            tag: "library",
            kind: 2
        }, {
            id: 672,
            tag: "halfnude",
            kind: 2
        }, {
            id: 673,
            tag: "Renji Abarai (Bleach)",
            kind: 4
        }, {
            id: 674,
            tag: "AJ Lee (Wrestler)",
            kind: 4
        }, {
            id: 675,
            tag: "brunette",
            kind: 2
        }, {
            id: 676,
            tag: "Franceska Mila Rose (Bleach)",
            kind: 4
        }, {
            id: 677,
            tag: "Shirahoshi (One Piece)",
            kind: 4
        }, {
            id: 678,
            tag: "Aina Sahalim (Gundam)",
            kind: 4
        }, {
            id: 679,
            tag: "afrobull",
            kind: 1
        }, {
            id: 680,
            tag: "Shauna (Pokemon)",
            kind: 4
        }, {
            id: 681,
            tag: "Shiemi Moriyama (Ao no Exorcist)",
            kind: 4
        }, {
            id: 682,
            tag: "Shura Kirigakure (Ao no Exorcist)",
            kind: 4
        }, {
            id: 683,
            tag: "Parkdale",
            kind: 1
        }, {
            id: 684,
            tag: "Metal Gear",
            kind: 3
        }, {
            id: 685,
            tag: "Laughing Octopus (Metal Gear)",
            kind: 4
        }, {
            id: 686,
            tag: "Raging Raven (Metal Gear)",
            kind: 4
        }, {
            id: 687,
            tag: "Screaming Mantis (Metal Gear)",
            kind: 4
        }, {
            id: 688,
            tag: "Crying Wolf (Metal Gear)",
            kind: 4
        }, {
            id: 689,
            tag: "Samara (Mass Effect)",
            kind: 4
        }, {
            id: 690,
            tag: "Tangled",
            kind: 3
        }, {
            id: 691,
            tag: "Rapunzel (Tangled)",
            kind: 4
        }, {
            id: 692,
            tag: "Tauren",
            kind: 2
        }, {
            id: 693,
            tag: "Launch (Dragon Ball)",
            kind: 4
        }, {
            id: 694,
            tag: "Naruko (character)",
            kind: 4
        }, {
            id: 695,
            tag: "hentaimaster88",
            kind: 1
        }, {
            id: 696,
            tag: "Girls Bravo",
            kind: 3
        }, {
            id: 697,
            tag: "Yukinari Sasaki (Girls Bravo)",
            kind: 4
        }, {
            id: 698,
            tag: "Kirie Kojima (Girls Bravo)",
            kind: 4
        }, {
            id: 699,
            tag: "dankwart",
            kind: 1
        }, {
            id: 700,
            tag: "gym",
            kind: 2
        }, {
            id: 701,
            tag: "Powerpuff Girls",
            kind: 3
        }, {
            id: 702,
            tag: "Virtua Fighter",
            kind: 3
        }, {
            id: 703,
            tag: "Mary Ryan / Blue Mary (KOF)",
            kind: 4
        }, {
            id: 704,
            tag: "Ace Attorney",
            kind: 3
        }, {
            id: 705,
            tag: "Athena Cykes (Ace Attorney)",
            kind: 4
        }, {
            id: 706,
            tag: "Apollo Justice (Ace Attorney)",
            kind: 4
        }, {
            id: 707,
            tag: "Tempesta (Fairy Tail)",
            kind: 4
        }, {
            id: 708,
            tag: "Silver Fullbuster (Fairy Tail)",
            kind: 4
        }, {
            id: 709,
            tag: "MidoriChan",
            kind: 1
        }, {
            id: 710,
            tag: "booze",
            kind: 2
        }, {
            id: 711,
            tag: "Bacchus Groh (Fairy Tail)",
            kind: 4
        }, {
            id: 712,
            tag: "Xenosaga",
            kind: 3
        }, {
            id: 713,
            tag: "KOS-MOS (Xenosaga)",
            kind: 4
        }, {
            id: 714,
            tag: "Tengen Toppa Gurren Lagann",
            kind: 3
        }, {
            id: 715,
            tag: "Yoko Littner / Ritona (Tengen Toppa Gurren Lagann)",
            kind: 4
        }, {
            id: 716,
            tag: "Kurumu Kurono (Rosario + Vampire)",
            kind: 4
        }, {
            id: 717,
            tag: "Miroku (InuYasha)",
            kind: 4
        }, {
            id: 718,
            tag: "Kagome Higurashi (InuYasha)",
            kind: 4
        }, {
            id: 719,
            tag: "Inuyasha (character)",
            kind: 4
        }, {
            id: 720,
            tag: "Tartarus",
            kind: 2
        }, {
            id: 721,
            tag: "Rebecca (One Piece)",
            kind: 4
        }, {
            id: 722,
            tag: "Viola (One Piece)",
            kind: 4
        }, {
            id: 723,
            tag: "Alice in Wonderland",
            kind: 3
        }, {
            id: 724,
            tag: "Elsa (Frozen)",
            kind: 4
        }, {
            id: 725,
            tag: "Alice (Alice in Wonderland)",
            kind: 4
        }, {
            id: 726,
            tag: "Shao Kahn",
            kind: 4
        }, {
            id: 727,
            tag: "Buttercup (PowerPuff Girls)",
            kind: 4
        }, {
            id: 728,
            tag: "Blossom (PowerPuff Girls)",
            kind: 4
        }, {
            id: 729,
            tag: "Bubbles (PowerPuff Girls)",
            kind: 4
        }, {
            id: 730,
            tag: "DKIR",
            kind: 1
        }, {
            id: 731,
            tag: "Dan Straight (Fairy Tail)",
            kind: 4
        }, {
            id: 732,
            tag: "pool",
            kind: 2
        }, {
            id: 733,
            tag: "Miqote / Miqo'te (race)",
            kind: 2
        }, {
            id: 734,
            tag: "Brothers Conflict",
            kind: 3
        }, {
            id: 735,
            tag: "Hitomi (Dead or Alive)",
            kind: 4
        }, {
            id: 736,
            tag: "Hinata Ema (Brothers Conflict)",
            kind: 4
        }, {
            id: 737,
            tag: "Mikoto Uchiha (Naruto)",
            kind: 4
        }, {
            id: 738,
            tag: "C.C. (Code Geass)",
            kind: 4
        }, {
            id: 739,
            tag: "Natsu (Soulcalibur)",
            kind: 4
        }, {
            id: 740,
            tag: "Gerp",
            kind: 1
        }, {
            id: 741,
            tag: "Arlong (One Piece)",
            kind: 4
        }, {
            id: 742,
            tag: "Mushroom octopus",
            kind: 1
        }, {
            id: 743,
            tag: "Nurse Joy (Pokemon)",
            kind: 4
        }, {
            id: 744,
            tag: "Samurai Jack",
            kind: 3
        }, {
            id: 745,
            tag: "Professor Utonium (Powerpuff Girls)",
            kind: 4
        }, {
            id: 746,
            tag: "Sfan",
            kind: 1
        }, {
            id: 747,
            tag: "Vocaloid",
            kind: 3
        }, {
            id: 748,
            tag: "Vestrille",
            kind: 1
        }, {
            id: 749,
            tag: "Megurine Luka (Vocaloid)",
            kind: 4
        }, {
            id: 750,
            tag: "Horizon in the Middle of Nowhere / Kyoukai Senjou",
            kind: 3
        }, {
            id: 751,
            tag: "Nate Mitotsudaira (Kyoukai Senjou no Horizon)",
            kind: 4
        }, {
            id: 752,
            tag: "Viola (Soulcalibur)",
            kind: 4
        }, {
            id: 753,
            tag: "Horizon Ariadust (Horizon in the Middle of Nowhere",
            kind: 4
        }, {
            id: 754,
            tag: "Ayaka Kagari (Witch Craft Works)",
            kind: 4
        }, {
            id: 755,
            tag: "Honoka Takamiya (Witch Craft Works)",
            kind: 4
        }, {
            id: 756,
            tag: "Fist of the North Star / Hokuto no Ken",
            kind: 3
        }, {
            id: 757,
            tag: "Kenshiro (North Star)",
            kind: 4
        }, {
            id: 758,
            tag: "Mamiya (North Star)",
            kind: 4
        }, {
            id: 759,
            tag: "toys",
            kind: 2
        }, {
            id: 760,
            tag: "church",
            kind: 2
        }, {
            id: 761,
            tag: "Dynasty Warriors",
            kind: 3
        }, {
            id: 762,
            tag: "Diaochan (Dynasty Warriors)",
            kind: 4
        }, {
            id: 763,
            tag: "Zhang Chunhua (Dynasty Warriors)",
            kind: 4
        }, {
            id: 764,
            tag: "Bao Sanniang (Dynasty Warriors)",
            kind: 4
        }, {
            id: 765,
            tag: "lingerie",
            kind: 2
        }, {
            id: 766,
            tag: "mature",
            kind: 2
        }, {
            id: 767,
            tag: "Koneko Toujou (High School DxD)",
            kind: 4
        }, {
            id: 768,
            tag: "History's Strongest Disciple Kenichi / HSDK",
            kind: 3
        }, {
            id: 769,
            tag: "Renka Ma (HSDK)",
            kind: 4
        }, {
            id: 770,
            tag: "Shigure Kosaka (HSDK)",
            kind: 4
        }, {
            id: 771,
            tag: "Miu Furinji (HSDK)",
            kind: 4
        }, {
            id: 772,
            tag: "Kenichi Shirahama (HSDK)",
            kind: 4
        }, {
            id: 773,
            tag: "Haku (Naruto)",
            kind: 4
        }, {
            id: 774,
            tag: "Devil Jin (Tekken)",
            kind: 4
        }, {
            id: 775,
            tag: "Gasper Vladi (High School DxD)",
            kind: 4
        }, {
            id: 776,
            tag: "Baby 5 (One Piece)",
            kind: 4
        }, {
            id: 777,
            tag: "Supergirl / Kara Zor-El (Superman/Batman)",
            kind: 4
        }, {
            id: 778,
            tag: "Gwen Tennyson (Ben 10)",
            kind: 4
        }, {
            id: 779,
            tag: "cheerleader",
            kind: 2
        }, {
            id: 780,
            tag: "Leifang (Dead or Alive)",
            kind: 4
        }, {
            id: 781,
            tag: "Marie Rose (Dead or Alive)",
            kind: 4
        }, {
            id: 782,
            tag: "comics",
            kind: 2
        }, {
            id: 783,
            tag: "Demons",
            kind: 2
        }, {
            id: 784,
            tag: "Ahsoka Tano / Ashoka Tano (Star Wars)",
            kind: 4
        }, {
            id: 785,
            tag: "NopeAvi",
            kind: 1
        }, {
            id: 786,
            tag: "Drakengard",
            kind: 3
        }, {
            id: 787,
            tag: "Zero (Drakengard)",
            kind: 4
        }, {
            id: 788,
            tag: "webcam",
            kind: 2
        }, {
            id: 789,
            tag: "Record of Agarest War",
            kind: 3
        }, {
            id: 790,
            tag: "Maoyuu Maou Yuusha",
            kind: 3
        }, {
            id: 791,
            tag: "Valeria Raglan",
            kind: 4
        }, {
            id: 792,
            tag: "Demon King",
            kind: 4
        }, {
            id: 793,
            tag: "Rosarita Roberta Cisneros (Black Lagoon)",
            kind: 4
        }, {
            id: 794,
            tag: "Young Justice",
            kind: 3
        }, {
            id: 795,
            tag: "Hulk / Bruce Banner (Marvel)",
            kind: 4
        }, {
            id: 796,
            tag: "X-23 / Laura Kinney (Marvel)",
            kind: 4
        }, {
            id: 797,
            tag: "Kitty Pryde / Shadowcat (X-men)",
            kind: 4
        }, {
            id: 798,
            tag: "yggdrasill",
            kind: 1
        }, {
            id: 799,
            tag: "Jenny Realight (Fairy Tail)",
            kind: 4
        }, {
            id: 800,
            tag: "swaying",
            kind: 2
        }, {
            id: 801,
            tag: "Claire Redfield (Resident Evil)",
            kind: 4
        }, {
            id: 802,
            tag: "Librarian",
            kind: 2
        }, {
            id: 803,
            tag: "Headmaster",
            kind: 2
        }, {
            id: 804,
            tag: "Break Blade",
            kind: 3
        }, {
            id: 805,
            tag: "Freezing",
            kind: 3
        }, {
            id: 806,
            tag: "Satellizer L. Bridget (Freezing)",
            kind: 4
        }, {
            id: 807,
            tag: "Sigyn Erster (Break Blade)",
            kind: 4
        }, {
            id: 808,
            tag: "Assassin's Creed",
            kind: 3
        }, {
            id: 809,
            tag: "Edward Kenway (Assassin's Creed)",
            kind: 4
        }, {
            id: 810,
            tag: "Bambietta Basterbine (Bleach)",
            kind: 4
        }, {
            id: 811,
            tag: "Hakufu Sonsaku (Ikkitousen)",
            kind: 4
        }, {
            id: 812,
            tag: "Shimei Ryomou (Ikkitousen)",
            kind: 4
        }, {
            id: 813,
            tag: "Battletoads",
            kind: 3
        }, {
            id: 814,
            tag: "Dark Queen (Battletoads)",
            kind: 4
        }, {
            id: 815,
            tag: "Hange / Hanji Zoe (Shingeki no Kyojin)",
            kind: 4
        }, {
            id: 816,
            tag: "Eren Yeager (Shingeki no Kyojin)",
            kind: 4
        }, {
            id: 817,
            tag: "Aurora (Disney)",
            kind: 4
        }, {
            id: 818,
            tag: "teacher",
            kind: 2
        }, {
            id: 819,
            tag: "To-LOVE-ru",
            kind: 3
        }, {
            id: 820,
            tag: "Tearju Lunatique (To-LOVE-ru)",
            kind: 4
        }, {
            id: 821,
            tag: "Medaka Box",
            kind: 3
        }, {
            id: 822,
            tag: "Medaka Kurokami (Medaka Box)",
            kind: 4
        }, {
            id: 823,
            tag: "Zenkichi Hitoyoshi (Medaka Box)",
            kind: 4
        }, {
            id: 824,
            tag: "Illusion Studios",
            kind: 1
        }, {
            id: 825,
            tag: "Yuri",
            kind: 2
        }, {
            id: 826,
            tag: "Kill la kill / KLK",
            kind: 3
        }, {
            id: 827,
            tag: "Ryuko Matoi / Ryuuko Matoi (KIll la Kill)",
            kind: 4
        }, {
            id: 828,
            tag: "Satsuki Kiryuin (Kill la Kill)",
            kind: 4
        }, {
            id: 829,
            tag: "Ventus (Kingdom Hearts)",
            kind: 4
        }, {
            id: 830,
            tag: "Terra (Kingdom Hearts)",
            kind: 4
        }, {
            id: 831,
            tag: "cock",
            kind: 2
        }, {
            id: 832,
            tag: "Usagi Tsukino / Sailor Moon",
            kind: 4
        }, {
            id: 833,
            tag: "Jean Kirstein (Shingeki no Kyojin)",
            kind: 4
        }, {
            id: 834,
            tag: "futanari",
            kind: 2
        }, {
            id: 835,
            tag: "Ragyo Kiryuin (Kill la Kill)",
            kind: 4
        }, {
            id: 836,
            tag: "Angel (King of Fighters)",
            kind: 4
        }, {
            id: 837,
            tag: "Angel (Tekken)",
            kind: 4
        }, {
            id: 838,
            tag: "sunbathing",
            kind: 2
        }, {
            id: 839,
            tag: "Balalaika (Black Lagoon)",
            kind: 4
        }, {
            id: 840,
            tag: "Koala (One Piece)",
            kind: 4
        }, {
            id: 841,
            tag: "massive cock",
            kind: 2
        }, {
            id: 842,
            tag: "Avengers",
            kind: 3
        }, {
            id: 843,
            tag: "Black Widow / Natasha Romanova (Avengers)",
            kind: 4
        }, {
            id: 844,
            tag: "Pepper Potts (Iron-Man / Marvel)",
            kind: 4
        }, {
            id: 845,
            tag: "Mary Jane Watson (Spider-Man)",
            kind: 4
        }, {
            id: 846,
            tag: "BlackFox",
            kind: 1
        }, {
            id: 847,
            tag: "public",
            kind: 2
        }, {
            id: 848,
            tag: "Palutena (Kid Icarus: Uprising)",
            kind: 4
        }, {
            id: 849,
            tag: "Erodraw",
            kind: 1
        }, {
            id: 850,
            tag: "Scooby Doo",
            kind: 3
        }, {
            id: 851,
            tag: "Daphne Blake (Scooby Doo)",
            kind: 4
        }, {
            id: 852,
            tag: "Pikachu (Pokemon)",
            kind: 4
        }, {
            id: 853,
            tag: "Cynthia (Pokemon)",
            kind: 4
        }, {
            id: 854,
            tag: "Millianna (Fairy Tail)",
            kind: 4
        }, {
            id: 855,
            tag: "Ao no Exorcist / Blue Exorcist",
            kind: 3
        }, {
            id: 856,
            tag: "Izumo Kamiki (Ao no Exorcist)",
            kind: 4
        }, {
            id: 857,
            tag: "Rin Okumura (Ao no Exorcist)",
            kind: 4
        }, {
            id: 858,
            tag: "Alibaba Saluja (Magi)",
            kind: 4
        }, {
            id: 859,
            tag: "sucking",
            kind: 2
        }, {
            id: 860,
            tag: "groping / grope",
            kind: 2
        }, {
            id: 861,
            tag: "Nefertari Vivi (One Piece)",
            kind: 4
        }, {
            id: 862,
            tag: "Dominion Tank Police",
            kind: 3
        }, {
            id: 863,
            tag: "Puma Twins / Sisters (Dominion Tank Police)",
            kind: 4
        }, {
            id: 864,
            tag: "bayushiart",
            kind: 1
        }, {
            id: 865,
            tag: "Ruby Tojo / Ruby Toujo (Rosario + Vampire)",
            kind: 4
        }, {
            id: 866,
            tag: "Akua Shuzen (Rosario + Vampire)",
            kind: 4
        }, {
            id: 867,
            tag: "Kimahri Ronso",
            kind: 4
        }, {
            id: 868,
            tag: "striptease",
            kind: 2
        }, {
            id: 869,
            tag: "Snow White",
            kind: 4
        }, {
            id: 870,
            tag: "Tophatharry",
            kind: 1
        }, {
            id: 871,
            tag: "Kaguya Otsutsuki (Naruto)",
            kind: 4
        }, {
            id: 872,
            tag: "(Monster Musume)",
            kind: 3
        }, {
            id: 873,
            tag: "121gigawatts",
            kind: 1
        }, {
            id: 874,
            tag: "hairy",
            kind: 2
        }, {
            id: 875,
            tag: "thighs",
            kind: 2
        }, {
            id: 876,
            tag: "Haganai / Boku wa Tomodachi ga Sukunai",
            kind: 3
        }, {
            id: 877,
            tag: "Kodaka Hasegawa (Haganai)",
            kind: 4
        }, {
            id: 878,
            tag: "Sena Kashiwazaki (Haganai)",
            kind: 4
        }, {
            id: 879,
            tag: "Keith (Fairy Tail)",
            kind: 4
        }, {
            id: 880,
            tag: "Delia Ketchum (Pokemon)",
            kind: 4
        }, {
            id: 881,
            tag: "Yukino Aguria (Fairy Tail)",
            kind: 4
        }, {
            id: 882,
            tag: "underwater",
            kind: 2
        }, {
            id: 883,
            tag: "Levy McGarden (Fairy Tail)",
            kind: 4
        }, {
            id: 884,
            tag: "Riddler (Batman)",
            kind: 4
        }, {
            id: 885,
            tag: "Rossweisse (High School DxD)",
            kind: 4
        }, {
            id: 886,
            tag: "hotdogging / assjob",
            kind: 2
        }, {
            id: 887,
            tag: "Suisei no Gargantia",
            kind: 3
        }, {
            id: 888,
            tag: "Bellows (Suisei no Gargantia)",
            kind: 4
        }, {
            id: 889,
            tag: "Cobra (Fairy Tail)",
            kind: 4
        }, {
            id: 890,
            tag: "Tomoe (Queen's Blade)",
            kind: 4
        }, {
            id: 891,
            tag: "American Dad",
            kind: 3
        }, {
            id: 892,
            tag: "American Dragon",
            kind: 3
        }, {
            id: 893,
            tag: "Hatsune Miku (Vocaloid)",
            kind: 4
        }, {
            id: 894,
            tag: "Sona Sitri (High School DxD)",
            kind: 4
        }, {
            id: 895,
            tag: "Roxas (Kingdom Hearts)",
            kind: 4
        }, {
            id: 896,
            tag: "Axel (Kingdom Hearts)",
            kind: 4
        }, {
            id: 897,
            tag: "Superboy / Conner Kent / Kon-El (DC Comics)",
            kind: 4
        }, {
            id: 898,
            tag: "xxxbattery",
            kind: 1
        }, {
            id: 899,
            tag: "Ariel (the Mermaid)",
            kind: 4
        }, {
            id: 900,
            tag: "Opal (Korra)",
            kind: 4
        }, {
            id: 901,
            tag: "Maken-Ki",
            kind: 3
        }, {
            id: 902,
            tag: "Tenchi Muyo!",
            kind: 3
        }, {
            id: 903,
            tag: "Ryoko Hakubi (Tenchi Muyo)",
            kind: 4
        }, {
            id: 904,
            tag: "Tenchi Masaki (Tenchi Muyo)",
            kind: 4
        }, {
            id: 905,
            tag: "Kazane Kagari (Witch Craft Works)",
            kind: 4
        }, {
            id: 906,
            tag: "Fairy Dragon",
            kind: 1
        }, {
            id: 907,
            tag: "Esdeath (Akame ga Kill)",
            kind: 4
        }, {
            id: 908,
            tag: "traumwelt",
            kind: 1
        }, {
            id: 909,
            tag: "Tokugawa Ieyasu (Sengoku BASARA)",
            kind: 4
        }, {
            id: 910,
            tag: "Saika Magoichi (Sengoku BASARA)",
            kind: 4
        }, {
            id: 911,
            tag: "Wendy Marvell (Fairy Tail)",
            kind: 4
        }, {
            id: 912,
            tag: "Tatsumi (Akame Ga Kill)",
            kind: 4
        }, {
            id: 913,
            tag: "GAB",
            kind: 1
        }, {
            id: 914,
            tag: "Shion (Naruto)",
            kind: 4
        }, {
            id: 915,
            tag: "Vice (King of Fighters)",
            kind: 4
        }, {
            id: 916,
            tag: "Jam Kuradoberi (Guilty Gear)",
            kind: 4
        }, {
            id: 917,
            tag: "GlanceReviver",
            kind: 1
        }, {
            id: 918,
            tag: "Giselle Gewelle (Bleach)",
            kind: 4
        }, {
            id: 919,
            tag: "butt-plug",
            kind: 2
        }, {
            id: 920,
            tag: "Ms. Marvel / Miss Marvel (Marvel)",
            kind: 4
        }, {
            id: 921,
            tag: "Jazz Fenton (Danny Phantom)",
            kind: 4
        }, {
            id: 922,
            tag: 'Danielle "Dani" Phantom (Danny Phantom)',
            kind: 4
        }, {
            id: 923,
            tag: "Dusk Maiden of Amnesia / Tasogare Otome x Amnesia",
            kind: 3
        }, {
            id: 924,
            tag: "Yuuko Kanoe (Tasogare Otome x Amnesia)",
            kind: 4
        }, {
            id: 925,
            tag: "Teiichi Niiya (Tasogare Otome x Amnesia)",
            kind: 4
        }, {
            id: 926,
            tag: "Sword Art Online",
            kind: 3
        }, {
            id: 927,
            tag: "Kirito (Sword Art Online)",
            kind: 4
        }, {
            id: 928,
            tag: "Yuuki Asuna (Sword Art Online)",
            kind: 4
        }, {
            id: 929,
            tag: "hospital",
            kind: 2
        }, {
            id: 930,
            tag: "Erza Knightwalker (Fairy Tail)",
            kind: 4
        }, {
            id: 931,
            tag: "Panty & Stocking with Garterbelt / PSG",
            kind: 3
        }, {
            id: 932,
            tag: "Panty (Panty & Stocking with Garterbelt)",
            kind: 4
        }, {
            id: 933,
            tag: "Stocking (Panty & Stocking with Garterbelt)",
            kind: 4
        }, {
            id: 934,
            tag: "Black Cauldron",
            kind: 3
        }, {
            id: 935,
            tag: "Eilonwy (Disney)",
            kind: 4
        }, {
            id: 936,
            tag: "vbecool",
            kind: 1
        }, {
            id: 937,
            tag: "Komachi Takamiya (Witch Craft Works)",
            kind: 4
        }, {
            id: 938,
            tag: "Kenpachi Zaraki (Bleach)",
            kind: 4
        }, {
            id: 939,
            tag: "Gine (Dragon Ball)",
            kind: 4
        }, {
            id: 940,
            tag: "Basquash!",
            kind: 3
        }, {
            id: 941,
            tag: "Haruka Gracia (Basquash!)",
            kind: 4
        }, {
            id: 942,
            tag: "rainbow flyer",
            kind: 1
        }, {
            id: 943,
            tag: "Impa (Legend of Zelda)",
            kind: 4
        }, {
            id: 944,
            tag: "Sheik (Legend of Zelda)",
            kind: 4
        }, {
            id: 945,
            tag: "Tsukune Aono (Rosario + Vampire)",
            kind: 4
        }, {
            id: 946,
            tag: "cageraptor",
            kind: 1
        }, {
            id: 947,
            tag: "Helena Douglas (Dead or Alive)",
            kind: 4
        }, {
            id: 948,
            tag: "Chris Redfield (Resident Evil)",
            kind: 4
        }, {
            id: 949,
            tag: "tongue",
            kind: 2
        }, {
            id: 950,
            tag: "Lana (Legend of Zelda)",
            kind: 4
        }, {
            id: 951,
            tag: "Aria T'Loak / T'Lok (Mass Effect)",
            kind: 4
        }, {
            id: 952,
            tag: "MADProject",
            kind: 1
        }, {
            id: 953,
            tag: "Gajeel Redfox (Fairy Tail)",
            kind: 4
        }, {
            id: 954,
            tag: "Mt. Gagazet",
            kind: 4
        }, {
            id: 955,
            tag: "Kurohime",
            kind: 3
        }, {
            id: 956,
            tag: "Kurohime / Black Princess (character)",
            kind: 4
        }, {
            id: 957,
            tag: "beads",
            kind: 2
        }, {
            id: 958,
            tag: "Noah (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 959,
            tag: "Rose Thomas (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 960,
            tag: "Gundam Build Fighters",
            kind: 3
        }, {
            id: 961,
            tag: "Rinko Iori (Gundam Build Fighters)",
            kind: 4
        }, {
            id: 962,
            tag: "Naotora Ii (Samurai Warriors)",
            kind: 4
        }, {
            id: 963,
            tag: "No / Lady No / Noh (Samurai Warriors)",
            kind: 4
        }, {
            id: 964,
            tag: "MasterDragonUnlimited",
            kind: 1
        }, {
            id: 965,
            tag: "seivz",
            kind: 1
        }, {
            id: 966,
            tag: "Croc Sx",
            kind: 1
        }, {
            id: 967,
            tag: "Madan no ou to Vanadis / Lord Marksman and Vanadi",
            kind: 3
        }, {
            id: 968,
            tag: "Tigrevurmud Vorn (Madan no ou to Vanadis)",
            kind: 4
        }, {
            id: 969,
            tag: "Eleonora Viltaria (Madan no ou to Vanadis)",
            kind: 4
        }, {
            id: 970,
            tag: "Looney Tunes",
            kind: 3
        }, {
            id: 971,
            tag: "Patricia Bunny (Loony Tunes)",
            kind: 4
        }, {
            id: 972,
            tag: "orgasm",
            kind: 2
        }, {
            id: 973,
            tag: "Debora Briscoletti (Dragon Quest)",
            kind: 4
        }, {
            id: 974,
            tag: "Limlisha (Madan no Ou to Vanadis)",
            kind: 4
        }, {
            id: 975,
            tag: "ZinZero",
            kind: 1
        }, {
            id: 976,
            tag: "Helena Harper (Resident Evil)",
            kind: 4
        }, {
            id: 977,
            tag: "T.U.F.F. Puppy",
            kind: 3
        }, {
            id: 978,
            tag: "Modifyers",
            kind: 3
        }, {
            id: 979,
            tag: "Kitty Katswell (T.U.F.F. Puppy)",
            kind: 4
        }, {
            id: 980,
            tag: "cheating",
            kind: 2
        }, {
            id: 981,
            tag: "Shura (Soulcalibur)",
            kind: 4
        }, {
            id: 982,
            tag: "Arachne Gorgon (Soul Eater)",
            kind: 4
        }, {
            id: 983,
            tag: "Medusa Gorgon (Soul Eater)",
            kind: 4
        }, {
            id: 984,
            tag: "Boa Sandersonia (One Piece)",
            kind: 4
        }, {
            id: 985,
            tag: "Suikoden",
            kind: 3
        }, {
            id: 986,
            tag: "Kasumi (Suikoden)",
            kind: 4
        }, {
            id: 987,
            tag: "P'Li (Avatar)",
            kind: 4
        }, {
            id: 988,
            tag: "Ming-Hua (Avatar)",
            kind: 4
        }, {
            id: 989,
            tag: "Kuvira (Avatar)",
            kind: 4
        }, {
            id: 990,
            tag: "Jade (Mortal Kombat)",
            kind: 4
        }, {
            id: 991,
            tag: "Virgo / Eclipse Virgo (Fairy Tail)",
            kind: 4
        }, {
            id: 992,
            tag: "Blaise",
            kind: 1
        }, {
            id: 993,
            tag: "Family Guy",
            kind: 3
        }, {
            id: 994,
            tag: "Lois Griffin (Family Guy)",
            kind: 4
        }, {
            id: 995,
            tag: "Glenn Quagmire (Family Guy)",
            kind: 4
        }, {
            id: 996,
            tag: "Stan Smith (American Dad)",
            kind: 4
        }, {
            id: 997,
            tag: "Doby99",
            kind: 1
        }, {
            id: 998,
            tag: "Blackfire (Teen Titans)",
            kind: 4
        }, {
            id: 999,
            tag: "Trinity Seven",
            kind: 3
        }, {
            id: 1e3,
            tag: "Arata Kasuga (Trinity Seven)",
            kind: 4
        }, {
            id: 1001,
            tag: "Akio Fudo (Trinity Seven)",
            kind: 4
        }, {
            id: 1002,
            tag: "Big Hero 6",
            kind: 3
        }, {
            id: 1003,
            tag: "Go Go Tomago (Big Hero 6)",
            kind: 4
        }, {
            id: 1004,
            tag: "Hobb",
            kind: 1
        }, {
            id: 1005,
            tag: "Phineas and Ferb",
            kind: 3
        }, {
            id: 1006,
            tag: "Stacy Hirano (Phineas and Ferb)",
            kind: 4
        }, {
            id: 1007,
            tag: "Majikoi (Maji de Watashi ni Koi Shinasai!)",
            kind: 3
        }, {
            id: 1008,
            tag: "Momoyo Kawakami",
            kind: 4
        }, {
            id: 1009,
            tag: "Yamato Naoe",
            kind: 4
        }, {
            id: 1010,
            tag: "sex machine",
            kind: 2
        }, {
            id: 1011,
            tag: "Bartolomeo (One Piece)",
            kind: 4
        }, {
            id: 1012,
            tag: "Honey Lemon (Big Hero 6)",
            kind: 4
        }, {
            id: 1013,
            tag: "Date A Live",
            kind: 3
        }, {
            id: 1014,
            tag: "Tohka Yatogami (Date A Live)",
            kind: 4
        }, {
            id: 1015,
            tag: "Shido Itsuka (Date A Live)",
            kind: 4
        }, {
            id: 1016,
            tag: "EdJim",
            kind: 1
        }, {
            id: 1017,
            tag: "Ayeka Masaki Jurai (Tenchi Muyo)",
            kind: 4
        }, {
            id: 1018,
            tag: "messy",
            kind: 2
        }, {
            id: 1019,
            tag: "Solid Snake (Metal Gear)",
            kind: 4
        }, {
            id: 1020,
            tag: "EVA (Metal Gear)",
            kind: 4
        }, {
            id: 1021,
            tag: "Cornelia li Britannia (Code Geass)",
            kind: 4
        }, {
            id: 1022,
            tag: "Kazuya Aoi (Freezing)",
            kind: 4
        }, {
            id: 1023,
            tag: "NiNoEros",
            kind: 1
        }, {
            id: 1024,
            tag: "squirting",
            kind: 2
        }, {
            id: 1025,
            tag: "Nanatsu no Taizai / Seven Deadly Sins",
            kind: 3
        }, {
            id: 1026,
            tag: "Ban (Nanatsu no Taizai)",
            kind: 4
        }, {
            id: 1027,
            tag: "Diane (Nanatsu no Taizai)",
            kind: 4
        }, {
            id: 1028,
            tag: "Meliodas (Nanatsu no Taizai)",
            kind: 4
        }, {
            id: 1029,
            tag: "King (Nanatsu no Taizai)",
            kind: 4
        }, {
            id: 1030,
            tag: "Artemis of Bana-Mighdall (Superman/Batman)",
            kind: 4
        }, {
            id: 1031,
            tag: "Daniel Bryan (wrestler)",
            kind: 4
        }, {
            id: 1032,
            tag: "Stephanie McMahon (wrestler)",
            kind: 4
        }, {
            id: 1033,
            tag: "Watch Dogs",
            kind: 3
        }, {
            id: 1034,
            tag: "Clara Lille (Watch Dogs)",
            kind: 4
        }, {
            id: 1035,
            tag: "Darksiders",
            kind: 3
        }, {
            id: 1036,
            tag: "Kurome (Akame Ga Kill)",
            kind: 4
        }, {
            id: 1037,
            tag: "Shiro (Deadman Wonderland)",
            kind: 4
        }, {
            id: 1038,
            tag: "Marines (One Piece)",
            kind: 2
        }, {
            id: 1039,
            tag: "tiny boobs / small titties",
            kind: 2
        }, {
            id: 1040,
            tag: "Hisui E. Fiore (Fairy Tail)",
            kind: 4
        }, {
            id: 1041,
            tag: "House Of the Rising Sun",
            kind: 1
        }, {
            id: 1042,
            tag: "The Secret Saturdays",
            kind: 3
        }, {
            id: 1043,
            tag: "Drew Saturday (Secret Saturdays)",
            kind: 4
        }, {
            id: 1044,
            tag: "Ghost in the Shell",
            kind: 3
        }, {
            id: 1045,
            tag: "Major Motoko Kusanagi (Ghost in the Shell)",
            kind: 4
        }, {
            id: 1046,
            tag: "Olivier Mira Armstrong (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 1047,
            tag: "Sephiroth (Final Fantasy)",
            kind: 4
        }, {
            id: 1048,
            tag: "Shinra Troop (Final Fantasy)",
            kind: 4
        }, {
            id: 1049,
            tag: "Shinmai Maou no Keiyakusha",
            kind: 3
        }, {
            id: 1050,
            tag: "Basara Toujou (Shinmai Maou no Keiyakusha)",
            kind: 4
        }, {
            id: 1051,
            tag: "Chisato Hasegawa (Shinmai Maou no Keiyakusha)",
            kind: 4
        }, {
            id: 1052,
            tag: "Huntress (DC Comics)",
            kind: 4
        }, {
            id: 1053,
            tag: "Talia al Ghul (DC Comics)",
            kind: 4
        }, {
            id: 1054,
            tag: "Frozen",
            kind: 3
        }, {
            id: 1055,
            tag: "Rise of the Guardians",
            kind: 3
        }, {
            id: 1056,
            tag: "Jack Frost (Rise of the Guardians)",
            kind: 4
        }, {
            id: 1057,
            tag: "Killer Frost (DC Comics)",
            kind: 4
        }, {
            id: 1058,
            tag: "Akira Mado (Tokyo Ghoul)",
            kind: 4
        }, {
            id: 1059,
            tag: "Mira Yamana (Trinity Seven)",
            kind: 4
        }, {
            id: 1060,
            tag: "bbc",
            kind: 2
        }, {
            id: 1061,
            tag: "Senjumaru Shutara (Bleach)",
            kind: 4
        }, {
            id: 1062,
            tag: "Mistral (Metal Gear)",
            kind: 4
        }, {
            id: 1063,
            tag: "Elizaveta Fomina",
            kind: 4
        }, {
            id: 1064,
            tag: "Soi Fon / Sui-Feng (Bleach)",
            kind: 4
        }, {
            id: 1065,
            tag: "Yushiro Shihoin",
            kind: 4
        }, {
            id: 1066,
            tag: "Ishida Mitsunari (Sengoku BASARA)",
            kind: 4
        }, {
            id: 1067,
            tag: "Studio Oppai",
            kind: 1
        }, {
            id: 1068,
            tag: "Kitana",
            kind: 4
        }, {
            id: 1069,
            tag: "Sareena",
            kind: 4
        }, {
            id: 1070,
            tag: "spanking",
            kind: 2
        }, {
            id: 1071,
            tag: "Monsuno",
            kind: 3
        }, {
            id: 1072,
            tag: "Commandant Marshall Charlemagne (Monsuno)",
            kind: 4
        }, {
            id: 1073,
            tag: "Medea (Monsuno)",
            kind: 4
        }, {
            id: 1074,
            tag: "Bardock (Dragon ball Z / DBZ)",
            kind: 4
        }, {
            id: 1075,
            tag: "Pedroillusions",
            kind: 1
        }, {
            id: 1076,
            tag: "Raditz (Dragon Ball)",
            kind: 4
        }, {
            id: 1077,
            tag: "Sniper Wolf (Metal Gear)",
            kind: 4
        }, {
            id: 1078,
            tag: "HSDK",
            kind: 3
        }, {
            id: 1079,
            tag: "Rachel Stanley (History's Strongest Disciple Kenic",
            kind: 4
        }, {
            id: 1080,
            tag: "Hibiki Lates (Fairy Tail)",
            kind: 4
        }, {
            id: 1081,
            tag: "Masane Amaha (Witchblade)",
            kind: 4
        }, {
            id: 1082,
            tag: "Fairy Woman (Fairy Tail)",
            kind: 4
        }, {
            id: 1083,
            tag: "Teppuu / Iron Wind / Tetsufuu",
            kind: 3
        }, {
            id: 1084,
            tag: "Yuzuko Mawatori (Teppuu)",
            kind: 4
        }, {
            id: 1085,
            tag: "Aikuro Mikisugi",
            kind: 4
        }, {
            id: 1086,
            tag: "Lieselotte Sherlock (Trinity Seven)",
            kind: 4
        }, {
            id: 1087,
            tag: "rivawi",
            kind: 1
        }, {
            id: 1088,
            tag: "Princess Snake (Dragon Ball)",
            kind: 4
        }, {
            id: 1089,
            tag: "Rawart",
            kind: 1
        }, {
            id: 1090,
            tag: "Furry",
            kind: 2
        }, {
            id: 1091,
            tag: "Outlaw Star",
            kind: 3
        }, {
            id: 1092,
            tag: "Felicia (Darkstalkers)",
            kind: 4
        }, {
            id: 1093,
            tag: "Leone (Akame ga Kill)",
            kind: 4
        }, {
            id: 1094,
            tag: "Aisha Clan-Clan (Outlaw Star)",
            kind: 4
        }, {
            id: 1095,
            tag: "Hanabi Hyuga (Naruto)",
            kind: 4
        }, {
            id: 1096,
            tag: "Takeru Ohyama (Maken-Ki)",
            kind: 4
        }, {
            id: 1097,
            tag: "Angel (Fairy Tail)",
            kind: 4
        }, {
            id: 1098,
            tag: "Generator Rex",
            kind: 3
        }, {
            id: 1099,
            tag: "Breach (Generator Rex)",
            kind: 4
        }, {
            id: 1100,
            tag: "Jinx (League of Legends)",
            kind: 4
        }, {
            id: 1101,
            tag: "Ahri",
            kind: 4
        }, {
            id: 1102,
            tag: "Ned Flanders (Simpsons)",
            kind: 4
        }, {
            id: 1103,
            tag: "Maude Flanders (Simpsons)",
            kind: 4
        }, {
            id: 1104,
            tag: "Green Lantern (DC Comics)",
            kind: 4
        }, {
            id: 1105,
            tag: "sweat",
            kind: 2
        }, {
            id: 1106,
            tag: "Berserk",
            kind: 3
        }, {
            id: 1107,
            tag: "Casca (Berserk)",
            kind: 4
        }, {
            id: 1108,
            tag: "Guts (Berserk)",
            kind: 4
        }, {
            id: 1109,
            tag: "StevenUniverse",
            kind: 3
        }, {
            id: 1110,
            tag: "Stevonnie (StevenUniverse)",
            kind: 4
        }, {
            id: 1111,
            tag: "Garnet (StevenUniverse)",
            kind: 4
        }, {
            id: 1112,
            tag: "Negima!",
            kind: 3
        }, {
            id: 1113,
            tag: "Chizuru Naba (Negima!)",
            kind: 4
        }, {
            id: 1114,
            tag: "Misa Kakizaki (Negima!)",
            kind: 4
        }, {
            id: 1115,
            tag: "Ayaka Yukihiro (Negima!)",
            kind: 4
        }, {
            id: 1116,
            tag: "Miss Martian / M'gann M'orzz / Megan Morse (DC Com",
            kind: 4
        }, {
            id: 1117,
            tag: "Wally West / Kid Flash (DC Comics)",
            kind: 4
        }, {
            id: 1118,
            tag: "Aqualad / Kaldur'ahm (DC Comics)",
            kind: 4
        }, {
            id: 1119,
            tag: "Mr. Popo (Dragon Ball)",
            kind: 4
        }, {
            id: 1120,
            tag: "Fate/stay night",
            kind: 3
        }, {
            id: 1121,
            tag: "Rin Tohsaka (Fate/stay night)",
            kind: 4
        }, {
            id: 1122,
            tag: "Saber (Fate/stay night)",
            kind: 4
        }, {
            id: 1123,
            tag: "Shirou Emiya (Fate/stay night)",
            kind: 4
        }, {
            id: 1124,
            tag: "Elizabeth Liones (Nanatsu no Taizai)",
            kind: 4
        }, {
            id: 1125,
            tag: "Spiral / Rita Wayword (X-men)",
            kind: 4
        }, {
            id: 1126,
            tag: "Pandora (Danny Phantom)",
            kind: 4
        }, {
            id: 1127,
            tag: "Opal (StevenUniverse)",
            kind: 4
        }, {
            id: 1128,
            tag: "Boku no Hero Academia / My Hero Academia",
            kind: 3
        }, {
            id: 1129,
            tag: "Eruka Frog (Soul Eater)",
            kind: 4
        }, {
            id: 1130,
            tag: "Attea / Empress Attea (Ben 10)",
            kind: 4
        }, {
            id: 1131,
            tag: "Tsuyu Asui (Boku no Hero Academia)",
            kind: 4
        }, {
            id: 1132,
            tag: "bronx1287",
            kind: 1
        }, {
            id: 1133,
            tag: "viennese oyster (sex position)",
            kind: 2
        }, {
            id: 1134,
            tag: "Rhys (Borderlands)",
            kind: 4
        }, {
            id: 1135,
            tag: "Fiona (Borderlands)",
            kind: 4
        }, {
            id: 1136,
            tag: "Sasha (Borderlands)",
            kind: 4
        }, {
            id: 1137,
            tag: "Soul Evans (Soul Eater)",
            kind: 4
        }, {
            id: 1138,
            tag: "eating cum",
            kind: 2
        }, {
            id: 1139,
            tag: "Katsuki Bakugou (Boku no Hero Academia)",
            kind: 4
        }, {
            id: 1140,
            tag: "Lana Baumgartner / Bombshell (Marvel)",
            kind: 4
        }, {
            id: 1141,
            tag: "Francine Smith (American Dad)",
            kind: 4
        }, {
            id: 1142,
            tag: "Killer B / Bee (Naruto)",
            kind: 4
        }, {
            id: 1143,
            tag: "Tripping the Rift",
            kind: 3
        }, {
            id: 1144,
            tag: "Six (Tripping the Rift)",
            kind: 4
        }, {
            id: 1145,
            tag: "Pearl (StevenUniverse)",
            kind: 4
        }, {
            id: 1146,
            tag: "Gintama",
            kind: 3
        }, {
            id: 1147,
            tag: "Sakata Gintoki (Gintama)",
            kind: 4
        }, {
            id: 1148,
            tag: "Tsukuyo (Gintama)",
            kind: 4
        }, {
            id: 1149,
            tag: "Otae/Shimura Tae (Gintama)",
            kind: 4
        }, {
            id: 1150,
            tag: "Mutsu (Gintama)",
            kind: 4
        }, {
            id: 1151,
            tag: "Supreme Kai of Time (Dragon Ball Z / DBZ)",
            kind: 4
        }, {
            id: 1152,
            tag: "Padme Amidala (Star Wars)",
            kind: 4
        }, {
            id: 1153,
            tag: "Naavs",
            kind: 1
        }, {
            id: 1154,
            tag: "BeeWhyOhBee",
            kind: 1
        }, {
            id: 1155,
            tag: "KikyЕЌ (InuYasha)",
            kind: 4
        }, {
            id: 1156,
            tag: "Sai Saici (Gundam)",
            kind: 4
        }, {
            id: 1157,
            tag: "Natasha Zabigov (Gundam)",
            kind: 4
        }, {
            id: 1158,
            tag: "No More Heroes",
            kind: 3
        }, {
            id: 1159,
            tag: "chubby",
            kind: 2
        }, {
            id: 1160,
            tag: "Izumi Curtis (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 1161,
            tag: "YuYu Hakusho",
            kind: 3
        }, {
            id: 1162,
            tag: "Hiei (YuYu Hakusho)",
            kind: 4
        }, {
            id: 1163,
            tag: "HinaStudio",
            kind: 1
        }, {
            id: 1164,
            tag: "Detective Conan",
            kind: 3
        }, {
            id: 1165,
            tag: "Shinichi Kudo (Detective Conan)",
            kind: 4
        }, {
            id: 1166,
            tag: "Shizuka Hattori (Detective Conan)",
            kind: 4
        }, {
            id: 1167,
            tag: "Shrek",
            kind: 3
        }, {
            id: 1168,
            tag: "Road to El Dorado",
            kind: 3
        }, {
            id: 1169,
            tag: "How To Train Your Dragon",
            kind: 3
        }, {
            id: 1170,
            tag: "Chel (Road to El Dorado)",
            kind: 4
        }, {
            id: 1171,
            tag: "Fiona (Shrek)",
            kind: 4
        }, {
            id: 1172,
            tag: "Astrid Hofferson (How to Train Your Dragon)",
            kind: 4
        }, {
            id: 1173,
            tag: "Eri Kisaki (Detective Conan)",
            kind: 4
        }, {
            id: 1174,
            tag: "Vermouth (Detective Conan)",
            kind: 4
        }, {
            id: 1175,
            tag: "Azusa Enomoto (Detective Conan)",
            kind: 4
        }, {
            id: 1176,
            tag: "Gravitina (Buzz Lightyear)",
            kind: 4
        }, {
            id: 1177,
            tag: "Venom / Symbiote (Marvel)",
            kind: 4
        }, {
            id: 1178,
            tag: "Campione!",
            kind: 3
        }, {
            id: 1179,
            tag: "Erica Blandelli (Campione!)",
            kind: 4
        }, {
            id: 1180,
            tag: "Liliana Kranjcar (Campione!)",
            kind: 4
        }, {
            id: 1181,
            tag: "Tokyo Ghoul",
            kind: 3
        }, {
            id: 1182,
            tag: "Ken Kaneki - Tokyo Ghoul",
            kind: 4
        }, {
            id: 1183,
            tag: "Anna (Fire Emblem)",
            kind: 4
        }, {
            id: 1184,
            tag: "Robin/MyUnit (Fire Emblem)",
            kind: 4
        }, {
            id: 1185,
            tag: "Tiki (Fire Emblem)",
            kind: 4
        }, {
            id: 1186,
            tag: "Cordelia (Fire Emblem)",
            kind: 4
        }, {
            id: 1187,
            tag: "Ansatsu Kyoushitsu",
            kind: 3
        }, {
            id: 1188,
            tag: "Irina JelaviД‡ (Ansatsu Kyoushitsu)",
            kind: 4
        }, {
            id: 1189,
            tag: "Storm (X-men)",
            kind: 4
        }, {
            id: 1190,
            tag: "Gwen Stacy (Spiderman)",
            kind: 4
        }, {
            id: 1191,
            tag: "Kurusu Kimihito (Monster Musume)",
            kind: 4
        }, {
            id: 1192,
            tag: "Ms. Smith (Monster Musume)",
            kind: 4
        }, {
            id: 1193,
            tag: "Mebuki Haruno (Naruto)",
            kind: 4
        }, {
            id: 1194,
            tag: "Persona",
            kind: 3
        }, {
            id: 1195,
            tag: "Naoto Shirogane (Persona)",
            kind: 4
        }, {
            id: 1196,
            tag: "Kanji Tatsumi (Persona)",
            kind: 4
        }, {
            id: 1197,
            tag: "Tattoo",
            kind: 2
        }, {
            id: 1198,
            tag: "Zidane Tribal (Final Fantasy)",
            kind: 4
        }, {
            id: 1199,
            tag: "Kangoku Gakuen",
            kind: 3
        }, {
            id: 1200,
            tag: "Hana Midorikawa (Kangoku Gakuen)",
            kind: 4
        }, {
            id: 1201,
            tag: "Kiyoshi Fujino (Kangoku Gakuen)",
            kind: 4
        }, {
            id: 1202,
            tag: "Gaara (Naruto)",
            kind: 4
        }, {
            id: 1203,
            tag: "Tanpopo Kuraishi (Witch Craft Works)",
            kind: 4
        }, {
            id: 1204,
            tag: "Maron (Dragon Ball)",
            kind: 4
        }, {
            id: 1205,
            tag: "Kazuha Toyama (Detective Conan)",
            kind: 4
        }, {
            id: 1206,
            tag: "Ran Mouri (Detective Conan)",
            kind: 4
        }, {
            id: 1207,
            tag: "Sonoko Suzuki (Detective Conan)",
            kind: 4
        }, {
            id: 1208,
            tag: "Kogoro Mouri (Detective Conan)",
            kind: 4
        }, {
            id: 1209,
            tag: "Pregnant",
            kind: 2
        }, {
            id: 1210,
            tag: "Yusei Fudo (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 1211,
            tag: "Megami Tensei / Persona",
            kind: 3
        }, {
            id: 1212,
            tag: "Mila (Dead or Alive)",
            kind: 4
        }, {
            id: 1213,
            tag: "Chie Satonaka (Megami Tensei)",
            kind: 4
        }, {
            id: 1214,
            tag: "Okamisaga",
            kind: 1
        }, {
            id: 1352,
            tag: "Star Wars: Clone Wars",
            kind: 3
        }, {
            id: 1215,
            tag: "Ansatsu Kyoushitsu/Assassination Classroom",
            kind: 3
        }, {
            id: 1216,
            tag: "kantarella",
            kind: 1
        }, {
            id: 1217,
            tag: "Yui Uehara (Detective Conan)",
            kind: 4
        }, {
            id: 1218,
            tag: "Wataru Takagi (Detective Conan)",
            kind: 4
        }, {
            id: 1219,
            tag: "DanMachi",
            kind: 3
        }, {
            id: 1220,
            tag: "Spice & Wolf",
            kind: 3
        }, {
            id: 1221,
            tag: "Hestia (Dungeon ni Deai wo Motomeru no wa Machigat",
            kind: 4
        }, {
            id: 1222,
            tag: "Holo (Spice & Wolf)",
            kind: 4
        }, {
            id: 1223,
            tag: "Euphemia li Britannia (Code Geass)",
            kind: 4
        }, {
            id: 1224,
            tag: "DrHentai",
            kind: 1
        }, {
            id: 1225,
            tag: "Beitaier",
            kind: 1
        }, {
            id: 1226,
            tag: "Krista Lenz (Attack on Titan)",
            kind: 4
        }, {
            id: 1227,
            tag: "LadyMe",
            kind: 1
        }, {
            id: 1228,
            tag: "nesoun",
            kind: 1
        }, {
            id: 1229,
            tag: "Fooly Cooly / FLCL",
            kind: 3
        }, {
            id: 1230,
            tag: "Haruko Haruhara (Fooly Cooly)",
            kind: 4
        }, {
            id: 1231,
            tag: "panties / underwear",
            kind: 2
        }, {
            id: 1232,
            tag: "Princess Bubblegum (Adventure Time)",
            kind: 4
        }, {
            id: 1233,
            tag: "bedroom",
            kind: 2
        }, {
            id: 1234,
            tag: "Zyvo",
            kind: 1
        }, {
            id: 1235,
            tag: "Jewelry Bonney (One Piece)",
            kind: 4
        }, {
            id: 1236,
            tag: "Liltotto Lamperd / Sternritter G (Bleach)",
            kind: 4
        }, {
            id: 1237,
            tag: "neonmonkey",
            kind: 1
        }, {
            id: 1238,
            tag: "vibrator",
            kind: 2
        }, {
            id: 1239,
            tag: "Ayame (Naruto)",
            kind: 4
        }, {
            id: 1240,
            tag: "MickoDaimao",
            kind: 1
        }, {
            id: 1241,
            tag: "Aoi Kunieda (Beelzebub)",
            kind: 4
        }, {
            id: 1242,
            tag: "Tatsumi Oga (Beelzebub)",
            kind: 4
        }, {
            id: 1243,
            tag: "Evil Rick",
            kind: 1
        }, {
            id: 1244,
            tag: "Kyouka (Fairy Tail)",
            kind: 4
        }, {
            id: 1245,
            tag: "Meiko Shiraki (Kangoku Gakuen)",
            kind: 4
        }, {
            id: 1246,
            tag: "crossdressing",
            kind: 2
        }, {
            id: 1247,
            tag: "Gogeta (Dragon Ball)",
            kind: 4
        }, {
            id: 1248,
            tag: "My Little Pony",
            kind: 3
        }, {
            id: 1249,
            tag: "Gangsta",
            kind: 3
        }, {
            id: 1250,
            tag: "Worick Arcangelo (Gangsta)",
            kind: 4
        }, {
            id: 1251,
            tag: "Nicolas Brown (Gangsta)",
            kind: 4
        }, {
            id: 1252,
            tag: "Riza Hawkeye (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 1253,
            tag: "Roy Mustang (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 1254,
            tag: "Alex Louis Armstrong (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 1255,
            tag: "Ren Gyokuen (Magi)",
            kind: 4
        }, {
            id: 1256,
            tag: "Shikamaru Nara (Naruto)",
            kind: 4
        }, {
            id: 1257,
            tag: "Foster's Home for Imaginary Friends",
            kind: 3
        }, {
            id: 1258,
            tag: "Frances 'Frankie' Foster (Foster's)",
            kind: 4
        }, {
            id: 1259,
            tag: "Mac (Fosters)",
            kind: 4
        }, {
            id: 1260,
            tag: "Gowther (Nanatsu No Taizai)",
            kind: 4
        }, {
            id: 1261,
            tag: "Spider-Man / Peter Parker (Marvel)",
            kind: 4
        }, {
            id: 1262,
            tag: "Carol Danvers / Ms. Marvel (Marvel)",
            kind: 4
        }, {
            id: 1263,
            tag: "Akame (Akame Ga Kill)",
            kind: 4
        }, {
            id: 1264,
            tag: "Momo Yaoyorozu (Boku no Hero Academia)",
            kind: 4
        }, {
            id: 1265,
            tag: "All Might/Toshinori (Boku no Hero Academia)",
            kind: 4
        }, {
            id: 1266,
            tag: "Quiet (Metal Gear)",
            kind: 4
        }, {
            id: 1267,
            tag: "Log Horizon",
            kind: 3
        }, {
            id: 1268,
            tag: "Marielle (Log Horizon)",
            kind: 4
        }, {
            id: 1269,
            tag: "Henrietta (Log Horizon)",
            kind: 4
        }, {
            id: 1270,
            tag: "Evangeline A.K. McDowell (Negima!)",
            kind: 4
        }, {
            id: 1271,
            tag: "sexgazer",
            kind: 1
        }, {
            id: 1272,
            tag: "Piccolo (Dragon Ball)",
            kind: 4
        }, {
            id: 1273,
            tag: "Senran Kagura",
            kind: 3
        }, {
            id: 1274,
            tag: "penetrating",
            kind: 2
        }, {
            id: 1275,
            tag: "Seilah (Fairy Tail)",
            kind: 4
        }, {
            id: 1276,
            tag: "Welkin Gunther (Valkyria Chronicles)",
            kind: 4
        }, {
            id: 1277,
            tag: "Selvaria Bles (Valkyria Chronicles)",
            kind: 4
        }, {
            id: 1278,
            tag: "Albedo (Overlord)",
            kind: 4
        }, {
            id: 1279,
            tag: "Ainz Ooal Gown (Overlord)",
            kind: 4
        }, {
            id: 1280,
            tag: "Riruka Dokugamine (Bleach)",
            kind: 4
        }, {
            id: 1281,
            tag: "RWBY",
            kind: 3
        }, {
            id: 1282,
            tag: "Weiss Schnee (RWBY)",
            kind: 4
        }, {
            id: 1283,
            tag: "Kuroko no Basket",
            kind: 3
        }, {
            id: 1284,
            tag: "spreading",
            kind: 2
        }, {
            id: 1285,
            tag: "Diamond no Ace",
            kind: 3
        }, {
            id: 1286,
            tag: "Sawamura Eijun (Diamond no Ace)",
            kind: 4
        }, {
            id: 1287,
            tag: "Takashima Rei (Diamond no Ace)",
            kind: 4
        }, {
            id: 1288,
            tag: "Sekirei",
            kind: 3
        }, {
            id: 1289,
            tag: "xtoon",
            kind: 1
        }, {
            id: 1290,
            tag: "piercing",
            kind: 2
        }, {
            id: 1291,
            tag: "Yamada-kun",
            kind: 4
        }, {
            id: 1292,
            tag: "MonsterGirlQuest",
            kind: 3
        }, {
            id: 1293,
            tag: "D.Gray-man",
            kind: 3
        }, {
            id: 1294,
            tag: "Lenalee Lee (D.Gray-man)",
            kind: 4
        }, {
            id: 1295,
            tag: "Brandish Ој",
            kind: 4
        }, {
            id: 1296,
            tag: "Vegito (Dragon Ball)",
            kind: 4
        }, {
            id: 1297,
            tag: "Hibari (Senran Kagura)",
            kind: 4
        }, {
            id: 1298,
            tag: "R. Mika / Rainbow Mika (The Street Fighter)",
            kind: 4
        }, {
            id: 1299,
            tag: "Black Dynamite",
            kind: 3
        }, {
            id: 1300,
            tag: "Emma (Total Drama)",
            kind: 4
        }, {
            id: 1301,
            tag: "Aladdin (character)",
            kind: 4
        }, {
            id: 1302,
            tag: "Toaru Majutsu no Index / A Certain Magical Index",
            kind: 3
        }, {
            id: 1303,
            tag: "freckles",
            kind: 2
        }, {
            id: 1304,
            tag: "Rurouni Kenshin",
            kind: 3
        }, {
            id: 1305,
            tag: "Hotel Transylvania",
            kind: 3
        }, {
            id: 1306,
            tag: "Mavis (Hotel Transylvania)",
            kind: 4
        }, {
            id: 1307,
            tag: "Ikaruga (Fairy Tail)",
            kind: 4
        }, {
            id: 1308,
            tag: "Majin Buu (Dragon Ball)",
            kind: 4
        }, {
            id: 1309,
            tag: "Star Ocean",
            kind: 3
        }, {
            id: 1310,
            tag: "witch",
            kind: 2
        }, {
            id: 1311,
            tag: "Rainbow Dash (My Little Pony)",
            kind: 4
        }, {
            id: 1312,
            tag: "Barbara Gordon (Batman / DC)",
            kind: 4
        }, {
            id: 1313,
            tag: "Kagura",
            kind: 4
        }, {
            id: 1314,
            tag: "Okita Sougo",
            kind: 4
        }, {
            id: 1315,
            tag: "ebony",
            kind: 2
        }, {
            id: 1316,
            tag: "gay",
            kind: 2
        }, {
            id: 1317,
            tag: "Momo Hinamori (Bleach)",
            kind: 4
        }, {
            id: 1318,
            tag: "Silent Hill",
            kind: 3
        }, {
            id: 1319,
            tag: "Hestia (DanMachi)",
            kind: 4
        }, {
            id: 1320,
            tag: "Irina Shidou (High School DxD)",
            kind: 4
        }, {
            id: 1321,
            tag: "Yatot",
            kind: 1
        }, {
            id: 1322,
            tag: "Cowboy Tanaka",
            kind: 1
        }, {
            id: 1323,
            tag: "Noragami",
            kind: 3
        }, {
            id: 1324,
            tag: "smoking",
            kind: 2
        }, {
            id: 1325,
            tag: "Rock (Black Lagoon)",
            kind: 4
        }, {
            id: 1326,
            tag: "Cosmos (Fairy Tail)",
            kind: 4
        }, {
            id: 1327,
            tag: "Chelia Blendy (Fairy Tail)",
            kind: 4
        }, {
            id: 1328,
            tag: "Game",
            kind: 2
        }, {
            id: 1329,
            tag: "Nightwing (DC Comics)",
            kind: 4
        }, {
            id: 1330,
            tag: "Archer",
            kind: 3
        }, {
            id: 1331,
            tag: "Touka Kirishima (Tokyo Ghoul)",
            kind: 4
        }, {
            id: 1332,
            tag: "Artemisumi",
            kind: 1
        }, {
            id: 1333,
            tag: "naked",
            kind: 2
        }, {
            id: 1334,
            tag: "Sarutobi Ayame",
            kind: 4
        }, {
            id: 1335,
            tag: "Hattori Zenzo",
            kind: 4
        }, {
            id: 1336,
            tag: "Sonic the Hedgehog (Sonic)",
            kind: 4
        }, {
            id: 1337,
            tag: "H Ecchi",
            kind: 1
        }, {
            id: 1338,
            tag: "Yang Xiao Long (RWBY)",
            kind: 4
        }, {
            id: 1339,
            tag: "Bishamonten / Vaisravana (Noragami)",
            kind: 4
        }, {
            id: 1340,
            tag: "maid",
            kind: 2
        }, {
            id: 1341,
            tag: "dickgirls",
            kind: 2
        }, {
            id: 1342,
            tag: "MegaMan Legends",
            kind: 3
        }, {
            id: 1343,
            tag: "femdom",
            kind: 2
        }, {
            id: 1344,
            tag: "Sakata Kintoki",
            kind: 4
        }, {
            id: 1345,
            tag: "Qwaser of Stigmata / Seikon no Qwaser",
            kind: 3
        }, {
            id: 1346,
            tag: "Hellsing",
            kind: 3
        }, {
            id: 1347,
            tag: "Seras Victoria (Hellsing)",
            kind: 4
        }, {
            id: 1348,
            tag: "F-Zero",
            kind: 3
        }, {
            id: 1349,
            tag: "Captain Falcon (F-Zero)",
            kind: 4
        }, {
            id: 1350,
            tag: "Konohamaru Sarutobi (Naruto)",
            kind: 4
        }, {
            id: 1351,
            tag: "Karin Kurosaki (Bleach)",
            kind: 4
        }, {
            id: 1353,
            tag: "Zeref (Fairy Tail)",
            kind: 4
        }, {
            id: 1354,
            tag: "precum",
            kind: 2
        }, {
            id: 1355,
            tag: "TipodeIncognito",
            kind: 1
        }, {
            id: 1356,
            tag: "June (Avatar)",
            kind: 4
        }, {
            id: 1357,
            tag: "Sinbad (Magi)",
            kind: 4
        }, {
            id: 1358,
            tag: "Tamamo (MonsterGirlQuest)",
            kind: 4
        }, {
            id: 1359,
            tag: "Jiemma (Fairy Tail)",
            kind: 4
        }, {
            id: 1360,
            tag: "Aries (Fairy Tail)",
            kind: 4
        }, {
            id: 1361,
            tag: "Neeba",
            kind: 1
        }, {
            id: 1362,
            tag: "Hikage (Senran Kagura)",
            kind: 4
        }, {
            id: 1363,
            tag: "Housen Ryofu (Ikkitousen)",
            kind: 4
        }, {
            id: 1364,
            tag: "Hitagi Senjougahara",
            kind: 4
        }, {
            id: 1365,
            tag: "Suruga Kanbaru",
            kind: 4
        }, {
            id: 1366,
            tag: "Bakemonogatari",
            kind: 4
        }, {
            id: 1367,
            tag: "softcore",
            kind: 2
        }, {
            id: 1368,
            tag: "sleeping",
            kind: 2
        }, {
            id: 1369,
            tag: "Loke (Fairy Tail)",
            kind: 4
        }, {
            id: 1370,
            tag: "WarioWare",
            kind: 3
        }, {
            id: 1371,
            tag: "Ashley (WarioWare)",
            kind: 4
        }, {
            id: 1372,
            tag: "Trafalgar D. Water Law (One Piece)",
            kind: 4
        }, {
            id: 1373,
            tag: "bra",
            kind: 2
        }, {
            id: 1374,
            tag: "Mizore Shirayuki (Rosario + Vampire)",
            kind: 4
        }, {
            id: 1375,
            tag: "Assassin (Monday Night Combat)",
            kind: 4
        }, {
            id: 1376,
            tag: "luther955",
            kind: 1
        }, {
            id: 1377,
            tag: "Noire (Fire Emblem)",
            kind: 4
        }, {
            id: 1378,
            tag: "ExLic",
            kind: 1
        }, {
            id: 1379,
            tag: "Kirigaya Suguha / Leafa (Sword Art Online)",
            kind: 4
        }, {
            id: 1380,
            tag: "Bisca Connell (Fairy Tail)",
            kind: 4
        }, {
            id: 1381,
            tag: "ejaculation",
            kind: 2
        }, {
            id: 1382,
            tag: "funkygamer",
            kind: 1
        }, {
            id: 1383,
            tag: "Rogue Cheney",
            kind: 4
        }, {
            id: 1384,
            tag: "mishki",
            kind: 1
        }, {
            id: 1385,
            tag: "selfie",
            kind: 2
        }, {
            id: 1386,
            tag: "insertion",
            kind: 2
        }, {
            id: 1387,
            tag: "Kinana",
            kind: 4
        }, {
            id: 1388,
            tag: "ponytail",
            kind: 2
        }, {
            id: 1389,
            tag: "Solo",
            kind: 2
        }, {
            id: 1390,
            tag: "Candice Catnipp / Sternritter T (Bleach)",
            kind: 4
        }, {
            id: 1391,
            tag: "Najimi Ajimu (Medaka Box)",
            kind: 4
        }, {
            id: 1392,
            tag: "Mia Fey (Ace Attorney)",
            kind: 4
        }, {
            id: 1393,
            tag: "HentaiBunny",
            kind: 1
        }, {
            id: 1394,
            tag: "Kuroshitsuji / Black Butler",
            kind: 3
        }, {
            id: 1395,
            tag: "Lana Kane (Archer)",
            kind: 4
        }, {
            id: 1396,
            tag: "Touhou Project",
            kind: 3
        }, {
            id: 1397,
            tag: "Asuka (Senran Kagura)",
            kind: 4
        }, {
            id: 1398,
            tag: "Black Rock Shooter",
            kind: 4
        }, {
            id: 1399,
            tag: "Akatsuchi (Naruto)",
            kind: 4
        }, {
            id: 1400,
            tag: "Kurotsuchi (Naruto)",
            kind: 4
        }, {
            id: 1401,
            tag: "Lina / Slayer (DotA)",
            kind: 4
        }, {
            id: 1402,
            tag: "Sakura (Street Fighter)",
            kind: 4
        }, {
            id: 1403,
            tag: "Suki (Avatar)",
            kind: 4
        }, {
            id: 1404,
            tag: "Zuko (Avatar)",
            kind: 4
        }, {
            id: 1405,
            tag: "StriderOkami",
            kind: 1
        }, {
            id: 1407,
            tag: "stand and carry (sex position)",
            kind: 2
        }, {
            id: 1408,
            tag: "reverse stand and carry (sex position)",
            kind: 2
        }, {
            id: 1409,
            tag: "XeladuArt",
            kind: 1
        }, {
            id: 1410,
            tag: "Gardevoir (Pokemon)",
            kind: 4
        }, {
            id: 1411,
            tag: "foot worship",
            kind: 3
        }, {
            id: 1412,
            tag: "feet",
            kind: 2
        }, {
            id: 1413,
            tag: "XeladuART",
            kind: 1
        }, {
            id: 1414,
            tag: "One Punch Man",
            kind: 3
        }, {
            id: 1415,
            tag: "Takasugi Shinsuke (Gintama)",
            kind: 4
        }, {
            id: 1416,
            tag: "Ikeda Asaemon (Gintama)",
            kind: 4
        }, {
            id: 1417,
            tag: "Monster Musume",
            kind: 3
        }, {
            id: 1418,
            tag: "Brandish ? (Fairy Tail)",
            kind: 4
        }, {
            id: 1419,
            tag: "Dimaria Yesta (Fairy Tail)",
            kind: 4
        }, {
            id: 1420,
            tag: "feet licking",
            kind: 2
        }, {
            id: 1421,
            tag: "Aeeldora",
            kind: 1
        }, {
            id: 1422,
            tag: "Shouto Todoroki (Boku no Hero Academia)",
            kind: 4
        }, {
            id: 1423,
            tag: "Nene Odagari",
            kind: 4
        }, {
            id: 1424,
            tag: "Okita Sougo (Gintama)",
            kind: 4
        }, {
            id: 1425,
            tag: "Imai Nobume (Gintama)",
            kind: 4
        }, {
            id: 1426,
            tag: "The Amazing World of Gumball",
            kind: 3
        }, {
            id: 1427,
            tag: "Nicole Watterson (Gumball)",
            kind: 4
        }, {
            id: 1428,
            tag: "Sailor Jupiter / Makoto Kino (Sailor Moon)",
            kind: 4
        }, {
            id: 1429,
            tag: "Kagura (Gintama)",
            kind: 4
        }, {
            id: 1430,
            tag: "horny",
            kind: 2
        }, {
            id: 1431,
            tag: "TYPE-MOON",
            kind: 3
        }, {
            id: 1432,
            tag: "original",
            kind: 2
        }, {
            id: 1433,
            tag: "saliva",
            kind: 2
        }, {
            id: 1434,
            tag: "Domino (X-men)",
            kind: 4
        }, {
            id: 1435,
            tag: "Nemuri Kayama/Midnight (Boku no Hero Academia/My H",
            kind: 4
        }, {
            id: 1436,
            tag: "bbw",
            kind: 2
        }, {
            id: 1437,
            tag: "Suiko Tatsunagi (Cardfight!! Vanguard)",
            kind: 4
        }, {
            id: 1438,
            tag: "Maka Albarn (Soul Eater)",
            kind: 4
        }, {
            id: 1439,
            tag: "Tsubaki Nakatsukasa (Soul Eater)",
            kind: 4
        }, {
            id: 1440,
            tag: "DrIggy",
            kind: 1
        }, {
            id: 1441,
            tag: "Vega (Street Fighter)",
            kind: 4
        }, {
            id: 1442,
            tag: "Persona 5",
            kind: 3
        }, {
            id: 1443,
            tag: "Makoto Niijima (Persona 5)",
            kind: 4
        }, {
            id: 1444,
            tag: "Akira Kurusu (Persona 5)",
            kind: 4
        }, {
            id: 1445,
            tag: "Joker (Persona 5)",
            kind: 4
        }, {
            id: 1446,
            tag: "Archer (Fate/stay night)",
            kind: 4
        }, {
            id: 1447,
            tag: "Ann Takamaki (Person 5)",
            kind: 4
        }, {
            id: 1448,
            tag: "Ihaccer",
            kind: 1
        }, {
            id: 1449,
            tag: "Shimura Shinpachi (Gintama)",
            kind: 4
        }, {
            id: 1450,
            tag: "Nojiko (One Piece)",
            kind: 4
        }, {
            id: 1451,
            tag: "Eileen Belserion",
            kind: 4
        }, {
            id: 1452,
            tag: "gape",
            kind: 2
        }, {
            id: 1453,
            tag: "Melancholy of Haruhi Suzumiya",
            kind: 3
        }, {
            id: 1454,
            tag: "Haruhi Suzumiya (Melancholy of Haruhi Suzumiya)",
            kind: 4
        }, {
            id: 1455,
            tag: "Caitlyn (League of Legends)",
            kind: 4
        }, {
            id: 1456,
            tag: "Vi (League of Legends)",
            kind: 4
        }, {
            id: 1457,
            tag: "Dizzy (Guilty Gear)",
            kind: 4
        }, {
            id: 1458,
            tag: "Sol Badguy (Guilty Gear)",
            kind: 4
        }, {
            id: 1459,
            tag: "Jack-O Valentine/Aria (Guilty Gear)",
            kind: 4
        }, {
            id: 1460,
            tag: "Yukiko Amagi (Megami Tensei)",
            kind: 4
        }, {
            id: 1461,
            tag: "thequeenzelda",
            kind: 1
        }, {
            id: 1462,
            tag: "Esmeralda (Disney)",
            kind: 4
        }, {
            id: 1463,
            tag: "MrHogsworth",
            kind: 1
        }, {
            id: 1464,
            tag: "somiksmk",
            kind: 1
        }, {
            id: 1465,
            tag: "haru glory",
            kind: 3
        }, {
            id: 1466,
            tag: "Rave Master",
            kind: 3
        }, {
            id: 1467,
            tag: "Haru Glory (Rave Master)",
            kind: 4
        }, {
            id: 1468,
            tag: "Elie/Resha Valentine (Rave Master)",
            kind: 4
        }, {
            id: 1469,
            tag: "Julia (Rave Master)",
            kind: 4
        }, {
            id: 1470,
            tag: "Belnika (Rave Master)",
            kind: 4
        }, {
            id: 1471,
            tag: "Cattleya Glory (Rave Master)",
            kind: 4
        }, {
            id: 1472,
            tag: "Reina (Rave Master)",
            kind: 4
        }, {
            id: 1473,
            tag: "Nagisa (Rave Master)",
            kind: 4
        }, {
            id: 1474,
            tag: "Celia (Rave Master)",
            kind: 4
        }, {
            id: 1475,
            tag: "Jiero (Rave Master)",
            kind: 4
        }, {
            id: 1476,
            tag: "Alleyne",
            kind: 4
        }, {
            id: 1477,
            tag: "toes",
            kind: 2
        }, {
            id: 1478,
            tag: "Yagyu Kyubei (Gintama)",
            kind: 4
        }, {
            id: 1479,
            tag: "Eronautics",
            kind: 1
        }, {
            id: 1480,
            tag: "kinky",
            kind: 2
        }, {
            id: 1481,
            tag: "Ruby Rose (RWBY)",
            kind: 4
        }, {
            id: 1482,
            tag: "Tama",
            kind: 4
        }, {
            id: 1483,
            tag: "Anna (Frozen)",
            kind: 4
        }, {
            id: 1484,
            tag: "Katsura Kotaro (Gintama)",
            kind: 4
        }, {
            id: 1485,
            tag: "Ikumatsu (Gintama)",
            kind: 4
        }, {
            id: 1486,
            tag: "Sakamoto Tatsuma (Gintama)",
            kind: 4
        }, {
            id: 1487,
            tag: "Kijima Matako (Gintama)",
            kind: 4
        }, {
            id: 1488,
            tag: "Cell (Dragon Ball)",
            kind: 4
        }, {
            id: 1489,
            tag: "Evergreen (Fairy Tail)",
            kind: 4
        }, {
            id: 1490,
            tag: "Ai Shindou",
            kind: 4
        }, {
            id: 1491,
            tag: "Nichijou",
            kind: 3
        }, {
            id: 1492,
            tag: "Mio Naganohara (Nichijou)",
            kind: 4
        }, {
            id: 1493,
            tag: "KenShin",
            kind: 1
        }, {
            id: 1494,
            tag: "Saito Shimaru (Gintama)",
            kind: 4
        }, {
            id: 1495,
            tag: "shinobibrush",
            kind: 1
        }, {
            id: 1496,
            tag: "Krisx",
            kind: 1
        }, {
            id: 1497,
            tag: "Oboro (Gintama)",
            kind: 4
        }, {
            id: 1498,
            tag: "Rule 63",
            kind: 2
        }, {
            id: 1499,
            tag: "Giselle Gewelle / Sternritter Z (Bleach)",
            kind: 4
        }, {
            id: 1500,
            tag: "Chifuyu Orimura (Infinite Stratos/IS)",
            kind: 4
        }, {
            id: 1501,
            tag: "Miraculous Ladybug",
            kind: 3
        }, {
            id: 1502,
            tag: "Marinette Cheng (Miraculous Ladybug)",
            kind: 4
        }, {
            id: 1503,
            tag: "doujin",
            kind: 2
        }, {
            id: 1504,
            tag: "A beautiful day at the beach (Doujin)",
            kind: 2
        }, {
            id: 1505,
            tag: "Kiky? (InuYasha)",
            kind: 4
        }, {
            id: 1506,
            tag: "lotus",
            kind: 2
        }, {
            id: 1507,
            tag: "Blake Belladonna (RWBY)",
            kind: 4
        }, {
            id: 1508,
            tag: "tristram",
            kind: 1
        }, {
            id: 1509,
            tag: "to love",
            kind: 3
        }, {
            id: 1510,
            tag: "fgdgdfh (hgjgj)",
            kind: 4
        }, {
            id: 1511,
            tag: "PrincipeNegro",
            kind: 1
        }, {
            id: 1512,
            tag: "Kiba Inuzuka (Naruto)",
            kind: 4
        }, {
            id: 1513,
            tag: "Seri Awashima (K)",
            kind: 4
        }, {
            id: 1514,
            tag: "Loki (DanMachi)",
            kind: 4
        }, {
            id: 1515,
            tag: "Freya (DanMachi)",
            kind: 4
        }, {
            id: 1516,
            tag: "Hephaestus (DanMachi)",
            kind: 4
        }, {
            id: 1517,
            tag: "Sai (Naruto)",
            kind: 4
        }, {
            id: 1518,
            tag: "Tama (Gintama)",
            kind: 4
        }, {
            id: 1519,
            tag: "Leukocyte King (Gintama)",
            kind: 4
        }, {
            id: 1520,
            tag: "Oboro (Fire Emblem)",
            kind: 4
        }, {
            id: 1521,
            tag: "Danganronpa",
            kind: 3
        }, {
            id: 1522,
            tag: "Future Diary/Mirai Nikki",
            kind: 3
        }, {
            id: 1523,
            tag: "Junko Enoshima (Danganronpa)",
            kind: 4
        }, {
            id: 1524,
            tag: "Yuno GasaI (Future Diary/Mirai Nikki)",
            kind: 4
        }, {
            id: 1525,
            tag: "The Legend Of The Legendary Heroes",
            kind: 3
        }, {
            id: 1526,
            tag: "Ferris Eris (The Legend Of The Legendary Heroes)",
            kind: 4
        }, {
            id: 1527,
            tag: "Kiefer Knolles (The Legend Of The Legendary Heroes",
            kind: 4
        }, {
            id: 1528,
            tag: "Ais Wallenstein (DanMachi)",
            kind: 4
        }, {
            id: 1529,
            tag: "Ryuu Lion (DanMachi)",
            kind: 4
        }, {
            id: 1530,
            tag: "Tales of Symphonia",
            kind: 3
        }, {
            id: 1531,
            tag: "Sheena Fujibayashi (Tales of Symphonia)",
            kind: 4
        }, {
            id: 1532,
            tag: "Maid Sama",
            kind: 3
        }, {
            id: 1533,
            tag: "Misaki Ayuzawa (Maid-sama)",
            kind: 4
        }, {
            id: 1534,
            tag: "Suzuna Ayuzawa (Maid-sama)",
            kind: 4
        }, {
            id: 1535,
            tag: "Honoka (Maid-sama)",
            kind: 4
        }, {
            id: 1536,
            tag: "Minako Ayuzawa (Maid-sama)",
            kind: 4
        }, {
            id: 1537,
            tag: "Hunter x Hunter",
            kind: 3
        }, {
            id: 1538,
            tag: "G-Gundam",
            kind: 3
        }, {
            id: 1539,
            tag: "Mobile Fighter G Gundam",
            kind: 3
        }, {
            id: 1540,
            tag: "Rain Mikamura (Gundam)",
            kind: 4
        }, {
            id: 1541,
            tag: "Shizuku (Hunter x Hunter)",
            kind: 4
        }, {
            id: 1542,
            tag: "Desna and Eska (Korra)",
            kind: 4
        }, {
            id: 1543,
            tag: "Blowbang",
            kind: 2
        }, {
            id: 1544,
            tag: "Gulity Gear",
            kind: 3
        }, {
            id: 1545,
            tag: "Power Rangers",
            kind: 3
        }, {
            id: 1546,
            tag: "Rita Repulsa (Power Rangers)",
            kind: 4
        }, {
            id: 1547,
            tag: "lesbians",
            kind: 2
        }, {
            id: 1548,
            tag: "aliens",
            kind: 2
        }, {
            id: 1549,
            tag: "Knights of the Old Republic",
            kind: 3
        }, {
            id: 1550,
            tag: "Mission Vao (Knights of the Old Republic)",
            kind: 4
        }, {
            id: 1551,
            tag: "Ninnian (Fire Emblem 7)",
            kind: 4
        }, {
            id: 1552,
            tag: "Senna (Bleach)",
            kind: 4
        }, {
            id: 1553,
            tag: "Suzumebachi (Bleach)",
            kind: 4
        }, {
            id: 1554,
            tag: "Yachiru Kusajishi (Bleach)",
            kind: 4
        }, {
            id: 1555,
            tag: "MutantPrawn",
            kind: 1
        }, {
            id: 1556,
            tag: "anime. hentai art",
            kind: 3
        }, {
            id: 1557,
            tag: "Feet (Fetish)",
            kind: 2
        }, {
            id: 1558,
            tag: "K-ON!",
            kind: 3
        }, {
            id: 1559,
            tag: "Laki Olietta (Fairy Tail)",
            kind: 4
        }, {
            id: 1560,
            tag: "Mio Akiyama (K-ON!)",
            kind: 4
        }, {
            id: 1561,
            tag: "ZippyChan",
            kind: 1
        }, {
            id: 1562,
            tag: "Inko Midoriya (Boku no Hero Academia)",
            kind: 4
        }, {
            id: 1563,
            tag: "Mitsuki Bakugou (Boku no Hero Academia)",
            kind: 4
        }, {
            id: 1564,
            tag: "hot",
            kind: 2
        }, {
            id: 1565,
            tag: "Charlotte Pudding (One Piece)",
            kind: 4
        }, {
            id: 1566,
            tag: "sex",
            kind: 2
        }, {
            id: 1567,
            tag: "The Legend of Dragoon",
            kind: 3
        }, {
            id: 1568,
            tag: "Rose (the Legend of Dragoon)",
            kind: 4
        }, {
            id: 1569,
            tag: "Karai",
            kind: 4
        }, {
            id: 1570,
            tag: "The Legend of Heroes: Trails of Cold Steel",
            kind: 3
        }, {
            id: 1571,
            tag: "Emma Millstein (Legend of Heroes)",
            kind: 4
        }, {
            id: 1572,
            tag: "SekaixAniki",
            kind: 1
        }, {
            id: 1573,
            tag: "Selphina (Fire Emblem)",
            kind: 4
        }, {
            id: 1574,
            tag: "Misha (Fire Emblem)",
            kind: 4
        }, {
            id: 1575,
            tag: "SenyorPretty",
            kind: 1
        }, {
            id: 1576,
            tag: "Sofya Obertas (Madan no Ou to Vanadis)",
            kind: 4
        }, {
            id: 1577,
            tag: "Tate (Fire Emblem)",
            kind: 4
        }, {
            id: 1578,
            tag: "Persona 4",
            kind: 3
        }, {
            id: 1579,
            tag: "Rise Kujikawa (Persona 4)",
            kind: 4
        }, {
            id: 1580,
            tag: "Big Butt",
            kind: 2
        }, {
            id: 1581,
            tag: "Laura (Trials of Cold Steel)",
            kind: 4
        }, {
            id: 1582,
            tag: "Fie (Trials of Cold Steel)",
            kind: 4
        }, {
            id: 1583,
            tag: "Lucia (Fire Emblem)",
            kind: 4
        }, {
            id: 1584,
            tag: "L'arachel (Fire Emblem)",
            kind: 4
        }, {
            id: 1585,
            tag: "Meru (The Legend of Dragoon)",
            kind: 4
        }, {
            id: 1586,
            tag: "Shana (The Legend of Dragoon)",
            kind: 4
        }, {
            id: 1587,
            tag: "Chacha Akaza (Maken-Ki)",
            kind: 4
        }, {
            id: 1588,
            tag: "Norne (Fire Emblem)",
            kind: 4
        }, {
            id: 1589,
            tag: "Igrene (Fire Emblem)",
            kind: 4
        }, {
            id: 1590,
            tag: "Futaba Sakura (Persona 5)",
            kind: 4
        }, {
            id: 1591,
            tag: "Asuka (WWE)",
            kind: 4
        }, {
            id: 1592,
            tag: "pin up",
            kind: 2
        }, {
            id: 1593,
            tag: "Trinity Blood",
            kind: 3
        }, {
            id: 1594,
            tag: "Esther Blanchett (Trinity Blood)",
            kind: 4
        }, {
            id: 1595,
            tag: "konosuba",
            kind: 3
        }, {
            id: 1596,
            tag: "Kazuma (KonoSuba)",
            kind: 4
        }, {
            id: 1597,
            tag: "Wiz (KonoSuba)",
            kind: 4
        }, {
            id: 1598,
            tag: "julie kidman (evil within)",
            kind: 4
        }, {
            id: 1599,
            tag: "Princess Yue (Avatar)",
            kind: 4
        }, {
            id: 1600,
            tag: "miss kobayashi's dragon maid",
            kind: 3
        }, {
            id: 1601,
            tag: "Acnologia (Fairy Tail)",
            kind: 4
        }, {
            id: 1602,
            tag: "Lucoa (kobayashi-san chi no maid dragon)",
            kind: 4
        }, {
            id: 1603,
            tag: "SWF",
            kind: 3
        }, {
            id: 1604,
            tag: "Lloyd Irving (Tales of Symphonia)",
            kind: 4
        }, {
            id: 1605,
            tag: "Zelos Wilder (Tales of Symphonia)",
            kind: 4
        }, {
            id: 1606,
            tag: "unconscious",
            kind: 2
        }, {
            id: 1607,
            tag: "Non-H",
            kind: 3
        }, {
            id: 1608,
            tag: "Houki Shinonono (Infinite Stratos)",
            kind: 4
        }, {
            id: 1609,
            tag: "Tatenashi Sarashiki (Infinite Stratos)",
            kind: 4
        }, {
            id: 1610,
            tag: "Lingyin Huang (Infinite Stratos)",
            kind: 4
        }, {
            id: 1611,
            tag: "Kanzashi Sarashiki (Infinite Stratos)",
            kind: 4
        }, {
            id: 1612,
            tag: "Irene (Fairy Tail)",
            kind: 4
        }, {
            id: 1613,
            tag: "cameltoe",
            kind: 2
        }, {
            id: 1614,
            tag: "Toshokan Sensou",
            kind: 3
        }, {
            id: 1615,
            tag: "Asako Shibasaki (Toshokan Sensou)",
            kind: 4
        }, {
            id: 1616,
            tag: "Shantae",
            kind: 3
        }, {
            id: 1617,
            tag: "Shantae (character)",
            kind: 4
        }, {
            id: 1618,
            tag: "onepiece",
            kind: 3
        }, {
            id: 1619,
            tag: "mai hime",
            kind: 3
        }, {
            id: 1620,
            tag: "mai (mai hime)",
            kind: 4
        }, {
            id: 1621,
            tag: "mirage koas (star oceean)",
            kind: 4
        }, {
            id: 1622,
            tag: "Cat planet cuties",
            kind: 3
        }, {
            id: 1623,
            tag: "Manami (Cat planet cuties)",
            kind: 4
        }, {
            id: 1624,
            tag: "Sojiro Sakura (Persona 5)",
            kind: 4
        }, {
            id: 1625,
            tag: "Cremia (Zelda)",
            kind: 4
        }, {
            id: 1626,
            tag: "Haru Okumura (Persona 5)",
            kind: 4
        }, {
            id: 1627,
            tag: "from behind",
            kind: 2
        }, {
            id: 1628,
            tag: "Simon (Gurren Lagann)",
            kind: 4
        }, {
            id: 1629,
            tag: "Nia Teppelin (Gurren Lagann)",
            kind: 4
        }, {
            id: 1630,
            tag: "happydose",
            kind: 1
        }, {
            id: 1631,
            tag: "ashi (samurai jack)",
            kind: 4
        }, {
            id: 1632,
            tag: "Zoids",
            kind: 3
        }, {
            id: 1633,
            tag: "Naomi Fluegel (Zoids)",
            kind: 4
        }, {
            id: 1634,
            tag: "Brad Hunter (Zoids)",
            kind: 4
        }, {
            id: 1635,
            tag: "Est (fire emblem)",
            kind: 4
        }, {
            id: 1636,
            tag: "Girls Und Panzer",
            kind: 3
        }, {
            id: 1637,
            tag: "Maho Nishizumi (Girl und Panzer)",
            kind: 4
        }, {
            id: 1638,
            tag: "pounding",
            kind: 2
        }, {
            id: 1639,
            tag: "Trails in the Sky",
            kind: 3
        }, {
            id: 1640,
            tag: "Schera (Trails in the Sky)",
            kind: 4
        }, {
            id: 1641,
            tag: "Scherazard Harvey (Trails in the Sky)",
            kind: 4
        }, {
            id: 1642,
            tag: "wet pussy",
            kind: 2
        }, {
            id: 1643,
            tag: "dragonball super",
            kind: 3
        }, {
            id: 1644,
            tag: "angel (dragonball super)",
            kind: 4
        }, {
            id: 1645,
            tag: "haikyuu",
            kind: 3
        }, {
            id: 1646,
            tag: "Saeko Tanaka (Haikyuu)",
            kind: 4
        }, {
            id: 1647,
            tag: "Sting Eucliffe (Fairy Tail)",
            kind: 4
        }, {
            id: 1648,
            tag: "Blaz Blue",
            kind: 3
        }, {
            id: 1649,
            tag: "taokaka (BlazBlue)",
            kind: 4
        }, {
            id: 1650,
            tag: "litchi Faye Ling (BlazBlue)",
            kind: 4
        }, {
            id: 1651,
            tag: "bound and gagged",
            kind: 2
        }, {
            id: 1652,
            tag: "triple penetration",
            kind: 2
        }, {
            id: 1653,
            tag: "Terra Branford (Final Fantasy)",
            kind: 4
        }, {
            id: 1654,
            tag: "Celes Chere (Final Fantasy)",
            kind: 4
        }, {
            id: 1655,
            tag: "please tell me galko",
            kind: 3
        }, {
            id: 1656,
            tag: "Galko ( please tell me Galko)",
            kind: 4
        }, {
            id: 1657,
            tag: "HKYaichi",
            kind: 1
        }, {
            id: 1658,
            tag: "spooning",
            kind: 2
        }, {
            id: 1659,
            tag: "Arthur (Nanatsu no Taizai)",
            kind: 4
        }, {
            id: 1660,
            tag: "Merlin (Nanatsu no Taizai)",
            kind: 4
        }, {
            id: 1661,
            tag: "Sakata Kintoki (Gintama)",
            kind: 4
        }, {
            id: 1662,
            tag: "Vados",
            kind: 4
        }, {
            id: 1663,
            tag: "Macao Conbolt (Fairy Tail)",
            kind: 4
        }, {
            id: 1664,
            tag: "Nonon Jakuzure (Kill La Kill)",
            kind: 4
        }, {
            id: 1665,
            tag: "Pop step (My hero academia)",
            kind: 4
        }, {
            id: 1666,
            tag: "Shinsetsu man (My Hero Academia)",
            kind: 4
        }, {
            id: 1667,
            tag: "recreators",
            kind: 3
        }, {
            id: 1668,
            tag: "selesia (recreators)",
            kind: 4
        }, {
            id: 1669,
            tag: "doggy",
            kind: 2
        }, {
            id: 1670,
            tag: "perversions",
            kind: 3
        }, {
            id: 1671,
            tag: "nami (perversions)",
            kind: 4
        }, {
            id: 1672,
            tag: "Missionary",
            kind: 2
        }, {
            id: 1673,
            tag: "Shin Megami Tensei Devil Survivor",
            kind: 3
        }, {
            id: 1674,
            tag: "Yuzu Tanikawa (Shin Megami Tensei Devil Survivor)",
            kind: 4
        }, {
            id: 1675,
            tag: "Protagonist (Shin Megami Tensei Devil Survivor)",
            kind: 4
        }, {
            id: 1676,
            tag: "pan(dbgt)",
            kind: 4
        }, {
            id: 1677,
            tag: "Uraraka Ochako (My Hero Academia)",
            kind: 4
        }, {
            id: 1678,
            tag: "Mei Hatsume (Boku no Hero Academia)",
            kind: 4
        }, {
            id: 1679,
            tag: "commission",
            kind: 2
        }, {
            id: 1680,
            tag: "piledriver",
            kind: 2
        }, {
            id: 1681,
            tag: "Dragon Ball Super",
            kind: 3
        }, {
            id: 1682,
            tag: "Tights (Dragon Ball)",
            kind: 4
        }, {
            id: 1683,
            tag: "legs up (sex position)",
            kind: 2
        }, {
            id: 1684,
            tag: "Arale (Dragon Ball)",
            kind: 4
        }, {
            id: 1685,
            tag: "lapdance",
            kind: 2
        }, {
            id: 1686,
            tag: "Alphonse Elric (Fullmetal Alchemist)",
            kind: 4
        }, {
            id: 1687,
            tag: "Double dildo",
            kind: 2
        }, {
            id: 1688,
            tag: "D.Va (Overwatch)",
            kind: 4
        }, {
            id: 1689,
            tag: "Genji (Overwatch)",
            kind: 4
        }, {
            id: 1690,
            tag: "fate",
            kind: 3
        }, {
            id: 1691,
            tag: "astolfo (fate)",
            kind: 4
        }, {
            id: 1692,
            tag: "S3Studios",
            kind: 1
        }, {
            id: 1693,
            tag: "Blowjob and Tit job",
            kind: 2
        }, {
            id: 1694,
            tag: "Super Robot Wars",
            kind: 3
        }, {
            id: 1695,
            tag: "Lefina (Super Robot Wars)",
            kind: 4
        }, {
            id: 1696,
            tag: "MGT",
            kind: 1
        }, {
            id: 1697,
            tag: "alvarex",
            kind: 1
        }, {
            id: 1698,
            tag: "Common",
            kind: 2
        }, {
            id: 1699,
            tag: "Non-existent category",
            kind: 3
        }, {
            id: 1700,
            tag: "double handjob",
            kind: 2
        }, {
            id: 1701,
            tag: "KazBR",
            kind: 1
        }, {
            id: 1702,
            tag: "arcueid",
            kind: 3
        }, {
            id: 1703,
            tag: "arcueid (melty blood)",
            kind: 4
        }, {
            id: 1704,
            tag: "oral sex (sex position)",
            kind: 2
        }, {
            id: 1705,
            tag: "JoJo's Bizarre Adventure",
            kind: 3
        }, {
            id: 1706,
            tag: "Trish Una (JoJo's Bizarre Adventure)",
            kind: 4
        }, {
            id: 1707,
            tag: "Magi-The Labyrinth of Magic",
            kind: 3
        }, {
            id: 1708,
            tag: "Rurumu (Magi-The Labyrinth of Magic)",
            kind: 4
        }, {
            id: 1709,
            tag: "devil is a part timer",
            kind: 3
        }, {
            id: 1710,
            tag: "emi yusa (devil)",
            kind: 4
        }, {
            id: 1711,
            tag: "Mineta Minoru (My Hero Academia)",
            kind: 4
        }, {
            id: 1712,
            tag: "FE Heroes",
            kind: 3
        }, {
            id: 1713,
            tag: "ursula (FE Heroes)",
            kind: 4
        }, {
            id: 1714,
            tag: "Kojack",
            kind: 1
        }, {
            id: 1715,
            tag: "Original Character",
            kind: 3
        }, {
            id: 1716,
            tag: "sexydarkbr",
            kind: 1
        }, {
            id: 1717,
            tag: "Hoppcat",
            kind: 1
        }, {
            id: 1718,
            tag: "Ayra (Fire Emblem)",
            kind: 4
        }, {
            id: 1719,
            tag: "Non-existent character (Category)",
            kind: 4
        }, {
            id: 1720,
            tag: "Fire emblem Awakening",
            kind: 3
        }, {
            id: 1721,
            tag: "Robin (Fire Emblem Awakening)",
            kind: 4
        }, {
            id: 1722,
            tag: "Maribelle (Fire Emblem Awakening)",
            kind: 4
        }, {
            id: 1723,
            tag: "penetration",
            kind: 2
        }, {
            id: 1724,
            tag: "Fire Emblem Echoes",
            kind: 3
        }, {
            id: 1725,
            tag: "Mae (Fire Emblem Echoes: Shadows of Valentia)",
            kind: 4
        }, {
            id: 1726,
            tag: "Boey (Fire Emblem Echoes: Shadow of Valentia)",
            kind: 4
        }, {
            id: 1727,
            tag: "Fire Brigade of Flames",
            kind: 3
        }, {
            id: 1728,
            tag: "Lala (to love ru )",
            kind: 4
        }, {
            id: 1729,
            tag: "Hibana (Fire Brigade of Flames)",
            kind: 4
        }, {
            id: 1730,
            tag: "Celica ( Fire Emblem Echoes)",
            kind: 4
        }, {
            id: 1731,
            tag: "Catria (Fire Emblem)",
            kind: 4
        }, {
            id: 1732,
            tag: "Palla (Fire Emblem)",
            kind: 4
        }, {
            id: 1733,
            tag: "cumming",
            kind: 2
        }, {
            id: 1734,
            tag: "Cave Story",
            kind: 3
        }, {
            id: 1735,
            tag: "Curly Brace (Cave Story)",
            kind: 4
        }, {
            id: 1736,
            tag: "Quote (Cave Story)",
            kind: 4
        }, {
            id: 1737,
            tag: "Lena (Fire Emblem)",
            kind: 4
        }, {
            id: 1738,
            tag: "Rimjob (sex position)",
            kind: 2
        }, {
            id: 1739,
            tag: "Karako (Deadman Wonderland)",
            kind: 4
        }, {
            id: 1740,
            tag: "Ganta (Deadman Wonderland)",
            kind: 4
        }, {
            id: 1741,
            tag: "Ravel Phoenix (High School DxD)",
            kind: 4
        }, {
            id: 1742,
            tag: "big boob",
            kind: 2
        }, {
            id: 1743,
            tag: "incest",
            kind: 2
        }, {
            id: 1744,
            tag: "nipple penetration",
            kind: 2
        }, {
            id: 1745,
            tag: "Any character (Original character)",
            kind: 4
        }, {
            id: 1746,
            tag: "justinBA1987",
            kind: 1
        }, {
            id: 1747,
            tag: "Jean Grey (X-Men)",
            kind: 4
        }, {
            id: 1748,
            tag: "Sexy",
            kind: 2
        }, {
            id: 1749,
            tag: "sexy beach 3",
            kind: 3
        }, {
            id: 1750,
            tag: "Bael Altarus(Sexy beach 3)",
            kind: 4
        }, {
            id: 1751,
            tag: "big ass",
            kind: 2
        }, {
            id: 1752,
            tag: "Silque (Fire Emblem)",
            kind: 4
        }, {
            id: 1753,
            tag: "Mephiscrypie",
            kind: 1
        }, {
            id: 1754,
            tag: "Reiju Vinsmoke (One Piece)",
            kind: 4
        }, {
            id: 1755,
            tag: "Jill (Fire Emblem)",
            kind: 4
        }, {
            id: 1756,
            tag: "Marcia (Fire Emblem)",
            kind: 4
        }, {
            id: 1757,
            tag: "Elincia (Fire Emblem)",
            kind: 4
        }, {
            id: 1758,
            tag: "Tanith (Fire Emblem)",
            kind: 4
        }, {
            id: 1759,
            tag: "pigtails",
            kind: 2
        }, {
            id: 1760,
            tag: "Joey Wheeler (Yu-Gi-Oh!)",
            kind: 4
        }, {
            id: 1761,
            tag: "Asia Argento (High School DxD)",
            kind: 4
        }, {
            id: 1762,
            tag: "Apron",
            kind: 2
        }, {
            id: 1763,
            tag: "Asagi Igawa (Taimanin Asagi)",
            kind: 4
        }, {
            id: 1764,
            tag: "Soul Calibur",
            kind: 3
        }, {
            id: 1765,
            tag: "Tiki (Fire Emblem Awakening)",
            kind: 4
        }, {
            id: 1766,
            tag: "mistress",
            kind: 2
        }, {
            id: 1767,
            tag: "Fate Series",
            kind: 3
        }, {
            id: 1768,
            tag: "Caster FateExtra / Tamamo no Mae (TYPE-MOON)",
            kind: 4
        }, {
            id: 1769,
            tag: "Nero (Fate)",
            kind: 4
        }, {
            id: 1770,
            tag: "Medusa (Fate)",
            kind: 4
        }, {
            id: 1771,
            tag: "Jeanne D'Arc (Fate)",
            kind: 4
        }, {
            id: 1772,
            tag: "Seelenkaetzchen",
            kind: 1
        }, {
            id: 1773,
            tag: "shakugan no shana",
            kind: 3
        }, {
            id: 1774,
            tag: "shana (shakugan no shana)",
            kind: 4
        }, {
            id: 1775,
            tag: "Eureka 7",
            kind: 3
        }, {
            id: 1776,
            tag: "Gidget (Eureka 7)",
            kind: 4
        }, {
            id: 1777,
            tag: "Minerva (Fire Emblem)",
            kind: 4
        }, {
            id: 1778,
            tag: "Homura (Sekirei)",
            kind: 4
        }, {
            id: 1779,
            tag: "Yuria",
            kind: 1
        }, {
            id: 1780,
            tag: "Tracer (Overwatch)",
            kind: 4
        }, {
            id: 1781,
            tag: "Miho Nishizumi (Girls und Panzer)",
            kind: 4
        }, {
            id: 1782,
            tag: "Maho Nishizumi (Girls und Panzer)",
            kind: 4
        }, {
            id: 1783,
            tag: "Shiho Nishizumi (Girls und Panzer)",
            kind: 4
        }, {
            id: 1784,
            tag: "pussy licking",
            kind: 2
        }, {
            id: 1785,
            tag: "Rin Nohara (Naruto)",
            kind: 4
        }, {
            id: 1786,
            tag: "Leg up (sex position)",
            kind: 2
        }, {
            id: 1787,
            tag: "themaohking",
            kind: 1
        }, {
            id: 1788,
            tag: "yaoi",
            kind: 2
        }, {
            id: 1789,
            tag: "mating press style",
            kind: 2
        }, {
            id: 1790,
            tag: "Fire Emblem Fates",
            kind: 3
        }, {
            id: 1791,
            tag: "Male Corrin (Fire Emblem Fates)",
            kind: 4
        }, {
            id: 1792,
            tag: "hibiki(Sekirei)",
            kind: 4
        }, {
            id: 1793,
            tag: "Hikari (Sekirei)",
            kind: 4
        }, {
            id: 1794,
            tag: "Kaoru Seo (Sekirei)",
            kind: 4
        }, {
            id: 1795,
            tag: "Mathilda (Fire Emblem)",
            kind: 4
        }, {
            id: 1796,
            tag: "Zash Caine (Fairy tail)",
            kind: 4
        }, {
            id: 1797,
            tag: "new game!",
            kind: 3
        }, {
            id: 1798,
            tag: "Aoba Suzukaze (New game!)",
            kind: 4
        }, {
            id: 1799,
            tag: "ass view",
            kind: 2
        }, {
            id: 1800,
            tag: "Xvzzz",
            kind: 1
        }, {
            id: 1801,
            tag: "Morrigan (Darkstalkers)",
            kind: 4
        }, {
            id: 1802,
            tag: "Sun-hi (Original Character)",
            kind: 4
        }, {
            id: 1803,
            tag: "Monogatari Series",
            kind: 3
        }, {
            id: 1804,
            tag: "Nadeko Sengoku (Bakemonogatari)",
            kind: 4
        }, {
            id: 1805,
            tag: "Ougi Oshino (Bakemonogatari)",
            kind: 4
        }, {
            id: 1806,
            tag: "Karen Araragi (Bakemonogatari)",
            kind: 4
        }, {
            id: 1807,
            tag: "Koyomi Araragi (Bakemonogatari)",
            kind: 4
        }, {
            id: 1808,
            tag: "Bondage (Fetish)",
            kind: 2
        }, {
            id: 1809,
            tag: "Vera (Original Character)",
            kind: 4
        }, {
            id: 1810,
            tag: "Camilla (Fire Emblem)",
            kind: 4
        }, {
            id: 1811,
            tag: "Sora (Original Character)",
            kind: 4
        }, {
            id: 1812,
            tag: "tsubasa (monogatari)",
            kind: 4
        }, {
            id: 1813,
            tag: "Iron-Blooded Orphans",
            kind: 3
        }, {
            id: 1814,
            tag: "Kudelia Aina Bernstein (Iron-Blooded Orphans)",
            kind: 4
        }, {
            id: 1815,
            tag: "ZNox",
            kind: 1
        }, {
            id: 1816,
            tag: "Mini Game Operator (Zelda)",
            kind: 4
        }, {
            id: 1817,
            tag: "Anju (Zelda)",
            kind: 4
        }, {
            id: 1818,
            tag: "Caulifla (Dragon Ball Super)",
            kind: 4
        }, {
            id: 1819,
            tag: "Desert Punk",
            kind: 3
        }, {
            id: 1820,
            tag: "Junko Asagiri (Desert Punk)",
            kind: 4
        }, {
            id: 1821,
            tag: "GGC",
            kind: 1
        }, {
            id: 1822,
            tag: "Aqua (Konosuba)",
            kind: 4
        }, {
            id: 1823,
            tag: "Megumin (KonoSuba)",
            kind: 4
        }, {
            id: 1824,
            tag: "Darkness (KonoSuba)",
            kind: 4
        }, {
            id: 1825,
            tag: "dragonball",
            kind: 2
        }, {
            id: 1826,
            tag: "GATE",
            kind: 3
        }, {
            id: 1827,
            tag: "Rory Mercury (Gate)",
            kind: 4
        }, {
            id: 1828,
            tag: "Reina (Fire Emblem Fates)",
            kind: 4
        }, {
            id: 1829,
            tag: "Yuru Yuri",
            kind: 3
        }, {
            id: 1830,
            tag: "Ayano Sugiura (Yuru Yuri)",
            kind: 4
        }, {
            id: 1831,
            tag: "Himawari Furutani (Yuru Yuri)",
            kind: 4
        }, {
            id: 1832,
            tag: "Sakurako Oomuro (Yuru Yuri)",
            kind: 4
        }, {
            id: 1833,
            tag: "art.VGC",
            kind: 1
        }, {
            id: 1834,
            tag: "Vixen",
            kind: 3
        }, {
            id: 1835,
            tag: "Vixen (Vixen)",
            kind: 4
        }, {
            id: 1836,
            tag: "God Eater",
            kind: 3
        }, {
            id: 1837,
            tag: "Alisa Ilinichina Amiella (God Eater)",
            kind: 4
        }, {
            id: 1838,
            tag: "Foot job",
            kind: 2
        }, {
            id: 1839,
            tag: "Makoto Nijima (Persona 5)",
            kind: 4
        }, {
            id: 1840,
            tag: "Sarada Uchiha (Naruto)",
            kind: 4
        }, {
            id: 1841,
            tag: "standing doggy",
            kind: 2
        }, {
            id: 1842,
            tag: "Uten (Original Character)",
            kind: 4
        }, {
            id: 1843,
            tag: "dildo suck",
            kind: 2
        }, {
            id: 1844,
            tag: "blaster master zero",
            kind: 3
        }, {
            id: 1845,
            tag: "eve (blaster master zero)",
            kind: 4
        }, {
            id: 1846,
            tag: "arca",
            kind: 1
        }, {
            id: 1847,
            tag: "Exhibitionist",
            kind: 2
        }, {
            id: 1848,
            tag: "Spread legs",
            kind: 2
        }, {
            id: 1849,
            tag: "cow girl",
            kind: 3
        }, {
            id: 1850,
            tag: "Blair (Soul Eater)",
            kind: 4
        }, {
            id: 1851,
            tag: "Nier:Automata",
            kind: 3
        }, {
            id: 1852,
            tag: "2B (Nier)",
            kind: 4
        }, {
            id: 1853,
            tag: "skirt",
            kind: 3
        }, {
            id: 1854,
            tag: "titjob",
            kind: 2
        }, {
            id: 1855,
            tag: '"%Queen_Beryl% (%show_name%)".',
            kind: 4
        }, {
            id: 1856,
            tag: "big dick",
            kind: 2
        }, {
            id: 1857,
            tag: "Nico Robin",
            kind: 3
        }, {
            id: 1858,
            tag: "Jube (One Piece)",
            kind: 4
        }, {
            id: 1859,
            tag: "Tokyo Majin",
            kind: 3
        }, {
            id: 1860,
            tag: "Aoi Misato (Tokyo Majin)",
            kind: 4
        }, {
            id: 1861,
            tag: "No Game No Life",
            kind: 3
        }, {
            id: 1862,
            tag: "Jibril (No Game No Life)",
            kind: 4
        }, {
            id: 1863,
            tag: "Cabba (Dragon Ball Super)",
            kind: 3
        }, {
            id: 1864,
            tag: "oral (sex position)",
            kind: 2
        }, {
            id: 1865,
            tag: "Tokyo Mew Mew",
            kind: 3
        }, {
            id: 1866,
            tag: "Ichigo Momomiya (Tokyo Mew Mew)",
            kind: 4
        }, {
            id: 1867,
            tag: "small breasts",
            kind: 2
        }, {
            id: 1868,
            tag: "big penis/black cock",
            kind: 2
        }, {
            id: 1869,
            tag: "Fate/Apocrypha",
            kind: 3
        }, {
            id: 1870,
            tag: "Mordred (Fate/Apocrypha)",
            kind: 4
        }, {
            id: 1871,
            tag: "Fate/Grand Order",
            kind: 3
        }, {
            id: 1872,
            tag: "Ritsuka Fujimaru (Fate Grand Order)",
            kind: 4
        }, {
            id: 1873,
            tag: "Lancer / Sc?thach (Fate/Grand Order)",
            kind: 4
        }, {
            id: 1874,
            tag: "Winter Schnee (RWBY)",
            kind: 4
        }, {
            id: 1875,
            tag: "Deidara (Naruto Shippuden)",
            kind: 4
        }, {
            id: 1876,
            tag: "medea (Fate)",
            kind: 4
        }, {
            id: 1877,
            tag: "Tatsumaki (One Punch Man)",
            kind: 4
        }, {
            id: 1878,
            tag: "Fubuki (One Punch Man)",
            kind: 4
        }, {
            id: 1879,
            tag: "Cum shot",
            kind: 2
        }, {
            id: 1880,
            tag: "Rider (Fate/Stay Night)",
            kind: 4
        }, {
            id: 1881,
            tag: "OC (Original Character)",
            kind: 4
        }, {
            id: 1882,
            tag: "Bazett Fraga McRemitz (Fate/kaleid)",
            kind: 4
        }, {
            id: 1883,
            tag: "rail wars",
            kind: 3
        }, {
            id: 1884,
            tag: "aoi (rail wars)",
            kind: 4
        }, {
            id: 1885,
            tag: "Marth (Fire Emblem)",
            kind: 4
        }, {
            id: 1886,
            tag: "Marisha (Fire Emblem)",
            kind: 4
        }, {
            id: 1887,
            tag: "Nyna (Fire Emblem)",
            kind: 4
        }, {
            id: 1888,
            tag: "Caeda (Fire Emblem)",
            kind: 4
        }, {
            id: 1889,
            tag: "hajimete no gal",
            kind: 3
        } ];
    },
    110: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = [ {
            id: 1,
            image: "__3928/rc/roomback/room-bk-01.jpg",
            title: r("{type} Room", {
                type: r("Gold")
            }),
            type: "gold",
            lock: {
                counters: {
                    RMS: 2
                }
            }
        }, {
            id: 2,
            image: "__9d1d/rc/roomback/room-bk-02.jpg",
            title: r("{type} Room", {
                type: r("DPC")
            }),
            type: "dpc",
            lock: {
                counters: {
                    RMS: 2
                }
            }
        }, {
            id: 3,
            image: "__dc59/rc/roomback/room-bk-03.jpg",
            title: r("{type} Room", {
                type: r("Gold")
            }),
            type: "gold",
            lock: {
                counters: {
                    RMS: 1
                }
            }
        }, {
            id: 4,
            image: "__b7eb/rc/roomback/room-bk-04.jpg",
            title: r("{type} Room", {
                type: r("Gold")
            }),
            type: "gold",
            lock: {}
        }, {
            id: 5,
            image: "__02e9/rc/roomback/room-bk-05.jpg",
            title: r("{type} Room", {
                type: r("Gems")
            }),
            type: "gems",
            lock: {
                counters: {
                    RMS: 2
                }
            }
        }, {
            id: 6,
            image: "__d6ab/rc/roomback/room-bk-06.jpg",
            title: r("{type} Room", {
                type: r("DPC")
            }),
            type: "dpc",
            lock: {
                counters: {
                    RMS: 1
                }
            }
        }, {
            id: 7,
            image: "__2fae/rc/roomback/room-bk-07.jpg",
            title: r("{type} Room", {
                type: r("DPC")
            }),
            type: "dpc",
            lock: {}
        }, {
            id: 8,
            image: "__d68f/rc/roomback/room-bk-08.jpg",
            title: r("{type} Room", {
                type: r("Gold")
            }),
            type: "gold",
            lock: {
                counters: {
                    RMS: 3
                }
            }
        }, {
            id: 9,
            image: "__048b/rc/roomback/room-bk-09.jpg",
            title: r("{type} Room", {
                type: r("Shards")
            }),
            type: "shards",
            lock: {
                counters: {
                    RMS: 2
                }
            }
        }, {
            id: 10,
            image: "__3366/rc/roomback/room-bk-10.jpg",
            title: r("{type} Room", {
                type: r("DPC")
            }),
            type: "dpc",
            lock: {
                counters: {
                    RMS: 3
                }
            }
        }, {
            id: 11,
            image: "__0a9a/rc/roomback/room-bk-11.jpg",
            title: r("{type} Room", {
                type: r("Gems")
            }),
            type: "gems",
            lock: {
                counters: {
                    RMS: 1
                }
            }
        }, {
            id: 12,
            image: "__34ae/rc/roomback/room-bk-12.jpg",
            title: r("{type} Room", {
                type: r("Gems")
            }),
            type: "gems",
            lock: {}
        }, {
            id: 13,
            image: "__08b6/rc/roomback/room-bk-13.jpg",
            title: r("{type} Room", {
                type: r("Shards")
            }),
            type: "shards",
            lock: {
                counters: {
                    RMS: 3
                }
            }
        }, {
            id: 14,
            image: "__611b/rc/roomback/room-bk-14.jpg",
            title: r("{type} Room", {
                type: r("Gems")
            }),
            type: "gems",
            lock: {
                counters: {
                    RMS: 3
                }
            }
        }, {
            id: 15,
            image: "__27c3/rc/roomback/room-bk-15.jpg",
            title: r("{type} Room", {
                type: r("Shards")
            }),
            type: "shards",
            lock: {
                counters: {
                    RMS: 1
                }
            }
        }, {
            id: 16,
            image: "__ee18/rc/roomback/room-bk-16.jpg",
            title: r("{type} Room", {
                type: r("Shards")
            }),
            type: "shards",
            lock: {}
        } ];
    },
    114: function(e, a) {
        "use strict";
        e.exports = {
            lock: {
                counters: {
                    Pictures: 7
                }
            },
            default_items: [ 100213, 100214, 100215, 100216, 100217, 100218, 100219, 100220, 100221, 100222, 100223, 100224, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ],
            default_real_items: [ 100236, 100237, 100238, 100239, 100240 ],
            sales: [ {
                id: 1,
                type: "real",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100248, 100249, 100250, 100251, 100252 ]
            }, {
                id: 2,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 11e4, 110001, 110002, 100216, 100217, 100218, 100219, 100220, 100221, 100222, 100223, 100224, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 3,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100213, 100214, 100215, 110003, 110004, 110005, 100219, 100220, 100221, 100222, 100223, 100224, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 4,
                type: "real",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100245, 100246, 100247, 100241, 100242 ]
            }, {
                id: 5,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100213, 100214, 100215, 100216, 100217, 100218, 110006, 110007, 110008, 100222, 100223, 100224, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 6,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100213, 100214, 100215, 100216, 100217, 100218, 100219, 100220, 100221, 110009, 110010, 110011, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 7,
                type: "real",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100253, 100254, 100255, 100256, 100257 ],
                lock: {
                    negate: [ {
                        counters: {
                            P_C: 1
                        }
                    } ],
                    counters: {
                        GAME_DAY: 5
                    }
                }
            }, {
                id: 8,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100213, 100214, 100215, 100216, 100217, 100218, 100219, 100220, 100221, 100222, 100223, 100224, 110012, 110013, 110014, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 9,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 110015, 110016, 110017, 100216, 100217, 100218, 100219, 100220, 100221, 100222, 100223, 100224, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 10,
                type: "real",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100248, 100249, 100250, 100251, 100252 ]
            }, {
                id: 11,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100213, 100214, 100215, 110018, 110019, 110020, 100219, 100220, 100221, 100222, 100223, 100224, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 12,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100213, 100214, 100215, 100216, 100217, 100218, 110021, 110022, 110023, 100222, 100223, 100224, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 13,
                type: "real",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100245, 100246, 100247, 100241, 100242 ]
            }, {
                id: 14,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100213, 100214, 100215, 100216, 100217, 100218, 100219, 100220, 100221, 110009, 110010, 110011, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            }, {
                id: 15,
                type: "item",
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100213, 100214, 100215, 110018, 110019, 110020, 100219, 100220, 100221, 100222, 100223, 100224, 100225, 100226, 100227, 100228, 100229, 100230, 100231, 100232, 100233, 100234, 120019, 120020, 120021, 120022, 120023, 120024, 120025, 120026, 120027, 120028, 120029, 120030, 120031, 120032, 120033, 120034, 120035, 120036, 120037, 120038 ]
            } ]
        };
    },
    116: function(e, a, i) {
        "use strict";
        var r, t;
        t = i(26)._tr, r = i(8), e.exports = {
            term: 86400,
            lock: {
                counters: {
                    SQF: 1
                }
            },
            quests: [ {
                id: 1001,
                description: t("Open {pictures} pictures", {
                    pictures: "5"
                }),
                rewardIcon: "rc/ic-abil-butil@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 0,
                isFirstQuests: !0,
                objective: {
                    counter: "Pictures",
                    value: r("5e+0"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "shards" ],
                        time: 1080
                    }
                }
            }, {
                id: 1002,
                description: t("Finish {levels} levels", {
                    levels: "5"
                }),
                rewardIcon: "rc/ic-abil-gold@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 0,
                isFirstQuests: !0,
                objective: {
                    counter: "PASSLOCK",
                    value: r("5e+0"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "gold" ],
                        time: 1080
                    }
                }
            }, {
                id: 1003,
                description: t("Open {pictures} pictures with a favorite tag", {
                    pictures: "5"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "25",
                type: "quest_offer",
                weight: 0,
                isFirstQuests: !0,
                objective: {
                    counter: "FPictures",
                    value: r("5e+0"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("2.5e+1")
                    }
                }
            }, {
                id: 1004,
                description: t("Kill {count} monsters", {
                    count: "25"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "3%",
                type: "quest_offer",
                weight: 0,
                isFirstQuests: !0,
                objective: {
                    counter: "MSTRKL",
                    value: r("2.5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .03
                    } ] ]
                }
            }, {
                id: 1,
                description: t("Open {pictures} pictures", {
                    pictures: "10"
                }),
                rewardIcon: "rc/ic-abil-butil@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 6,
                objective: {
                    counter: "Pictures",
                    value: r("1e+1"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "shards" ],
                        time: 360
                    }
                }
            }, {
                id: 2,
                description: t("Open {pictures} pictures", {
                    pictures: "25"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "5",
                type: "quest_offer",
                weight: 4,
                objective: {
                    counter: "Pictures",
                    value: r("2.5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("5e+0")
                    }
                }
            }, {
                id: 3,
                description: t("Open {pictures} pictures", {
                    pictures: "50"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "1%",
                type: "quest_offer",
                weight: 2,
                objective: {
                    counter: "Pictures",
                    value: r("5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .01
                    } ] ]
                }
            }, {
                id: 4,
                description: t("Finish {levels} levels", {
                    levels: "10"
                }),
                rewardIcon: "rc/ic-abil-gold@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 3,
                objective: {
                    counter: "PASSLOCK",
                    value: r("1e+1"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "gold" ],
                        time: 1080
                    }
                }
            }, {
                id: 5,
                description: t("Finish {levels} levels", {
                    levels: "25"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "15",
                type: "quest_offer",
                weight: 2,
                objective: {
                    counter: "PASSLOCK",
                    value: r("2.5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("1.5e+1")
                    }
                }
            }, {
                id: 6,
                description: t("Finish {levels} levels", {
                    levels: "50"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "2%",
                type: "quest_offer",
                weight: 1,
                objective: {
                    counter: "PASSLOCK",
                    value: r("5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .02
                    } ] ]
                }
            }, {
                id: 7,
                description: t("Open {pictures} pictures with a favorite tag", {
                    pictures: "5"
                }),
                rewardIcon: "rc/ic-abil-butil@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 3,
                objective: {
                    counter: "FPictures",
                    value: r("5e+0"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "shards" ],
                        time: 1080
                    }
                }
            }, {
                id: 8,
                description: t("Open {pictures} pictures with a favorite tag", {
                    pictures: "10"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "15",
                type: "quest_offer",
                weight: 2,
                objective: {
                    counter: "FPictures",
                    value: r("1e+1"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("1.5e+1")
                    }
                }
            }, {
                id: 9,
                description: t("Open {pictures} pictures with a favorite tag", {
                    pictures: "15"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "2%",
                type: "quest_offer",
                weight: 1,
                objective: {
                    counter: "FPictures",
                    value: r("1.5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .02
                    } ] ]
                }
            }, {
                id: 10,
                description: t("Kill {count} monsters", {
                    count: "100"
                }),
                rewardIcon: "rc/ic-abil-gold@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 6,
                objective: {
                    counter: "MSTRKL",
                    value: r("1e+2"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "gold" ],
                        time: 360
                    }
                }
            }, {
                id: 11,
                description: t("Kill {count} monsters", {
                    count: "500"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "5",
                type: "quest_offer",
                weight: 4,
                objective: {
                    counter: "MSTRKL",
                    value: r("5e+2"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("5e+0")
                    }
                }
            }, {
                id: 12,
                description: t("Kill {count} monsters", {
                    count: "1K"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "1%",
                type: "quest_offer",
                weight: 2,
                objective: {
                    counter: "MSTRKL",
                    value: r("1e+3"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .01
                    } ] ]
                }
            } ]
        };
    },
    118: function(e, a) {
        "use strict";
        e.exports = {
            discount: 80,
            className: "models/specialOffers/StarterPack",
            term: 172800,
            lock: {
                negate: [ {
                    either: [ {
                        counters: {
                            P_C: 1
                        }
                    }, {
                        counters: {
                            GAME_DAY: 3
                        }
                    } ]
                } ],
                counters: {
                    MAXLOCK: 3
                }
            },
            wait_before_show_again: 3600
        };
    },
    120: function(e, a) {
        "use strict";
        e.exports = {
            term: 86400,
            lock: {
                vars: {
                    TUT_SH: 10
                }
            },
            wait_before_show_again: 3600,
            chests: [ {
                id: 1,
                price: {
                    keys: 5
                },
                reward: {
                    res: {
                        chests: 1
                    },
                    counters: {
                        __S_CH_QT_KEYS: 1
                    }
                }
            }, {
                id: 2,
                price: {
                    keys: 10
                },
                reward: {
                    res: {
                        chests: 1
                    },
                    counters: {
                        __S_CH_QT_KEYS: 1
                    }
                }
            }, {
                id: 3,
                price: {
                    keys: 15
                },
                reward: {
                    res: {
                        chests: 1
                    },
                    counters: {
                        __S_CH_QT_KEYS: 1
                    },
                    vars: {
                        S_CH_QT_COMPLETE: !0
                    }
                }
            } ]
        };
    },
    124: function(e, a) {
        "use strict";
        e.exports = [ {
            id: 1,
            type: 1,
            rare: "common",
            name: "Haruko Yasha",
            imageManager: {
                icons: [ "__c90e/images/superhero/suphero-01/x1/avatar/01suphero-ava-01.jpg", "__426b/images/superhero/suphero-01/x1/avatar/01suphero-ava-02.jpg", "__e6fe/images/superhero/suphero-01/x1/avatar/01suphero-ava-03.jpg", "__996b/images/superhero/suphero-01/x1/avatar/01suphero-ava-04.jpg", "__9df3/images/superhero/suphero-01/x1/avatar/01suphero-ava-05.jpg", "__8085/images/superhero/suphero-01/x1/avatar/01suphero-ava-06.jpg", "__4a1c/images/superhero/suphero-01/x1/avatar/01suphero-ava-07.jpg", "__897d/images/superhero/suphero-01/x1/avatar/01suphero-ava-08.jpg", "__c43e/images/superhero/suphero-01/x1/avatar/01suphero-ava-09.jpg", "__8baf/images/superhero/suphero-01/x1/avatar/01suphero-ava-10.jpg" ],
                images: [ "__d5e3/images/superhero/suphero-01/x1/01suphero-01.jpg", "__1dc2/images/superhero/suphero-01/x1/01suphero-02.jpg", "__b663/images/superhero/suphero-01/x1/01suphero-03.jpg", "__c24d/images/superhero/suphero-01/x1/01suphero-04.jpg", "__df52/images/superhero/suphero-01/x1/01suphero-05.jpg", "__f9ef/images/superhero/suphero-01/x1/01suphero-06.jpg", "__c7f1/images/superhero/suphero-01/x1/01suphero-07.jpg", "__dfa9/images/superhero/suphero-01/x1/01suphero-08.jpg", "__8774/images/superhero/suphero-01/x1/01suphero-09.jpg", "__eed2/images/superhero/suphero-01/x1/01suphero-10.jpg" ],
                thumbnails: [ "images/superhero/suphero-01/x1/tumba/01suphero-tumba-01.jpg", "__7089/images/superhero/suphero-01/x1/tumba/01suphero-tumba-02.jpg", "__61b2/images/superhero/suphero-01/x1/tumba/01suphero-tumba-03.jpg", "__9514/images/superhero/suphero-01/x1/tumba/01suphero-tumba-04.jpg", "__eb35/images/superhero/suphero-01/x1/tumba/01suphero-tumba-05.jpg", "__ab93/images/superhero/suphero-01/x1/tumba/01suphero-tumba-06.jpg", "__d179/images/superhero/suphero-01/x1/tumba/01suphero-tumba-07.jpg", "__6a2b/images/superhero/suphero-01/x1/tumba/01suphero-tumba-08.jpg", "__d837/images/superhero/suphero-01/x1/tumba/01suphero-tumba-09.jpg", "__0a3e/images/superhero/suphero-01/x1/tumba/01suphero-tumba-10.jpg" ],
                fullimages: [ "__38f5/images/superhero/suphero-01/x1/full/01suphero-full-01.jpg", "__03fa/images/superhero/suphero-01/x1/full/01suphero-full-02.jpg", "__15ba/images/superhero/suphero-01/x1/full/01suphero-full-03.jpg", "__5722/images/superhero/suphero-01/x1/full/01suphero-full-04.jpg", "__e265/images/superhero/suphero-01/x1/full/01suphero-full-05.jpg", "__686d/images/superhero/suphero-01/x1/full/01suphero-full-06.jpg", "__f585/images/superhero/suphero-01/x1/full/01suphero-full-07.jpg", "__de08/images/superhero/suphero-01/x1/full/01suphero-full-08.jpg", "__a57d/images/superhero/suphero-01/x1/full/01suphero-full-09.jpg", "__6358/images/superhero/suphero-01/x1/full/01suphero-full-10.jpg" ],
                "icons@2x": [ "__d2c8/images/superhero/suphero-01/x2/avatar/01suphero-ava-01.jpg", "__f1a0/images/superhero/suphero-01/x2/avatar/01suphero-ava-02.jpg", "__fe2a/images/superhero/suphero-01/x2/avatar/01suphero-ava-03.jpg", "__f729/images/superhero/suphero-01/x2/avatar/01suphero-ava-04.jpg", "__23ab/images/superhero/suphero-01/x2/avatar/01suphero-ava-05.jpg", "__6e03/images/superhero/suphero-01/x2/avatar/01suphero-ava-06.jpg", "__8270/images/superhero/suphero-01/x2/avatar/01suphero-ava-07.jpg", "__9a28/images/superhero/suphero-01/x2/avatar/01suphero-ava-08.jpg", "__70fc/images/superhero/suphero-01/x2/avatar/01suphero-ava-09.jpg", "__9cc4/images/superhero/suphero-01/x2/avatar/01suphero-ava-10.jpg" ],
                "images@2x": [ "__0b33/images/superhero/suphero-01/x2/01suphero-01.jpg", "__a932/images/superhero/suphero-01/x2/01suphero-02.jpg", "__aec9/images/superhero/suphero-01/x2/01suphero-03.jpg", "__7042/images/superhero/suphero-01/x2/01suphero-04.jpg", "__1c29/images/superhero/suphero-01/x2/01suphero-05.jpg", "__388c/images/superhero/suphero-01/x2/01suphero-06.jpg", "__5079/images/superhero/suphero-01/x2/01suphero-07.jpg", "__5f1c/images/superhero/suphero-01/x2/01suphero-08.jpg", "__e1f3/images/superhero/suphero-01/x2/01suphero-09.jpg", "__a2f1/images/superhero/suphero-01/x2/01suphero-10.jpg" ],
                "thumbnails@2x": [ "images/superhero/suphero-01/x2/tumba/01suphero-tumba-01.jpg", "__9e7f/images/superhero/suphero-01/x2/tumba/01suphero-tumba-02.jpg", "__dbf0/images/superhero/suphero-01/x2/tumba/01suphero-tumba-03.jpg", "__a18a/images/superhero/suphero-01/x2/tumba/01suphero-tumba-04.jpg", "__81aa/images/superhero/suphero-01/x2/tumba/01suphero-tumba-05.jpg", "__51cd/images/superhero/suphero-01/x2/tumba/01suphero-tumba-06.jpg", "__b063/images/superhero/suphero-01/x2/tumba/01suphero-tumba-07.jpg", "__67e9/images/superhero/suphero-01/x2/tumba/01suphero-tumba-08.jpg", "__ae6b/images/superhero/suphero-01/x2/tumba/01suphero-tumba-09.jpg", "__ebf1/images/superhero/suphero-01/x2/tumba/01suphero-tumba-10.jpg" ],
                "fullimages@2x": [ "__ecc0/images/superhero/suphero-01/x2/full/01suphero-full-01.jpg", "__b378/images/superhero/suphero-01/x2/full/01suphero-full-02.jpg", "__22e6/images/superhero/suphero-01/x2/full/01suphero-full-03.jpg", "__c424/images/superhero/suphero-01/x2/full/01suphero-full-04.jpg", "__1d77/images/superhero/suphero-01/x2/full/01suphero-full-05.jpg", "__694f/images/superhero/suphero-01/x2/full/01suphero-full-06.jpg", "__4e5b/images/superhero/suphero-01/x2/full/01suphero-full-07.jpg", "__a50d/images/superhero/suphero-01/x2/full/01suphero-full-08.jpg", "__1f73/images/superhero/suphero-01/x2/full/01suphero-full-09.jpg", "__57c4/images/superhero/suphero-01/x2/full/01suphero-full-10.jpg" ]
            },
            mult: {
                type: "DPS",
                baseValue: 15,
                lvlProgress: 7.5
            }
        }, {
            id: 2,
            type: 1,
            rare: "rare",
            name: "Kazuko Akki",
            imageManager: {
                icons: [ "__4f8f/images/superhero/suphero-02/x1/avatar/02suphero-ava-01.jpg", "__e737/images/superhero/suphero-02/x1/avatar/02suphero-ava-02.jpg", "__5658/images/superhero/suphero-02/x1/avatar/02suphero-ava-03.jpg", "__b2fb/images/superhero/suphero-02/x1/avatar/02suphero-ava-04.jpg", "__4aee/images/superhero/suphero-02/x1/avatar/02suphero-ava-05.jpg", "__8ff7/images/superhero/suphero-02/x1/avatar/02suphero-ava-06.jpg", "__6e6b/images/superhero/suphero-02/x1/avatar/02suphero-ava-07.jpg", "__af4f/images/superhero/suphero-02/x1/avatar/02suphero-ava-08.jpg", "__0e46/images/superhero/suphero-02/x1/avatar/02suphero-ava-09.jpg", "__1f5b/images/superhero/suphero-02/x1/avatar/02suphero-ava-10.jpg" ],
                images: [ "__344f/images/superhero/suphero-02/x1/02suphero-01.jpg", "__2e1b/images/superhero/suphero-02/x1/02suphero-02.jpg", "__9773/images/superhero/suphero-02/x1/02suphero-03.jpg", "__c5a9/images/superhero/suphero-02/x1/02suphero-04.jpg", "__ea89/images/superhero/suphero-02/x1/02suphero-05.jpg", "__4e67/images/superhero/suphero-02/x1/02suphero-06.jpg", "__668f/images/superhero/suphero-02/x1/02suphero-07.jpg", "__6307/images/superhero/suphero-02/x1/02suphero-08.jpg", "__7f75/images/superhero/suphero-02/x1/02suphero-09.jpg", "__85e5/images/superhero/suphero-02/x1/02suphero-10.jpg" ],
                thumbnails: [ "images/superhero/suphero-02/x1/tumba/02suphero-tumba-01.jpg", "__7e8d/images/superhero/suphero-02/x1/tumba/02suphero-tumba-02.jpg", "__4585/images/superhero/suphero-02/x1/tumba/02suphero-tumba-03.jpg", "__5189/images/superhero/suphero-02/x1/tumba/02suphero-tumba-04.jpg", "__7633/images/superhero/suphero-02/x1/tumba/02suphero-tumba-05.jpg", "__394c/images/superhero/suphero-02/x1/tumba/02suphero-tumba-06.jpg", "__9c36/images/superhero/suphero-02/x1/tumba/02suphero-tumba-07.jpg", "__a66a/images/superhero/suphero-02/x1/tumba/02suphero-tumba-08.jpg", "__2960/images/superhero/suphero-02/x1/tumba/02suphero-tumba-09.jpg", "__0f5f/images/superhero/suphero-02/x1/tumba/02suphero-tumba-10.jpg" ],
                fullimages: [ "__f404/images/superhero/suphero-02/x1/full/02suphero-full-01.jpg", "__c47b/images/superhero/suphero-02/x1/full/02suphero-full-02.jpg", "__da68/images/superhero/suphero-02/x1/full/02suphero-full-03.jpg", "__97f6/images/superhero/suphero-02/x1/full/02suphero-full-04.jpg", "__1b6f/images/superhero/suphero-02/x1/full/02suphero-full-05.jpg", "__0ac6/images/superhero/suphero-02/x1/full/02suphero-full-06.jpg", "__43d1/images/superhero/suphero-02/x1/full/02suphero-full-07.jpg", "__3262/images/superhero/suphero-02/x1/full/02suphero-full-08.jpg", "__e2d0/images/superhero/suphero-02/x1/full/02suphero-full-09.jpg", "__5cce/images/superhero/suphero-02/x1/full/02suphero-full-10.jpg" ],
                "icons@2x": [ "__cb6d/images/superhero/suphero-02/x2/avatar/02suphero-ava-01.jpg", "__ad13/images/superhero/suphero-02/x2/avatar/02suphero-ava-02.jpg", "__7c0c/images/superhero/suphero-02/x2/avatar/02suphero-ava-03.jpg", "__4b39/images/superhero/suphero-02/x2/avatar/02suphero-ava-04.jpg", "__6daf/images/superhero/suphero-02/x2/avatar/02suphero-ava-05.jpg", "__5d52/images/superhero/suphero-02/x2/avatar/02suphero-ava-06.jpg", "__6c2d/images/superhero/suphero-02/x2/avatar/02suphero-ava-07.jpg", "__5a6c/images/superhero/suphero-02/x2/avatar/02suphero-ava-08.jpg", "__cc0f/images/superhero/suphero-02/x2/avatar/02suphero-ava-09.jpg", "__2794/images/superhero/suphero-02/x2/avatar/02suphero-ava-10.jpg" ],
                "images@2x": [ "__0cc7/images/superhero/suphero-02/x2/02suphero-01.jpg", "__b684/images/superhero/suphero-02/x2/02suphero-02.jpg", "__d260/images/superhero/suphero-02/x2/02suphero-03.jpg", "__3ba9/images/superhero/suphero-02/x2/02suphero-04.jpg", "__15e8/images/superhero/suphero-02/x2/02suphero-05.jpg", "__8c23/images/superhero/suphero-02/x2/02suphero-06.jpg", "__b47a/images/superhero/suphero-02/x2/02suphero-07.jpg", "__6a5a/images/superhero/suphero-02/x2/02suphero-08.jpg", "__e1bf/images/superhero/suphero-02/x2/02suphero-09.jpg", "__9aa1/images/superhero/suphero-02/x2/02suphero-10.jpg" ],
                "thumbnails@2x": [ "images/superhero/suphero-02/x2/tumba/02suphero-tumba-01.jpg", "__34c6/images/superhero/suphero-02/x2/tumba/02suphero-tumba-02.jpg", "__d5ed/images/superhero/suphero-02/x2/tumba/02suphero-tumba-03.jpg", "__4090/images/superhero/suphero-02/x2/tumba/02suphero-tumba-04.jpg", "__42ca/images/superhero/suphero-02/x2/tumba/02suphero-tumba-05.jpg", "__d68b/images/superhero/suphero-02/x2/tumba/02suphero-tumba-06.jpg", "__67d3/images/superhero/suphero-02/x2/tumba/02suphero-tumba-07.jpg", "__09f5/images/superhero/suphero-02/x2/tumba/02suphero-tumba-08.jpg", "__d2af/images/superhero/suphero-02/x2/tumba/02suphero-tumba-09.jpg", "__cdb8/images/superhero/suphero-02/x2/tumba/02suphero-tumba-10.jpg" ],
                "fullimages@2x": [ "__493f/images/superhero/suphero-02/x2/full/02suphero-full-01.jpg", "__69d1/images/superhero/suphero-02/x2/full/02suphero-full-02.jpg", "__07da/images/superhero/suphero-02/x2/full/02suphero-full-03.jpg", "__b5f3/images/superhero/suphero-02/x2/full/02suphero-full-04.jpg", "__afee/images/superhero/suphero-02/x2/full/02suphero-full-05.jpg", "__dada/images/superhero/suphero-02/x2/full/02suphero-full-06.jpg", "__2ea0/images/superhero/suphero-02/x2/full/02suphero-full-07.jpg", "__a407/images/superhero/suphero-02/x2/full/02suphero-full-08.jpg", "__08ca/images/superhero/suphero-02/x2/full/02suphero-full-09.jpg", "__24d2/images/superhero/suphero-02/x2/full/02suphero-full-10.jpg" ]
            },
            mult: {
                type: "DPC",
                baseValue: 30,
                lvlProgress: 15
            }
        }, {
            id: 3,
            type: 1,
            rare: "common",
            name: "Miyako Tenma",
            imageManager: {
                icons: [ "__0a60/images/superhero/suphero-03/x1/avatar/03suphero-ava-01.jpg", "__faaf/images/superhero/suphero-03/x1/avatar/03suphero-ava-02.jpg", "__0daa/images/superhero/suphero-03/x1/avatar/03suphero-ava-03.jpg", "__fca6/images/superhero/suphero-03/x1/avatar/03suphero-ava-04.jpg", "__5037/images/superhero/suphero-03/x1/avatar/03suphero-ava-05.jpg", "__1297/images/superhero/suphero-03/x1/avatar/03suphero-ava-06.jpg", "__31a3/images/superhero/suphero-03/x1/avatar/03suphero-ava-07.jpg", "__81cd/images/superhero/suphero-03/x1/avatar/03suphero-ava-08.jpg", "__1bfd/images/superhero/suphero-03/x1/avatar/03suphero-ava-09.jpg", "__d6ab/images/superhero/suphero-03/x1/avatar/03suphero-ava-10.jpg" ],
                images: [ "__7043/images/superhero/suphero-03/x1/03suphero-01.jpg", "__b214/images/superhero/suphero-03/x1/03suphero-02.jpg", "__860b/images/superhero/suphero-03/x1/03suphero-03.jpg", "__e4f6/images/superhero/suphero-03/x1/03suphero-04.jpg", "__8d23/images/superhero/suphero-03/x1/03suphero-05.jpg", "__2674/images/superhero/suphero-03/x1/03suphero-06.jpg", "__de99/images/superhero/suphero-03/x1/03suphero-07.jpg", "__dfb4/images/superhero/suphero-03/x1/03suphero-08.jpg", "__aa08/images/superhero/suphero-03/x1/03suphero-09.jpg", "__e056/images/superhero/suphero-03/x1/03suphero-10.jpg" ],
                thumbnails: [ "images/superhero/suphero-03/x1/tumba/03suphero-tumba-01.jpg", "__ee21/images/superhero/suphero-03/x1/tumba/03suphero-tumba-02.jpg", "__6762/images/superhero/suphero-03/x1/tumba/03suphero-tumba-03.jpg", "__db02/images/superhero/suphero-03/x1/tumba/03suphero-tumba-04.jpg", "__f7e7/images/superhero/suphero-03/x1/tumba/03suphero-tumba-05.jpg", "__b6af/images/superhero/suphero-03/x1/tumba/03suphero-tumba-06.jpg", "__101c/images/superhero/suphero-03/x1/tumba/03suphero-tumba-07.jpg", "__2882/images/superhero/suphero-03/x1/tumba/03suphero-tumba-08.jpg", "__56cb/images/superhero/suphero-03/x1/tumba/03suphero-tumba-09.jpg", "__2284/images/superhero/suphero-03/x1/tumba/03suphero-tumba-10.jpg" ],
                fullimages: [ "__8f54/images/superhero/suphero-03/x1/full/03suphero-full-01.jpg", "__1387/images/superhero/suphero-03/x1/full/03suphero-full-02.jpg", "__4a6a/images/superhero/suphero-03/x1/full/03suphero-full-03.jpg", "__9975/images/superhero/suphero-03/x1/full/03suphero-full-04.jpg", "__d3d7/images/superhero/suphero-03/x1/full/03suphero-full-05.jpg", "__a07d/images/superhero/suphero-03/x1/full/03suphero-full-06.jpg", "__0879/images/superhero/suphero-03/x1/full/03suphero-full-07.jpg", "__1963/images/superhero/suphero-03/x1/full/03suphero-full-08.jpg", "__2695/images/superhero/suphero-03/x1/full/03suphero-full-09.jpg", "__315a/images/superhero/suphero-03/x1/full/03suphero-full-10.jpg" ],
                "icons@2x": [ "__2c3b/images/superhero/suphero-03/x2/avatar/03suphero-ava-01.jpg", "__0701/images/superhero/suphero-03/x2/avatar/03suphero-ava-02.jpg", "__7e8d/images/superhero/suphero-03/x2/avatar/03suphero-ava-03.jpg", "__3e17/images/superhero/suphero-03/x2/avatar/03suphero-ava-04.jpg", "__6b2d/images/superhero/suphero-03/x2/avatar/03suphero-ava-05.jpg", "__e3b9/images/superhero/suphero-03/x2/avatar/03suphero-ava-06.jpg", "__3b2d/images/superhero/suphero-03/x2/avatar/03suphero-ava-07.jpg", "__989a/images/superhero/suphero-03/x2/avatar/03suphero-ava-08.jpg", "__8a24/images/superhero/suphero-03/x2/avatar/03suphero-ava-09.jpg", "__fb88/images/superhero/suphero-03/x2/avatar/03suphero-ava-10.jpg" ],
                "images@2x": [ "__ec02/images/superhero/suphero-03/x2/03suphero-01.jpg", "__4231/images/superhero/suphero-03/x2/03suphero-02.jpg", "__696f/images/superhero/suphero-03/x2/03suphero-03.jpg", "__5963/images/superhero/suphero-03/x2/03suphero-04.jpg", "__7f09/images/superhero/suphero-03/x2/03suphero-05.jpg", "__2cfa/images/superhero/suphero-03/x2/03suphero-06.jpg", "__6525/images/superhero/suphero-03/x2/03suphero-07.jpg", "__c2ec/images/superhero/suphero-03/x2/03suphero-08.jpg", "__7830/images/superhero/suphero-03/x2/03suphero-09.jpg", "__1d34/images/superhero/suphero-03/x2/03suphero-10.jpg" ],
                "thumbnails@2x": [ "images/superhero/suphero-03/x2/tumba/03suphero-tumba-01.jpg", "__b843/images/superhero/suphero-03/x2/tumba/03suphero-tumba-02.jpg", "__cab1/images/superhero/suphero-03/x2/tumba/03suphero-tumba-03.jpg", "__37f8/images/superhero/suphero-03/x2/tumba/03suphero-tumba-04.jpg", "__1e07/images/superhero/suphero-03/x2/tumba/03suphero-tumba-05.jpg", "__1ec4/images/superhero/suphero-03/x2/tumba/03suphero-tumba-06.jpg", "__6497/images/superhero/suphero-03/x2/tumba/03suphero-tumba-07.jpg", "__199f/images/superhero/suphero-03/x2/tumba/03suphero-tumba-08.jpg", "__2dfb/images/superhero/suphero-03/x2/tumba/03suphero-tumba-09.jpg", "__0f2a/images/superhero/suphero-03/x2/tumba/03suphero-tumba-10.jpg" ],
                "fullimages@2x": [ "__f9e9/images/superhero/suphero-03/x2/full/03suphero-full-01.jpg", "__859d/images/superhero/suphero-03/x2/full/03suphero-full-02.jpg", "__e054/images/superhero/suphero-03/x2/full/03suphero-full-03.jpg", "__8f20/images/superhero/suphero-03/x2/full/03suphero-full-04.jpg", "__dfcf/images/superhero/suphero-03/x2/full/03suphero-full-05.jpg", "__c746/images/superhero/suphero-03/x2/full/03suphero-full-06.jpg", "__8a73/images/superhero/suphero-03/x2/full/03suphero-full-07.jpg", "__e6af/images/superhero/suphero-03/x2/full/03suphero-full-08.jpg", "__35c7/images/superhero/suphero-03/x2/full/03suphero-full-09.jpg", "__e2f8/images/superhero/suphero-03/x2/full/03suphero-full-10.jpg" ]
            },
            mult: {
                type: "gold",
                baseValue: 20,
                lvlProgress: 10
            }
        }, {
            id: 4,
            type: 1,
            rare: "uncommon",
            name: "Tsubasa Akuma",
            imageManager: {
                icons: [ "__f1a4/images/superhero/suphero-04/x1/avatar/04suphero-ava-01.jpg", "__ed5c/images/superhero/suphero-04/x1/avatar/04suphero-ava-02.jpg", "__4985/images/superhero/suphero-04/x1/avatar/04suphero-ava-03.jpg", "__4c76/images/superhero/suphero-04/x1/avatar/04suphero-ava-04.jpg", "__7722/images/superhero/suphero-04/x1/avatar/04suphero-ava-05.jpg", "__4b6c/images/superhero/suphero-04/x1/avatar/04suphero-ava-06.jpg", "__91da/images/superhero/suphero-04/x1/avatar/04suphero-ava-07.jpg", "__3abb/images/superhero/suphero-04/x1/avatar/04suphero-ava-08.jpg", "__57be/images/superhero/suphero-04/x1/avatar/04suphero-ava-09.jpg", "__4f17/images/superhero/suphero-04/x1/avatar/04suphero-ava-10.jpg" ],
                images: [ "__d95e/images/superhero/suphero-04/x1/04suphero-01.jpg", "__890f/images/superhero/suphero-04/x1/04suphero-02.jpg", "__3837/images/superhero/suphero-04/x1/04suphero-03.jpg", "__75f1/images/superhero/suphero-04/x1/04suphero-04.jpg", "__ef93/images/superhero/suphero-04/x1/04suphero-05.jpg", "__e925/images/superhero/suphero-04/x1/04suphero-06.jpg", "__f698/images/superhero/suphero-04/x1/04suphero-07.jpg", "__7f9e/images/superhero/suphero-04/x1/04suphero-08.jpg", "__cec7/images/superhero/suphero-04/x1/04suphero-09.jpg", "__9764/images/superhero/suphero-04/x1/04suphero-10.jpg" ],
                thumbnails: [ "images/superhero/suphero-04/x1/tumba/04suphero-tumba-01.jpg", "__4641/images/superhero/suphero-04/x1/tumba/04suphero-tumba-02.jpg", "__298a/images/superhero/suphero-04/x1/tumba/04suphero-tumba-03.jpg", "__f658/images/superhero/suphero-04/x1/tumba/04suphero-tumba-04.jpg", "__d313/images/superhero/suphero-04/x1/tumba/04suphero-tumba-05.jpg", "__8eec/images/superhero/suphero-04/x1/tumba/04suphero-tumba-06.jpg", "__96ed/images/superhero/suphero-04/x1/tumba/04suphero-tumba-07.jpg", "__d0e0/images/superhero/suphero-04/x1/tumba/04suphero-tumba-08.jpg", "__3113/images/superhero/suphero-04/x1/tumba/04suphero-tumba-09.jpg", "__a21a/images/superhero/suphero-04/x1/tumba/04suphero-tumba-10.jpg" ],
                fullimages: [ "__d73d/images/superhero/suphero-04/x1/full/04suphero-full-01.jpg", "__b51e/images/superhero/suphero-04/x1/full/04suphero-full-02.jpg", "__6a02/images/superhero/suphero-04/x1/full/04suphero-full-03.jpg", "__3197/images/superhero/suphero-04/x1/full/04suphero-full-04.jpg", "__cb25/images/superhero/suphero-04/x1/full/04suphero-full-05.jpg", "__4a24/images/superhero/suphero-04/x1/full/04suphero-full-06.jpg", "__8081/images/superhero/suphero-04/x1/full/04suphero-full-07.jpg", "__687b/images/superhero/suphero-04/x1/full/04suphero-full-08.jpg", "__1ab0/images/superhero/suphero-04/x1/full/04suphero-full-09.jpg", "__6db6/images/superhero/suphero-04/x1/full/04suphero-full-10.jpg" ],
                "icons@2x": [ "__ef8c/images/superhero/suphero-04/x2/avatar/04suphero-ava-01.jpg", "__ef8c/images/superhero/suphero-04/x2/avatar/04suphero-ava-02.jpg", "__de49/images/superhero/suphero-04/x2/avatar/04suphero-ava-03.jpg", "__7a27/images/superhero/suphero-04/x2/avatar/04suphero-ava-04.jpg", "__fc17/images/superhero/suphero-04/x2/avatar/04suphero-ava-05.jpg", "__3505/images/superhero/suphero-04/x2/avatar/04suphero-ava-06.jpg", "__4109/images/superhero/suphero-04/x2/avatar/04suphero-ava-07.jpg", "__68d1/images/superhero/suphero-04/x2/avatar/04suphero-ava-08.jpg", "__bf93/images/superhero/suphero-04/x2/avatar/04suphero-ava-09.jpg", "__54e7/images/superhero/suphero-04/x2/avatar/04suphero-ava-10.jpg" ],
                "images@2x": [ "__e300/images/superhero/suphero-04/x2/04suphero-01.jpg", "__2d6d/images/superhero/suphero-04/x2/04suphero-02.jpg", "__3026/images/superhero/suphero-04/x2/04suphero-03.jpg", "__5c0c/images/superhero/suphero-04/x2/04suphero-04.jpg", "__db8d/images/superhero/suphero-04/x2/04suphero-05.jpg", "__2396/images/superhero/suphero-04/x2/04suphero-06.jpg", "__2f64/images/superhero/suphero-04/x2/04suphero-07.jpg", "__affd/images/superhero/suphero-04/x2/04suphero-08.jpg", "__6d47/images/superhero/suphero-04/x2/04suphero-09.jpg", "__a53b/images/superhero/suphero-04/x2/04suphero-10.jpg" ],
                "thumbnails@2x": [ "images/superhero/suphero-04/x2/tumba/04suphero-tumba-01.jpg", "__d408/images/superhero/suphero-04/x2/tumba/04suphero-tumba-02.jpg", "__c3a8/images/superhero/suphero-04/x2/tumba/04suphero-tumba-03.jpg", "__928c/images/superhero/suphero-04/x2/tumba/04suphero-tumba-04.jpg", "__4bca/images/superhero/suphero-04/x2/tumba/04suphero-tumba-05.jpg", "__2064/images/superhero/suphero-04/x2/tumba/04suphero-tumba-06.jpg", "__6c2b/images/superhero/suphero-04/x2/tumba/04suphero-tumba-07.jpg", "__f85b/images/superhero/suphero-04/x2/tumba/04suphero-tumba-08.jpg", "__02c3/images/superhero/suphero-04/x2/tumba/04suphero-tumba-09.jpg", "__f66b/images/superhero/suphero-04/x2/tumba/04suphero-tumba-10.jpg" ],
                "fullimages@2x": [ "__ba96/images/superhero/suphero-04/x2/full/04suphero-full-01.jpg", "__e964/images/superhero/suphero-04/x2/full/04suphero-full-02.jpg", "__f08d/images/superhero/suphero-04/x2/full/04suphero-full-03.jpg", "__0508/images/superhero/suphero-04/x2/full/04suphero-full-04.jpg", "__e8a4/images/superhero/suphero-04/x2/full/04suphero-full-05.jpg", "__2fee/images/superhero/suphero-04/x2/full/04suphero-full-06.jpg", "__4140/images/superhero/suphero-04/x2/full/04suphero-full-07.jpg", "__a0fd/images/superhero/suphero-04/x2/full/04suphero-full-08.jpg", "__8bbc/images/superhero/suphero-04/x2/full/04suphero-full-09.jpg", "__f9a4/images/superhero/suphero-04/x2/full/04suphero-full-10.jpg" ]
            },
            mult: {
                type: "shards",
                baseValue: 30,
                lvlProgress: 15
            }
        } ];
    },
    127: function(e, a) {
        "use strict";
        e.exports = [ {
            id: 1,
            desc: "demons",
            heroesIds: [ 1, 2, 3, 4 ],
            lock: {
                vars: {
                    TUT_SH: {
                        isSet: !0
                    }
                }
            },
            price: {
                crowns: 600,
                chests: 1
            },
            maxStars: 1
        } ];
    },
    129: function(e, a) {
        "use strict";
        e.exports = {
            id: 3,
            reward: {
                timeskip: {
                    res: [ "gold", "shards" ],
                    time: 3600
                }
            },
            term: 86400
        };
    },
    132: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = [ {
            tabName: "heroes",
            tooltipText: r("Heroes"),
            to: "/"
        }, {
            tabName: "shop",
            tooltipText: r("Shop"),
            to: "/bank",
            path: "path",
            lock: {
                counters: {
                    SW_SP: 1
                }
            }
        }, {
            tabName: "achiev",
            tooltipText: r("Achievements"),
            to: "/achievments",
            lock: {
                counters: {
                    ACHV: 1
                }
            }
        }, {
            tabName: "guild",
            tooltipText: r("Guild base"),
            to: "/guild",
            lock: {
                counters: {
                    gems: 1
                }
            }
        }, {
            tabName: "album",
            tooltipText: r("Gallery"),
            to: "/galery",
            lock: {
                vars: {
                    PICS: {
                        isSet: !0
                    }
                }
            }
        }, {
            tabName: "super-heroes",
            tooltipText: r("Super Heroes"),
            to: "/super-heroes",
            lock: {
                vars: {
                    TUT_SH: {
                        gte: 3
                    }
                }
            }
        }, {
            tabName: "master-guild",
            tooltipText: r("Master Guild"),
            path: "path",
            to: "/master-guild",
            lock: {
                counters: {
                    charisma_res: 1
                }
            }
        } ];
    },
    140: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = {
            updates: [ {
                id: 1,
                header: "Patch notes - <b>2017-08-30</b>",
                date: "2017-08-30",
                text: r("<b>Major changes</b>\n 1.Added 930 new pictures from your favorite artists!\n 2.Added 5 new monsters\n 3.There is new panel during a boss fight, that shows if you got a drop from boss or not.\n <b>Minor changes</b>\n 1.Statistic tab now will be accessible from the special button in the top right corner of the screen.\n 2.Items costs in crowns now displaying fully.\n <b>In a short time - Royal Tournament, new game modes and much more! Stay tuned!</b>\n")
            } ],
            lock: {
                counters: {
                    PASSLOCK: 1
                }
            }
        };
    },
    230: function(e, a) {
        "use strict";
        e.exports = [ {
            id: 1,
            type: "crowns",
            amount: 100,
            price: {
                dollars: 1
            }
        }, {
            id: 2,
            type: "crowns",
            amount: 150,
            price: {
                dollars: 2
            }
        }, {
            id: 3,
            type: "crowns",
            amount: 400,
            price: {
                dollars: 5
            }
        }, {
            id: 4,
            type: "crowns",
            amount: 1e3,
            price: {
                dollars: 10
            }
        }, {
            id: 5,
            type: "crowns",
            amount: 2200,
            price: {
                dollars: 20
            }
        }, {
            id: 6,
            type: "crowns",
            amount: 5e3,
            price: {
                dollars: 40
            }
        } ];
    },
    266: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = [ {
            description: r("Clicks"),
            counter_name: "CLK"
        }, {
            description: r("Total Click Damage"),
            counter_name: "C::SCLKDMG"
        }, {
            description: r("Total Click Damage (across Reborns)"),
            counter_name: "SCLKDMG"
        }, {
            description: r("Total Skill Damage"),
            counter_name: "SLDMG"
        }, {
            description: r("Hero Level Ups"),
            counter_name: "C::HLVL"
        }, {
            description: r("Hero Level Ups (across Reborns)"),
            counter_name: "HLVL"
        }, {
            description: r("Hero Promotions"),
            counter_name: "HPRMT"
        }, {
            description: r("Max DPS (across Reborns)"),
            counter_name: "DPS"
        }, {
            description: r("Max Location"),
            counter_name: "C::MAXLOCK"
        }, {
            description: r("Max Location (across Reborns)"),
            counter_name: "MAXLOCK"
        }, {
            description: r("Monster Kills"),
            counter_name: "C::MSTRKL"
        }, {
            description: r("Monster Kills (across Reborns)"),
            counter_name: "MSTRKL"
        }, {
            description: r("Gold"),
            counter_name: "C::gold"
        }, {
            description: r("Total Gold"),
            counter_name: "gold"
        }, {
            description: r("Memory shards"),
            counter_name: "C::shards"
        }, {
            description: r("Memory shards (across Reborns)"),
            counter_name: "shards"
        }, {
            description: r("Gems"),
            counter_name: "gems"
        }, {
            description: r("Rooms"),
            counter_name: "RM"
        }, {
            description: r("Combo Rooms"),
            counter_name: "CBRM"
        }, {
            description: r("Achievments"),
            counter_name: "ACHV"
        }, {
            description: r("One Star Pictures"),
            counter_name: "OSRPR"
        }, {
            description: r("Two Star Pictures"),
            counter_name: "TSRPR"
        }, {
            description: r("Three Star Pictures"),
            counter_name: "THSRPR"
        } ];
    },
    295: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = [ {
            id: 1,
            stages: {
                stages: [ {
                    changes: {
                        url: "/",
                        text: r("This is a monster, click him untill you defeat him and get the rewards."),
                        cssClass: "tutor01",
                        action: {
                            events: [ {
                                name: "monsterKilled",
                                value: "__any__"
                            } ]
                        },
                        reward: {
                            vars: {
                                TUT: 1,
                                TUT_STEP: 1
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT: {
                                gte: 1
                            }
                        }
                    },
                    changes: {
                        url: "/",
                        text: r("Defeated monsters give you rewards - gold and memory shards, collected automatically. Now continue clicking and killing the monsters."),
                        cssClass: "tutor01",
                        action: {
                            clickOk: !0
                        },
                        goal: {
                            counters: {
                                "C::gold": 10
                            }
                        },
                        reward: {
                            vars: {
                                TUT: 2,
                                TUT_STEP: 2
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT: {
                                gte: 2
                            }
                        }
                    },
                    changes: {
                        url: "/",
                        invisible: !0,
                        goal: {
                            counters: {
                                "C::gold": 10
                            }
                        },
                        reward: {
                            vars: {
                                TUT: 3,
                                TUT_STEP: 3
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT: {
                                gte: 3
                            }
                        }
                    },
                    changes: {
                        url: "/",
                        text: r("Good job. Now you can buy your first hero. Heroes attack and deal damage (called DPS) on their own. Buy this hero."),
                        cssClass: "tutor04 right",
                        goal: {
                            counters: {
                                HLVL: 1
                            }
                        },
                        reward: {
                            vars: {
                                TUT: 4,
                                TUT_STEP: 4
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT: {
                                gte: 4
                            }
                        }
                    }
                } ]
            }
        }, {
            id: 2,
            stages: {
                stages: [ {
                    condition: {
                        counters: {
                            shards: "10"
                        },
                        vars: {
                            TUT: {
                                gte: 4
                            }
                        }
                    },
                    changes: {
                        url: [ "/", "/achievments", "/stats" ],
                        text: r("Open pictures menu"),
                        cssClass: "tutor05",
                        action: {
                            popupOpen: "buyPicture"
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 1,
                                TUT_STEP: 5
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 1
                            }
                        }
                    },
                    changes: {
                        popup: "buyPicture",
                        text: r("You have enough Memory shards for open a picture. Click here for get random picture."),
                        cssClass: "tutor06 right",
                        goal: {
                            counters: {
                                Pictures: 1
                            }
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 3,
                                TUT_STEP: 6
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 3
                            }
                        }
                    },
                    changes: {
                        popup: "buyPicture",
                        text: r("Close this window"),
                        cssClass: "tutor07",
                        action: {
                            popupClose: "buyPicture"
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 4,
                                TUT_STEP: 7
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 4
                            }
                        }
                    },
                    changes: {
                        url: [ "/", "/achievments", "/stats", "/bank/heroes", "/bank/sale", "/bank/items", "/bank/top-up", "/bank/vip", "/guild" ],
                        text: r("Open the Gallery tab"),
                        cssClass: "tutor08 right",
                        action: {
                            locationChange: "/galery"
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 5,
                                TUT_STEP: 8
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 5
                            }
                        }
                    },
                    changes: {
                        url: "/galery",
                        text: r("Click on a picture for look at it closely"),
                        cssClass: "tutor09",
                        action: {
                            popupOpen: "picture"
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 7,
                                TUT_STEP: 9
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 7
                            }
                        }
                    },
                    changes: {
                        url: [ "/", "/achievments", "/stats" ],
                        text: r("Open pictures menu"),
                        cssClass: "tutor05",
                        action: {
                            popupOpen: "buyPicture"
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 8,
                                TUTALBUMREWARD: 1,
                                TUT_STEP: 10
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 8
                            }
                        }
                    },
                    changes: {
                        popup: "buyPicture",
                        text: r("I have present for you: 45 Memory shards! Now you can buy picture with your favorite tag!"),
                        cssClass: "tutor15",
                        action: {
                            dialogOpen: "confirm"
                        },
                        goal: {
                            counters: {
                                Pictures: 2
                            }
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 9,
                                TUT_STEP: 11
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 9
                            }
                        }
                    },
                    changes: {
                        dialog: "confirm",
                        text: r("You haven't yet favorite tags. Click here to select."),
                        cssClass: "tutor12b",
                        action: {
                            popupClose: "buyPicture"
                        },
                        goal: {
                            counters: {
                                Pictures: 2
                            }
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 10,
                                TUT_STEP: 12
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 10
                            }
                        }
                    },
                    changes: {
                        url: "/galery",
                        text: r("Select favorite tag. Choose wisely, removing favorite tags cost crowns."),
                        cssClass: "tutor14",
                        action: {
                            popupOpen: "favorite"
                        },
                        goal: {
                            counters: {
                                Pictures: 2
                            }
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 11,
                                TUT_STEP: 13
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 11
                            }
                        }
                    },
                    changes: {
                        popup: "favorite",
                        text: r("Click YES, if you want this tag."),
                        cssClass: "tutor14b",
                        action: {
                            events: [ {
                                name: "setFavoriteTag",
                                value: "__any__"
                            } ]
                        },
                        goal: {
                            counters: {
                                Pictures: 2
                            }
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 12,
                                TUT_STEP: 14
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 12
                            }
                        }
                    },
                    changes: {
                        url: [ "/", "/achievments", "/stats" ],
                        text: r("Open pictures menu and buy picture with your favorite tag!"),
                        cssClass: "tutor05",
                        action: {
                            popupOpen: "buyPicture"
                        },
                        goal: {
                            counters: {
                                Pictures: 2
                            }
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 13,
                                TUT_STEP: 15
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 13
                            }
                        }
                    }
                } ]
            }
        }, {
            id: 3,
            stages: {
                stages: [ {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 7
                            }
                        }
                    },
                    changes: {
                        url: "/galery",
                        text: r("Open pictures menu"),
                        cssClass: "tutor11",
                        action: {
                            popupOpen: "buyPicture"
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 8,
                                TUTALBUMREWARD: 1,
                                TUT_STEP: 10
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 8
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 12
                            }
                        }
                    },
                    changes: {
                        url: "/galery",
                        text: r("Open pictures menu and buy picture with your favorite tag!"),
                        cssClass: "tutor11",
                        action: {
                            popupOpen: "buyPicture"
                        },
                        reward: {
                            vars: {
                                TUTALBUM: 13,
                                TUT_STEP: 15
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 13
                            }
                        }
                    }
                } ]
            }
        }, {
            id: 5,
            stages: {
                stages: [ {
                    condition: {
                        vars: {
                            TUTALBUM: {
                                gte: 13
                            }
                        },
                        counters: {
                            MAXLOCK: 9
                        }
                    },
                    changes: {
                        url: "/",
                        text: r("Greetings, Hero! The gates of hell were opened, and four demonesses fled from it. Catch them and they will benefit you."),
                        cssClass: "tutor-sh-1",
                        action: {
                            clickOk: !0
                        },
                        goal: {
                            vars: {
                                QT_SH: 1
                            }
                        },
                        reward: {
                            vars: {
                                TUT_SH: 1
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 1
                            }
                        }
                    },
                    changes: {
                        url: "/",
                        invisible: !0,
                        goal: {
                            vars: {
                                QT_SH: 1
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 1
                            },
                            QT_SH: {
                                gte: 1
                            }
                        }
                    },
                    changes: {
                        url: "/",
                        text: r("You got the chest, open it!"),
                        cssClass: "tutor-sh-2",
                        action: {
                            popupOpen: "superChest"
                        },
                        reward: {
                            vars: {
                                TUT_SH: 2
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 2
                            }
                        }
                    },
                    changes: {
                        popup: "superChest",
                        text: r("Click here to open the chest."),
                        cssClass: "tutor-sh-3",
                        action: {
                            events: [ {
                                name: "chestBuyed",
                                value: "__any__"
                            } ]
                        },
                        goal: {
                            counters: {
                                SHST: 1
                            }
                        },
                        reward: {
                            vars: {
                                TUT_SH: 3
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 3
                            }
                        }
                    },
                    changes: {
                        url: "/",
                        text: r("Open Superheroes tab."),
                        cssClass: "tutor-sh-4",
                        action: {
                            locationChange: "/super-heroes"
                        },
                        reward: {
                            vars: {
                                TUT_SH: 4
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 4
                            }
                        }
                    },
                    changes: {
                        url: "/super-heroes",
                        text: r("Here you can command your superheroes. They can actively help you or give you a passive bonus. Choose this hero."),
                        cssClass: "tutor-sh-5",
                        action: {
                            events: [ {
                                name: "heroChoosed",
                                value: "__any__"
                            } ]
                        },
                        reward: {
                            vars: {
                                TUT_SH: 5
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 5
                            }
                        }
                    },
                    changes: {
                        url: "/super-heroes",
                        text: r("First, activate your hero and he will bring 10 times more benefit! But remember that only one hero at time can be active."),
                        cssClass: "tutor-sh-5-2",
                        action: {
                            events: [ {
                                name: "heroActivated",
                                value: "__any__"
                            } ]
                        },
                        goal: {
                            vars: {
                                __SH_AC: 2
                            }
                        },
                        reward: {
                            vars: {
                                TUT_SH: 6
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 6
                            }
                        }
                    },
                    changes: {
                        url: "/super-heroes",
                        text: r("The levels of heroes can be increased for the essence. Essence can be obtained by killing monsters and bosses. Each hero level increases the active and passive bonus."),
                        cssClass: "tutor-sh-6",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_SH: 7
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 7
                            }
                        }
                    },
                    changes: {
                        url: "/super-heroes",
                        text: r("Stars can be obtained from special chests. Each star multiplies hero bonuses"),
                        cssClass: "tutor-sh-7",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_SH: 8
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 8
                            }
                        }
                    },
                    changes: {
                        url: "/super-heroes",
                        text: r("The appearance of the hero varies depending on its level and the number of stars."),
                        cssClass: "tutor-sh-8",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_SH: 9
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 9
                            }
                        }
                    },
                    changes: {
                        url: "/super-heroes",
                        text: r("Now collect all possible superheroes. Good luck!"),
                        cssClass: "tutor-sh-9",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_SH: 10
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_SH: {
                                gte: 10
                            }
                        }
                    }
                } ]
            }
        }, {
            id: 6,
            stages: {
                stages: [ {
                    condition: {
                        counters: {
                            charisma_res: 10
                        }
                    },
                    changes: {
                        url: "/",
                        text: r("Wow, what is this? Magical gem? Can it make you stronger?"),
                        cssClass: "tutor-mr-gd-01",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 1
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 1
                            }
                        }
                    },
                    changes: {
                        url: "/",
                        text: r("Click here"),
                        cssClass: "tutor-mr-gd-02 right",
                        action: {
                            locationChange: "/master-guild/stats"
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 2
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 2
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("It seems that you can become more powerful here."),
                        cssClass: "tutor-mr-gd-03",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 3
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 3
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("To improve your attributes, you need gems. The number on the left - how many gems you've got, the number on the right - how many do you need to improve."),
                        cssClass: "tutor-mr-gd-04",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 4
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 4
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("This is a progress of the attribute's improvement. When it is full, the attribute's level is increased by one"),
                        cssClass: "tutor-mr-gd-05",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 5
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 5
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("This is a level up button. The chance of level up is 50% initially. For the players of VIP 5 and more the chance is always 100%."),
                        cssClass: "tutor-mr-gd-06",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 6
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 6
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("Click here to use the gems to improve the attribute."),
                        cssClass: "tutor-mr-gd-07",
                        goal: {
                            either: [ {
                                counters: {
                                    stat_up_try_charisma: 1
                                }
                            }, {
                                counters: {
                                    charisma_attemp: 1
                                }
                            }, {
                                counters: {
                                    charisma: 1
                                }
                            } ]
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 7
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 7
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("Level hasn't increased, but you've made half of the progress. Your gems are spent, so I'll give you some to try again."),
                        cssClass: "tutor-mr-gd-08",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 8
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 8
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("Let's level it up!"),
                        cssClass: "tutor-mr-gd-07",
                        goal: {
                            counters: {
                                charisma: 1
                            }
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 9
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 9
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("The attribute has leveled up, so as the bonus. Keep up the good work and become a strongest guild master in the world!"),
                        cssClass: "tutor-mr-gd-09",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 10
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 10
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/stats",
                        text: r("Click here"),
                        cssClass: "tutor-mr-gd-10",
                        action: {
                            locationChange: "/master-guild/abilities"
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 11
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 11
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/abilities",
                        text: r("Here you can strengthen or modify your skills, but you will need the Rebirth gems."),
                        cssClass: "tutor-mr-gd-03",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 12
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 12
                            }
                        }
                    },
                    changes: {
                        url: "/master-guild/abilities",
                        text: r("You know now how to increase your power. Here's a quest for you."),
                        cssClass: "tutor-mr-gd-11",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUT_MR_GD: 13
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUT_MR_GD: {
                                gte: 13
                            }
                        }
                    }
                } ]
            }
        }, {
            id: 4,
            stages: {
                stages: [ {
                    condition: {
                        counters: {
                            HLVL: 1e3
                        },
                        vars: {
                            TUT_SH: {
                                gte: 10
                            }
                        }
                    },
                    changes: {
                        url: [ "/" ],
                        text: r("It's time to reborn"),
                        cssClass: "tutor19",
                        action: {
                            popupOpen: "reborn",
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUTGUILD: 1,
                                TUT_STEP: 16
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTGUILD: {
                                gte: 1
                            }
                        }
                    },
                    changes: {
                        popup: "reborn",
                        text: r("Press 'Yes' to lose current progress, but get special resource for build guild base"),
                        cssClass: "tutor20",
                        action: {
                            events: [ {
                                name: "reborn",
                                value: "__any__"
                            } ]
                        },
                        reward: {
                            vars: {
                                TUTGUILD: 2,
                                TUT_STEP: 17
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTGUILD: {
                                gte: 2
                            }
                        }
                    },
                    changes: {
                        url: [ "/" ],
                        text: r("Now guild base is open for you"),
                        cssClass: "tutor18",
                        action: {
                            locationChange: "/guild"
                        },
                        reward: {
                            vars: {
                                TUTGUILD: 3,
                                TUT_STEP: 18
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTGUILD: {
                                gte: 3
                            }
                        }
                    },
                    changes: {
                        url: [ "/guild" ],
                        text: r("Build first room and receive reward!"),
                        cssClass: "tutor21",
                        action: {
                            events: [ {
                                name: "roomBuy",
                                value: "__any__"
                            } ]
                        },
                        goal: {
                            counters: {
                                RM: 1
                            }
                        },
                        reward: {
                            vars: {
                                TUTGUILD: 4,
                                TUT_STEP: 19
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTGUILD: {
                                gte: 4
                            }
                        }
                    },
                    changes: {
                        url: [ "/guild" ],
                        text: r("Congratulations! Now this room gives you passive bonus. In reward you will get enough gems for build few rooms"),
                        cssClass: "tutor22",
                        action: {
                            clickOk: !0
                        },
                        reward: {
                            vars: {
                                TUTGUILD: 5,
                                TUTGUILDREWARD: 1,
                                TUT_STEP: 20
                            }
                        }
                    }
                }, {
                    condition: {
                        vars: {
                            TUTGUILD: {
                                gte: 5
                            }
                        }
                    }
                } ]
            }
        } ];
    },
    374: function(e, a) {
        "use strict";
        e.exports = [ {
            label: "I",
            dpc: 10,
            dps: 10,
            gold: 5
        }, {
            label: "II",
            dpc: 15,
            dps: 15,
            gold: 10,
            shards: 5
        }, {
            label: "III",
            dpc: 20,
            dps: 20,
            gold: 15,
            shards: 10,
            gems: 5
        }, {
            label: "IV",
            dpc: 25,
            dps: 25,
            gold: 20,
            shards: 15,
            gems: 10,
            favoriteTag: 1,
            freeChest: 1
        }, {
            label: "V",
            dpc: 30,
            dps: 30,
            gold: 25,
            shards: 20,
            gems: 15,
            favoriteTag: 2,
            masterVip: !0,
            freeChest: 1
        }, {
            label: "VI",
            dpc: 35,
            dps: 35,
            gold: 30,
            shards: 25,
            gems: 20,
            favoriteTag: 2,
            masterVip: !0,
            freeChest: 1
        }, {
            label: "VII",
            dpc: 40,
            dps: 40,
            gold: 35,
            shards: 30,
            gems: 25,
            favoriteTag: 3,
            masterVip: !0,
            freeChest: 2
        }, {
            label: "VIII",
            dpc: 45,
            dps: 45,
            gold: 40,
            shards: 35,
            gems: 30,
            favoriteTag: 3,
            freeChest: 2,
            masterVip: !0,
            fullDiscount: 5
        }, {
            label: "IX",
            dpc: 50,
            dps: 50,
            gold: 45,
            shards: 40,
            gems: 35,
            favoriteTag: 3,
            freeChest: 2,
            masterVip: !0,
            fullDiscount: 10
        }, {
            label: "X",
            dpc: 60,
            dps: 60,
            gold: 50,
            shards: 45,
            gems: 40,
            favoriteTag: 4,
            freeChest: 3,
            masterVip: !0,
            fullDiscount: 15
        } ];
    },
    433: function(e, a) {
        "use strict";
        e.exports = [ {
            id: 1,
            title: "title1",
            author: "artist1",
            source: "jojo",
            tags: "1 2 3 4"
        }, {
            id: 2,
            title: "title2",
            author: "artist2",
            source: "naruto",
            tags: "1 3 4"
        }, {
            id: 3,
            title: "title3",
            author: "artist1",
            source: "bleach",
            tags: "2 3"
        }, {
            id: 4,
            title: "title4",
            author: "artist4",
            source: "onepiece",
            tags: "3 4"
        } ];
    },
    434: function(e, a) {
        "use strict";
        e.exports = {
            id: 2,
            noStart: !0,
            stopped: !1,
            nonstop: !0,
            discount: 15,
            className: "models/specialOffers/HeroSale",
            term: 86400
        };
    },
    435: function(e, a) {
        "use strict";
        e.exports = {
            id: 1,
            noStart: !0,
            stopped: !1,
            discount: 50,
            className: "models/specialOffers/ItemSale",
            changes: {
                100213: {
                    price: {
                        crowns: 25
                    }
                },
                100216: {
                    price: {
                        crowns: 25
                    }
                },
                100219: {
                    price: {
                        crowns: 50
                    }
                },
                100223: {
                    price: {
                        crowns: 240
                    }
                },
                100227: {
                    price: {
                        crowns: 2e3
                    }
                },
                100228: {
                    price: {
                        crowns: 250
                    }
                }
            },
            term: 57600,
            lock: {
                counters: {
                    Pictures: 7
                }
            }
        };
    },
    436: function(e, a) {
        e.exports = {
            locations: [ {
                id: 1,
                image: "__f16c/images/back/01-Forest-1.jpg",
                platforms: [ 1, 4, 9, 14 ],
                mobs: [ 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 2,
                image: "__203a/images/back/02-Forest-2.jpg",
                platforms: [ 2, 6, 7 ],
                mobs: [ 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 3,
                image: "__5727/images/back/03-Desert.jpg",
                platforms: [ 3, 5, 11 ],
                mobs: [ 4, 5, 6, 10, 16, 18, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 4,
                image: "__e7a2/images/back/04-Town-Square-1.jpg",
                platforms: [ 1, 4, 15 ],
                mobs: [ 4, 5, 7, 8, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 5,
                image: "__f63e/images/back/04-Town-Square-2.jpg",
                platforms: [ 1, 4, 15 ],
                mobs: [ 4, 5, 7, 8, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 6,
                image: "__41dc/images/back/05-Beach.jpg",
                platforms: [ 5, 9, 12 ],
                mobs: [ 1, 2, 6, 10, 16, 19, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 7,
                image: "__45db/images/back/06-Cave.jpg",
                platforms: [ 2, 6, 11 ],
                mobs: [ 5, 10, 11, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 8,
                image: "__fd76/images/back/07-Cemetery.jpg",
                platforms: [ 7, 10 ],
                mobs: [ 10, 11, 12, 13, 20, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 9,
                image: "__70f4/images/back/08-Snow-tundra.jpg",
                platforms: [ 8 ],
                mobs: [ 7, 8, 9, 10, 18, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 10,
                image: "__cf2f/images/back/09-River.jpg",
                platforms: [ 1, 5, 9 ],
                mobs: [ 1, 2, 3, 9, 11, 16, 17, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 11,
                image: "__5483/images/back/10-Marshes.jpg",
                platforms: [ 6, 10, 13 ],
                mobs: [ 1, 2, 3, 9, 11, 16, 17, 19, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 12,
                image: "__d967/images/back/11-Mountain.jpg",
                platforms: [ 3, 8, 11 ],
                mobs: [ 3, 4, 5, 6, 15, 18, 20, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 13,
                image: "__1e61/images/back/12-Undersea-world.jpg",
                platforms: [ 5, 12, 14 ],
                mobs: [ 1, 3, 9, 10, 17, 19, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 14,
                image: "__bffa/images/back/13-Astral.jpg",
                platforms: [ 13 ],
                mobs: [ 4, 5, 6, 8, 13, 15, 19, 20, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 15,
                image: "__3064/images/back/14-Jungle.jpg",
                platforms: [ 1, 10, 14 ],
                mobs: [ 1, 2, 3, 11, 12, 16, 17, 19, 21, 22, 23, 24, 25, 26 ]
            }, {
                id: 16,
                image: "__4887/images/back/15-Interior-1.jpg",
                platforms: [ 15 ],
                mobs: [ 4, 5, 6, 7, 8, 12, 13, 18, 21, 22, 23, 24, 25, 26 ]
            } ],
            floors: [ {
                id: 1,
                image: "__1f2a/images/platforms/platform-001.png"
            }, {
                id: 2,
                image: "__9b3f/images/platforms/platform-002.png"
            }, {
                id: 3,
                image: "__1804/images/platforms/platform-003.png"
            }, {
                id: 4,
                image: "__c23a/images/platforms/platform-004.png"
            }, {
                id: 5,
                image: "__99a8/images/platforms/platform-005.png"
            }, {
                id: 6,
                image: "__7750/images/platforms/platform-006.png"
            }, {
                id: 7,
                image: "__96ed/images/platforms/platform-007.png"
            }, {
                id: 8,
                image: "__eeb9/images/platforms/platform-008.png"
            }, {
                id: 9,
                image: "__95e8/images/platforms/platform-009.png"
            }, {
                id: 10,
                image: "__a994/images/platforms/platform-010.png"
            }, {
                id: 11,
                image: "__8b65/images/platforms/platform-011.png"
            }, {
                id: 12,
                image: "__33b3/images/platforms/platform-012.png"
            }, {
                id: 13,
                image: "__3107/images/platforms/platform-013.png"
            }, {
                id: 14,
                image: "__c066/images/platforms/platform-014.png"
            }, {
                id: 15,
                image: "__724e/images/platforms/platform-015.png"
            } ]
        };
    },
    437: function(e, a, i) {
        var r;
        r = i(26)._tr, e.exports = {
            prefix: [ r("Weak"), r("Yapping"), r("Normal"), r("Strong"), r("Awful"), r("Clumsy"), r("Coquettish"), r("Crafty"), r("Darned"), r("Disgusting"), r("Dwarfy"), r("Fanged"), r("Fat"), r("Fussy"), r("Giggling"), r("Hateful"), r("Horrible"), r("Jumpy"), r("Levitating"), r("Morbid"), r("Nameless"), r("Old"), r("Plump"), r("Quivering"), r("Rotten"), r("Scared"), r("Shaggy"), r("Sharp-eared"), r("Single-eared"), r("Squared"), r("Three-toed"), r("Ungrateful"), r("Unnoticeable"), r("Watchdog") ],
            mobs: [ {
                id: 1,
                name: r("Slime"),
                image: "__cf2d/images/monsters/monster0001.png",
                movie: "monster01"
            }, {
                id: 2,
                name: r("Orc"),
                image: "__1423/images/monsters/monster0003.png",
                movie: "monster02"
            }, {
                id: 3,
                name: r("Tentacle Beast"),
                image: "__49b1/images/monsters/monster0005.png",
                movie: "monster03"
            }, {
                id: 4,
                name: r("Incubus"),
                image: "__390a/images/monsters/monster0007.png",
                movie: "monster04"
            }, {
                id: 5,
                name: r("Cerberus"),
                image: "__3aaa/images/monsters/monster0009.png",
                movie: "monster05"
            }, {
                id: 6,
                name: r("Succubus"),
                image: "__463d/images/monsters/monster0011.png",
                movie: "monster06"
            }, {
                id: 7,
                name: r("Ninja"),
                image: "__8bc3/images/monsters/monster0013.png",
                movie: "monster07"
            }, {
                id: 8,
                name: r("Rogue mage"),
                image: "__35e0/images/monsters/monster0015.png",
                movie: "monster08"
            }, {
                id: 9,
                name: r("Dragon"),
                image: "__8885/images/monsters/monster0017.png",
                movie: "monster09"
            }, {
                id: 10,
                name: r("Oni"),
                image: "__7961/images/monsters/monster0019.png",
                movie: "monster10"
            }, {
                id: 11,
                name: r("Spider"),
                image: "__d984/images/monsters/monster0021.png",
                movie: "monster11"
            }, {
                id: 12,
                name: r("Dark Elf"),
                image: "__7e35/images/monsters/monster0023.png",
                movie: "monster12"
            }, {
                id: 13,
                name: r("Vampire"),
                image: "__68d5/images/monsters/monster0025.png",
                movie: "monster13"
            }, {
                id: 14,
                name: r("Mimic chest"),
                image: "__2f97/images/monsters/monster0027.png",
                movie: "monster14"
            }, {
                id: 15,
                name: r("Mimic chest"),
                image: "__2f97/images/monsters/monster0027.png",
                movie: "monster14"
            }, {
                id: 16,
                name: r("Lion"),
                image: "__69cb/images/monsters/monster0031.png",
                movie: "monster16"
            }, {
                id: 17,
                name: r("Lizardman"),
                image: "__5076/images/monsters/monster0033.png",
                movie: "monster17"
            }, {
                id: 18,
                name: r("Lizardman"),
                image: "__5076/images/monsters/monster0033.png",
                movie: "monster17"
            }, {
                id: 19,
                name: r("Poke-monster"),
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster19"
            }, {
                id: 20,
                name: r("Poke-monster"),
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster19"
            }, {
                id: 21,
                name: "Kitsune",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster21",
                type: "strip"
            }, {
                id: 22,
                name: "Amur",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster22",
                type: "strip"
            }, {
                id: 23,
                name: "Panda",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster23",
                type: "strip"
            }, {
                id: 24,
                name: "Angel girl",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster24",
                type: "strip"
            }, {
                id: 25,
                name: "Ice elemental",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster25",
                type: "strip"
            }, {
                id: 26,
                name: "Ogre girl",
                image: "__61e4/images/monsters/monster0037.png",
                movie: "monster26",
                type: "strip"
            } ]
        };
    },
    438: function(e, a, i) {
        "use strict";
        var r, t;
        t = i(26)._tr, r = i(8), e.exports = {
            term: 86400,
            lock: {
                counters: {
                    MAXLOCK: 5
                }
            },
            quests: [ {
                id: 1001,
                description: t("Open {pictures} pictures", {
                    pictures: "5"
                }),
                rewardIcon: "rc/ic-abil-butil@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 0,
                isFirstQuests: !0,
                objective: {
                    counter: "Pictures",
                    value: r("5e+0"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "shards" ],
                        time: 1080
                    }
                }
            }, {
                id: 1002,
                description: t("Finish {levels} levels", {
                    levels: "5"
                }),
                rewardIcon: "rc/ic-abil-gold@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 0,
                isFirstQuests: !0,
                objective: {
                    counter: "PASSLOCK",
                    value: r("5e+0"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "gold" ],
                        time: 1080
                    }
                }
            }, {
                id: 1003,
                description: t("Open {pictures} pictures with a favorite tag", {
                    pictures: "5"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "25",
                type: "quest_offer",
                weight: 0,
                isFirstQuests: !0,
                objective: {
                    counter: "FPictures",
                    value: r("5e+0"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("2.5e+1")
                    }
                }
            }, {
                id: 1004,
                description: t("Kill {count} monsters", {
                    count: "25"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "3%",
                type: "quest_offer",
                weight: 0,
                isFirstQuests: !0,
                objective: {
                    counter: "MSTRKL",
                    value: r("2.5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .03
                    } ] ]
                }
            }, {
                id: 1,
                description: t("Open {pictures} pictures", {
                    pictures: "10"
                }),
                rewardIcon: "rc/ic-abil-butil@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 6,
                objective: {
                    counter: "Pictures",
                    value: r("1e+1"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "shards" ],
                        time: 360
                    }
                }
            }, {
                id: 2,
                description: t("Open {pictures} pictures", {
                    pictures: "25"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "5",
                type: "quest_offer",
                weight: 4,
                objective: {
                    counter: "Pictures",
                    value: r("2.5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("5e+0")
                    }
                }
            }, {
                id: 3,
                description: t("Open {pictures} pictures", {
                    pictures: "50"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "1%",
                type: "quest_offer",
                weight: 2,
                objective: {
                    counter: "Pictures",
                    value: r("5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .01
                    } ] ]
                }
            }, {
                id: 4,
                description: t("Finish {levels} levels", {
                    levels: "10"
                }),
                rewardIcon: "rc/ic-abil-gold@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 3,
                objective: {
                    counter: "PASSLOCK",
                    value: r("1e+1"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "gold" ],
                        time: 1080
                    }
                }
            }, {
                id: 5,
                description: t("Finish {levels} levels", {
                    levels: "25"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "15",
                type: "quest_offer",
                weight: 2,
                objective: {
                    counter: "PASSLOCK",
                    value: r("2.5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("1.5e+1")
                    }
                }
            }, {
                id: 6,
                description: t("Finish {levels} levels", {
                    levels: "50"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "2%",
                type: "quest_offer",
                weight: 1,
                objective: {
                    counter: "PASSLOCK",
                    value: r("5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .02
                    } ] ]
                }
            }, {
                id: 7,
                description: t("Open {pictures} pictures with a favorite tag", {
                    pictures: "5"
                }),
                rewardIcon: "rc/ic-abil-butil@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 3,
                objective: {
                    counter: "FPictures",
                    value: r("5e+0"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "shards" ],
                        time: 1080
                    }
                }
            }, {
                id: 8,
                description: t("Open {pictures} pictures with a favorite tag", {
                    pictures: "10"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "15",
                type: "quest_offer",
                weight: 2,
                objective: {
                    counter: "FPictures",
                    value: r("1e+1"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("1.5e+1")
                    }
                }
            }, {
                id: 9,
                description: t("Open {pictures} pictures with a favorite tag", {
                    pictures: "15"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "2%",
                type: "quest_offer",
                weight: 1,
                objective: {
                    counter: "FPictures",
                    value: r("1.5e+1"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .02
                    } ] ]
                }
            }, {
                id: 10,
                description: t("Kill {count} monsters", {
                    count: "100"
                }),
                rewardIcon: "rc/ic-abil-gold@2x.png",
                rewardText: "timeskip",
                type: "quest_offer",
                weight: 6,
                objective: {
                    counter: "MSTRKL",
                    value: r("1e+2"),
                    isAbsolute: !1
                },
                reward: {
                    timeskip: {
                        res: [ "gold" ],
                        time: 360
                    }
                }
            }, {
                id: 11,
                description: t("Kill {count} monsters", {
                    count: "500"
                }),
                rewardIcon: "rc/ico-real-big.png",
                rewardText: "5",
                type: "quest_offer",
                weight: 4,
                objective: {
                    counter: "MSTRKL",
                    value: r("5e+2"),
                    isAbsolute: !1
                },
                reward: {
                    res: {
                        crowns: r("5e+0")
                    }
                }
            }, {
                id: 12,
                description: t("Kill {count} monsters", {
                    count: "1K"
                }),
                rewardIcon: "rc/ico-sword.png",
                rewardText: "1%",
                type: "quest_offer",
                weight: 2,
                objective: {
                    counter: "MSTRKL",
                    value: r("1e+3"),
                    isAbsolute: !1
                },
                reward: {
                    mults: [ [ "DPS", {
                        value: .01
                    } ] ]
                }
            } ]
        };
    },
    439: function(e, a) {
        "use strict";
        e.exports = {
            lock: {
                counters: {
                    Pictures: 7,
                    GAME_DAY: 1
                }
            },
            default_items: [ 100236, 100237, 100238, 100239, 100240 ],
            sales: [ {
                id: 1,
                term: 86400,
                cooldown: 86400,
                noStart: !1,
                items: [ 100236, 100237, 100238, 100243, 100240 ]
            }, {
                id: 2,
                term: 86400,
                cooldown: 86400,
                noStart: !1,
                items: [ 100236, 100237, 100238, 100239, 100244 ]
            }, {
                id: 3,
                term: 86400,
                cooldown: 0,
                noStart: !1,
                items: [ 100236, 100237, 100238, 100241, 100240 ]
            }, {
                id: 4,
                term: 86400,
                cooldown: 86400,
                noStart: !1,
                items: [ 100236, 100237, 100238, 100239, 100242 ]
            }, {
                id: 5,
                term: 86400,
                cooldown: 86400,
                noStart: !0,
                items: [ 100248, 100249, 100250, 100251, 100252 ]
            }, {
                id: 6,
                term: 86400,
                cooldown: 86400,
                noStart: !0,
                items: [ 100245, 100246, 100247, 100241, 100242 ]
            }, {
                id: 7,
                term: 86400,
                cooldown: 86400,
                noStart: !0,
                items: [ 100253, 100254, 100255, 100256, 100257 ],
                lock: {
                    lock: {
                        negate: {
                            counters: {
                                P_C: 1
                            }
                        },
                        counters: {
                            GAME_DAY: 5
                        }
                    }
                }
            } ]
        };
    },
    440: function(e, a) {
        "use strict";
        e.exports = [ {
            id: 1,
            type: "crowns",
            amount: 100,
            price: {
                dollars: 1
            }
        }, {
            id: 2,
            type: "crowns",
            amount: 150,
            price: {
                dollars: 2
            }
        }, {
            id: 3,
            type: "crowns",
            amount: 400,
            price: {
                dollars: 5
            }
        }, {
            id: 4,
            type: "crowns",
            amount: 1e3,
            price: {
                dollars: 10
            }
        }, {
            id: 5,
            type: "crowns",
            amount: 2200,
            price: {
                dollars: 20
            }
        }, {
            id: 6,
            type: "crowns",
            amount: 5e3,
            price: {
                dollars: 40
            }
        } ];
    },
    441: function(e, a, i) {
        "use strict";
        var r;
        r = i(26)._tr, e.exports = [ {
            name: "strength",
            icon: "str",
            bonusText: r("DPC bonus")
        }, {
            name: "charisma",
            icon: "char",
            bonusText: r("DPS bonus")
        }, {
            name: "intelligence",
            icon: "int",
            bonusText: r("abilities")
        }, {
            name: "luck",
            icon: "lck",
            bonusText: r("drop rate")
        } ];
    }
});