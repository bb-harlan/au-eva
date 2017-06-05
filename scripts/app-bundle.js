var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('models/acct-bchg-list',["require", "exports"], function (require, exports) {
    "use strict";
    var AcctBchgList = (function (_super) {
        __extends(AcctBchgList, _super);
        function AcctBchgList() {
            _super.call(this);
            this.endingBalance = 0.00;
        }
        AcctBchgList.prototype.refresh = function () {
            this.sort(function (a, b) { return a.compareToInAcct(b); });
            var endingBalance = 0.00;
            for (var _i = 0, _a = this; _i < _a.length; _i++) {
                var bchg = _a[_i];
                endingBalance += bchg.amt;
                bchg.newBalance = endingBalance;
            }
            this.endingBalance = endingBalance;
        };
        return AcctBchgList;
    }(Array));
    exports.AcctBchgList = AcctBchgList;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('models/acct',["require", "exports", '../models/acct-bchg-list'], function (require, exports, acct_bchg_list_1) {
    "use strict";
    var EquationSideItem = (function () {
        function EquationSideItem(id, equationSide, intraSideSorter) {
            this.isAcct = false;
            this.isAnnotation = false;
            this.id = id;
            this.equationSide = equationSide;
            this.intraSideSorter = intraSideSorter;
        }
        EquationSideItem.prototype.compareTo = function (b) {
            return (this.equationSide == b.equationSide ?
                (this.intraSideSorter > b.intraSideSorter ? 1 : -1) :
                (this.equationSide > b.equationSide ? 1 : -1));
        };
        return EquationSideItem;
    }());
    exports.EquationSideItem = EquationSideItem;
    var Annotation = (function (_super) {
        __extends(Annotation, _super);
        function Annotation(id, equationSide, intraSideSorter, annoText) {
            _super.call(this, id, equationSide, intraSideSorter);
            this.isAnnotation = true;
            this.annoText = annoText;
        }
        return Annotation;
    }(EquationSideItem));
    exports.Annotation = Annotation;
    var Acct = (function (_super) {
        __extends(Acct, _super);
        function Acct(id, equationSide, intraSideSorter, title, normalBalance) {
            _super.call(this, id, equationSide, intraSideSorter);
            this.bchgList = new acct_bchg_list_1.AcctBchgList();
            this.isAcct = true;
            this.title = title;
            this.normalBalance = normalBalance;
        }
        return Acct;
    }(EquationSideItem));
    exports.Acct = Acct;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('models/tran-bchg-list',["require", "exports", '../eva'], function (require, exports, eva_1) {
    "use strict";
    var TranBchgList = (function (_super) {
        __extends(TranBchgList, _super);
        function TranBchgList() {
            _super.call(this);
            this.eva = eva_1.Eva.getInstance();
            this.changeToAssetBalances = 0.00;
            this.changeToEquityBalances = 0.00;
        }
        TranBchgList.prototype.refresh = function () {
            this.sort(function (a, b) { return a.compareToInTran(b); });
            var changeToAssetBalances = 0.00;
            var changeToEquityBalances = 0.00;
            for (var _i = 0, _a = this; _i < _a.length; _i++) {
                var bchg = _a[_i];
                if (bchg.targetAcct.equationSide == this.eva.SIDE_ASSETS) {
                    changeToAssetBalances += bchg.amt;
                }
                else if (bchg.targetAcct.equationSide == this.eva.SIDE_EQUITIES) {
                    changeToEquityBalances += bchg.amt;
                }
                else {
                    throw new Error("acct.equationSide has invalid value: " + bchg.targetAcct.equationSide + ".");
                }
            }
            this.changeToAssetBalances = changeToAssetBalances;
            this.changeToEquityBalances = changeToEquityBalances;
        };
        return TranBchgList;
    }(Array));
    exports.TranBchgList = TranBchgList;
});

define('models/tran',["require", "exports", '../eva', '../models/tran-bchg-list'], function (require, exports, eva_1, tran_bchg_list_1) {
    "use strict";
    var Tran = (function () {
        function Tran(id, date, intraDateSorter) {
            this.eva = eva_1.Eva.getInstance();
            this.bchgList = new tran_bchg_list_1.TranBchgList();
            this.id = id;
            this.date = date;
            this.intraDateSorter = intraDateSorter;
            this.assetsBchg = 0.00;
            this.equitiesBchg = 0.00;
        }
        Tran.prototype.compareTo = function (b) {
            return (this.date == b.date ?
                (this.intraDateSorter > b.intraDateSorter ? 1 : -1) :
                (this.date > b.date ? 1 : -1));
        };
        Tran.prototype.refresh = function () {
            this.bchgList.sort(function (a, b) { return a.compareToInTran(b); });
            var assetsBchg = 0.00;
            var equitiesBchg = 0.00;
            for (var _i = 0, _a = this.bchgList; _i < _a.length; _i++) {
                var bchg = _a[_i];
                if (bchg.targetAcct.equationSide == this.eva.SIDE_ASSETS) {
                    assetsBchg += bchg.amt;
                }
                else if (bchg.targetAcct.equationSide == this.eva.SIDE_EQUITIES) {
                    equitiesBchg += bchg.amt;
                }
                else {
                    throw new Error("acct.equationSide has invalid value: " + bchg.targetAcct.equationSide + ".");
                }
            }
            this.assetsBchg = assetsBchg;
            this.equitiesBchg = equitiesBchg;
        };
        return Tran;
    }());
    exports.Tran = Tran;
});

define('models/bchg',["require", "exports"], function (require, exports) {
    "use strict";
    var Bchg = (function () {
        function Bchg(id, targetAcct, sourceTran, intraTranSorter, desc, amt) {
            this.id = id;
            this.targetAcct = targetAcct;
            this.sourceTran = sourceTran;
            this.intraTranSorter = intraTranSorter;
            this.desc = desc;
            this.amt = amt;
            this.newBalance = 0.00;
        }
        Bchg.prototype.compareToInAcct = function (b) {
            return this.sourceTran.compareTo(b.sourceTran);
        };
        Bchg.prototype.compareToInTran = function (b) {
            return (this.intraTranSorter > b.intraTranSorter ?
                1 :
                (this.intraTranSorter < b.intraTranSorter ? -1 : 0));
        };
        return Bchg;
    }());
    exports.Bchg = Bchg;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('models/acct-list',["require", "exports", '../models/acct'], function (require, exports, acct_1) {
    "use strict";
    var AcctList = (function (_super) {
        __extends(AcctList, _super);
        function AcctList(equationSide) {
            _super.call(this);
            this.equationSide = equationSide;
        }
        AcctList.prototype.refresh = function () {
            this.sort(function (a, b) { return a.compareTo(b); });
            var listTotal = 0.00;
            for (var _i = 0, _a = this; _i < _a.length; _i++) {
                var listItem = _a[_i];
                if (listItem instanceof acct_1.Acct) {
                    listItem.bchgList.refresh();
                    listTotal += listItem.bchgList.endingBalance;
                }
            }
            this.listTotal = listTotal;
        };
        AcctList.prototype.matchingId = function (listItem) {
            return listItem.id == this.idToFind;
        };
        AcctList.prototype.findById = function (id) {
            this.idToFind = id;
            return this.find(this.matchingId);
        };
        return AcctList;
    }(Array));
    exports.AcctList = AcctList;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('models/tran-list',["require", "exports"], function (require, exports) {
    "use strict";
    var TranList = (function (_super) {
        __extends(TranList, _super);
        function TranList() {
            _super.apply(this, arguments);
        }
        TranList.prototype.refresh = function () {
            this.sort(function (a, b) { return a.compareTo(b); });
            for (var _i = 0, _a = this; _i < _a.length; _i++) {
                var tran = _a[_i];
                tran.refresh();
            }
        };
        return TranList;
    }(Array));
    exports.TranList = TranList;
});

define('eva',["require", "exports", './models/bchg', './models/acct-list', './models/acct', './models/tran-list', './models/tran'], function (require, exports, bchg_1, acct_list_1, acct_1, tran_list_1, tran_1) {
    "use strict";
    var Eva = (function () {
        function Eva() {
            this.selectedModule = this.MODULE_FAE;
            this.selectedAcctList = null;
            this.selectedAcct = null;
            this.selectedTran = null;
            this.selectedBchg = null;
            this.selectedEquSide = null;
            this.showingModuleBchg = true;
            this.isEditing = false;
            this.assetList = new acct_list_1.AcctList(this.SIDE_ASSETS);
            this.equityList = new acct_list_1.AcctList(this.SIDE_EQUITIES);
            this.tranList = new tran_list_1.TranList();
            this._nextSorter = 1;
            this._nextAcctId = 1;
            this._nextTranId = 1;
            this._nextBchgId = 1;
        }
        Eva.getInstance = function () {
            if (!this._instance) {
                this._instance = new Eva();
            }
            return this._instance;
        };
        Object.defineProperty(Eva.prototype, "SIDE_ASSETS", {
            get: function () { return 'A'; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "SIDE_EQUITIES", {
            get: function () { return 'E'; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "MODULE_FAE", {
            get: function () { return "fae"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "MODULE_ACCT", {
            get: function () { return "acct"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "MODULE_BCHG", {
            get: function () { return "bchg"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "MODULE_TRAN", {
            get: function () { return "tran"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "MODULE_JRNL", {
            get: function () { return "jrnl"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "END_OF_LIST", {
            get: function () { return "- End of list -"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "GRIDLINE_COLOR", {
            get: function () { return "#ccc"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "GRIDLINE_THIN", {
            get: function () { return "1px"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "GRIDLINE_THICK", {
            get: function () { return "2px"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "TOOLBAR_BACKGROUND_COLOR", {
            get: function () { return "#ddd"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Eva.prototype, "ROW_SELECTED_CHAR", {
            get: function () { return String.fromCharCode(0xf111); },
            enumerable: true,
            configurable: true
        });
        Eva.prototype.equSideText = function (equSideAbbr) {
            if (equSideAbbr == this.SIDE_ASSETS) {
                return 'Assets';
            }
            else if (equSideAbbr == this.SIDE_EQUITIES) {
                return 'Equities';
            }
            else {
                return '?';
            }
        };
        Object.defineProperty(Eva.prototype, "nextSorter", {
            get: function () {
                return this._nextSorter++;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Eva.prototype, "nextAcctId", {
            get: function () {
                return this._nextAcctId++;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Eva.prototype, "nextTranId", {
            get: function () {
                return this._nextTranId++;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Eva.prototype, "nextBchgId", {
            get: function () {
                return this._nextBchgId++;
            },
            enumerable: true,
            configurable: true
        });
        Eva.prototype.generateTestData = function () {
            var annotation = new acct_1.Annotation("anno-" + this.nextAcctId, this.SIDE_ASSETS, 0, "Current assets (an annotation row)");
            this.assetList.push(annotation);
            var acctId = '';
            for (var intraSideSorter = 15; intraSideSorter > 0; intraSideSorter--) {
                acctId = "A" + this.nextAcctId;
                var assetAcct = new acct_1.Acct(acctId, this.SIDE_ASSETS, intraSideSorter, "<test data account title: equation side " + this.SIDE_ASSETS + ", acct #" + acctId + ">", 1);
                this.assetList.push(assetAcct);
                acctId = "A" + this.nextAcctId;
                var equityAcct = new acct_1.Acct(acctId, this.SIDE_EQUITIES, intraSideSorter, "(test data account title, equation side " + this.SIDE_EQUITIES + ", acct #" + acctId + ")", 1);
                this.equityList.push(equityAcct);
            }
            console.log('Created some accounts (order scrambled from normal order)');
            var bchg1;
            var bchg2;
            var bchgId;
            for (var i = 1; i <= 50; ++i) {
                var tranDate = (i % 2 ? "2016/02/13" : "2016/02/12");
                var tran = new tran_1.Tran("T" + this.nextTranId, tranDate, this.nextSorter);
                this.tranList.push(tran);
                var filteredAssetAcctList = this.assetList.filter(function (listItem) { return listItem instanceof acct_1.Acct; });
                var filteredEquityAcctList = this.equityList.filter(function (listItem) { return listItem instanceof acct_1.Acct; });
                var acctList = filteredAssetAcctList.concat(filteredEquityAcctList);
                var randomAcct2 = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
                var bchg2_1 = new bchg_1.Bchg("B" + this.nextBchgId, randomAcct2, tran, 0, "<change desc: bchg #B" + this.nextBchgId + "; tran #" + tran.id + "; acct #" + randomAcct2.id + "; >", Math.round(Math.random() * 100.00));
                tran.bchgList.push(bchg2_1);
                randomAcct2.bchgList.push(bchg2_1);
                var randomAcct1 = acctList[(Math.random() * (acctList.length - 1)).toFixed(0)];
                var bchg1_1 = new bchg_1.Bchg("B" + this.nextBchgId, randomAcct1, tran, 1, "<change desc: bchg #B" + this.nextBchgId + "; tran #" + tran.id + "; acct #" + randomAcct1.id + "; >", (randomAcct2.equationSide == randomAcct1.equationSide ? -bchg2_1.amt : bchg2_1.amt));
                tran.bchgList.push(bchg1_1);
                randomAcct1.bchgList.push(bchg1_1);
            }
            console.log('Created some transactions (order scrambled from normal order)');
            var sides = [this.assetList, this.equityList];
            for (var _i = 0, sides_1 = sides; _i < sides_1.length; _i++) {
                var sideList = sides_1[_i];
                sideList.refresh();
            }
            console.log("Refreshed equation sides");
            this.tranList.refresh();
            console.log("Refreshed tranList");
            console.log('Run completed!');
        };
        return Eva;
    }());
    exports.Eva = Eva;
});

define('app',["require", "exports", './eva'], function (require, exports, eva_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.eva = eva_1.Eva.getInstance();
        }
        App.prototype.bind = function () {
            this.eva.generateTestData();
        };
        App.prototype.onFaeModule = function (event) {
            this.eva.selectedAcct = null;
            this.eva.selectedBchg = null;
            this.eva.selectedTran = null;
            this.eva.selectedModule = this.eva.MODULE_FAE;
            this.eva.selectedEquSide = null;
        };
        App.prototype.onJrnlModule = function (event) {
            this.eva.selectedAcct = null;
            this.eva.selectedBchg = null;
            this.eva.selectedTran = null;
            this.eva.selectedModule = this.eva.MODULE_JRNL;
            this.eva.selectedEquSide = null;
        };
        App.prototype.onMenuClick = function (event, listItem) {
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/acct-list-fae',["require", "exports", 'aurelia-framework', '../eva'], function (require, exports, aurelia_framework_1, eva_1) {
    "use strict";
    var AcctListFae = (function () {
        function AcctListFae() {
            this.eva = eva_1.Eva.getInstance();
        }
        AcctListFae.prototype.onRowEnter = function (event, listItem) {
            if (listItem) {
                event.target.children[0].children[0].style.visibility = 'visible';
                event.target.children[1].children[0].style.visibility = 'visible';
                event.target.children[4].classList.toggle('aaRowHover', true);
            }
            else {
                event.target.children[0].children[0].style.visibility = 'visible';
                event.target.children[4].classList.toggle('aaRowHover', true);
            }
        };
        AcctListFae.prototype.onRowLeave = function (event, listItem) {
            if (listItem) {
                event.target.children[0].children[0].style.visibility = 'hidden';
                event.target.children[1].children[0].style.visibility = 'hidden';
                event.target.children[4].classList.toggle('aaRowHover', false);
            }
            else {
                event.target.children[0].children[0].style.visibility = 'hidden';
                event.target.children[4].classList.toggle('aaRowHover', false);
            }
        };
        AcctListFae.prototype.onMenuClick = function (event, listItem) {
            alert('"Row ops menu" not yet implemented.');
        };
        AcctListFae.prototype.onArrangeRows = function (event) {
            alert('"Rearrange list sequence" not yet implemented.');
        };
        AcctListFae.prototype.onGoAcct = function (event, listItem) {
            this.eva.selectedBchg = null;
            this.eva.selectedAcct = listItem;
            this.eva.selectedModule = this.eva.MODULE_ACCT;
        };
        AcctListFae.prototype.attached = function () {
        };
        AcctListFae.prototype.detached = function () {
        };
        AcctListFae = __decorate([
            aurelia_framework_1.customElement('acct-list-fae'), 
            __metadata('design:paramtypes', [])
        ], AcctListFae);
        return AcctListFae;
    }());
    exports.AcctListFae = AcctListFae;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-attributes/equation-side',["require", "exports", 'aurelia-framework', '../eva', '../au-components/acct-list-fae'], function (require, exports, aurelia_framework_1, eva_1, acct_list_fae_1) {
    "use strict";
    var EquationSide = (function () {
        function EquationSide(acctListFae) {
            this.eva = eva_1.Eva.getInstance();
            this.acctListFae = acctListFae;
        }
        EquationSide.prototype.bind = function () {
            this.acctListFae.equationSide = this.value;
            switch (this.acctListFae.equationSide) {
                case this.eva.SIDE_ASSETS:
                    this.acctListFae.sideHeading = "Asset accounts";
                    this.acctListFae.sideAcctList = this.eva.assetList;
                    break;
                case this.eva.SIDE_EQUITIES:
                    this.acctListFae.sideHeading = "Equity accounts";
                    this.acctListFae.sideAcctList = this.eva.equityList;
                    break;
                default:
                    this.acctListFae.sideHeading = "[Logic fault]";
                    this.acctListFae.sideAcctList = [];
            }
        };
        EquationSide = __decorate([
            aurelia_framework_1.customAttribute('aa-equation-side'),
            aurelia_framework_1.inject(acct_list_fae_1.AcctListFae), 
            __metadata('design:paramtypes', [acct_list_fae_1.AcctListFae])
        ], EquationSide);
        return EquationSide;
    }());
    exports.EquationSide = EquationSide;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/cell-bchg',["require", "exports", 'aurelia-framework', '../eva', '../models/bchg'], function (require, exports, aurelia_framework_1, eva_1, bchg_1) {
    "use strict";
    var CellBchg = (function () {
        function CellBchg() {
            this.eva = eva_1.Eva.getInstance();
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', bchg_1.Bchg)
        ], CellBchg.prototype, "bchg", void 0);
        CellBchg = __decorate([
            aurelia_framework_1.customElement('cell-bchg'), 
            __metadata('design:paramtypes', [])
        ], CellBchg);
        return CellBchg;
    }());
    exports.CellBchg = CellBchg;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/gh-tran-bchg',["require", "exports", 'aurelia-framework', '../eva'], function (require, exports, aurelia_framework_1, eva_1) {
    "use strict";
    var TranBchgRow = (function () {
        function TranBchgRow() {
            this.eva = eva_1.Eva.getInstance();
        }
        TranBchgRow = __decorate([
            aurelia_framework_1.customElement('gh-tran-bchg'), 
            __metadata('design:paramtypes', [])
        ], TranBchgRow);
        return TranBchgRow;
    }());
    exports.TranBchgRow = TranBchgRow;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/module-acct',["require", "exports", 'aurelia-framework', '../eva'], function (require, exports, aurelia_framework_1, eva_1) {
    "use strict";
    var ModuleAcct = (function () {
        function ModuleAcct() {
            this.eva = eva_1.Eva.getInstance();
        }
        ModuleAcct.prototype.onGoFae = function (event) {
            this.eva.selectedBchg = null;
            this.eva.selectedModule = this.eva.MODULE_FAE;
        };
        ModuleAcct.prototype.onGoUp = function (event) {
            var acctList;
            if (this.eva.selectedAcct.equationSide == this.eva.SIDE_ASSETS) {
                acctList = this.eva.assetList;
            }
            else if (this.eva.selectedAcct.equationSide == this.eva.SIDE_EQUITIES) {
                acctList = this.eva.equityList;
            }
            else {
                alert('Logic fault in onGoUp click handler');
                return;
            }
            var listIndex = acctList.findIndex(this.findIndexTest, this.eva.selectedAcct.id);
            if (listIndex > 0) {
                this.eva.selectedAcct = acctList[listIndex - 1];
                this.eva.selectedBchg = null;
            }
            else {
                alert('Reached beginning of list.');
            }
        };
        ModuleAcct.prototype.onGoDown = function (event) {
            var acctList;
            if (this.eva.selectedAcct.equationSide == this.eva.SIDE_ASSETS) {
                acctList = this.eva.assetList;
            }
            else if (this.eva.selectedAcct.equationSide == this.eva.SIDE_EQUITIES) {
                acctList = this.eva.equityList;
            }
            else {
                alert('Logic fault in onGoUp click handler');
                return;
            }
            var listIndex = acctList.findIndex(this.findIndexTest, this.eva.selectedAcct.id);
            if (listIndex < acctList.length - 1) {
                this.eva.selectedAcct = acctList[listIndex + 1];
                this.eva.selectedBchg = null;
            }
            else {
                alert('Reached end of list.');
            }
        };
        ModuleAcct.prototype.onGoBchg = function (event, bchg) {
            this.eva.selectedTran = bchg.sourceTran;
            this.eva.selectedBchg = bchg;
            if (this.eva.showingModuleBchg) {
                this.eva.selectedModule = this.eva.MODULE_BCHG;
            }
            else {
                this.eva.selectedModule = this.eva.MODULE_TRAN;
            }
        };
        ModuleAcct.prototype.findIndexTest = function (listItem) {
            return (listItem.id == this);
        };
        ModuleAcct.prototype.onRowEnter = function (event, bchg) {
            if (!this.eva.isEditing) {
                event.target.children[3].classList.toggle('aaRowHover', true);
                event.target.children[0].children[0].style.visibility = 'visible';
            }
        };
        ModuleAcct.prototype.onRowLeave = function (event, bchg) {
            if (!this.eva.isEditing) {
                event.target.children[3].classList.toggle('aaRowHover', false);
                event.target.children[0].children[0].style.visibility = 'hidden';
            }
        };
        ModuleAcct.prototype.onEdit = function (event) {
            if (this.eva.selectedAcct.isAcct) {
                document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', true);
            }
            this.eva.isEditing = true;
        };
        ModuleAcct.prototype.onSaveEdits = function (event) {
            if (this.eva.selectedAcct.isAcct) {
                document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', false);
            }
            this.eva.isEditing = false;
        };
        ModuleAcct.prototype.onCancelEdits = function (event) {
            if (this.eva.selectedAcct.isAcct) {
                document.getElementById('acctModule-' + this.eva.selectedAcct.id).classList.toggle('aaRowHover', false);
            }
            this.eva.isEditing = false;
        };
        ModuleAcct.prototype.onDelete = function (event) {
            alert('"Delete account" not yet implemented.');
        };
        ModuleAcct.prototype.onMenuClick = function (event, selectedAcct) {
        };
        ModuleAcct.prototype.onNewTran = function (event, selectedAcct) {
            alert('"New tran..." not yet implemented.');
        };
        ModuleAcct.prototype.attached = function () {
            var hyperLink = document.getElementById('scrollToSelected');
            if (this.eva.selectedBchg) {
                hyperLink.innerHTML = "#" + this.eva.selectedBchg.id;
                hyperLink.setAttribute("href", "#" + this.eva.selectedBchg.id);
                document.getElementById('scrollToSelected').click();
            }
            else {
                hyperLink.innerHTML = "#";
            }
        };
        ModuleAcct = __decorate([
            aurelia_framework_1.customElement('module-acct'), 
            __metadata('design:paramtypes', [])
        ], ModuleAcct);
        return ModuleAcct;
    }());
    exports.ModuleAcct = ModuleAcct;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/module-bchg',["require", "exports", 'aurelia-framework', '../eva'], function (require, exports, aurelia_framework_1, eva_1) {
    "use strict";
    var ModuleBchg = (function () {
        function ModuleBchg() {
            this.eva = eva_1.Eva.getInstance();
        }
        ModuleBchg.prototype.onGoAcct = function (event) {
            this.eva.selectedModule = this.eva.MODULE_ACCT;
        };
        ModuleBchg.prototype.onGoTran = function (event) {
            this.eva.selectedModule = this.eva.MODULE_TRAN;
        };
        ModuleBchg = __decorate([
            aurelia_framework_1.customElement('module-bchg'), 
            __metadata('design:paramtypes', [])
        ], ModuleBchg);
        return ModuleBchg;
    }());
    exports.ModuleBchg = ModuleBchg;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/module-fae',["require", "exports", 'aurelia-framework', '../eva'], function (require, exports, aurelia_framework_1, eva_1) {
    "use strict";
    var ModuleFae = (function () {
        function ModuleFae() {
            this.eva = eva_1.Eva.getInstance();
        }
        ModuleFae.prototype.selectSide = function (equationSide) {
            this.eva.selectedEquSide = equationSide;
        };
        ModuleFae.prototype.deselectSide = function (event) {
            this.eva.selectedEquSide = null;
        };
        ModuleFae.prototype.attached = function () {
            var hyperLink = document.getElementById('scrollToSelected');
            if (this.eva.selectedAcct) {
                hyperLink.innerHTML = "#" + this.eva.selectedAcct.id;
                hyperLink.setAttribute("href", "#" + this.eva.selectedAcct.id);
                document.getElementById('scrollToSelected').click();
            }
            else {
                hyperLink.innerHTML = "#";
                hyperLink.setAttribute("href", "#");
            }
            this.eva.selectedBchg = null;
            this.eva.selectedTran = null;
        };
        ModuleFae = __decorate([
            aurelia_framework_1.customElement('module-fae'), 
            __metadata('design:paramtypes', [])
        ], ModuleFae);
        return ModuleFae;
    }());
    exports.ModuleFae = ModuleFae;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/module-jrnl',["require", "exports", 'aurelia-framework', '../eva'], function (require, exports, aurelia_framework_1, eva_1) {
    "use strict";
    var ModuleJrnl = (function () {
        function ModuleJrnl() {
            this.eva = eva_1.Eva.getInstance();
        }
        ModuleJrnl.prototype.onRowEnter = function (event, tran) {
            event.target.children[0].children[0].style.visibility = 'visible';
            event.target.children[3].classList.toggle('aaRowHover', true);
        };
        ModuleJrnl.prototype.onRowLeave = function (event, tran) {
            event.target.children[0].children[0].style.visibility = 'hidden';
            event.target.children[3].classList.toggle('aaRowHover', false);
        };
        ModuleJrnl.prototype.onGoTran = function (event, tran) {
            this.eva.selectedBchg = null;
            this.eva.selectedTran = tran;
            this.eva.selectedModule = this.eva.MODULE_TRAN;
        };
        ModuleJrnl.prototype.onNewTran = function (event) {
            alert('"New transaction" dialog not yet implemented.');
        };
        ModuleJrnl.prototype.attached = function () {
            if (this.eva.selectedTran) {
                document.getElementById('scrollToSelected').innerHTML = "#" + this.eva.selectedTran.id;
                document.getElementById('scrollToSelected').setAttribute("href", "#" + this.eva.selectedTran.id);
                document.getElementById('scrollToSelected').click();
            }
            else {
                document.getElementById('scrollToSelected').innerHTML = "#";
                document.getElementById('scrollToSelected').setAttribute("href", "#");
            }
            this.eva.selectedBchg = null;
            this.eva.selectedAcct = null;
            this.eva.selectedEquSide = null;
        };
        ModuleJrnl = __decorate([
            aurelia_framework_1.customElement('module-jrnl'), 
            __metadata('design:paramtypes', [])
        ], ModuleJrnl);
        return ModuleJrnl;
    }());
    exports.ModuleJrnl = ModuleJrnl;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/module-tran',["require", "exports", 'aurelia-framework', '../eva', '../models/tran', '../models/bchg'], function (require, exports, aurelia_framework_1, eva_1, tran_1, bchg_1) {
    "use strict";
    var ModuleTran = (function () {
        function ModuleTran() {
            this.eva = eva_1.Eva.getInstance();
        }
        ModuleTran.prototype.bind = function (bindingContext, overrideContext) {
            this.tranViewSource = this.eva.selectedTran;
        };
        ModuleTran.prototype.unbind = function (bindingContext, overrideContext) {
            this.tranViewSource = null;
        };
        ModuleTran.prototype.onGoJrnl = function (event) {
            this.eva.selectedBchg = null;
            this.eva.selectedModule = this.eva.MODULE_JRNL;
        };
        ModuleTran.prototype.onGoUp = function (event) {
            var tranList = this.eva.tranList;
            var listIndex = tranList.findIndex(this.findIndexTest, this.eva.selectedTran.id);
            if (listIndex > 0) {
                this.eva.selectedBchg = null;
                this.eva.selectedTran = tranList[listIndex - 1];
                this.tranViewSource = this.eva.selectedTran;
            }
            else {
                alert('Reached beginning of list.');
            }
        };
        ModuleTran.prototype.onGoDown = function (event) {
            var tranList = this.eva.tranList;
            var listIndex = tranList.findIndex(this.findIndexTest, this.eva.selectedTran.id);
            if (listIndex < tranList.length - 1) {
                this.eva.selectedBchg = null;
                this.eva.selectedTran = tranList[listIndex + 1];
                this.tranViewSource = this.eva.selectedTran;
            }
            else {
                alert('Reached end of list.');
            }
        };
        ModuleTran.prototype.onGoBchg = function (event, bchg) {
            this.eva.selectedBchg = bchg;
            this.eva.selectedAcct = bchg.targetAcct;
            if (this.eva.showingModuleBchg) {
                this.eva.selectedModule = this.eva.MODULE_BCHG;
            }
            else {
                this.eva.selectedModule = this.eva.MODULE_ACCT;
            }
        };
        ModuleTran.prototype.findIndexTest = function (listItem) {
            return (listItem.id == this);
        };
        ModuleTran.prototype.onRowEnter = function (event, bchg) {
            if (bchg) {
                if (bchg.intraTranSorter >= 1) {
                    event.target.children[0].children[0].style.visibility = 'visible';
                }
                else if (!this.eva.isEditing) {
                    event.target.children[0].children[0].style.visibility = 'visible';
                }
                event.target.children[3].classList.toggle('aaRowHover', true);
            }
            if (!bchg && this.eva.isEditing) {
                event.target.children[0].children[0].style.visibility = 'visible';
            }
        };
        ModuleTran.prototype.onRowLeave = function (event, bchg) {
            if (bchg) {
                if (bchg.intraTranSorter >= 1) {
                    event.target.children[0].children[0].style.visibility = 'hidden';
                }
                else if (!this.eva.isEditing) {
                    event.target.children[0].children[0].style.visibility = 'hidden';
                }
                event.target.children[3].classList.toggle('aaRowHover', false);
            }
            if (!bchg && this.eva.isEditing) {
                event.target.children[0].children[0].style.visibility = 'hidden';
            }
        };
        ModuleTran.prototype.onEdit = function (event) {
            var copyOfTran = new tran_1.Tran("copy-of-" + this.eva.selectedTran.id, this.eva.selectedTran.date, this.eva.selectedTran.intraDateSorter);
            copyOfTran.assetsBchg = this.eva.selectedTran.assetsBchg;
            copyOfTran.equitiesBchg = this.eva.selectedTran.equitiesBchg;
            var copyOfBchg;
            for (var _i = 0, _a = this.eva.selectedTran.bchgList; _i < _a.length; _i++) {
                var bchg = _a[_i];
                copyOfBchg = new bchg_1.Bchg(bchg.id, bchg.targetAcct, bchg.sourceTran, bchg.intraTranSorter, bchg.desc, bchg.amt);
                copyOfTran.bchgList.push(copyOfBchg);
            }
            copyOfTran.refresh();
            this.tranViewSource = copyOfTran;
            this.eva.isEditing = true;
        };
        ModuleTran.prototype.onSaveEdits = function (event) {
            this.tranViewSource = this.eva.selectedTran;
            this.eva.isEditing = false;
        };
        ModuleTran.prototype.onCancelEdits = function (event) {
            document.getElementById('tranModule-' + this.eva.selectedTran.id).classList.toggle('aaRowHover', false);
            this.tranViewSource = this.eva.selectedTran;
            this.eva.isEditing = false;
        };
        ModuleTran.prototype.onDelete = function (event) {
            alert('"Delete transaction" not yet implemented.');
        };
        ModuleTran.prototype.onPickAcct = function (event, bchg) {
            alert("bchg.id: " + bchg.id + " - \"Acct picker dialog\" not yet implemented.");
        };
        ModuleTran.prototype.onMenuClick = function (event, bchg) {
            alert("bchg.id: " + (bchg ? bchg.id : "End-of-list") + " - \"Row ops menu\" not yet implemented.");
        };
        ModuleTran.prototype.onArrangeRows = function (event) {
            alert('"Rearrange list sequence" not yet implemented.');
        };
        ModuleTran.prototype.attached = function () {
            var hyperLink = document.getElementById('scrollToSelected');
            if (this.eva.selectedBchg) {
                hyperLink.innerHTML = "#" + this.eva.selectedBchg.id;
                hyperLink.setAttribute("href", "#" + this.eva.selectedBchg.id);
                document.getElementById('scrollToSelected').click();
            }
            else {
                hyperLink.innerHTML = "#";
            }
        };
        ModuleTran = __decorate([
            aurelia_framework_1.customElement('module-tran'), 
            __metadata('design:paramtypes', [])
        ], ModuleTran);
        return ModuleTran;
    }());
    exports.ModuleTran = ModuleTran;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/tran-bchg-cells-blank',["require", "exports", 'aurelia-framework', '../eva'], function (require, exports, aurelia_framework_1, eva_1) {
    "use strict";
    var TranBchgCells = (function () {
        function TranBchgCells() {
            this.eva = eva_1.Eva.getInstance();
        }
        TranBchgCells = __decorate([
            aurelia_framework_1.customElement('tran-bchg-cells-blank'), 
            __metadata('design:paramtypes', [])
        ], TranBchgCells);
        return TranBchgCells;
    }());
    exports.TranBchgCells = TranBchgCells;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/tran-bchg-cells',["require", "exports", 'aurelia-framework', '../eva', './module-tran', '../models/bchg'], function (require, exports, aurelia_framework_1, eva_1, module_tran_1, bchg_1) {
    "use strict";
    var TranBchgCells = (function () {
        function TranBchgCells(moduleTran) {
            this.eva = eva_1.Eva.getInstance();
            this.moduleTran = moduleTran;
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', bchg_1.Bchg)
        ], TranBchgCells.prototype, "bchg", void 0);
        TranBchgCells = __decorate([
            aurelia_framework_1.customElement('tran-bchg-cells'),
            aurelia_framework_1.inject(module_tran_1.ModuleTran), 
            __metadata('design:paramtypes', [module_tran_1.ModuleTran])
        ], TranBchgCells);
        return TranBchgCells;
    }());
    exports.TranBchgCells = TranBchgCells;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('au-components/tran-bchg',["require", "exports", 'aurelia-framework', './module-tran', '../eva', '../models/bchg'], function (require, exports, aurelia_framework_1, module_tran_1, eva_1, bchg_1) {
    "use strict";
    var TranBchgRow = (function () {
        function TranBchgRow(moduleTran) {
            this.eva = eva_1.Eva.getInstance();
            this.moduleTran = moduleTran;
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', bchg_1.Bchg)
        ], TranBchgRow.prototype, "bchg", void 0);
        TranBchgRow = __decorate([
            aurelia_framework_1.customElement('tran-bchg'),
            aurelia_framework_1.inject(module_tran_1.ModuleTran), 
            __metadata('design:paramtypes', [module_tran_1.ModuleTran])
        ], TranBchgRow);
        return TranBchgRow;
    }());
    exports.TranBchgRow = TranBchgRow;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./au-components/module-fae\"></require>\n  <require from=\"./au-components/module-acct\"></require>\n  <require from=\"./au-components/module-bchg\"></require>\n  <require from=\"./au-components/module-tran\"></require>\n  <require from=\"./au-components/module-jrnl\"></require>\n  <a id=\"scrollToSelected\" href=\"#\" style=\"position: absolute; top: -10pc;\">#</a>\n\n  <div class=\"aaPanelContainer\" css=\"margin: 0.5pc 0; visibility: ${eva.isEditing ? 'hidden' : 'visible'}\">\n    <div class=\"aaPanel aaPanelBoxShadow\" style=\"font-size: small;\">\n      <div class=\"aaPanelHeader\">Navigation map</div>\n      <div class=\"aaPanelBody\" style=\"padding: 0.5pc;\">\n        <table class=\"aaSansSerif aaInlineBlock\" style=\"color: #333;\">\n          <tr>\n            <td class=\"aaNavCell\">\n              <div class=\"aaNavBtn ${eva.selectedModule == eva.MODULE_FAE ? 'aaNavBtnSelected' : ''}\"\n                   click.trigger=\"onFaeModule($event)\">Assets = Equities\n              </div>\n            </td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td class=\"aaNavCell\">\n              <div class=\"aaNavBtn ${eva.selectedModule == eva.MODULE_JRNL ? 'aaNavBtnSelected' : ''}\"\n                   click.trigger=\"onJrnlModule($event)\">Transaction journal\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td class=\"aaNavCell\">\n              <div class=\"aaNavBtnInert ${eva.selectedModule == eva.MODULE_ACCT ? 'aaNavBtnSelected' : ''}\">\n                Account\n              </div>\n            </td>\n            <td><div style=\"width: 1pc;\"></div></td>\n            <td class=\"aaNavCell\">\n              <div class=\"aaNavBtnInert ${eva.selectedModule == eva.MODULE_TRAN ? 'aaNavBtnSelected' : ''}\">\n                Transaction\n              </div>\n            </td>\n            <td></td>\n          </tr>\n          <template if.bind=\"eva.showingModuleBchg\">\n            <tr>\n              <td></td>\n              <td></td>\n              <td class=\"aaNavCell\">\n                <div class=\"aaNavBtnInert ${eva.selectedModule == eva.MODULE_BCHG ? 'aaNavBtnSelected' : ''}\">\n                  Account balance change\n                </div>\n              </td>\n              <td></td>\n              <td></td>\n          </template>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"aaPanelContainer\">\n    <module-fae if.bind=\"eva.selectedModule == eva.MODULE_FAE\"></module-fae>\n    <module-acct if.bind=\"eva.selectedModule == eva.MODULE_ACCT\"></module-acct>\n    <module-bchg if.bind=\"eva.selectedModule == eva.MODULE_BCHG\"></module-bchg>\n    <module-tran if.bind=\"eva.selectedModule == eva.MODULE_TRAN\"></module-tran>\n    <module-jrnl if.bind=\"eva.selectedModule == eva.MODULE_JRNL\"></module-jrnl>\n  </div>\n</template>\n\n\n<!--\n<template>\n  <h1>${message}</h1>\n  <div class=\"btn-group\">\n    <a class=\"aaBtn dropdown-toggle\" data-toggle=\"dropdown\">\n      <span class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></span>\n    </a>\n    <ul class=\"dropdown-menu aaSansSerif\">\n      <li><a><i class=\"fa fa-plus-circle fa-fw aaIconGreen\"></i> Insert new account row</a></li>\n      <li><a><i class=\"fa fa-plus-circle fa-fw aaIconGreen\"></i> Insert new annotation row</a></li>\n      <li class=\"divider\"></li>\n      <li><a><i class=\"fa fa-minus-circle fa-fw aaIconRed\"></i> Delete row...</a></li>\n      <li class=\"divider\"></li>\n      <li><a><i class=\"fa fa-arrows-v fa-fw aaIconBlue\"></i> Re-position row...</a>\n      </li>\n    </ul>\n  </div>\n\n</template>\n-->\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n    text-align: center;\n    /*background-color: #fff;*/\n    background-color: #ABABAB;\n    /*background-color: #c0c0c0;*/\n    /*background-color: #d0d0d0;*/\n    font-family: Cambria, serif, Serif;\n    font-weight: bold;\n    font-size: medium;\n    color: #000;\n}\n\nh1, h2, h3 {\n    font-family: sans-serif, SansSerif;\n    font-weight: normal;\n}\nh1 {\n    letter-spacing: 2px;\n}\n\n.aaSansSerif {\n    font-family: sans-serif, SansSerif;\n    font-weight: normal;\n}\n.aaFontLabel {\n    font-family: sans-serif, SansSerif;\n    font-weight: normal;\n    font-size: small;\n}\n.aaFontSizeLabel {\n    font-size: small;\n}\n.aaFontData {\n    font-family: Cambria, serif, Serif;\n    font-weight: bold;\n    font-size: medium;\n    color: #000;\n}\n.aaFontSizeData {\n    font-size: medium;\n}\n.aaIconRed {\n    /*color: #D9534F;*/\n    color: #e00;\n}\n\n.aaIconGreen {\n    /*color: #5CB85C;*/\n    color: #0b0;\n}\n\n.aaIconBlue {\n    /*color: #58b;*/\n    color: #00e;\n}\n\n.aaAppToolBar {\n    display: inline-block;\n    margin: 0;\n    padding: 0.25pc 0;\n    border-top: 1px solid #58b;\n    border-bottom: 1px solid #58b;\n    /*background-color: #EBF2F8;*/\n    /*background-color: #58b;*/\n    background-color: #fff;\n    color: rgba(255, 255, 255, 0.9);\n    text-align: center;\n    white-space: nowrap;\n}\n\n.aaNavCell {\n    padding: 2px;\n}\n\n.aaNavBtn {\n    display: inline-block;\n    padding: 2px 4px;\n    border: 1px solid #58b;\n    border-radius: 0.25pc;\n}\n\n.aaNavBtnInert {\n    display: inline-block;\n    padding: 2px 4px;;\n    border: 1px solid #58b;\n    border-radius: 0.25pc;\n    border-style: dotted;\n}\n\n.aaNavBtn:hover {\n    background-color: #DAE6F1 !important;\n    cursor: pointer;\n}\n\n.aaNavBtnSelected {\n    border-style: none;\n    -webkit-box-shadow: 0px 0px 3px 3px #09f;\n    -moz-box-shadow: 0px 0px 3px 3px #09f;\n    box-shadow: 0px 0px 3px 3px #09f;\n    background-color: #eee;\n}\n\n.aaPanelContainer {\n    margin: 1pc;\n    display: block;\n    text-align: center;\n}\n\n.aaPanel {\n    display: inline-block;\n    border: 1px solid #58b;\n    border-radius: 0.5pc;\n    background-clip: border-box;\n    overflow: hidden;\n    font-size: medium;\n}\n\n.aaPanelBoxShadow {\n    -webkit-box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.2);\n    -moz-box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.2);\n    box-shadow: 4px 8px 5px 0px rgba(0, 0, 0, 0.2);\n}\n\n.aaPanelHeader {\n    padding: 0.25pc;\n    /*color: rgba(255, 255, 255, 0.7);*/\n    /*color: #eee;*/\n    color: #fff;\n    /*background-color: #58b;*/\n    background-color: #58b;\n    -webkit-box-shadow: inset 0px 5px 10px 0px #7ad;\n    -moz-box-shadow: inset 0px 5px 10px 0px #7ad;\n    box-shadow: inset 0px 5px 10px 0px #7ad;\n    font-family: sans-serif, SansSerif;\n    /*font-size: medium;*/\n    font-weight: normal;\n    letter-spacing: 1px;\n}\n\n.aaPanelHeaderModule {\n    font-size: 150%;\n    letter-spacing: 2px;\n}\n\n.aaPanelToolBar {\n    padding: 0.25pc 1pc;\n    white-space: nowrap;\n    background-color: #ddd;\n    text-align: left;\n}\n\n.aaPanelBody {\n    padding: 1pc;\n    white-space: nowrap;\n    background-color: #fff;\n}\n\n.aaForm {\n    /*margin-top: 1pc;*/\n    text-align: left;\n    font-size: medium;\n}\n\n.aaFormItemLabel {\n    padding: 0.30pc 0 0.20pc 0;\n    text-align: right;\n    /*vertical-align: middle;*/\n    font-family: sans-serif, SansSerif;\n    font-weight: normal;\n    font-size: small;\n}\n.aaFormItemData {\n    padding: 0.30pc 0.5pc 0.20pc 0.5pc;\n}\n.aaFormInputText {\n    padding: 1px 0.5pc;\n    background-color: inherit;\n}\n.aaFormInputText:disabled {\n    /*border-color: transparent;*/\n    border-style: solid;\n    border-color: #ccc;\n}\n\n.aaInlineBlock {\n    display: inline-block;\n}\n\n.aaEquSideContainer {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.aaBtn {\n    display: inline-block;\n    color: #333;\n    /*padding: 0.25pc 0.35pc;*/\n    padding: 2px 0.25pc;\n    margin: 0;\n    text-align: left;\n    white-space: nowrap;\n    vertical-align: top;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 0.25pc;\n    background-clip: border-box;\n    background-color: transparent;\n    font-family: sans-serif, SansSerif;\n    font-weight: normal;\n    font-size: small;\n}\n\n.aaBtnHidden {\n    visibility: hidden;\n}\n\n.aaBtn:hover {\n    color: #000;\n    background-color: #eee;\n    border-color: #999;\n    cursor: pointer;\n}\n\n.aaBtn:active {\n    border-color: #000;\n    background-color: #ccc;\n}\n\n.aaToolBarDivider {\n    display: inline-block;\n    color: transparent;\n    padding: 0.25pc 0;\n    margin: 0 1pc;\n    width: 0;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border-left: 1px solid #999;\n    border-right: 1px solid #bbb;\n    background-color: transparent;\n    font-family: sans-serif, SansSerif;\n    font-weight: normal;\n    font-size: small;\n}\n\n.aaGridContainer{\n    margin-top: 1pc;\n    padding: 0;\n    border: 1px solid #58b;\n    border-radius: 0.25pc;\n    background-clip: border-box;\n    overflow: hidden;\n}\n\n.aaGridTotals {\n    margin-top: 1pc;\n    padding: 0;\n    border: 1px solid transparent;\n    overflow: hidden;\n}\n\n.aaGridTitleBar {\n    padding: 0.25pc;\n    color: #fff;\n    /*background-color: #aaa;*/\n    /*color: #000;*/\n    background-color: #bbb;\n    border-bottom: 1px solid #999;\n    -webkit-box-shadow: inset 0px 5px 10px 0px #ddd;\n    -moz-box-shadow: inset 0px 5px 10px 0px #ddd;\n    box-shadow: inset 0px 5px 10px 0px #ddd;\n    font-family: sans-serif, SansSerif;\n    font-size: medium;\n    /*font-weight: normal;*/\n    font-weight: bold;\n    letter-spacing: 2px;\n}\n.aaGridBchgSubtitleBar {\n    padding: 0.15pc 0;\n    color: #fff;\n    /*background-color: #aaa;*/\n    /*color: #000;*/\n    background-color: #bbb;\n    text-align: center;\n    font-size: small;\n    font-weight: bold;\n    letter-spacing: 2px;\n    width: 1127px;\n    height: 25px;\n}\n.aaGridFooterBar {\n    /*background-color: #aaa;*/\n    background-color: #bbb;\n    border-top: 1px solid #999;\n    padding-bottom: 0.75pc;\n    margin: 0;\n    /*-webkit-box-shadow: inset 0px -2px 4px 1px #888;*/\n    /*-moz-box-shadow: inset 0px -2px 4px 1px #888;*/\n    /*box-shadow: inset 0px -2px 4px 1px #888;*/\n    /*border-top: 2px solid #ccc;*/\n}\n\n.aaGridHeader {\n    color: #666;\n    background-color: #ddd;\n    white-space: nowrap;\n    font-weight: normal;\n    /*border-bottom: 2px solid #ccc;*/\n}\n.aaGridScrollableRows {\n    margin: 0;\n    padding: 0;\n    height: 25pc;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    white-space: nowrap;\n}\n\n.aaGridFooterTotals {\n    padding-top: 0.5pc;\n    border-top: 3px solid #ccc;\n}\n\n\n.aaRow {\n    position: relative;\n    margin: 0;\n    text-align: left;\n    white-space: nowrap;\n    font-size: 0;\n    border-bottom: 1px solid #ccc;\n    /*background-color: #ddd;*/\n    background-color: #eee;\n}\n.aaRowJrnl {\n    border-bottom: 0.5pc solid #ccc;\n}\n.aaSubRow {\n    position: relative;\n    margin: 0;\n    text-align: left;\n    white-space: nowrap;\n    font-size: 0;\n    /*border-bottom: 1px solid #ccc;*/\n}\n.aaRowTotals {\n    position: relative;\n    margin: 0;\n    text-align: left;\n    white-space: nowrap;\n    font-size: 0;\n}\n.aaRowHover {\n    /*background-color: #d9e5f2 !important;*/\n    /*background-color: #dbe6f0 !important;*/\n    background-color: #edf2f7 !important;\n}\n.aaRowBchgTop {\n    margin-top: 0.5pc;\n    border-top: 3px solid #ccc;\n}\n.aaRowDataCells {\n    display: inline-block;\n    background-color: #fff;\n}\n.aaCellId {\n    display: inline-block;\n    width: 3pc;\n    text-align: left;\n}\n\n.aaCellRowOps {\n    display: inline-block;\n    vertical-align: top;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 0;\n    width: 2.5pc;\n    text-align: center;\n}\n.aaCellRowSelectedChar {\n    display: inline-block;\n    padding-top: 6px;\n    white-space: nowrap;\n    overflow: hidden;\n    font-family: FontAwesome;\n    font-size: small;\n    color: #09f;\n}\n\n.aaCellRowOpsFiller {\n    display: inline-block;\n    /*padding: 0 0.35pc;*/\n    vertical-align: top;\n    width: 2.5pc;\n    text-align: center;\n}\n.aaCellRowSelected {\n    display: inline-block;\n    width: 1.5pc;\n    text-align: center;\n    font-weight: bold;\n}\n.aaCellText {\n    display: inline-block;\n    padding: 0.30pc 0.5pc 0.20pc 0.5pc;\n    vertical-align: top;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.aaCellTextEOL {\n    color: #666;\n    font-size: small;\n}\n\n.aaCellAcctTitle {\n    display: inline-block;\n    width: 25pc;\n    text-align: left;\n}\n\n.aaCellAnnoTitle {\n    display: inline-block;\n    width: 25pc;\n    text-align: left;\n    font-family: sans-serif, SansSerif;\n    text-decoration: underline;\n}\n\n.aaCellTranDate {\n    display: inline-block;\n    width: 7pc;\n    /*text-align: center;*/\n    text-align: left;\n}\n\n.aaCellBchgDesc {\n    width: 25pc;\n    text-align: left;\n}\n\n.aaCellBchgAmt {\n    width: 8pc;\n    text-align: right;\n}\n\n.aaAutoBalanceItem {\n    color: #000;\n    background-color: #ffc;\n}\n\n.aaCellBchgBal {\n    width: 8pc;\n    text-align: right;\n}\n\n.aaCellEquSide {\n    width: 8pc;\n    text-align: center;\n}\n\n.aaInputText {\n    background-color: inherit;\n    padding: 0.25pc;\n    margin: 0.25pc;\n}\n\n.aaInputText:disabled {\n    border-color: transparent;\n}\n\n.aaHasFocus {\n    outline: 2px solid #58b;\n    outline-radius: 0.25pc;\n}\n\n"; });
define('text!au-components/acct-list-fae.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../au-views/column-gridline.html\"></require>\n  <div class=\"aaGridContainer\">\n    <div class=\"aaGridTitleBar\" style=\"font-size: larger;\">${sideHeading}</div>\n    <div class=\"aaGridHeader\">\n      <div class=\"aaFontLabel aaRow\">\n        <div class=\"aaFontLabel aaCellRowOps\"\n             click.delegate=\"onArrangeRows($event)\">\n          <span class=\"aaBtn\"><i class=\"fa fa-arrows-v fa-fw aaIconBlue\" aria-hidden=\"true\"></i></span>\n        </div>\n        <div class=\"aaCellRowOps \">\n          <span class=\"aaBtn aaBtnHidden\">\n                      <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n          </span>\n        </div>\n        <column-gridline\n            gridline-width=\"${eva.GRIDLINE_THIN}\"\n            gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n        <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\n        <column-gridline\n            gridline-width=\"${eva.GRIDLINE_THIN}\"\n            gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n        <div class=\"aaCellText aaFontSizeLabel aaCellAcctTitle\"><span class=\" aaSansSerif\">Title</span></div>\n        <column-gridline\n            gridline-width=\"${eva.GRIDLINE_THIN}\"\n            gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n        <div class=\"aaCellText aaFontSizeLabel aaCellBchgBal\"><span class=\" aaSansSerif\">Balance</span></div>\n        <column-gridline\n            gridline-width=\"100%\"\n            gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n      </div>\n    </div>\n    <div class=\"aaGridScrollableRows\">\n      <template repeat.for=\"listItem of sideAcctList\">\n        <div id=\"${listItem.id}\"\n             class=\"aaRow\"\n             mouseenter.trigger=\"onRowEnter($event, listItem)\"\n             mouseleave.trigger=\"onRowLeave($event, listItem)\">\n          <template if.bind=\"listItem.isAcct\">\n            <div class=\"aaCellRowOps\">\n              <span class=\"aaBtn aaBtnHidden\"\n                    click.delegate=\"onMenuClick($event, listItem)\">\n                <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <div class=\"aaCellRowOps\">\n              <span class=\"aaBtn aaBtnHidden\"\n                    click.delegate=\"onGoAcct($event, listItem)\">\n                <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaCellText aaCellRowSelectedChar\" css=\"visibility: ${listItem.id == eva.selectedAcct.id ? 'visible' : 'hidden'};\">${eva.ROW_SELECTED_CHAR}</div>\n            <div class=\"aaRowDataCells\">\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <span class=\"aaCellText aaFontSizeData aaCellAcctTitle\">${listItem.title}</span>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <span class=\"aaCellText aaFontSizeData aaCellBchgBal\">${listItem.bchgList.endingBalance.toFixed(2)}</span>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            </div>\n          </template>\n          <template if.bind=\"listItem.isAnnotation\">\n            <div class=\"aaCellRowOps\">\n                <span class=\"aaBtn aaBtnHidden\"\n                      click.delegate=\"onMenuClick($event, listItem)\">\n                    <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n                </span>\n            </div>\n            <div class=\"aaCellRowOps\">\n              <span class=\"aaBtn aaBtnHidden\"\n                    click.delegate=\"onGoAcct($event, listItem)\">\n                <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaCellText aaCellRowSelectedChar\" css=\"visibility: ${listItem.id == eva.selectedAcct.id ? 'visible' : 'hidden'};\">${eva.ROW_SELECTED_CHAR}</div>\n            <div class=\"aaRowDataCells\">\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <span class=\"aaCellText aaFontSizeData aaCellAnnoTitle\">${listItem.annoText}</span>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <span class=\"aaCellText aaFontSizeData aaCellBchgBal\"></span>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n\n            </div>\n          </template>\n        </div>\n      </template>\n\n      <!--\n          Following is the coding for an end-of-list row that is not associated\n          with any account. Since \"insertion\" is the facility provided to a user\n          for creating a new account in the list, this end-of-list row provides\n          a point to insert a new account at the end of the list.\n      -->\n      <div class=\"aaRow\"\n           id=\"End of equation side ${sideAcctList.equationSide}\"\n           mouseenter.trigger=\"onRowEnter($event, null)\"\n           mouseleave.trigger=\"onRowLeave($event, null)\">\n        <div class=\"aaCellRowOps\">\n          <span class=\"aaBtn aaBtnHidden\"\n                click.delegate=\"onMenuClick($event, listItem)\">\n            <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n          </span>\n        </div>\n        <div class=\"aaCellRowOps\">\n          <span class=\"aaBtn aaBtnHidden\">\n            <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n          </span>\n        </div>\n        <column-gridline\n            gridline-width=\"${eva.GRIDLINE_THIN}\"\n            gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n        <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\n        <div class=\"aaInlineBlock\">\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n          <span class=\"aaCellText aaFontData aaCellAcctTitle\"><span\n              class=\"aaSansSerif aaCellTextEOL\">${eva.END_OF_LIST}</span></span>\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"transparent\"></column-gridline>\n          <span class=\"aaCellText aaFontData aaCellBchgBal\"></span>\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"transparent\"></column-gridline>\n        </div>\n      </div>\n    </div>\n    <div class=\"aaGridFooterBar\"></div>\n    <!--\n    Following is the coding for a row that shows the total of\n    all account balances. It is code with invisible menu and nav buttons\n    as horizontal space holders to result in proper horizontal positioning\n    of the \"Total\" label amd the total amt.\n    -->\n  </div>\n  <div class=\"aaGridTotals\">\n    <div class=\"aaRowTotals\">\n      <div class=\"aaCellRowOps\">\n        <span class=\"aaBtn aaBtnHidden\"><i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i></span>\n      </div>\n      <div class=\"aaCellRowOps\">\n        <span class=\"aaBtn aaBtnHidden\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i></span>\n      </div>\n      <column-gridline\n          gridline-width=\"${eva.GRIDLINE_THIN}\"\n          gridline-color=\"transparent\"></column-gridline>\n      <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\n      <column-gridline\n          gridline-width=\"${eva.GRIDLINE_THIN}\"\n          gridline-color=\"transparent\"></column-gridline>\n      <span class=\"aaCellText aaFontData aaCellAcctTitle\" style=\"text-align: right;\"><span\n          class=\"aaSansSerif\">Total:</span></span>\n      <column-gridline\n          gridline-width=\"${eva.GRIDLINE_THIN}\"\n          gridline-color=\"transparent\"></column-gridline>\n      <span class=\"aaCellText aaFontData aaCellBchgBal\">${sideAcctList.listTotal.toFixed(2)}</span>\n      <column-gridline\n          gridline-width=\"${eva.GRIDLINE_THIN}\"\n          gridline-color=\"transparent\"></column-gridline>\n    </div>\n  </div>\n\n</template>\n"; });
define('text!au-components/cell-bchg.html', ['module'], function(module) { module.exports = "\r\n<template bindable=\"isBlank, acctTitle, bchgDesc, bchgAmt, autoBalanceItem, gridlineWidth, gridlineColor\">\r\n  <require from=\"../au-views/column-gridline.html\"></require>\r\n  <div css=\"display: inline-block; border-bottom: 0px solid ${gridlineColor};\">\r\n    <template if.bind=\"!isBlank\">\r\n      <template if.bind=\"!eva.isEditing\">\r\n        <div class=\"aaCellText aaFontData aaCellAcctTitle aaInlineBlock\">${acctTitle}</div>\r\n        <div css=\"display: block; position: relative; border-top: 1px solid ${gridlineColor};\">\r\n          <div class=\"aaCellText aaFontData\">\r\n            <input type=\"text\"\r\n                   disabled\r\n                   class=\"aaFormInputText aaCellBchgDesc\"\r\n                   value=\"${bchgDesc}\">\r\n          </div>\r\n\r\n          <column-gridline\r\n              gridline-width=\"${gridlineWidth}\"\r\n              gridline-color=\"${gridlineColor}\"></column-gridline>\r\n          <template if.bind=\"autoBalanceItem\">\r\n            <div class=\"aaCellText aaFontData\">\r\n              <input type=\"text\"\r\n                     disabled\r\n                     class=\"aaFormInputText aaCellBchgAmt\"\r\n                     style=\"border-color: transparent;\"\r\n                     value=\"${bchgAmt}\">\r\n            </div>\r\n          </template>\r\n          <template if.bind=\"!autoBalanceItem\">\r\n            <div class=\"aaCellText aaFontData\">\r\n              <input type=\"text\"\r\n                     disabled\r\n                     class=\"aaFormInputText aaCellBchgAmt\"\r\n                     value=\"${bchgAmt}\">\r\n            </div>\r\n          </template>\r\n      </template>\r\n    </template>\r\n\r\n    <template if.bind=\"isBlank\">\r\n      <div class=\"aaCellText aaFontData aaCellAcctTitle aaInlineBlock\">&nbsp;</div>\r\n      <div css=\"display: block; position: relative; border-top: 1px solid transparent;\">\r\n        <div class=\"aaCellText aaFontData\">\r\n          <input type=\"text\" disabled\r\n                 class=\"aaFormInputText aaCellBchgDesc\"\r\n                 style=\"border-color: transparent;\"\r\n                 value=\"\">\r\n        </div>\r\n        <column-gridline\r\n            gridline-width=\"${gridlineWidth}\"\r\n            gridline-color=\"transparent\"></column-gridline>\r\n        <div class=\"aaCellText aaFontData\">\r\n          <input type=\"text\" disabled\r\n                 class=\"aaFormInputText aaCellBchgAmt\"\r\n                 style=\"border-color: transparent;\"\r\n                 value=\"\">\r\n        </div>\r\n      </div>\r\n    </template>\r\n  </div>\r\n</template>"; });
define('text!au-components/gh-tran-bchg.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"../au-views/column-gridline.html\"></require>\r\n\r\n  <div class=\"aaInlineBlock\">\r\n    <column-gridline\r\n        gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n        gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n    <div class=\"aaInlineBlock\">\r\n      <div class=\"aaInlineBlock aaCellText aaFontSizeLabel\">\r\n        <input type=\"text\"\r\n               disabled\r\n               class=\"aaFormInputText aaCellAcctTitle\"\r\n               css=\"vertical-align: middle; border-color: ${eva.GRIDLINE_COLOR};\"\r\n               value=\"Target asset account\">\r\n\r\n        <span class=\"aaBtn aaBtnHidden\"\r\n              style=\"vertical-align: middle; border-color: #999;\">\r\n                  <i class=\"fa fa-ellipsis-h fa-fw\" aria-hidden=\"true\"></i>\r\n                </span>\r\n      </div>\r\n\r\n      <div style=\"display: block; position: relative; border-top: 1px solid transparent;\">\r\n        <div class=\"aaCellText aaFontSizeLabel\">\r\n          <input type=\"text\"\r\n                 disabled\r\n                 class=\"aaFormInputText aaCellBchgDesc\"\r\n                 css=\"border-color: ${eva.GRIDLINE_COLOR};\"\r\n                 value=\"Change description\">\r\n        </div>\r\n        <column-gridline\r\n            gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n            gridline-color=\"transparent\"></column-gridline>\r\n        <div class=\"aaCellText aaFontSizeLabel\">\r\n          <input type=\"text\"\r\n                 disabled\r\n                 class=\"aaFormInputText aaCellBchgAmt\"\r\n                 css=\"border-color: ${eva.GRIDLINE_COLOR};\"\r\n                 value=\"Change amt\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <column-gridline\r\n        gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n        gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n    <div class=\"aaInlineBlock\">\r\n      <div class=\"aaInlineBlock aaCellText aaFontSizeLabel\">\r\n        <input type=\"text\"\r\n               disabled\r\n               class=\"aaFormInputText aaCellAcctTitle\"\r\n               css=\"vertical-align: middle; border-color: ${eva.GRIDLINE_COLOR};\"\r\n               value=\"Target equity account\">\r\n\r\n        <span class=\"aaBtn aaBtnHidden\"\r\n              style=\"vertical-align: middle; border-color: #999;\">\r\n                  <i class=\"fa fa-ellipsis-h fa-fw\" aria-hidden=\"true\"></i>\r\n                </span>\r\n      </div>\r\n      <div style=\"display: block; position: relative; border-top: 1px solid transparent;\">\r\n        <div class=\"aaCellText aaFontSizeLabel\">\r\n          <input type=\"text\"\r\n                 disabled\r\n                 class=\"aaFormInputText aaCellBchgDesc\"\r\n                 css=\"border-color: ${eva.GRIDLINE_COLOR};\"\r\n                 value=\"Change description\">\r\n        </div>\r\n        <column-gridline\r\n            gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n            gridline-color=\"transparent\"></column-gridline>\r\n        <div class=\"aaCellText aaFontSizeLabel\">\r\n          <input type=\"text\"\r\n                 disabled\r\n                 class=\"aaFormInputText aaCellBchgAmt\"\r\n                 css=\"border-color: ${eva.GRIDLINE_COLOR};\"\r\n                 value=\"Change amt\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <column-gridline\r\n        gridline-width=\"100%\"\r\n        gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n  </div>\r\n</template>\r\n"; });
define('text!au-components/module-acct.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../au-views/column-gridline.html\"></require>\n  <require from=\"../au-views/bchg-selected-row.html\"></require>\n  <div class=\"aaPanel aaPanelBoxShadow\">\n    <div class=\"aaPanelHeader aaPanelHeaderModule\">${eva.selectedAcct.isAcct ? 'Account' : 'Annotation'}</div>\n    <div class=\"aaPanelToolBar\" if.bind=\"!eva.isEditing\">\n      <span click.trigger=\"onGoFae($event)\"\n            class=\"aaBtn\">\n         <i class=\"fa fa-chevron-left fa-fw\" aria-hidden=\"true\"></i> Assets = Equities\n      </span>\n      <span click.trigger=\"onGoUp($event)\"\n            class=\"aaBtn\">\n          <i class=\"fa fa-chevron-up fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <span click.trigger=\"onGoDown($event)\"\n            class=\"aaBtn\">\n          <i class=\"fa fa-chevron-down fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"aaToolBarDivider\">.</span>\n      <span click.trigger=\"onEdit($event)\"\n            class=\"aaBtn\">\n           <i class=\"fa fa-pencil-square-o fa-fw aaIconBlue\" aria-hidden=\"true\"></i> Edit\n      </span>\n      <span click.trigger=\"onDelete($event)\"\n            class=\"aaBtn\" style=\"margin-left: 1pc;\">\n           <i class=\"fa fa-minus-circle fa-fw aaIconRed\" aria-hidden=\"true\"></i> Delete\n      </span>\n      <span class=\"aaToolBarDivider\">.</span>\n<!--\n      <div class=\"btn-group\">\n        <a class=\"aaBtn dropdown-toggle\" data-toggle=\"dropdown\" click.trigger=\"onMenuClick($event, eva.selectedAcct)\">\n          <span class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></span>\n        </a>\n        <ul class=\"dropdown-menu aaSansSerif\">\n          <li><a><i class=\"fa fa-plus-circle fa-fw aaIconGreen\"></i> Insert new account row</a></li>\n          <li><a><i class=\"fa fa-plus-circle fa-fw aaIconGreen\"></i> Insert new annotation row</a></li>\n          <li class=\"divider\"></li>\n          <li><a><i class=\"fa fa-minus-circle fa-fw aaIconRed\"></i> Delete row...</a></li>\n          <li class=\"divider\"></li>\n          <li><a><i class=\"fa fa-arrows-v fa-fw aaIconBlue\"></i> Re-position row...</a>\n          </li>\n        </ul>\n      </div>\n-->\n    </div>\n    <div class=\"aaPanelToolBar\" if.bind=\"eva.isEditing\">\n      <div style=\"text-align: left;\">\n        <span class=\"aaToolBarDivider\">.</span>\n        <span click.trigger=\"onSaveEdits($event)\"\n              class=\"aaBtn\">Save</span>\n        <span click.trigger=\"onCancelEdits($event)\"\n              class=\"aaBtn\" style=\"margin-left: 3pc;\">Cancel</span>\n        <span class=\"aaToolBarDivider\">.</span>\n      </div>\n    </div>\n    <div class=\"aaPanelBody\">\n      <template if.bind=\"eva.selectedAcct.isAcct\">\n        <div class=\"aaForm\">\n          <table border=\"0\" style=\"border-collapse: collapse;\">\n            <tr>\n              <td class=\"aaFormItemLabel\">ID:</td>\n              <td class=\"aaFormItemData\">${eva.selectedAcct.id}</td>\n            </tr>\n            <tr>\n              <td class=\"aaFormItemLabel\">Equation side:</td>\n              <td class=\"aaFormItemData\">${eva.equSideText(eva.selectedAcct.equationSide)}</td>\n            </tr>\n            <tr>\n              <td class=\"aaFormItemLabel\">Title:</td>\n              <template if.bind=\"!eva.isEditing\">\n                <td class=\"aaFormItemData\">\n                  <input type=\"text\" disabled\n                         class=\"aaFormInputText aaCellAcctTitle\"\n                         value=\"${eva.selectedAcct.title}\">\n                </td>\n              </template>\n              <template if.bind=\"eva.isEditing\">\n                <td class=\"aaFormItemData\">\n                  <input type=\"text\"\n                         class=\"aaFormInputText aaCellAcctTitle\"\n                         value=\"${eva.selectedAcct.title}\">\n                </td>\n              </template>\n            </tr>\n          </table>\n        </div>\n\n        <div class=\"aaGridContainer\">\n          <div class=\"aaGridTitleBar\">Balance changes</div>\n          <div class=\"aaGridHeader\">\n            <div class=\"aaFontLabel aaRow\">\n              <div class=\"aaCellRowOps aaFontSizeLabel\">\n                <span class=\"aaBtn\"\n                      click.trigger=\"onNewTran($event, eva.selectedAcct)\">\n                  <i class=\"fa fa-plus-circle fa-fw aaIconGreen\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaCellRowSelectedChar\" css=\"visibility: ${'hidden'};\">${eva.ROW_SELECTED_CHAR}</div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellTranDate\"><span class=\" aaSansSerif\">Date</span></div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellBchgDesc\"><span class=\" aaSansSerif\">Change description</span></div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellBchgAmt\"><span class=\"aaSansSerif\">Change amt</span></div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellBchgBal\"><span class=\" aaSansSerif\">New Balance</span></div>\n              <column-gridline\n                  gridline-width=\"100%\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            </div>\n          </div>\n          <div class=\"aaGridScrollableRows\"\n               id=\"acctModule-${eva.selectedAcct.id}\">\n            <template repeat.for=\"bchg of eva.selectedAcct.bchgList\">\n              <div id=\"${bchg.id}\"\n                   class=\"aaRow\"\n                   mouseenter.trigger=\"onRowEnter($event, bchg)\"\n                   mouseleave.trigger=\"onRowLeave($event, bchg)\">\n                <div class=\"aaCellRowOps  aaFontSizeLabel\">\n                  <span class=\"aaBtn aaBtnHidden\"\n                        click.delegate=\"onGoBchg($event, bchg)\">\n                    <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n                <column-gridline\n                    gridline-width=\"${eva.GRIDLINE_THIN}\"\n                    gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n                <div class=\"aaCellText aaCellRowSelectedChar\" css=\"visibility: ${bchg.id == eva.selectedBchg.id ? 'visible' : 'hidden'};\">${eva.ROW_SELECTED_CHAR}</div>\n                <div class=\"aaRowDataCells\">\n                  <column-gridline\n                      gridline-width=\"${eva.GRIDLINE_THIN}\"\n                      gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n                  <div class=\"aaCellText aaFontSizeData aaCellTranDate\">${bchg.sourceTran.date}</div>\n                  <column-gridline\n                      gridline-width=\"${eva.GRIDLINE_THIN}\"\n                      gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n                  <div class=\"aaCellText aaFontSizeData aaCellBchgDesc\">${bchg.desc}</div>\n                  <column-gridline\n                      gridline-width=\"${eva.GRIDLINE_THIN}\"\n                      gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n                  <div class=\"aaCellText aaFontSizeData aaCellBchgAmt\">${bchg.amt.toFixed(2)}</div>\n                  <column-gridline\n                      gridline-width=\"${eva.GRIDLINE_THIN}\"\n                      gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n                  <div class=\"aaCellText aaFontSizeData aaCellBchgBal\">${bchg.newBalance.toFixed(2)}</div>\n                  <column-gridline\n                      gridline-width=\"${eva.GRIDLINE_THIN}\"\n                      gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n                </div>\n              </div>\n            </template>\n            <!--\n            The purpose of having the following invisible end-of-list row\n            is to cause an empty \"Account\" grid to have\n            the same width as one that is populated.\n            -->\n            <div class=\"aaRow\" style=\"visibility: hidden;\">\n              <div class=\"aaCellRowOps \">\n                <span class=\"aaBtn aaBtnHidden\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i></span>\n              </div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontData aaCellTranDate\"><span\n                  class=\"aaSansSerif aaCellTextEOL\">${eva.END_OF_LIST}</span></div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"transparent\"></column-gridline>\n              <div class=\"aaCellText aaFontData aaCellBchgDesc\"></div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"transparent\"></column-gridline>\n              <div class=\"aaCellText aaFontData aaCellBchgAmt\"></div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"transparent\"></column-gridline>\n              <div class=\"aaCellText aaFontData aaCellBchgBal\"></div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"transparent\"></column-gridline>\n            </div>\n          </div>\n          <div class=\"aaGridFooterBar\"></div>\n        </div>\n      </template>\n      <template if.bind=\"eva.selectedAcct.isAnnotation\">\n        <div class=\"aaForm\">\n          <template if.bind=\"!eva.isEditing\">\n            <span class=\"aaSansSerif\">Annotation:</span>\n            <input class=\"aaInputText aaCellAnnoTitle aaSansSerif\" type=\"text\" value=\"${eva.selectedAcct.annoText}\"\n                   disabled>\n            <br>\n          </template>\n          <template if.bind=\"eva.isEditing\">\n            <span class=\"aaSansSerif\">Annotation:</span>\n            <input class=\"aaInputText aaCellAnnoTitle aaSansSerif\" type=\"text\" value=\"${eva.selectedAcct.annoText}\">\n            <br>\n          </template>\n        </div>\n        <div class=\"aaGridScrollableRows\"\n             style=\"height: 2pc; visibility: hidden;\">\n          <!--\n          The purpose of having the following invisible end-of-list row\n          is to cause this \"Annotation\" panel to have the same width as that\n          of an \"Account\" panel.\n          -->\n          <div class=\"aaRow aaRowDelimiter\">\n            <div class=\"aaCellRowOps\">\n              <span class=\"aaBtn aaBtnHidden\"><i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i></span>\n            </div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaCellText aaFontData aaCellTranDate\"><span\n                class=\"aaSansSerif aaCellTextEOL\">${eva.END_OF_LIST}</span></div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"transparent\"></column-gridline>\n            <div class=\"aaCellText aaFontData aaCellBchgDesc\"></div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"transparent\"></column-gridline>\n            <div class=\"aaCellText aaFontData aaCellBchgAmt\"></div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"transparent\"></column-gridline>\n            <div class=\"aaCellText aaFontData aaCellBchgBal\"></div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n          </div>\n        </div>\n      </template>\n    </div>\n  </div>\n</template>\n"; });
define('text!au-components/module-bchg.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../au-views/column-gridline.html\"></require>\n  <div class=\"aaPanel aaPanelBoxShadow\">\n    <div class=\"aaPanelHeader aaPanelHeaderModule\">Account balance change</div>\n    <div class=\"aaPanelToolBar\" xstyle=\"text-align: center;\">\n<!--\n      <span click.trigger=\"onGoAcct($event)\"\n            class=\"aaBtn\">\n            <i class=\"fa fa-chevron-left fa-fw\" aria-hidden=\"true\"></i>Target account\n      </span>\n      <span class=\"aaToolBarDivider\">.</span>\n      <span click.trigger=\"onGoTran($event)\"\n            class=\"aaBtn\">Source transaction\n             <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n          </span>\n-->\n      <span class=\"aaToolBarDivider\">.</span>\n      <span click.trigger=\"onEdit($event)\"\n            class=\"aaBtn\">\n           <i class=\"fa fa-pencil-square-o fa-fw aaIconBlue\" aria-hidden=\"true\"></i> Edit\n      </span>\n      <span click.trigger=\"onDelete($event)\"\n            class=\"aaBtn\" style=\"margin-left: 1pc;\">\n           <i class=\"fa fa-minus-circle fa-fw aaIconRed\" aria-hidden=\"true\"></i> Delete\n      </span>\n      <span class=\"aaToolBarDivider\">.</span>\n    </div>\n    <div class=\"aaPanelBody\">\n      <div style=\"text-align: center;\">\n        <!--Target account-->\n        <div class=\"aaGridContainer aaInlineBlock\" style=\"margin-right: 1pc;\">\n          <div class=\"aaGridTitleBar\">Target account</div>\n          <div class=\"aaGridHeader\">\n            <div class=\"aaFontLabel aaRow\">\n              <div class=\"aaCellRowOps aaFontSizeLabel\">\n                <span class=\"aaBtn aaBtnHidden\">\n                  <i class=\"fa fa-chevron-left fa-fw aaIconGreen\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellId\"><span class=\" aaSansSerif\">ID</span></div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellEquSide\"><span class=\" aaSansSerif\">Equation side</span>\n              </div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellAcctTitle\"><span class=\" aaSansSerif\">Title</span></div>\n            </div>\n          </div>\n          <div class=\"aaRow\">\n            <div class=\"aaCellRowOps  aaFontSizeLabel\">\n                  <span class=\"aaBtn\"\n                        click.delegate=\"onGoAcct($event)\">\n                    <i class=\"fa fa-chevron-left fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n            </div>\n            <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaRowDataCells\">\n              <div class=\"aaCellText aaFontSizeData aaCellId\">${eva.selectedBchg.targetAcct.id}</div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeData aaCellEquSide\">\n                ${eva.equSideText(eva.selectedBchg.targetAcct.equationSide)}\n              </div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeData aaCellAcctTitle\">${eva.selectedBchg.targetAcct.title}</div>\n            </div>\n          </div>\n        </div>\n        <!--Source transaction-->\n        <div class=\"aaGridContainer aaInlineBlock\">\n          <div class=\"aaGridTitleBar\">\n            Source transaction\n          </div>\n          <div class=\"aaGridHeader\">\n            <div class=\"aaFontLabel aaRow\">\n              <div class=\"aaCellRowOps aaFontSizeLabel\">\n                <span class=\"aaBtn aaBtnHidden\">\n                  <i class=\"fa fa-chevron-right fa-fw aaIconGreen\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellId\"><span class=\"aaSansSerif\">ID</span></div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellTranDate\"><span class=\" aaSansSerif\">Date</span></div>\n<!--\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n-->\n            </div>\n          </div>\n          <div class=\"aaRow\">\n            <div class=\"aaCellRowOps  aaFontSizeLabel\">\n                  <span class=\"aaBtn\"\n                        click.delegate=\"onGoTran($event)\">\n                    <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n            </div>\n            <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaRowDataCells\">\n              <div class=\"aaCellText aaFontSizeData aaCellId\">${eva.selectedBchg.sourceTran.id}</div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeData aaCellTranDate\">${eva.selectedBchg.sourceTran.date}</div>\n              <!--<column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n                -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div style=\"margin-top: 2pc; text-align: center;\">\n        <!--\n                  <span click.trigger=\"onGoAcct($event)\"\n                        class=\"aaBtn\">\n                    <i class=\"fa fa-chevron-left fa-fw\" aria-hidden=\"true\"></i> Show in target account\n                  </span>\n        -->\n        <!--Balance change-->\n        <div class=\"aaGridContainer aaInlineBlock\" style=\"margin-top: 0;\">\n          <!--Balance change-->\n          <div class=\"aaGridTitleBar\">Balance change</div>\n          <div class=\"aaGridHeader\">\n            <div class=\"aaFontLabel aaRow\">\n              <div class=\"aaCellText aaFontSizeLabel aaCellBchgDesc\"><span class=\" aaSansSerif\">Description</span></div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeLabel aaCellBchgAmt\"><span class=\" aaSansSerif\">Amount</span></div>\n            </div>\n          </div>\n          <div class=\"aaRow\">\n            <div class=\"aaRowDataCells\">\n              <div class=\"aaCellText aaFontSizeData aaCellBchgDesc\">${eva.selectedBchg.desc}</div>\n              <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaFontSizeData aaCellBchgAmt\">${eva.selectedBchg.amt.toFixed(2)}</div>\n            </div>\n          </div>\n        </div>\n        <!--\n                <span click.trigger=\"onGoTran($event)\"\n                      class=\"aaBtn\">Show in source transaction\n                    <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n        -->\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!au-components/module-fae.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./acct-list-fae\"></require>\n  <require from=\"../au-attributes/equation-side\"></require>\n\n  <div class=\"aaPanel aaPanelBoxShadow\">\n    <div class=\"aaPanelHeader aaPanelHeaderModule\">The fundamental accounting equation</div>\n    <div class=\"aaPanelBody\">\n      <!--<div style=\"white-space: nowrap;\">-->\n        <div class=\"aaEquSideContainer\">\n          <h1 class=\"text-right\">Assets</h1>\n          <acct-list-fae\n              aa-equation-side=\"${eva.SIDE_ASSETS}\"\n              mouseenter.trigger=\"selectSide(eva.SIDE_ASSETS)\"\n              mouseleave.trigger=\"deselectSide(eva.SIDE_ASSETS)\">\n          </acct-list-fae>\n        </div>\n        <div class=\"aaEquSideContainer\" style=\"padding: 0 1pc;\">\n          <h1>=</h1>\n        </div>\n        <div class=\"aaEquSideContainer\">\n          <h1 style=\"text-align: left;\">Equities</h1>\n          <acct-list-fae\n              aa-equation-side=\"${eva.SIDE_EQUITIES}\"\n              mouseenter.trigger=\"selectSide(eva.SIDE_EQUITIES)\"\n              mouseleave.trigger=\"deselectSide(eva.SIDE_EQUITIES)\">\n          </acct-list-fae>\n        </div>\n      <!--</div>-->\n    </div>\n  </div>\n</template>\n"; });
define('text!au-components/module-jrnl.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"../au-views/column-gridline.html\"></require>\r\n  <require from=\"./tran-bchg\"></require>\r\n  <require from=\"./gh-tran-bchg\"></require>\r\n  <require from=\"./cell-bchg.html\"></require>\r\n\r\n  <div class=\"aaPanel aaPanelBoxShadow\">\r\n    <div class=\"aaPanelHeader aaPanelHeaderModule\">Transaction Journal</div>\r\n    <div class=\"aaPanelBody\">\r\n      <div class=\"aaGridContainer\">\r\n        <div class=\"aaGridTitleBar\">Transactions</div>\r\n        <div class=\"aaGridHeader aaFontLabel\">\r\n          <div class=\"aaRow aaFontLabel\">\r\n            <div class=\"aaCellRowOps\"\r\n                 click.delegate=\"onNewTran($event)\">\r\n              <span class=\"aaBtn\">\r\n                <i class=\"fa fa-plus-circle fa-fw aaIconGreen\" aria-hidden=\"true\"></i>\r\n              </span>\r\n            </div>\r\n            <column-gridline\r\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n            <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\r\n            <column-gridline\r\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n            <div class=\"aaCellText aaFontSizeLabel aaCellId\">ID</div>\r\n            <column-gridline\r\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n            <div class=\"aaCellText aaFontSizeLabel aaCellTranDate\">Date</div>\r\n            <gh-tran-bchg></gh-tran-bchg>\r\n          </div>\r\n        </div>\r\n        <div class=\"aaGridScrollableRows\"\r\n             style=\"height: 33pc;\"\r\n             id=\"jrnlGridBodyContainer\">\r\n          <template repeat.for=\"tran of eva.tranList\">\r\n            <div id=\"${tran.id}\"\r\n                 class=\"aaRow aaRowJrnl\"\r\n                 xcss=\"border-top: 5px solid ${eva.GRIDLINE_COLOR};\r\n                      border-bottom: 5px solid ${eva.GRIDLINE_COLOR};\r\n                      margin: 5px 0;\"\r\n                 mouseenter.trigger=\"onRowEnter($event, tran)\"\r\n                 mouseleave.trigger=\"onRowLeave($event, tran)\">\r\n              <div class=\"aaCellRowOps\">\r\n                  <span class=\"aaBtn aaBtnHidden\"\r\n                        click.delegate=\"onGoTran($event, tran)\">\r\n                    <i class=\"fa fa-chevron-left fa-fw\" aria-hidden=\"true\"></i>\r\n                  </span>\r\n              </div>\r\n              <column-gridline\r\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n              <div class=\"aaCellText aaCellRowSelectedChar\" css=\"visibility: ${tran.id == eva.selectedTran.id ? 'visible' : 'hidden'};\">${eva.ROW_SELECTED_CHAR}</div>\r\n              <div class=\"aaRowDataCells\">\r\n                <column-gridline\r\n                    gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n                    gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n                <div class=\"aaCellText aaFontData aaCellId\">${tran.id}</div>\r\n                <column-gridline\r\n                    gridline-width=\"${eva.GRIDLINE_THIN}\"\r\n                    gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n                <div class=\"aaCellText aaFontData aaCellTranDate\">${tran.date}</div>\r\n                <div class=\"aaInlineBlock\">\r\n                  <div class=\"aaInlineBlock\"\r\n                       css=\"border-bottom: 1px solid ${eva.GRIDLINE_COLOR};\">\r\n                    <template repeat.for=\"bchg of tran.bchgList.slice(0, 1)\">\r\n                      <tran-bchg bchg.bind=\"bchg\"></tran-bchg>\r\n                    </template>\r\n                  </div>\r\n                  <template repeat.for=\"bchg of tran.bchgList.slice(1)\">\r\n                    <div class=\"aaSubRow\"\r\n                         xcss=\"border-top: ${eva.GRIDLINE_THICK} solid ${eva.GRIDLINE_COLOR};\">\r\n                      <tran-bchg bchg.bind=\"bchg\"></tran-bchg>\r\n                    </div>\r\n                  </template>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </template>\r\n        </div>\r\n        <div class=\"aaGridFooterBar\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n"; });
define('text!au-components/module-tran.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../au-views/column-gridline.html\"></require>\n  <require from=\"./tran-bchg\"></require>\n  <require from=\"./gh-tran-bchg\"></require>\n\n  <div class=\"aaPanel aaPanelBoxShadow\">\n\n    <div class=\"aaPanelHeader aaPanelHeaderModule\">Transaction</div>\n    <div class=\"aaPanelToolBar\" if.bind=\"!eva.isEditing\">\n      <span click.trigger=\"onGoUp($event)\"\n            class=\"aaBtn\">\n          <i class=\"fa fa-chevron-up fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <span click.trigger=\"onGoDown($event)\"\n            class=\"aaBtn\">\n          <i class=\"fa fa-chevron-down fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <span click.trigger=\"onGoJrnl($event)\"\n            class=\"aaBtn\">Transaction journal\n         <i class=\"fa fa-chevron-right fa-fw\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"aaToolBarDivider\">.</span>\n      <span click.trigger=\"onEdit($event)\"\n            class=\"aaBtn\">\n           <i class=\"fa fa-pencil-square-o fa-fw aaIconBlue\" aria-hidden=\"true\"></i> Edit\n      </span>\n      <span click.trigger=\"onDelete($event)\"\n            class=\"aaBtn\" style=\"margin-left: 1pc;\">\n           <i class=\"fa fa-minus-circle fa-fw aaIconRed\" aria-hidden=\"true\"></i> Delete\n      </span>\n      <span class=\"aaToolBarDivider\">.</span>\n<!--\n      <div class=\"btn-group\">\n        <a class=\"aaBtn dropdown-toggle\" data-toggle=\"dropdown\" click.trigger=\"onMenuClick($event, eva.selectedAcct)\">\n          <span class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></span>\n        </a>\n        <ul class=\"dropdown-menu aaSansSerif\">\n          <li><a><i class=\"fa fa-plus-circle fa-fw aaIconGreen\"></i> Insert new account row</a></li>\n          <li><a><i class=\"fa fa-plus-circle fa-fw aaIconGreen\"></i> Insert new annotation row</a></li>\n          <li class=\"divider\"></li>\n          <li><a><i class=\"fa fa-minus-circle fa-fw aaIconRed\"></i> Delete row...</a></li>\n          <li class=\"divider\"></li>\n          <li><a><i class=\"fa fa-arrows-v fa-fw aaIconBlue\"></i> Re-position row...</a>\n          </li>\n        </ul>\n      </div>\n-->\n\n    </div>\n    <div class=\"aaPanelToolBar\" if.bind=\"eva.isEditing\">\n      <div style=\"text-align: left;\">\n        <span class=\"aaToolBarDivider\">.</span>\n        <span click.trigger=\"onSaveEdits($event)\"\n              class=\"aaBtn\">Save</span>\n        <span click.trigger=\"onCancelEdits($event)\"\n              class=\"aaBtn\" style=\"margin-left: 3em;\">Cancel</span>\n        <span class=\"aaToolBarDivider\">.</span>\n      </div>\n    </div>\n    <div class=\"aaPanelBody\">\n      <div class=\"aaForm\">\n        <table border=\"0\" style=\"border-collapse: collapse;\">\n          <tr>\n            <td class=\"aaFormItemLabel\">ID:</td>\n            <td class=\"aaFormItemData\">${eva.selectedTran.id}</td>\n          </tr>\n          <tr>\n            <td class=\"aaFormItemLabel\">Date:</td>\n            <template if.bind=\"!eva.isEditing\">\n              <td class=\"aaFormItemData\">\n                <input type=\"text\" disabled\n                       class=\"aaFormInputText aaCellTranDate\"\n                       value=\"${eva.selectedTran.date}\">\n              </td>\n            </template>\n            <template if.bind=\"eva.isEditing\">\n              <td class=\"aaFormItemData\">\n                <input type=\"text\"\n                       class=\"aaFormInputText aaCellTranDate\"\n                       value=\"${eva.selectedTran.date}\">\n              </td>\n            </template>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"aaGridContainer\">\n        <div class=\"aaGridTitleBar\">Account balance changes</div>\n        <div class=\"aaGridHeader\">\n          <div class=\"aaFontLabel aaRow\">\n            <div class=\"aaCellRowOps\">\n              <span class=\"aaBtn aaBtnHidden aaFontLabel\"><i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i></span>\n            </div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\n            <gh-tran-bchg></gh-tran-bchg>\n          </div>\n        </div>\n\n        <!-- subheading row for Aato-change-amt item -->\n        <div class=\"aaFontLabel aaRow\">\n          <div class=\"aaCellRowOps\">\n            <span class=\"aaBtn aaBtnHidden aaFontLabel\"></span>\n          </div>\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n          <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n          <div class=\"aaInlineBlock aaGridBchgSubtitleBar\" style=\"width: 100%;\">\n            <span>Automatically computed amount</span>\n          </div>\n        </div>\n        <!-- Auto-change-amt item -->\n        <template repeat.for=\"bchg of tranViewSource.bchgList.slice(0, 1)\">\n          <div id=\"${bchg.id}\"\n               class=\"aaRow\"\n               mouseenter.trigger=\"onRowEnter($event, bchg)\"\n               mouseleave.trigger=\"onRowLeave($event, bchg)\">\n            <template if.bind=\"!eva.isEditing\">\n              <div class=\"aaCellRowOps\">\n                  <span class=\"aaBtn aaBtnHidden\"\n                        click.delegate=\"onGoBchg($event, bchg)\">\n                    <i class=\"fa fa-chevron-left fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n              </div>\n            </template>\n            <template if.bind=\"eva.isEditing\">\n              <div class=\"aaCellRowOps\">\n                  <span class=\"aaBtn aaBtnHidden\"\n                        click.delegate=\"onMenuClick($event, bchg)\">\n                    <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n              </div>\n            </template>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaCellText aaCellRowSelectedChar\" css=\"visibility: ${bchg.id == eva.selectedBchg.id ? 'visible' : 'hidden'};\">${eva.ROW_SELECTED_CHAR}</div>\n            <div class=\"aaRowDataCells\">\n              <tran-bchg bchg.bind=\"bchg\"></tran-bchg>\n              <column-gridline\n                  gridline-width=\"100%\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            </div>\n          </div>\n        </template>\n\n        <!-- subheading row for other item(s) -->\n        <div class=\"aaFontLabel aaRow\">\n          <div class=\"aaFontLabel aaCellRowOps\"\n               click.delegate=\"onArrangeRows($event)\">\n            <span class=\"aaBtn\"><i class=\"fa fa-arrows-v fa-fw aaIconBlue\" aria-hidden=\"true\"></i></span>\n          </div>\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n          <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n          <div class=\"aaInlineBlock aaGridBchgSubtitleBar\" style=\"width: 100%;\">\n            <span>User-supplied amount(s)</span>\n          </div>\n        </div>\n        <div class=\"aaGridScrollableRows\"\n             id=\"tranModule-${eva.selectedTran.id}\"\n             style=\"height: 15pc;\">\n          <template repeat.for=\"bchg of tranViewSource.bchgList.slice(1)\">\n            <div\n                class=\"aaRow\"\n                mouseenter.trigger=\"onRowEnter($event, bchg)\"\n                mouseleave.trigger=\"onRowLeave($event, bchg)\">\n              <template if.bind=\"!eva.isEditing\">\n                <div class=\"aaCellRowOps\">\n                  <span class=\"aaBtn aaBtnHidden\"\n                        click.delegate=\"onGoBchg($event, bchg)\">\n                    <i class=\"fa fa-chevron-left fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n              </template>\n              <template if.bind=\"eva.isEditing\">\n                <div class=\"aaCellRowOps\">\n                  <span class=\"aaBtn aaBtnHidden\"\n                        click.delegate=\"onMenuClick($event, bchg)\">\n                    <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n              </template>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n              <div class=\"aaCellText aaCellRowSelectedChar\" css=\"visibility: ${bchg.id == eva.selectedBchg.id ? 'visible' : 'hidden'};\">${eva.ROW_SELECTED_CHAR}</div>\n              <div class=\"aaRowDataCells\">\n                <tran-bchg bchg.bind=\"bchg\"></tran-bchg>\n              </div>\n            </div>\n          </template>\n\n          <!-- End of list row -->\n          <div class=\"aaRow\"\n               mouseenter.trigger=\"onRowEnter($event, null)\"\n               mouseleave.trigger=\"onRowLeave($event, null)\">\n            <template if.bind=\"!eva.isEditing\">\n              <div class=\"aaCellRowOps\">\n                  <span class=\"aaBtn aaBtnHidden\">\n                    <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n              </div>\n            </template>\n            <template if.bind=\"eva.isEditing\">\n              <div class=\"aaCellRowOps\">\n                  <span class=\"aaBtn aaBtnHidden\"\n                        click.delegate=\"onMenuClick($event, bchg)\">\n                    <i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i>\n                  </span>\n              </div>\n            </template>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n            <div class=\"aaInlineBlock\">\n              <div class=\"aaCellText aaFontData\">\n                <input type=\"text\"\n                       disabled\n                       class=\"aaFormInputText aaCellBchgDesc aaFontLabel aaCellTextEOL\"\n                       style=\"border-color: transparent;\"\n                       value=\"${eva.END_OF_LIST}\">\n              </div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"transparent\"></column-gridline>\n              <div class=\"aaCellText aaFontData\">\n                <input type=\"text\"\n                       disabled\n                       class=\"aaFormInputText aaCellBchgAmt\"\n                       style=\"border-color: transparent;\"\n                       value=\"\">\n              </div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"transparent\"></column-gridline>\n              <div class=\"aaCellText aaFontData\">\n                <input type=\"text\" disabled\n                       class=\"aaFormInputText aaCellBchgDesc aaFontLabel aaCellTextEOL\"\n                       style=\"border-color: transparent;\"\n                       value=\"\">\n              </div>\n              <column-gridline\n                  gridline-width=\"${eva.GRIDLINE_THIN}\"\n                  gridline-color=\"transparent\"></column-gridline>\n              <div class=\"aaCellText aaFontData\">\n                <input type=\"text\" disabled\n                       class=\"aaFormInputText aaCellBchgAmt\"\n                       style=\"border-color: transparent;\"\n                       value=\"\">\n              </div>\n            </div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n          </div>\n        </div>\n        <div class=\"aaGridFooterBar\"></div>\n      </div>\n\n      <!-- net change amt for eash side -->\n      <div class=\"aaGridContainer\" style=\"margin-top: 1pc; border-color: transparent;\">\n        <div class=\"aaRowTotals\">\n          <div class=\"aaCellRowOps\">\n            <span class=\"aaBtn aaBtnHidden\"><i class=\"fa fa-bars fa-fw\" aria-hidden=\"true\"></i></span>\n          </div>\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"transparent\"></column-gridline>\n          <div class=\"aaCellText aaCellRowSelectedChar\" style=\"visibility: hidden;\">${eva.ROW_SELECTED_CHAR}</div>\n          <div class=\"aaInlineBlock\">\n            <div class=\"aaCellText aaFontData\">\n              <input type=\"text\" disabled\n                     class=\"aaFormInputText aaCellBchgDesc aaFontLabel\"\n                     style=\"text-align: right; border-color: transparent;\"\n                     value=\"Net change to assets:\">\n            </div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"transparent\"></column-gridline>\n            <div class=\"aaCellText aaFontData\">\n              <input type=\"text\" disabled\n                     class=\"aaFormInputText aaCellBchgAmt\"\n                     value=\"${tranViewSource.assetsBchg.toFixed(2)}\">\n            </div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"transparent\"></column-gridline>\n            <div class=\"aaCellText aaFontData\">\n              <input type=\"text\" disabled\n                     class=\"aaFormInputText aaCellBchgDesc aaFontLabel\"\n                     style=\"text-align: right; border-color: transparent;\"\n                     value=\"Net change to equities:\">\n            </div>\n            <column-gridline\n                gridline-width=\"${eva.GRIDLINE_THIN}\"\n                gridline-color=\"transparent\"></column-gridline>\n            <div class=\"aaCellText aaFontData\">\n              <input type=\"text\" disabled\n                     class=\"aaFormInputText aaCellBchgAmt\"\n                     value=\"${tranViewSource.equitiesBchg.toFixed(2)}\">\n            </div>\n          </div>\n          <column-gridline\n              gridline-width=\"${eva.GRIDLINE_THIN}\"\n              gridline-color=\"transparent\"></column-gridline>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!au-components/tran-bchg-cells-blank.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../au-views/column-gridline.html\"></require>\n  <div class=\"aaInlineBlock\"\n       xcss=\"background-color: ${eva.GRIDLINE_COLOR};\">\n    <div class=\"aaInlineBlock aaCellText aaFontSizeData\">\n      <input type=\"text\"\n             disabled\n             class=\"aaFormInputText aaCellAcctTitle\"\n             style=\"vertical-align: middle; border-color: transparent;\"\n             value=\"\">\n    </div>\n\n    <div style=\"display: block; position: relative; border-top: 1px solid transparent;\">\n      <div class=\"aaCellText aaFontSizeData\">\n        <input type=\"text\"\n               disabled\n               class=\"aaFormInputText aaCellBchgDesc\"\n               style=\"border-color: transparent;\"\n               value=\"\">\n      </div>\n      <column-gridline\n          gridline-width=\"${eva.GRIDLINE_THIN}\"\n          gridline-color=\"transparent\"></column-gridline>\n      <div class=\"aaCellText aaFontSizeData\">\n        <input type=\"text\"\n               disabled\n               class=\"aaFormInputText aaCellBchgAmt\"\n               style=\"border-color: transparent;\"\n               value=\"\">\n      </div>\n    </div>\n  </div>\n</template>\n\n"; });
define('text!au-components/tran-bchg-cells.html', ['module'], function(module) { module.exports = "<template bindable=\"bchg\">\n  <require from=\"../au-views/column-gridline.html\"></require>\n  <div class=\"aaInlineBlock\">\n    <template if.bind=\"!eva.isEditing\">\n      <div class=\"aaInlineBlock aaCellText aaFontSizeData\">\n        <input type=\"text\"\n               disabled\n               class=\"aaFormInputText aaCellAcctTitle\"\n               css=\"vertical-align: middle; border-color: ${eva.GRIDLINE_COLOR};\"\n               value=\"${bchg.targetAcct.title}\">\n\n        <span class=\"aaBtn aaBtnHidden\"\n              style=\"vertical-align: middle; border-color: #999;\">\n          <i class=\"fa fa-ellipsis-h fa-fw\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n\n      <div style=\"display: block; position: relative; border-top: 1px solid transparent;\">\n        <div class=\"aaCellText aaFontSizeData\">\n            <input type=\"text\"\n                   disabled\n                   class=\"aaFormInputText aaCellBchgDesc\"\n                   value=\"${bchg.desc}\">\n        </div>\n        <column-gridline\n            gridline-width=\"${eva.GRIDLINE_THIN}\"\n            gridline-color=\"transparent\"></column-gridline>\n        <div class=\"aaCellText aaFontSizeData\">\n            <input type=\"text\"\n                   disabled\n                   class=\"aaFormInputText aaCellBchgAmt\"\n                   value=\"${bchg.amt.toFixed(2)}\">\n        </div>\n      </div>\n    </template>\n\n    <template if.bind=\"eva.isEditing\">\n      <div class=\"aaInlineBlock aaCellText aaFontSizeData\">\n        <input type=\"text\"\n               disabled\n               class=\"aaFormInputText aaCellAcctTitle\"\n               style=\"vertical-align: middle;\"\n               value=\"${bchg.targetAcct.title}\">\n\n        <span class=\"aaBtn\"\n              click.delegate=\"moduleTran.onPickAcct($event, bchg)\"\n              style=\"vertical-align: middle; border-color: #999;\">\n          <i class=\"fa fa-ellipsis-h fa-fw\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n\n      <div css=\"display: block; position: relative; border-top: 1px solid transparent;\">\n        <div class=\"aaCellText aaFontSizeData\">\n            <input type=\"text\"\n                   class=\"aaFormInputText aaCellBchgDesc\"\n                   value.two-way=\"bchg.desc\">\n        </div>\n        <column-gridline\n            gridline-width=\"${eva.GRIDLINE_THIN}\"\n            gridline-color=\"transparent\"></column-gridline>\n        <div class=\"aaCellText aaFontSizeData\">\n          <template if.bind=\"bchg.intraTranSorter == 0\">\n            <input type=\"text\"\n                   disabled\n                   class=\"aaFormInputText aaCellBchgAmt\"\n                   value=\"${bchg.amt.toFixed(2)}\">\n          </template>\n          <template if.bind=\"bchg.intraTranSorter != 0\">\n            <input type=\"text\"\n                   class=\"aaFormInputText aaCellBchgAmt\"\n                   value.two-way=\"bchg.amt.toFixed(2)\">\n          </template>\n        </div>\n      </div>\n    </template>\n  </div>\n</template>\n\n"; });
define('text!au-components/tran-bchg-header.html', ['module'], function(module) { module.exports = "<template bindable=\"equationSide\">\r\n  <require from=\"../au-views/column-gridline.html\"></require>\r\n\r\n  <div class=\"aaInlineBlock\">\r\n\r\n  </div>\r\n</template>\r\n"; });
define('text!au-components/tran-bchg.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"../au-views/column-gridline.html\"></require>\n  <require from=\"./tran-bchg-cells\"></require>\n  <require from=\"./tran-bchg-cells-blank\"></require>\n\n  <div class=\"aaInlineBlock\">\n    <column-gridline\n        gridline-width=\"${eva.GRIDLINE_THIN}\"\n        gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n\n    <template if.bind=\"bchg.targetAcct.equationSide == eva.SIDE_ASSETS\">\n      <tran-bchg-cells bchg.bind=\"bchg\"></tran-bchg-cells>\n      <column-gridline\n          gridline-width=\"${eva.GRIDLINE_THIN}\"\n          gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n      <tran-bchg-cells-blank></tran-bchg-cells-blank>\n    </template>\n\n    <template if.bind=\"bchg.targetAcct.equationSide == eva.SIDE_EQUITIES\">\n      <tran-bchg-cells-blank></tran-bchg-cells-blank>\n      <column-gridline\n          gridline-width=\"${eva.GRIDLINE_THIN}\"\n          gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n      <tran-bchg-cells bchg.bind=\"bchg\"></tran-bchg-cells>\n    </template>\n\n    <column-gridline\n        gridline-width=\"${eva.GRIDLINE_THIN}\"\n        gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\n  </div>\n</template>\n"; });
define('text!au-views/bchg-selected-row.html', ['module'], function(module) { module.exports = "<!--\r\n*********************************************************************************************\r\nCannot get this to work because Aurelia does not yet support bindable boolean parameter.\r\n-->\r\n\r\n<template bindable=\"isSelected\">\r\n  <!--<require from=\" ./column-gridline.html\"></require>-->\r\n  <!--<div class=\"aaInlineBlock\" css=\"visibility: ${isSelected ? 'visible' : 'hidden'};\">-->\r\n    <div class=\"aaCellText aaCellRowSelectedChar\" css=\"visibility: ${isSelected == 'true' ? 'visible' : 'hidden'}\">&#xf005;</div>\r\n  <!--</div>-->\r\n</template>\r\n\r\n"; });
define('text!au-views/column-gridline.html', ['module'], function(module) { module.exports = "<template bindable=\"gridlineWidth, gridlineColor\">\r\n  <div class=\"aaInlineBlock\">\r\n    <div css=\"\r\n      display: inline-block;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n      width: ${gridlineWidth};\r\n      background-color: ${gridlineColor};\"></div>\r\n    <div css=\"display: inline-block; width: ${gridlineWidth};\"></div>\r\n  </div>\r\n</template>"; });
define('text!au-views/tran-bchg-cells-header.html', ['module'], function(module) { module.exports = "<template bindable=\"eva, equationSide\">\r\n  <require from=\"./column-gridline.html\"></require>\r\n\r\n  <div class=\"aaInlineBlock aaSansSerif\">\r\n    <div class=\"aaCellText aaFontData aaCellAcctTitle aaInlineBlock\">\r\n      Target ${equationSide == eva.SIDE_ASSETS ? 'asset' : 'equity'} account\r\n    </div>\r\n    <div css=\"display: block; position: relative; border-top: 1px solid ${eva.GRIDLINE_COLOR};\">\r\n      <div class=\"aaCellText aaFontData\">\r\n        <input type=\"text\"\r\n               disabled\r\n               class=\"aaFormInputText aaCellBchgDesc\"\r\n               value=\"Change description\">\r\n      </div>\r\n      <column-gridline\r\n          gridline-width=\"${eva.GRIDLINE_WIDTH}\"\r\n          gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n      <div class=\"aaCellText aaFontData\">\r\n        <input type=\"text\"\r\n               disabled\r\n               class=\"aaFormInputText aaCellBchgAmt\"\r\n               style=\"border-color: transparent;\"\r\n               value=\"Change amt\">\r\n      </div>\r\n    </div>\r\n</template>"; });
define('text!au-views/tran-bchg-row-section-header.html', ['module'], function(module) { module.exports = "<template bindable=\"eva\">\r\n  <require from=\"./column-gridline.html\"></require>\r\n  <require from=\"./tran-bchg-cells-header.html\"></require>\r\n\r\n  <div class=\"aaInlineBlock\">\r\n    <column-gridline\r\n        gridline-width=\"${eva.GRIDLINE_THICK}\"\r\n        gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n    <tran-bchg-cells-header\r\n        eva=\"eva\"\r\n        equationSide=\"${eva.SIDE_ASSETS}\"></tran-bchg-cells-header>\r\n    <column-gridline\r\n        gridline-width=\"${eva.GRIDLINE_THICK}\"\r\n        gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n    <tran-bchg-cells-header\r\n        eva=\"eva\"\r\n        equationSide=\"${eva.SIDE_EQUITIES}\"></tran-bchg-cells-header>\r\n    <column-gridline\r\n        gridline-width=\"${eva.GRIDLINE_THICK}\"\r\n        gridline-color=\"${eva.GRIDLINE_COLOR}\"></column-gridline>\r\n  </div>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map