import { t as _objectSpread2 } from "./objectSpread2-C_IE-bIJ.js";
import { F as createFormatter, Gt as formatIsoMonthStr, Jt as intersectRanges, Yt as joinDateTimeFormatParts, k as computeViewBorderless, kt as classNames, zt as createDuration } from "./56f74c4a-SfSX7ugV.js";
import { n as joinClassNames, t as fracToCssDim } from "./69261bb4-BJPZADnq.js";
import { D as getIsHeightAuto, F as watchHeight, P as setRef, _ as afterSize, c as NowTimer, f as Scroller, j as memoize, m as ViewContainer, o as DateComponent, w as generateClassName, y as buildNavLinkAttrs } from "./ad0c00be-Daaskk5y.js";
import { c as k, i as M, t as u } from "./jsxRuntime.module-YK1HYA-V.js";
import { S as createDayHeaderFormatter, d as RefMap, f as Ruler, g as buildDateRowConfig, i as DayGridHeaderRow, l as DayTableSlicer, n as buildDayTableRenderRange, o as DayGridRows, t as TableDateProfileGenerator, v as buildDayTableModel } from "./731d9182-DytjwMdV.js";
//#region node_modules/fullcalendar/chunks/33fabdad.js
var SingleMonth = class extends DateComponent {
	constructor() {
		super(...arguments);
		this.state = {};
		this.buildDayTableModel = memoize(buildDayTableModel);
		this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
		this.buildDateRowConfig = memoize(buildDateRowConfig);
		this.titleElRef = M();
		this.tableHeaderElRef = M();
		this.rowHeightRefMap = new RefMap(() => {
			afterSize(this.handleHeights);
		});
		this.slicer = new DayTableSlicer();
		this.handleEl = (el) => {
			const { options } = this.context;
			if (el) {
				var _options$singleMonthD;
				this.rootEl = el;
				(_options$singleMonthD = options.singleMonthDidMount) === null || _options$singleMonthD === void 0 || _options$singleMonthD.call(options, _objectSpread2({ el: this.rootEl }, this.renderProps));
			}
		};
		this.handleGridWidth = (gridWidth) => {
			if (this._isUnmounting) return;
			this.setState({ gridWidth });
		};
		this.handleHeights = () => {
			if (this._isUnmounting) return;
			setRef(this.props.heightsRef, {
				titleHeight: this.titleHeight,
				tableHeaderHeight: this.tableHeaderHeight,
				rowHeightMap: this.rowHeightRefMap.current,
				cellRows: this.cellRows
			});
		};
	}
	get titleId() {
		return this.context.baseId + "month-" + this.props.isoDateStr;
	}
	render() {
		const { props, state, context } = this;
		const { dateProfile, forPrint } = props;
		const { options, dateEnv } = context;
		const { borderlessX, borderlessTop, borderlessBottom } = computeViewBorderless(options);
		const dayTableModel = this.buildDayTableModel(dateProfile, context.dateProfileGenerator, dateEnv);
		const slicedProps = this.slicer.sliceProps(props, dateProfile, options.nextDayThreshold, context, dayTableModel);
		const dayHeaderFormat = this.createDayHeaderFormatter(options.dayHeaderFormat, false, dayTableModel.colCount);
		const rowConfig = this.buildDateRowConfig(dayTableModel.headerDates, false, dateProfile, props.todayRange, dayHeaderFormat, context);
		this.cellRows = dayTableModel.cellRows;
		const isTitleAndHeaderSticky = !forPrint && props.colCount === 1;
		const isAspectRatio = !forPrint || props.hasLateralSiblings;
		const cellColCnt = dayTableModel.cellRows[0].length;
		const colWidth = state.gridWidth != null ? state.gridWidth / cellColCnt : void 0;
		const cellIsMicro = colWidth != null && colWidth <= 60;
		const cellIsNarrow = cellIsMicro || colWidth != null && colWidth <= options.dayNarrowWidth;
		const rowHeightGuess = state.gridWidth != null ? 1 / options.aspectRatio * state.gridWidth / 6 : void 0;
		const headerStickyBottom = isTitleAndHeaderSticky ? rowHeightGuess : void 0;
		const titleStickyBottom = isTitleAndHeaderSticky && rowHeightGuess != null && state.tableHeaderHeight != null ? rowHeightGuess + state.tableHeaderHeight + 1 : void 0;
		const businessHourSegs = forPrint ? [] : slicedProps.businessHourSegs;
		const dateSelectionSegs = forPrint ? [] : slicedProps.dateSelectionSegs;
		const eventDrag = forPrint ? null : slicedProps.eventDrag;
		const eventResize = forPrint ? null : slicedProps.eventResize;
		const hasNavLink = options.navLinks && props.colCount > 1;
		const headerRenderProps = {
			multiMonthColumns: props.colCount || 0,
			isSticky: isTitleAndHeaderSticky,
			isNarrow: cellIsNarrow,
			hasNavLink
		};
		const monthStartDate = props.dateProfile.currentRange.start;
		const navLinkAttrs = hasNavLink ? buildNavLinkAttrs(context, monthStartDate, "month", props.isoDateStr) : {};
		return u("div", {
			role: "listitem",
			style: { width: props.width },
			children: u("div", {
				role: "grid",
				"aria-labelledby": this.titleId,
				"data-date": props.isoDateStr,
				className: joinClassNames(generateClassName(options.singleMonthClass, {
					isFirst: props.isFirst,
					isLast: props.isLast,
					multiMonthColumns: props.colCount || 0
				}), classNames.flexCol, props.hasLateralSiblings && classNames.breakInsideAvoid),
				children: [
					u(Ruler, { widthRef: this.handleGridWidth }),
					u("div", {
						id: this.titleId,
						ref: this.titleElRef,
						className: joinClassNames(generateClassName(options.singleMonthHeaderClass, headerRenderProps), isTitleAndHeaderSticky && classNames.stickyT, classNames.flexCol),
						style: {
							zIndex: isTitleAndHeaderSticky ? 3 : void 0,
							marginBottom: titleStickyBottom
						},
						children: u("div", _objectSpread2(_objectSpread2({}, navLinkAttrs), {}, {
							className: joinClassNames(generateClassName(options.singleMonthHeaderInnerClass, headerRenderProps), navLinkAttrs.className),
							children: joinDateTimeFormatParts(dateEnv.formatToParts(monthStartDate, props.titleFormat))
						}))
					}),
					u("div", {
						className: joinClassNames(generateClassName(options.tableClass, {
							borderlessX,
							borderlessTop,
							borderlessBottom,
							multiMonthColumns: props.colCount || 0
						}), classNames.flexCol),
						style: { marginTop: titleStickyBottom != null ? -titleStickyBottom : void 0 },
						children: [u("div", {
							ref: this.tableHeaderElRef,
							className: joinClassNames(generateClassName(options.tableHeaderClass, {
								isSticky: isTitleAndHeaderSticky,
								borderlessX,
								borderlessTop,
								borderlessBottom,
								multiMonthColumns: props.colCount || 0
							}), classNames.flexCol, isTitleAndHeaderSticky && classNames.sticky),
							style: {
								zIndex: isTitleAndHeaderSticky ? 2 : void 0,
								top: isTitleAndHeaderSticky ? state.titleHeight : 0,
								marginBottom: headerStickyBottom
							},
							children: [u(DayGridHeaderRow, _objectSpread2(_objectSpread2({}, rowConfig), {}, {
								role: "row",
								borderBottom: false,
								cellIsNarrow,
								cellIsMicro,
								rowLevel: 0
							})), u("div", { className: generateClassName(options.dayHeaderDividerClass, {
								isSticky: isTitleAndHeaderSticky,
								multiMonthColumns: props.colCount || 0,
								options: { allDaySlot: Boolean(options.allDaySlot) }
							}) })]
						}), u("div", {
							className: joinClassNames(generateClassName(options.tableBodyClass, {
								borderlessX,
								borderlessTop,
								borderlessBottom,
								multiMonthColumns: props.colCount || 0
							}), classNames.flexCol, isAspectRatio && classNames.rel),
							style: {
								zIndex: isTitleAndHeaderSticky ? 1 : void 0,
								marginTop: headerStickyBottom != null ? -headerStickyBottom : void 0,
								aspectRatio: isAspectRatio ? String(options.aspectRatio) : void 0
							},
							children: u(DayGridRows, {
								dateProfile: props.dateProfile,
								todayRange: props.todayRange,
								cellRows: dayTableModel.cellRows,
								className: isAspectRatio ? classNames.fill : "",
								forPrint: forPrint && !props.hasLateralSiblings,
								dayMaxEventRows: forPrint && props.hasLateralSiblings ? 1 : true,
								fgEventSegs: slicedProps.fgEventSegs,
								bgEventSegs: slicedProps.bgEventSegs,
								businessHourSegs,
								dateSelectionSegs,
								eventDrag,
								eventResize,
								eventSelection: slicedProps.eventSelection,
								visibleWidth: state.gridWidth,
								cellIsNarrow,
								cellIsMicro,
								rowHeightRefMap: this.rowHeightRefMap
							})
						})]
					})
				]
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = false;
		this.disconnectTitleHeight = watchHeight(this.titleElRef.current, (height) => {
			this.setState({ titleHeight: this.titleHeight = height });
			afterSize(this.handleHeights);
		});
		this.disconnectTableHeaderHeight = watchHeight(this.tableHeaderElRef.current, (height) => {
			this.setState({ tableHeaderHeight: this.tableHeaderHeight = height });
			afterSize(this.handleHeights);
		});
	}
	componentWillUnmount() {
		var _options$singleMonthW;
		const { options } = this.context;
		this._isUnmounting = true;
		this.disconnectTitleHeight();
		this.disconnectTableHeaderHeight();
		(_options$singleMonthW = options.singleMonthWillUnmount) === null || _options$singleMonthW === void 0 || _options$singleMonthW.call(options, _objectSpread2({ el: this.rootEl }, this.renderProps));
	}
};
var MultiMonthView = class extends DateComponent {
	constructor() {
		super(...arguments);
		this.state = {};
		this.splitDateProfileByMonth = memoize(splitDateProfileByMonth);
		this.buildMonthFormat = memoize(buildMonthFormat);
		this.scrollerRef = M();
		this.tilesElRef = M();
		this.scrollState = {};
		this.handleInnerWidth = (innerWidth) => {
			if (this._isUnmounting) return;
			this.setState({ innerWidth });
		};
		this.handleScrollStart = () => {
			this.scrollState.date = void 0;
			this.scrollState.top = void 0;
		};
		this.handleScrollEnd = (isDevice) => {
			const scroller = this.scrollerRef.current;
			if (isDevice && scroller) {
				this.scrollState.top = scroller.y;
				this.scrollState.date = void 0;
			}
		};
	}
	render() {
		const { context, props, state } = this;
		const { options } = context;
		const verticalScrolling = !props.forPrint && !getIsHeightAuto(options);
		const monthDateProfiles = this.splitDateProfileByMonth(context.dateProfileGenerator, props.dateProfile, context.dateEnv, options.fixedWeekCount, options.showNonCurrentDates);
		const monthTitleFormat = this.buildMonthFormat(options.singleMonthTitleFormat, monthDateProfiles);
		const { multiMonthMaxColumns, singleMonthMinWidth } = options;
		const { innerWidth } = state;
		let cols;
		let cssMonthWidth;
		let hasLateralSiblings = false;
		if (innerWidth != null) {
			cols = Math.max(1, Math.min(multiMonthMaxColumns, Math.floor(innerWidth / singleMonthMinWidth)));
			if (props.forPrint) cols = Math.min(cols, 2);
			cssMonthWidth = fracToCssDim(1 / cols);
			hasLateralSiblings = cols > 1;
		}
		return u(NowTimer, {
			unit: "day",
			children: (nowDate, todayRange) => u(ViewContainer, {
				viewSpec: context.viewSpec,
				className: joinClassNames(!props.forPrint && classNames.flexCol, props.className),
				children: [u(Scroller, {
					vertical: verticalScrolling,
					className: verticalScrolling ? classNames.liquid : "",
					ref: this.scrollerRef,
					children: u("div", {
						role: "list",
						ref: this.tilesElRef,
						"aria-labelledby": props.labelId,
						"aria-label": props.labelStr,
						className: classNames.safeTiles,
						children: monthDateProfiles.map((monthDateProfile, i) => {
							const monthStr = formatIsoMonthStr(monthDateProfile.currentRange.start);
							return k(SingleMonth, _objectSpread2(_objectSpread2({}, props), {}, {
								key: monthStr,
								todayRange,
								isoDateStr: monthStr,
								titleFormat: monthTitleFormat,
								dateProfile: monthDateProfile,
								width: cssMonthWidth,
								colCount: cols,
								isFirst: !i,
								isLast: i === monthDateProfiles.length - 1,
								hasLateralSiblings
							}));
						})
					})
				}), u(Ruler, { widthRef: this.handleInnerWidth })]
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = false;
		this.scrollState.date = this.props.dateProfile.currentDate;
		this.scrollerRef.current.addScrollStartListener(this.handleScrollStart);
		this.scrollerRef.current.addScrollEndListener(this.handleScrollEnd);
		setTimeout(() => {
			this.applyScroll();
		}, 0);
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.dateProfile !== this.props.dateProfile) if (this.context.options.scrollTimeReset) this.resetScroll();
		else this.applyScroll();
		else if (prevState.innerWidth !== this.state.innerWidth) this.applyScroll();
	}
	componentWillUnmount() {
		this._isUnmounting = true;
		this.scrollerRef.current.removeScrollStartListener(this.handleScrollStart);
		this.scrollerRef.current.removeScrollEndListener(this.handleScrollEnd);
	}
	resetScroll() {
		this.scrollState.date = this.props.dateProfile.currentDate;
		this.scrollState.top = void 0;
		this.applyScroll();
	}
	applyScroll() {
		const scroller = this.scrollerRef.current;
		const top = this.computeScrollTop();
		if (scroller && top != null) scroller.scrollTo({ y: top });
	}
	computeScrollTop() {
		const { scrollState } = this;
		if (scrollState.top != null) return scrollState.top;
		if (scrollState.date != null) {
			const tilesEl = this.tilesElRef.current;
			const monthEl = tilesEl === null || tilesEl === void 0 ? void 0 : tilesEl.querySelector(`[data-date="${formatIsoMonthStr(scrollState.date)}"]`);
			const monthWrapEl = monthEl === null || monthEl === void 0 ? void 0 : monthEl.parentElement;
			if (tilesEl && monthWrapEl) return Math.round(monthWrapEl.getBoundingClientRect().top) - Math.round(tilesEl.getBoundingClientRect().top);
		}
	}
};
var oneMonthDuration = createDuration(1, "month");
function splitDateProfileByMonth(dateProfileGenerator, dateProfile, dateEnv, fixedWeekCount, showNonCurrentDates) {
	const { start, end } = dateProfile.currentRange;
	let monthStart = start;
	const monthDateProfiles = [];
	while (monthStart.valueOf() < end.valueOf()) {
		const monthEnd = dateEnv.add(monthStart, oneMonthDuration);
		const currentRange = {
			start: dateProfileGenerator.skipHiddenDays(monthStart),
			end: dateProfileGenerator.skipHiddenDays(monthEnd, -1, true)
		};
		let renderRange = buildDayTableRenderRange({
			currentRange,
			snapToWeek: true,
			fixedWeekCount,
			dateEnv
		});
		renderRange = {
			start: dateProfileGenerator.skipHiddenDays(renderRange.start),
			end: dateProfileGenerator.skipHiddenDays(renderRange.end, -1, true)
		};
		const activeRange = dateProfile.activeRange ? intersectRanges(dateProfile.activeRange, showNonCurrentDates ? renderRange : currentRange) : null;
		monthDateProfiles.push({
			currentDate: dateProfile.currentDate,
			isValid: dateProfile.isValid,
			validRange: dateProfile.validRange,
			renderRange,
			activeRange,
			currentRange,
			currentRangeUnit: "month",
			isRangeAllDay: true,
			dateIncrement: dateProfile.dateIncrement,
			slotMinTime: dateProfile.slotMaxTime,
			slotMaxTime: dateProfile.slotMinTime
		});
		monthStart = monthEnd;
	}
	return monthDateProfiles;
}
var YEAR_MONTH_FORMATTER = createFormatter({
	year: "numeric",
	month: "long"
});
var YEAR_FORMATTER = createFormatter({ month: "long" });
function buildMonthFormat(formatOverride, monthDateProfiles) {
	return formatOverride || (monthDateProfiles[0].currentRange.start.getUTCFullYear() !== monthDateProfiles[monthDateProfiles.length - 1].currentRange.start.getUTCFullYear() ? YEAR_MONTH_FORMATTER : YEAR_FORMATTER);
}
var multiMonthPlugin = {
	name: "multimonth",
	initialView: "multiMonthYear",
	views: {
		multiMonth: {
			component: MultiMonthView,
			dateProfileGeneratorClass: TableDateProfileGenerator,
			multiMonthMaxColumns: 3,
			singleMonthMinWidth: 350
		},
		multiMonthYear: {
			type: "multiMonth",
			duration: { years: 1 },
			fixedWeekCount: true,
			showNonCurrentDates: false
		}
	}
};
//#endregion
export { multiMonthPlugin as default };
