import { $n as Output, Dl as ɵɵdefineInjectable, En as ElementRef, Fn as Injectable, Ic as NgZone, In as Input, Kc as TransferState, Mr as afterNextRender, Oc as Injector, Ol as ɵɵdefineInjector, Oo as ɵɵgetInheritedFactory, Rc as PLATFORM_ID, S as ViewChild, Sl as signal, Vc as PendingTasks, Wi as setClassMetadata, X as input, _s as ɵɵqueryAdvance, an as ChangeDetectionStrategy, at as output, bl as runInInjectionContext, ca as ɵɵInheritDefinitionFeature, cc as ɵɵviewQuerySignal, cl as inject, cn as Component, gt as viewChild, hl as makeStateKey, jr as afterEveryRender, lc as _asyncToGenerator, nl as effect, qn as NgModule, qt as untracked, ro as ɵɵdefineNgModule, so as ɵɵdomElement, to as ɵɵdefineComponent } from "./core-C5zxX-bE.js";
import { d as isPlatformServer, u as isPlatformBrowser } from "./common-cK1gsKu2.js";
//#region node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs
var _ChartComponent;
var _ChartCoreComponent;
var _ChartSSRService;
var _ChartSSRComponent;
var _ChartHydrateComponent;
var _NgApexchartsModule;
/**
* Option inputs that are copied straight onto the ApexCharts config object.
*
* A reference change in any of these requires tearing the chart down and
* re-creating it. `series` is deliberately excluded: it has a cheap
* `updateSeries()` fast path, see {@link ChartComponent.autoUpdateSeries}.
*/
var _c0 = ["chart"];
var STRUCTURAL_INPUTS = [
	"annotations",
	"chart",
	"colors",
	"dataLabels",
	"stroke",
	"labels",
	"legend",
	"fill",
	"tooltip",
	"plotOptions",
	"responsive",
	"markers",
	"noData",
	"parsing",
	"xaxis",
	"yaxis",
	"forecastDataPoints",
	"grid",
	"states",
	"title",
	"subtitle",
	"theme"
];
/**
* Compare two snapshots by reference, which is the same identity check Angular
* itself used to decide whether to report an input in `SimpleChanges`.
*/
function structuralEquals(a, b) {
	return STRUCTURAL_INPUTS.every((key) => a[key] === b[key]);
}
var ChartComponent = class {
	constructor() {
		this.chart = input(...ngDevMode ? [void 0, { debugName: "chart" }] : 		/* istanbul ignore next */ []);
		this.annotations = input(...ngDevMode ? [void 0, { debugName: "annotations" }] : 		/* istanbul ignore next */ []);
		this.colors = input(...ngDevMode ? [void 0, { debugName: "colors" }] : 		/* istanbul ignore next */ []);
		this.dataLabels = input(...ngDevMode ? [void 0, { debugName: "dataLabels" }] : 		/* istanbul ignore next */ []);
		this.series = input(...ngDevMode ? [void 0, { debugName: "series" }] : 		/* istanbul ignore next */ []);
		this.stroke = input(...ngDevMode ? [void 0, { debugName: "stroke" }] : 		/* istanbul ignore next */ []);
		this.labels = input(...ngDevMode ? [void 0, { debugName: "labels" }] : 		/* istanbul ignore next */ []);
		this.legend = input(...ngDevMode ? [void 0, { debugName: "legend" }] : 		/* istanbul ignore next */ []);
		this.markers = input(...ngDevMode ? [void 0, { debugName: "markers" }] : 		/* istanbul ignore next */ []);
		this.noData = input(...ngDevMode ? [void 0, { debugName: "noData" }] : 		/* istanbul ignore next */ []);
		this.parsing = input(...ngDevMode ? [void 0, { debugName: "parsing" }] : 		/* istanbul ignore next */ []);
		this.fill = input(...ngDevMode ? [void 0, { debugName: "fill" }] : 		/* istanbul ignore next */ []);
		this.tooltip = input(...ngDevMode ? [void 0, { debugName: "tooltip" }] : 		/* istanbul ignore next */ []);
		this.plotOptions = input(...ngDevMode ? [void 0, { debugName: "plotOptions" }] : 		/* istanbul ignore next */ []);
		this.responsive = input(...ngDevMode ? [void 0, { debugName: "responsive" }] : 		/* istanbul ignore next */ []);
		this.xaxis = input(...ngDevMode ? [void 0, { debugName: "xaxis" }] : 		/* istanbul ignore next */ []);
		this.yaxis = input(...ngDevMode ? [void 0, { debugName: "yaxis" }] : 		/* istanbul ignore next */ []);
		this.forecastDataPoints = input(...ngDevMode ? [void 0, { debugName: "forecastDataPoints" }] : 		/* istanbul ignore next */ []);
		this.grid = input(...ngDevMode ? [void 0, { debugName: "grid" }] : 		/* istanbul ignore next */ []);
		this.states = input(...ngDevMode ? [void 0, { debugName: "states" }] : 		/* istanbul ignore next */ []);
		this.title = input(...ngDevMode ? [void 0, { debugName: "title" }] : 		/* istanbul ignore next */ []);
		this.subtitle = input(...ngDevMode ? [void 0, { debugName: "subtitle" }] : 		/* istanbul ignore next */ []);
		this.theme = input(...ngDevMode ? [void 0, { debugName: "theme" }] : 		/* istanbul ignore next */ []);
		this.autoUpdateSeries = input(true, ...ngDevMode ? [{ debugName: "autoUpdateSeries" }] : 		/* istanbul ignore next */ []);
		this.chartReady = output();
		this.chartInstance = signal(null, ...ngDevMode ? [{ debugName: "chartInstance" }] : 		/* istanbul ignore next */ []);
		this.chartElement = viewChild.required("chart", ...ngDevMode ? [{ debugName: "chartElement" }] : 		/* istanbul ignore next */ []);
		this.ngZone = inject(NgZone);
		this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
		this._destroyed = false;
		this._injector = inject(Injector);
		this.waitingForConnectedRef = null;
		/** Structural inputs as of the last completed `createElement()`. */
		this.appliedStructural = null;
		/** True while a `createElement()` pass is queued or in flight. */
		this.createScheduled = false;
		if (this.isBrowser) effect(() => {
			const structural = this.readStructuralInputs();
			const series = this.series();
			untracked(() => this.applyChanges(structural, series));
		});
	}
	ngOnDestroy() {
		this.destroy();
		this._destroyed = true;
	}
	/** Determine if the host element is connected to the document */
	get isConnected() {
		var _this$chartElement;
		return (_this$chartElement = this.chartElement()) === null || _this$chartElement === void 0 ? void 0 : _this$chartElement.nativeElement.isConnected;
	}
	/** Tracked read of every structural input. Must run inside a reactive context. */
	readStructuralInputs() {
		const snapshot = {};
		for (const key of STRUCTURAL_INPUTS) snapshot[key] = this[key]();
		return snapshot;
	}
	/**
	* Route an input change to either the cheap `updateSeries()` path or a full
	* re-create, mirroring what the chart currently has applied.
	*/
	applyChanges(structural, series) {
		if (!(!!series || STRUCTURAL_INPUTS.some((key) => structural[key]))) return;
		if (this.createScheduled || this.waitingForConnectedRef) return;
		if (this.chartInstance() !== null && this.autoUpdateSeries() && this.appliedStructural !== null && structuralEquals(this.appliedStructural, structural) && !!series) {
			this.updateSeries(series, true);
			return;
		}
		this.createScheduled = true;
		afterNextRender({ read: () => this.createElement() }, { injector: this._injector });
	}
	/** @internal Extracted to allow subclasses and tests to swap the ApexCharts bundle. */
	importApexCharts() {
		return import("./apexcharts.esm-CXUvZDZH.js");
	}
	createElement() {
		var _this = this;
		return _asyncToGenerator(function* () {
			var _window;
			const { default: ApexCharts } = yield _this.importApexCharts();
			(_window = window).ApexCharts || (_window.ApexCharts = ApexCharts);
			if (_this._destroyed) return;
			if (!_this.isConnected) {
				_this.waitForConnected();
				return;
			}
			const structural = untracked(() => _this.readStructuralInputs());
			const series = untracked(_this.series);
			const options = {};
			for (const key of STRUCTURAL_INPUTS) if (structural[key]) options[key] = structural[key];
			if (series) options.series = series;
			_this.appliedStructural = structural;
			_this.createScheduled = false;
			_this.destroy();
			const chartInstance = _this.ngZone.runOutsideAngular(() => new ApexCharts(_this.chartElement().nativeElement, options));
			_this.chartInstance.set(chartInstance);
			_this.render();
			_this.chartReady.emit({ chartObj: chartInstance });
		})();
	}
	render() {
		if (this.isConnected) return this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance;
			return (_this$chartInstance = this.chartInstance()) === null || _this$chartInstance === void 0 ? void 0 : _this$chartInstance.render();
		});
		else this.waitForConnected();
	}
	updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
		return this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance2;
			return (_this$chartInstance2 = this.chartInstance()) === null || _this$chartInstance2 === void 0 ? void 0 : _this$chartInstance2.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
		});
	}
	updateSeries(newSeries, animate) {
		return this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance3;
			return (_this$chartInstance3 = this.chartInstance()) === null || _this$chartInstance3 === void 0 ? void 0 : _this$chartInstance3.updateSeries(newSeries, animate);
		});
	}
	appendSeries(newSeries, animate) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance4;
			return (_this$chartInstance4 = this.chartInstance()) === null || _this$chartInstance4 === void 0 ? void 0 : _this$chartInstance4.appendSeries(newSeries, animate);
		});
	}
	appendData(newData) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance5;
			return (_this$chartInstance5 = this.chartInstance()) === null || _this$chartInstance5 === void 0 ? void 0 : _this$chartInstance5.appendData(newData);
		});
	}
	highlightSeries(seriesName) {
		return this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance6;
			return (_this$chartInstance6 = this.chartInstance()) === null || _this$chartInstance6 === void 0 ? void 0 : _this$chartInstance6.highlightSeries(seriesName);
		});
	}
	toggleSeries(seriesName) {
		return this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance7;
			return (_this$chartInstance7 = this.chartInstance()) === null || _this$chartInstance7 === void 0 ? void 0 : _this$chartInstance7.toggleSeries(seriesName);
		});
	}
	showSeries(seriesName) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance8;
			return (_this$chartInstance8 = this.chartInstance()) === null || _this$chartInstance8 === void 0 ? void 0 : _this$chartInstance8.showSeries(seriesName);
		});
	}
	hideSeries(seriesName) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance9;
			return (_this$chartInstance9 = this.chartInstance()) === null || _this$chartInstance9 === void 0 ? void 0 : _this$chartInstance9.hideSeries(seriesName);
		});
	}
	resetSeries() {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance10;
			return (_this$chartInstance10 = this.chartInstance()) === null || _this$chartInstance10 === void 0 ? void 0 : _this$chartInstance10.resetSeries();
		});
	}
	zoomX(min, max) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance11;
			return (_this$chartInstance11 = this.chartInstance()) === null || _this$chartInstance11 === void 0 ? void 0 : _this$chartInstance11.zoomX(min, max);
		});
	}
	toggleDataPointSelection(seriesIndex, dataPointIndex) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance12;
			return (_this$chartInstance12 = this.chartInstance()) === null || _this$chartInstance12 === void 0 ? void 0 : _this$chartInstance12.toggleDataPointSelection(seriesIndex, dataPointIndex);
		});
	}
	destroy() {
		var _this$chartInstance13;
		(_this$chartInstance13 = this.chartInstance()) === null || _this$chartInstance13 === void 0 || _this$chartInstance13.destroy();
		this.chartInstance.set(null);
	}
	setLocale(localeName) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance14;
			return (_this$chartInstance14 = this.chartInstance()) === null || _this$chartInstance14 === void 0 ? void 0 : _this$chartInstance14.setLocale(localeName);
		});
	}
	paper() {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance15;
			return (_this$chartInstance15 = this.chartInstance()) === null || _this$chartInstance15 === void 0 ? void 0 : _this$chartInstance15.paper();
		});
	}
	addXaxisAnnotation(options, pushToMemory, context) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance16;
			return (_this$chartInstance16 = this.chartInstance()) === null || _this$chartInstance16 === void 0 ? void 0 : _this$chartInstance16.addXaxisAnnotation(options, pushToMemory, context);
		});
	}
	addYaxisAnnotation(options, pushToMemory, context) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance17;
			return (_this$chartInstance17 = this.chartInstance()) === null || _this$chartInstance17 === void 0 ? void 0 : _this$chartInstance17.addYaxisAnnotation(options, pushToMemory, context);
		});
	}
	addPointAnnotation(options, pushToMemory, context) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance18;
			return (_this$chartInstance18 = this.chartInstance()) === null || _this$chartInstance18 === void 0 ? void 0 : _this$chartInstance18.addPointAnnotation(options, pushToMemory, context);
		});
	}
	removeAnnotation(id, options) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance19;
			return (_this$chartInstance19 = this.chartInstance()) === null || _this$chartInstance19 === void 0 ? void 0 : _this$chartInstance19.removeAnnotation(id, options);
		});
	}
	clearAnnotations(options) {
		this.ngZone.runOutsideAngular(() => {
			var _this$chartInstance20;
			return (_this$chartInstance20 = this.chartInstance()) === null || _this$chartInstance20 === void 0 ? void 0 : _this$chartInstance20.clearAnnotations(options);
		});
	}
	dataURI(options) {
		var _this$chartInstance21;
		return (_this$chartInstance21 = this.chartInstance()) === null || _this$chartInstance21 === void 0 ? void 0 : _this$chartInstance21.dataURI(options);
	}
	waitForConnected() {
		if (this.waitingForConnectedRef) return;
		this.waitingForConnectedRef = afterEveryRender({ read: () => {
			if (this.isConnected) {
				var _this$waitingForConne;
				(_this$waitingForConne = this.waitingForConnectedRef) === null || _this$waitingForConne === void 0 || _this$waitingForConne.destroy();
				this.waitingForConnectedRef = null;
				this.createElement();
			}
		} }, { injector: this._injector });
	}
};
_ChartComponent = ChartComponent;
_ChartComponent.ɵfac = function ChartComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ChartComponent)();
};
_ChartComponent.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _ChartComponent,
	selectors: [["apx-chart"]],
	viewQuery: function ChartComponent_Query(rf, ctx) {
		if (rf & 1) ɵɵviewQuerySignal(ctx.chartElement, _c0, 5);
		if (rf & 2) ɵɵqueryAdvance();
	},
	inputs: {
		chart: [1, "chart"],
		annotations: [1, "annotations"],
		colors: [1, "colors"],
		dataLabels: [1, "dataLabels"],
		series: [1, "series"],
		stroke: [1, "stroke"],
		labels: [1, "labels"],
		legend: [1, "legend"],
		markers: [1, "markers"],
		noData: [1, "noData"],
		parsing: [1, "parsing"],
		fill: [1, "fill"],
		tooltip: [1, "tooltip"],
		plotOptions: [1, "plotOptions"],
		responsive: [1, "responsive"],
		xaxis: [1, "xaxis"],
		yaxis: [1, "yaxis"],
		forecastDataPoints: [1, "forecastDataPoints"],
		grid: [1, "grid"],
		states: [1, "states"],
		title: [1, "title"],
		subtitle: [1, "subtitle"],
		theme: [1, "theme"],
		autoUpdateSeries: [1, "autoUpdateSeries"]
	},
	outputs: { chartReady: "chartReady" },
	decls: 2,
	vars: 0,
	consts: [["chart", ""]],
	template: function ChartComponent_Template(rf, ctx) {
		if (rf & 1) ɵɵdomElement(0, "div", null, 0);
	},
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartComponent, [{
		type: Component,
		args: [{
			selector: "apx-chart",
			template: `<div #chart></div>`,
			changeDetection: ChangeDetectionStrategy.OnPush,
			standalone: true
		}]
	}], () => [], {
		chart: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "chart",
				required: false
			}]
		}],
		annotations: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "annotations",
				required: false
			}]
		}],
		colors: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "colors",
				required: false
			}]
		}],
		dataLabels: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "dataLabels",
				required: false
			}]
		}],
		series: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "series",
				required: false
			}]
		}],
		stroke: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "stroke",
				required: false
			}]
		}],
		labels: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "labels",
				required: false
			}]
		}],
		legend: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "legend",
				required: false
			}]
		}],
		markers: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "markers",
				required: false
			}]
		}],
		noData: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "noData",
				required: false
			}]
		}],
		parsing: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "parsing",
				required: false
			}]
		}],
		fill: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fill",
				required: false
			}]
		}],
		tooltip: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "tooltip",
				required: false
			}]
		}],
		plotOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "plotOptions",
				required: false
			}]
		}],
		responsive: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "responsive",
				required: false
			}]
		}],
		xaxis: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "xaxis",
				required: false
			}]
		}],
		yaxis: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "yaxis",
				required: false
			}]
		}],
		forecastDataPoints: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "forecastDataPoints",
				required: false
			}]
		}],
		grid: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "grid",
				required: false
			}]
		}],
		states: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "states",
				required: false
			}]
		}],
		title: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "title",
				required: false
			}]
		}],
		subtitle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "subtitle",
				required: false
			}]
		}],
		theme: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "theme",
				required: false
			}]
		}],
		autoUpdateSeries: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autoUpdateSeries",
				required: false
			}]
		}],
		chartReady: [{
			type: Output,
			args: ["chartReady"]
		}],
		chartElement: [{
			type: ViewChild,
			args: ["chart", { isSignal: true }]
		}]
	});
})();
/**
* Tree-shakeable variant of `<apx-chart>`.
*
* Loads `apexcharts/core` (~611 KB) instead of the full `apexcharts/client`
* bundle (~942 KB). To register chart types and features, add side-effect
* imports **before** this component is rendered, typically in `app.config.ts`
* or at the top of the component that bootstraps the charts:
*
* ```ts
* import "apexcharts/line";              // line, area, scatter, bubble
* import "apexcharts/bar";               // bar, column, rangeBar
* import "apexcharts/features/legend";   // opt-in legend
* import "apexcharts/features/toolbar";  // opt-in toolbar
* ```
*
* All inputs/outputs/methods are identical to `<apx-chart>`.
*/
var ChartCoreComponent = class extends ChartComponent {
	importApexCharts() {
		return import("./core.esm-ke7vvSey.js");
	}
};
_ChartCoreComponent = ChartCoreComponent;
_ChartCoreComponent.ɵfac = /* @__PURE__ */ (() => {
	let ɵChartCoreComponent_BaseFactory;
	return function ChartCoreComponent_Factory(__ngFactoryType__) {
		return (ɵChartCoreComponent_BaseFactory || (ɵChartCoreComponent_BaseFactory = ɵɵgetInheritedFactory(_ChartCoreComponent)))(__ngFactoryType__ || _ChartCoreComponent);
	};
})();
_ChartCoreComponent.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _ChartCoreComponent,
	selectors: [["apx-chart-core"]],
	features: [ɵɵInheritDefinitionFeature],
	decls: 2,
	vars: 0,
	consts: [["chart", ""]],
	template: function ChartCoreComponent_Template(rf, ctx) {
		if (rf & 1) ɵɵdomElement(0, "div", null, 0);
	},
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartCoreComponent, [{
		type: Component,
		args: [{
			selector: "apx-chart-core",
			template: `<div #chart></div>`,
			changeDetection: ChangeDetectionStrategy.OnPush,
			standalone: true
		}]
	}], null, null);
})();
var ChartSSRService = class {
	constructor() {
		/** Per-app-instance counter for stable TransferState keys. Resets on each server bootstrap. */
		this.instanceCounter = 0;
	}
	nextInstanceId() {
		return this.instanceCounter++;
	}
	/** @internal Extracted to allow spying in unit tests without importing actual SSR bundle. */
	importSSRModule() {
		return import("./apexcharts.ssr.esm-B-O3HcaN.js");
	}
	renderToHTML(_x) {
		var _this2 = this;
		return _asyncToGenerator(function* (options, ssrOptions = {}) {
			const { default: ApexCharts } = yield _this2.importSSRModule();
			return ApexCharts.renderToHTML(options, ssrOptions);
		}).apply(this, arguments);
	}
	renderToString(_x2) {
		var _this3 = this;
		return _asyncToGenerator(function* (options, ssrOptions = {}) {
			const { default: ApexCharts } = yield _this3.importSSRModule();
			return ApexCharts.renderToString(options, ssrOptions);
		}).apply(this, arguments);
	}
};
_ChartSSRService = ChartSSRService;
_ChartSSRService.ɵfac = function ChartSSRService_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ChartSSRService)();
};
_ChartSSRService.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _ChartSSRService,
	factory: _ChartSSRService.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartSSRService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
/**
* Server-side rendering component for ApexCharts.
*
* On the server: renders SVG imperatively into the host element, stores HTML in TransferState.
* On the client: ngSkipHydration tells Angular to leave the host DOM alone.
* afterNextRender then injects the HTML from TransferState into the host imperatively
* (as a fallback if ngSkipHydration stripped the content, which it does with empty templates).
* ChartHydrateComponent also uses afterNextRender so it runs after this, guaranteeing
* [data-apexcharts-hydrate] is present when Pattern B calls hydrate().
*
* @example
* <apx-chart-ssr [options]="chartOptions" [width]="500" [height]="300" />
*/
var ChartSSRComponent = class {
	constructor() {
		this.options = input.required(...ngDevMode ? [{ debugName: "options" }] : 		/* istanbul ignore next */ []);
		this.width = input(400, ...ngDevMode ? [{ debugName: "width" }] : 		/* istanbul ignore next */ []);
		this.height = input(300, ...ngDevMode ? [{ debugName: "height" }] : 		/* istanbul ignore next */ []);
		this.chartSSRService = inject(ChartSSRService);
		this.pendingTasks = inject(PendingTasks);
		this.el = inject(ElementRef);
		this.transferState = inject(TransferState);
		this.stateKey = makeStateKey(`apx-chart-ssr-${this.chartSSRService.nextInstanceId()}`);
		this.isServer = isPlatformServer(inject(PLATFORM_ID));
		if (!this.isServer) afterNextRender(() => {
			const host = this.el.nativeElement;
			const html = this.transferState.get(this.stateKey, "");
			this.transferState.remove(this.stateKey);
			if (html) {
				const { svgOuter, config } = JSON.parse(html);
				const svgDoc = new DOMParser().parseFromString(svgOuter, "image/svg+xml");
				const svgEl = document.importNode(svgDoc.documentElement, true);
				const wrapper = document.createElement("div");
				wrapper.className = "apexcharts-ssr-wrapper";
				wrapper.setAttribute("data-apexcharts-hydrate", "");
				if (config) wrapper.setAttribute("data-apexcharts-config", config);
				wrapper.appendChild(svgEl);
				host.innerHTML = "";
				host.appendChild(wrapper);
			}
		});
	}
	ngOnInit() {
		var _this4 = this;
		return _asyncToGenerator(function* () {
			if (!_this4.isServer) return;
			const done = _this4.pendingTasks.add();
			const ssrOptions = {
				width: _this4.width(),
				height: _this4.height()
			};
			try {
				var _configMatch$;
				const [html, svgOuter] = yield Promise.all([_this4.chartSSRService.renderToHTML(_this4.options(), ssrOptions), _this4.chartSSRService.renderToString(_this4.options(), ssrOptions)]);
				const configMatch = html.match(/data-apexcharts-config="([^"]*)"/);
				const config = (_configMatch$ = configMatch === null || configMatch === void 0 ? void 0 : configMatch[1]) !== null && _configMatch$ !== void 0 ? _configMatch$ : "";
				_this4.transferState.set(_this4.stateKey, JSON.stringify({
					svgOuter,
					config
				}));
				_this4.el.nativeElement.innerHTML = html;
			} finally {
				done();
			}
		})();
	}
};
_ChartSSRComponent = ChartSSRComponent;
_ChartSSRComponent.ɵfac = function ChartSSRComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ChartSSRComponent)();
};
_ChartSSRComponent.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _ChartSSRComponent,
	selectors: [["apx-chart-ssr"]],
	hostAttrs: ["ngSkipHydration", "true"],
	inputs: {
		options: [1, "options"],
		width: [1, "width"],
		height: [1, "height"]
	},
	decls: 0,
	vars: 0,
	template: function ChartSSRComponent_Template(rf, ctx) {},
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartSSRComponent, [{
		type: Component,
		args: [{
			selector: "apx-chart-ssr",
			template: ``,
			standalone: true,
			host: { ngSkipHydration: "true" }
		}]
	}], () => [], {
		options: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "options",
				required: true
			}]
		}],
		width: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "width",
				required: false
			}]
		}],
		height: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "height",
				required: false
			}]
		}]
	});
})();
/**
* Client-side hydration component for ApexCharts SSR output.
*
* Must be placed immediately after `<apx-chart-ssr>` in the DOM. It finds
* the server-rendered `[data-apexcharts-hydrate]` element in the preceding
* `<apx-chart-ssr>` sibling and calls `ApexCharts.hydrate()` on it to
* attach full interactivity (animations, tooltips, zoom, etc.).
*
* Uses afterNextRender so it runs after ChartSSRComponent has injected the
* server HTML into the DOM (which also happens in afterNextRender).
*
* On the server this component does nothing.
*
* @example
* <apx-chart-ssr [options]="chartOptions" />
* <apx-chart-hydrate [clientOptions]="{ chart: { animations: { enabled: true } } }" />
*/
var ChartHydrateComponent = class {
	constructor() {
		this.clientOptions = input({}, ...ngDevMode ? [{ debugName: "clientOptions" }] : 		/* istanbul ignore next */ []);
		this.el = inject(ElementRef);
		this.ngZone = inject(NgZone);
		this.injector = inject(Injector);
		this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
		this.chartObj = null;
	}
	ngOnInit() {
		var _this5 = this;
		if (!this.isBrowser) return;
		runInInjectionContext(this.injector, () => afterNextRender(_asyncToGenerator(function* () {
			var _host$parentElement;
			const ssrEl = (_host$parentElement = _this5.el.nativeElement.parentElement) === null || _host$parentElement === void 0 ? void 0 : _host$parentElement.querySelector("[data-apexcharts-hydrate]");
			if (!ssrEl) {
				console.warn("[ng-apexcharts] ChartHydrateComponent: No [data-apexcharts-hydrate] element found. Ensure <apx-chart-ssr> precedes <apx-chart-hydrate> in the same container.");
				return;
			}
			const { default: ApexCharts } = yield _this5.importClientModule();
			try {
				_this5.chartObj = _this5.ngZone.runOutsideAngular(() => ApexCharts.hydrate(ssrEl, _this5.clientOptions()));
			} catch (error) {
				console.error("[ng-apexcharts] ChartHydrateComponent: Failed to hydrate chart.", error);
			}
		})));
	}
	/** @internal Extracted to allow spying in unit tests without importing actual SSR/hydrate bundle. */
	importClientModule() {
		return import("./apexcharts.ssr.esm-B-O3HcaN.js");
	}
	ngOnDestroy() {
		var _this$chartObj;
		(_this$chartObj = this.chartObj) === null || _this$chartObj === void 0 || _this$chartObj.destroy();
		this.chartObj = null;
	}
};
_ChartHydrateComponent = ChartHydrateComponent;
_ChartHydrateComponent.ɵfac = function ChartHydrateComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ChartHydrateComponent)();
};
_ChartHydrateComponent.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _ChartHydrateComponent,
	selectors: [["apx-chart-hydrate"]],
	inputs: { clientOptions: [1, "clientOptions"] },
	decls: 0,
	vars: 0,
	template: function ChartHydrateComponent_Template(rf, ctx) {},
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartHydrateComponent, [{
		type: Component,
		args: [{
			selector: "apx-chart-hydrate",
			template: ``,
			standalone: true
		}]
	}], null, { clientOptions: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "clientOptions",
			required: false
		}]
	}] });
})();
var declarations = [
	ChartComponent,
	ChartCoreComponent,
	ChartSSRComponent,
	ChartHydrateComponent
];
var NgApexchartsModule = class {};
_NgApexchartsModule = NgApexchartsModule;
_NgApexchartsModule.ɵfac = function NgApexchartsModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgApexchartsModule)();
};
_NgApexchartsModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgApexchartsModule,
	imports: [
		ChartComponent,
		ChartCoreComponent,
		ChartSSRComponent,
		ChartHydrateComponent
	],
	exports: [
		ChartComponent,
		ChartCoreComponent,
		ChartSSRComponent,
		ChartHydrateComponent
	]
});
_NgApexchartsModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgApexchartsModule, [{
		type: NgModule,
		args: [{
			imports: [declarations],
			exports: [declarations]
		}]
	}], null, null);
})();
//#endregion
export { ChartComponent, ChartCoreComponent, ChartHydrateComponent, ChartSSRComponent, ChartSSRService, NgApexchartsModule };
