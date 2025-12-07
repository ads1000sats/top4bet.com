"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [43792], {
        27491: function(t, r, e) {
            var o;
            e.d(r, {
                    r: function() {
                        return o
                    }
                }),
                function(t) {
                    t.DNA = "01", t.ThaiGovern = "02", t.Stock = "03", t.Set = "04", t.DNA4 = "05", t.LAOS4 = "06", t.Lottery = "07", t.Live = "08", t.ConquerorDNA = "70", t.ConquerorDNA4 = "71"
                }(o || (o = {}))
        },
        43792: function(t, r, e) {
            e.d(r, {
                $O: function() {
                    return _
                },
                G8: function() {
                    return y
                },
                IK: function() {
                    return v
                },
                JB: function() {
                    return c
                },
                JS: function() {
                    return d
                },
                M8: function() {
                    return h
                },
                Mc: function() {
                    return u
                },
                NL: function() {
                    return P
                },
                Pm: function() {
                    return f
                },
                QD: function() {
                    return D
                },
                c2: function() {
                    return s
                },
                fr: function() {
                    return I
                },
                gL: function() {
                    return m
                },
                it: function() {
                    return N
                },
                pU: function() {
                    return k
                },
                rX: function() {
                    return A
                },
                tK: function() {
                    return a
                },
                u6: function() {
                    return E
                },
                uj: function() {
                    return T
                },
                v4: function() {
                    return q
                },
                vz: function() {
                    return i
                },
                zx: function() {
                    return p
                }
            });
            var o = e(26042),
                l = e(29815),
                n = e(27491),
                i = ["lt-stock", "lt-government", "lt-set", "lt-yiki-laos", "lt-lottery", "bet-lt-stock", "bet-lt-government", "bet-lt-set", "bet-lt-yiki-laos", "bet-lt-lottery", "report-daily-lt-stock", "report-daily-lt-government", "report-daily-lt-set", "report-daily-lt-yiki-laos", "report-daily-lt-lottery"],
                a = ["lotto-huay", "lt-dna", "lt-yiki-cj", "lt-yiki-lto", "lt-yiki", "lt-yiki-four", "ltr-live", "lt-world", "lt-ltr", "lt-thai-lt"],
                u = ["bet-lt", "bet-lt-dna", "bet-lt-yiki-cj", "bet-lt-yiki-lto", "bet-lt-yiki", "bet-lt-yiki-four", "bet-ltr-live", "bet-lt-world", "bet-lt-ltr", "bet-lt-thai-lt"],
                c = ["conqueror", "lt-conqueror", "lt-conqueror-dna", "lt-conqueror-dna-four", "bet-lt-conqueror", "bet-lt-conqueror-dna", "bet-lt-conqueror-dna-four"],
                y = ["conqueror", "lt-conqueror", "lt-conqueror-dna", "lt-conqueror-dna-four", "bet-lt-conqueror", "bet-lt-conqueror-dna", "bet-lt-conqueror-dna-four"],
                d = ["report-daily-lt", "report-daily-lt-dna", "report-daily-lt-yiki-cj", "report-daily-lt-yiki-lto", "report-daily-lt-yiki", "report-daily-lt-yiki-four", "report-daily-ltr-live", "report-daily-lt-world", "report-daily-lt-ltr", "report-daily-lt-thai-lt"],
                p = ["system-setting", "setting-number", "setting-bet"],
                _ = function(t, r) {
                    return {
                        lotto_type: f(t),
                        lotto_subtype: b(r)
                    }
                },
                f = function(t) {
                    var r = {
                            "lt-dna": n.r.DNA,
                            "lt-dna-88": n.r.DNA,
                            "lt-dna-264": n.r.DNA,
                            "lt-dna-88-vip": n.r.DNA,
                            "lt-dna-264-vip": n.r.DNA,
                            "lt-ltr": n.r.DNA,
                            "lt-ltr-88": n.r.DNA,
                            "lt-ltr-264": n.r.DNA,
                            "lt-ltr-88-vip": n.r.DNA,
                            "lt-ltr-264-vip": n.r.DNA,
                            "lt-thai-lt": n.r.DNA,
                            "lt-thai-lt-88": n.r.DNA,
                            "lt-thai-lt-264": n.r.DNA,
                            "lt-yiki-cj": n.r.DNA,
                            "lt-yiki-lto": n.r.DNA,
                            "lt-yiki": n.r.DNA,
                            "lt-government": n.r.ThaiGovern,
                            "lt-stock": n.r.Stock,
                            "lt-set": n.r.Set,
                            "lt-yiki-four": n.r.DNA4,
                            "lt-yiki-four-88": n.r.DNA4,
                            "lt-yiki-four-264": n.r.DNA4,
                            "lt-yiki-four-88-vip": n.r.DNA4,
                            "lt-yiki-four-264-vip": n.r.DNA4,
                            "lt-yiki-laos": n.r.LAOS4,
                            "lt-lottery": n.r.Lottery,
                            "ltr-live": n.r.Live,
                            "ltr-live-88": n.r.Live,
                            "ltr-live-264": n.r.Live,
                            "ltr-live-88-vip": n.r.Live,
                            "ltr-live-264-vip": n.r.Live,
                            "ltr-live-44": n.r.Live,
                            "ltr-live-44-vip": n.r.Live,
                            "lt-conqueror-dna": n.r.ConquerorDNA,
                            "lt-conqueror-dna-88": n.r.ConquerorDNA,
                            "lt-conqueror-dna-88-vip": n.r.ConquerorDNA,
                            "lt-conqueror-dna-264": n.r.ConquerorDNA,
                            "lt-conqueror-dna-264-vip": n.r.ConquerorDNA,
                            "lt-conqueror-dna-four": n.r.ConquerorDNA4,
                            "lt-conqueror-dna-four-88": n.r.ConquerorDNA4,
                            "lt-conqueror-dna-four-264": n.r.ConquerorDNA4,
                            "lt-world": n.r.DNA,
                            "lt-world-88": n.r.DNA,
                            "lt-world-264": n.r.DNA,
                            "lt-world-88-vip": n.r.DNA,
                            "lt-world-264-vip": n.r.DNA
                        },
                        e = t;
                    return e && (e = (e = (e = (e = e.replace("setting-bet-", "")).replace("report-daily-", "")).replace("bet-", "")).replace("setting-number-", "")), r[e] || e
                },
                b = function(t) {
                    var r = t;
                    return r && (r = (r = (r = r.replace("report-daily-", "")).replace("bet-", "")).replace("setting-number-", "")), {
                        "lt-dna-88": "01",
                        "lt-dna-264": "02",
                        "lt-dna-88-vip": "03",
                        "lt-dna-264-vip": "04",
                        "lt-yiki-cj-88": "05",
                        "lt-yiki-cj-264": "06",
                        "lt-yiki-cj-88-vip": "07",
                        "lt-yiki-cj-264-vip": "08",
                        "lt-yiki-88": "13",
                        "lt-yiki-264": "14",
                        "lt-yiki-88-vip": "15",
                        "lt-yiki-264-vip": "16",
                        "lt-yiki-lto-88": "17",
                        "lt-yiki-lto-264": "18",
                        "lt-yiki-lto-88-vip": "19",
                        "lt-yiki-lto-264-vip": "20",
                        "lt-ltr-88": "25",
                        "lt-ltr-264": "26",
                        "lt-ltr-88-vip": "27",
                        "lt-ltr-264-vip": "28",
                        "lt-thai-lt-88": "29",
                        "lt-thai-lt-264": "30",
                        "lt-yiki-four-88": "01",
                        "lt-yiki-four-264": "02",
                        "lt-yiki-four-88-vip": "03",
                        "lt-yiki-four-264-vip": "04",
                        "ltr-live-88": "01",
                        "ltr-live-264": "02",
                        "ltr-live-88-vip": "03",
                        "ltr-live-264-vip": "04",
                        "ltr-live-44": "05",
                        "ltr-live-44-vip": "06",
                        "lt-conqueror-dna-88": "01",
                        "lt-conqueror-dna-88-vip": "03",
                        "lt-conqueror-dna-264": "02",
                        "lt-conqueror-dna-264-vip": "04",
                        "lt-conqueror-dna-four-88": "01",
                        "lt-conqueror-dna-four-264": "02",
                        "lt-world-88": "21",
                        "lt-world-264": "22",
                        "lt-world-88-vip": "23",
                        "lt-world-264-vip": "24"
                    } [r] || r
                },
                s = {
                    "01": "\u0e2b\u0e27\u0e22\u0e22\u0e35\u0e48\u0e01\u0e35",
                    "0101": "\u0e22\u0e35\u0e48\u0e01\u0e35 DNA 88",
                    "0102": "\u0e22\u0e35\u0e48\u0e01\u0e35 DNA 264",
                    "0103": "\u0e22\u0e35\u0e48\u0e01\u0e35 DNA VIP 88",
                    "0104": "\u0e22\u0e35\u0e48\u0e01\u0e35 DNA VIP 264",
                    "0105": "\u0e22\u0e35\u0e48\u0e01\u0e35 \u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 88",
                    "0106": "\u0e22\u0e35\u0e48\u0e01\u0e35 \u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 264",
                    "0107": "\u0e22\u0e35\u0e48\u0e01\u0e35 \u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 VIP 88",
                    "0108": "\u0e22\u0e35\u0e48\u0e01\u0e35 \u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 VIP 264",
                    "0121": "world lotto 88",
                    "0122": "world lotto 264",
                    "0125": "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay 88",
                    "0126": "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay 264",
                    "0127": "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay VIP 88",
                    "0128": "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay VIP 264",
                    "02": "\u0e2b\u0e27\u0e22\u0e23\u0e31\u0e10\u0e1a\u0e32\u0e25",
                    "0201": "\u0e2b\u0e27\u0e22\u0e23\u0e31\u0e10\u0e1a\u0e32\u0e25",
                    "03": "\u0e2b\u0e27\u0e22\u0e2b\u0e38\u0e49\u0e19",
                    "0301": "\u0e2b\u0e38\u0e49\u0e19\u0e44\u0e15\u0e49\u0e2b\u0e27\u0e31\u0e19",
                    "0302": "\u0e2b\u0e38\u0e49\u0e19\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35",
                    "0303": "\u0e19\u0e34\u0e40\u0e04\u0e2d\u0e34\u0e23\u0e2d\u0e1a\u0e40\u0e0a\u0e49\u0e32",
                    "0304": "\u0e19\u0e34\u0e40\u0e04\u0e2d\u0e34\u0e23\u0e2d\u0e1a\u0e1a\u0e48\u0e32\u0e22",
                    "0305": "\u0e08\u0e35\u0e19\u0e23\u0e2d\u0e1a\u0e40\u0e0a\u0e49\u0e32",
                    "0306": "\u0e08\u0e35\u0e19\u0e23\u0e2d\u0e1a\u0e1a\u0e48\u0e32\u0e22",
                    "0307": "\u0e2e\u0e31\u0e48\u0e07\u0e40\u0e2a\u0e47\u0e07\u0e23\u0e2d\u0e1a\u0e40\u0e0a\u0e49\u0e32",
                    "0308": "\u0e2e\u0e31\u0e48\u0e07\u0e40\u0e2a\u0e47\u0e07\u0e23\u0e2d\u0e1a\u0e1a\u0e48\u0e32\u0e22",
                    "0309": "\u0e2b\u0e38\u0e49\u0e19\u0e2a\u0e34\u0e07\u0e04\u0e42\u0e1b\u0e23\u0e4c",
                    "0310": "\u0e2b\u0e38\u0e49\u0e19\u0e44\u0e17\u0e22\u0e1b\u0e34\u0e14\u0e40\u0e22\u0e47\u0e19",
                    "0311": "\u0e2b\u0e38\u0e49\u0e19\u0e2d\u0e34\u0e19\u0e40\u0e14\u0e35\u0e22",
                    "0312": "\u0e2b\u0e38\u0e49\u0e19\u0e2d\u0e35\u0e22\u0e34\u0e1b\u0e15\u0e4c",
                    "0313": "\u0e2b\u0e38\u0e49\u0e19\u0e23\u0e31\u0e2a\u0e40\u0e0b\u0e35\u0e22",
                    "0314": "\u0e2b\u0e38\u0e49\u0e19\u0e40\u0e22\u0e2d\u0e23\u0e21\u0e31\u0e19",
                    "0315": "\u0e2b\u0e27\u0e22\u0e2b\u0e38\u0e49\u0e19\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29",
                    "0316": "\u0e2b\u0e27\u0e22\u0e2b\u0e38\u0e49\u0e19\u0e14\u0e32\u0e27\u0e42\u0e08\u0e19\u0e2a\u0e4c",
                    "0317": "\u0e2b\u0e27\u0e22\u0e25\u0e32\u0e27",
                    "0318": "\u0e2b\u0e27\u0e22\u0e25\u0e32\u0e27\u0e2a\u0e15\u0e32\u0e23\u0e4c",
                    "0319": "\u0e2b\u0e27\u0e22\u0e2e\u0e32\u0e19\u0e2d\u0e22",
                    "0320": "\u0e2b\u0e27\u0e22\u0e2e\u0e32\u0e19\u0e2d\u0e22\u0e1e\u0e34\u0e40\u0e28\u0e29",
                    "0321": "\u0e2b\u0e27\u0e22\u0e2e\u0e32\u0e19\u0e2d\u0e22\u0e27\u0e35\u0e44\u0e2d\u0e1e\u0e35",
                    "0322": "\u0e2b\u0e27\u0e22\u0e21\u0e32\u0e40\u0e25\u0e22\u0e4c",
                    "0323": "\u0e2b\u0e27\u0e22\u0e2d\u0e2d\u0e21\u0e2a\u0e34\u0e19",
                    "0324": "\u0e2b\u0e27\u0e22\u0e18\u0e01\u0e2a.",
                    "04": "\u0e2b\u0e27\u0e22\u0e0a\u0e38\u0e14",
                    "0401": "\u0e2b\u0e27\u0e22\u0e0a\u0e38\u0e14\u0e25\u0e32\u0e27",
                    "08": "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay LIVE",
                    "0802": "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay LIVE 264"
                },
                v = function(t) {
                    var r = t.lotto_type,
                        e = t.lotto_subtype,
                        o = (r || "").concat(e || "");
                    return s[o] || o
                },
                k = [n.r.Set, n.r.Lottery],
                A = [n.r.ConquerorDNA, n.r.ConquerorDNA4],
                D = function(t) {
                    return [{
                        key: "first_prize",
                        numberValidator: 6,
                        label: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 1",
                        numberReward: 1,
                        lottoType: [n.r.Lottery]
                    }, {
                        key: "runner_up_prize",
                        numberValidator: 6,
                        label: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e02\u0e49\u0e32\u0e07\u0e40\u0e04\u0e35\u0e22\u0e07",
                        numberReward: 2,
                        lottoType: [n.r.Lottery]
                    }, {
                        key: "second_prize",
                        numberValidator: 6,
                        label: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 2",
                        numberReward: 5,
                        lottoType: [n.r.Lottery]
                    }, {
                        key: "third_prize",
                        numberValidator: 6,
                        label: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 3",
                        numberReward: 10,
                        lottoType: [n.r.Lottery]
                    }, {
                        key: "fourth_prize",
                        numberValidator: 6,
                        label: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 4",
                        numberReward: 50,
                        lottoType: [n.r.Lottery]
                    }, {
                        key: "fifth_prize",
                        numberValidator: 6,
                        label: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 5",
                        numberReward: 100,
                        lottoType: [n.r.Lottery]
                    }, {
                        key: "top_four",
                        numberValidator: 4,
                        label: "4 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        lottoType: [n.r.DNA4, n.r.Set, n.r.LAOS4, n.r.ConquerorDNA4]
                    }, {
                        key: "todd_four",
                        numberValidator: 4,
                        label: "4 \u0e15\u0e31\u0e27\u0e42\u0e15\u0e4a\u0e14",
                        lottoType: [n.r.DNA4, n.r.Set, n.r.LAOS4, n.r.ConquerorDNA4]
                    }, {
                        key: "top_three",
                        numberValidator: 3,
                        label: "3 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        filterLottoType: [n.r.Lottery]
                    }, {
                        key: "todd_three",
                        numberValidator: 3,
                        label: "3 \u0e15\u0e31\u0e27\u0e42\u0e15\u0e4a\u0e14",
                        filterLottoType: [n.r.Lottery]
                    }, {
                        key: "first_three",
                        numberValidator: 3,
                        label: "3 \u0e15\u0e31\u0e27\u0e2b\u0e19\u0e49\u0e32",
                        numberReward: 2,
                        lottoType: [n.r.ThaiGovern, n.r.Lottery]
                    }, {
                        key: "last_three",
                        numberValidator: 3,
                        label: "3 \u0e15\u0e31\u0e27\u0e2b\u0e25\u0e31\u0e07",
                        numberReward: 2,
                        lottoType: [n.r.ThaiGovern, n.r.Lottery]
                    }, {
                        key: "top_two",
                        numberValidator: 2,
                        label: "2 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        filterLottoType: [n.r.Lottery]
                    }, {
                        key: "bottom_two",
                        numberValidator: 2,
                        label: "2 \u0e15\u0e31\u0e27\u0e25\u0e48\u0e32\u0e07",
                        numberReward: 1
                    }, {
                        key: "top_one",
                        numberValidator: 1,
                        label: "\u0e27\u0e34\u0e48\u0e07\u0e1a\u0e19",
                        filterLottoType: [n.r.Set, n.r.Lottery]
                    }, {
                        key: "bottom_one",
                        numberValidator: 1,
                        label: "\u0e27\u0e34\u0e48\u0e07\u0e25\u0e48\u0e32\u0e07",
                        filterLottoType: [n.r.Set, n.r.Lottery]
                    }].filter((function(r) {
                        var e;
                        return r.lottoType ? null === (e = r.lottoType) || void 0 === e ? void 0 : e.includes(t) : !r.filterLottoType || !r.filterLottoType.includes(t)
                    }))
                },
                N = function(t) {
                    return {
                        "-1": "\u0e1b\u0e34\u0e14",
                        0: "\u0e23\u0e31\u0e1a\u0e41\u0e17\u0e07",
                        1: "\u0e23\u0e2d\u0e2d\u0e2d\u0e01\u0e1c\u0e25",
                        2: "\u0e2d\u0e2d\u0e01\u0e1c\u0e25\u0e41\u0e25\u0e49\u0e27",
                        3: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19",
                        4: "\u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27",
                        5: "\u0e08\u0e48\u0e32\u0e22\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",
                        6: "\u0e04\u0e37\u0e19\u0e42\u0e1e\u0e22",
                        7: "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e42\u0e1e\u0e22",
                        8: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e42\u0e1e\u0e22"
                    } [t.toString()]
                },
                m = function(t) {
                    switch (t) {
                        case 0:
                            return "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e42\u0e1e\u0e22";
                        case 1:
                            return "\u0e23\u0e31\u0e1a\u0e41\u0e17\u0e07";
                        case 2:
                            return "\u0e23\u0e2d\u0e2d\u0e2d\u0e01\u0e1c\u0e25";
                        case 3:
                            return "\u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27";
                        case 4:
                            return "\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25";
                        case 5:
                            return "\u0e04\u0e37\u0e19\u0e42\u0e1e\u0e22";
                        default:
                            return ""
                    }
                },
                h = function(t) {
                    switch (t) {
                        case 0:
                            return "\u0e1a\u0e2d\u0e17";
                        case 1:
                            return "\u0e08\u0e48\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27";
                        case 2:
                            return "\u0e22\u0e2d\u0e14\u0e41\u0e17\u0e07\u0e44\u0e21\u0e48\u0e16\u0e36\u0e07\u0e02\u0e31\u0e49\u0e19\u0e15\u0e48\u0e33";
                        case 3:
                            return "\u0e04\u0e37\u0e19\u0e42\u0e1e\u0e22";
                        default:
                            return ""
                    }
                },
                q = function(t) {
                    return {
                        top_three: "3 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        TOPTHREE: "3 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        bottom_three: "3 \u0e15\u0e31\u0e27\u0e25\u0e48\u0e32\u0e07",
                        BOTTOMTHREE: "3 \u0e15\u0e31\u0e27\u0e25\u0e48\u0e32\u0e07",
                        first_three: "3 \u0e15\u0e31\u0e27\u0e2b\u0e19\u0e49\u0e32",
                        FIRSTTHREE: "3 \u0e15\u0e31\u0e27\u0e2b\u0e19\u0e49\u0e32",
                        last_three: "3 \u0e15\u0e31\u0e27\u0e2b\u0e25\u0e31\u0e07",
                        LASTTHREE: "3 \u0e15\u0e31\u0e27\u0e2b\u0e25\u0e31\u0e07",
                        top_two: "2 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        TOPTWO: "2 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        todd_three: "3 \u0e15\u0e31\u0e27\u0e42\u0e15\u0e4a\u0e14",
                        TODDTHREE: "3 \u0e15\u0e31\u0e27\u0e42\u0e15\u0e4a\u0e14",
                        bottom_two: "2 \u0e15\u0e31\u0e27\u0e25\u0e48\u0e32\u0e07",
                        BOTTOMTWO: "2 \u0e15\u0e31\u0e27\u0e25\u0e48\u0e32\u0e07",
                        top_one: "\u0e27\u0e34\u0e48\u0e07\u0e1a\u0e19",
                        TOPONE: "\u0e27\u0e34\u0e48\u0e07\u0e1a\u0e19",
                        bottom_one: "\u0e27\u0e34\u0e48\u0e07\u0e25\u0e48\u0e32\u0e07",
                        BOTTOMONE: "\u0e27\u0e34\u0e48\u0e07\u0e25\u0e48\u0e32\u0e07",
                        top_four: "4 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        TOPFOUR: "4 \u0e15\u0e31\u0e27\u0e1a\u0e19",
                        todd_four: "4 \u0e15\u0e31\u0e27\u0e42\u0e15\u0e4a\u0e14",
                        TODDFOUR: "4 \u0e15\u0e31\u0e27\u0e42\u0e15\u0e4a\u0e14",
                        first_prize: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 1",
                        second_prize: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 2",
                        third_prize: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 3",
                        fourth_prize: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 4",
                        fifth_prize: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 5",
                        runner_up_prize: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e02\u0e49\u0e32\u0e07\u0e40\u0e04\u0e35\u0e22\u0e07"
                    } [t]
                },
                T = function(t, r) {
                    var e = {
                        "01": "yeekee",
                        "02": "government",
                        "03": "stock",
                        "04": "set",
                        "05": "yeekee_four",
                        "06": "yeekee_laos",
                        "07": "lottery",
                        "08": "live",
                        70: "lt_conqueror",
                        71: "lt_conqueror_four"
                    } [t || "01"];
                    switch (r) {
                        case "bet_setting":
                            return "page_lotto_".concat(e, "_bet_setting");
                        case "common_setting":
                            return "page_lotto_".concat(e, "_common_setting");
                        case "payment_rate_setting":
                            return "page_lotto_".concat(e, "_payment_rate_setting");
                        case "schedule_setting":
                            return "page_lotto_".concat(e, "_schedule_setting");
                        case "bet_transactions":
                            return "action_lotto_".concat(e, "_bet_transactions");
                        case "dashboard":
                            return "action_lotto_".concat(e, "_dashboard");
                        case "dashboard_cancel":
                            return "action_lotto_".concat(e, "_dashboard_cancel");
                        case "dashboard_management":
                            return "action_lotto_".concat(e, "_dashboard_management");
                        case "dashboard_setting":
                            return "action_lotto_".concat(e, "_dashboard_setting");
                        case "setting_price":
                            return "action_lotto_".concat(e, "_setting_price");
                        default:
                            return ""
                    }
                },
                L = {
                    "01": "\u0e2b\u0e27\u0e22\u0e23\u0e31\u0e10\u0e1a\u0e32\u0e25",
                    "02": "\u0e2b\u0e27\u0e22\u0e2b\u0e38\u0e49\u0e19",
                    "03": "\u0e22\u0e35\u0e48\u0e01\u0e35 DNA 88",
                    "04": "\u0e22\u0e35\u0e48\u0e01\u0e35 DNA 264",
                    "05": "\u0e22\u0e35\u0e48\u0e01\u0e35 DNA VIP 88",
                    "06": "\u0e22\u0e35\u0e48\u0e01\u0e35 DNA VIP 264",
                    "07": "\u0e22\u0e35\u0e48\u0e01\u0e35 \u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 88",
                    "08": "\u0e22\u0e35\u0e48\u0e01\u0e35 \u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 264",
                    "09": "\u0e22\u0e35\u0e48\u0e01\u0e35 \u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 VIP 88",
                    10: "\u0e22\u0e35\u0e48\u0e01\u0e35 \u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 VIP 264",
                    19: "\u0e2b\u0e27\u0e22\u0e0a\u0e38\u0e14\u0e25\u0e32\u0e27",
                    27: "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay LIVE 264",
                    41: "world lotto 88",
                    42: "world lotto 264",
                    45: "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay 88",
                    46: "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay 264",
                    47: "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay 88 VIP",
                    48: "\u0e22\u0e35\u0e48\u0e01\u0e35 Huay 264 VIP"
                },
                w = {},
                g = function(t) {
                    return (0, o.Z)({}, L, w)[t] || t
                },
                V = Object.keys(w),
                O = Object.keys(L).sort((function(t, r) {
                    return t > r ? 1 : -1
                })),
                E = (0, l.Z)(O).concat((0, l.Z)(V)).reduce((function(t, r) {
                    return t[r] = 0, t
                }), {}),
                I = V.map((function(t) {
                    return {
                        name: g(t),
                        val: t
                    }
                })),
                P = O.map((function(t) {
                    return {
                        name: g(t),
                        val: t
                    }
                }))
        }
    }
]);