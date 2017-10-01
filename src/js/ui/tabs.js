import Wallop from 'wallop'
import { mergeOptions, slugify, transitionSteps } from '@/utils/helpers'
import { DomClass } from '@/utils/dom'
import Delegate from 'dom-delegate'
import fromTo from 'mud-from-to'

/**
 * 
 * @class tabs
 * @extends  Wallop
 * @param  {HTMLElement} el : the form to validate
 * @param  {Object} options : tabs options, Standard Wallop options plus some extra
 * 									pagerWrapper: String // html string used to contain the pager elements
 * 									pagerItem: String // html string used to for each pager button
 * 									pagerActiveClass: String // class applied to the current pager
 * 									name: String // name used for accessibility props
 * 									delay: Number // when using loop this is the time between transitions
 * 									swipe: Boolean // add gestures
 * 									init: Boolean // initalize the tabs
 * 									pager: Boolean // adds pager html
 */
export default class Tabs extends Wallop {
	/**
	 * 
	 * @function constructor
	 * @param  {HTMLElement} el : the form to validate
	 * @param  {Object} options : tabs options
	 * @return tabs
	 */
	constructor(element, options) {
		const defaults = {
			buttonPreviousClass: 'c-tabs__prev',
			buttonNextClass: 'c-tabs__next',
			itemClass: 'c-tabs__item',
			currentItemClass: 'c-tabs__item--current',
			showPreviousClass: 'c-tabs__item--showPrevious',
			showNextClass: 'c-tabs__item--showNext',
			hidePreviousClass: 'c-tabs__item--hidePrevious',
			hideNextClass: 'c-tabs__item--hideNext',
			wrapper: 'c-tabs__list',
			carousel: true,
			pagerActiveClass: 'is-current',
			selector: '[data-tab-pager]',
			animate: true,
			trackHistory: true,
			init: true
		}

		const opts = mergeOptions(defaults, options, element, 'tabsOptions')

		super(element, opts)

		this.delegate = new Delegate(element)
		this.options = opts
		this.$el = element
		this.$tabs = [...element.querySelectorAll(`.${opts.itemClass}`)]
		this.$wrapper = element.querySelector(`.${opts.wrapper}`)
		this.previousIndex = this.currentItemIndex
		opts.init && this.initialize()
		this.hashes = []
	}

	/**
		 * Bind event listeners
		 *
		 * @function addEvents
		 * @return {Tabs}
		 */
	addEvents = () => {
		const { selector } = this.options
		this.delegate.on('click', selector, this.clickHandle)

		return this
	}

	/**
		 * Initialize all the things
		 *
		 * @function initialize
		 * @return {Tabs}
		 */
	initialize = () => {
		this.setupPanels()
		this.addEvents()
		const { hash } = window.location

		if (hash) {
			const tab = this.getTab(hash.split('#')[1])
			tab && this.goTo(tab.index)
		}

		this.listen()

		return this
	}

	/**
		 * Listen to tab changes
		 * @function listen
		 * @return void
		 */
	listen() {
		this.on('change', this.onChange)
	}

	setupPanels = () => {
		this.tabs = this.$tabs.map(($tab, index) => {
			const id = $tab.getAttribute('id')
			const { tabTitle } = $tab.dataset
			const $btn = this.$el.querySelector(`[href="#${id}"]`)

			return {
				$tab,
				$btn,
				id,
				index,
				title: slugify(tabTitle),
				hash: `#${id}`
			}
		})
	}

	clickHandle = (e, elm) => {
		e.preventDefault()
		const { pagerActiveClass } = this.options

		if (elm.classList.contains(pagerActiveClass)) return

		const { animate } = this.options
		const { index, title, $tab } = this.tabs.find(
			({ hash }) => elm.getAttribute('href') === hash
		)

		if (!animate) {
			this.goToTab(index).updateHistory(title)

			return
		}

		const $prevTab = this.tabs[this.previousIndex].$tab
		transitionSteps($prevTab, { opacity: 0 }).then(() => {
			fromTo(
				{
					start: $prevTab.clientHeight,
					end: $tab.clientHeight,
					duration: 300
				},
				v => (this.$wrapper.style.height = `${v}px`)
			).then(() => {
				$prevTab.style.opacity = ''
				this.goToTab(index).updateHistory(title)
				this.$wrapper.style.height = ''
			})
		})
	}

	goToTab = index => {
		this.goTo(index)
		return this
	}

	updateHistory = title => {
		if (!this.options.trackHistory) return this
		window.location.hash = title
		return this
	}

	getTab = hash => {
		return this.tabs.find(({ title }) => title === hash)
	}

	/**
		 * Listen to slide changes
		 * @function onChange
		 * @param {Object} details - deconstructed param
		 * @return void
		 */
	onChange = ({ detail }) => {
		const { currentItemIndex } = detail

		this.updatePagerLinks(this.previousIndex, currentItemIndex)
		this.previousIndex = currentItemIndex
	}

	/**
		 * Update the pager elements
		 * @function updatePagerLinks
		 * @param {Number} prev 
		 * @param {Number} next 
		 * @return void
		 */
	updatePagerLinks = (prev, next) => {
		const { pagerActiveClass } = this.options
		const $prev = this.tabs[prev].$btn
		const $next = this.tabs[next].$btn

		DomClass($prev).remove(pagerActiveClass)
		DomClass($next).add(pagerActiveClass)
	}
}
